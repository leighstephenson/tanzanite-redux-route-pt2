import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import ProgressBar from '../ProgressBar/ProgressBar.jsx';


//! Step 4 collects user input for miles

function StepFour() {
    // This allows us to send data to redux
    const dispatch = useDispatch();

    // Allow us to navigate to the next page
    const history = useHistory();

    // Miles is data coming from redux
    const miles = useSelector(store => store.miles);

    // On input change. send the new value to redux
    const handleChange = (event) => {
        const action = { type: 'SET_ACTIVITY_MILES', payload: event.target.value }
        dispatch(action);
    }//End handleChange()

    const nextPage = (event) => {
        event.preventDefault();
        if (miles > 0) {
            history.push('/review');
        } else {
            alert('Hey!! You need to enter a value greater than 0!');
        }
    }//End nextPage()

    return (
        <>
            <ProgressBar currentStep={3} />
            <h3> Step Four </h3>
            <form onSubmit={nextPage} >
                <label htmlFor="miles"> Miles: </label> <br />
                <input value={miles} onChange={handleChange} type-="number" />
                <input type="submit" value="Next" />

            </form>
        </>
    )// End return

}//End StepFour()

export default StepFour;