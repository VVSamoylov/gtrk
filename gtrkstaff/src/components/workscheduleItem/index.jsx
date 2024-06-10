import React, {  useState} from 'react';
import  ListGroup from 'react-bootstrap/ListGroup';
import {Row, Col, Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import { useSelector, useDispatch } from 'react-redux';
import {fetchDeleteShedule, fetchGetAllShedule} from '../../service/service-shedule';
import { useQuery, useMutation } from 'react-query';
/* eslint-disable */
export const WorksheduleItem = ()=> {

    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const [shedule, setShedule] = useState({
            id: null,
            scheduleName: '',
    });
    
    //const [state, setState] = useState();
    const listShed = useSelector(state => state.sheds.sheds);
    const [sheds, setSheds] = useState([]);
    //console.log(" first ",listEmpl);
    //console.log("empl ", empl);
   
    
    //setEmpl({empl: listEmpl});
    const deleteShedule = (id) =>{
         useMutation((event) => {
            event.preventDefault();
            fetchDeleteShedule(id);
          })
    }

    const handleCheck =(event) =>{
        setShedule({
            ...shedule, [event.target.name]: event.target.value
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
                let curItem = data.filter(a => a.id == itemId)[0];
                //console.log(curItem)
                setShedule({...curItem});
                setShow(true);
                break;
            case "delete" :
                deleteShedule(itemId);
                setShedule([...sheds.filter(a => a.id !== itemId)]);
                break;
            case "save" :
                setShedule([...sheds.filter(a=> a.id !== shedule.id), {...staff}])
                dispatch(saveShedule({...shedule}));
                setShow(false);
                break;
        }
        
    }
    const showItem = (arrshedules)=>{
        return arrshedules.map((item) =>{
           return ( 
            
                <ListGroup.Item key={item.id} data-item={item.id} onClick={editANDdeletItem}>
                    <Row>
                        <Col xs={10}>{item.scheduleName}</Col>
                        <Col xs={1}><Button data-button="edit" variant="primary">Изменить</Button></Col>
                        <Col xs={1}><Button data-button="delete" variant="danger">Удалить</Button></Col>
                    </Row>
                </ListGroup.Item>
                   
                
                
            )
        });
    }
    
    const { status, data, isFetching, error } = useQuery(
            'getall',
            fetchGetAllShedule
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
               <Col xs={10}>График работы</Col>  <Col xs={2}></Col>
            </Row>
            {!show ?
            (<ListGroup>                
                {showItem(data)}
           </ListGroup> ) :
           (<Modal show={show} onHide={handleClose}  size="lg"  aria-labelledby="contained-modal-title-vcenter" centered>
                        <Modal.Header closeButton>
                            <Modal.Title>Редакторовать {shedule.scheduleName}</Modal.Title>
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
                                    defaultValue={shedule.scheduleName}
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


  

