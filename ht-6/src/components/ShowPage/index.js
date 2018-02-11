import React, {Component} from 'react';
import {shows} from '../../actions';
import {connect} from 'react-redux'
import {getFilm, getIsLoading, getError} from '../../reducers/shows';
import './ShowPage.css';
import no_photo from '../images/no_photo.jpg'
import no_image from '../images/no_image.jpg'

class ShowPage extends Component {
    constructor(props) {
        super(props);
        this.props.request(this.props.match.params.id);
    }

    render() {
        const {film, isLoading, error} = this.props;
        if (isLoading) return <p>Загрузка данных...</p>;
        if (error) return <p>{error}</p>;

        return (
            <div className="show">
                <div className="show__info" >
                    <h3>{film.name}</h3>
                    <img src={film.image !== null ? film.image.medium: no_image} alt={film.name}/>
                </div>
                <div dangerouslySetInnerHTML={{__html: film.summary}} />

                <div className="show__actors">
                    {film._embedded.cast.map(actor => {
                        const {id, name, image} = actor.person;
                        return (
                            <div key={id} className="show__actor t-person">
                                <p>{name}</p>
                                <img src={image !== null ? image.medium: no_photo} alt={name}/>
                            </div>
                        )
                    })}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    film: getFilm(state),
    isLoading: getIsLoading(state),
    error: getError(state),
});

const mapDispatchToProps =  dispatch => ({
    request: (payload) => dispatch(shows.request(payload))
})
  
export default connect(mapStateToProps, mapDispatchToProps)(ShowPage);