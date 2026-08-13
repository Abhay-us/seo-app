import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import About from './components/About/About'
import Service from './components/Service/Service'
import ServiceDetails from './components/Service/ServiceDetails'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Project from './components/Project/Project'
import ProjectDetails from './components/Project/ProjectDeatils'
import Faqs from './components/Pages/Faqs'
import Price from './components/Pages/Prices'
import Features from './components/Pages/Features'
import OurTeam from './components/Pages/OurTeam'
import Testimonials from './components/Pages/Testimonials'
import ErrorPage from './components/Pages/ErrorPage'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          {/* service */}
          <Route path="/service" element={<Service />} />
          <Route path="/service/details" element={<ServiceDetails />} />

          {/* project */}
          <Route path="/projects" element={<Project />} />
          <Route path="/project/details" element={<ProjectDetails />} />

          {/* pages */}
          <Route path="/page/faqs" element={<Faqs />} />
          <Route path="/page/price" element={<Price />} />
          <Route path="/page/feature" element={<Features />} />
          <Route path="/page/ourteam" element={<OurTeam />} />
          <Route path="/page/testinomials" element={<Testimonials />} />
          <Route path="/page/errorpage" element={<ErrorPage />} />
          {/* Contact */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App