import React from 'react';
import Login from '../components/beachcombing_form'; 
import Navigation from '../components/navigation';
import Footer from '../components/footer';
import Header from '../components/header';
const LoginPage = () => {
  return (
    <div>
      <Navigation/>
      <Header />
      <Login />
      <Footer />
    </div>
  )
}

export default LoginPage;
