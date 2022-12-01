import styled from 'styled-components'; 

const Button = styled.button`
  font: inherit;
  font-weight: bolder;
  font-size: 1.5rem;
  text-transform: uppercase;
  padding: 0.5rem 1.5rem;
  width: 100%;
  border: 1px solid #A60303;
  color: white;
  background: #A60303;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
  cursor: pointer;
  &:focus {
  outline: none;
  }

  &:hover,
  &:active {
  background: #590202;
  border-color: #590202;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
}`;

export default Button;
