import './index.css'
import Layout from './components/Layout'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Experience from './components/Experience'
import MoreInfo from './components/MoreInfo'

function App() {
  return (
    <Layout>
      <Hero />
      <Skills />
      <Experience />
      <MoreInfo />
    </Layout>
  )
}

export default App
