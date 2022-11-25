import React from "react";
import Card from './Card';


const CardList = ({ robots }) => {      
    return (
        <div>
            {
                robots.map((user, i) => { // MAP LOOP TO PARSE MANY JSON ITEMS
                    return (
                        <Card
                            key={i}
                            id={robots[i].id}
                            name={robots[i].name}
                            email={robots[i].email}
                            /> // MAP LOOP TO PARSE MANY JSON ITEMS

                    );
                })
            }
        </div>
    );
}

export default CardList;