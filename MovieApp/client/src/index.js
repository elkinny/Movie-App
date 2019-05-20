import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from 'features/App';
//import store from 'core/store';
import configureStore from 'core/store';

const store = configureStore(window.PRELOADED_STATE);

render(<App Router={Router} store={store} />, document.getElementById('root'));
