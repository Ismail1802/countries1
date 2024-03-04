import Searchbar from "@/components/Searchbar/Searchbar";
import styles from "./page.module.css";
import CountriesGrid from "../components/Countries/CountriesGrid";
import { getCountries } from "@/server/actions";
import { Suspense } from "react";

async function Countries() {
  const data = await getCountries();

  return <CountriesGrid data={data} />;
}

export default function Home() {
  return (
    <>
      <main>
        <div className={styles.header}>
          <Searchbar />
        </div>
        <Suspense fallback={<p>Fetching countries...</p>}>
          <Countries />
        </Suspense>
      </main>
    </>
  );
}
