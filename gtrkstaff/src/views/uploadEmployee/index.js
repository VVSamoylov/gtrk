import React  from "react";
import Container from "react-bootstrap/esm/Container";
import MenuUser from "../../components/menuUser";
import {Form, Col, Row, Button} from 'react-bootstrap/';
import Modal from 'react-bootstrap/Modal';
import './style.css'
class UploadEmployee extends React.Component{
  constructor(props){
    super(props)
    
    this.handleClose = this.handleClose.bind(this);
    //this.handleCheck = this.handleCheck.bind(this);
    this.state={
        show: false,
        sucsess: false,
        filename: String
    }

    this.selectFile = this.selectFile.bind(this);
    this.fileUpload = this.fileUpload.bind(this);
}

    selectFile(evn){
      this.setState({filename: evn.target.files});
    }
    handleClose(){
      this.setState({show:false})
    }

fileUpload(evn){
  evn.preventDefault();
  const fData = new FormData();
  let inFile = document.getElementById('fload').files[0];
  console.log(inFile);
  fData.append('file', inFile);
  let url = `${document.location.protocol}/upload/uploadempl`;
  fetch(url, {
    method: 'POST',
    body: fData
  }).then(res =>{
    if(res.ok){
      this.setState({sucsess:true, show:true});
    }else{
      this.setState({sucsess:false, show:true});
    }
  }).catch(ex=>{
    this.setState({sucsess:false, show:true});
  })

}

    render() {
        return (
        <Container>
          <MenuUser/>
          <h1> Загрузка сотрудников!!</h1>
          <Form method="POST" encType="multipart/form-data" >
          <Row>
          <Col></Col>
          
          <Form.Group controlId="formFileLg" className="mb-3 control50">
                <Form.Label>Загрузить Эксель файл </Form.Label>
                <Form.Control onChange={this.selectFile} type="file" id="fload" name="file" size="lg" />
          </Form.Group>
          
          <Col>
            
          </Col>
          </Row>
          <Row>
            <Col xs={8}></Col> <Col><Button type="submit" onClick={this.fileUpload}>Загрузить </Button></Col>
          </Row>
          </Form>
          {this.state.sucsess? 
          <Modal show={this.state.show }
              size="lg"
              aria-labelledby="contained-modal-title-vcenter"
              centered
            >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                  Modal heading
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h4>Результат загрузки!</h4>
              <p>  download        </p>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.handleClose}>Close</Button>
            </Modal.Footer>
          </Modal> :
          <Modal show={this.state.show }
              size="lg"
              aria-labelledby="contained-modal-title-vcenter"
              centered
            >
              <Modal.Header closeButton>
                  <Modal.Title id="contained-modal-title-vcenter">
                    Загрузить не удалось
                  </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                  <h4>Ошибка загрузки!!</h4>
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={this.handleClose}>Закрыть</Button>
              </Modal.Footer>
          </Modal>}

        </Container>)
      }
}

export default UploadEmployee;