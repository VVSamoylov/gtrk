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
import {addJob} from '../../../entity/job';

class AddJob extends React.Component {
    constructor(props){
      super(props);
      this.state ={
        job: {
          id: '',
          jobName: ''
        }
      }
      
      this.handleCheck = this.handleCheck.bind(this);
      this.handleClose = this.handleClose.bind(this);
      this.handleSave = this.handleSave.bind(this);
      this.jobName = React.createRef();
      this.id = React.createRef();
    }

    handleSave(payload){
      //console.log(this.state.depart)
      this.props.addJob({ jobName:this.state.job.jobName,  id: new Date().getTime()});
      this.setState({job : {
        id: '',
        jobName: ''
      }});
      this.jobName.current.value ='';
      
    }
    handleCheck(event){
      //let id = new Date().getTime;
      this.setState({
        job:{...this.state.job, [event.target.name]: event.target.value}
      })
    }
    handleClose(){
      //alert(this.state.depart)
      console.log(this.state.job)
    }

    render() {
      
      return (
        <Container>
        <MenuUser/>
          <h1>Добавление новой должности</h1>
          <Row>
            <Col></Col>
            <InputGroup className="mb-3">
              <InputGroup.Text >
                Название
              </InputGroup.Text>
              <Form.Control ref={this.jobName}
                aria-label="Название должности"
                aria-describedby="jobName"
                name="jobName"
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
        addJob: (payload) => dispatch(addJob(payload))
    }
};
export default connect(null, mapDispatchToProps)(AddJob);