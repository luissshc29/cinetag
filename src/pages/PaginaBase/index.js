import { Outlet } from 'react-router-dom'
import Cabecalho from '../../components/Cabecalho'
import Rodape from '../../components/Rodape'
import FavoritosProvider from '../../contextos/Favoritos'
import Container from '../../components/Container'


export default function PaginaBase() {
  return (
    <main>
        <Cabecalho/>
        <FavoritosProvider>
            <Container>
                <Outlet/>
            </Container>
        </FavoritosProvider>
        <Rodape/>
    </main>
  )
}
