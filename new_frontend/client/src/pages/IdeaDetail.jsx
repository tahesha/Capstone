import React from 'react'
import IdeaAuthor from '../components/IdeaAuthor'
import { Link } from 'react-router-dom'
import Thumbnail from '../images/blog22.jpg'

const IdeaDetail = () => {
  return (
<section className="IdeaDetail">
<div className="container post-detail_container">
  <div className="post-detail_header">
    <IdeaAuthor/>
    <div className="post-detail_buttons">
<Link to={`/Ideas/werwer/edit`} className='btn sm primary'>Edit</Link>
<Link to={`/Ideas/werwer/delete`} className='btn sm danger'>Delete</Link>
    </div>
  </div>

<h1>This is the post title!</h1>
<div className="post-detail_thumbnail">
  <img src={Thumbnail} alt="" />
</div>
<p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ab qui reprehenderit magni quibusdam tenetur in rerum quaerat? Ipsam harum, ratione odio animi adipisci laborum eligendi consequuntur veniam id reprehenderit, numquam error, necessitatibus eaque voluptatibus amet culpa eos nesciunt iure.
</p>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, numquam officia voluptatibus, eum voluptatem eveniet hic, modi assumenda minus ullam magni eaque voluptates placeat deleniti est perspiciatis aut veritatis ducimus non sint iste neque natus at dignissimos! Voluptate qui, quam aliquam dolor eveniet modi, recusandae enim atque velit eaque harum ducimus amet dignissimos beatae! Natus.</p>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi eum ea consectetur labore ullam velit praesentium recusandae quia iusto voluptatem! Necessitatibus accusantium quod veniam non repudiandae, harum molestiae expedita! Nostrum neque reiciendis nam numquam, minus at, cupiditate cum quo, dignissimos totam sit reprehenderit! Nulla obcaecati fuga deleniti, nesciunt nisi quae est velit. Iure quaerat dolores vero labore minus explicabo ut at? Illo consequuntur quas voluptatem culpa labore veritatis blanditiis magnam repellat sapiente possimus aliquam mollitia tempora, a quasi nobis repudiandae, earum totam magni alias ea nisi nihil rem veniam cum? Fugit culpa repudiandae provident eius a quidem, nemo voluptatibus, tempore sunt, amet ex non veniam quae! Voluptate aliquam atque placeat illum!</p>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita nostrum omnis quod deleniti beatae dicta aspernatur nulla unde veritatis velit!</p>

<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam corporis expedita, vitae sequi eum sed autem quia iure quibusdam ratione amet vero facere cum dolorum aliquam dolorem temporibus ad nam voluptatibus corrupti odit similique assumenda ducimus quidem? Ad non magni eaque fugiat ducimus a consequuntur laborum, quis exercitationem dolorum adipisci eligendi recusandae cupiditate, in incidunt aspernatur voluptatum quibusdam, aliquam dignissimos quod inventore ex? Debitis iure accusantium rem, sunt illo, eveniet vel itaque provident non nulla velit asperiores cupiditate natus laudantium perspiciatis quisquam modi id impedit blanditiis! Temporibus nulla maxime eius eligendi! Magnam, harum. Laborum vitae quod pariatur distinctio. Corrupti magnam recusandae repellendus, provident ipsum ipsam, autem dignissimos dolores sit quos iusto totam pariatur? Labore ex expedita delectus nostrum enim animi ipsum quae iure error sit maxime suscipit voluptate, quos non? Vero non possimus, sunt ipsa eum ad quod, blanditiis iste, consectetur illum delectus necessitatibus sequi voluptatibus et aperiam vel? Quod deleniti ipsam minus porro cum doloribus a qui iusto quam explicabo repudiandae quidem, illum hic in consequatur voluptatum, deserunt ratione molestias et rerum quisquam tenetur? Eveniet nostrum esse ab natus reiciendis qui officiis dignissimos explicabo, deserunt exercitationem dolorem cumque architecto vitae enim debitis ipsum rem dolores commodi? Suscipit, cumque ex!</p>
</div>

</section>  )
}

export default IdeaDetail