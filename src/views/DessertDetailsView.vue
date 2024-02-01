<template>
  <NavigationHeader/>
  <body>
    <div class="card col-11" id="dessert">
      <div class="card-body d-flex justify-content-start">
        <img
          class="position-relative col-6 p-2"
          id="dessertPicture"
          :src="'/img/' + dessert.picture"
        />
        <div class="fs-1 col-6 text-start p-2">
          <div class="fw-bold fs-1">{{ dessert.name }}</div>
          <div class="text-warning fst-italic fw-bold">
            {{ dessert.price }} RSD
          </div>
          <div><b>Opis:</b> {{ dessert.description }}</div>
          <div><b>Sastojci:</b> {{ dessert.ingredients }}</div>
          <br>
          <div class="input-group input-group-lg mb-3">
            <input
              type="number"
              class="form-control bg-light bg-gradient"
              placeholder="Broj"   
              min="0"                         
            />
            <button
              class="btn btn-warning btn-lg"
              type="button"
              id="button-addon2"
            >
              Dodaj u korpu
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="card col-11" id="comments">
        <div class="card-body">
            <h1 class="card-header text-start bg-white fw-bold fs-1">Komentari</h1>
            <div class="text-start fs-3 p-3">
                aaa
                <hr class="hr"/>
            </div>
        </div>        
    </div>

    <div class="card col-11" id="addComment">
        <div class="card-body">
            <h1 class="card-header text-start bg-white fw-bold fs-1">Komentar</h1>
            <br>
            <div class="form-floating">
                <textarea class="form-control bg-light bg-gradient" id="floatingTextarea" />
                <label class="fs-3" for="floatingTextarea">Komentar</label>
            </div>
            <br>
            <div class="d-md-flex justify-content-md-end">
                <button class="btn btn-warning btn-lg" type="button">
                  Dodaj u korpu
                </button>
            </div>
        </div>        
    </div>
  </body>
  <ContactInformation/>
</template>

<script>
import NavigationHeader from "../components/NavigationHeader.vue";
import ContactInformation from "../components/ContactInformation.vue";
import desserts from "../data/desserts";

export default {
  name: "DessertDetailsView",
  components: {
    NavigationHeader,
    ContactInformation,
  },
  data() {
    return {
      allDesserts: [],
      dessert: {},
    };
  },
  mounted() {
    this.allDesserts = desserts;

    let id = Number(this.$route.params.id);
    let dessert = this.allDesserts.find((dessert) => dessert.id == id);
    this.dessert = dessert;
  },
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
  display: flex;
  flex-direction: column;
}

#dessert {
  position: absolute;
  top: 15%;
  left: 4%;
}

#dessertPicture {
  width: 40%;
}

#comments{
    position: absolute;
    top: 75%;
    left: 4%;
}

#addComment{
    position: absolute;
    top: 100%;
    left: 4%;
}
</style>
