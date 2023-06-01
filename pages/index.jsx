import Porta from "@/components/Porta"
import Presente from "@/components/presente"

export default function Home() {
  return (
    <div style={{display: "flex"}}>
      <Porta selecionada={true} />
      <Porta selecionada={false} />
    </div>
  )
}


/* export default function Home() {
  return (
    <div style={{display: "flex"}}>
      <Porta selecionada /> COMO NAO É TYPESCRIPT, TAMBÉM PODERIA INDICAR A PROPRIEDADE SOMENTE ASSIM INCLUINDO O NOME. QUANDO TEM SIGNIFICA QUE É TRUE E QUANDO NAO SIGNIFICA QUE É FALSE
      <Porta />
    </div> 
*/ 