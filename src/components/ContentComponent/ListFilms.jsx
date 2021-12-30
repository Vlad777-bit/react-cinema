import { CardFilm } from './CardFilm';

export const ListFilms = (props) => {
    const { moviesData } = props;
    return (
        <div className="films">
            {moviesData.map((film) => (
                <CardFilm key={film.imdbID} {...film} />
            ))}
        </div>
    );
};
