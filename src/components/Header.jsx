function Header({ show }) {
  return (
    <header className="border-dark bg-blue w-full border-b">
      <nav className="container mx-auto flex flex-col items-center justify-between gap-4 px-6 py-6 md:flex-row md:px-12">
        <a href="#accueil" className="flex flex-col">
          <span className="font-title text-2xl leading-none font-bold md:text-3xl">
            {show?.name}
          </span>
        </a>

        <ul className="flex items-center gap-6 text-sm font-bold md:gap-10 md:text-base">
          <li>
            <a href="#accueil" className="underline underline-offset-4">
              Accueil
            </a>
          </li>

          <li>
            <a href="#episodes" className="hover:underline">
              Épisodes
            </a>
          </li>

          <li>
            <a href="#personnages" className="hover:underline">
              Personnages
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
