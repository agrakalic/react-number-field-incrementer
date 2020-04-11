import styled from 'styled-components';
import config from '../../config';

const Inner = styled.div`
    margin: 0 auto;
    padding: 20px 0;
    width: ${config.layout.width};
    max-width: ${config.layout.maxWidth};
    text-align: left;
    position: relative;
`;

export default Inner;