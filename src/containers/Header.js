import { BsFillBasket2Fill, faBagShopping, faBasketShopping, faSyncAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

// import React, { useState, useEffect } from 'react';
const Header = () => {
  return (
    <>
      <div className="header-top bg-web">
        <div className="container">
          <div class="row">
            <div className="col-sm-6 col-xs-6 align-self-center">
              <div className="slogan-ship text-light text-uppercase">
                <p className="m-2">
                  Free Shipping on every Demestic order of $40 or more!
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-xs-6 align-self-center">
              <div className="acc-custom">
                <ul className="d-flex justify-content-end m-0">
                  <li className="list-group-item">
                    <a
                      className="login-theme2 me-2 pe-2 border-end border-3 border-light text-decoration-none text-light"
                      href="//member/manager-account/login"
                    >
                      Đăng nhập
                    </a>
                  </li>
                  <li className="list-group-item">
                    <a
                      className="register-theme2 text-decoration-none text-light"
                      href="//member/manager-account/register"
                    >
                      Đăng ký tài khoản
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

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
                    <i className="fa fa-phone me-1 color-web"></i>{" "}
                    <span>(+84)1234-5678</span>
                  </a>
                </li>
                <li className="list-group-item fs-6">
                  <a href="//#" className="text-decoration-none text-dark">
                    <i className="fa fa-envelope me-2 color-web" />
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
      <Navbar  expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/#home" className="text-uppercase fw-bold">
                Trang chủ
              </Nav.Link>
              <NavDropdown
                title={
                  <p className="text-uppercase fw-bold d-inline-block m-0 ms-5">
                    Cửa hàng
                  </p>
                }
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="#action/3.1">
                  Giới thiệu
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Liên hệ</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Giới thiệu
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title={
                  <p className="text-uppercase fw-bold d-inline-block m-0 ms-5">
                    Tin tức
                  </p>
                }
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="#action/3.1">
                  Giới thiệu
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Liên hệ</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Giới thiệu
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/#link" className="text-uppercase fw-bold ms-5">
                Giới thiệu
              </Nav.Link>
              <Nav.Link href="/#link" className="text-uppercase fw-bold ms-5">
                Liên hệ
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="/home">
                <FontAwesomeIcon className="fs-5 text-secondary" icon={faSyncAlt} />
              </Nav.Link>
              <NavDropdown
                align="end"
                title={
                  <FontAwesomeIcon className="fs-5 text-secondary" icon={faBasketShopping} />
                }
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="#action/3.1" >
                  Không có sản phẩm nào trong giỏ hàng
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
