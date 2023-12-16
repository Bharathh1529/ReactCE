function Parent()
{
    return(
        <div>
            <h1>Parent Component</h1>
            <Child res={1000}></Child>
        </div>
        )
    }
export default Parent;
function Child(props)
{
    return(
        <div>
            <h1>Child Component</h1>
            <h2>The value is {props.res}</h2>
        </div>
    )
}