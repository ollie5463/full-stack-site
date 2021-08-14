import React from 'react';
import { Tabs, TabLink, Navigation } from './NavBar.style';

const NavBar: React.FC = () => (
  <Navigation>
    <Tabs>
      <li>
        <TabLink to="/">Home</TabLink>
      </li>
      <li>
        <TabLink data-testid="slots" to="/slots">Slots</TabLink>
      </li>
      <li>
        <TabLink to="/instants">Instants</TabLink>
      </li>
    </Tabs>
  </Navigation>
);

export default NavBar;
