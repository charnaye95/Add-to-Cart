import { Card, Col, Row } from "react-bootstrap"
import { AddToCartBn } from "../components/AddToCartBn"
import donations from "../data/donations.json"

export function Store() {
    return <>
        <h1>Store</h1>
        <Row md={2} xs={1} lg={3} className="g-3">
            {donations.map(donation => (
                <Col key={donation.id}>
                    <Card>
                        <Card.Img
                            variant="bottom"
                            src={donation.imgURL}
                            height="200px"
                            style={{ objectFit: "cover" }}>
                        </Card.Img>
                        <Card.Body className="d-flex flex-column">
                            <Card.Title
                                className="d-flex 
                                justify-content-between 
                                align-items-baseline 
                                mb-4">
                                <span className="fs-2">{donation.name}</span>
                                <span className="ms-2 text-muted">${donation.price}.00</span>
                            </Card.Title>
                            <AddToCartBn />
                        </Card.Body>
                    </Card>

                </Col>

            ))}
        </Row>
    </>
}