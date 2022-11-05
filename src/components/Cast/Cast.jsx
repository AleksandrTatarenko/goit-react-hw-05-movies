import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import api from 'services/api';

export const Cast = () => {
    const [cast, setCast] = useState([]);
    const params = useParams();
    const imageUrl = "https://image.tmdb.org/t/p/w500";
    const placeholder = "https://via.placeholder.com/150x220";

    useEffect(() => {
        async function fetchCredits(id) {
            try {
                const credits = await api.fetchMovieCredits(id);
                setCast(credits.cast);
            } catch (error) {
                console.log(error);
            } finally {
            };
        };
        fetchCredits(params.movieId);
    }, []);
    
    return (<div>
        {cast.length>0?<ul>
            {cast.map(({ cast_id, name, profile_path, character }) => {
                return (<li key={cast_id}>
                    <img src={profile_path?`${imageUrl + profile_path}`:placeholder} alt="" width="150px"/>
                    <p>{name}</p>
                    <p>Character: {character}</p>
                </li>);
            })}
        </ul>:<p>We don't have cast for this movie.</p>}
    </div>);
}