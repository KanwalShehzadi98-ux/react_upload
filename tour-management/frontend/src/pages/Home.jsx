import React from 'react';
import '../styles/home.css';
import {Container,Row,Col} from 'reactstrap';
import Subtitle from './../shared/Subtitle';
import heroImg from '../assets/images/hero-img01.jpg';
import heroImg02 from '../assets/images/hero-img02.jpg';
import heroVideo from '../assets/images/hero-video.mp4';
import worldImg from '../assets/images/world.png';
import SearchBar from '../shared/SearchBar';
import ServiceList from '../services/ServiceList';
import FeaturedToursList from '../components/FeaturedTours/FeaturedToursList';
import experienceImg from '../assets/images/experience.png';
import MasonryImagesGallery from '../components/image-gallery/MasonryImagesGallery';
import Testimonials from '../components/Testimonial/Testimonials';
import Newletter from '../shared/Newletter';

const Home = () => {
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg='6'>
                <div className="hero__content">
                  <div className="hero__subtitle d-flex align-items-center">
                    <Subtitle subtitle={"Know Before You Go"}/>
                    <img src={worldImg} alt="" />
                  </div>
                  <h1>Travelling Opens The Door To Creating <span className='highlight'>Memories</span></h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores exercitationem voluptatibus facere sequi nesciunt non error esse quidem obcaecati hic totam earum ipsum accusantium blanditiis et rem ipsa eveniet iure eos odio, magni incidunt </p>
                </div>
            </Col>
            <Col lg='2'>
              <div className="hero__img-box">
                <img src={heroImg} alt="" />
              </div>
            </Col>
            <Col lg='2'>
              <div className="hero__img-box mt-4">
                <video src={heroVideo} alt="" controls/>
              </div>
            </Col>
            <Col lg='2'>
              <div className="hero__img-box mt-5">
                <img src={heroImg02} alt="" />
              </div>
            </Col>
            <SearchBar/>
          </Row>
        </Container>
      </section>
      {/* ---------------------------------------Hero Section------------------------------------------------------ */}
      <section>
        <Container>
          <Row>
            <Col lg='3'>
              <h5 className="services__subtitle">What We Serve</h5>
              <h2 className="services__title">We Offer Our Best Services</h2>
            </Col>
            <ServiceList/>
          </Row>
        </Container>
      </section>

      {/* ----------------------Featured Tour Section Start-------------------------- */}
        <section>
          <Container>
            <Row>
              <Col lg='12' className='mb-5'>
                <Subtitle subtitle={'Explore'}/>
                <h2 className="featured__tour-title">Our Featured Tours</h2>
              </Col>
              <FeaturedToursList/>
            </Row>
          </Container>
        </section>
      {/* ----------------------Featured Tour Section End-------------------------- */}
      {/* ------------experience section start */}
      <section>
        <Container>
          <Row>
            <Col lg='6'>
              <div className="experience__content">
                <Subtitle subtitle={'Experience'}/>
                <h2>With Our All Experience <br />We Will Serve You</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing. <br />Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
              </div>
              
              <div className="counter__wrapper d-flex align-items-center gap-5">
                <div className="counter__box">
                  <span>12k+</span>
                  <h6>Successful Trip</h6>
                </div>
                <div className="counter__box">
                  <span>2k+</span>
                  <h6>Regular Clients</h6>
                </div>
                <div className="counter__box">
                  <span>15</span>
                  <h6>Years Experience</h6>
                </div>
                </div>
            </Col>
            <Col lg='6'>
              <div className="experience__img">
                <img src={experienceImg} alt="" />
              </div>

            </Col>
          </Row>
        </Container>
      </section>
      {/* ------------experience section end-------------*/}
      {/* ------------gallery section start--------------*/}
      <section>
        <Container>
          <Row>
            <Col lg='12'>
              <Subtitle subtitle={'Gallery'}/>
              <h2 className="gallery__title">Visit Our Customer Tour Gallery</h2>
            </Col>
            <Col lg='12'>
              <MasonryImagesGallery/>
            </Col>
          </Row>
        </Container>
      </section>
      {/* ------------gallery section end--------------*/}
      {/* -----------testimonial section start---------- */}
      <section>
        <Container>
          <Row>
            <Col lg='12'>
              <Subtitle subtitle={'Fans Love'}/>
              <h2 className="testimonial__title">
                What Our Fans Say About Us
              </h2>
            </Col>
            <Col lg='12'>
              <Testimonials/>
            </Col>
          </Row>
        </Container>
      </section>
      {/* -----------testimonial section end------------ */}
      <Newletter/>
    </>
  )
}

export default Home;
