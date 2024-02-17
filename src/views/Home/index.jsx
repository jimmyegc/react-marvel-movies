import { useState, useEffect } from "react";
import { PUBLIC_KEY, HASH, TS } from "../../const/api";
import Caracters from "../../components/Caracters";
import Navbar from "../../components/Navbar";
//import caractersJSON from "../../data/caracters.json";

const Home = () => {
  const [caracters, setCaracters] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://gateway.marvel.com/v1/public/characters?ts=${TS}&apikey=${PUBLIC_KEY}&hash=${HASH}`
        );
        const data = await response.json();
        console.log("results", data.data.results);
        setCaracters(data.data.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <Caracters caracters={caracters} />
    </>
  );
};

export default Home;
