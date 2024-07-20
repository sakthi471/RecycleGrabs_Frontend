import React, { useEffect } from 'react'
import useAuth from '../hooks/useAuth'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Nav from '../components/Nav';
import Hero from '../components/Hero';
import { InfoCards } from '../components/InfoCards';
import Footer from '../components/Footer';
import ItemCard from '../components/ItemCard';
import ItemsSales from '../components/ItemsSales';


const Home = () => {

  const navigate = useNavigate()
  const { isAuthenticated, user } = useAuth();
  console.log(isAuthenticated, user);

  const logout = async () => {
    console.log('Logout');
    try {
      const res = await axios.get('http://localhost:5000/logout', { withCredentials: true });
      console.log(res.data);
      navigate('/login');
    } catch (error) {
    }
  }

  // useEffect( () => {  
  //   if(!isAuthenticated) {
  //     navigate('/login');
  //   }

  // }, [isAuthenticated, navigate]);

  return (
    <div className='w-full  bg-white min-h-screen bg-gradient-to-r flex flex-col items-center '>
      <div className='w-full text-white min-h-screen bg-gradient-to-r from-emerald-500 to-lime-600 flex flex-col items-center'>
        <Hero />
      </div>
      <InfoCards />
      <ItemsSales />
     
    </div>
  )
}

export default Home