import styles from '../styles/Formulario.module.css'
import Cartao from '../components/cartao'
import Link from 'next/link'
import EntradaNumerica from '../components/EntradaNumerica'
import { useState } from 'react'

export default function Formulario() {    
  const [qtdePortas, setQtdePortas] = useState(3)
  const [comPresente, setComPresente] = useState(1)

  return (
    <div className={styles.formulario}>
      <div>
        <Cartao bgcolor="#c0392c">
          <h1 style={{backgroundColor: "#c0392c"}}>Monty Hall</h1>
        </Cartao>
        <Cartao>
          <EntradaNumerica 
            text="Qtde portas?" 
            value={qtdePortas} 
            onChange={novaQtde => setQtdePortas(novaQtde)}
          />
        </Cartao>
      </div>
      <div>
        <Cartao>
        <EntradaNumerica 
            text="Porta com presente?" 
            value={comPresente} 
            onChange={novaPortaComPresente => setComPresente(novaPortaComPresente)}
          />
        </Cartao>
        <Cartao bgcolor="#28a085" >
          <Link href={`/jogo/${qtdePortas}/${comPresente}`} style={{backgroundColor: "#28a085"}}>
            <h2 className={styles.link}>Iniciar</h2>
          </Link>
        </Cartao>
      </div>
    </div>
  )
}
