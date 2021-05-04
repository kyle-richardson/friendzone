import React from "react"
import UserCard from "./UserCard"

const CardList = ({people}) => {
    return (
        <div style={{
            display:"flex",
            justifyContent:"space-around",
            alignItems:"center",
            flexWrap:"wrap",
            maxWidth:"90vw",
            paddingLeft:"50px"
        }}>
            {people.map(person=> <UserCard key={person.username} person={person} allowEdit={false}/>)}
        </div>
    )
}

export default CardList