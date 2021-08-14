import React from 'react';
import { TileImage } from './Tiles.style';

interface IProps {
    name: string;
}

const SlotTile: React.FC<IProps> = ({ name }) => (
  <TileImage src={`/api/image/${name}`} alt={name} />
);

export default SlotTile;
