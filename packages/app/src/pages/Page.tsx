import React, { useState, useCallback, ReactElement } from 'react';
import { PageWrapper } from './HomePage.style';
import { LoadSpinner } from '../components';

interface IPageProps {
  children: ReactElement;
}

const Page: React.FC = ({ children }: IPageProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const setIsLoadingToFalse = useCallback(() => {
    setIsLoading(false);
  }, []);

  return (
    <PageWrapper>
      {isLoading && <LoadSpinner />}
      {React.cloneElement(children, { isLoading, onLoad: setIsLoadingToFalse })}
    </PageWrapper>
  );
};

export default Page;
