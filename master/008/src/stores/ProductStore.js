import { action, observable } from 'mobx'

class ProductStore {
  @observable products = [
    { id: 0, name: 'Apple', isSold: false },
    { id: 1, name: 'Coffee', isSold: false },
  ]

  @action buyProduct = id => {
    const productToBeSold = this.products.find(p => p.id === id)
    productToBeSold.isSold = true
  }
}

export default new ProductStore()
