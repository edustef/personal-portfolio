import { z } from 'zod'

const server = z.object({
  NODE_ENV: z.enum(['development', 'test', 'production']),
})

const client = z.object({
  NEXT_PUBLIC_GRAPHQL_API: z.string(),
})

const processEnv = {
  NODE_ENV: process.env.NODE_ENV,
  NEXT_PUBLIC_GRAPHQL_API: process.env.NEXT_PUBLIC_GRAPHQL_API,
}

const isServer = typeof window === 'undefined'

const merged = server.merge(client)
const parsed = isServer
  ? merged.safeParse(processEnv)
  : client.safeParse(processEnv)

if (parsed.success === false) {
  console.error('❌ Invalid environment variables:\n', parsed.error.format())
  throw new Error('Invalid environment variables')
}

// proxy allows us to remap the getters
export const env = new Proxy(parsed.data, {
  get(target, prop) {
    if (typeof prop !== 'string') return undefined
    // on the client we only allow NEXT_PUBLIC_ variables
    if (!isServer && !prop.startsWith('NEXT_PUBLIC_'))
      throw new Error(
        '❌ Attempted to access serverside environment variable on the client'
      )
    return target[prop as keyof typeof target]
  },
})
