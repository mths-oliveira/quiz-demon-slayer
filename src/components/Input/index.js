import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const InputBase = styled.input`
  width: 100%;
  padding: 15px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.contrastText};
  background-color: ${({ theme }) => theme.colors.mainBg};
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 1px solid ${({ theme }) => theme.colors.contrastText}70;
  outline: 0;
  margin-bottom: 18px;
  ::placeholder {
    color: ${({ theme }) => theme.colors.contrastText};
    opacity: 1;
  }
`;

function Input({ onChange, placeholder, ...props }) {
  return (
    <div>
      <InputBase
        autoFocus
        placeholder={placeholder}
        onChange={onChange}
        {...props}
      />
    </div>
  );
}

Input.defaultProps = {
  value: "",
};

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
};

export default Input;
