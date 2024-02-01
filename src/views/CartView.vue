<template>
  <NavigationHeader></NavigationHeader>
  <body>
    <div class="card position-absolute" id="cart">
      <div class="card-body">
        <h1 class="card-title text-start fw-bold">Korpa</h1>
      </div>
      <h1 class="position-absolute bottom-0 start-0 p-3">0 RSD</h1>
    </div>
  </body>
  <ContactInformation></ContactInformation>
</template>

<script>
import NavigationHeader from "@/components/NavigationHeader.vue";
import ContactInformation from "@/components/ContactInformation.vue";

export default {
  name: "CartView",
  components: {
    NavigationHeader,
    ContactInformation,
  },
  data() {
    return {
      cart: [],
    };
  },
  mounted() {
    let allCarts = JSON.parse(localStorage.getItem("carts"));
    let user = JSON.parse(localStorage.getItem("user"));
    this.cart = allCarts.filter((cart) => cart.id == user.id);
    console.log(this.cart)
  }
};
</script>

<style>
a {
  text-decoration-line: underline;
  color: #000000;
}

h1 {
  font-style: italic;
  font-size: 64px;
}

body {
  background-image: url("../assets/background.jpg");
  background-size: cover;
  display: flex;
  flex-direction: column;
}

#cart {
  position: absolute;
  top: 10%;
  left: 20%;
  width: 60%;
  height: 80%;
}
</style>
