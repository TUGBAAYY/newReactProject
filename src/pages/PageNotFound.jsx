import React from 'react'
import { Link } from 'react-router-dom'

function PageNotFound() {
  return (
    <div className="vh-100">
    <h1 className="">Sayfa Bulunamadı</h1>
    <Link to="/" className="btn btn-succes">Ana Sayfaya Gitmek İçin Tıklayın</Link>      
    </div>
    
    
  )
}

export default PageNotFound