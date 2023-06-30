import '../App.css'
import { Outlet } from 'react-router-dom';
import PostList from '../components/PostList'
import { useState } from 'react';

function Posts() {  
//   const [ModalVisible,SetModalVisible]=useState(false);
//   function hideModal(){
    
//     SetModalVisible(false)
// }
// function showModal(){
    
//   SetModalVisible(true)
// }
  return ( 
    <>  
      <Outlet/> 
      <main>  
      <PostList />
      </main>
    </>
  )
}

export default Posts
