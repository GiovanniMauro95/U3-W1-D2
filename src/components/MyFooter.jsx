import { Container, } from 'react-bootstrap'

const MyFooter = (props) => {

  return (
    <footer expand="lg" bg="dark" data-bs-theme="dark" className = "d-flex fixed-bottom justify-content-center bg-dark text-white">
      <Container  classname = "row" fluid={props.isFluid}>
        <div className = "col-6  ">
        <a href="#" className='text-decoration-none text-white mx-5'>EPICODE</a>
        <a href="#" className='text-decoration-none text-white mx-5'>2024</a>
        <a href="#" className='text-decoration-none text-white mx-5'>Milano</a>
        </div>
      </Container>
    </footer>
  )
}

export default MyFooter
