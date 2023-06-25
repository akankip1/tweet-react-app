import { useState } from 'react';
import Modal from './Modal';
import NewPost from './NewPost';
import Post from './Post'
import './Post.css';
export default function PostList(props){   
    const [posts,SetPosts]=useState([])
    function addPost(postData){
        SetPosts((prev)=>[postData,...prev])

    }
    return(
    <>
   
    {props.ModalVisible ? <Modal hideModal={props.hideModal}>
        <NewPost        
        onCancel={props.hideModal}
        onAdd={addPost}
        />
        </Modal> :null
        }
        
        
        {posts.length>0 && <ul className='ulist'>            
            {posts.map((post)=><Post author={post.author} comment={post.body}/>)}            
            </ul>
        }
        {posts.length === 0 && <div className='noposts'>
            <h2>No Posts</h2>
        </div>
            
    }
    </>
    )
}