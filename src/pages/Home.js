import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import Nav from "react-bootstrap/Nav";
import "./Home.css";
import FooterAdd from "../components/FooterAdd";
const Home = () => {
  return (
    <>
      {/* About Us */}
      <Container fluid className="p-0">
        <Row className="m-0">
          <Col className="p-0">
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="../img/home_banner_01.jpg"
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="../img/home_banner_02.jpg"
                  alt="Second slide"
                />
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
      <div className="aboutUs__bg">
        <Container>
          <Row>
            <Col>
              <div className="d-flex justify-content-center position-relative">
                <div className="about_us--html" style={{ maxWidth: "100%" }}>
                  <div className="card-body text-center">
                    <h2 className="card-title about__us mt-5 mb-2 pb-4">
                      About Us
                    </h2>
                    <div className="line"></div>
                    <p className="card-text mx-5 px-5 mt-4 mb-5">
                      Sed eleifend, lacus nec bibendum pulvinar, nibh mauris
                      vehicula augue, sit amet mattis ligula lorem eu nisl.
                      Integer a egestas mauris. Nam id diam blandit, condimentum
                      dolor ut, euismod arcu. Sed eleifend, lacus nec bibendum
                      pulvinar, nibh mauris vehicula augue, sit amet mattis
                      ligula lorem eu nisl. Integer a egestas mauris. Nam id
                      diam blandit, condimentum dolor ut, euismod arcu.
                    </p>
                    <a href="#" className="card-link readMore-custom">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <img
                src={
                  process.env.PUBLIC_URL +
                  "../img/home_custom_aboutus_cover.jpg"
                }
                style={{ maxWidth: "100%" }}
                alt="banner"
              ></img>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Big Sale Today */}
      <Container className="p-0 mb-5 pb-4">
        <Row>
          <Col className="">
            <h2 className="card-title about__us mt-5 mb-2 pb-4 text-center">
              Big Sale Today
            </h2>
            <div className="line"></div>
            <Row className="mt-5">
              <Col className="col-sm-6 col-md-5">
                <img
                  src={
                    process.env.PUBLIC_URL + "../img/home_custom_bigsale.jpg"
                  }
                  style={{ maxWidth: "100%" }}
                  alt="bannar"
                ></img>
              </Col>
              <Col className="col-sm-6 col-md-7">
                <div className="bigSale-content">
                  <h2 className="mb-4">
                    GET 30% OFF YOUR ORDER OF $100 OR MORE...
                  </h2>
                  <p>
                    Duis sed odio sit amet nibh vutate cursus a sit amet mauris.
                    Morbi accumsan ipsum velit.Duis sed odio sit amet nibh
                    vutate cursus a sit amet mauris. Morbi accumsan ipsum velit.
                  </p>
                </div>
                <div className="time-custom mt-4">
                  <div id="demo" className="time-demo">
                    <p className="m-2">Th???i gian ?????m ng?????c k???t th??c</p>
                  </div>
                  <div className="time-content">
                    <div className="time-text time-day">Day</div>
                    <div className="time-text time-hours">Hours</div>
                    <div className="time-text time-mins">Mins</div>
                    <div className="time-text time-secs">Secs</div>
                  </div>
                </div>
                <div className="readMore-sale mt-5">
                  <a href="#">Shop now</a>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>

      <Container fluid className="p-0 mb-5 pb-4">
        <Row className="m-0">
          <Col className="col-xs-12 col-md-12 p-0">
            <Row className="m-0">
              <Col className="col-xs-12 col-md-6 p-0">
                <div className="banner-adver banner-1">
                  <Row className="m-0">
                    <Col className="col-md-6 p-0">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "../img/home_custom_bigsale_01.png"
                        }
                        style={{ maxWidth: "100%" }}
                        className="mt-4 pt-2"
                        alt="bannar"
                      ></img>
                    </Col>
                    <Col className="col-md-6 p-0">
                      <div className="banner-content banner01-content">
                        <h2>Save up to 50%</h2>
                        <h4>on your first purchase</h4>
                        <div className="readMore-banner readMore-banner-01 mt-4 pt-3">
                          <a href="#">Shop now</a>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
              <Col className="col-xs-12 col-md-6 p-0">
                <div className="banner-adver banner-2">
                  <Row className="m-0">
                    <Col className="col-md-6 p-0">
                      <div className="banner-content banner02-content">
                        <h2>Free Shipping</h2>
                        <h4>on order $99</h4>
                        <div className="readMore-banner readMore-banner-02 mt-4 pt-3">
                          <a href="#">Shop now</a>
                        </div>
                      </div>
                    </Col>
                    <Col className="col-md-6 p-0">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "../img/home_custom_bigsale_02.png"
                        }
                        style={{ maxWidth: "100%" }}
                        alt="bannar"
                      ></img>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>

      {/* Our Products */}
      <Container fluid className="p-0 pt-4">
        <Row className="m-0">
          <Col className="col-xs-12 col-md-12 p-0">
            <div className="box-product">
              <div className="tab-product clearfix">
                <div className="block-custom">
                  <h2 className="title-custom pb-3">Our Product</h2>
                  <div className="line mt-4"></div>
                </div>
                <Nav className="justify-content-center mt-5" activeKey="/home">
                  <Nav.Item>
                    <Nav.Link href="#" className="tab-item-01">
                      Rau-C???-Qu??? <span className="ps-4">/</span>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="link-1" className="tab-item-02">
                      Th???t-H???i S???n
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </div>
            </div>
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="../img/home_custom_ourproduct_02.jpg"
                  alt="First slide"
                />
                <Carousel.Caption>
                  <img
                    className="rounded-circle mb-5"
                    src="../img/home_custm_ourproduct_01.jpg"
                    alt="Second slide"
                  />
                  <h5 className="mt-2 mb-4 pb-2">
                    Quisque nec facilisis sem. In at commodo velit. Aliquam
                    tempor volutpat laoreet. Quisque non tellus eleifend arcu
                    gravida aliquam. Vivamus quis consequat nisl, nec luctus
                    libero. Nam sodales sem egestas sem blandit volutpat.
                  </h5>
                  <h6 className="item-product--Kushova mt-3 mb-4">
                    <i className="fa-solid fa-minus"></i> Kushova
                    <i className="fa-solid fa-minus"></i>
                  </h6>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="../img/home_custom_ourproduct_02.jpg"
                  alt="Second slide"
                />
                <Carousel.Caption>
                  <img
                    className="rounded-circle mb-5"
                    src="../img/home_custm_ourproduct_01.jpg"
                    alt="Second slide"
                  />
                  <h5 className="mt-2 mb-4 pb-2">
                    Quisque nec facilisis sem. In at commodo velit. Aliquam
                    tempor volutpat laoreet. Quisque non tellus eleifend arcu
                    gravida aliquam. Vivamus quis consequat nisl, nec luctus
                    libero. Nam sodales sem egestas sem blandit volutpat.
                  </h5>
                  <h6 className="item-product--Kushova mt-4">
                    <i className="fa-solid fa-minus"></i> Kushova
                    <i className="fa-solid fa-minus"></i>
                  </h6>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="../img/home_custom_ourproduct_02.jpg"
                  alt="Third slide"
                />
                <Carousel.Caption>
                  <img
                    className="rounded-circle mb-5"
                    src="../img/home_custm_ourproduct_01.jpg"
                    alt="Second slide"
                  />
                  <h5 className="mt-2 mb-4 pb-2">
                    Quisque nec facilisis sem. In at commodo velit. Aliquam
                    tempor volutpat laoreet. Quisque non tellus eleifend arcu
                    gravida aliquam. Vivamus quis consequat nisl, nec luctus
                    libero. Nam sodales sem egestas sem blandit volutpat.
                  </h5>
                  <h6 className="item-product--Kushova mt-4">
                    <i className="fa-solid fa-minus"></i> Kushova
                    <i className="fa-solid fa-minus"></i>
                  </h6>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>

      {/* Blog */}
      <Container className="p-0 mb-5 pb-4 mt-5">
        <Row>
          <Col className="">
            <h2 className="card-title about__us mt-5 mb-2 pb-4 text-center">
              LASTEST FROM BLOG
            </h2>
            <div className="line mt-3 mb-4"></div>
            <p className="slogan-text">
              Get started on your healthy adventure. Find out latest recipe
              inspiration and diet tips to have a happy and healthier way to
              eat.
            </p>
            <Row className="mt-5">
              <Col className="col-sm-12 col-md-6 col-xs-12">
                <Card className="card-blog-boder">
                  <Card.Img
                    variant="top"
                    src="../img/home_custom_blog_01.jpg"
                  />
                  <Card.Body>
                    <p className="more-blogs mb-2">
                      <span>
                        <i className="fa-regular fa-clock"></i> 14:46 - 29/06/2018
                      </span>
                    </p>
                    <Card.Title>
                      <a href="#/" className="card-blog-title mb-3">
                        6 TH???C PH???M B??? N??O, T??NG C?????NG TR?? NH??? B???N N??N ??N...
                      </a>
                    </Card.Title>
                    <Card.Text>
                      Ch??ng ta ?????u bi???t r???ng u???ng c?? ph?? th?????ng gi??p ch??ng ta
                      t???nh t??o l??u h??n v?? linh ho???t h??n. ????? t??ng s??? t???p...
                    </Card.Text>
                    <div className="readMore-sale readMore-blog mt-5">
                      <a href="#">
                        XEM TH??M <i className="fa-solid fa-angles-right"></i>
                      </a>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col className="col-sm-12 col-md-6 col-xs-12">
                <Card className="card-blog-boder">
                  <Card.Img
                    variant="top"
                    src="../img/home_custom_blog_02.jpg"
                  />
                  <Card.Body>
                    <p className="more-blogs mb-2">
                      <span>
                        <i className="fa-regular fa-clock"></i> 15:25 - 13/07/2018
                      </span>
                    </p>
                    <Card.Title>
                      <a href="#/" className="card-blog-title mb-3">
                        N???U ??N NGON H??N NH??? TH???C PH???M S???CH
                      </a>
                    </Card.Title>
                    <Card.Text>
                      ??n u???ng l?? chuy???n mu??n thu??? c???a con ng?????i. Ng??y x??a ch???
                      c???n ??n no, b??y gi??? ch??ng ta c???n ??n ngon. R???i v???n n???n th???c
                      ph???m...
                    </Card.Text>
                    <div className="readMore-sale readMore-blog mt-5">
                      <a href="#">
                        XEM TH??M <i className="fa-solid fa-angles-right"></i>
                      </a>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>

      {/* Footer Add */}
      <FooterAdd></FooterAdd>
    </>
  );
};

export default Home;
