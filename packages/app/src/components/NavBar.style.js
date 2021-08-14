import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Tabs = styled.ul`
    list-style-type: none;
    display: flex;
    justify-content: space-around;
`;

export const TabLink = styled(Link)`
    text-decoration: none;
    color: white;
    font-family: faricy-new-web, sans-serif;
    font-size: 16px;
`;

export const Navigation = styled.nav`
    background-color: ${({ theme }) => theme?.primaryColor};
    padding: 10px;
`;
