import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App.tsx'
import { Provider as ReduxProvider } from 'react-redux'
import { persistedStore, store } from './store'
import { PersistGate } from 'redux-persist/integration/react'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ReduxProvider store={store}>
      <PersistGate persistor={persistedStore} loading={"Carregando dados..."}>
        <App />
      </PersistGate>
    </ReduxProvider>
  </StrictMode>,
)
