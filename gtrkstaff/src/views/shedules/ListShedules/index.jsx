import React from 'react';
import  Container from 'react-bootstrap/esm/Container';
import {Row} from 'react-bootstrap';
import MenuUser from '../../components/menuUser';
import {SheduleItem} from '../../components/WorksheduleItem';
/* eslint-disable */
class ListShedules extends React.Component {
    render() {
      return (
      <Container>
        <MenuUser/>
        <Row>
          <h1> Графики работы!!!!</h1>
        </Row>
        <Row>
          <SheduleItem/>
        </Row>
      </Container>)
    }
  }

  export default ListShedules;