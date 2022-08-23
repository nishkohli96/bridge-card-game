import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from 'redux-store';
import HomePage from 'pages/HomePage';

function App() {
	return (
		<Provider store={store}>
			<PersistGate loading={''} persistor={persistor}>
				<div className="root">
					<HomePage />
				</div>
			</PersistGate>
		</Provider>
	);
}

export default App;
