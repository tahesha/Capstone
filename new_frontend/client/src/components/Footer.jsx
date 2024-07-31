import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
<footer>
<ul className="footer_categories">

    <li><Link to="/ideas/categories/Invention">Invention</Link></li>
    <li><Link to="/ideas/categories/Business">Business</Link></li>
    <li><Link to="/ideas/categories/Education">Education</Link></li>
    <li><Link to="/ideas/categories/Entertainment">Entertainment</Link></li>
    <li><Link to="/ideas/categories/Art">Art</Link></li>
    <li><Link to="/ideas/categories/Investment">Investment</Link></li>
    <li><Link to="/ideas/categories/Uncategorized">Uncategorized</Link></li>
    <li><Link to="/ideas/categories/entrepreneurship">entrepreneurship</Link></li>
  
</ul>
<div className='footer_copyright'>
    <small>All Rights Reserved &copy; Copyright, Tahesha Orji</small>
  </div>
</footer> 
  )
}

export default Footer