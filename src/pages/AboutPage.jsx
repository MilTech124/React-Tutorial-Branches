import React from 'react'
import {Link} from "react-router-dom"

function AboutPage() {
  return (
  <>
    <h2>Made By Jarosław Matusiak </h2>
    <Link to={'/'}> Home</Link>
  </>
  )
}

export default AboutPage