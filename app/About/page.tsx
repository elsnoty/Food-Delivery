import Founder from '@/Components/AboutPage/Founder/Founder';
import AboutHero from '@/Components/AboutPage/Hero/AboutHero';
import Team from '@/Components/AboutPage/Team/Team';
import TheValues from '@/Components/AboutPage/TheValues/TheValues';
import Instagram from '@/Components/Insagram/Instagram';
import React from 'react'

const About = () => {
  return (
    <div>
      <AboutHero />
      <Founder />
      <Team />
      <TheValues />
      <Instagram />
    </div>
  )
}

export default About;
