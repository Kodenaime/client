import React, { useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

const CreatePost = () => {

  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('Other')
  const [description, setDescription] = useState('')
  const [image, setimage] = useState('')

  const modules = {
    toolbar: [
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ 'list': 'ordered'}, { 'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image'],
      ['clean']
    ],
  }

  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
  ]

  const postCategories = [
    "Agriculture", "Business", "Education", "Entertainment", "Art",
    "Sports", "Games", "Others", "Technology"
  ]

  return (
    <section className="create-post">
      <div className="container creator-container">
        <h2>Create Post</h2>
        <p className='form-error'>This an error</p>
        <form className="former creator-form">
          <input className='new' type="text" placeholder='Title' value={title} onChange={e => setTitle(e.target.value)} />
          <select name="category" value={category} onChange={e => setCategory(e.target.value)}>
            {
              postCategories.map(cat => <option key={cat}>{ cat }</option>)
            }
            
          </select>
          <ReactQuill className='new' modules={modules} formats={formats} value={description} onChange={setDescription} />
          <input className='old' type='file' onChange={e => setimage(e.target.files[0])} accept='png, jpg jpeg' />
          <button type='submit' className='btn'>Create</button>
        
        </form>
      </div>
    </section>
  )
}

export default CreatePost 