import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import  './style.css'
/* eslint-disable */
class MenuUser extends React.Component {
    render() {
      return (
      <>
        <Navbar className='navmargin' bg="dark" data-bs-theme="dark">
            
                <Navbar.Brand href="/">Учет рабочего времени</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Начало</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                        <NavDropdown  title="Сотрудники" id="employee-nav-dropdown">
                            <NavDropdown.Item as={Link} to="/listEmployee">Список сотрудников</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/addEmployee">Добавит сотрудника</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/listDepartament">Список отделов</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/addDepartament">Добавит отдел</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/listJobs">Список должностей</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/listShedule">Графики</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/addJob">Добавит должность</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown  title="Загрузки" id="upload-nav-dropdown">
                            <NavDropdown.Item as={Link} to="/uploadEmployee">Загрузить список сотрудников</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/uploadSKUD">Загрузить файл СКУД</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/uploadAbsentees">Загрузить отсутствующих</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>    
                    </Nav>
                </Navbar.Collapse>
            
        </Navbar>
      </>)
    }
  }

  export default MenuUser;