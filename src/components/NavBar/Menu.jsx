import React from "react";

import styled from "styled-components";

const StyledMenu = styled.ul`
  position: fixed;
  top: 0;
  right: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  align-items: center;
  justify-content: center;
  transition: all 300ms ease;
  transform: ${({ open }) => (open ? "translateY(0)" : "translateY(-100%)")};
  opacity: ${({ open }) => (open ? "1" : "0")};

  background-color: #f7f7fd;
  z-index: 9;

  li {
    padding: 1.5em 0;
    font-size: 2rem;
    font-weight: 500;

    &:last-child {
      a {
        color: white;
        border: 1px solid #696edd;
        border-radius: 10px;
        background-color: #696edd;
        padding: 0.5em 3em;

        transition: all 0.3s ease;

        &:hover {
          color: #696edd;
          background-color: transparent;
        }
      }
    }

    a {
      color: #696edd;
    }
  }
`;

const Menu = ({ open, setOpen, setOpenModal }) => {
  return (
    <StyledMenu open={open}>
      <li>
        <a href="#about" onClick={() => setOpen(false)}>
          ABOUT
        </a>
      </li>
      <li>
        <a href="#pricing" onClick={() => setOpen(false)}>
          PRICING
        </a>
      </li>
      <li>
        <a href="#contact" onClick={() => setOpen(false)}>
          CONTACT
        </a>
      </li>
      <li>
        <a onClick={() => setOpenModal(true)}>LOGIN</a>
      </li>
    </StyledMenu>
  );
};

export default Menu;
