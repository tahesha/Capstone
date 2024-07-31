import React from 'react'
import { Link } from 'react-router-dom'
import IdeaAuthor from './IdeaAuthor'

const IdeaItem = ({ideaID, category, title, description, authorID, thumbnail}) => {
    const shortDescription = description.length > 145 ? description.substr(0, 145) + '...' : description;
    const ideaTitle = title.length > 30 ? title.substr(0, 30) + '...' : title;

    return (
    <article className="idea">
        <div className="idea_thumbnail">
            <img src={thumbnail} alt={title} />
        </div>
        <div className="idea_content">
            <Link to={`/Ideas/${ideaID}`}>
            <h3>{ideaTitle}</h3>
            </Link>
            <p>{shortDescription}</p>
            <div className="Ideas_footer">
                <IdeaAuthor/>
                <Link to={`/Ideas/categories/${category}`} className='btn category'>{category}</Link>
            </div>
        </div>
    </article>
  )
}

export default IdeaItem