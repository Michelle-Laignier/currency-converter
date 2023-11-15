import { useState } from "react" 
import { Container, Convert, Result } from "./styles"

import { Input } from "../../components/Input"
import { Select } from "../../components/Select"
import { Button } from "../../components/Button"

const selectOne = [
  { value: 'USD', label: 'Dólar Americano (USD)' },
  { value: 'BRL', label: 'Real Brasileiro (BRL)' },
  { value: 'EUR', label: 'Euro (EUR)' },
  { value: 'GBP', label: 'Libra Esterlina (GBP)' },
  { value: 'CHF', label: 'Franco Suíço (CHF)' },
  { value: 'ARS', label: 'Peso Argentino (ARS)' },
  { value: 'CLP', label: 'Peso Chileno (CLP)' },
  { value: 'JPY', label: 'Iene Japonês (JPY)' },
  { value: 'RUB', label: 'Rublo Russo (RUB)' },
  { value: 'CAD', label: 'Dólar Canadense (CAD)' },
  { value: 'AUD', label: 'Dólar Australiano (AUD)' },
  { value: 'CNY', label: 'Yuan Chinês (CNY)' },
];

const selectTwo = [
  { value: 'BRL', label: 'Real Brasileiro (BRL)' },
  { value: 'USD', label: 'Dólar Americano (USD)' },
  { value: 'EUR', label: 'Euro (EUR)' },
  { value: 'GBP', label: 'Libra Esterlina (GBP)' },
  { value: 'CHF', label: 'Franco Suíço (CHF)' },
  { value: 'ARS', label: 'Peso Argentino (ARS)' },
  { value: 'CLP', label: 'Peso Chileno (CLP)' },
  { value: 'JPY', label: 'Iene Japonês (JPY)' },
  { value: 'RUB', label: 'Rublo Russo (RUB)' },
  { value: 'CAD', label: 'Dólar Canadense (CAD)' },
  { value: 'AUD', label: 'Dólar Australiano (AUD)' },
  { value: 'CNY', label: 'Yuan Chinês (CNY)' },
];

export function Home() {
  const [value, setValue] = useState(1)
  const [currencyA, setCurrencyA] = useState("Dólar Americano")
  const [currencyB, setCurrencyB] = useState("Real Brasileiro")
  const [valueConverted, setValueConverted] = useState("")
  
  function changeValue(event) {
    setValue(event.target.value)
  }

  function changeOptionA(event) {
    setCurrencyA(event.target.value)
  }

  function changeOptionB(event) {
    setCurrencyB(event.target.value)
  }

  async function convert() {
    const selectA = document.querySelector(".selectA")
    const selectB = document.querySelector(".selectB")
    
    const link = `https://economia.awesomeapi.com.br/last/${selectA.value}-${selectB.value}`

    try {
      if(value <= 0) {
        return
      }

      if(selectA.value === selectB.value) {
        return
      }

      const response = await fetch(link)
      const data = await response.json()

      // acessar as chaves pra obter o valor do par atual dinamicamente
      const currencyPair = Object.keys(data)[0];
      const result = (data[currencyPair].codein + " " + (value *  data[currencyPair].bid))
      setValueConverted(result)

    } catch (error) {
      return
    }
  }

  return(
    <Container>
      <h1>Conversor de moedas</h1>

      <Convert>
        <div className="inputName">
          <p>Valor</p>
          <Input value={value} onChange={changeValue}/>
        </div>

        <div className="inputName">
          <p>De</p>
          <Select options={selectOne} value={currencyA} onChange={changeOptionA} className="selectA"/>
        </div>

        <div className="inputName">
          <p>Para</p>
          <Select options={selectTwo} value={currencyB} onChange={changeOptionB} className="selectB"/>
        </div>
      </Convert>

      <Button title="Converter" onClick={convert}/>

      <Result>
        <p>{valueConverted}</p>
      </Result>
    </Container>
  )
}