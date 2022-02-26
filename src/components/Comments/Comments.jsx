import {useDispatch} from 'react-redux';
import {useState} from 'react';
import {Provider} from 'react-redux';









function Comments() {


    const [comments, setComments] = useState('');



    const dispatch = useDispatch();

    const handleSubmit = () => {
        event.preventDefault();

        dispatch({
            type: 'ADD_COMMENTS',
            payload: comments
        })
    }

    return(
        <>
            <h2>Any comments you want to leave?</h2>
            <form onSubmit={handleSubmit} className="addCommentsInfo">
                <input 
                required
                type="text"
                placeholder="Comments"
                value={comments}
                onChange={(event) => setComments(event.target.value)}
                />
    
            <button type="submit">Next</button>
            </form>
        </>
    )
    
}// end Comments










export default Comments;