import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import api from 'services/api';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const params = useParams();

    useEffect(() => {
        async function fetchReviews(id) {
            try {
                const reviews = await api.fetchMovieReviews(id);
                setReviews(reviews.results);
            } catch (error) {
                console.log(error);
            } finally {
            };
        };
        fetchReviews(params.movieId);
    }, [params.movieId]);

    return (<div>
        {reviews.length > 0 ? <ul>
            {reviews.map(({ id, author, content }) => {
                return (<li key={id}>
                    <h3>Autor: {author}</h3>
                    <p>{content}</p>
                </li>)
            })}
        </ul> : <p>We don't have any reviews for this movie.</p>}
    </div>);
};

export default Reviews;
