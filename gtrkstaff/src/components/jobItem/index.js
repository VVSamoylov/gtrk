import React, { useState } from 'react';
import  ListGroup from 'react-bootstrap/ListGroup';
import {Row, Col, Button } from 'react-bootstrap';
import {deleteJob, saveJob} from '../../entity/job';
import Modal from 'react-bootstrap/Modal';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import { useSelector, useDispatch } from 'react-redux';
import {fetchDeleteJobItem, fetchGetAllJobItem} from '../../service/service-jobitem';
import { useQuery, useMutation } from 'react-query';
/* eslint-disable */
export const JobItem = () => {
    const dispatch = useDispatch();
    let listJobs= useSelector(state => state.jobs.jobs);
    const [show, setShow] = useState(false);
    const [jobs, setJobs] = useState([]);
    const [job, setJob] = useState(
        {
         id:'',
         jobName:'',   
        }
    )
    const handleCheck=(event)=>{
        setJob({
            ...job, [event.target.name]: event.target.value
          });
    }
    // componentDidMount(){
    //     this.setState({jobs: [...this.props.listJobs]})
    // }
    
    const handleClose = () =>{    
        setShow(false);
    }
    const editANDdeletItem =(event)=>{
        const itemId = event.currentTarget.getAttribute("data-item");
        const typeBtn = event.target.getAttribute("data-button");
        switch(typeBtn){
            case  "edit" :  
                let curItem = jobs.filter(a => a.id== itemId)[0];
                //console.log(curItem)
                setJob( {...curItem});
                setShow(true);
                break;
            case "delete" :
                dispatch(deleteJob(itemId));
                setJobs( [...jobs.filter(a => a.id !== itemId)]);
                deleteJobServ(itemId);
                break;
            case "save" :
                dispatch(saveJob({...this.state.job} ));
                setJob([...jobs.filter(a => a.id != itemId), {...job}])
                setShow(false);
                
        }
        
    }

    const deleteJobServ = (id) =>{
        useMutation((event) => {
           event.preventDefault();
           fetchDeleteJobItem(id);
         })
   }


    const { status, data, isFetching, error } = useQuery(
        'getallDept',
        fetchGetAllJobItem
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


    console.log('data', data);
    const showItem=(ajobs)=>{
        return ajobs.map((item) =>{
           return ( 
            
                <ListGroup.Item key={item.id} data-item={item.id} onClick={editANDdeletItem}>
                    <Row>
                        <Col xs={2}>{item.jobName}</Col>
                        <Col xs={1}><Button data-button="edit" variant="primary">Изменить</Button></Col>
                        <Col xs={1}><Button data-button="delete" variant="danger">Удалить</Button></Col>
                    </Row>
                </ListGroup.Item>
                   
                
                
            )
        });
    }
    
    console.log(show);
      return (
        <Row>
            <Row>
               <Col xs={2}>Название</Col>
            </Row>
            {!show ?
            (<ListGroup>                
                {showItem(data)}
           </ListGroup> ) :
           (<Modal show={show} onHide={handleClose}  size="lg"  aria-labelledby="contained-modal-title-vcenter" centered>
                        <Modal.Header closeButton>
                            <Modal.Title>Редакторовать {job.jobName}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                       
                        <Row>
                            <Col></Col>
                            <InputGroup className="mb-3">
                               <InputGroup.Text >
                                    Название
                                </InputGroup.Text>  
                                <Form.Control 
                                    aria-label="Наименование"
                                    aria-describedby="jobName"
                                    name="jobName" 
                                    defaultValue={job.jobName}
                                    onChange={handleCheck}
                                />
                            </InputGroup>
                            <Col></Col>
                        </Row>
                        
                        
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose} data-modal="close" >  Закрыть </Button>
                            <Button variant="primary" onClick={editANDdeletItem} data-item={job.id} data-button="save"  > Сохранить</Button>
                        </Modal.Footer>
                    </Modal> )}
        </Row>
     )
    
};