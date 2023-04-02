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
        'avatar flex flex-shrink-0 items-center justify-center rounded-full border-4 border-fuchsia-500',
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
      <div className="before:animate-opacity after:animate-opacity absolute left-0 top-0 h-full w-full rounded-full bg-fuchsia-500 opacity-[15%]" />
    </div>
  )
}
