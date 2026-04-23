import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Offerings from '@/components/sections/Offerings'
import Offers from '@/components/sections/Offers'
import MenuCTA from '@/components/sections/MenuCTA'
import Locations from '@/components/sections/Locations'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Offerings />
        <Offers />
        <MenuCTA />
        <Locations />
      </main>
      <Footer />
    </>
  )
}
