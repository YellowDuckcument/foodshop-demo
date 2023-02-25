import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import FormInfo from "./FormInfo";
import FormLogin from "./FormLogin";

function ShopBasketBar() {
    const [numberKey, setNumberKey] = useState('');

  return (
    <>
      <Nav
        justify
        variant="tabs"
        defaultActiveKey="/home"
        className="bg-light"
      > 
        <Nav.Item>
          <Nav.Link className="rounded-0" href="#" onClick={() => setNumberKey('0')}>
            Địa chỉ giao hàng
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="rounded-0" eventKey="link-1" onClick={() => setNumberKey('1')}>
            Đăng nhập
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <div className="d-flex justify-content-center bg-light" style={{height:"511px"}}>
        {numberKey === '0' ? <FormInfo /> : <FormLogin /> }
      </div>
    </>
  );
}

export default ShopBasketBar;
