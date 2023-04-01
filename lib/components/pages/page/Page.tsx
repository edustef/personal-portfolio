import { CustomPortableText } from 'lib/components/shared/CustomPortableText'
import ScrollUpWorkaround from 'lib/components/shared/ScrollUpWorkaround'
import type { PagePayload } from 'types'

export function Page({ data }: { data: PagePayload }) {
  // Default to an empty object to allow previews on non-existent documents
  const { body, overview, title } = data || {}

  return (
    <div>
      <div className="mb-14">
        {/* Header */}

        {/* Body */}
        {body && (
          <CustomPortableText
            paragraphClasses="font-serif max-w-3xl text-gray-600 text-xl"
            value={body}
          />
        )}

        {/* Workaround: scroll to top on route change */}
        <ScrollUpWorkaround />
      </div>
      <div className="absolute left-0 w-screen border-t" />
    </div>
  )
}
