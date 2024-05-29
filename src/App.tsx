import { Container,Divider } from "@chakra-ui/react"
import Header from "./header/Header"
import List from "./list/list"
import Form from "./form/form"

function App() {
  return (
    <Container p="2em">
        <Header></Header>
        <List></List>
        <Divider orientation="horizontal" />
        <Form></Form>
    </Container>
  )
}

export default App
