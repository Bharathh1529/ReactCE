export const incAsync=()=>{
    return (dispatch)=>{
        setTimeout(()=>{
            dispatch({ type: 'INCREMENT'});
        },2000)
    };
};