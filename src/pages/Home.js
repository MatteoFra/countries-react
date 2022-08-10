import React from 'react';
import Countries from '../components/Countries';
import Navigation from '../components/Navigation';

const Home = () => {
    return (
        <div>
        <Navigation />
            <h1>acceuil</h1>
            <Countries />
        </div>
    );
};

export default Home;