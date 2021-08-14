import React, { useEffect, useState } from 'react';
import { TileListItem, TileList } from './Tiles.style';
import { Tile, Page } from '.';

interface IInstantsData {
    instants: string[]
}

const InstantsPage: React.FC = () => {
  const [instantsData, setinstantsData] = useState([]);
  useEffect(() => {
    fetch('/api/instants')
      .then((response) => response.json())
      .then((data: IInstantsData) => setinstantsData(data.instants))
      .catch(console.error);
  }, []);

  return (
    <Page>
      <TileList data-testid="instants-tile-list">
        {instantsData.map((el, index) => (
          <TileListItem key={`${el}${index}`}>
            <Tile name={el} />
          </TileListItem>
        ))}
      </TileList>
    </Page>
  );
};

export default InstantsPage;
