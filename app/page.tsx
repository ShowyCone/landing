import Header from './components/Header'
import HeroSection from './components/HeroSection'
import FeaturedItems from './components/FeaturedItems'
import TopSellers from './components/TopSellers'
import CreateSellSteps from './components/CreateSellSteps'
import ActionSection from './components/ActionSection'
import DiscoverItems from './components/DiscoverItems'
import TopCollections from './components/TopCollections'
import TopCollector from './components/TopCollector'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div id='wrapper'>
      <div id='page' className='home-1'>
        <Header />

        <HeroSection />

        <FeaturedItems />

        <TopSellers />

        <CreateSellSteps />

        <ActionSection />

        <DiscoverItems />

        <TopCollections />

        <TopCollector />

        <Footer />
      </div>
    </div>
  )
}
