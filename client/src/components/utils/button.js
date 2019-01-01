import React from 'react';
import {Link} from 'react-router-dom';

const MyButton = (props) => {
    console.log(props, 'props')
    const buttons = () => {
        let template = null;
        switch(props.type) {
            case "default":
                template = <Link
                    className="link_default"
                    to={props.linkTo}
                    {...props.addStyles}
                >
                    {props.title}
                </Link>
                break;
            default : 
                template = "";
        }

        return template;
    }

    return (
        <div className="my_link">
            {buttons()}
        </div>
    );
};

export default MyButton;