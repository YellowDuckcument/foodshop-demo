import { Button, Col, Container, Form, Row } from "react-bootstrap";
import TopBanner from "../components/TopBanner";
import Footer from "../containers/Footer";
import Headers from "../containers/Header";
import "./Signup.css";

const Signup = () => {
  return (
    <>
      <Headers></Headers>
      <TopBanner content="ĐĂNG KÝ TÀI KHOẢN" />
      <Container>
        <Row className="justify-content-center signup-margin">
          <Col className="col-sm-12 col-xs-12 col-md-8">
            <div className="col-md-offset-3">
              <div className="title_style3  mt-5 pt-3">
                <h3>ĐĂNG KÝ TÀI KHOẢN</h3>
              </div>
              <div className="box-cont">
                <Form>
                  <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="formHorizontalName"
                  >
                    <Form.Label column sm={3} className="signup-control-lable">
                      Tên đăng nhập
                    </Form.Label>
                    <Col sm={9}>
                      <Form.Control
                        className="signup-button-padding"
                        placeholder="Tên đăng nhập"
                      />
                    </Col>
                  </Form.Group>

                  <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="formHorizontalFullname"
                  >
                    <Form.Label column sm={3} className="signup-control-lable">
                      Họ và tên
                    </Form.Label>
                    <Col sm={9}>
                      <Form.Control
                        className="signup-button-padding"
                        placeholder="Họ và tên"
                      />
                    </Col>
                  </Form.Group>

                  <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="formHorizontalPassword"
                  >
                    <Form.Label column sm={3} className="signup-control-lable">
                      Mật khẩu
                    </Form.Label>
                    <Col sm={9}>
                      <Form.Control
                        className="signup-button-padding"
                        type="password"
                        placeholder="Mật khẩu"
                      />
                    </Col>
                  </Form.Group>

                  <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="formHorizontalRepeatPassword"
                  >
                    <Form.Label column sm={3} className="signup-control-lable">
                      Nhập lại mật khẩu
                    </Form.Label>
                    <Col sm={9}>
                      <Form.Control
                        className="signup-button-padding"
                        type="password"
                        placeholder="Nhập lại mật khẩu"
                      />
                    </Col>
                  </Form.Group>

                  <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="formHorizontalEmail"
                  >
                    <Form.Label column sm={3} className="signup-control-lable">
                      Email
                    </Form.Label>
                    <Col sm={9}>
                      <Form.Control
                        className="signup-button-padding"
                        type="email"
                        placeholder="Email"
                      />
                    </Col>
                  </Form.Group>

                  <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="formHorizontalPhone"
                  >
                    <Form.Label column sm={3} className="signup-control-lable">
                      Số điện thoại
                    </Form.Label>
                    <Col sm={9}>
                      <Form.Control
                        className="signup-button-padding"
                        placeholder="Số điện thoại"
                      />
                    </Col>
                  </Form.Group>

                  <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="formHorizontalPhone"
                  >
                    <Form.Label column sm={3} className="signup-control-lable">
                      Tỉnh thành
                    </Form.Label>
                    <Col sm={9}>
                      <Form.Select
                        aria-label="Default select example"
                        className="signup-button-padding"
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
                    className="mb-3"
                    controlId="formHorizontalPhone"
                  >
                    <Form.Label column sm={3} className="signup-control-lable">
                      Quận huyện
                    </Form.Label>
                    <Col sm={9}>
                      <Form.Select
                        aria-label="Default select example"
                        className="signup-button-padding"
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
                    className="mb-3"
                    controlId="formHorizontalAddress"
                  >
                    <Form.Label column sm={3} className="signup-control-lable">
                      Địa chỉ
                    </Form.Label>
                    <Col sm={9}>
                      <Form.Control
                        className="signup-button-padding"
                        placeholder="Địa chỉ"
                      />
                    </Col>
                  </Form.Group>
                </Form>
                <div className="text-center">
                  <Button
                    variant="warning"
                    type="submit"
                    className="signup-btn-submit me-2"
                  >
                    <i className="fa-regular fa-circle-check"></i>&nbsp; Đăng ký
                  </Button>
                  <Button
                    variant="warning"
                    type="submit"
                    className="signup-btn-submit ms-2"
                  >
                    <i className="fa-solid fa-xmark"></i>&nbsp; Hủy bỏ
                  </Button>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </>
  );
};

export default Signup;
