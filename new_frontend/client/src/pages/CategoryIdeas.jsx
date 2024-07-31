import React, {useState} from 'react'
import { DUMMY_Ideas } from '../data'
import IdeaItem from '../components/IdeaItem'

const CategoryIdeas = () => {
  const [Ideas, setIdeas] = useState(DUMMY_Ideas)
  return (
    <section>
    {Ideas.length > 0 ? <div className="container post_container">
              {
                  Ideas.map(({ id, thumbnail, category, title, desc, authorID }) =>
                      <IdeaItem key={id} postID={id} thumbnail={thumbnail} category={category} title={title} description={desc} authorID={authorID} />)
              }
    </div> : <h2 className='center'>No Ideas found</h2>}
</section> 

  )
}

export default CategoryIdeas