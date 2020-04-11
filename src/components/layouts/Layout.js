import styled from 'styled-components';

const Layout = styled.div`
  ${props => props.customCSS && props.customCSS}
`;

export default Layout;
