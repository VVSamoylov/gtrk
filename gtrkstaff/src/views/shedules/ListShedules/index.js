import React from 'react';
import  Container from 'react-bootstrap/esm/Container';
import {Row} from 'react-bootstrap';
import MenuUser from '../../../components/menuUser';
import {WorksheduleItem} from '../../../components/workscheduleItem';
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
          <WorksheduleItem/>
        </Row>
      </Container>)
    }
  }

  export default ListShedules;