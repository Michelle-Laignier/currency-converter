import { Container, Convert } from "./styles"

import { Input } from "../../components/Input"
import { Select } from "../../components/Select"
import { Button } from "../../components/Button"

const opcoes = [
  { value: 'opcao1', label: 'Opção 1' },
  { value: 'opcao2', label: 'Opção 2' },
  { value: 'opcao3', label: 'Opção 3' },
];

export function Home() {
  return(
    <Container>
      <h1>Conversor de moedas</h1>

      <Convert>
        <div className="inputName">
          <p>Valor</p>
          <Input/>
        </div>

        <div className="inputName">
          <p>De</p>
          <Select options={opcoes}/>
        </div>

        <div className="inputName">
          <p>Para</p>
          <Select options={opcoes}/>
        </div>
      </Convert>

      <Button title="Converter"/>
    </Container>
  )
}