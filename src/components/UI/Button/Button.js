import React, { useState } from "react";
import styled from "styled-components";

const MyButton = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0.5em 1em;
  padding: 0.25em 1em;
`;

const Container = styled.div`
  text-align: center;
`;

const Button = props => {
  const [isHovering, setHover] = useState(false);
  const handleMouseEnter = e => {
    setHover(true);
    e.target.style.background = "pink";
    e.target.style.color = "white";
  };

  const handleMouseLeave = e => {
    setHover(false);
    e.target.style.background = "white";
    e.target.style.color = "palevioletred";
  };
  return (
    <Container>
      <MyButton onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {props.text}
      </MyButton>
    </Container>
  );
};

export default Button;
