import { useState,useEffect } from 'react';
import Post from './Post'
import './Post.css';
export default function PostList(){   
    const [posts,SetPosts]=useState([])
    const [isFetching, setIsFetching]=useState(false)
    //UNCOMMENT BELOW FOR BACKEND CODE
    // useEffect(()=>{
    //     async function fetchPosts(){
    //         setIsFetching(true)
    //         const response= await fetch("http://localhost:8080/posts");
    //         const resData= await response.json();
    //         SetPosts(resData.posts);
    //         setIsFetching(false)
    //     }
    //     fetchPosts();
    // },[])
    function addPost(postData){
        fetch("http://localhost:8080/posts",{
            method:"POST",
            body: JSON.stringify(postData),
            headers:{
                'Content-Type':'application/json'

            }
        });
        SetPosts((prev)=>[postData,...prev])

    }
    return(
    <>
   
    {/* {props.ModalVisible ? <Modal hideModal={props.hideModal}>
        <NewPost        
        onCancel={props.hideModal}
        onAdd={addPost}
        />
        </Modal> :null
        } */}
        
        
        {!isFetching && posts.length>0 && <ul className='ulist'>            
            {posts.map((post)=><Post author={post.author} comment={post.body}/>)}            
            </ul>
        }
        {!isFetching && posts.length === 0 && <div className='noposts'>
            <h2>No Posts</h2>
        </div>
           
    }
    {isFetching && <div className='noposts'><p>Loading...</p></div>} 
    </>
    )
}
