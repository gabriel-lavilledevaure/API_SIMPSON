function Hero({ show }) {
  return (
    <section id="accueil">
      <h1>{show.name}</h1>

      <p>★ {show.rating?.average} sur 10</p>

      <p>
        Depuis {show.premiered?.slice(0, 4)} · {show.status}
      </p>

      <a href="#episodes">Découvrir les épisodes ↓</a>

      <ul>
        {show.genres?.map((genre) => (
          <li key={genre}>{genre}</li>
        ))}
      </ul>

      <div
        dangerouslySetInnerHTML={{
          __html: show.summary || "",
        }}
      />
    </section>
  );
}

export default Hero;
