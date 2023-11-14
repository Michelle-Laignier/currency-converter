import { Container } from "./styles"

export function Select({ options, ...rest}) {
  return(
    <Container as="select" {...rest}>
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </Container>
  )
}