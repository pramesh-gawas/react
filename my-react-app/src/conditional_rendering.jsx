

function Usergreeting(props)
{

if(props.isloggedIn)
    return <h2>welcome to the programming kitchen {props.username}</h2>


else{
    return  <h2>please login to continue</h2>
}
}
export default Usergreeting