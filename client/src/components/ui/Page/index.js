import bemto from 'bemto-components';
import styled from 'styled-components';

const Page = styled(bemto())`
  background: #BBB;
`;

Page.Header = styled(bemto())`
  padding: 20px;
  color: #FFF;
  background: #000;
`;

Page.Content = styled(bemto())`
  padding: 20px;
  border: 1px solid;
`;

/** @component */
export default Page;
