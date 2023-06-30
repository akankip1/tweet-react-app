import './Modal.css'
import { useNavigate } from 'react-router-dom'

export default function Modal(props){
    const navigate=useNavigate();
    function closeHandler(){
        navigate('..');
    }
    return(<>
    <div className='backdrop' onClick={closeHandler}/>
    <dialog open className='modal'>{props.children}</dialog>
    
    
    </>)
}