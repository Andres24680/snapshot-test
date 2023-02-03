import { render, screen } from '@testing-library/react';
import App from './App';
import renderer from 'react-test-renderer'


/*test('renders a snapshot'), () => {
  const tree = renderer.create(<App/>).toJSON()
  expect(tree).toMatchSnapshot()
} */ 

test('renders text Batman', () => {
  render(<App />)
  const nameElement = screen.getByText(/Batman/i)
  expect(nameElement).toBeInTheDocument()
})