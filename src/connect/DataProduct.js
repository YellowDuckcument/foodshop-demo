import React, { useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import ContentProduct from "../pages/ContentProduct";
import meatService from "../service/meatService";

function DataProduct() {

  const [dataMeat, setDataMeat] = useState([]);
  
  const loadData = () => {
    meatService.list().then((res) => setDataMeat(res.data));
  };

  useEffect(() => {
    loadData();
  }, []);


  return (
    <>
      {dataMeat.map((data, id) => (
        <Col md={4} className="p-0 mt-2 text-center" key={id}>
          <ContentProduct
            classProduct={data.class}
            nameProduct={data.nameProduct}
            price={data.price}
            image={data.image}
          />
        </Col>
      ))}
    </>
  );
}

export default DataProduct;
