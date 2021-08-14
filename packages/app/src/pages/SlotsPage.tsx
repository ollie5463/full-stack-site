import React, { useEffect, useState } from 'react';
import { Tile, Page } from '.';

import { TileList, TileListItem } from './Tiles.style';

interface ISlotsPage {
    slots: string[]
}

const SlotsPage: React.FC = () => {
  const [slotsData, setSlotsData] = useState([]);

  useEffect(() => {
    fetch('/api/slots-info')
      .then((response) => response.json())
      .then((data: ISlotsPage) => setSlotsData(data.slots))
      .catch(console.error);
  }, []);

  return (
    <Page>
      <TileList data-testid="slots-tile-list">
        {slotsData.map((el, index) => (
          <TileListItem key={`${el}${index}`}>
            <Tile name={el} />
          </TileListItem>
        ))}
      </TileList>
    </Page>
  );
};

export default SlotsPage;
