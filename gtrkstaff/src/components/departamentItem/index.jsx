import React from 'react';
import  ListGroup from 'react-bootstrap/ListGroup';
import {Row, Col, Button } from 'react-bootstrap';
import {deleteDept, saveDept} from '../../entity/departament';
import Modal from 'react-bootstrap/Modal';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {fetchGetAllDepartament, fetchDeleteDepartament} from '../../service/service-departament';
import { useQuery, useMutation } from 'react-query';
/* eslint-disable */
export const DepartamentItem = ()=> {

    const dispatch = useDispatch();
    let listDept = useSelector(state => state.departaments.departaments);
    const [show, setShow] = useState(false);
    const [depart, setDepart] = useState(
        {
            id: '',
            departName: '',
            boss: ''
          }
    )
    const[dept, setDept] = useState([]);

    const handleCheck = (event)=>{
        this.setDepart({
            ...depart, [event.target.name]: event.target.value
          });
    }
    // componentDidMount(){
    //     this.setState({dept: [...this.props.listDept]})
    // }
    const handleClose = () =>{    
        setShow(false);
    }
    const editANDdeletItem = (event)=>{
        const itemId = event.currentTarget.getAttribute("data-item");
        const typeBtn = event.target.getAttribute("data-button");
        switch(typeBtn){
            case  "edit" :  
                let curItem = data.filter(a => a.id== itemId)[0];
                //console.log(curItem)
                setDepart( {...curItem});
                setShow(true);
                break;
            case "delete" :
                dispatch(deleteDept(itemId));
                setDept( [...dept.filter(a => a.id !== itemId)]);
                break;
            case "save" :
                dispatch(saveDept([
                    ...dept.filter(a=> a.id !== itemId), depart
                ]));
                setDept( [...dept.filter(a=> a.id !== itemId), depart])
                setShow(false);
                break;
        }
        
    }

    const deleteDepart = (id) =>{
        useMutation((event) => {
           event.preventDefault();
           fetchDeleteDepartament(id);
         })
   }


    const { status, data, isFetching, error } = useQuery(
        'getallDept',
        fetchGetAllDepartament
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

    const showItem = (arrdept)=>{
        return arrdept.map((item) =>{
           return ( 
            
                <ListGroup.Item key={item.id} data-item={item.id} onClick={editANDdeletItem}>
                    <Row>
                        <Col xs={5}>{item.depName}</Col>
                        <Col xs={5}>{item.boss}</Col>
                        <Col xs={1}><Button data-button="edit" variant="primary">Изменить</Button></Col>
                        <Col xs={1}><Button data-button="delete" variant="danger">Удалить</Button></Col>
                    </Row>
                </ListGroup.Item>
                   
                
                
            )
        });
    }
    
      return (
        <Row>
            <Row>
               <Col xs={2}>Название</Col><Col xs={2}>Руководитель</Col>
            </Row>
            {!show ?
            (<ListGroup>                
                {showItem(data)}
           </ListGroup> ) :
           (<Modal show={show} onHide={handleClose}  size="lg"  aria-labelledby="contained-modal-title-vcenter" centered>
                        <Modal.Header closeButton>
                            <Modal.Title>Редакторовать {depart.depName}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                       
                        <Row>
                            <Col></Col>
                            <InputGroup className="mb-3">
                               <InputGroup.Text >
                                    Название
                                </InputGroup.Text>  
                                <Form.Control 
                                    aria-label="Название"
                                    aria-describedby="departName"
                                    name="departName" 
                                    defaultValue={depart.depName}
                                    onChange={handleCheck}
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
                                <Form.Control 
                                    aria-label="Имя"
                                    aria-describedby="firstName"
                                    name="firstName"
                                    defaultValue={depart.boss}
                                    onChange={handleCheck}
                                />
                            </InputGroup>
                            <Col></Col>
                        </Row>
                        
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose} data-modal="close" >  Закрыть </Button>
                            <Button variant="primary" onClick={editANDdeletItem} data-item={depart.id} data-button="save"  > Сохранить</Button>
                        </Modal.Footer>
                    </Modal> )}
        </Row>
     )
    
}