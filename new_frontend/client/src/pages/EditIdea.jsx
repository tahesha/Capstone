import React, {useState} from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

const EditIdea = () => {
const [title, setTitle] = useState('')
const [category, setCategory] = useState('Uncategorized')
const [description, setDescription] = useState ('')
const [thumbnail, setThumbnail] = useState ('')

const modules = {
  toolbar: [
    [{'header': [1, 2, 3, 4, 5, 6, false] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote' ],
    [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
    ['link', 'image'],
    ['clean']
  ],
}

const formats = [
  'header',
  'bold', 'italic', 'underline', 'strike', 'blockquote' ,
    'list', 'bullet', 'indent',
    'link', 'image',
  ]

  const IDEA_CATEGORIES = ["Invention", "Business", "Education", "Entertainment", "Art", "Investment", "Uncategorized", "Entrepreneurship"]

  return (
<section className="create-idea">
  <div className="container">
    <h2>Edit Idea</h2>
    <p className="form_error-message">
      This is an error message
    </p>
    <form className="form create-idea_form">
    <input type="text" placeholder='Title' value={title} onChange={e => setTitle(e.target.value)} autoFocus />
    <select name="category" value={category} onChange={e => setCategory(e.target.value)}>
    {
      IDEA_CATEGORIES.map(cat => <option key={cat}>{cat}</option>)
    }
    </select>
<ReactQuill modules={modules} formats={formats} value={description} onChange={setDescription}/>
    <input type="file" onChange={e => setThumbnail(e.target.files[0])} accept='png, jpg, jpeg' />
    <button type="submit" className='btn primary' >Update</button>
    
    
    </form>
  </div>
</section>  )
}

export default EditIdea