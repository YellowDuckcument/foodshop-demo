import React, { useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import ContentProduct from "../pages/ContentProduct";
import meatService from "../service/meatService";

function DataProduct() {
  const dataProduct = [
    {
      id: 6,
      class: "Thủy - Hải sản",
      nameProduct: "Bạch tuộc tươi",
      price: "79,500",
      image:
        "https://food-03.web4s.vn/uploads/plugin/product_items/28/thumb/thumb_350_th-t-be-9521817059358.jpg",
    },
    {
      id: 7,
      class: "Thịt",
      nameProduct: "Thịt bê",
      price: "69,000",
      image:
        "https://food-03.web4s.vn/uploads/plugin/product_items/25/thumb/thumb_350_c-ga-cong-nghi-p-phi-le-khong-da-binh-minh-9494015574046.jpg",
    },
    {
      id: 8,
      class: "Thủy - Hải sản",
      nameProduct: "Bạch tuộc tươi",
      price: "79,500",
      image:
        "https://food-03.web4s.vn/uploads/plugin/product_items/27/thumb/thumb_350_th-n-bo-9487254847518.jpg",
    },
    {
      id: 9,
      class: "Thủy - Hải sản",
      nameProduct: "Bạch tuộc tươi",
      price: "79,500",
      image:
        "https://food-03.web4s.vn/uploads/plugin/product_items/27/thumb/thumb_350_th-n-bo-9487254847518.jpg",
    },
    {
      id: 18,
      class: "Thủy - Hải sản",
      nameProduct: "Bạch tuộc tươi",
      price: "79,500",
      image:
        "https://food-03.web4s.vn/uploads/plugin/product_items/27/thumb/thumb_350_th-n-bo-9487254847518.jpg",
    },
  ];

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
