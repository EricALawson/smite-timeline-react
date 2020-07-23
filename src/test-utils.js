import React from 'react'
import {configureStore} from '@reduxjs/toolkit';
import { render as rtlRender } from '@testing-library/react'
import { Provider } from 'react-redux'
import { rootReducer } from './redux/store'

function render(
  ui,
  {
    initialState,
    store = configureStore({ reducer: rootReducer }),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

// re-export everything
export * from '@testing-library/react'
// override render method
export { render }