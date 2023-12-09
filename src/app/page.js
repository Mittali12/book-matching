
import HeroSection from '@/components/HeroSection'
import Navbar from '@/components/Navbar'
import Result from '@/components/Result'
export default function Home() {
  return (
    <div className='flex flex-col gap-10 w-full min-h-screen h-auto bg-white pb-10 relative'>
      <Navbar />
      <HeroSection />
    </div>
  )
}
