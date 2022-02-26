import {useDispatch} from 'react-redux';
import {useState} from 'react';
import {Provider} from 'react-redux';








function Understanding() {


    const [understanding, setUnderstanding] = useState('');



    const dispatch = useDispatch();



    const handleSubmit = () => {
        event.preventDefault();

        dispatch({
            type: 'ADD_UNDERSTANDING',
            payload: understanding
        })
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