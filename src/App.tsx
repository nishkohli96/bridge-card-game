import { useEffect } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from 'redux-store';
import HomePage from 'pages/HomePage';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
	useEffect(() => {
		AOS.init({
			duration: 300,
		});
	}, []);
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
