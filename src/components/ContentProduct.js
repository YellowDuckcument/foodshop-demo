import { useState } from "react";
import { Button, Card, Col } from "react-bootstrap";

const ContentProduct = ({ key, nameProduct, price, image, ...other }) => {
  const [hover, setHover] = useState(true);
  const class1 = hover ? "" : "hover_overlay";

  return (
    <>

      <Card
        className="mx-auto my-2 position-relative card-product"
        style={{ width: "95%", overflow: "hidden" }}
        onMouseEnter={() => setHover(false)}
        onMouseLeave={() => setHover(true)}
      >
        <div className={class1} style={{width: '100%', height: '100%', content: "", zIndex: 100}}></div>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{nameProduct}</Card.Title>
          <Card.Text>{price}</Card.Text>
          {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
      </Card>
    </>
  );
};

export default ContentProduct;
