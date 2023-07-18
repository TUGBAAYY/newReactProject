import React from 'react'
import { Navigate } from 'react-router-dom'
function Faav({user}) {
    if (!user?.id){
    return <Navigate to="/" />
    }
  return (
    <div>Fav</div>
  )
} 

export default Faav


