import { AspectRatio, Image } from "@agniflow-ui/react"

export const AspectRatioWithImage = () => {
  return (
    <AspectRatio maxW="400px" ratio={4 / 3}>
      <Image src="https://bit.ly/naruto-sage" alt="naruto" objectFit="cover" />
    </AspectRatio>
  )
}
