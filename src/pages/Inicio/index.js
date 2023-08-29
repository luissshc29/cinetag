import Card from "../../components/Card";
import styles from './Inicio.module.css'
import Banner from '../../components/Banner'
import Titulo from '../../components/Titulo'
import { useEffect, useState } from "react";
import axios from "axios";

export default function Inicio() {

    const urlBase = "https://moviesdatabase.p.rapidapi.com/titles/random" 
    const [videos, setVideos] = useState([])

    let options = {}

    function buscaResultados (urlFonte) {

        options = {         
            method: 'GET',
            url: urlFonte,
            params: {
                list: 'top_boxoffice_200'
              },
            headers: {
            'X-RapidAPI-Key': '51c6cbdf56msh5e17b2bf6f56dd9p1b6996jsn7c7441817153',
            'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
            }
        }

        axios.request(options)
            .then(resposta => {
                let resultados = resposta.data
                setVideos(resultados.results)
            })
            .catch(erro => console.log(erro))
    }

    useEffect(() => {
        buscaResultados(urlBase)
    }, [])

    function alteraPagina () {
        buscaResultados(urlBase)
        window.scrollTo(0, 0)
    }

    return (
        <>
            <Banner imagem="home" />
            <Titulo>
                <h1>Um lugar para guardar seus vídeos e filmes!</h1>
            </Titulo>
            <section className={styles.container}>
                {videos.map(video => <Card {...video} key={video.id} />)}
            </section>
            <button onClick={() => alteraPagina()}>Ver mais</button>
        </>
    )
}
