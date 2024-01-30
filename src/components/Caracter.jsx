import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { PUBLIC_KEY, HASH, TS } from "../const/api";
import './Caracter.css';

function Caracter({}) {
    const { caracterId } = useParams();
    const [caracter, setCaracter] = useState(null);

    function processResponse(response) {
        console.log(response);

        function reduceCaracter(result, caracter){
            function reducePrecense(result, story){
                result.push(story.name);
                return result;
            }
            result.push({
                name: caracter.name,
                thumbnail: caracter.thumbnail.path +'.'+ caracter.thumbnail.extension,
                comics: caracter.comics.items.reduce(reducePrecense, []),
                series: caracter.series.items.reduce(reducePrecense, []),
                stories: caracter.stories.items.reduce(reducePrecense, []),
            });
            return result;
        }

        setCaracter(response.data.results.reduce(reduceCaracter, []));
    }

    useEffect(
        function() {
            if(!caracterId) return;
            const url = `http://gateway.marvel.com/v1/public/characters/${caracterId}?ts=${TS}&apikey=${PUBLIC_KEY}&hash=${HASH}`;
            fetch(url)
                .then((response) => response.json().then( data => processResponse(data)))
                .then((error) => console.error(error))
        }
    ,[caracterId]);

    function renderPresentIn(result, name, index) {
        result.push(
            <li key={index}>
                {name}
            </li>
        )
        return result;
    }

    return (
        <div className="caracter-wrapper">
            <Link to='/' >Back</Link>
            {caracter && caracter.map( caracter => (
                <div>
                    <h1>{caracter.name}</h1>
                    <img className='details-caracter-image'src={caracter.thumbnail} />
                    <span className="details-caracter-info-title">Comics</span>
                    <ul key="comics">
                        {caracter.comics.reduce(renderPresentIn, [])}
                    </ul>
                    <span className="details-caracter-info-title">Series</span>
                    <ul key="series">
                        {caracter.comics.reduce(renderPresentIn, [])}
                    </ul>
                    <span className="details-caracter-info-title">Stories</span>
                    <ul key="stories">
                        {caracter.comics.reduce(renderPresentIn, [])}
                    </ul>
                </div>
                )
            )}
            
        </div>
    )
}
export default Caracter;