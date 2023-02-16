import { Button, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const MiniBasket = (props) => {
  return (
    <>
      {props.id === 0 ? (
        <>
          <NavDropdown.Item href="#action/3.1">
            Không có sản phẩm nào trong giỏ hàng
          </NavDropdown.Item>
          <NavDropdown.Divider />
        </>
      ) : (
        <>
          <NavDropdown.Item href="#action/3.1">
            Có một sản phẩm trong giỏ hàng
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item className="text-center m-0 p-0 ">
            <Link to="/shopbasket">
              <Button
                variant="dark"
                size="lg"
                className="fs-6 p-1 px-4 rounded-0 text-uppercase"
              >
                Thông tin giỏ hàng
              </Button>
            </Link>
          </NavDropdown.Item>
        </>
      )}
    </>
  );
};

export default MiniBasket;
