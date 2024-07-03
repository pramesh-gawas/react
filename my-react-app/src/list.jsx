function List()
{
    const fruits=[{name:"apple",calories:96},{name:"orange",calories:45},{name:"banana", calories:45},{name:"carrot",calories:23}];

    const listitems=fruits.map(fruit => <li key={ fruit.name}>{fruit.calories}</li>)
    return (<ul>{listitems}</ul>)
}

export default List