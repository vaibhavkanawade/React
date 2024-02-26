import React from 'react'
import { Outlet } from 'react-router-dom';
import App from '../../App';


function Home() {
    return (
        <div>
            <h1> Home</h1>
            <App />
            <Outlet />
        </div>

    )
}

export default Home