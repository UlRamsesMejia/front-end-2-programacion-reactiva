<template>
  <div class="container">
    <h2 class="text-center" style="margin-top: 4rem;">Noticias</h2>
    <div class="row">
      <div v-for="(noticia, i) in noticias" v-bind:key="i" class="col-12 col-sm-2 col-md-4"
        data-toggle="modal" data-target="#detallesNoticia" @click="detallesNoticia = noticia">
        <img v-bind:src="`${noticia.img}`" class="img-fluid">
        <p class="text-center">{{ noticia.descripcionBreve }}</p>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Noticias',
    data() {
      return {
        detallesNoticia: {},
        noticias: [
          {
            img: '/img/noticias/noticia-1.png',
            descripcionBreve: 'Confirmados 153 casos de Covid-19 y siete fallecidos en el país',
          },
          {
            img: '/img/noticias/noticia-2.jpg',
            descripcionBreve: 'Organización Mundial de la Salud reconoce medidas de prevención y contención adoptadas en Venezuela contra el Covid-19',
          },
          {
            img: '/img/noticias/noticia-3.jpg',
            descripcionBreve: 'Desplegarán piezas de artillería en defensa de la soberanía de Venezuela',
          },
          {
            img: '/img/noticias/noticia-4.jpg',
            descripcionBreve: 'Gobierno del Distrito Capital reforzará al Comando Unificado contra Incendios Forestales',
          },
          {
            img: '/img/noticias/noticia-5.png',
            descripcionBreve: 'Gobierno Nacional activa Plan Especial de Suministro de Combustible a sectores con prioridad',
          },
          {
            img: '/img/noticias/noticia-6.jpg',
            descripcionBreve: 'Ejecutivo celebra los dos años de la creación del Complejo Universitario Martín Luther King en Lara',
          }
        ],
      };
    },
  }
</script>