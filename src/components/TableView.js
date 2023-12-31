import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'react-bootstrap';
import Buttons from './Buttons';
import { useSelector } from 'react-redux/es/hooks/useSelector';


function TableView() {

  const booksToDisplay = useSelector((state) => state.books.value.booksToDisplay);
  let bookRows = booksToDisplay.map((book) => (
    <tr>
      <td>{book.id}</td>
      <td>{book.title}</td>
      <td>{book.price}</td>
      <td>
        <Buttons bookData={book} ></Buttons>
      </td>
    </tr>
  ));

  return (
    <div>
      <Table striped bordered hover size="sm" border={1}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {bookRows}
        </tbody>
      </Table>
    </div>
  );
}


export default TableView;