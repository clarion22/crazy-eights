import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'normalize.css';
import App from './App';
import configureStore from './store/store';
import { Provider } from 'react-redux';

const store = configureStore();

if (process.env.NODE_ENV !== 'production') {
	window.store = store;
	// window.sessionActions = sessionActions;
}

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);
