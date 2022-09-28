import styled from 'styled-components';

interface ButtonProps {
  icon: string;
}

const PrimaryButton = styled.button<ButtonProps>`
  background-color: #973342;
  border-radius: 10px;
  max-height: 50px;
  padding: 20px;
  border: 0;
  text-align: center;
  cursor: pointer;
  display: flex;
  align-items: center;

   ${props => props.icon ? `
      ::before {
        content: '';
        width: 32px;
        height: 32px;
        margin-right: 12px;
        background-size: cover;
        background-image: url(${props.icon});
      }`
    : ''
  }
`;

export default PrimaryButton