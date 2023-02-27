import { Card, Col, Container, ProgressBar, Row } from "react-bootstrap";
import TopBanner from "../components/TopBanner";
import "./New.css";

const New = () => {
  return (
    <>
      <TopBanner content="TIN TỨC" />
      <Container>
        <Row className="justify-content-center mb-5 pb-5">
          <Col className="col-sm-12 col-xs-12 col-md-12 mt-5">
            <Row>
              <Col className="col-xs-2 col-md-3">
                <table class="table table-bordered ">
                  <thead>
                    <tr>
                      <th>DANH MỤC TIN TỨC</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <a className="new-hover text-decoration-none text-dark ">
                          Kinh nghiệm chọn thực phẩm
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <a className="new-hover text-decoration-none text-dark ">
                          Tin khuyến mãi
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="border p-2 ">
                  <table class="table table-borderless ">
                    <thead>
                      <tr>
                        <th>
                          <h4 className="border-bottom border-3 border-success text-center">
                            TIN TỨC MỚI
                          </h4>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <a className="new-hover text-decoration-none text-dark ">
                            <img
                              src={
                                process.env.PUBLIC_URL +
                                "../img/banner-ngay-gia-dinh-viet-nam.jpg"
                              }
                              className="rounded mb-3"
                              style={{ maxWidth: "100%" }}
                              alt="bannar"
                            ></img>
                            <h6>
                              CHÚC MỪNG NGÀY HỘI GIA ĐÌNH VIỆT NAM 28/6/2022
                            </h6>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a className="new-hover text-decoration-none text-dark ">
                            <img
                              src={
                                process.env.PUBLIC_URL +
                                "../img/bai-di-cho-thoi-lo-thuc-pham-ban.jpg"
                              }
                              className="rounded mb-3"
                              style={{ maxWidth: "100%" }}
                              alt="bannar"
                            ></img>
                            <h6>NẤU ĂN NGON HƠN NHỜ THỰC PHẨM SẠCH</h6>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a className="new-hover text-decoration-none text-dark ">
                            <img
                              src={
                                process.env.PUBLIC_URL +
                                "../img/su-kien-black-friday-2017-3.jpg"
                              }
                              className="rounded mb-3"
                              style={{ maxWidth: "100%" }}
                              alt="bannar"
                            ></img>
                            <h6>
                              CHƯƠNG TRÌNH KHUYẾN MÃI SIÊU HẤP DẪN - SUPER CHEAP
                            </h6>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a className="new-hover text-decoration-none text-dark ">
                            <img
                              src={
                                process.env.PUBLIC_URL +
                                "../img/ve-sinh-an-toan-thuc-pham-benhviendetmay-4.jpg"
                              }
                              className="rounded mb-3"
                              style={{ maxWidth: "100%" }}
                              alt="bannar"
                            ></img>
                            <h6>
                              6 THỰC PHẨM BỔ NÃO, TĂNG CƯỜNG TRÍ NHỚ BẠN NÊN
                            </h6>
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </Col>
              <Col className="col-xs-12 col-md-9">
                <Row>
                  <Col>
                    <Card>
                      <Card.Img
                        variant="top"
                        src="../img/banner-ngay-gia-dinh-viet-nam.jpg"
                        style={{ height: "320px" }}
                      />
                      <Card.Body className="align-content-end">
                        <Card.Title>
                          CHÚC MỪNG NGÀY HỘI GIA ĐÌNH VIỆT NAM 28/6/2018
                        </Card.Title>
                        <Card.Text>
                          Ngày 28/6 hằng năm được chọn là ngày gia đình Việt Nam
                          - cùng đến siêu thị Organic để mang về cho nhà bạn
                          những...
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col>
                    <Card>
                      <Card.Img
                        variant="top"
                        style={{ height: "320px" }}
                        src="../img/bai-di-cho-thoi-lo-thuc-pham-ban.jpg"
                      />
                      <Card.Body>
                        <Card.Title>
                          6 THỰC PHẨM BỔ NÃO, TĂNG CƯỜNG TRÍ NHỚ BẠN NÊN ĂN...
                        </Card.Title>
                        <Card.Text>
                          Chúng ta đều biết rằng uống cà phê thường giúp chúng
                          ta tỉnh táo lâu hơn và linh hoạt hơn. Để tăng sự
                          tập...
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
                <Row className="mt-4">
                  <Col>
                    <Card>
                      <Card.Img
                        variant="top"
                        style={{ height: "320px" }}
                        src="../img/su-kien-black-friday-2017-3.jpg"
                      />
                      <Card.Body>
                        <Card.Title>
                          CHƯƠNG TRÌNH KHUYẾN MÃI SIÊU HẤP DẪN - SUPER CHEAP
                          FRIDAY...
                        </Card.Title>
                        <Card.Text>
                          Một bất ngờ quá lớn và thú vị, một chương trình khuyến
                          mãi cực kì hấp dẫn và siêu khủng lần đầu...
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col>
                    <Card>
                      <Card.Img
                        variant="top"
                        style={{ height: "320px" }}
                        src="../img/ve-sinh-an-toan-thuc-pham-benhviendetmay-4.jpg"
                      />
                      <Card.Body>
                        <Card.Title>
                          NẤU ĂN NGON HƠN NHỜ THỰC PHẨM SẠCH
                        </Card.Title>
                        <Card.Text>
                          Ăn uống là chuyện muôn thuở của con người. Ngày xưa
                          chỉ cần ăn no, bây giờ chúng ta cần ăn ngon. Rồi vấn
                          nạn thực phẩm...
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
                <Row className="mt-4">
                  <Col>
                    <Card>
                      <Card.Img
                        variant="top"
                        style={{ height: "320px" }}
                        src="../img/cach-ket-hop-cac-thuc-pham2.jpg"
                      />
                      <Card.Body>
                        <Card.Title>
                          LỰA CHỌN THỰC PHẨM SẠCH VÀ NẤU ĂN ĐÚNG CÁCH
                        </Card.Title>
                        <Card.Text>
                          Ăn uống là nhu cầu thiết yếu của con người để duy trì
                          sự sống và phát triển. Xã hội ngày càng tiến bộ,
                          nhận...
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col>
                    <Card>
                      <Card.Img
                        variant="top"
                        style={{ height: "320px" }}
                        src="../img/home_custom_blog_01.jpg"
                      />
                      <Card.Body>
                        <Card.Title>
                          CÁCH LỰA CHỌN THỰC PHẨM TƯƠI SỐNG AN TOÀN
                        </Card.Title>
                        <Card.Text>
                          Thực phẩm bẩn, nhiễm độc hiện nay đang là vấn đề nhức
                          nhối của toàn xã hội, nhất là đối với các mặt hàng
                          thực...
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default New;
