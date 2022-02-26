import {useDispatch, useSelector} from 'react-redux';
import {useState} from 'react';
import {Provider} from 'react-redux';



function ReviewFeedback() {


    const feelingReducer = useSelector(store => store.feelingReducer);
    const understandingReducer = useSelector(store => store.understandingReducer);
    const supportReducer = useSelector(store => store.supportedReducer);
    const commentsReducer = useSelector(store => store.commentsReducer);


    return(
        <>
            <h1>Review Your Feedback</h1>
            <p>Feeling: {feelingReducer}</p>
            <p>Understanding: {understandingReducer}</p>
            <p>Support: {supportReducer}</p>
            <p>Comments: {commentsReducer}</p>
        </>
    )
}




export default ReviewFeedback;