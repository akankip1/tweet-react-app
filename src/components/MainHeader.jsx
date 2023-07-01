import './MainHeader.css'
import {MdPostAdd, MdMessage} from 'react-icons/md'
import {Link} from 'react-router-dom'
export default function MainHeader(props){
    return(
    <>
    
    <header className="header">
      <h1 className="logo">
        <MdMessage />
        Have Your Say
      </h1>
      <p>
        <Link to='/new-post' className="button">
          <MdPostAdd size={18} />
          New Post
        </Link>
      </p>
    </header>  
    </>
    )
}