import { useEffect, useState } from "react";
import { Col, NavDropdown, Row } from "react-bootstrap";
import CategoriesService from "../service/CategoriesService";

const ListCatogeryBar = () => {
  const [categories, setCategories] = useState([]);

  const loadData = () => {
    CategoriesService.list().then((res) => setCategories(res.data));
  };

  useEffect(() => {
    loadData();
  }, []);

  const arrLevel1 = categories.filter((a) => a.PARENT_ID === 0);

  return (
    <>
      <Row style={{ width: `${160*arrLevel1.length}px` }}>
        {arrLevel1.map((level1, id) => {
          const arrLevel2 = categories.filter(
            (a) => a.PARENT_ID === level1.CAT_ID
          );

          return (
            <Col>
              <NavDropdown.Item
                href="/shopstore"
                className="fs-6 text-uppercase fw-bold"
              >
                {level1.Name}
              </NavDropdown.Item>
              <NavDropdown.Divider />
              {arrLevel2.map((level2, id) => (
                <NavDropdown.Item href="#action/3.2">
                  {level2.Name}
                </NavDropdown.Item>
              ))}
            </Col>
          );
        })}

      </Row>
    </>
  );
};

export default ListCatogeryBar;
