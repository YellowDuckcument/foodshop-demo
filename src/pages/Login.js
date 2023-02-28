import { Button, Col, Container, Form, Row } from "react-bootstrap";
import FooterAdd from "../components/FooterAdd";
import TopBanner from "../components/TopBanner";
import Footer from "../containers/Footer";
import Headers from "../containers/Header";
import "./Login.css";

const Login = () => {
  return (
    <>
      <Headers></Headers>
      <TopBanner content="ĐĂNG NHẬP" />
      <Container>
        <Row className="justify-content-center login-margin">
          <Col className="col-sm-12 col-xs-12 col-md-6">
            <div className="col-md-offset-3">
              <div className="title_style3 mt-5 pt-3">
                <h3>ĐĂNG NHẬP</h3>
              </div>
              <div className="box-cont">
                <Form>
                  <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label className="login-control-lable ">
                      Tên đăng nhập
                    </Form.Label>
                    <Form.Control
                      type="email"
                      className="login-button-padding"
                      placeholder="Tên đăng nhập hoặc email"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label className="login-control-lable ">
                      Mật Khẩu
                    </Form.Label>
                    <Form.Control
                      type="password"
                      className="login-button-padding"
                      placeholder="Mật khẩu"
                    />
                  </Form.Group>
                </Form>
                <Button
                  variant="warning"
                  type="submit"
                  className="login-btn-submit"
                >
                  <i className="fa-solid fa-right-to-bracket"></i>&nbsp; Đăng nhập
                </Button>
                <Row className="mt-4">
                  <Col className="col-sm-6 col-xs-12">
                    <div className="login-btn-submit-fb">
                      <i className="fa-brands fa-facebook-f"></i>&nbsp; Đăng nhập
                      bằng facebook
                    </div>
                  </Col>
                  <Col className="col-sm-6 col-xs-12">
                    <div className="login-btn-submit-gg">
                      <i className="fa-brands fa-google"></i>&nbsp; Đăng nhập bằng
                      google
                    </div>
                  </Col>
                </Row>
                <div className="mt-4">
                  <div className="login-btn-register">
                    <a href="">Đăng ký tài khoản</a>
                  </div>
                  <div className="login-btn-forget">
                    <a href="">Quên mật khẩu</a>
                  </div>
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

export default Login;
