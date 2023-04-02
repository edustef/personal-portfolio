import { PortableText, PortableTextComponents } from '@portabletext/react'
import ImageBox from 'lib/components/shared/ImageBox'
import { Image, PortableTextBlock } from 'sanity'

export function CustomPortableText({
  paragraphClasses,
  value,
}: {
  paragraphClasses?: string
  value: PortableTextBlock[]
}) {
  const components: PortableTextComponents = {
    block: {
      normal: ({ children }) => {
        return <p className={paragraphClasses}>{children}</p>
      },
    },
    marks: {
      link: ({ children, value }) => {
        return (
          <a
            className="underline transition hover:opacity-50"
            href={value?.href}
            rel="noreferrer noopener"
          >
            {children}
          </a>
        )
      },
    },
    types: {
      image: ({
        value,
      }: {
        value: Image & { alt?: string; caption?: string }
      }) => {
        return (
          <div className="my-6 space-y-2">
            <ImageBox
              image={value}
              alt={value.alt}
              classesWrapper="relative aspect-[16/9]"
            />
            {value?.caption && (
              <div className="font-sans text-sm">{value.caption}</div>
            )}
          </div>
        )
      },
    },
  }

  return (
    <div className="prose prose-p:text-violet-950 prose-ul:text-violet-950 prose-li:list-image-[url(/pointing-right.svg)] max-w-none">
      <PortableText components={components} value={value} />
    </div>
  )
}
