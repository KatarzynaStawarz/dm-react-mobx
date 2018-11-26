import React from 'react';
import {Provider} from 'mobx-react';
import DevTools from 'mobx-react-devtools';

import ProductsList from '../components/ProductsListContainer';
import productsStore from '../stores/ProductsStore';
import basketStore from '../stores/BasketStore';

const App = () => (
  <React.Fragment>
    <Provider productsStore={productsStore} basketStore={basketStore}>
      <ProductsList/>
    </Provider>
    <DevTools/>
  </React.Fragment>
);

export default App;
