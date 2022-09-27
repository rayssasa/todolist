import styled from "styled-components";

type ContainerProps = {
  done: boolean;
};

export const Container = styled.div(
  ({ done }: ContainerProps) => `
  display: flex;
  background-color: pink;
  padding: 10px;
  border-radius: 10px;
  margin: 10px;
  align-items: center;

  input {
    width: 15px;
    height: 15px;
    margin-right: 5px;
  }

  label {
    color: #ffffff;
    text-decoration: ${done ? "line-through" : "initial"};
  }
`
);
