import { useEffect, useState } from 'react'
import Porta from '../../../components/Porta'
import criarPortas, { atualizarPortas } from '../../../functions/portas'
import styles from '../../../styles/Jogo.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function jogo() {
    const router = useRouter()

    const [valido, setValido] = useState(false)
    const [portas, setPortas] = useState([])

    useEffect(() => {
        const portas = +router.query.portas
        const presente = +router.query.presente 

        const qtdePortasValida = portas >= 3 && portas <= 10
        const presenteValido = presente >= 1 && presente <= portas

        setValido(qtdePortasValida && presenteValido)

    }, [portas])

    useEffect(() => {
        const portas = +router.query.portas
        const presente = +router.query.presente 
        setPortas(criarPortas(portas, presente))
    }, [router?.query])

    function renderizarPortas() {
        return valido && portas.map(porta => {
            return <Porta key={porta.numero} 
            value={porta} 
            onChange={novaPorta => setPortas(
                atualizarPortas(portas, novaPorta))} />
    })
  }
    
  return (
    <div id={styles.jogo}>
        <div className={styles.portas}>
            {valido ? 
                renderizarPortas() :
                <h2>Valores inválidos</h2> }
        </div>
        <div className={styles.botoes}>
            <Link href="/">
                <button>Reiniciar jogo</button>
            </Link>
        </div>
    </div>
  )
}
