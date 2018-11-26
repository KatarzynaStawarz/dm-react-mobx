import {action, computed, observable} from "mobx";

class BasketStore {
  @observable products = []

  @action addProductToBasket = buyedProduct => {
    const productToBeSold = this.products.find(product => product.id === buyedProduct.id);
    if (productToBeSold) {
      productToBeSold.sold = productToBeSold.sold + 1;
    } else {
      buyedProduct.sold = buyedProduct.sold + 1;
      this.products.push({...buyedProduct})
    }
  }

  @action removeProduct = productId => {
    const productToBeSold = this.products.find(product => product.id === productId);
    productToBeSold.sold = productToBeSold.sold + 1;
    if (productToBeSold.sold===0) {
      this.products = products.filter(p=> p.sold>0);
    }
  }

  @computed get soldProductsPriceSum() {
    if(this.products.length>0){
      return this.products.reduce((a,b) => (a.price*a.sold) + b.price*b.sold)
    }
    return 0;
  }
}


export default new BasketStore();
