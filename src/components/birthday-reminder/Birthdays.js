import { useState } from 'react';
import { data } from './people';


function Birthdays() {
    const [people, setPeople] = useState(data);
    return(
        <section>
            {people.map((person) => {
                // const { name, birthday, img } = person;
                return <Birthday person={person}></Birthday>
            })}
            <button type="button" className="clear-btn" onClick={() => {setPeople([])}}>Clear All Birthdays</button>
        </section>
    )
}

const Birthday = (props) => {
    const { name, birthday, img } = props.person;
    return (
        <article className="birthday">
            <img src={img} alt=" "></img>
            <div>
                <h3>{name}</h3>
                <p>{birthday}</p>
            </div>
        </article>
    )
}

export { Birthdays }