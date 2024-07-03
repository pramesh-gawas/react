function Food()
{
    const food1 = "apple";
    const food2 = "orange";
    const food3="banana";

    return(
        <ul>
            <li>apple</li>
            <li>{food2}</li>
            <li>{food3.toUpperCase()}</li>
        </ul>

    );
}

export default Food