import React from 'react';
import  ListGroup from 'react-bootstrap/ListGroup';
import {Row, Col, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import {deleteStaff, saveStaff} from '../../entity/employee';
import Modal from 'react-bootstrap/Modal';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
/* eslint-disable */
class EmployeeItem extends React.Component {
    constructor(props){
        super(props)
        this.showItem = this.showItem.bind(this);
        this.editANDdeletItem = this.editANDdeletItem.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleCheck = this.handleCheck.bind(this);
        this.state={
            show: false,
            staff: {
                lastName: '',
                firstName: '',
                middleName: '',
                jobName: '',
                department: '',
                snils: '',
                workSchedule: '',
                cardNumber: ''
            },
            empl: []
        }

    }
    handleCheck(event){
        this.setState({
            staff:{...this.state.staff, [event.target.name]: event.target.value}
          });
    }
    componentDidMount(){
        this.setState({empl: [...this.props.listEmpl]})
    }
    handleClose = () =>{    
        this.setState({show: false});
    }
    editANDdeletItem(event){
        const itemId = event.currentTarget.getAttribute("data-item");
        const typeBtn = event.target.getAttribute("data-button");
        switch(typeBtn){
            case  "edit" :  
                let curItem = this.state.empl.filter(a => a.lastName == itemId)[0];
                //console.log(curItem)
                this.setState({staff: {...curItem}});
                this.setState({show: true});
                break;
            case "delete" :
                this.props.deleteStaff(itemId);
                this.setState({empl: [...this.state.empl.filter(a => a.lastName !== itemId)]});
                break;
            case "save" :
                this.setState({empl: [...this.state.empl.filter(a=> a.lastName !== this.state.staff.lastName), {...this.state.staff}]})
                this.props.saveStaff({...this.state.staff});
                this.setState({show: false});
                break;
        }
        
    }
    showItem(){
        return this.state.empl.map((item) =>{
           return ( 
            
                <ListGroup.Item key={item.lastName} data-item={item.lastName} onClick={this.editANDdeletItem}>
                    <Row>
                        <Col xs={2}>{item.lastName}</Col>
                        <Col xs={2}>{item.firstName}</Col>
                        <Col xs={2}>{item.middleName}</Col>
                        <Col xs={2}>{item.jobName}</Col>
                        <Col xs={2}>{item.workSchedule}</Col>
                        <Col xs={1}><Button data-button="edit" variant="primary">Изменить</Button></Col>
                        <Col xs={1}><Button data-button="delete" variant="danger">Удалить</Button></Col>
                    </Row>
                </ListGroup.Item>
                   
                
                
            )
        });
    }
    render() {
      return (
        <Row>
            <Row>
               <Col xs={2}>Фамилия</Col><Col xs={2}>Имя</Col><Col xs={2}>Отчество</Col><Col xs={2}>Должность</Col><Col xs={2}>График работы</Col>
            </Row>
            {!this.state.show ?
            (<ListGroup>                
                {this.showItem()}
           </ListGroup> ) :
           (<Modal show={this.state.show} onHide={this.handleClose}  size="lg"  aria-labelledby="contained-modal-title-vcenter" centered>
                        <Modal.Header closeButton>
                            <Modal.Title>Редакторовать {this.state.staff.lastName}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                       
                        <Row>
                            <Col></Col>
                            <InputGroup className="mb-3">
                               <InputGroup.Text >
                                    Фамилия
                                </InputGroup.Text>  
                                <Form.Control 
                                    aria-label="Фамилия"
                                    aria-describedby="lastName"
                                    name="lastName" 
                                    defaultValue={this.state.staff.lastName}
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
                                <Form.Control 
                                    aria-label="Имя"
                                    aria-describedby="firstName"
                                    name="firstName"
                                    defaultValue={this.state.staff.firstName}
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
                                <Form.Control  
                                    aria-label="Отчество"
                                    aria-describedby="middleName"
                                    name="middleName"
                                    defaultValue={this.state.staff.middleName}
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
                                <Form.Control 
                                    aria-label="Должность"
                                    aria-describedby="jobName"
                                    name="jobName"
                                    defaultValue={this.state.staff.jobName}
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
                                <Form.Control  
                                    aria-label="Подразделение"
                                    aria-describedby="department"
                                    name="department"
                                    defaultValue={this.state.staff.department}
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
                                <Form.Control 
                                    aria-label="СНИЛС"
                                    aria-describedby="snils"
                                    name="snils"
                                    defaultValue={this.state.staff.snils}
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
                                <Form.Control 
                                    aria-label="График работы"
                                    aria-describedby="workSchedule"
                                    name="workSchedule"
                                    defaultValue={this.state.staff.workSchedule}
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
                                <Form.Control  
                                    aria-label="Номер карты"
                                    aria-describedby="cardNumber"
                                    name="cardNumber"
                                    defaultValue={this.state.staff.cardNumber}
                                    onChange={this.handleCheck}
                                />
                            </InputGroup>
                            <Col></Col>
                        </Row>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={this.handleClose} data-modal="close" >  Закрыть </Button>
                            <Button variant="primary" onClick={this.editANDdeletItem} data-button="save"  > Сохранить</Button>
                        </Modal.Footer>
                    </Modal> )}
        </Row>
     )
    }
}
function mapStateToProps(state) {
    return {
        listEmpl: state.employees.employees
    }
  }
  const mapDispatchToProps = (dispatch) => {
    return {
      deleteStaff: (payload) => dispatch(deleteStaff(payload)),
      saveStaff: (payload) => dispatch(saveStaff(payload))
    }
};

  export default connect(mapStateToProps, mapDispatchToProps)(EmployeeItem);