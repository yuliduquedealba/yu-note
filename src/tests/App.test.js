import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'
import '@testing-library/jest-dom'
import App from '../components/App.js';


test('full app rendering/navigating', async () => {
  const history = createMemoryHistory()
  // history.push('/Notes')
  render(
    <Router location={history.location} navigator={history}>
      <App />
    </Router>,
  )

  expect(screen.getByText(/Yu-Note/i)).toBeInTheDocument()


  fireEvent.click(screen.getByText(/Login with Google/i))

})

