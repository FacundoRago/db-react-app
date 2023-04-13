import React, { lazy, Suspense } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'

import Navbar from '../components/Navbar'
const MenScreen = lazy(() => import('../pages/MenScreen'))
const WomenScreen = lazy(() => import('../pages/WomenScreen'))
const SearchScreen = lazy(() => import('../pages/SearchScreen'))
const CharacterScreen = lazy(() => import('../pages/CharacterScreen'))

const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Suspense fallback={<h1>Loading...</h1>} className='text-center'>

        <Routes>
            <Route end path='/men' element={<MenScreen />} />
            <Route end path='/women' element={<WomenScreen />} />
            <Route end path='/search' element={<SearchScreen />} />
            <Route end path='/character/:id' element={<CharacterScreen />} />

            <Route path='*' element={<Navigate to='/men' />} />
        </Routes>
      </Suspense>
    </>
  )
}

export default AppRouter