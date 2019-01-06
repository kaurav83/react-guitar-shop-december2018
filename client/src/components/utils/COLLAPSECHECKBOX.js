import React, { Component } from 'react';

class CollapseCheckBox extends Component {

    state = {
        checked: []
    }

  
    render() {
        return (
            <ul 
                className="collapse_items_wrapper"
                 style={{borderBottom: "1px solid #dbdbdb"}}
            >
                <li 
                    style={{padding: "10px 23px 10px 0"}}  
                    className="collapse_title" 
                >
                   <div>{this.props.title}</div>

                    <ul>
                        {
                            this.props.list ?
                                this.props.list.map((value) => {
                                    console.log(value)
                                    return (
                                        <li 
                                            style={{display: "flex"}}
                                            key={value._id}
                                        >
                                            <input type="checkbox" id={value._id}  />
                                            <label htmlFor={value._id} >{value.name}</label>
                                        </li>
                                    )
                                })
                                :
                                null
                        }
                    </ul>
                </li>

            </ul>
        );
    }
};

export default CollapseCheckBox;