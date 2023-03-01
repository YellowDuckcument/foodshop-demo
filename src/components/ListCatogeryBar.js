import { useEffect, useState } from "react";
import { Col, NavDropdown,  Row } from "react-bootstrap";
// import { useDispatch } from "react-redux";
import { NavLink, Link, useNavigate } from "react-router-dom";
// import { numPrt } from "../redux/DataRender";
import CategoriesService from "../service/CategoriesService";

const ListCatogeryBar = (props) => {
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
      
      <Row style={{ width: `${160 * arrLevel1.length}px` }}>
        {arrLevel1.map((level1, id) => {
          const arrLevel2 = categories.filter(
            (a) => a.PARENT_ID === level1.CAT_ID
            );
            
            return (
              <Col>
              <NavDropdown.Item
                className="fs-6 text-uppercase fw-bold"
                as={NavLink}
                to={`/shopstore/${level1.CAT_ID}`}
              >
                {level1.Name}
              </NavDropdown.Item>
              <NavDropdown.Divider />
              {arrLevel2.map((level2, id) => (
                <NavDropdown.Item
                  as={NavLink}
                  to={`/shopstore/${level2.CAT_ID}`}
                >
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
