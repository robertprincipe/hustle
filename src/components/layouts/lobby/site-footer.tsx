export const SiteFooter = () => {
  return (
    <footer className="bg-teal-500 py-4">
      <div className="max-w-7xl mx-auto px-4 md:px-8 2xl:p-0">
        <div className="flex flex-col md:flex-row gap-3 md:justify-between items-center">
          <h2 className="text-6xl title font-bold">Hustle</h2>
          <div className="flex items-center gap-2 bg-teal-400 px-3 py-2 rounded-2xl">
            <p>
              Comienza a cobrar por tus productos o servicios de forma facil en
              Perú.
            </p>
            <a
              className="px-4 py-3 gap-1 flex items-center rounded-2xl bg-white font-bold w-fit whitespace-nowrap"
              href="/"
            >
              Empezar ahora
            </a>
          </div>
        </div>
        <div className="grid md:grid-cols-3 grid-cols-2 lg:grid-cols-4 gap-4 text-lg my-6">
          <div>
            <h4 className="font-bold text-xl leading-loose">Footer item</h4>
            <ul className="space-y-2">
              <li>Precios</li>
              <li>Recursos</li>
              <li>Conocenos</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-xl leading-loose">Footer item</h4>
            <ul className="space-y-2">
              <li>Precios</li>
              <li>Recursos</li>
              <li>Conocenos</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-xl leading-loose">Footer item</h4>
            <ul className="space-y-2">
              <li>Precios</li>
              <li>Recursos</li>
              <li>Conocenos</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-xl leading-loose">Footer item</h4>
            <ul className="space-y-2">
              <li>Precios</li>
              <li>Recursos</li>
              <li>Conocenos</li>
            </ul>
          </div>
        </div>
        <div className="flex text-lg gap-3">
          <p>&copy; {new Date().getFullYear()} Hustle</p>
          <div className="flex space-x-2">
            <a href="/">Terminos y condiciones</a>
            <a href="/">Privacidad</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
