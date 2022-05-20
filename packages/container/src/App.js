import React from 'react'
import { Routes, BrowserRouter, Route } from 'react-router-dom'
import AuthComponent from './components/AuthComponent'
import MarketingApp from './components/MarketingApp'


export default function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<MarketingApp />} />
                    <Route path="/auth" element={<AuthComponent />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}