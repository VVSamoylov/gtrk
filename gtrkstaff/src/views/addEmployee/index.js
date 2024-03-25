import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/Row';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import  './style.css'
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from "react-bootstrap/esm/Button";
import Col from 'react-bootstrap/Col'
import MenuUser from "../../components/menuUser";
import { connect } from 'react-redux';
import {addStaff} from '../../entity/employee';

class AddEmployee extends React.Component {
    constructor(props){
      super(props);
      this.state ={
        staff: {
            lastName: '',
            middleName: '',
            firstName: '',
            jobName: '',
            department: '',
            snils: '',
            workSchedule: '',
            cardNumber: ''
        }
      }
      
      this.handleCheck = this.handleCheck.bind(this);
      this.handleClose = this.handleClose.bind(this);
      this.handleSave = this.handleSave.bind(this);
      this.lastName = React.createRef();
      this.middleName = React.createRef();
      this.firstName = React.createRef();
      this.jobName = React.createRef();
      this.department = React.createRef();
      this.snils = React.createRef();
      this.workSchedule = React.createRef();
      this.cardNumber = React.createRef();
    }

    handleSave(payload){
      this.props.addStaff({ ...this.state.staff});
      
      this.setState({staff : {
        lastName: '',
        middleName: '',
        firstName: '',
        jobName: '',
        department: '',
        snils: '',
        workSchedule: '',
        cardNumber: ''
      }});
      this.lastName.current.value ='';
      this.middleName.current.value = '';
      this.firstName.current.value = '';
      this.jobName.current.value = '';
      this.department.current.value = '';
      this.snils.current.value = '';
      this.workSchedule.current.value = '';
      this.cardNumber.current.value = '';
    }
    handleCheck(event){
      this.setState({
        staff:{...this.state.staff, [event.target.name]: event.target.value}
      })
      
    }
    handleClose(){
      alert(this.state.staff)
    }

    render() {
      
      return (
        <Container>
        <MenuUser/>
          <h1>Добавление нового сотрудника</h1>
          <Row>
            <Col></Col>
            <InputGroup className="mb-3">
              <InputGroup.Text >
                Фамилия
              </InputGroup.Text>
              <Form.Control ref={this.lastName}
                aria-label="Фамилия"
                aria-describedby="lastName"
                name="lastName"
                onChange={this.handleCheck}
              />
            </InputGroup>
            <Col></Col>
          </Row>
          <Row>
            <Col></Col>
            <InputGroup className="mb-3">
              <InputGroup.Text >
                Имя
              </InputGroup.Text>
              <Form.Control ref={this.firstName}
                aria-label="Имя"
                aria-describedby="firstName"
                name="firstName"
                onChange={this.handleCheck}
              />
            </InputGroup>
            <Col></Col>
          </Row>
          <Row>
            <Col></Col>
            <InputGroup className="mb-3">
              <InputGroup.Text >
              Отчество
              </InputGroup.Text>
              <Form.Control  ref={this.middleName}
                aria-label="Отчество"
                aria-describedby="middleName"
                name="middleName"
                onChange={this.handleCheck}
              />
            </InputGroup>
            <Col></Col>
          </Row>
          <Row>
            <Col></Col>
            <InputGroup className="mb-3">
              <InputGroup.Text >
              Должность
              </InputGroup.Text>
              <Form.Control ref={this.jobName}
                aria-label="Должность"
                aria-describedby="jobName"
                name="jobName"
                onChange={this.handleCheck}
              />
            </InputGroup>
            <Col></Col>
          </Row>
          <Row>
            <Col></Col>
            <InputGroup className="mb-3">
              <InputGroup.Text >
              Подразделение
              </InputGroup.Text>
              <Form.Control  ref={this.department}
                aria-label="Подразделение"
                aria-describedby="department"
                name="department"
                onChange={this.handleCheck}
              />
            </InputGroup>
            <Col></Col>
          </Row>
          <Row>
            <Col></Col>
            <InputGroup className="mb-3">
              <InputGroup.Text >
              СНИЛС
              </InputGroup.Text>
              <Form.Control ref={this.snils}
                aria-label="СНИЛС"
                aria-describedby="snils"
                name="snils"
                onChange={this.handleCheck}
              />
            </InputGroup>
            <Col></Col>
          </Row>
          <Row>
            <Col></Col>
            <InputGroup className="mb-3">
              <InputGroup.Text >
              График работы
              </InputGroup.Text>
              <Form.Control ref={this.workSchedule}
                aria-label="График работы"
                aria-describedby="workSchedule"
                name="workSchedule"
                onChange={this.handleCheck}
              />
            </InputGroup> 
            <Col></Col>
          </Row>
          <Row>
            <Col></Col>
            <InputGroup className="mb-3">
              <InputGroup.Text >
              Номер карты
              </InputGroup.Text>
              <Form.Control  ref={this.cardNumber}
                aria-label="Номер карты"
                aria-describedby="cardNumber"
              name="cardNumber"
                onChange={this.handleCheck}
              />
            </InputGroup> 
            <Col></Col>
          </Row>
          <Row>
            <Col></Col>
            <ButtonGroup aria-label="Employee added">
              <Button onClick={this.handleSave} variant="primary">Сохранить</Button>
              <Button variant="danger">Отмена</Button>
            </ButtonGroup>
            <Col></Col>
          </Row>
          
        </Container>
        );
    }
  }
  const mapDispatchToProps = (dispatch) => {
    return {
      addStaff: (payload) => dispatch(addStaff(payload))
    }
};
export default connect(null, mapDispatchToProps)(AddEmployee);