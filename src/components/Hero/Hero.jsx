
import HeroContent from './HeroContent/HeroContent'
import HeroSlider from './HeroSlider/HeroSlider'

export default function Hero() {
  return (
    <div className='relative'>
      <HeroSlider/>
      <div className='absolute top-0 bottom-0 left-0 right-0 z-10 bg-gradient-to-r from-[#1e293bb0] to-[#020617b3]'>
      <HeroContent/>
      </div>
    </div>
  )
}
