import { Card } from "react-bootstrap";
import '../components/Mycard.css'


export default function MyCard({ type, desc, image_id }) {
    return (
        <Card className="card__border">
            <Card.Img variant="contain" src={image_id} />
            <Card.Body className="card card__rect">
                <Card.Title className="card__title">{type}</Card.Title>
                {/* <Card.Text className="card__rect">{desc}</Card.Text> */}
            </Card.Body>
        </Card>
    )
}