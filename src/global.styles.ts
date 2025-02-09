import { createGlobalStyle } from 'styled-components'

export const cores = {
  darkFundo: '#001428',
  ligthFundo: '#fcfcfc',
  navBar: '#FF4000',
  cardColor: '#001428',
  textColor: '#fcfcfc',
  foterColor: 'rgba(255, 106, 0, 0.5)',
}

export const GlobalStyle = createGlobalStyle`
  body {
    border: 0;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: ${cores.darkFundo};
    color: ${cores.textColor};
    font-family: 'Poppins', sans-serif;
    text-decoration: none;
  }

  &.container {
    display: block;
    margin: 0 auto;
    max-width: 800px;
    width: 100%;
    height: 100vh;

    @media (max-width: 768px) {
        height: 740px;
    }
  }
`
