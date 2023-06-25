import './MainHeader.css'
import {MdPostAdd, MdMessage} from 'react-icons/md'

export default function MainHeader(props){
    return(
    <>
    
    <header className="header">
      <h1 className="logo">
        <MdMessage />
        Comment Board
      </h1>
      <p>
        <button className="button" onClick={props.showModal}>
          <MdPostAdd size={18} />
          New Post
        </button>
      </p>
    </header>  
    </>
    )
}