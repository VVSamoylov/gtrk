import React  from "react";
import Container from "react-bootstrap/esm/Container";
import MenuUser from "../../components/menuUser";
import {Form, Col, Row} from 'react-bootstrap/'
import './style.css'
class UploadEmployee extends React.Component{
    render() {
        return (
        <Container>
          <MenuUser/>
          <h1> Загрузка сотрудников!!</h1>
          <Row>
          <Col></Col>
          <Form.Group controlId="formFileLg" className="mb-3 control50">
                <Form.Label>Загрузить Эксель файл </Form.Label>
                <Form.Control type="file" size="lg" />
          </Form.Group>
          <Col></Col>
          </Row>
        </Container>)
      }
}

export default UploadEmployee;