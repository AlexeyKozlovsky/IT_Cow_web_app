import { useHistory, useEffect } from 'react'
import Navibar from "./Navibar.css";
import { Navbar, Nav, Image, DropdownButton, Dropdown} from "react-bootstrap";
import { CHAT_ROUTE, CHOOSE_DOCTOR_PAGE_ROUTE, CHOOSE_SYMPOMATICS_ROUTE, LOGIN_ROUTE, PROFILE_ROUTE, REGISTER_ROUTE, ROOT_ROUTE } from '../utils/consts';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import styled from 'styled-components';


const Styles = styled.div `
    a, .navbar-nav, .nav-link {
        color: #D7D7D7;
        &:hover {
            color: white;
        }
    }`

export default function NaviBar({name, img}) {
    const user = name ? true : false;
    
    return (
        <>
        <Styles>
            <Navbar className="navbar navbar-dark bg--dark" bg="#000" color="white">
                <Navbar.Brand>IT Cow</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-collapse"/>
                <Navbar.Collapse>
                    <Nav className="mr-auto">
                        <LinkContainer to={CHOOSE_DOCTOR_PAGE_ROUTE}>
                            <Nav.Link>Выбрать врача</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to={CHOOSE_SYMPOMATICS_ROUTE}>
                            <Nav.Link>Выбрать симптомы</Nav.Link>
                        </LinkContainer>
                            
                        <LinkContainer to={CHAT_ROUTE}>
                            <Nav.Link>Бот консультант</Nav.Link>
                        </LinkContainer> 
                    </Nav>

                    <Nav>
                        { user ?
                            <Nav>
                                <LinkContainer to={PROFILE_ROUTE}>
                                    <Nav.Link>{name}</Nav.Link>
                                </LinkContainer>

                                <LinkContainer to={PROFILE_ROUTE}>
                                    <Image src={img} roundedCircle/>
                                </LinkContainer>

                                <LinkContainer to={ROOT_ROUTE}>
                                    <Nav.Link>Выйти</Nav.Link>
                                </LinkContainer>
                            </Nav>
                            :
                            <Nav>
                                <LinkContainer to={REGISTER_ROUTE}>
                                    <Nav.Link>Регистрация</Nav.Link>
                                </LinkContainer>
                                
                                <LinkContainer to={LOGIN_ROUTE}>
                                    <Nav.Link>Войти</Nav.Link>
                                </LinkContainer>
                            </Nav>
                        }  
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Styles>

        </>
    )
}