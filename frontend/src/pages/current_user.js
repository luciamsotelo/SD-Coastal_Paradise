import React from 'react';
import Login from '../components/beachcombing_form'; 
import Navigation from '../components/navigation';
import Footer from '../components/footer';
const LoginPage = () => {
  return (
    <div>
      <Navigation/>
      <Login />
      <Footer />
    </div>
  )
}

export default LoginPage;
