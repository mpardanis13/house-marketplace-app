import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Signin from './pages/SignIn'
import Signup from './pages/SignUp'
import ForgotPassword from './pages/ForgotPassword'
import Explore from './pages/Explore'
import Offers from './pages/Offers'
import Profile from './pages/Profile'

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route path='/' element={<Explore />} />
					<Route path='/offers' element={<Offers />} />
					<Route path='/profile' element={<Profile />} />
					<Route path='/sign-in' element={<Signin />} />
					<Route path='/sign-up' element={<Signup />} />
					<Route path='/forgot-password' element={<ForgotPassword />} />
				</Routes>
				<Navbar />
			</Router>
		</>
	)
}

export default App
