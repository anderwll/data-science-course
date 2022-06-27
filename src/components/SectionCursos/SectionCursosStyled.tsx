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
  padding: 50px;

  h1 {
    margin-bottom: 20px;
  }

  h2 {
    margin-bottom: 10px;
  }
`

export default SectionCursosStyled
