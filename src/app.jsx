import { PageWrapper } from "./components/PageWrapper";
import { Container } from "./components/Container";
import { Header } from "./components/Header";
import { Search } from "./components/Search.jsx";
import { Shortlist } from "./components/Shortlist.jsx";
import { PuppiesList } from "./components/PuppiesList.jsx";
import { NewPuppyForm } from "./components/NewPuppyForm.jsx";

export function App() {
  return (
    <PageWrapper>
      <Container>
        <Header />
        <main>
          {/* more to come */}
          <Main />
        </main>
      </Container>
    </PageWrapper>
  );
}

function Main() {
  return (
    <>
      <div className="mt-24 grid gap-8 sm:grid-cols-2">
        <Search />
        <Shortlist />
      </div>
      <PuppiesList />
      <NewPuppyForm />
    </>
  )
}
