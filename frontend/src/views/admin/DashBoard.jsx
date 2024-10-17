import { memo } from "react"
import { Button, Container, Row, Col } from "react-bootstrap"

function DashBoard() {
    return (
        <Container className="mt-5">
            <h1 className="text-center mb-4">Dashboard</h1>
            <Row className="justify-content-center">
                <Col xs={12} md={6} className="text-center mb-3">
                    <Button variant="primary" size="lg" className="w-100" href="/create-blog">
                        Create Blog
                    </Button>
                </Col>
                <Col xs={12} md={6} className="text-center mb-3">
                    <Button variant="success" size="lg" className="w-100" href="/create-collection">
                        Create Collection
                    </Button>
                </Col>
            </Row>
        </Container>
    )
}

export default memo(DashBoard)
