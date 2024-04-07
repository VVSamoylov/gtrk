import React from 'react';
import  ListGroup from 'react-bootstrap/ListGroup';
import {Row, Col, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import {deleteJob, saveJob} from '../../entity/job';
import Modal from 'react-bootstrap/Modal';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
/* eslint-disable */
class JobItem extends React.Component {
    constructor(props){
        super(props)
        this.showItem = this.showItem.bind(this);
        this.editANDdeletItem = this.editANDdeletItem.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleCheck = this.handleCheck.bind(this);
        this.state={
            show: false,
            job: {
                id: '',
                jobName: ''
                
              },
            jobs: []
        }

    }
    handleCheck(event){
        this.setState({
            job:{...this.state.job, [event.target.name]: event.target.value}
          });
    }
    componentDidMount(){
        this.setState({jobs: [...this.props.listJobs]})
    }
    
    handleClose = () =>{    
        this.setState({show: false});
    }
    editANDdeletItem(event){
        const itemId = event.currentTarget.getAttribute("data-item");
        const typeBtn = event.target.getAttribute("data-button");
        switch(typeBtn){
            case  "edit" :  
                let curItem = this.state.jobs.filter(a => a.id== itemId)[0];
                //console.log(curItem)
                this.setState({job: {...curItem}});
                this.setState({show: true});
                break;
            case "delete" :
                this.props.deleteJob(itemId);
                this.setState({jobs: [...this.state.jobs.filter(a => a.id !== itemId)]});
                break;
            case "save" :
                this.props.saveJob({...this.state.job} );
                this.setState({jobs: [...this.state.jobs.filter(a => a.id != itemId), {...this.state.job}]})
                this.setState({show: false});
                
        }
        
    }
    showItem(){
        //this.setState({jobs: [...this.props.listJobs]})
        return this.state.jobs.map((item) =>{
           return ( 
            
                <ListGroup.Item key={item.id} data-item={item.id} onClick={this.editANDdeletItem}>
                    <Row>
                        <Col xs={2}>{item.jobName}</Col>
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
               <Col xs={2}>Название</Col>
            </Row>
            {!this.state.show ?
            (<ListGroup>                
                {this.showItem()}
           </ListGroup> ) :
           (<Modal show={this.state.show} onHide={this.handleClose}  size="lg"  aria-labelledby="contained-modal-title-vcenter" centered>
                        <Modal.Header closeButton>
                            <Modal.Title>Редакторовать {this.state.job.jobName}</Modal.Title>
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
                                    defaultValue={this.state.job.jobName}
                                    onChange={this.handleCheck}
                                />
                            </InputGroup>
                            <Col></Col>
                        </Row>
                        
                        
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={this.handleClose} data-modal="close" >  Закрыть </Button>
                            <Button variant="primary" onClick={this.editANDdeletItem} data-item={this.state.job.id} data-button="save"  > Сохранить</Button>
                        </Modal.Footer>
                    </Modal> )}
        </Row>
     )
    }
}
function mapStateToProps(state) {
    return {
        listJobs: state.jobs.jobs
    }
  }
  const mapDispatchToProps = (dispatch) => {
    return {
        deleteJob: (payload) => dispatch(deleteJob(payload)),
        saveJob: (payload) => dispatch(saveJob(payload))
    }
};

  export default connect(mapStateToProps, mapDispatchToProps)(JobItem);