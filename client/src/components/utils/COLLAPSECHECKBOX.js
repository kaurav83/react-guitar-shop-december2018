import React, {Component} from 'react';

class CollapseCheckBox extends Component {

    state = {
        checked: []
    }

    handleToggle = value => () => {
        const {checked} = this.state;
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1){
            newChecked.push(value)
        } else {
            newChecked.splice(currentIndex, 1);
        }

        this.setState({
            checked: newChecked
        }, () => {
            this.props.handleFilters(newChecked)
        })
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
                    {/* СПИСОК ЧЕКБОКСОВ 1 */}
                    <ul>
                        {
                            this.props.list ?
                                this.props.list.map((value) => {
                                    return (
                                        <li 
                                            style={{display: "flex"}}
                                            key={value._id}
                                        >
                                            <input 
                                                type="checkbox" 
                                                id={value._id}
                                                onChange={this.handleToggle(value._id)} 
                                                checked={this.state.checked.indexOf(value._id) !== -1} 
                                            />
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