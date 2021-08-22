import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Slider from './components/Slider/Slider';
import Details from './components/Details/Details';
import Featured from './components/Featured/Featured';
import { useEffect } from 'react';

function App() {
    
    useEffect(() => {
        console.log(`There are some svg icons used in the original website that I couldnt get.
        In place of that, I used Fontawesome icons, so some icons are different than the original website.`)
    }, [])

    return (
        <div className="App">
            <Header />
            <Hero />
            <Slider />
            <Details />
            <Featured />
        </div>
    );
}

export default App;
