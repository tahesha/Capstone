import React from 'react'
import { Link } from 'react-router-dom'
import Avatar from '../images/avatar1.jpg'

const IdeaAuthor = () => {
  return (
<Link to={`/Ideas/users/sdfsdf`} className='post_author'>
<div className="post_author-avatar">
    <img src={Avatar} alt="" />
</div>
<div className="post_author-deatails">
    <h5>By: Ernest Achiever</h5>
    <small>Just Now</small>
</div>
</Link>


  )
}

export default IdeaAuthor