import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

const FormLogin = () => {
  return (
    <Row className="justify-content-center login-margin">
      <Col className="col-md-11">
        <div className="box-cont mt-5 d-flex flex-column align-items-center">
          <Form className="w-100">
            <Form.Group className="mb-4" controlId="formGroupEmail">
              <Form.Control
                type="email"
                className="login-button-padding fs-5"
                placeholder="Tên đăng nhập hoặc email"
              />
            </Form.Group>
            <Form.Group className="mb-4" controlId="formGroupPassword">
              <Form.Control
                type="password"
                className="login-button-padding fs-5"
                placeholder="Mật khẩu"
              />
            </Form.Group>
          </Form>
          <Button
            variant="outline-dark"
            type="submit"
            className="fs-5 fw-normal px-3"
            style={{ width: "35%" }}
          >
            <i className="fa-solid fa-right-to-bracket"></i> Đăng nhập
          </Button>
          <p className="mt-3">hoặc</p>
          <Row className="">
            <Col className="col-sm-6 col-xs-12">
              <div className="login-btn-submit-fb fs-6">
                <i className="fa-brands fa-facebook-f"></i> Đăng nhập bằng
                facebook
              </div>
            </Col>
            <Col className="col-sm-6 col-xs-12">
              <div className="login-btn-submit-gg">
                <i className="fa-brands fa-google"></i> Đăng nhập bằng google
              </div>
            </Col>
          </Row>
        </div>
        <div className="d-flex justify-content-between align-items-baseline">
          <div className="login-btn-register">
            <a href="">Đăng ký tài khoản</a>
          </div>
          <div className="login-btn-forget">
            <a href="">Quên mật khẩu</a>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default FormLogin;
