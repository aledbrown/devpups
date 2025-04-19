import { PageWrapper } from "./components/PageWrapper";
import { Container } from "./components/Container";
import { Header } from "./components/Header";
import { Search } from "./components/Search";
import { Shortlist } from "./components/Shortlist";
import { PuppiesList } from "./components/PuppiesList";
import { NewPuppyForm } from "./components/NewPuppyForm";

import { puppies as puppiesData } from "./data/puppies";
import { useEffect, useState } from "react";
import { Puppy } from "./types";

export function App() {
  return (
    <PageWrapper>
      <Container>
        <Header />
        <main>
          <Main />
        </main>
      </Container>
    </PageWrapper>
  );
}

function Main() {
  const [liked, setLiked] = useState<Puppy["id"][]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [puppies, setPuppies] = useState<Puppy[]>(puppiesData);

  return (
    <main>
      {/*
      <pre>
        {JSON.stringify({liked, searchQuery}, null, 2)}
      </pre>
*/}
      <ApiPuppies />
      <div className="mt-24 grid gap-8 sm:grid-cols-2">
        <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <Shortlist puppies={puppies} liked={liked} setLiked={setLiked} />
      </div>
      <PuppiesList
        searchQuery={searchQuery}
        puppies={puppies}
        liked={liked}
        setLiked={setLiked}
      />
      <NewPuppyForm setPuppies={setPuppies} puppies={puppies} />
    </main>
  );
}

function ApiPuppies() {
  const [apiPuppies, setApiPuppies] = useState<[]>([]);
  useEffect(
    () => {
      //Fetch puppies from an API
      async function getPuppies() {
        try {
          const response = await fetch("http://devpups-api.test/api/puppies");
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          const data = await response.json();
          console.log(data);
          setApiPuppies(data)
        } catch (error) {
          console.log(error);
        }
      }
      getPuppies();
    },
    [
      // re-run the effect
    ]
  )
  return (
    <div className="bg-white mt-12 p-6 shadow ring ring-black/5">
      <pre>
        {JSON.stringify(apiPuppies, null, 2)}
      </pre>
    </div>
  );
}
