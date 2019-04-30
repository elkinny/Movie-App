import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from 'features/App';

render(<App Router={Router} />, document.getElementById('root'));
