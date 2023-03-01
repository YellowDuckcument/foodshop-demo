/* eslint-disable jsx-a11y/alt-text */
import {
  faEarthAsia,
  faLocationDot,
  faPhone,
  faRefresh,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  MDBBtn,
  MDBCol,
  MDBInput,
  MDBRow,
  MDBTextArea,
} from "mdb-react-ui-kit";
import { useState } from "react";
import { Button, Container } from "react-bootstrap";
import FooterAdd from "../components/FooterAdd";
import Map from "../components/Map";
import TopBanner from "../components/TopBanner";

const Contact = () => {
  return (
    <>
      <TopBanner content={"Liên hệ"} />
      <Container>
        <div
          className="d-flex flex-column  position-relative"
          style={{ margin: "160px 0 100px" }}
        >
          <div
            className="position-absolute start-50 translate-middle d-flex justify-content-center bg-dark align-self-center text-light py-5"
            style={{ width: "85%" }}
          >
            <div className="d-flex mx-2">
              <FontAwesomeIcon
                icon={faLocationDot}
                size="lg"
                fixedWidth
                className="m-2"
              />
              <ul className="m-0 list-unstyled">
                <li>Nhan Hoa software Company</li>
                <li>32 Võ Văn Dũng, Đống Đa, Hà Nội</li>
              </ul>
            </div>
            <div className="d-flex mx-2">
              <FontAwesomeIcon
                icon={faPhone}
                size="lg"
                fixedWidth
                className="m-2"
              />
              <ul className="m-0 list-unstyled">
                <li>Phone : (04) 7308 6680</li>
                <li>Hotline : 1900 2116</li>
              </ul>
            </div>
            <div className="d-flex mx-2">
              <FontAwesomeIcon
                icon={faEarthAsia}
                size="lg"
                fixedWidth
                className="m-2"
              />
              <ul className="m-0 list-unstyled">
                <li>
                  Email :
                  <a href="/" className="text-light">
                    {" "}
                    web.foodshop@gmail.com{" "}
                  </a>
                </li>
                <li>
                  Web :{" "}
                  <a href="/" className="text-light">
                    {" "}
                    Copyright by FoodShop.com{" "}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <Map />
        </div>

        <div className="d-flex flex-column align-items-center">
          <h3 className="text-uppercase mb-5"> Để lại lời nhắn</h3>
          <form className="m-5 w-50">
            <div className="row">
              <div className="col-md-9 w-75 m-auto  text-center">
                <MDBInput
                  className="mb-3"
                  placeholder="Họ và tên"
                  id="form3FirstName"
                />
                <MDBInput
                  className="mb-3"
                  placeholder="Số điện thoại"
                  id="form3Email"
                />
                <MDBInput
                  className="mb-3"
                  type="text"
                  placeholder="Tiêu đề"
                  id="form3Subject"
                  v-model="form3Subject"
                  wrapperClass="mb-4"
                />
                <MDBTextArea
                  rows="4"
                  className="mb-3"
                  placeholder="Lời góp ý"
                  id="form4Textarea"
                  wrapperClass="mb-4"
                />
                <div className="form-group d-flex justify-content-between align-items-center mb-4">
                  <img
                    src="https://food-03.web4s.vn/contact/contactPlugin/captcha?type=image&model=CaptchaModel&field=security_code&width=120&height=30&theme=default&length=6&1677686720471"
                    vspace={2}
                    style={{ width: "40%" }}
                    alt
                  />
                  <a href="##">
                    <FontAwesomeIcon icon={faRefresh} size="lg"/>
                  </a>

                  <MDBInput
                    style={{ width: "100%" }}
                    placeholder="Mã bảo vệ"
                    type="text"
                  />
                </div>
                <Button variant="outline-dark text-uppercase px-5 mt-4"> Gửi yêu cầu </Button>
              </div>
            </div>
          </form>
        </div>
      </Container>
      <FooterAdd />
    </>
  );
};

export default Contact;
