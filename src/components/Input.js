import React from 'react';
import get from 'lodash/fp/get';
import styled from 'styled-components';

const StyledInput = styled.input`
  &:focus {
    outline: none;
  }
`;

const Input = ({ type, name, id, input, style, ...otherInputProps }) => (
  <StyledInput
    className="pa2 input-reset ba bg-transparent w-100"
    type={type}
    name={name}
    id={id}
    onChange={get('onChange')(input)}
    style={style}
    {...otherInputProps}
  />
);

export default Input;
