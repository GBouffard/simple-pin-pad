import React from 'react';
import Button from '../components/atoms/button';
import renderer from 'react-test-renderer';

describe('Button - ', () => {
  const component = renderer.create(
    <Button
      onClick={() => {}}
      text='this is a snapshot test' />
  );

  const tree = component.toJSON();

  it('renders correctly', () => {
    expect(tree).toMatchSnapshot();
  });
});