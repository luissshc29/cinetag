import { useState } from 'react'
import styles from './NaoEncontrada.module.css'

export default function NaoEncontrada() {

    const [loading, setLoading] = useState('Loading ...')

    setTimeout(() => setLoading(''), 2000)

    if (loading !== '') {
        return (
            <div className={styles.loading}>{loading}</div>
        )
    }

    return (
        <section className={styles.container}>
            <h2>Ops!</h2>
            <p>O conteúdo que você procura não foi encontrado :(</p>
        </section>
    )
}
