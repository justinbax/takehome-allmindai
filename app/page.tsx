"use client";

import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ScrollingLogos from "@/components/ScrollingLogos";

export default function Home() {
  const logos = [
    "assets/logos/airtable-square.png",
    "assets/logos/bigquery-square.png",
    "assets/logos/clickhouse-square.png",
    "assets/logos/csv-square.png",
    "assets/logos/duckdb-square.png",
    "assets/logos/dynmodb-square.png",
    "assets/logos/excel-square.png",
    "assets/logos/linkedin-square.png",
    "assets/logos/mongodb-square.png",
    "assets/logos/motherduck-square.png",
    "assets/logos/mysql-square.png",
    "assets/logos/peliqan-square.png",
    "assets/logos/postgres-square.png",
    "assets/logos/salesforce-square.png",
    "assets/logos/sheets-square.png",
    "assets/logos/snowflake-square.png",
    "assets/logos/supabase-square.png"
  ];

  const logosShuffled = logos.slice(9, 17).concat(logos.slice(0, 9));

  return (
    <div>
      <header className="p-[10px] sticky top-0 z-50">
        <Navbar />
      </header>
      <main>
        <Hero />
        Hello, world! this is after
        <ScrollingLogos logos={logos} direction="left" />
        <ScrollingLogos logos={logosShuffled} direction="right" />
      </main>
      <footer>
      </footer>
    </div>
  );
}
