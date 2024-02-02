<template>
  <NavigationHeader />
  <body>
    <div class="row gy-5" id="dessert">
      <div class="col-11">
        <div class="card">
          <div class="card-body row">
            <img
              class="p-2"
              id="dessertPicture"
              :src="'/img/' + dessert.picture"
            />
            <div class="fs-1 col-7 text-start p-2">
              <div class="fw-bold fs-1">{{ dessert.name }}</div>
              <div class="text-warning fst-italic fw-bold">
                {{ dessert.price }} RSD
              </div>
              <div><b>Opis:</b> {{ dessert.description }}</div>
              <div><b>Sastojci:</b> {{ dessert.ingredients }}</div>
              <br />
              <div class="input-group input-group-lg mb-3">
                <input
                  type="number"
                  class="form-control bg-light bg-gradient"
                  placeholder="Broj"
                  min="0"
                  v-model="amount"
                />
                <button
                  class="btn btn-warning btn-lg"
                  type="button"
                  id="button-addon2"
                  @click="addToCart()"
                >
                  Dodaj u korpu
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-11">
        <div class="card h-100">
          <div class="card-body">
            <h1 class="card-header text-start bg-white fw-bold fs-1">
              Komentari
            </h1>
            <div
              class="text-start fs-3 p-2"
              v-for="(comment, index) in comments"
              :key="index"
            >
              <b>{{ comment.firstname }} {{ comment.lastname }}:</b>
              {{ comment.comment }}
              <hr class="hr" />
            </div>
          </div>
        </div>
      </div>
      <div class="col-11">
        <div class="card h-100">
          <div class="card-body">
            <h1 class="card-header text-start bg-white fw-bold fs-1">
              Komentar
            </h1>
            <br />
            <textarea
              class="form-control bg-light bg-gradient"
              v-model="comment"
            />
            <br />
            <div class="d-md-flex justify-content-md-end">
              <button
                class="btn btn-warning btn-lg"
                type="button"
                @click="addComment"
              >
                Dodaj komentar
              </button>
            </div>
          </div>
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
  name: "DessertDetailsView",
  components: {
    NavigationHeader,
    ContactInformation,
  },
  data() {
    return {
      allDesserts: [],
      dessert: {},
      amount: 0,
      cart: {},
      comments: [],
      comment: "",
    };
  },
  mounted() {
    this.allDesserts = JSON.parse(localStorage.getItem("desserts"));

    let id = Number(this.$route.params.id);
    let dessert = this.allDesserts.find((dessert) => dessert.id == id);
    this.dessert = dessert;

    let carts = JSON.parse(localStorage.getItem("carts"));
    let user = JSON.parse(localStorage.getItem("user"));
    this.cart = carts.find((cart) => cart.id == user.id);

    let allComments = JSON.parse(localStorage.getItem("comments"));
    this.comments = allComments.filter(
      (comment) => comment.dessertID == this.dessert.id
    );
  },
  methods: {
    addToCart() {
      if (this.amount <= 0) {
        alert("Ne mozete dodati 0 kolaca");
        return;
      }

      let index = this.cart.items.findIndex(
        (item) => item.dessert.id == this.dessert.id
      );
      if (index == -1)
        this.cart.items.push({ amount: this.amount, dessert: this.dessert });
      else this.cart.items[index].amount += this.amount;

      this.amount = 0;

      let carts = JSON.parse(localStorage.getItem("carts"));
      let indexCart = carts.findIndex((cart) => cart.id == this.cart.id);
      carts[indexCart] = this.cart;
      localStorage.setItem("carts", JSON.stringify(carts));

      alert("Uspesno ste dodali kolac u korpu");
    },
    addComment() {
      let user = JSON.parse(localStorage.getItem("user"));
      let newComment = {
        firstname: user.firstname,
        lastname: user.lastname,
        comment: this.comment,
        dessertID: this.dessert.id,
      };

      this.comments.push(newComment);

      let allComments = JSON.parse(localStorage.getItem("comments"));
      allComments.push(newComment);
      localStorage.setItem("comments", JSON.stringify(allComments));

      this.comment = "";
    },
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
  left: 3%;
}

#dessertPicture {
  width: 30%;
}
</style>
