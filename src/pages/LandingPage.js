import React from 'react';
import { Link } from 'react-router-dom';
import mainImage from '../assets/main2.png';
import Container from '../assets/containers/LandingContainer';
import { MainLogo } from '../components';
function LandingPage() {
  return (
    <Container>
      <nav>
        <MainLogo />
      </nav>
      <div className='container page'>
        <div className='info'>
          <h1>
            Task <span>Planner</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit error debitis iusto tempora veritatis officia
            recusandae, nisi esse alias pariatur non consequuntur itaque assumenda repudiandae eaque, quia obcaecati?
            Odit, omnis!
          </p>
          <Link to='/register' className='btn btn-hero'>
            Login/Register
          </Link>
        </div>
        <img src={mainImage} alt='hero img' className='main_img' />
      </div>
    </Container>
  );
}

export default LandingPage;
