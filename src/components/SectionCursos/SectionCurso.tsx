import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material'
import * as React from 'react'
import ButtonSaibaMais from '../Buttons/Button'
import SectionCursosStyled from './SectionCursosStyled'
/* import SectionCursosStyled from './SectionCursosStyled' */
import imgCientista from '../../assets/imgCientistaDados.jpg'
import imgInteligencia from '../../assets/inteligenciaArtificial.jpg'
import imgEngenheiroDados from '../../assets/engenharioDados.jpg'
import imgArquitetoDados from '../../assets/arquitetoDados.jpg'
import imgMedicina from '../../assets/imgMedicina.jpg'
import imgAnalistaDados from '../../assets/imgAnalistaDados.jpeg'
import ContainerCursosStyled from './ContainerCursos'

const SectionCursos = () => {
  return (
    <SectionCursosStyled>
      <h3>ESCOLHA</h3>
      <h1>A Formação Certa para Você</h1>
      <h3>Torne-se um expert e aumente sua empregabilidade!</h3>
      <ContainerCursosStyled>
        <Card
          sx={{
            maxWidth: 300,
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={imgCientista}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Formação Cientista de Dados 3.0
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Carga horária: 452 horas.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <ButtonSaibaMais />
          </CardActions>
        </Card>
        <Card
          sx={{
            maxWidth: 300,
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={imgInteligencia}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Formação Inteligência Artificial 3.0
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Carga horária: 448 horas.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <ButtonSaibaMais />
          </CardActions>
        </Card>
        <Card
          sx={{
            maxWidth: 300,
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={imgEngenheiroDados}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Formação Engenheiro de Dados 2.0
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Carga horária: 304 horas.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <ButtonSaibaMais />
          </CardActions>
        </Card>
      </ContainerCursosStyled>
      <ContainerCursosStyled>
        <Card
          sx={{
            maxWidth: 300,
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={imgArquitetoDados}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Formação Arquiteto de Dados
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Carga horária: 224 horas.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <ButtonSaibaMais />
          </CardActions>
        </Card>
        <Card
          sx={{
            maxWidth: 300,
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={imgAnalistaDados}
              alt="cientista dados"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Formação Analista de Dados
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Carga horária: 248 horas.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <ButtonSaibaMais />
          </CardActions>
        </Card>
        <Card
          sx={{
            maxWidth: 300,
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={imgMedicina}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Formação IA Aplicada à Medicina
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Carga horária: 300 horas.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <ButtonSaibaMais />
          </CardActions>
        </Card>
      </ContainerCursosStyled>
    </SectionCursosStyled>
  )
}

export default SectionCursos
