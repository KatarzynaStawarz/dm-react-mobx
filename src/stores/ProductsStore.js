import {action, computed, observable, runInAction} from "mobx";

class ProductsStore {
  @observable products = [
    {id: 'coffee', name: 'Coffee', tags: ['drinks'], price: 7, sold: 0, isPromoted: false, isSold: false},
    {id: 'tea', name: 'Tea', tags: ['drinks'], price: 5, sold: 0, isPromoted: false, isSold: false},
    {id: 'cake', name: 'Cake', tags: [], price: 12, sold: 0, isPromoted: true, isSold: false},
    {id: 'beer', name: 'Beer', tags: ['drinks'], price: 8, sold: 0, isPromoted: false, isSold: false},
    {id: 'wine', name: 'Wine', tags: ['drinks'], price: 14, sold: 0, isPromoted: false, isSold: false},
    {id: 'chocalateCake', name: 'Chocalote Cake', tags: [], price: 18, sold: 0, isPromoted: true, isSold: false}
  ]

  @action buyProduct = productId => {
    console.log(productId)
    const productToBeSold = this.products.find(product => product.id === productId);
    productToBeSold.isSold = true;
    productToBeSold.sold = productToBeSold.sold + 1;
  }

  fetchData() {
    return new Promise(() => 1);
  }

  @action
  async getData() {
    try {
      const response = await this.fetchData();
      runInAction(() => {
        this.buyProduct(response);
      });
    } catch (error) {
      alert(error)
    }
  }

  @computed get soldProductsNumber() {
    return this.products.filter(p => p.isSold).length
  }
}


export default new ProductsStore();
