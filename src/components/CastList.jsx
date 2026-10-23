function CastList({ casts }) {
  return (
    <section id="personnages">
      <h2>Les habitants de Springfield</h2>

      <p>Les voix originales, d'après TVmaze.</p>

      <ul>
        {casts
          .filter((cast) => cast.character.image?.medium)
          .map((cast) => (
            <li key={`${cast.person.id}-${cast.character.id}`}>
              <article>
                <img
                  src={cast.character.image.medium}
                  alt={cast.character.name}
                />

                <h3>{cast.character.name}</h3>

                <p>Voix originale</p>
                <p>{cast.person.name}</p>
              </article>
            </li>
          ))}
      </ul>
    </section>
  );
}

export default CastList;
