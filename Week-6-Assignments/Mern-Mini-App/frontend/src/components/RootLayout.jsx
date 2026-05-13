import Header from './Header'
import {Outlet} from 'react-router'

function RootLayout() {
  return (
    <div>
        <Header/>
        {/* placeholder */}
        <div className='min-h-screen bg-gray-100'>
        <Outlet/>
        </div>
    </div>
  )
}
export default RootLayout