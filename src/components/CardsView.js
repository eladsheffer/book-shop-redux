import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Row, Col } from 'react-bootstrap';
import Buttons from './Buttons';

function CardsView(props) {

      let books = props.books;
      let bookCards = books.map((book) => (
        <Col sm="4" className="actor">
          <Card >
            <Card.Img variant="top" src={book.imgUrl} width={20} height={300} />
            <Card.Body>
              <Card.Title>
                {book.title}
              </Card.Title>
              <Card.Text>
                id: {book.id}
              </Card.Text>
              <Card.Text>
                price: {book.price}
              </Card.Text>
              <Buttons bookData={book}></Buttons>
            </Card.Body>
          </Card>
        </Col>
      ));
  
      return (
        <div>
          <Row>{bookCards}</Row>
        </div>
      );

  }

  export default CardsView;