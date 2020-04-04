<template>
  <div>
    <nav class="navbar navbar-expand-md navbar-dark bg-success px-4 py-2">
    <router-link class="navbar-brand" to="/">Ministerio del Poder Popular para el Ecosocialismo</router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link class="nav-link" to="/servicios">Servicios</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/nosotros">Nosotros</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/contacto">Contacto</router-link>
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