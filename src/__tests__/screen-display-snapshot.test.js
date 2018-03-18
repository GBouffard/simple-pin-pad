import React from 'react';
import ScreenDisplay from '../components/atoms/screen-display';
import renderer from 'react-test-renderer';

describe('ScreenDisplay - ', () => {
  const component = renderer.create(
    <ScreenDisplay
      display='this is a snapshot test' />
  );

  const tree = component.toJSON();

  it('renders correctly', () => {
    expect(tree).toMatchSnapshot();
  });
});