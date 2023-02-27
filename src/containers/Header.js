import { faBasketShopping, faSyncAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Navbar, Container, Nav, NavDropdown, Row, Col } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import ListCatogeryBar from "../components/ListCatogeryBar";
import MiniBasket from "../components/MiniBasket";

// import React, { useState, useEffect } from 'react';
const Header = () => {
  const [show, setShow] = React.useState(false);
  const [show1, setShow1] = React.useState(false);

  return (
    <>
      <Navbar className="bg-web p-0">
        <Container>
          <Navbar.Brand className="text-white text-uppercase fs-6">
            Free Shipping on every Demestic order of $40 or more!
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav>
              <NavLink
                href="#login"
                className="pe-2 border-end border-3 border-light  text-decoration-none text-light"
                as={Link}
                to="/login"
              >
                Đăng nhập
              </NavLink>
              <NavLink
                href="#login"
                className="ps-2 text-decoration-none text-light"
                as={Link}
                to="/signup"
              >
                Đăng ký tài khoản
              </NavLink>
            </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="header-body container">
        <div className="row pt-2 pb-3">
          <div className="col-sm-4 col-xs-4 align-self-center">
            <a class="logo" href="/https://food-03.web4s.vn/">
              <img
                src="https://food-03.web4s.vn/uploads/plugin/setting/3/1566437894-1150892441-organic.png"
                alt="Logo"
              />
            </a>
          </div>
          <div class="col-sm-4 col-xs-4">
            <div class="header-banner">
              <h5 className="fw-bold">New Daily Holiday Deals</h5>
              <h6>24 Hours Only - Ends Midnight!</h6>
              <h6 class="main_color">No Promo code Required</h6>
            </div>
          </div>
          <div class="col-sm-4 col-xs-4 align-self-center">
            <div class="header-contact-infor">
              <ul className="d-flex p-0 justify-content-evenly">
                <li className="list-group-item fs-6">
                  <a href="//#" className="text-decoration-none text-dark">
                    <i className="fa fa-phone color-web"></i>{" "}
                    <span>(+84)1234-5678</span>
                  </a>
                </li>
                <li className="list-group-item fs-6">
                  <a href="//#" className="text-decoration-none text-dark ms-2">
                    <i className="fa fa-envelope me-1 color-web" />
                    <span>contact@yourdomain.com</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="box-search nav-right">
              <div className="box-search-mobile Foatright item-inline item-dropdown">
                <div className="box-search box-search-mobile">
                  <form
                    id="form-suggestion"
                    data-type="products"
                    className="form-inline d-flex justify-content-between"
                  >
                    <div className="form-group w-100">
                      <div className="input-group">
                        <input
                          name="keyword"
                          className="form-control rounded-0 bg-light border-0"
                          placeholder="Từ khóa tìm kiếm"
                          type="text"
                        />
                      </div>
                    </div>
                    <button
                      className="btn bg-web btn-primary border-0 rounded-0"
                      type="submit"
                    >
                      <i aria-hidden="true" className="fa fa-search" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="my-0" />
      <Navbar expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                as={NavLink}
                to="/home"
                className="text-uppercase fw-bold me-4"
              >
                Trang chủ
              </Nav.Link>
              <NavDropdown
                className="shop me-4 position-relative"
                title={
                  <p className="text-uppercase fw-bold d-inline-block m-0">
                    Cửa hàng
                  </p>
                }
                id="basic-nav-dropdown"
                onMouseEnter={() => setShow1(true)}
                onMouseLeave={() => setShow1(false)}
                show={show1}
                align="start"
              >
                <ListCatogeryBar />
              </NavDropdown>
              <NavDropdown
                className="new dropdown me-4"
                title={
                  <p className="text-uppercase fw-bold d-inline-block m-0">
                    Tin tức
                  </p>
                }
                id="basic-nav-dropdown"
                onMouseEnter={() => setShow(true)}
                onMouseLeave={() => setShow(false)}
                show={show}
              >
                <NavDropdown.Item href="#action/3.1">
                  Kinh nghiệm chọn thực phẩm
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Tin khuyến mãi
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/#link" className="text-uppercase fw-bold me-4">
                Giới thiệu
              </Nav.Link>
              <Nav.Link href="/#link" className="text-uppercase fw-bold me-4">
                Liên hệ
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="/home">
                <FontAwesomeIcon
                  className="fs-5 text-secondary"
                  icon={faSyncAlt}
                />
              </Nav.Link>
              <NavDropdown
                align="end"
                title={
                  <FontAwesomeIcon
                    className="fs-5 text-secondary"
                    icon={faBasketShopping}
                  />
                }
                id="basic-nav-dropdown"
              >
                <MiniBasket id={1} />
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
