import React, { useEffect, useState} from 'react';
import  ListGroup from 'react-bootstrap/ListGroup';
import {Row, Col, Button } from 'react-bootstrap';
import {fetchDeleteEmployee, saveStaff, fetchGetAllEmployee} from '../../entity/employee';
import Modal from 'react-bootstrap/Modal';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import { useSelector, useDispatch } from 'react-redux';
/* eslint-disable */
export const EmployeeItem = ()=> {

    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const [staff, setStaff] = useState({
        lastName: '',
        firstName: '',
        middleName: '',
        jobName: '',
        department: '',
        snils: '',
        workSchedule: '',
        cardNumber: ''
    });
    
    //const [state, setState] = useState();
    const listEmpl = useSelector(state => state.employees.employees);
    const [empl, setEmpl] = useState([...listEmpl]);
    //console.log(listEmpl);
    //setEmpl({empl: listEmpl});

    const handleCheck =(event) =>{
        setStaff({
            ...staff, [event.target.name]: event.target.value
          });
    }
    // componentDidMount(){
    //     this.setState({empl: [...this.props.listEmpl]})
    // }
    const handleClose = () =>{    
        setShow(false);
    }
    const editANDdeletItem = (event) =>{
        const itemId = event.currentTarget.getAttribute("data-item");
        const typeBtn = event.target.getAttribute("data-button");
        switch(typeBtn){
            case  "edit" :  
                let curItem = empl.filter(a => a.lastName == itemId)[0];
                //console.log(curItem)
                setStaff({...curItem});
                setShow(true);
                break;
            case "delete" :
                dispatch(fetchDeleteEmployee(itemId));
                setEmpl([...empl.filter(a => a.lastName !== itemId)]);
                break;
            case "save" :
                setEmpl([...empl.filter(a=> a.lastName !== staff.lastName), {...staff}])
                dispatch(saveStaff({...staff}));
                setShow(false);
                break;
        }
        
    }
    const showItem = ()=>{
        return empl.map((item) =>{
           return ( 
            
                <ListGroup.Item key={item.lastName} data-item={item.lastName} onClick={editANDdeletItem}>
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
    useEffect( () =>{
        dispatch(fetchGetAllEmployee());
    }
          , [dispatch]); 

         
      return (
        <Row>
            <Row>
               <Col xs={2}>Фамилия</Col><Col xs={2}>Имя</Col><Col xs={2}>Отчество</Col><Col xs={2}>Должность</Col><Col xs={2}>График работы</Col>
            </Row>
            {!show ?
            (<ListGroup>                
                {showItem()}
           </ListGroup> ) :
           (<Modal show={show} onHide={handleClose}  size="lg"  aria-labelledby="contained-modal-title-vcenter" centered>
                        <Modal.Header closeButton>
                            <Modal.Title>Редакторовать {staff.lastName}</Modal.Title>
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
                                    defaultValue={staff.lastName}
                                    onChange={handleCheck}
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
                                    defaultValue={staff.firstName}
                                    onChange={handleCheck}
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
                                    defaultValue={staff.middleName}
                                    onChange={handleCheck}
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
                                    defaultValue={staff.jobName}
                                    onChange={handleCheck}
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
                                    defaultValue={staff.department}
                                    onChange={handleCheck}
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
                                    defaultValue={staff.snils}
                                    onChange={handleCheck}
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
                                    defaultValue={staff.workSchedule}
                                    onChange={handleCheck}
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
                                    defaultValue={staff.cardNumber}
                                    onChange={handleCheck}
                                />
                            </InputGroup>
                            <Col></Col>
                        </Row>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose} data-modal="close" >  Закрыть </Button>
                            <Button variant="primary" onClick={editANDdeletItem} data-button="save"  > Сохранить</Button>
                        </Modal.Footer>
                    </Modal> )}
                    
        </Row>
     )

     
    }


  

