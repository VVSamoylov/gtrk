import React, {  useState} from 'react';
import  ListGroup from 'react-bootstrap/ListGroup';
import {Row, Col, Button } from 'react-bootstrap';
import {saveStaff} from '../../entity/employee';
import Modal from 'react-bootstrap/Modal';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import { useSelector, useDispatch } from 'react-redux';
import {fetchDeleteEmployee, fetchGetAllEmployee} from '../../service/service-employee';
import { useQuery, useMutation } from 'react-query';
/* eslint-disable */
export const EmployeeItem = ()=> {

    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const [staff, setStaff] = useState({
        id: null,
        lastName: '',
        firstName: '',
        middleName: '',
        position: {
            id: null,
            posName: '',
        },
        dept: {
            id: null,
            depName: '',
        },
        snils: '',
        schedule:{
            id: null,
            scheduleName: '',
        },
        cardNumber: ''
    });
    
    //const [state, setState] = useState();
    const listEmpl = useSelector(state => state.employees.employees);
    const [empl, setEmpl] = useState([]);
    console.log(" first ",listEmpl);
    console.log("empl ", empl);
   
    
    //setEmpl({empl: listEmpl});
    const deleteEmployee = (id) =>{
         useMutation((event) => {
            event.preventDefault();
            fetchDeleteEmployee(id);
          })
    }

    const handleCheck =(event) =>{
        setStaff({
            ...staff, [event.target.name]: event.target.value
          });
    }

    const handleClose = () =>{    
        setShow(false);
    }
    const editANDdeletItem = (event) =>{
        console.log('editAndDelete');
        const itemId = event.currentTarget.getAttribute("data-item");
        const typeBtn = event.target.getAttribute("data-button");
        switch(typeBtn){
            case  "edit" :  
                let curItem = data.filter(a => a.lastName == itemId)[0];
                //console.log(curItem)
                setStaff({...curItem});
                setShow(true);
                break;
            case "delete" :
                deleteEmployee(itemId);
                setEmpl([...empl.filter(a => a.lastName !== itemId)]);
                break;
            case "save" :
                setEmpl([...empl.filter(a=> a.lastName !== staff.lastName), {...staff}])
                dispatch(saveStaff({...staff}));
                setShow(false);
                break;
        }
        
    }
    const showItem = (arrempl)=>{
        return arrempl.map((item) =>{
           return ( 
            
                <ListGroup.Item key={item.lastName} data-item={item.lastName} onClick={editANDdeletItem}>
                    <Row>
                        <Col xs={2}>{item.lastName}</Col>
                        <Col xs={2}>{item.firstName}</Col>
                        <Col xs={2}>{item.middleName}</Col>
                        <Col xs={2}>{item.position.posName}</Col>
                        <Col xs={2}>{item.schedule.scheduleName}</Col>
                        <Col xs={1}><Button data-button="edit" variant="primary">Изменить</Button></Col>
                        <Col xs={1}><Button data-button="delete" variant="danger">Удалить</Button></Col>
                    </Row>
                </ListGroup.Item>
                   
                
                
            )
        });
    }
    
    const { status, data, isFetching, error } = useQuery(
            'getall',
            fetchGetAllEmployee
          );
        if(status === 'loading'){
            return (
                <>
                    <div class="d-flex justify-content-center">
                        <div class="spinner-border text-primary" role="status">
                            <span class="visually-hidden">Загрузка...</span>
                        </div>
                    </div>
                </>
            )
        }
        console.log("stat ", data);
        if(status==='error'){
            return  (<div>  Ошибка загрузки   <h1></h1></div>);
                        
        }
        if(status==='success' && data != undefined){
            //setEmpl([...data]);
        }
        //console.log(data);
        
    
        

         
      return (
        <Row>
            <Row>
               <Col xs={2}>Фамилия</Col><Col xs={2}>Имя</Col><Col xs={2}>Отчество</Col><Col xs={2}>Должность</Col><Col xs={2}>График работы</Col>
            </Row>
            {!show ?
            (<ListGroup>                
                {showItem(data)}
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
                                    defaultValue={staff.position.posName}
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
                                    defaultValue={staff.dept.depName}
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
                                    defaultValue={staff.schedule.scheduleName}
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


  

