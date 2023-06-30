import Modal from '../components/Modal';
import '../components/Post.css'
import { useState } from "react";
import { Link, NavLink } from 'react-router-dom';
export default function NewPost(props){
    const [bodytext,setBodyText]=useState('');
    const [nametext,setNameText]=useState('');
    
    function changebody(event){
        setBodyText(event.target.value)
    }
    function changename(event){
        setNameText(event.target.value)
    }

    function onSubmit(event){
        event.preventDefault();
        const postData={
            body:bodytext,
            author:nametext
        }
        props.onAdd(postData);
        
        props.onCancel();
    }
    return(
        <Modal>
        <form className="form" onSubmit={onSubmit}>
           <p>
            <label htmlFor="body">Comment</label>
            <textarea id="body" required rows={3} onChange={changebody}/>            
            </p>
            <p>
            <label htmlFor="name">Name</label>
            <input type="text" id='name' required onChange={changename}/>            
            </p>
            <div className='actions'>
                <button type='submit'>
                    Post
                </button>
                <Link to='..'>
                <button type='button'>
                    Discard
                </button>
                </Link>
            </div> 
        </form>
        </Modal>
    )
}