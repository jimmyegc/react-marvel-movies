import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { PUBLIC_KEY, HASH, TS } from "../../const/api";
import Navbar from "../../components/Navbar";
import styles from "./Detalle.module.css";

const Detalle = () => {
  const { caracterId } = useParams();
  const [caracter, setCaracter] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://gateway.marvel.com/v1/public/characters/${caracterId}?ts=${TS}&apikey=${PUBLIC_KEY}&hash=${HASH}`
        );
        const data = await response.json();
        console.log(data.data.results[0]);
        setCaracter(data.data.results[0]);
        console.log(data.data.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <div className={styles.caracterContainer}>
        <Link to="/" className={styles.btnBack}>
          Back
        </Link>

        {caracter && (
          <div className={styles.caracterContent}>
            <div className={styles.caracterInfo}>
              <img
                src={`${caracter.thumbnail.path}.${caracter.thumbnail.extension}`}
                alt={caracter.name}
              />
              <div>
                <h2 className={styles.caracterTitle}>{caracter.name}</h2>
                <h3 className={styles.caracterSubtitle}>
                  {caracter.description}
                </h3>
              </div>
            </div>
            <div className={styles.caracterDetails}>
              <p>Comics</p>
              <div className={styles.wrapperList}>
                <ul>
                  {caracter.comics.items.map((comic) => (
                    <li>{comic.name}</li>
                  ))}
                </ul>
              </div>
              <p>Series</p>
              <div className={styles.wrapperList}>
                <ul>
                  {caracter.series.items.map((comic) => (
                    <li>{comic.name}</li>
                  ))}
                </ul>
              </div>
              <p>Stories</p>
              <div className={styles.wrapperList}>
                <ul>
                  {caracter.stories.items.map((comic) => (
                    <li>{comic.name}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Detalle;
