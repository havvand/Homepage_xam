import Card from 'react-bootstrap/Card';
import {useState, useEffect} from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import facade from '../util/apifacade';

function TextExample() {

  const [treatment, setTreatment] = useState(null)
  const cards = document.querySelectorAll('.card');
  
  useEffect(() => {
    facade.fetchData("treatment/")
      .then(data => setTreatment(data))
      .catch(err => console.log("Ups: " + err))
  }, [])

  useEffect(() => {
    removeActiveClasses()
  })

  if(!treatment) {
    return "Loading..."
  }

  cards.forEach(card => {
    card.addEventListener('click', 
    () => {
      removeActiveClasses()
      card.classList.add('active')
    }) 
  })

  function removeActiveClasses() {
    cards.forEach(card => {
        card.classList.remove('active')
    })
}

  console.log("TRATMENT", treatment)

  return (
    <div className='card-Container'>
      {treatment.map((t) => (
        <Card key={(t.id)} className="card">
          <Card.Img variant="top" src="../public/picOne.jpg" />
          <Card.Body className='card-body-description'>
            <Card.Title>{t.treatmentName}</Card.Title>
            <Card.Text>
            {t.treatmentDescription}
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item><p className='p-price'>Pris</p> <p>{t.treatmentPrice} dkr</p></ListGroup.Item>
            <ListGroup.Item><p className='p-duration'>Varighed</p> <p>{t.treatmentDuration} min.</p></ListGroup.Item>
            <ListGroup.Item>{t.id}</ListGroup.Item>
          </ListGroup>
          <Card.Body className="links">
            <Card.Link href="#">Anmod om tid</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Card>
      ))}      
    </div>
  );
}

export default TextExample;