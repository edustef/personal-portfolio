import ImageBox from 'lib/components/shared/ImageBox'
import { cn } from 'lib/utils/cn'
import { Image } from 'sanity'

type Props = {
  className?: string
  image: Image
}

export default function Avatar({ image, className }: Props) {
  return (
    <div
      className={cn(
        'avatar border-brand-500 flex h-28 w-28 flex-shrink-0 items-center justify-center rounded-full border-4',
        className
      )}
    >
      <ImageBox
        classesWrapper="rounded-full"
        image={image}
        width={667}
        height={667}
        alt="Profile picture"
      />
      <div className="bg-brand-500 before:animate-opacity after:animate-opacity absolute left-0 top-0 h-full w-full rounded-full opacity-[15%]" />
    </div>
  )
}
