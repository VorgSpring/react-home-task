import React from 'react';
import './NewsPost.css'

export default (props) => {
    return (
        <div className="news-post">
            <p>{props.value}</p>
        </div>
    )
}