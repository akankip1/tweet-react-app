import Modal from '../components/Modal';
import '../components/Post.css'
import { Link,Form,redirect} from 'react-router-dom';
export default function NewPost(){
    
    return(
        <Modal>
        <Form method='post'className="form">
           <p>
            <label htmlFor="body">Comment</label>
            <textarea id="body" name='body'required rows={3}/>            
            </p>
            <p>
            <label htmlFor="name">Name</label>
            <input type="text" name='author' id='name' required />            
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
        </Form>
        </Modal>
    )
}
export async function action(data){
    const formData = await data.request.formData();
    const postData=Object.fromEntries(formData); //extraction of form data into key-value
    await fetch("http://localhost:8080/posts",{
            method:"POST",
            body: JSON.stringify(postData),
            headers:{
                'Content-Type':'application/json'

            }
})
return redirect('/');
}