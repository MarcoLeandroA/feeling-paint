export function Header() {
  return (
    <nav class="nav navbar navbar-expand-lg navbar-dark bg-dark p-3">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Feeling Paint</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link list" aria-current="page" href="#desings">Diseños</a>
            </li>
            <li class="nav-item">
              <a class="nav-link list" href="#skills">Habilidades</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#">Reseñas</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  );
}
