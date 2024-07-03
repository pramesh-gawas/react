import propsTypes from "prop-types"

function Student(promps)
{
    return(<div>
        <p>Age:{promps.age}</p>
        <p>Name:{promps.name}</p>
        <p>student:{promps.isStudent? "yes" : "no"}</p>
    </div>)

}

Student.propTypes={

    name:propsTypes.string,
    age:propsTypes.number,
    isStudent:propsTypes.bool,
}
Student.defaultprops={
    neme:"lary",
    age:0,
    isStudent:false,

}
export default Student