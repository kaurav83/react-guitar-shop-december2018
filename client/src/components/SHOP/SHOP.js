import React, { Component } from 'react';
import PageTop from '../utils/PAGE_TOP';

import {connect} from 'react-redux';
import {getBrands, getWoods} from '../../actions/products_actions';

import CollapseCheckBox from '../utils/COLLAPSECHECKBOX';
import {FRETS} from '../utils/FIXED_CATEGORIES';

class Shop extends Component {

    state={
        grid: "",
        limit: 6,
        skip: 0,
        filters: {
            brand: [],
            frets: [],
            wood: [],
            price: []
        }
    }

    componentDidMount() {
        this.props.dispatch(getBrands());
        this.props.dispatch(getWoods());
    }

    handleFilters = (filters, category) => {
        const newFilters = {...this.state.filters}
        newFilters[category] = filters;

        this.setState({
            filters: newFilters
        })
    }

    render() {

        console.log(this.state.filters)
        const products = this.props.products;
        return (
            <div>
                <PageTop 
                    title="Browse Products"
                />
                <div className="container">
                    <div className="shop_wrapper">
                        <div className="left">
                            <CollapseCheckBox 
                                title="Brands"
                                list={products.brands}
                                handleFilters={(filters) => this.handleFilters(filters, 'brand') }
                            />
                            <CollapseCheckBox 
                                title="Frets"
                                list={FRETS}
                                handleFilters={(filters) => this.handleFilters(filters, 'frets') }
                            />
                            <CollapseCheckBox 
                                title="Wood"
                                list={products.woods}
                                handleFilters={(filters) => this.handleFilters(filters, 'wood') }
                            />
                        </div>
                        <div className="right">
                            right
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}

export default connect(mapStateToProps)(Shop);