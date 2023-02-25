import { Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import MenuManagement from "../components/MenuManagement";
import TopBanner from "../components/TopBanner";
import "./ManagerAccount.css";

const AddressAdd = () => {
  return (
    <>
      <TopBanner content="QUẢN LÝ TÀI KHOẢN" />
      <Container fluid>
        <Row className="justify-content-center manaccount-margin">
          <Col className="col-sm-12 col-xs-12 col-md-8">
            <Row>
              <Col className="col-md-3">
                <MenuManagement></MenuManagement>
              </Col>
              <Col className="col-md-9 mt-5 pt-3">
                <div className="user-bg-color">
                  <div className="title_style4 d-flex justify-content-between">
                    <h4>
                      <i class="fa-regular fa-address-book me-2"></i>SỔ ĐỊA CHỈ
                    </h4>
                  </div>
                  <Form>
                    <Form.Group
                      as={Row}
                      className="mb-3 justify-content-center"
                      controlId="formHorizontalName"
                    >
                      <Form.Label column sm={2} className="fw-bold">
                        Họ và Tên
                      </Form.Label>
                      <Col sm={6}>
                        <Form.Control
                          className=""
                          placeholder="Hà Thị Tường Vy"
                        />
                      </Col>
                    </Form.Group>

                    <Form.Group
                      as={Row}
                      className="mb-3 justify-content-center"
                      controlId="formHorizontalName"
                    >
                      <Form.Label column sm={2} className="fw-bold">
                        Số điện thoại
                      </Form.Label>
                      <Col sm={6}>
                        <Form.Control
                          className=""
                          placeholder="Số điện thoại"
                        />
                      </Col>
                    </Form.Group>

                    <Form.Group
                      as={Row}
                      className="mb-3 justify-content-center"
                      controlId="formHorizontalName"
                    >
                      <Form.Label column sm={2} className="fw-bold">
                        Địa chỉ
                      </Form.Label>
                      <Col sm={6}>
                        <Form.Control className="" placeholder="Địa chỉ" />
                      </Col>
                    </Form.Group>

                    <Form.Group
                      as={Row}
                      className="mb-3 justify-content-center"
                      controlId="formHorizontalPhone"
                    >
                      <Form.Label column sm={2} className="fw-bold">
                        Tỉnh thành
                      </Form.Label>
                      <Col sm={6}>
                        <Form.Select
                          aria-label="Default select example"
                          className=""
                        >
                          <option>-- Tỉnh thành --</option>
                          <option value="1">Hà Nội</option>
                          <option value="2">Hà Giang</option>
                          <option value="3">Hồ Chí Minh</option>
                        </Form.Select>
                      </Col>
                    </Form.Group>

                    <Form.Group
                      as={Row}
                      className="mb-3 justify-content-center"
                      controlId="formHorizontalPhone"
                    >
                      <Form.Label column sm={2} className="fw-bold">
                        Quận huyện
                      </Form.Label>
                      <Col sm={6}>
                        <Form.Select
                          aria-label="Default select example"
                          className=""
                        >
                          <option>-- Quận huyện --</option>
                          <option value="1">Nam Từ Liêm</option>
                          <option value="2">Quận 5</option>
                          <option value="3">Quận 3</option>
                        </Form.Select>
                      </Col>
                    </Form.Group>

                    <Form.Group
                      as={Row}
                      className="mb-3 justify-content-center"
                      controlId="formHorizontalAddress"
                    >
                      <Form.Label column sm={2} className="fw-bold">
                        Địa chỉ nhà
                      </Form.Label>
                      <Col sm={6}>
                        <Form.Control className="" placeholder="Địa chỉ nhà" />
                      </Col>
                    </Form.Group>
                  </Form>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AddressAdd;
