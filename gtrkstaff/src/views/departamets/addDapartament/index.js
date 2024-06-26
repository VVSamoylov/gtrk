import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/Row'
import InputGroup from 'react-bootstrap/InputGroup'
import Form from 'react-bootstrap/Form'
import  './style.css'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from "react-bootstrap/esm/Button";
import Col from 'react-bootstrap/Col'
import MenuUser from "../../../components/menuUser";
import { connect } from 'react-redux';
import {addDept} from '../../../entity/departament';

class AddDepartament extends React.Component {
    constructor(props){
      super(props);
      this.state ={
        depart: {
          id: '',
          departName: '',
          boss: ''
        }
      }
      
      this.handleCheck = this.handleCheck.bind(this);
      this.handleClose = this.handleClose.bind(this);
      this.handleSave = this.handleSave.bind(this);
      this.departName = React.createRef();
      this.id = React.createRef();
      this.boss = React.createRef();
    }

    handleSave(payload){
      //console.log(this.state.depart)
      this.props.addDept({ departName:this.state.depart.departName, boss: this.state.depart.boss, id: new Date().getTime()});
      this.setState({depart : {
        id: '',
        departName: '',
        boss: ''
      }});
      this.departName.current.value ='';
      this.boss.current.value = '';
      
    }
    handleCheck(event){
      //let id = new Date().getTime;
      this.setState({
        depart:{...this.state.depart, [event.target.name]: event.target.value}
      })
    }
    handleClose(){
      //alert(this.state.depart)
      console.log(this.state.depart)
    }

    render() {
      
      return (
        <Container>
        <MenuUser/>
          <h1>Добавление нового отдела</h1>
          <Row>
            <Col></Col>
            <InputGroup className="mb-3">
              <InputGroup.Text >
                Название
              </InputGroup.Text>
              <Form.Control ref={this.departName}
                aria-label="Название отдела"
                aria-describedby="departName"
                name="departName"
                onChange={this.handleCheck}
              />
            </InputGroup>
            <Col></Col>
          </Row>
          <Row>
            <Col></Col>
            <InputGroup className="mb-3">
              <InputGroup.Text >
                Руководитель
              </InputGroup.Text>
              <Form.Control ref={this.boss}
                aria-label="Руководитель"
                aria-describedby="boss"
                name="boss"
                onChange={this.handleCheck}
              />
            </InputGroup>
            <Col></Col>
          </Row>
          <Row>
            <Col></Col>
            <ButtonGroup aria-label="Departament added">
              <Button onClick={this.handleSave} variant="primary">Сохранить</Button>
              <Button onClick={this.handleClose} variant="danger">Отмена</Button>
            </ButtonGroup>
            <Col></Col>
          </Row>
          
        </Container>
        );
    }
  }
  const mapDispatchToProps = (dispatch) => {
    return {
        addDept: (payload) => dispatch(addDept(payload))
    }
};
export default connect(null, mapDispatchToProps)(AddDepartament);