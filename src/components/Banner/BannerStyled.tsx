import styled from 'styled-components'
import img1 from '../../assets/img1.png'

const BannerStyled = styled.div`
  width: 100%;
  height: 93vh;
  color: #333;
  background-image: url(${img1});
  background-size: cover;
  display: flex;
  justify-content: start;
  align-items: center;

  h1 {
    font-size: 50px;
  }
`

export default BannerStyled
