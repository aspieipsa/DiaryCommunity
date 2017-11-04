import bemto from 'bemto-components';
import styled from 'styled-components';

const Button = styled(bemto('button'))`
  cursor: pointer;

  border: 1px solid;
  padding: 10px;

  text-decoration: none;

  color: #000;
  background: #FFF;

  &:hover {
    color: #FFF;
    background: #000;
  }

  &_big {
    padding: 15px;
    font-size: 2em;
  }

  &_rounded {
    border-radius: 9em;
  }
`;

/** @component */
export default Button;
