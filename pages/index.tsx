import Image, { StaticImageData } from 'next/image'
import { Inter } from 'next/font/google'
import FullScreenCarousel from '@/components/FullScreenCarousel'
import man from "../public/images/man.png"
import bird from "../public/images/bird.png"
import Slide from '@/types'

const slides: Slide[][] = [[
 {image: man, scale: 2},
 {image: bird, scale: 1},
 {image: man, scale: 1},
]]

export default function Home() {
  return (
    <div>
        <div className='text-xl'>
          Above content
        </div>
        <FullScreenCarousel slides={slides}/>
        <div>
          Below content
        </div>

    </div>
  )
}
