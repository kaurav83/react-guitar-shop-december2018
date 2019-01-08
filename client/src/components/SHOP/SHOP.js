import React, { Component } from 'react';
import PageTop from '../utils/PAGE_TOP';

import {connect} from 'react-redux';
import {getProductsToShop, getBrands, getWoods} from '../../actions/products_actions';

import CollapseCheckBox from '../utils/COLLAPSECHECKBOX';
import {FRETS, PRICE} from '../utils/FIXED_CATEGORIES';
import CollapseRadio from '../utils/COLLAPSERADIO';

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

        this.props.dispatch(getProductsToShop(
            this.state.skip,
            this.state.limit,
            this.state.filters
        ))
    }

    handlePrice = (value) => {
        const data = PRICE;
        let array = [];

        for(let key in data){
            if(data[key]._id === parseInt(value,10)){
                array = data[key].array
            }
        }
        return array;
    }

    handleFilters = (filters, category) => {
        const newFilters = {...this.state.filters}
        newFilters[category] = filters;

        if(category === "price"){
            console.log(filters)
            let priceValues = this.handlePrice(filters);
            newFilters[category] = priceValues
        }

        this.showFilteredResults(newFilters);

        this.setState({
            filters: newFilters
        })
    }

    showFilteredResults = (filters) => {
        this.props.dispatch(getProductsToShop(
            0,
            this.state.limit,
            filters
        ))
        .then(() => {
            this.setState({
                skip: 0
            })
        })
    }

    render() {
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

                            <CollapseRadio 
                                title="Price"
                                list={PRICE}
                                handleFilters={(filters) => this.handleFilters(filters, 'price') }
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