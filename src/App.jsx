import { useState } from 'react'
import './App.css'
import Navbar from './assets/components/header'
import HeroSection from './assets/components/HeroSection'
import JobCards from './assets/components/JobCards'
import JobApplicationSection from './assets/components/JobApplicationSection'
import ContactForm from './assets/components/ContactForm'
import Footer from './assets/components/footer'


function App() {

  return (
    <>
      <Navbar />

      <HeroSection />

<JobCards />

<JobApplicationSection />

<ContactForm />

<Footer />  

    </>
    

  )
}

export default App
