<template>
  <div>
    <nav class="navbar navbar-expand-md navbar-dark bg-success px-4 py-2">
    <router-link class="navbar-brand text-center" to="/">
      Ministerio del Poder <br class="d-lg-none" />Popular para el Ecosocialismo
    </router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <a class="nav-link" href="/#servicios">SERVICIOS</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/#nosotros">NOSOTROS</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/#contacto">CONTACTO</a>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/noticias">NOTICIAS</router-link>
        </li>
      </ul>
    </div>
  </nav>
  </div>
</template>
<script>
  export default {
    name: 'Menu',
  }
</script>