import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../containers/Footer.css";

const FooterAdd = (props) => {
  const { content } = props;

  return (
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
                <div className="contact-email-margin ms-5">
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
  );
};

export default FooterAdd;
