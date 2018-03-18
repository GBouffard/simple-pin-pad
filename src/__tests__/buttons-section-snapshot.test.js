import React from 'react';
import ButtonsSection from '../components/molecules/buttons-section';
import renderer from 'react-test-renderer';

describe('ButtonsSection - ', () => {
  const component = renderer.create(
    <ButtonsSection />
  );

  const tree = component.toJSON();

  it('renders correctly', () => {
    expect(tree).toMatchSnapshot();
  });
});