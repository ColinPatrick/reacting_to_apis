import React, { useEffect, useState } from 'react';
import FilmCard from './components/FilmCard'
import PeopleCard from './components/PeopleCard';

const App = () => {
    const [isPage, setIsPage] = useState('home');
    const [films, setFilms] = useState([]);
    const [people, setPeople] = useState([]);

    useEffect(() => {
        fetch('https://ghibliapi.herokuapp.com/films')
        .then(res => res.json())
        .then(allFilms => setFilms(allFilms));
    }, []);

    useEffect(() => {
        fetch('https://ghibliapi.herokuapp.com/people')
        .then(res => res.json())
        .then(allPeople => setPeople(allPeople));
    }, []);

    if (isPage === 'home') {
        return (
            <div className="d-flex justify-content-center flex-wrap">
                <div className="d-flex col-sm-12 justify-content-center">
                    <button className="btn btn-primary my-4 mx-4" type="submit" onClick={() => setIsPage('films')}>Load Films</button>
                    <button className="btn btn-primary my-4 mx-4" type="submit" onClick={() => setIsPage('home')}>Home</button>
                    <button className="btn btn-primary my-4 mx-4" type="submit" onClick={() => setIsPage('people')}>Characters</button>
                </div>
                <div className="d-flex col-sm-12 justify-content-center">
                    <img className="my-4" src="https://upload.wikimedia.org/wikipedia/en/c/ca/Studio_Ghibli_logo.svg" style={{height: 400}} />
                </div>
            </div>
        );
    } else if (isPage === 'films') {
        return (
            <div className="d-flex justify-content-center flex-wrap">
                <div className="d-flex justify-content-center">
                    <button className="btn btn-primary my-4 mx-4" type="submit" onClick={() => setIsPage('films')}>Load Films</button>
                    <button className="btn btn-primary my-4 mx-4" type="submit" onClick={() => setIsPage('home')}>Home</button>
                    <button className="btn btn-primary my-4 mx-4" type="submit" onClick={() => setIsPage('people')}>Characters</button>
                </div>
                <FilmCard films={films} />
            </div>
        )
    } else if (isPage === 'people') {
        return (
            <div className="d-flex justify-content-center flex-wrap">
                <div className="d-flex justify-content-center">
                    <button className="btn btn-primary my-4 mx-4" type="submit" onClick={() => setIsPage('films')}>Load Films</button>
                    <button className="btn btn-primary my-4 mx-4" type="submit" onClick={() => setIsPage('home')}>Home</button>
                    <button className="btn btn-primary my-4 mx-4" type="submit" onClick={() => setIsPage('people')}>Characters</button>
                </div>
                <PeopleCard people={people} />
            </div>
        )
    }
};

export default App;
