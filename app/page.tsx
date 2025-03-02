"use client";

import Hero from "@/components/Hero";
import Info from "@/components/Info";
import Navbar from "@/components/Navbar";
import PrimaryButton from "@/components/PrimaryButton";
import ScrollingLogos from "@/components/ScrollingLogos";
import SecondaryButton from "@/components/SecondaryButton";

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

  return (
    <div>
      <header className="p-[10px] sticky top-0 z-50">
        <Navbar />
      </header>
      <main>
        <Hero />
        <div className="my-20 w-full">
          <ScrollingLogos logos={logos} direction="left" />
        </div>
        <Info />
        <div className="bg-gradient-to-b from-[--background] to-black min-h-30">
        </div>
        <div className="bg-black flex flex-col w-full justify-between overflow-hidden">
          <div className="mx-24 mb-24 flex flex-col gap-8 justify-between">
            <h2 className="text-2xl font-sans font-semibold">Get started for <span className="inline-block text-transparent bg-clip-text bg-[linear-gradient(135deg,#6e7f42,#c37842,#f04e42)]">
                free.
              </span>
            </h2>
            <div className="flex flex-row gap-5 items-center w-full">
              <PrimaryButton link="/" text="Try Free" />
              <SecondaryButton link="/" text="Contact us" />
            </div>
          </div>
        </div>
      </main>
      <footer>
      </footer>
    </div>
  );
}
