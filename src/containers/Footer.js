import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";

const Footer = () => {
  return (
    <>
      <div>
        <Container className="mb-5">
          <Row>
            <Col className="">
              <Row>
                <Col className="col-sm-3">
                  <h4>ABOUT</h4>
                  <div className="footer-line"></div>
                  <p className="mt-4">
                    Organic chuyên cung cấp những sản phẩm được kiểm soát chặt
                    chẽ từ khâu con giống, chế biến thức ăn, chăm sóc sức khỏe
                    vật nuôi đến giết mổ, bao gói, bảo quản và vận chuyển một
                    cách tốt nhất, sạch nhất cho thị trường.
                  </p>
                  <Row className="footer-ul-list">
                    <Col>
                      <ul>
                        <li>
                          <a>
                            <i className="fa-brands fa-facebook footer-color-iconf"></i>
                          </a>
                        </li>
                      </ul>
                    </Col>
                    <Col>
                      <ul>
                        <li>
                          <a>
                            <i className="fa-brands fa-twitter footer-color-icont"></i>
                          </a>
                        </li>
                      </ul>
                    </Col>
                    <Col>
                      <ul>
                        <li>
                          <a>
                            <i className="fa-brands fa-google-plus-g footer-color-icong"></i>
                          </a>
                        </li>
                      </ul>
                    </Col>
                    <Col>
                      <ul>
                        <li>
                          <a>
                            <i className="fa-brands fa-pinterest footer-color-iconp"></i>
                          </a>
                        </li>
                      </ul>
                    </Col>
                  </Row>
                </Col>
                <Col className="col-sm-3">
                  <h4>CONTACT</h4>
                  <div className="footer-line"></div>
                  <div className="mt-4 footer-contact-icon">
                    <p>
                      <i className="fa-solid fa-location-dot"></i>&nbsp; 32 Võ Văn
                      Dũng, Đống Đa, Hà Nội
                    </p>
                    <p>
                      <i className="fa-solid fa-phone"></i>&nbsp; (84) 7308 6680
                    </p>
                    <p>
                      <i className="fa-solid fa-envelope"></i>&nbsp;
                      web.nhanhoa@gmail.com
                    </p>
                  </div>
                </Col>
                <Col className="col-sm-3">
                  <h4>PHOTO IN INSTAGRAM</h4>
                  <div className="footer-line"></div>
                  <div className="mt-4">
                    <Row>
                      <Col className="pe-0">
                        <a href="#">
                          <img
                            className="d-block w-100"
                            src="../img/footer-photo-1.jpg"
                            alt="Second slide"
                          />
                        </a>
                      </Col>
                      <Col className="pe-0">
                        <a href="#">
                          <img
                            className="d-block w-100"
                            src="../img/footer-photo-2.jpg"
                            alt="Second slide"
                          />
                        </a>
                      </Col>
                      <Col>
                        <a href="#">
                          <img
                            className="d-block w-100"
                            src="../img/footer-photo-3.jpg"
                            alt="Second slide"
                          />
                        </a>
                      </Col>
                    </Row>
                    <Row className="mt-2">
                      <Col className="pe-0">
                        <a href="#">
                          <img
                            className="d-block w-100"
                            src="../img/footer-photo-4.jpg"
                            alt="Second slide"
                          />
                        </a>
                      </Col>
                      <Col className="pe-0">
                        <a href="#">
                          <img
                            className="d-block w-100"
                            src="../img/footer-photo-5.jpg"
                            alt="Second slide"
                          />
                        </a>
                      </Col>
                      <Col>
                        <a href="#">
                          <img
                            className="d-block w-100"
                            src="../img/footer-photo-6.jpg"
                            alt="Second slide"
                          />
                        </a>
                      </Col>
                    </Row>
                  </div>
                </Col>
                <Col className="col-sm-3">
                  <div className=" footer-bill-border">
                    <div className="d-flex justify-content-center ">
                      <Row className="mt-3">
                        <Col className="mt-4 col-sm-4">
                          <div className="footer-line"></div>
                        </Col>
                        <Col className="col-sm-4">
                          <span className="footer-bill-icon ">
                            <img
                              className="d-block w-15 "
                              src="../img/footer-bill.png"
                              alt="Second slide"
                            />
                          </span>
                        </Col>
                        <Col className="mt-4 col-sm-4">
                          <div className="footer-line"></div>
                        </Col>
                      </Row>
                    </div>
                    <div className="text-center mt-3 footer-bill-weight">
                      <h6>Monday to Friday:</h6>
                      <h5>08:00am - 08:00pm</h5>
                      <h6>Saturday & Sunday:</h6>
                      <h5>10:00am - 06:00pm</h5>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
        <div className="footer-line-copy">
          <p className="footer-line-copycom">Copyright by Food.com</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
