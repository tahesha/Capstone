import React from 'react'
import { Link } from 'react-router-dom'
import Avatar from '../images/avatar1.jpg'

const IdeaAuthor = () => {
  return (
<Link to={`/Ideas/users/sdfsdf`} className='idea_author'>
<div className="idea_author-avatar">
    <img src={Avatar} alt="" />
</div>
<div className="idea_author-deatails">
    <h5>By: Kenya Laren</h5>
    <small>Just Now</small>
</div>
</Link>


  )
}

export default IdeaAuthor