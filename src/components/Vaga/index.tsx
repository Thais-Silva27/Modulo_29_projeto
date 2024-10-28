import { VagaTitulo, VagaLink, Job } from './Vaga.module'

type Props = {
  titulo: string
  localizacao: string
  nivel: string
  modalidade: string
  salarioMin: number
  salarioMax: number
  requisitos: string[]
}

const Vaga = (props: Props) => (
  <Job>
    <VagaTitulo>{props.titulo} </VagaTitulo>
    <li>Localização: {props.localizacao}</li>
    <li>Senioridade: {props.nivel}</li>
    <li>Tipo de contratação: {props.modalidade}</li>
    <li>
      Salário: {props.salarioMin} - {props.salarioMax}
    </li>
    <li>Requisitos: {props.requisitos.join(', ')} </li>
    <VagaLink href="#">Ver detalhes e candidatar-se</VagaLink>
  </Job>
)

export default Vaga
