import React from 'react'
import '../css/main.css'
import MainPage from './MainPage'
import { Route, Routes } from 'react-router-dom'
import HeaderOne from './HeaderOne'
import Header from './Header'

const Main = () => {
    return (
        <>
            {/* <Routes>
                <Route path="/" element={}>
                    <Route index element={} />
                </Route>
            </Routes> */}
            <HeaderOne />
            <Header />
            <MainPage />

        </>
    )
}

export default Main