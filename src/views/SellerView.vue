<template>
  <NavigationHeader />
  <body>
    <div class="row d-flex justify-content-around" id="seller">
      <div class="card col-5">
        <div class="card-body">
          <h1 class="card-title fw-bold fs-1">Dodaj novi proizvod</h1>
          <div class="mb-3 d-flex justify-content-center input-group-lg">
            <input
              type="text"
              class="form-control w-75 bg-light bg-gradient"
              placeholder="Naziv"
            />
          </div>
          <div class="mb-3 d-flex justify-content-center input-group-lg">
            <input
              type="number"
              class="form-control w-75 bg-light bg-gradient"
              placeholder="Cena"
              min="0"
            />
          </div>

          <div class="mb-3 d-flex justify-content-evenly input-group-lg">
            <div><input type="checkbox" /><B class="fs-5">Promocija</B></div>
            <div><input type="radio" /><B class="fs-5">Kolac</B></div>
            <div><input type="radio" /><B class="fs-5">Torta</B></div>
          </div>

          <div class="mb-3 d-flex justify-content-center input-group-lg">
            <textarea
              class="form-control w-75 bg-light bg-gradient"
              placeholder="Opis"
              min="0"
            />
          </div>
          <div class="mb-3 d-flex justify-content-center input-group-lg">
            <textarea
              class="form-control w-75 bg-light bg-gradient"
              placeholder="Sastav"
              min="0"
            />
          </div>

          <div class="mb-3 d-flex justify-content-evenly input-group-lg">
            <img src="../../public/img/Kolac_1.jpg" class="img" />
            <img src="../../public/img/Kolac_2.jpg" class="img" />
            <img src="../../public/img/Torta_1.jpg" class="img" />
          </div>

          <div class="mb-3 d-flex justify-content-evenly input-group-lg">
            <button type="button" class="btn btn-warning btn-lg fs-1">Dodaj</button>
          </div>
        </div>
      </div>
      <div class="card col-5">
        <div class="card-body">
          <h1 class="card-title fw-bold fs-1">Narudzbine</h1>
          <hr class="hr" />
        </div>
      </div>
    </div>
  </body>
  <ContactInformation />
</template>

<script>
import NavigationHeader from "../components/NavigationHeader.vue";
import ContactInformation from "../components/ContactInformation.vue";

export default {
  name: "SellerView",
  components: {
    NavigationHeader,
    ContactInformation,
  },
  data() {
    return {
      notifications: [],
    };
  },
  mounted() {},
};
</script>

<style>
a {
  text-decoration-line: underline;
  color: #000000;
}

body {
  background-image: url("../assets/background.jpg");
  background-size: cover;
}

#seller {
  position: absolute;
  width: 100%;
  top: 10%;
}

.img {
  width: 20%;
  height: 20%;
}
</style>
