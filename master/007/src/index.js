import React from 'react'
import ReactDom from 'react-dom'
import Root from './containers/Root'
//3/ We have to set strict mode like this
import { configure } from 'mobx';

// don't allow state modifications outside actions
configure({ enforceActions: 'always' });

ReactDom.render(<Root />, document.getElementById('root'))
