import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import MenuManagement from "../components/MenuManagement";
import TopBanner from "../components/TopBanner";
import "./ManagerAccount.css";

const ChangePass = () => {
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
                      <i class="fa-solid fa-unlock"></i> THAY ĐỔI MẬT KHẨU
                    </h4>
                  </div>
                  <Form>
                    <Form.Group
                      as={Row}
                      className="mb-3 justify-content-center"
                      controlId="formHorizontalAddress"
                    >
                      <Form.Label column sm={3} className="fw-bold">
                        Mật khẩu
                      </Form.Label>
                      <Col sm={5}>
                        <Form.Control
                          className=""
                          type="password"
                          placeholder=""
                        />
                      </Col>
                    </Form.Group>
                    <Form.Group
                      as={Row}
                      className="mb-3 justify-content-center"
                      controlId="formHorizontalAddress"
                    >
                      <Form.Label column sm={3} className="fw-bold">
                        Nhập mật khẩu mới
                      </Form.Label>
                      <Col sm={5}>
                        <Form.Control
                          className=""
                          type="password"
                          placeholder=""
                        />
                      </Col>
                    </Form.Group>
                    <Form.Group
                      as={Row}
                      className="mb-3 justify-content-center"
                      controlId="formHorizontalAddress"
                    >
                      <Form.Label column sm={3} className="fw-bold">
                        Nhập lại mật khẩu mới
                      </Form.Label>
                      <Col sm={5}>
                        <Form.Control
                          className=""
                          type="password"
                          placeholder=""
                        />
                      </Col>
                    </Form.Group>
                  </Form>
                  <div className="text-center">
                    <Button
                      variant="warning"
                      type="submit"
                      className="login-btn-submit"
                    >
                      <i class="fa-regular fa-circle-check"></i>&nbsp; CẬP NHẬT
                    </Button>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ChangePass;
