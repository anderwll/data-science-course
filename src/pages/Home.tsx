import React from 'react'
import Banner from '../components/Banner/Banner'
import MenuSuperior from '../components/MenuSuperior/MenuSuperior'
import SectionContent from '../components/SectionContent/SectionContent'
import SectionCursos from '../components/SectionCursos/SectionCurso'

const Home: React.FC = () => {
  return (
    <>
      <MenuSuperior />
      <Banner />
      <SectionContent />
      <SectionCursos />
    </>
  )
}

export default Home
