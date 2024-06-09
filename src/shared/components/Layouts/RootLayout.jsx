import React from 'react'
import Footer from '../Partials/Footer'
import Header from '../Partials/Header'
import Sidebar from '../Partials/Sidebar'

const RootLayout = ({ children }) => {
	return (
		<div>
			<Header />
			<Sidebar />
			<div>
				<div>
					{children}
				</div>
			</div>
			<Footer />
		</div>
  )
}

export default RootLayout
