import React from 'react'
import SearchForm from "../Components/SearchForm";
import Articles from "../Components/Articles";
import Buttons from '../Components/Buttons'

const Home = () => {
  return (
    <main className="mainThing">
      <SearchForm />
      <Buttons />
      <Articles />
    </main>
  );
};

export default Home;
