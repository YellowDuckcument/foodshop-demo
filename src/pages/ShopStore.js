import {
  faAngleRight,
  faBorderAll,
  faCaretDown,
  faListSquares,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  ListGroup,
  Nav,
  Navbar,
  NavDropdown,
  Row,
  lldata,
} from "react-bootstrap";
import ListProduct from "../components/ListProduct";
import TopBanner from "../components/TopBanner";
import DataProduct from "../connect/DataProduct";
import CategoriesService from "../service/CategoriesService";

const ShopStore = () => {
  const [categories, setCategories] = useState([]);

  const loadData = () => {
    CategoriesService.list().then((res) => setCategories(res.data));
  };

  const [catId, setCatId] = React.useState([]);

  const dataAll = categories.map((a) => a.CAT_ID);

  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      if (count < 3) {
        setCatId(dataAll);
        console.log(dataAll);
        setCount(count + 1);
      }
    }, 500);
  }, [count]);

  useEffect(() => {
    loadData();
  }, []);

  // Danh mục Rau- Củ -Quả
  const dataParent = categories.filter((a) => a.PARENT_ID === 0);

  // Hàm callback gọi data từ component con
  const callbackFunction = (childData) => {
    setCatId(childData);
  };

  return (
    <div className="" style={{ height: "1800px" }}>
      <TopBanner content="Rau - củ - quả" />
      <Container className="mt-4">
        <Row className="gx-3">
          <Col md={3}>
            <ListGroup>
              <ListGroup.Item
                className="fs-6 text-uppercase fw-bold"
                style={{ height: "60px" }}
              >
                Danh Mục sản phẩm
              </ListGroup.Item>

              {dataParent.map((data, id) => {
                const dataPlantAll = categories.filter(
                  (a) => a.PARENT_ID === data.CAT_ID
                );

                return (
                  <ListProduct
                    key={id}
                    level_1={data}
                    level_2={dataPlantAll}
                    parentCallback={callbackFunction}
                    childCallBack={callbackFunction}
                  />
                );
              })}
            </ListGroup>
          </Col>

          <Col md={9}>
            <Row>
              <Navbar
                bg="white"
                className="border rounded-1 border-black-50"
                style={{
                  overflow: "hidden",
                  width: "98%",
                  left: "1%",
                  height: "60px",
                }}
              >
                <Container>
                  <Navbar.Collapse className="d-flex justify-content-between">
                    <Nav className="">
                      <Nav.Link
                        href="#action1"
                        className="text-dark fs-4 pb-0 pt-1"
                      >
                        <FontAwesomeIcon icon={faBorderAll} />
                      </Nav.Link>
                      <Nav.Link
                        href="#action2"
                        className="text-dark fs-4 pb-0 pt-1"
                      >
                        <FontAwesomeIcon icon={faListSquares} />
                      </Nav.Link>
                    </Nav>
                    <p className="d-block text-uppercase fw-bold m-0">
                      Danh sách sản phẩm hiển thị
                    </p>
                    <Form className="d-flex">
                      <Form.Control
                        type="search"
                        placeholder="Sắp xếp theo vị trí"
                        className="py-1"
                        aria-label="Search"
                      />
                    </Form>
                  </Navbar.Collapse>
                </Container>
              </Navbar>
            </Row>

            <Row className="">
              <DataProduct
                CatId={[...catId] === [] ? [...dataAll] : [...catId]}
              />
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ShopStore;
