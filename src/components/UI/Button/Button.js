import React from "react";
import styled, { css } from "styled-components";

const MyButton = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0.5em 1em;
  padding: 0.25em 1em;

  ${props =>
    props.primary &&
    css`
      background: palevioletred;
      color: white;
    `}
`;

const Container = styled.div`
  text-align: center;
`;

const clickHandler = e => {
  e.preventDefault();
};

function changeBackground(e) {
  e.target.style.background = "red";
}
const Button = () => {
  return (
    <Container>
      <MyButton onClick={clickHandler} onMouseOver={changeBackground}>
        Normal Button
      </MyButton>
      <MyButton primary>Primary Button</MyButton>
    </Container>
  );
};

export default Button;
