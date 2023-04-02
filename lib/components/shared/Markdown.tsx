import ReactMarkdown from 'react-markdown'

export default function Markdown({ children }: { children: string }) {
  return (
    <div className="prose prose-sm sm:prose lg:prose-lg xl:prose-2xl prose-ul:text-brand-800 prose-li:marker:text-brand-600">
      <ReactMarkdown>{children}</ReactMarkdown>
    </div>
  )
}
