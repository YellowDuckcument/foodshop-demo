import { Col, Container, Nav, Row } from "react-bootstrap";
import CustomerCard from "../components/CustomerCard";
import ShopBasketBar from "../components/ShopBaskerBar";
import TopBanner from "../components/TopBanner";

const ShopBasket = () => {
  return (
    <div className="bg-gray-100">
      <TopBanner content="Thông tin đơn hàng" />
      <Container className="bg-light my-4" fluid>
        <Container>
          <Nav className="justify-content-evenly" defaultActiveKey="/" as="ul">
            <Nav.Item as="li">
              <Nav.Link className="d-flex" href="#">
                <div>
                  <div className="square d-flex justify-content-center align-items-center bg-primary rounded-circle">
                    <div className="text text-light fs-6">1</div>
                  </div>
                </div>
                <div className="text align-self-center ms-2 text-uppercase fw-semibold">
                  Thông tin đơn hàng
                </div>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link className="d-flex" href="#">
                <div>
                  <div className="square d-flex justify-content-center align-items-center border border-primary rounded-circle">
                    <div className="text text-primary fs-6">2</div>
                  </div>
                </div>
                <div className="text align-self-center ms-2 text-uppercase fw-semibold">
                  Hình thức thanh toán
                </div>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link className="d-flex" href="#">
                <div className="square d-flex justify-content-center align-items-center border border-primary rounded-circle">
                  <div className="text text-primary fs-6">3</div>
                </div>
                <div className="text align-self-center ms-2 text-uppercase fw-semibold">
                  Hoàn thành
                </div>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Container>
      </Container>

      <Container>
        <Row>
          <Col sm="8">
            <ShopBasketBar />
          </Col>
          <Col sm="4">
            <CustomerCard />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ShopBasket;
