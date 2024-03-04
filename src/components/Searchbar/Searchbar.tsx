"use client";
import React, { useState, useContext } from "react";
import { SlMagnifier } from "react-icons/sl";
import styles from "./searchbar.module.css";
import Selector from "../UI/Selector";
import { ChangeEvent } from "react";
import { SearchContext, useSearchContext } from "@/context/SearchContext";

const Searchbar = () => {
  const { country, searchHandler } = useSearchContext();

  return (
    <>
      <div className={styles["searchbar__input-cont"]}>
        <SlMagnifier />
        <input
          value={country}
          onChange={searchHandler}
          placeholder="Search for a country.."
          type="text"
        />
      </div>

      <Selector />
    </>
  );
};

export default Searchbar;
