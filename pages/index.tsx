import Image from 'next/image'
import { Inter } from 'next/font/google'
import FullScreenCarousel from '@/components/FullScreenCarousel'
import man from "../public/images/man.png"
import bird from "../public/images/bird.png"

const slides = [
  [man, bird],
  //["https://placehold.co/1920x1080", "https://placehold.co/1920x1080", "https://placehold.co/1920x1080"],
]

export default function Home() {
  return (
    <div>
        <FullScreenCarousel slides={slides}/>
    </div>
  )
}
