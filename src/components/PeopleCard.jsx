import React from 'react';

const PeopleCard = (props) => {
    return (
        <div className="d-flex justify-content-center flex-wrap">
            {props.people.map(person => (
                <div className="col-md-6 d-flex justify-content-center" key={`character-id-${person.id}`}>
                    <div className="card bg-light col-md-6 rounded shadow my-4 mx-4 d-flex">
                        <div className="card-body">
                            <h4 className="card-title">
                                {person.name}
                            </h4>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item rounded">Gender: {person.gender}</li>
                                <li className="list-group-item">Age: {person.age}</li>
                                <li className="list-group-item">Eye color: {person.eye_color}</li>
                                <li className="list-group-item">Hair color: {person.hair_color}</li>                                  
                            </ul>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default PeopleCard;