import {useDispatch} from 'react-redux';
import {useState} from 'react';
import {Provider} from 'react-redux';
import { useHistory } from 'react-router-dom';







function Understanding() {


    const [understanding, setUnderstanding] = useState('');

    // so you can push them to the next page, and to dispatch the information to the reducer
    const history = useHistory();
    const dispatch = useDispatch();



    const handleSubmit = () => {
        event.preventDefault();

        //this is setting the state of the understanding reducer
        dispatch({
            type: 'ADD_UNDERSTANDING',
            payload: understanding
        })

        //this will bring you to the next page you want them to go to
        history.push('/supported');
    }

    return(
        <>
            <h2>How well are you understanding the content?</h2>
            <form onSubmit={handleSubmit} className="addUnderstandingInfo">
                <input 
                required
                type="number"
                placeholder="1 - 5"
                value={understanding}
                onChange={(event) => setUnderstanding(event.target.value)}
                />

            <button type="submit">Next</button>
            </form>
        </>
    )





    
}// end Understanding










export default Understanding;