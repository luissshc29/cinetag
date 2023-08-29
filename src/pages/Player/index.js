import styles from './Player.module.css'
import Banner from '../../components/Banner'
import Titulo from '../../components/Titulo'
import { useParams } from 'react-router-dom'
import NaoEncontrada from '../NaoEncontrada'
import { useEffect, useState } from 'react'
import axios from 'axios'
import icone from '../../components/Card/favoritar.png'
import Card from '../../components/Card'

export default function Player() {

    const [filme, setFilme] = useState()
    const parametros = useParams()

    const options = {
        method: 'GET',
        url: `https://moviesdatabase.p.rapidapi.com/titles/${parametros.id}`,
        headers: {
          'X-RapidAPI-Key': '51c6cbdf56msh5e17b2bf6f56dd9p1b6996jsn7c7441817153',
          'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
        }
      };
      
    useEffect(() => {
        axios.request(options)
        .then(resposta => setFilme(resposta.data.results))
        .catch(erro => console.log(erro))
    },[])

    if(!filme) {
        return <NaoEncontrada/>
    }
    
    return (
        <div className={styles.player}>
            <Banner imagem="player" />
            <Titulo>
                <h1>{filme.originalTitleText.text}</h1>
            </Titulo>
            <Card {...filme} originalTitleText=''/>
        </div>
    )
}

