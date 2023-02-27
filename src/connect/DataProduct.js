import React, { useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import ContentProduct from "../pages/ContentProduct";
import ProductsService from "../service/ProductsService";

function DataProduct({ CatId }) {
  const [dataProduct, setDataProduct] = useState([]);

  const loadData = () => {
    ProductsService.list().then((res) => setDataProduct(res.data));
  };

  useEffect(() => {
    loadData();
  }, []);


  return (
    <>
      {dataProduct.map((data, id) => (        
        CatId.some(arr => data.CAT_ID === arr )        
        &&
        <Col md={4} className="p-0 mt-2 text-center" key={id}>
          <ContentProduct
            nameProduct={data.Name}
            price={data.Price}
            image={data.Description}
          />
        </Col>
      ))}
    </>
  );
}

export default DataProduct;
