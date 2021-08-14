import styled from 'styled-components';

export const Promotion = styled.img`
    height: 100%;
    width: 100%;
    ${({ isLoading }) => isLoading && 'display: none;'}
`;

export const PageWrapper = styled.div`
    padding: 10px;
    margin: 5px;
    text-align: center;
`;
