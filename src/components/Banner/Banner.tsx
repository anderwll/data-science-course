import * as React from 'react'
import Button from '@mui/material/Button'
import { ButtonGroup } from '@mui/material'
import BannerStyled from './BannerStyled'
import ContainerTexto from './ContainerTexto'

const Banner: React.FC = () => {
  return (
    <BannerStyled>
      <ContainerTexto>
        <h1>Sua Carreira Profissional Elevada a Outro Nível!</h1>
        <ButtonGroup
          size="large"
          variant="outlined"
          aria-label="outlined button group"
        >
          <Button color="success">COMECE AGORA</Button>
          <Button color="warning">CONHEÇA NOSSOS CURSOS</Button>
        </ButtonGroup>
      </ContainerTexto>
    </BannerStyled>
  )
}

export default Banner
