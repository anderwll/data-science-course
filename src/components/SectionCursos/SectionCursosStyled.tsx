import styled from 'styled-components'
import img2 from '../../assets/img2.png'

const SectionCursosStyled = styled.div`
  width: 100%;
  height: 100vh;
  color: #333;
  background-image: url(${img2});
  background-size: cover;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  padding: 50px;

  h1 {
    margin-bottom: 20px;
    font-size: 50px;
  }

  h3 {
    margin-bottom: 35px;
  }
`

export default SectionCursosStyled
