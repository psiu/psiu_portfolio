import './index.css'
import Layout from './components/Layout'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Experience from './components/Experience'
import MoreInfo from './components/MoreInfo'
import ConstructionOverlay from './components/ConstructionOverlay'

function App() {
  return (
    <Layout>
      <ConstructionOverlay />
      <Hero />
      <Skills />
      <Experience />
      <MoreInfo />
    </Layout>
  )
}

export default App
