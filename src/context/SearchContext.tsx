"use client";
import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
  ChangeEvent,
} from "react";

const INITIAL_STATE = {
  country: "",
  setCountry: () => {},
  searchHandler: () => {},
};

type ContextType = {
  country: string;
  setCountry: Dispatch<SetStateAction<string>>;
  searchHandler: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const SearchContext = createContext<ContextType>(INITIAL_STATE);

export function SearchProvider({ children }: { children: React.ReactNode }) {
  const [country, setCountry] = useState("");

  function searchHandler(e: ChangeEvent<HTMLInputElement>) {
    setCountry(e.target.value);
  }

  const value = { country, setCountry, searchHandler };

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
}

export const useSearchContext = () => useContext(SearchContext);
