import {useDispatch} from 'react-redux';
import {useState} from 'react';








function Feeling() {


    const [feeling, setFeeling] = useState('');

    const dispatch = useDispatch();

    const handleSubmit = () => {
        event.preventDefault();

        dispatch({
            type: "ADD_FEELING",
            payload: feeling
        })

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