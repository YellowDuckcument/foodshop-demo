import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import MenuManagement from "../components/MenuManagement";
import TopBanner from "../components/TopBanner";
import "./ManagerAccount.css";

const AddressList = () => {
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
                    <Link
                      className="text-secondary text-decoration-none"
                      as={Link}
                      to="/addressadd"
                    >
                      <i class="fa-solid fa-circle-plus"></i> Thêm địa chỉ giao
                      hàng
                    </Link>
                  </div>
                  <Row>
                    <Col className="col-sm-12 col-xs-12">
                      <div className="user-bgc-ttcn">
                        <small className="d-flex justify-content-between">
                          <em>Chưa có địa chỉ giao hàng mặc định</em>
                        </small>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AddressList;
