import React from 'react';
import { shallow } from 'enzyme';
import {
  Route,
} from 'react-router-dom';
import App from './App';
import { HomePage, SlotsPage, InstantsPage } from './pages';

describe('given an App component', () => {
  describe('when it is rendered', () => {
    let renderedComponent;
    beforeAll(() => { renderedComponent = shallow(<App />); });

    it('should provide a route for the home page', () => {
      const route = renderedComponent.find(Route).get(0) as Route;
      const { props } = route;
      expect(props.path).toBe('/');
      expect(props.component).toBe(HomePage);
    });

    it('should provide a route for the instants page', () => {
      const route = renderedComponent.find(Route).get(1) as Route;
      const { props } = route;
      expect(props.path).toBe('/slots');
      expect(props.component).toBe(SlotsPage);
    });

    it('should provide a route for the instants page', () => {
      const route = renderedComponent.find(Route).get(2) as Route;
      const { props } = route;
      expect(props.path).toBe('/instants');
      expect(props.component).toBe(InstantsPage);
    });
  });
});
