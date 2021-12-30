import React from 'react';
import { ListFilms } from '../components/ContentComponent/ListFilms';

export class Main extends React.Component {
    constructor() {
        super();

        this.state = {
            moviesData: [],
        };
    }

    componentDidMount() {
        fetch('http://www.omdbapi.com/?apikey=3f60f4a5&s=matrix')
            .then((req) => req.json())
            .then((data) => this.setState({ moviesData: data.Search }))
            .catch((err) => new Error(`Ошибка ${err}`));
    }

    componentWillUnmount() {
        this.setState({ moviesData: [] });
    }

    render() {
        return (
            <div className="container">
                <main className="content">
                    {this.state.moviesData.length ? (
                        <ListFilms moviesData={this.state.moviesData} />
                    ) : (
                        <h3>Loading...</h3>
                    )}
                </main>
            </div>
        );
    }
}
