import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { PUBLIC_KEY, HASH, TS } from "../../const/api";
import CaracterItem from "./components/CaracterItem";
import styles from "./Caracters.module.css";

const Caracters = ({ caracters }) => {
  //  setPersonajes(caractersJson.data.results);
  /*useEffect(() => {
    
  }, []); */

  return (
    <div className={styles.container}>
      <div className={styles.caracters}>
        {caracters.map((caracter) => {
          return <CaracterItem key={caracter.id} caracter={caracter} />;
        })}
      </div>
    </div>
  );
};

export default Caracters;
