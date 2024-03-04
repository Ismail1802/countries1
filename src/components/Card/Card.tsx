import React from "react";
import Image from "next/image";
import styles from "./card.module.css";
const Card = ({ country }: { country: any }) => {
  const population = country.population.toLocaleString("en-US");

  return (
    <article className={styles.card}>
      <div className={styles["card__image-cont"]}>
        <Image
          priority
          alt="country-image"
          src={country.flags.png}
          width={288}
          height={144}
        />
      </div>

      <div className={styles["card__info"]}>
        <h1 className={styles["card__main-text"]}>{country.name}</h1>
        <p>
          <span>Population:</span> {population}
        </p>
        <p>
          <span>Region:</span> {country.region}
        </p>
        <p>
          <span>Capital:</span> {country.capital}
        </p>
      </div>
    </article>
  );
};

export default Card;
