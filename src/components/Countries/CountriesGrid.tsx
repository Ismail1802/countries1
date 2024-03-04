"use client";
import React from "react";
import Card from "../Card/Card";
import styles from "./countriesGrid.module.css";
import { useSearchContext } from "@/context/SearchContext";
import { CountriesType } from "@/lib/types";

interface CountriesGridProps {
  data: CountriesType[];
}

const CountriesGrid = ({ data }: CountriesGridProps) => {
  const { country } = useSearchContext();

  const foundCountry = country
    ? data.filter((searchCountry: any) => {
        return searchCountry.name.includes(country);
      })
    : data;

  return (
    <section className={styles.grid}>
      {foundCountry.map((country: any) => {
        return <Card country={country} key={country.id} />;
      })}
    </section>
  );
};

export default CountriesGrid;
