import styled, { css } from 'styled-components'

export const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid white;
  color: white;

  ${props =>
    props.Newslatter &&
    css`
        height: 75px;
        width: 194px;
        background-color: #FFCB47;
        boxshadow: 10px 10px 30px;
    `}
`;

export const Input = styled.input`
    
    height: 75px;
    width: 391px;
`
