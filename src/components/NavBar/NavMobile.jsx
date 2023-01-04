import React, { useState } from "react";
import styled from "styled-components";

import Menu from "./Menu";
import Modal from "./Modal";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

import logo from "../../images/logo.png";

const StyledBurger = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  &:focus {
    outline: none;
  }
  &:hover {
    div:first-child,
    div:nth-child(3) {
      transform: ${({ open }) => (open ? "" : "scaleX(1)")};
    }
  }
  div {
    width: 2rem;
    height: 0.15rem;
    background: ${({ open }) => (open ? "#696edd" : "white")};
    transition: all 300ms linear;
    position: relative;
    transform-origin: 1px;
    :first-child {
      transform: ${({ open }) =>
        open ? "rotate(45deg)" : "rotate(0) scaleX(0.5)"};
    }
    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
    }
    :nth-child(3) {
      transform: ${({ open }) =>
        open ? "rotate(-45deg)" : "rotate(0) scaleX(0.7)"};
    }
  }
`;

const NavMobile = () => {
  const [open, setOpen] = useState(false);

  const [openModal, setOpenModal] = useState(false);
  const [status, setStatus] = useState("login");

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <div className="navbar">
      <div className="logo__wrapper">
        <img src={logo} alt="Company Logo" />
        <a href="#">HOME</a>
      </div>
      <StyledBurger open={open} onClick={toggle}>
        <div></div>
        <div></div>
        <div></div>
      </StyledBurger>
      <Menu open={open} setOpen={setOpen} setOpenModal={setOpenModal} />
      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <span
          onClick={() => setOpenModal(false)}
          style={{
            position: "absolute",
            right: "7%",
            top: "5%",
            cursor: "pointer",
          }}
        >
          <strong style={{ color: "#696EDD" }}>X</strong>
        </span>
        {status === "login" ? (
          <>
            <h1 style={{ marginBottom: ".5em" }}>Login</h1>
            <LoginForm setStatus={setStatus} />
          </>
        ) : (
          <>
            <h1 style={{ marginBottom: ".5em" }}>Register</h1>
            <RegisterForm setStatus={setStatus} />
          </>
        )}
      </Modal>
    </div>
  );
};

export default NavMobile;
