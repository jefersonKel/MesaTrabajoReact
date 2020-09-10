import React from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import '../assets/styles/App.scss';
import useInitialState from '../hooks/useInitialState';

const API = 'http://localhost:3000/initialState';

const App2 = () => {
  const videos = useInitialState(API);
  console.log(videos);
  return videos.length === 0 ? <h1>Cargardo...</h1> : (
    <div className='App'>
      <Header />
      <Search />
      {videos.mylist.length > 0 && (
        <Categories tittle='Mi lista'>
          <Carousel>
            {videos.mylist.map((item) => <CarouselItem key={item.id} {...item} />)}
          </Carousel>
        </Categories>
      )}

      <Categories tittle='Tendencias'>
        <Carousel>
          {videos.trends.map((item) => <CarouselItem key={item.id} {...item} />)}
        </Carousel>
      </Categories>

      <Categories tittle='Originales'>
        <Carousel>
          {videos.originals.map((item) => <CarouselItem key={item.id} {...item} />)}
        </Carousel>
      </Categories>
    </div>
  );
};

export default App2;
