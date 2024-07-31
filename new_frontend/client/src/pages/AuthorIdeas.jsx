import React, {useState} from 'react'
import { DUMMY_Ideas } from '../data'
import IdeaItem from '../components/IdeaItem'

const AuthorIdeas = () => {
  const [Ideas, setIdeas] = useState(DUMMY_Ideas)
  return (
    <section className="Ideas">
    {Ideas.length > 0 ? <div className="container Ideas_container">
              {
                  Ideas.map(({ id, thumbnail, category, title, desc, authorID }) =>
                      <IdeaItem key={id} ideaID={id} thumbnail={thumbnail} category={category} title={title} description={desc} authorID={authorID} />)
              }
    </div> : <h2 className='center'>No Ideas found</h2>}
</section> 

  )
}

export default AuthorIdeas