import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { Container, Row, Col } from "react-bootstrap"
import MyNav from "./components/MyNav"
import MyFooter from "./components/MyFooter"
import MyAlert from "./components/MyAlert"
import MyCard from "./components/MyCard"

function App() {
  return (
    <div className="App bg-success">
      <header>
        <MyNav subtitle="Pastasciutte sul web" isFluid={true} />
      </header>
      <main>
        <MyAlert />
        <Container>
          <Row className="justify-content-center mt-3">
            <MyCard />
          </Row>
        </Container>
        <MyFooter />
      </main>
    </div>
  )
}

export default App
