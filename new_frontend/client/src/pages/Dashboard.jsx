import React, { useState } from 'react'
import { DUMMY_Ideas } from '../data'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  const [Ideas, setIdeas] = useState(DUMMY_Ideas)
  
  
  return (
<section className="dashboard">
  {
    Ideas.length ? <div className="container dashboard_container">

    {
      Ideas.map(idea => {
        return <article key={idea.id} className='dashboard_idea'>
          <div className="dashboard_idea-info"> 
            <div className="dashboard_idea-thumbnail">
              <img src={idea.thumbnail} alt="" />
            </div>
            <h5>{idea.title}</h5>
          </div>

          <div className="dashboard_idea-actions"> 
          <Link to={`/Ideas/${idea.id}`} className='btn sm'>View</Link>
          <Link to={`/Ideas/${idea.id}/edit`} className='btn sm primary'>Edit</Link>
          <Link to={`/Ideas/${idea.id}/delete`} className='btn sm danger'>Delete</Link>

          </div>
        </article>

       
      })
}
</div> : <h2 className='center'>You have no Ideas yet.</h2>

  }
</section>  )
}

export default Dashboard