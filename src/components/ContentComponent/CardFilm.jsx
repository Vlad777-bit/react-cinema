export const CardFilm = (props) => {
    const {
        Title: title,
        Year: year,
        imdbID: id,
        Type: type,
        Poster: img,
    } = props;

    return (
        <div id={id} className="card">
            <div className="card-image">
                {img === 'N/A' ? (
                    <img
                        src={`https://via.placeholder.com/300x400?text=${title}`}
                        alt=""
                    />
                ) : (
                    <img src={img} alt={title} />
                )}
            </div>
            <div className="card-content">
                <span className="card-title">{title}</span>
                <span>Year: {year}</span>
                <br />
                <span>Type: {type}</span>
                <hr />
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. A
                    deleniti dignissimos soluta blanditiis alias fugiat nemo
                    dolore, dolor amet. Magni?
                </p>
            </div>
        </div>
    );
};
