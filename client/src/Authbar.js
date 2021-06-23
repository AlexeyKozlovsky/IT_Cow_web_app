import { Nav } from "react-bootstrap"

export default function AuthBar(props) {
    if (props.isAuth) {

    } else {
        return (
            <Nav>
                <Nav.Link>Профиль</Nav.Link>
                <Nav.Link>Выйти</Nav.Link>
            </Nav>
        )
    }
}