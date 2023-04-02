import { CustomPortableText } from 'lib/components/shared/CustomPortableText'
import ImageBox from 'lib/components/shared/ImageBox'
import { getCertificates } from 'lib/sanity/sanity.client'
import { CertificateType } from 'lib/sanity/sanity.queries'
import Link from 'next/link'

export async function Certificates() {
  const data = await getCertificates()
  return (
    <div className="flex flex-col gap-6">
      {data.map((certificate) => (
        <Certificate key={certificate._id} data={certificate} />
      ))}
    </div>
  )
}

export function Certificate({ data }: { data: CertificateType }) {
  console.log({ url: data.link })
  const dateIssuedText = new Date(data.dateIssued).toLocaleDateString('en', {
    month: 'short',
    year: 'numeric',
  })

  return (
    <Link href={data.link} className="flex flex-col gap-6">
      <div className="flex flex-col gap-6">
        <h1 className="text-2xl font-bold">{data.title}</h1>
        <div>{dateIssuedText}</div>
        <CustomPortableText value={data.description} />
      </div>
    </Link>
  )
}
