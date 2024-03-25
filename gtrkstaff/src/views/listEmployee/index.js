import React from 'react';
import  Container from 'react-bootstrap/esm/Container';
import {Row} from 'react-bootstrap';
import MenuUser from '../../components/menuUser';
import EmployeeItem from '../../components/employeeItem';
/* eslint-disable */
class ListEmployee extends React.Component {
    render() {
      return (
      <Container>
        <MenuUser/>
        <Row>
          <h1> Список сотрудников!!!</h1>
        </Row>
        <Row>
          <EmployeeItem/>
        </Row>
      </Container>)
    }
  }

  export default ListEmployee;