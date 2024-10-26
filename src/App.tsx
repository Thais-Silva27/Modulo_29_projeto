import Header from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'
import { createGlobalStyle } from 'styled-components';

import './global.ts'

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Header />
        <Hero />
        <div className="container">
          <ListaVagas />
        </div>
      </Container>
    </>
  )
}

export default App
