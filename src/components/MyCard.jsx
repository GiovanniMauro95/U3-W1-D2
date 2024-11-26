import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import libri from "../data/fantasy.json"

function MyCard() {
  
  return (
    <>
{libri.map((libro) => (

    <Card key={libro.asin} style={{ width: '18rem' }} className = "m-2">
      <Card.Img variant="top" src={libro.img} />
      <Card.Body>
        <Card.Title>{libro.title}</Card.Title>
        <Card.Text>
          {libro.category}
        </Card.Text>
        <Card.Text>
          {libro.price}
        </Card.Text>
        <Button variant="primary">Ordina</Button>
      </Card.Body>
    </Card>

))}
</>
  )
}
  


export default MyCard;