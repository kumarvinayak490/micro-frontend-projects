import React from 'react'
import { StylesProvider } from '@material-ui/core'
import { Routes, BrowserRouter, Route } from 'react-router-dom'
import Landing from './components/Landing'
import Pricing from './components/Pricing'


export default function App(){
    return(
        <div>
                <StylesProvider>
                    <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<Landing/>}/>
                        <Route  path="/pricing" element={<Pricing/>}/>
                    </Routes>
                    </BrowserRouter>
                </StylesProvider>

        </div>
    )
}