import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { Container, Row, Form } from "react-bootstrap"
import MyNav from "./components/MyNav"
import MyFooter from "./components/MyFooter"
import MyAlert from "./components/MyAlert"
import BookList from "./components/BookList"
import fantasy from "./data/fantasy.json"
import { useState } from "react"

const books = [...fantasy]

function App() {
  const [searchTerm, setSearchTerm] = useState("")
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value)
  }

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="App bg-success">
      <header>
        <MyNav subtitle="EpiLibreria" isFluid={true} />
      </header>
      <main>
        <div>
          <MyAlert />
        </div>
        <Container>
          <Row className="justify-content-center mt-3">
            <Form.Group className="mb-3" controlId="searchInput">
              <Form.Label>Trova il tuo Libro!</Form.Label>
              <Form.Control
                type="text"
                placeholder="Inserisci un titolo"
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </Form.Group>
          </Row>
          <Row className="justify-content-center mt-3">
            <BookList books={filteredBooks} />
          </Row>
        </Container>
        <MyFooter />
      </main>
    </div>
  )
}

export default App
