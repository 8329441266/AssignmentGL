import { render, screen } from '@testing-library/react';

import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test("render the Table component in the document", ()=>{
  const component = render(<App />);
  // console.log(component);
});


