import { previewData } from 'next/headers'

export function getPreviewToken(): string | undefined {
  const preview = previewData() as { token: string } | false
  return preview ? preview.token : undefined
}
