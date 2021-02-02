import PropTypes from "prop-types";
import styled from "styled-components";

const Button = styled.button`
  background-color: #00000070;
  color: ${({ theme }) => theme.colors.mainBg};
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 0;
  box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 0.4);

  width: 100%;
  padding: 16px 16px;
  font-weight: bold;
  font-size: 14px;
  line-height: 1;
  text-transform: uppercase;
  outline: 0;
  transition: 0.3s;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: #00000050;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  }

  &:disabled {
    background-color: #00000030;
    cursor: not-allowed;
  }
`;

Button.propTypes = {
  type: PropTypes.oneOf(["submit", "type", "button"]).isRequired,
  children: PropTypes.node.isRequired,
};

export default Button;
