import { Button, Card, Col } from "react-bootstrap";

const ContentProduct = ({
  key,
  nameProduct,
  price,
  image,
  ...other
}) => {
  return (
    <>
    
      <Card className="mx-auto my-2" style={{ width: "95%" }}>
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
