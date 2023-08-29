import styles from './Favoritos.module.css'
import Banner from '../../components/Banner'
import Titulo from '../../components/Titulo'
import Card from '../../components/Card'
import { useFavoritosContext } from '../../contextos/Favoritos'

export default function Favoritos() {

  const {favorito} = useFavoritosContext()
  console.log(favorito)

  return (
    <>
      <Banner imagem="favoritos"/>
      <Titulo>
          <h1>Meus Favoritos</h1>
      </Titulo>
      <section className={styles.container}>

        {favorito.map((fav) => <Card {...fav} key={fav.id}/> )}
        
      </section>
    </>
  )
}