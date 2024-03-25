import React from 'react';
import  ListGroup from 'react-bootstrap/ListGroup';
import {Row, Col, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import {deleteDept, saveDept} from '../../entity/departament';
import Modal from 'react-bootstrap/Modal';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
/* eslint-disable */
class DepartamentItem extends React.Component {
    constructor(props){
        super(props)
        this.showItem = this.showItem.bind(this);
        this.editANDdeletItem = this.editANDdeletItem.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleCheck = this.handleCheck.bind(this);
        this.state={
            show: false,
            depart: {
                id: '',
                departName: '',
                boss: ''
              },
            dept: []
        }

    }
    handleCheck(event){
        this.setState({
            staff:{...this.state.depart, [event.target.name]: event.target.value}
          });
    }
    componentDidMount(){
        this.setState({dept: [...this.props.listDept]})
    }
    handleClose = () =>{    
        this.setState({show: false});
    }
    editANDdeletItem(event){
        const itemId = event.currentTarget.getAttribute("data-item");
        const typeBtn = event.target.getAttribute("data-button");
        switch(typeBtn){
            case  "edit" :  
                let curItem = this.state.dept.filter(a => a.lastName == itemId)[0];
                //console.log(curItem)
                this.setState({depart: {...curItem}});
                this.setState({show: true});
                break;
            case "delete" :
                this.props.deleteDept(itemId);
                this.setState({dept: [...this.state.dept.filter(a => a.lastName !== itemId)]});
                break;
            case "save" :
                this.setState({dept: [...this.state.dept.filter(a=> a.lastName !== this.state.depart.lastName), {...this.state.depart}]})
                this.props.saveDept({...this.state.depart});
                this.setState({show: false});
                break;
        }
        
    }
    showItem(){
        return this.state.dept.map((item) =>{
           return ( 
            
                <ListGroup.Item key={item.id} data-item={item.id} onClick={this.editANDdeletItem}>
                    <Row>
                        <Col xs={2}>{item.departName}</Col>
                        <Col xs={2}>{item.boss}</Col>
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
               <Col xs={2}>Название</Col><Col xs={2}>Руководитель</Col>
            </Row>
            {!this.state.show ?
            (<ListGroup>                
                {this.showItem()}
           </ListGroup> ) :
           (<Modal show={this.state.show} onHide={this.handleClose}  size="lg"  aria-labelledby="contained-modal-title-vcenter" centered>
                        <Modal.Header closeButton>
                            <Modal.Title>Редакторовать {this.state.depart.departName}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                       
                        <Row>
                            <Col></Col>
                            <InputGroup className="mb-3">
                               <InputGroup.Text >
                                    Название
                                </InputGroup.Text>  
                                <Form.Control 
                                    aria-label="Фамилия"
                                    aria-describedby="lastName"
                                    name="lastName" 
                                    defaultValue={this.state.depart.departName}
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
                                <Form.Control 
                                    aria-label="Имя"
                                    aria-describedby="firstName"
                                    name="firstName"
                                    defaultValue={this.state.depart.boss}
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
        listDept: state.departaments.departaments
    }
  }
  const mapDispatchToProps = (dispatch) => {
    return {
        deleteDept: (payload) => dispatch(deleteDept(payload)),
        saveDept: (payload) => dispatch(saveDept(payload))
    }
};

  export default connect(mapStateToProps, mapDispatchToProps)(DepartamentItem);