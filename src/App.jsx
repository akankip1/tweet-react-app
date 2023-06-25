import './App.css'
import MainHeader from './components/MainHeader'
import PostList from './components/PostList'
import { useState } from 'react';

function App() {  
  const [ModalVisible,SetModalVisible]=useState(false);
  function hideModal(){
    
    SetModalVisible(false)
}
function showModal(){
    
  SetModalVisible(true)
}
  return ( 
    <>  
      <MainHeader showModal={showModal}/>  
      <main>  
      <PostList hideModal={hideModal} ModalVisible={ModalVisible}/>
      </main>
    </>
  )
}

export default App
