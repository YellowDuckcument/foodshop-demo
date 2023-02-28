import { Col, Container, Row, Table } from "react-bootstrap";
import MenuManagement from "../components/MenuManagement";
import TopBanner from "../components/TopBanner";
import "./ManagerAccount.css";

const ManagerAccount = () => {
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
                  <div className="title_style4 ">
                    <h4>
                      <i className="fa-solid fa-address-card me-4"></i>ĐĂNG KÝ TÀI
                      KHOẢN
                    </h4>
                  </div>
                  <Row>
                    <Col className="col-sm-6 col-xs-12">
                      <div className="user-bgc-ttcn">
                        <h5 className="d-flex justify-content-between">
                          Thông tin cá nhân
                          <i className="fa-solid fa-pen-to-square change-icon-ttcn"></i>
                        </h5>
                        <div className="title_style-user">
                          <p>
                            <i className="fa-solid fa-circle-info me-4"></i>Hà Thị
                            Tường Vy
                          </p>
                        </div>
                        <div className="title_style-user">
                          <p>
                            <i className="fa-regular fa-envelope me-4"></i>
                            vyhtt@gmail.com
                          </p>
                        </div>
                        <div className="title_style-user">
                          <p>
                            <i className="fa-solid fa-gift me-4"></i>0 (Điểm thưởng)
                          </p>
                        </div>
                        <a className="color-tdmk">Thay đổi mật khẩu</a>
                      </div>
                    </Col>
                    <Col className="col-sm-6 col-xs-12">
                      <div className="user-bgc-ttcn">
                        <h5 className="d-flex justify-content-between">
                          Địa chỉ giao hàng mặc định
                        </h5>
                        <div className="mt-3 ms-3">
                          <p>
                            <small>
                              <em>Chưa có địa chỉ giao hàng mặc định</em>
                            </small>
                          </p>
                        </div>
                        <a className="color-tdmk" href="">
                          Thêm địa chỉ giao hàng
                        </a>
                      </div>
                    </Col>
                  </Row>
                  <div className="mt-4">
                    <h5 className="d-flex justify-content-between">
                      Địa chỉ giao hàng mặc định
                    </h5>
                    <Table striped bordered hover>
                      <thead>
                        <tr className="text-bg-secondary text-center">
                          <th>Mã đơn hàng</th>
                          <th>
                            <i className="fa-solid fa-money-bill-1"></i>
                          </th>
                          <th>
                            <i className="fa-solid fa-calendar-days"></i> Ngày đặt
                            hàng
                          </th>
                          <th>Trạng thái</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td colSpan={4} className="text-bg-light">
                            Chưa có đơn hàng
                          </td>
                        </tr>
                      </tbody>
                    </Table>
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

export default ManagerAccount;
