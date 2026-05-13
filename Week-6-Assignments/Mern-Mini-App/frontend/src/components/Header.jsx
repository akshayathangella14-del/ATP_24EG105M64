import {NavLink} from 'react-router'

function Header()
{
  return ( 
      <nav className='py-3'>
       <ul className='flex justify-end gap-5 text-white bg-purple-800 p-5 '>
        <li>
          <NavLink to="/" className={({isActive})=>isActive?"p-2 rounded-2xl bg-white text-purple-800":""}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/create-emp" className={({isActive})=>isActive?"p-2 rounded-2xl bg-white text-purple-800":""}>CreateEmp</NavLink>
        </li>
        <li>
          <NavLink to="/list" className={({isActive})=>isActive?"p-2 rounded-2xl bg-white text-purple-800":""}>List of Employees</NavLink>
        </li>
       </ul>
      </nav>
  )
}

export default Header             