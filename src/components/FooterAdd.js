import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../containers/Footer.css";

const FooterAdd = (props) => {
  const { content } = props;

  return (
    <>
      <div
        id="slider-partner-37"
        className="owl-carousel owl-theme"
        style={{ opacity: 1, display: "block" }}
      >
        <Container>
          <div
            className="d-flex justify-content-center my-5"
            style={{
              width: "100%",
              display: "block",
            }}
          >
            <div className="text-center img" style={{ width: 195 }}>
              <img src="https://food-03.web4s.vn/uploads/plugin/partner/33/i-tac-6-logo6-x11409.png" />{" "}
            </div>
            <div className="text-center img" style={{ width: 195 }}>
              <img src="https://food-03.web4s.vn/uploads/plugin/partner/32/i-tac-5-logo5-x11409.png" />{" "}
            </div>
            <div className="text-center img" style={{ width: 195 }}>
              <img src="https://food-03.web4s.vn/uploads/plugin/partner/31/i-tac-4-logo4-x11409.png" />{" "}
            </div>
            <div className="text-center img" style={{ width: 195 }}>
              <img src="https://food-03.web4s.vn/uploads/plugin/partner/30/i-tac-3-logo3-x11409.png" />{" "}
            </div>
            <div className="text-center img" style={{ width: 195 }}>
              <img src="https://food-03.web4s.vn/uploads/plugin/partner/29/i-tac-2-logo2-x11409.png" />{" "}
            </div>
            <div className="text-center img" style={{ width: 195 }}>
              <img src="https://food-03.web4s.vn/uploads/plugin/partner/28/i-tac-1-logo1-x11409.png" />{" "}
            </div>
          </div>
        </Container>
      </div>

      <Container
        fluid
        className="p-0 mb-5 pb-4"
        style={{
          backgroundImage: `url("../img/home_custom_footer-01.jpg")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "200px",
        }}
      >
        <Row className="m-0">
          <Col className="col-xs-12 col-md-12 m-0">
            <Container>
              <Row>
                <Col className="col-xs-12 col-md-6 p-0 mt-4">
                  <div className="ms-5">
                    <h2 className="contact-email-custom mt-5">
                      SUBSCRIBE TO US!
                    </h2>
                    <p className="mt-5">
                      Enter Your email address for our mailing list to keep
                      yourself update.
                    </p>
                  </div>
                </Col>
                <Col className="col-xs-12 col-md-6 p-0 mt-4 ps-5 pe-5">
                  <form className="d-flex mt-5">
                    <input
                      className="form-control me-2"
                      type="search"
                      placeholder="Nhập thông tin đăng ký"
                      aria-label="Search"
                    />
                    <button
                      className="btn btn-outline-success contact-email-btn"
                      type="submit"
                    >
                      Search
                    </button>
                  </form>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default FooterAdd;
