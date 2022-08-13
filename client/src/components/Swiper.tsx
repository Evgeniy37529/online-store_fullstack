import Carousel from 'react-bootstrap/Carousel';

export const Swiper = () => {
  return (
    <Carousel style={{ height: '300px' }}>
      <Carousel.Item className="d-block" style={{ height: '100%' }}>
        <img
          className="d-block w-100"
          style={{ height: '100%' }}
          src={require('../assets/img/imgonline-com-ua-Resize-JJpv4q4nEJB.jpg')}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item style={{ height: '100%' }}>
        <img
          style={{ height: '100%' }}
          className="d-block w-100"
          src={require('../assets/img/imgonline-com-ua-Resize-JJpv4q4nEJB.jpg')}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item style={{ height: '100%' }}>
        <img
          style={{ height: '100%' }}
          className="d-block w-100"
          src={require('../assets/img/imgonline-com-ua-Resize-JJpv4q4nEJB.jpg')}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};
