import React, { Component } from 'react'

class CollapseRadio extends Component {
    state = {
        value: "0"
    }

    handleChange = (event) => {
        this.props.handleFilters(event.target.value)
        console.log(event.target.value)
        this.setState({
            value: event.target.value
        })
    }

    render() {
        return (
            <ul
                className="collapse_items_wrapper"
                style={{ borderBottom: "1px solid #dbdbdb" }}
            >
                <li
                    style={{ padding: "10px 23px 10px 0" }}
                    className="collapse_title"
                >
                    <div>{this.props.title}</div>
                    {/* СПИСОК RADIOBUTTONS 1 */}
                    <ul>
                        {
                            this.props.list ?
                                this.props.list.map((val) => {
                                    return (
                                        <li
                                            style={{ display: "flex", margin: "10px 0" }}
                                            key={val._id}
                                        >
                                            <input
                                                type="radio"
                                                name="prices"
                                                value={val._id}
                                                id={val._id}
                                                onChange={this.handleChange}
                                            />
                                            <label 
                                                htmlFor={val._id} 
                                                value={`${val._id}`}
                                                style={{width: "100%"}}
                                            >{val.name}</label>
                                        </li>
                                    )
                                })
                                :
                                null
                        }
                    </ul>
                </li>

            </ul>
        )
    }
}

export default CollapseRadio;