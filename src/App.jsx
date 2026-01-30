import Hero from './components/Hero'
import FeaturesBadges from './components/FeaturesBadges'
import EscrowSection from './components/EscrowSection'
import WhyZenland from './components/WhyZenland'
import PerspectiveTabs from './components/PerspectiveTabs'
import DisputeResolution from './components/DisputeResolution'
import './App.css'

function App() {
  return (
    <div className="app">
      <main>
        <Hero />
        <FeaturesBadges />
        <EscrowSection />
        <WhyZenland />
        <PerspectiveTabs />
        <DisputeResolution />
      </main>
    </div>
  )
}

export default App
