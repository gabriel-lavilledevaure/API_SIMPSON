function EpisodeList({ episodes }) {
  return (
    <section id="episodes">
      <h2>Les épisodes</h2>

      <ul>
        {episodes.map((episode) => (
          <li key={episode.id}>
            <article>
              {episode.image && (
                <img src={episode.image.medium} alt={episode.name} />
              )}

              <p>
                S{episode.season.toString().padStart(2, "0")}E
                {episode.number?.toString().padStart(2, "0")}
              </p>

              <p>{episode.airdate}</p>

              <h3>{episode.name}</h3>

              <div
                dangerouslySetInnerHTML={{
                  __html: episode.summary,
                }}
              />
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default EpisodeList;
