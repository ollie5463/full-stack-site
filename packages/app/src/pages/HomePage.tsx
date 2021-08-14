import React from 'react';
import { Promotion } from './HomePage.style';
import { Page } from '.';

const HomePage: React.FC = () => (
  <>
    <Page>
      <Promotion
        src="/api/image/promotion"
        alt="promotion"
      />
    </Page>
  </>
);

export default HomePage;
