export const incrementAsync = () => {
    return (dispatch) => {
    
    setTimeout(() => {
        dispatch( { type: 'INCREMENT' });
        }, 2000); // Simulated delay of 1 second
    };
};