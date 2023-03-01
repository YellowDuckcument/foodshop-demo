import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const MenuManagement = (props) => {
  return (
    <Container>
      <Row>
        <Col>
          <div className="title_style5 mt-5 pt-3">
            <h5>Hà Thị Tường Vy</h5>
          </div>
          <div className="title_stylep">
            <Link
              className="text-decoration-none text-dark"
              as={Link}
              to="/qltk"
            >
              <i className="fa-solid fa-address-card me-4"></i>Quản lý tài khoản
            </Link>
          </div>
          <div className="title_stylep">
            <Link className="text-decoration-none text-dark">
              <i className="fa-regular fa-file-lines me-4"></i>Quản lý đơn hàng
            </Link>
          </div>
          <div className="title_stylep">
            <Link
              className="text-decoration-none text-dark"
              as={Link}
              to="/sdc"
            >
              <i className="fa-regular fa-address-book me-4"></i>
              Sổ địa chỉ
            </Link>
          </div>
          <div className="title_stylep">
            <Link className="text-decoration-none text-dark">
              <i className="fa-solid fa-circle-info me-4"></i>Thông tin tài khoản
            </Link>
          </div>
          <div className="title_stylep">
            <Link
              className="text-decoration-none text-dark"
              as={Link}
              to="/tdmk"
            >
              <i className="fa-solid fa-unlock me-4"></i>Thay đổi mật khẩu
            </Link>
          </div>
          <div className="title_stylep">
            <Link className="text-decoration-none text-dark">
              <i className="fa-solid fa-right-from-bracket me-4"></i>Thoát tài khoản
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default MenuManagement;
