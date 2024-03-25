import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import MenuUser from '../../components/menuUser';
/* eslint-disable */
class Home extends React.Component {
    render() {
      return (
      <Container>
        <MenuUser/>
        <h1> начальная страница!!</h1>
      </Container>)
    }
  }

  export default Home;