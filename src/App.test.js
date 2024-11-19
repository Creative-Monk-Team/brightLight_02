import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


                        /* //Created by Uttam Verma GithubId-(UttamVerma) & Saksham Verma GitHubID-(SakshamVerma2004)_sakshamverma799@gmail.com// */ 