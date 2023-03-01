import React, { useEffect, useState } from "react";
import { Col, Pagination } from "react-bootstrap";
import ContentProduct from "../components/ContentProduct";
import ProductsService from "../service/ProductsService";

function DataProduct({ CatId }) {
  const [dataProduct, setDataProduct] = useState([]);
  // const [pageCatid, setPageCatid] = useState([]);

  const loadData = () => {
    ProductsService.list().then((res) => setDataProduct(res.data));
  };

  useEffect(() => {
    loadData();
  }, [CatId]);

  const lengthProducts = dataProduct.length;

  let lisNumberPages = null;
  // let lisNumberPages = (lengthProducts/9) > (lengthProducts/9).toFixed() ? (lengthProducts/9).toFixed() + 1 : (lengthProducts/9).toFixed();
  if (lengthProducts / 9 > parseInt(lengthProducts / 9)) {
    lisNumberPages = parseInt(lengthProducts / 9) + 1;
  } else {
    lisNumberPages = lengthProducts / 9;
  }
  
  const [customerPoint, setCustomerPoint] = useState(1);

  let items = [];
  for (let number = 1; number <= lisNumberPages; number++) {

    const listProduct = CatId.filter((data, id) => id < 9)
    // setPageCatid(listProduct)

    items.push(
      <Pagination.Item key={number} active={number === customerPoint}  onClick={e => setCustomerPoint(parseInt(e.target.innerText))}>
        {number}
      </Pagination.Item>
    );
  }

  return (
    <>
      {dataProduct.map(
        (data, id) =>
          CatId.some((arr) => data.CAT_ID === arr) && (
            <Col md={4} className="p-0 mt-2 text-center" key={id}>
              <ContentProduct
                nameProduct={data.Name}
                price={data.Price}
                image={data.Description}
              />
            </Col>
          )
      )}
      {/* Pagination */}
      <div className="d-flex justify-content-center mt-5">
        <Pagination size="lg">
          <Pagination.First />
          <Pagination.Prev />
          {items}
          <Pagination.Next />
          <Pagination.Last />
        </Pagination>
      </div>
    </>
  );
}

export default DataProduct;
