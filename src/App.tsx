import { Navbar, Shell } from './layouts';
import './App.module.scss';

function App() {
	return (
		<div className='App'>
			<Navbar />
			<Shell>
				<h1>React Base</h1>
			</Shell>
		</div>
	);
}

export default App;
