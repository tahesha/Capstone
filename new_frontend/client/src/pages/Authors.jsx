import React, {useState} from 'react'
import Avatar1 from '../images/avatar1.jpg'
import Avatar2 from '../images/avatar2.jpg'
import Avatar3 from '../images/avatar3.jpg'
import Avatar4 from '../images/avatar4.jpg'
import Avatar5 from '../images/avatar5.jpg'
import { Link } from 'react-router-dom'

const authorsData = [
{id: 1, avatar: Avatar1, name: 'Kenya Laren', Ideas: 3},
{id: 2, avatar: Avatar2, name: 'Nyrobi Dunee', Ideas: 5},
{id: 3, avatar: Avatar3, name: 'Zyaire Umbe', Ideas: 0},
{id: 4, avatar: Avatar4, name: 'Aiyana Mbori', Ideas: 2},
{id: 5, avatar: Avatar5, name: 'Chidera Foluke', Ideas: 1},
]


const Authors = () => {
  const [authors, setAuthors] = useState(authorsData)

return (
<section className="authors">
  {authors.length > 0 ? <div className="container authors_container">

{
authors.map(({id, avatar, name, Ideas}) => {
  return <Link key={id} to={`/Ideas/users/${id}`} className='author'>
    <div className="author_avatar">
      <img src={avatar} alt={`Image of ${name}`} />
      /</div>
      <div className="author_info">
        <h4>{name}</h4>
        <p>{Ideas}</p>
      </div>
  
  </Link>
})
}
  </div> : <h2 className='center'>No user/authors found.</h2>
}

</section>  

)
}

export default Authors