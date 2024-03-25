import React from 'react';
import  Container from 'react-bootstrap/esm/Container';
import {Row} from 'react-bootstrap';
import MenuUser from '../../../components/menuUser';
import DepartamentItem from '../../../components/departamentItem';
/* eslint-disable */
class ListDepartament extends React.Component {
    render() {
      return (
      <Container>
        <MenuUser/>
        <Row>
          <h1> Список отделов!!!</h1>
        </Row>
        <Row>
          <DepartamentItem/>
        </Row>
      </Container>)
    }
  }

  export default ListDepartament;