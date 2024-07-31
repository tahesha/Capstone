import React, { useState } from 'react'
import { DUMMY_Ideas } from '../data'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  const [Ideas, setPost] = useState(DUMMY_Ideas)
  
  
  return (
<section className="dashboard">
  {
    Ideas.length ? <div className="container dashboard_container">

    {
      Ideas.map(post => {
        return <article key={post.id} className='dashboard_post'>
          <div className="dashboard_post-info"> 
            <div className="dashboard_post-thumbnail">
              <img src={post.thumbnail} alt="" />
            </div>
            <h5>{post.title}</h5>
          </div>

          <div className="dashboard_post-actions"> 
          <Link to={`/Ideas/${post.id}`} className='btn sm'>View</Link>
          <Link to={`/Ideas/${post.id}/edit`} className='btn sm primary'>Edit</Link>
          <Link to={`/Ideas/${post.id}/delete`} className='btn sm danger'>Delete</Link>

          </div>
        </article>

       
      })
}
</div> : <h2 className='center'>You have no Ideas yet.</h2>

  }
</section>  )
}

export default Dashboard