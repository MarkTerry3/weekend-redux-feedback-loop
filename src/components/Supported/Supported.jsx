import {useDispatch} from 'react-redux';
import {useState} from 'react';
import {Provider} from 'react-redux';
import { useHistory } from 'react-router-dom';







function Supported() {

    const [supported, setSupported] = useState('');

    // so you can push them to the next page, and to dispatch the information to the reducer
    const history = useHistory();
    const dispatch = useDispatch();



    const handleSubmit = () => {
        event.preventDefault();

        dispatch({
            type: 'ADD_SUPPORTED',
            payload: supported
        })

        history.push('/comments');
    }


    return(
        <>
            <h2>How well are you being supported?</h2>
            <form onSubmit={handleSubmit} className="addSupportedInfo">
                <input 
                required
                type="number"
                placeholder="1 - 5"
                value={supported}
                onChange={(event) => setSupported(event.target.value)}
                />
    
            <button type="submit">Next</button>
            </form>
        </>
    )



    
}// end Supported










export default Supported;