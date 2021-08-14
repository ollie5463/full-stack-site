import styled from 'styled-components';

export const TileList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    ${({ isLoading }) => isLoading && 'display: none;'}
`;

export const TileListItem = styled.li`
    height: 40vh;
    flex-grow: 1;
`;

export const TileImage = styled.img`
    object-fit: cover;
    vertical-align: bottom;
    max-height: 100%;
    max-width: 100%;
`;
