/**
 * Main App component - Root application component
 * Handles routing and global state management
 */
import React from 'react'
import { HashRouter, Route, Routes } from 'react-router'
import HomePage from './pages/Home'

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </HashRouter>
  )
}
