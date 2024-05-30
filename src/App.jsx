import { Router } from './routes'
import { ThemeProvider } from 'styled-components'
import GlobalStyle, { ContainerGlobal } from './shared/styles/global'
import { BrowserRouter } from 'react-router-dom'
import { createTheme } from './shared/styles/createThemes.js'
import { ToastProvider } from './hooks/toast.jsx'
import { DataProvider } from './hooks/data.jsx'

function App() {
  return (
    <>
      <ThemeProvider theme={createTheme('dark')}>
        <ToastProvider>
          <DataProvider>
            <ContainerGlobal>
              <BrowserRouter>
                <Router />
              </BrowserRouter>
              <GlobalStyle />
            </ContainerGlobal>
          </DataProvider>
        </ToastProvider>
      </ThemeProvider>
    </>
  )
}

export default App
