import React from 'react';
import  Container from 'react-bootstrap/esm/Container';
import {Row} from 'react-bootstrap';
import MenuUser from '../../../components/menuUser';
import JobItem from '../../../components/jobItem';
/* eslint-disable */
class ListDepartament extends React.Component {
    render() {
      return (
      <Container>
        <MenuUser/>
        <Row>
          <h1> Список должностей!!!</h1>
        </Row>
        <Row>
          <JobItem/>
        </Row>
      </Container>)
    }
  }

  export default ListDepartament;