import {useDispatch} from 'react-redux';
import {useState} from 'react';
import {Provider} from 'react-redux';








function Supported() {

    const [supported, setSupported] = useState('');



    const dispatch = useDispatch();



    const handleSubmit = () => {
        event.preventDefault();

        dispatch({
            type: 'ADD_SUPPORTED',
            payload: supported
        })
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