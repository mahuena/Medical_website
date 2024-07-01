import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { LoginPage } from './Login/LoginPage.jsx'
import {Home} from './home/Home.jsx'
import {RegistrationPage} from './Registration/RegistrationPage.jsx'
import { ChakraProvider } from '@chakra-ui/react'
import {TumorPage} from "./tumor/TumorPage.jsx";
import {HeartAttackPage} from "./heartAttack/HeartAttackPage.jsx";

function App() {

  return (
      <ChakraProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LoginPage />} />
                    <Route path="/registrationPage" element={<RegistrationPage />} />
                    <Route path="/home" element={<Home />} />
                    <Route path='/tumorPage' element={<TumorPage />}/>
                    <Route path='/pneumoniaPage' element={<TumorPage />}/>
                    <Route path='/heartAttackPage' element={<HeartAttackPage />}/>
                </Routes>
            </BrowserRouter>
      </ChakraProvider>
  )
}

export default App
