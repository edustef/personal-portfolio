import ReactMarkdown from 'react-markdown'

export default function Markdown({ children }: { children: string }) {
  return (
    <div className="prose prose-sm sm:prose lg:prose-lg xl:prose-2xl prose-ul:text-violet-950 prose-li:marker:text-violet-700">
      <ReactMarkdown>{children}</ReactMarkdown>
    </div>
  )
}
