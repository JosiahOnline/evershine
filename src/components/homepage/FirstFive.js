import React from 'react';
import {Card, Button} from 'react-bootstrap';
// import productDetails from '../products/productDetails';

const FirstFive = ({ id, title, link, image }) => {
  // const product = () => {
  //   console.log({title});
  // }
    function productInfo(link) {
      alert(link);
    }
  
  return (
      <Card key={id}>
          <Card.Img
              variant="top"
              src={image}/>
          <Card.Body>
              <Card.Title className="cardTitle">{title}</Card.Title>
              <Button href={link} onClick={() => productInfo(link)}>Details</Button>
          </Card.Body>
      </Card>
  )
}


export default FirstFive;