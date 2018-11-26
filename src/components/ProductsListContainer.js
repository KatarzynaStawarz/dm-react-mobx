import React from 'react';
import {observer, inject} from 'mobx-react';
import ProductsList from './ProductsList';
import SortButton from './SortButton';
import Basket from './Basket';

@inject('productsStore')
@inject('basketStore')
@observer
export default class ProductsListContainer extends React.Component {

  state = {
    sortAscByName: true,
    sortAscByPrice: true,
    sortBy: "name",
    searchFrase: ""
  }

  handleSortByPrice = () => {
    const {sortAscByPrice} = this.state;
    const {products} = this.props.productsStore;

    return products.sort((a, b) => (
      sortAscByPrice ? a.price - b.price : b.price - a.price))
  };

  handleSortByName = () => {
    const {sortAscByName} = this.state;
    const {products} = this.props.productsStore;

    return products.sort((a, b) => {
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();
        if (nameA < nameB) {
          if (sortAscByName) {
            return -1;
          } else {
            return 1;
          }
        }
        if (nameA > nameB) {
          if (sortAscByName) {
            return 1;
          } else {
            return -1;
          }
        }
        return 0;
      }
    )
  }

  handleClick = (sortBy) => {
    this.setState({sortBy})
    if (sortBy === 'price') {
      this.setState(state => ({
        sortAscByPrice: !this.state.sortAscByPrice
      }), () => this.handleSortByPrice())
    }
    if (sortBy === 'name') {
      this.setState(state => ({
        sortAscByName: !this.state.sortAscByName
      }), () => this.handleSortByName())
    }
  };

  handleFilterBySearchFrase = (productName) => {
    const name = productName.toUpperCase();
    const {searchFrase} = this.state;
    return name.includes(searchFrase.toUpperCase())
  }

  handleBuy = product => {
    const {buyProduct} = this.props.productsStore
    const {addProductToBasket} = this.props.basketStore;
    buyProduct(product.id)
    addProductToBasket(product)
  }

  handleAddProductToBasket = product => {
    const {addProductToBasket} = this.props.basketStore;
    addProductToBasket(productId)
  }

  handleRemove = productId => {
    const {removeProduct} = this.props.basketStore;
    removeProduct(productId)
  }


  render() {
    const {sortAscByPrice, sortAscByName, searchFrase, sortBy} = this.state;
    const sortedProducts = sortBy === "name" ? this.handleSortByName() : this.handleSortByPrice();
    const {soldProductsNumber} = this.props.productsStore;
    const {soldProductsPriceSum} = this.props.basketStore;

    return (
      <React.Fragment>
        <h2>Products List</h2>
        <SortButton onClick={this.handleClick} sortBy="price" asc={sortAscByPrice}/>
        <SortButton onClick={this.handleClick} sortBy="name" asc={sortAscByName}/>
        <label> Wyszukaj produkt:
          <input onChange={(e) => this.setState({searchFrase: e.target.value})}/>
        </label>
        <h3>Promotion</h3>
        <ProductsList
          products={sortedProducts.filter(product => searchFrase.length > 2 ? product.isPromoted && this.handleFilterBySearchFrase(product.name) : product.isPromoted)}
          handleBuy = {this.handleBuy}
          isPromoted/>
        <h4>Regular offer</h4>
        <ProductsList
          products={sortedProducts.filter(product => searchFrase.length > 2 ? !product.isPromoted && this.handleFilterBySearchFrase(product.name) : !product.isPromoted)}
          handleBuy = {this.handleBuy}
        />
        <br/>
        <span>No. of sold products: {soldProductsNumber}</span>
        <Basket
          products={sortedProducts.filter(p=>p.isSold)}
          onAdd={this.handleAddProductToBasket}
          onRemove={this.handleRemove}
          soldProductsPriceSum={soldProductsPriceSum}
        />
      </React.Fragment>
    )
  }
}
