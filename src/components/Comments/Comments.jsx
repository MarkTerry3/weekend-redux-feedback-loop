import {useDispatch} from 'react-redux';
import {useState} from 'react';
import {Provider} from 'react-redux';
import { useHistory } from 'react-router-dom';








function Comments() {


    const [comments, setComments] = useState('');

    // so you can push them to the next page, and to dispatch the information to the reducer
    const history = useHistory();
    const dispatch = useDispatch();

    const handleSubmit = () => {
        event.preventDefault();

        dispatch({
            type: 'ADD_COMMENTS',
            payload: comments
        })
        history.push('/reviewFeedback');
    }

    return(
        <>
            <h2>Any comments you want to leave?</h2>
            <form onSubmit={handleSubmit} className="addCommentsInfo">
                <input 
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