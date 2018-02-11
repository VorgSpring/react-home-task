import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {getFilms, getIsLoading, getIsLoaded, getError} from '../../reducers/search';
import {search} from '../../actions';
import {connect} from 'react-redux'
import './Search.css';
import no_image from '../images/no_image.jpg'

class Search extends Component {
    state = {
        value: ''
    }

    onChange = (event) => {
        this.setState({
            value: event.target.value
        });
    }

    onClick = () => {
        this.setState({
            value: ''
        });
        this.props.request(this.state.value);
    }

    render() {
        const {value} = this.state;
        const {films, isLoading, error} = this.props;
        if (isLoading) return <p>Загрузка данных...</p>;
        if (error) return <p>{error}</p>;
        return (
            <div className="search">
                <div className="search__input">
                    <input type="text" placeholder="Название сериала" onChange={this.onChange} value={value}/>
                    <button onClick={this.onClick}>Найти</button>
                </div>
                <div className="search__container t-search-result">
                    {films.map(film => (
                        <div key={film.id} className="search__film t-preview">
                            <div className="search__film-info">
                                <Link className="t-link" to={`/shows/${film.id}`}>
                                    <h3>
                                        {film.name}
                                    </h3>
                                </Link>
                                <img src={film.image !== null ? film.image.medium : no_image} alt={film.name}/>
                            </div>
                            <div dangerouslySetInnerHTML={{__html: film.summary}} />
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    films: getFilms(state),
    isLoading: getIsLoading(state),
    isLoaded: getIsLoaded(state),
    error: getError(state),
});

const mapDispatchToProps =  dispatch => ({
    request: (payload) => dispatch(search.request(payload))
})
  
export default connect(mapStateToProps, mapDispatchToProps)(Search);
