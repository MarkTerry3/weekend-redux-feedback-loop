import {useDispatch} from 'react-redux';
import {useState} from 'react';
import {Provider} from 'react-redux';
import { useHistory } from 'react-router-dom';







function Feeling() {


    const [feeling, setFeeling] = useState('');


    const history = useHistory();
    const dispatch = useDispatch();



    const handleSubmit = () => {
        event.preventDefault();


        // this is setting the state of the feeling reducer
        dispatch({
            type: "ADD_FEELING",
            payload: feeling
        })

        //this will bring you to the next page you want them to go to
        history.push('/understanding');

    }




    return(
        <>
            <h2>How're you feeling today?</h2>
            <form onSubmit={handleSubmit} className="addFeelingInfo">
                <input 
                required
                type="number"
                placeholder="1 - 5"
                value={feeling}
                onChange={(event) => setFeeling(event.target.value)}
                />

            <button type="submit">Next</button>
            </form>
        </>
    )
    
}// end Feeling










export default Feeling;



