import './Modal.css'

export default function Modal(props){
    return(<>
    <div className='backdrop' onClick={props.hideModal}/>
    <dialog open className='modal'>{props.children}</dialog>
    
    
    </>)
}