<template>
  <div>
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="../assets/img/banner-1.jpg" class="d-block w-100">
        </div>
        <div class="carousel-item">
          <img src="../assets/img/banner-2.jpg" class="d-block w-100">
        </div>
        <div class="carousel-item">
          <img src="../assets/img/banner-3.jpg" class="d-block w-100">
        </div>
        <div class="carousel-item">
          <img src="../assets/img/banner-4.jpg" class="d-block w-100">
        </div>
        <div class="carousel-item">
          <img src="../assets/img/banner-5.jpg" class="d-block w-100">
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
    <div id="servicios" class="container mt-3">
      <h2 class="text-center mb-3">Servicios</h2>
      <div class="row justify-content-center">
        <div v-for="servicio in servicios" v-bind:key="servicio.id" class="col-12 col-md-6 col-lg-4">
          <div class="text-center">
            <h3>{{ servicio.titulo }}</h3>
            <p>{{ servicio.parrafo }}</p>
          </div>
        </div>
      </div>
    </div>
    <div id="nosotros">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h3 class="text-center">Nuestra Historia</h3>
            <p>
              Con la promulgación del Decreto Nº 1.701 de fecha 7 de abril de 2015,4​ a través del cual se creó el Ministerio del Poder Popular para Ecosocialismo y Aguas, se emprendió la reforma de la administración ambiental a nivel nacional. Esta nueva institución, que nace con el reto de introducir la conciencia ambiental en el modelo alternativo de desarrollo diseñado en el Plan de la Patria 2013-2019, tiene como una de sus tareas principales, el suministro de información ambiental al público en general.
            </p>
            <p>
              Con la promulgación del Decreto Extraordinario N° 6.382 de fecha 15 de junio de 2018, a través del cual se creó el Ministerio del Poder Popular para el Ecosocialismo (MINEC) y el Ministerio de Atención.
            </p>
          </div>
          <div class="col-12 col-md-6">
            <h3 class="text-center">Misión</h3>
            <p>
              Somos el órgano encargado de proteger, conservar y recuperar el ambiente, mediante la construcción del nuevo modelo Ecosocialista, basado en una relación armónica entre el hombre y la naturaleza, que garantice el uso y aprovechamiento racional, óptimo y sostenible de los recursos naturales, respetando los procesos y ciclos de la naturaleza.
            </p>
          </div>
          <div class="col-12 col-md-6">
            <h3 class="text-center">Visión</h3>
            <p>
              Somos el órgano encargado de proteger, conservar y recuperar el ambiente, mediante la construcción del nuevo modelo Ecosocialista, basado en una relación armónica entre el hombre y la naturaleza, que garantice el uso y aprovechamiento racional, óptimo y sostenible de los recursos naturales, respetando los procesos y ciclos de la naturaleza.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-3 px-4">
      <h2 class="text-center">Nuestro Equipo</h2>
      <div class="row">
        <div class="col-12 col-md-4">
          <div>
            <img src="../assets/img/division-gestion-interna.jpeg" class="img-fluid">
          </div>
          <strong class="d-block text-center m-3">DIVISIÓN GESTIÓN INTERNA</strong>
        </div>
        <div class="col-12 col-md-4">
          <div>
            <img src="../assets/img/disivision-de-ambiente.jpeg" class="img-fluid">
          </div>
          <strong class="d-block text-center m-3">DIVISIÓN DE AMBIENTE</strong>
        </div>
        <div class="col-12 col-md-4">
          <div>
            <img src="../assets/img/division-de-desechos-solidos.jpeg" class="img-fluid">
          </div>
          <strong class="d-block text-center m-3">DIVISIÓN DE DESECHOS SÓLIDOS</strong>
        </div>
      </div>
    </div>
    <div id="contacto" class="mt-2">
      <h2 class="text-center mb-3 text-white">Cotactanos</h2>
      <div class="row">
        <div class="col-12 col-md-8 mx-auto">
          <div class="card p-4">
            <form>
              <div class="form-row">
                <div class="col-12 col-md-6 mb-2">
                  <label>Nombre</label>
                  <input type="text" class="form-control" required>
                </div>
                <div class="col-12 col-md-6 mb-2">
                  <label>Apellido</label>
                  <input type="text" class="form-control" required>
                </div>
                <div class="col-12 col-md-6 mb-2">
                  <label>Correo</label>
                  <input type="email" class="form-control" required>
                </div>
                <div class="col-12 col-md-6 mb-2">
                  <label>Teléfono</label>
                  <input type="text" class="form-control" required>
                </div>
                <div class="col-12 mb-2">
                  <label>Asunto</label>
                  <input type="text" class="form-control" required>
                </div>
                <div class="col-12 mb-2">
                  <label>Mensaje</label>
                  <textarea class="form-control" required></textarea>
                </div>
              </div>
              <button type="submit" class="btn btn-success btn-block">Enviar</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-light d-flex justify-content-between align-items-center px-3">
      <div class="p-2">
        <img src="../assets/img/logo-minec.png" width="100" height="70">
      </div>
      <div>
        <strong>
          Ulnaiver Ramses Mejia Cañizales
        </strong>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Inicio',
    data() {
      return {
        servicios: [
          {
            id: '1',
            titulo: 'AUTORIZACIÓN RACDA',
            parrafo: 'La autorización para el Manejo de Sustancias, Materiales y Desechos Peligrosos y el Registro de Actividades Capaces de Degradar el Ambiente (RACDA), se otorga conforme al Ordenamiento Jurídico Ambiental, a las personas naturales, jurídicas, públicas o privadas que pretendan realizar actividades de manejo o generen materiales y desechos peligrosos, emisiones atmosféricas o efluentes líquidos,  como instrumentos que permiten el establecimiento del control administrativo y técnico, aportando medidas de seguridad, prevención y control de los riesgos en la ejecución de la actividad, en salvaguarda de  la salud y del ambiente.',
          },
          {
            id: '2',
            titulo: 'SISTEMA DE CONSTANCIA DE TRABAJO, RECIBOS DE PAGO Y ARC',
            parrafo: 'Con el objetivo principal de facilitarles a los funcionarios activos y a todos aquellos que hayan prestado servicio en la Institución, el MINEC pone a disposición una aplicación web, en la cual podrán descargar sus respectivos recibos de pago, constancias de trabajo y comprobantes ARC para la declaración de impuesto sobre la renta (ISRL) ante el portal del SENIAT. Link de la aplicación: http://arc.minec.gob.ve',
          },
          {
            id: '3',
            titulo: 'AUTORIZACIÓN PARA IMPORTAR GASES REFRIGERANTES',
            parrafo: 'Solicitud de Autorización por parte de las empresas importadoras de Gases Refrigerantes del tipo Hidrofluorocarbonos (HFC) e Hidroclorofluorocarbonos (HCFC), ante la Dirección General de Gestión de la Calidad Ambiental.',
          },
        ],
      };
    },
  }
</script>
