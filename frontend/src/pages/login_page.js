import React from 'react'
import Login from "../components/login"
import TopBar from "../components/header"
export const home = () => {
  return (
    <div>
        <TopBar/>
        <Login/>  
    </div>
  )
}