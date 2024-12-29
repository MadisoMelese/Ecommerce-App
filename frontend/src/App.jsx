import { Box } from '@chakra-ui/react'

import { Routes, Route } from 'react-router-dom'
import React from 'react'

import Navbar from './components/Navbar'
import HomePage from './components/pages/HomePage'
import CreatePage from './components/pages/CreatePage'
const App = () => {

  return (
    <Box minH={"100vh"}>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
      </Routes>
    </Box>
  )
}

export default App
