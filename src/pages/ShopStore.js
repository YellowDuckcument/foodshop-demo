import {
  faAngleRight,
  faBorderAll,
  faCaretDown,
  faListSquares,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  Button,
  Col,
  Container,
  Form,
  ListGroup,
  Nav,
  Navbar,
  NavDropdown,
  Row,
} from "react-bootstrap";
import TopBanner from "../components/TopBanner";
import DataProduct from "../connect/DataProduct";

const ShopStore = () => {
  const [show, setShow] = React.useState(false);
  const [show1, setShow1] = React.useState(false);
  return (
    <>
      <TopBanner content="Rau - củ - quả" />
      <Container className="mt-4">
        <Row className="gx-3">
          <Col md={3}>
            <ListGroup>
              <ListGroup.Item className="fs-6 text-uppercase fw-bold"  style={{ height: "60px" }}>
                Danh Mục sản phẩm
              </ListGroup.Item>
              <ListGroup.Item
                onClick={() => (show ? setShow(false) : setShow(true))}
                className="fs-6 text-uppercase fw-bolder cursor-pointer d-flex"
              >
                <p className="w-100 m-0">Rau -củ -quả</p>{" "}
                <FontAwesomeIcon icon={faCaretDown} className="flex-shrink-1" />
              </ListGroup.Item>

              <div className={show ? "drop-item-shop" : "drop-item-shop show"}>
                <ListGroup.Item className="text-start ps-5">
                  <FontAwesomeIcon icon={faAngleRight} className="me-3" />
                  Rau củ
                </ListGroup.Item>
                <ListGroup.Item className="text-start ps-5">
                  <FontAwesomeIcon icon={faAngleRight} className="me-3" />
                  Trái cây
                </ListGroup.Item>
                <ListGroup.Item className="text-start ps-5">
                  <FontAwesomeIcon icon={faAngleRight} className="me-3" />
                  Nấm
                </ListGroup.Item>
              </div>

              <ListGroup.Item
                onClick={() => (show1 ? setShow1(false) : setShow1(true))}
                className="fs-6 text-uppercase fw-bolder cursor-pointer d-flex"
              >
                <p className="w-100 m-0">Thịt -hải sản</p>{" "}
                <FontAwesomeIcon icon={faCaretDown} className="flex-shrink-1" />
              </ListGroup.Item>
              <div
                className={!show1 ? "drop-item-shop" : "drop-item-shop show"}
              >
                <ListGroup.Item className="text-start ps-5">
                  <FontAwesomeIcon icon={faAngleRight} className="me-3" />
                  Thịt
                </ListGroup.Item>
                <ListGroup.Item className="text-start ps-5">
                  <FontAwesomeIcon icon={faAngleRight} className="me-3" />
                  Thủy sản
                </ListGroup.Item>
              </div>

              <ListGroup.Item className="fs-6 text-uppercase fw-bolder cursor-pointer">
                Trứng -gạo
              </ListGroup.Item>
            </ListGroup>
          </Col>

          <Col md={9}>
            <Row>
              <Navbar
                bg="white"
                className="border rounded-1 border-black-50"
                style={{overflow: "hidden", width: "98%", left: "1%", height: "60px"}}
              >
                <Container>
                  <Navbar.Collapse className="d-flex justify-content-between">
                    <Nav className="" >
                      <Nav.Link
                        href="#action1"
                        className="text-dark fs-4 pb-0 pt-1"
                      >
                        <FontAwesomeIcon icon={faBorderAll} />
                      </Nav.Link>
                      <Nav.Link
                        href="#action2"
                        className="text-dark fs-4 pb-0 pt-1"
                      >
                        <FontAwesomeIcon icon={faListSquares} />
                      </Nav.Link>
                    </Nav>
                    <p className="d-block text-uppercase fw-bold m-0">
                      Danh sách sản phẩm hiển thị
                    </p>
                    <Form className="d-flex">
                      <Form.Control
                        type="search"
                        placeholder="Sắp xếp theo vị trí"
                        className="py-1"
                        aria-label="Search"
                      />
                    </Form>
                  </Navbar.Collapse>
                </Container>
              </Navbar>
            </Row>

            <Row className="">
                <DataProduct />
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ShopStore;
