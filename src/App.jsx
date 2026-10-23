import useFetch from "./hook/useFetch";
import Header from "./components/Header";
import Hero from "./components/Hero";
import EpisodeList from "./components/EpisodeList";
import CastList from "./components/CastList";

function App() {
  const { data: show, isLoading } = useFetch(
    "https://api.tvmaze.com/shows/83?embed[]=episodes&embed[]=cast",
  );

  if (isLoading) {
    return <main>Chargement...</main>;
  }

  return (
    <>
      <Header />

      <main>
        <Hero show={show} />

        <EpisodeList episodes={show?._embedded?.episodes || []} />

        <CastList casts={show?._embedded?.cast || []} />
      </main>
    </>
  );
}

export default App;
