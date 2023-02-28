import { Card, ListGroup } from "react-bootstrap";

const CustomerCard = () => {
  return (
    <>
      <Card style={{ width: "100%" }} className="p-4">
        <Card.Title className="text-uppercase">Thông tin đơn hàng</Card.Title>
        <Card.Body className="d-flex">
          <Card.Img
            className="me-3"
            variant="top"
            style={{ width: "30%" }}
            src="https://food-03.web4s.vn/uploads/plugin/product_items/35/thumb/thumb_350_rau-ay-l1-vineco-12863030231070.jpg"
          />
          <div>
            <Card.Title>Tên sản phẩm</Card.Title>
            <Card.Text>Giá</Card.Text>
          </div>
        </Card.Body>
        <Card.Body>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>
    </>
  );
};

export default CustomerCard;
