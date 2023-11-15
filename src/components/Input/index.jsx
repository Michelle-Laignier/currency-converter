import { Container } from "./styles"

export function Input({...rest}) {
  return(
    <Container type="number" min="1" {...rest}>
      
    </Container>
  )
}