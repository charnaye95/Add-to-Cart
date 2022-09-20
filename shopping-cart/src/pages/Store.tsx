import { Card, Col, Row } from "react-bootstrap"
import donations from "../data/donations.json"

export function Store() {
    return <>
        <h1>Store</h1>
        <Row md={2} xs={1} lg={3} className="g-3">
            {donations.map(donation => (
                <Col key={donation.id}>
                    {JSON.stringify(donation)}
                    <br></br>
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
                                justify-content-space-between 
                                align-items-baseline 
                                mb-4">
                                <span>{donation.name}</span>
                                <span>{donation.price}</span>
                            </Card.Title>
                        </Card.Body>
                        <br></br>
                        <br></br>
                    </Card>

                </Col>

            ))}
        </Row>
    </>
}