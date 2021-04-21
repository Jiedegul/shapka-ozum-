import React from 'react';
import parser from "html-react-parser";

const Newsitem = (props) => {
    const item = props.item
    return (
        <div className="card news-item">
            <div className="card-header">
                <p>{item.type}</p>
            </div>
            <div className="card-body">
                <h2 className="card-title">{item.title}</h2>
                <p className="card-text">{parser(item.short_body||"")}</p>

                <a href="a" className="btn btn-primary">
                    Detail
            </a>
            </div>
        </div>
    );
};

export default Newsitem;
