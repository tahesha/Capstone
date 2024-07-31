import React from 'react'
import { Link } from 'react-router-dom'
import IdeaAuthor from './IdeaAuthor'

const IdeaItem = ({postID, category, title, description, authorID, thumbnail}) => {
    const shortDescription = description.length > 145 ? description.substr(0, 145) + '...' : description;
    const postTitle = title.length > 30 ? title.substr(0, 30) + '...' : title;

    return (
    <article className="post">
        <div className="post_thumbnail">
            <img src={thumbnail} alt={title} />
        </div>
        <div className="post_content">
            <Link to={`/Ideas/${postID}`}>
            <h3>{postTitle}</h3>
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