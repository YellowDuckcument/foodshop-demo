import { Card } from "react-bootstrap";

const TopBanner = (props) => {
  const { content } = props;

  return (
    <Card className="border-0 rounded-0">
      <Card.Img src="/img/Banner.jpg" alt="Card image" />
      <Card.ImgOverlay className="d-flex justify-content-center">
        <Card.Title className="text-uppercase fs-4 fw-bold text-light align-self-center">
          Trang chủ / <div className="text-warning d-inline">{content}</div>
        </Card.Title>
      </Card.ImgOverlay>
    </Card>
  );
};

export default TopBanner;
