import { Grid } from '@mui/material'
import * as React from 'react'
import Button from '@mui/material/Button'
import SectionContentStyled from './SectionContentStyled'
import SectionTexto from './SectionTexto'
import ButtonSaibaMais from '../Buttons/Button'

const SectionContent = () => {
  return (
    <SectionContentStyled>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <SectionTexto>
            <h1>Benefícios dos Nossos Programas de Treinamento</h1>
            <span>
              Participe de uma plataforma online totalmente profissional,
              social, envolvente e interativa. Obtenha a experiência de
              aprendizado que você merece.
            </span>
          </SectionTexto>
        </Grid>
        <Grid item xs={3} md={4} sm={12}>
          <SectionTexto>
            <h2>Escolha uma Formação Ideal para Você</h2>
            <p>
              Nosso treinamento é projetado para fornecer as habilidades em uma
              abordagem prática. O sucesso dos nossos alunos é o nosso melhor
              trunfo para mostrar a qualidade das nossas Formações.
            </p>
            <ButtonSaibaMais />
          </SectionTexto>
        </Grid>
        <Grid item xs={3} md={4} sm={12}>
          <SectionTexto>
            <h2>Escolha um Curso Individual</h2>
            <p>
              Impulsione sua carreira, alcance resultados e destaque-se no
              mercado de trabalho, matricule-se agora mesmo em um de nossos
              cursos avulsos.
            </p>
            <ButtonSaibaMais />
          </SectionTexto>
        </Grid>
        <Grid item xs={3} md={4} sm={12}>
          <SectionTexto>
            <h2>Conheça Nossos Cursos Gratuitos</h2>
            <p>
              O primeiro passo para uma capacitação de qualidade. Matricule-se
              em um dos nossos cursos gratuitos e conheça nossa metodologia de
              trabalho, nossa didática e nossa plataforma.
            </p>
            <ButtonSaibaMais />
          </SectionTexto>
        </Grid>
      </Grid>
    </SectionContentStyled>
  )
}

export default SectionContent
