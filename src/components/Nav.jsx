import React from 'react'
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import axios from "axios";



const Links = [
    { to: '/', title: 'Home' },
    { to: '/register', title: 'Register' },
    { to: '/login', title: 'Login' },
    { to: '/buy', title: 'Buy' },

]
const Nav = () => {

    const { isAuthenticated, user, setIsAuthenticated,} = useAuth();

    const logout = async () => {
        console.log('Logout');
        try {
          const res = await axios.get('http://localhost:5000/logout', { withCredentials: true });
          console.log(res.data);
        //   navigate('/login');
        setIsAuthenticated(false);
        
         
        } catch (error) {
    console.log(error.message);
        }
      }
    return (
        <nav className=' flex w-full px-32 text-white bg-gradient-to-r from-emerald-500 to-lime-600 py-3 justify-between items-center'>

            <p className='  font-bold text-2xl'>Logo</p>
            <div className=' flex  items-center gap-6'>
                {
                    Links.map((link) => (
                        <li  key={link.to} className=' font-semibold list-none'><Link to={link.to}>{link.title}</Link></li>
                    ))

                }
                {
                    user && <p className=' font-semibold'>{user.username}</p>
                }
                { isAuthenticated && <button onClick={logout} className=' bg-white py-1 px-4 rounded-md  text-slate-800 font-semibold'>Logout</button>
                }

            </div>

        </nav>
    )
}

export default Nav