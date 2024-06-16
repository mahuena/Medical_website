import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { LoginPage } from './Login/LoginPage.jsx'
import {Home} from './Home.jsx'
import {RegistrationPage} from './Registration/RegistrationPage.jsx'
import { ChakraProvider } from '@chakra-ui/react'
function App() {

  return (
      <ChakraProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/loginPage" element={<LoginPage />} />
                    <Route path="/registrationPage" element={<RegistrationPage />} />
                </Routes>
            </BrowserRouter>
      </ChakraProvider>
  )
}

export default App
