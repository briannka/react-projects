import { people } from './people'


function Birthdays() {
    return(
        <section>
            {people.map((person) => {
                const { name, birthday, img } = person;
                return <Birthday person={person}></Birthday>
            })}
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