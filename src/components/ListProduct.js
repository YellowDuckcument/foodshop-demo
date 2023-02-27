import { faAngleRight, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { ListGroup } from "react-bootstrap";

const ListProduct = (props) => {
  const { key, level_1, level_2, parentCallback, childCallBack } = props;
  const dataBigClassProducts = level_2.map((a) => a.CAT_ID);

  const [show, setShow] = React.useState(false);

  return (
    <>
      <ListGroup.Item
        key={key}
        onClick={() => {
          if (show) {
            setShow(false);
          } else {
            setShow(true);
          }
          parentCallback(dataBigClassProducts);
        }}
        className="fs-6 text-uppercase fw-bolder cursor-pointer d-flex"
      >
        <p className="w-100 m-0">{level_1.Name}</p>{" "}
        <FontAwesomeIcon icon={faCaretDown} className="flex-shrink-1" />
      </ListGroup.Item>

      <div className={show ? "drop-item-shop" : "drop-item-shop show"}>
        {level_2.map((data, id) => (
          <ListGroup.Item
            className="text-start ps-5 cursor-pointer"
            key={id}
            onClick={() => childCallBack([data.CAT_ID])}
          >
            <FontAwesomeIcon icon={faAngleRight} className="me-3" />
            {data.Name}
          </ListGroup.Item>
        ))}
      </div>
    </>
  );
};

export default ListProduct;
