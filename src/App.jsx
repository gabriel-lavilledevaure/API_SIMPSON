import useFetch from "./hook/useFetch";
import Header from "./components/Header";
import Hero from "./components/Hero";
import EpisodeList from "./components/EpisodeList";
import CastList from "./components/CastList";

function App() {
  const {
    data: show,
    error,
    isLoading,
  } = useFetch("https://api.tvmaze.com/shows/83?embed[]=episodes&embed[]=cast");

  if (isLoading) {
    return (
      <main className="bg-blue font-body flex min-h-screen items-center justify-center">
        <p>Chargement...</p>
      </main>
    );
  }

  if (error) {
    return <main>{error.message}</main>;
  }

  if (!show?.name) {
    return <main>Impossible de charger la série.</main>;
  }

  return (
    <div className="bg-cream font-body text-dark min-h-screen">
      <Header show={show} />

      <main>
        <Hero show={show} />

        <EpisodeList episodes={show?._embedded?.episodes || []} />

        <CastList casts={show?._embedded?.cast || []} />
      </main>
    </div>
  );
}

export default App;
