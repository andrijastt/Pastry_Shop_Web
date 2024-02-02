<template>
  <NavigationHeader></NavigationHeader>
  <body>
    <div class="card" id="cart">
      <div class="card-body">
        <h1 class="card-title text-start fw-bold">Korpa</h1>
        <div v-for="item in this.cart.items" :key="item.id" class="row">
          <img
            class="cakePicture"
            :src="'/img/' + item.dessert.picture"
            id="img"
          />
          <div class="col">
            <div class="row fs-1">
              {{ item.amount }} X {{ item.dessert.name }}
            </div>
            <div class="row fs-1">
              {{ item.amount * item.dessert.price }} RSD
            </div>
          </div>
        </div>
      </div>
      <h1>
        {{ totalPrice }} RSD
        <button class="btn btn-warning fs-1 fw-bold text-end" type="button" @click="confirm" v-if="totalPrice != 0">
          Potvrdi
        </button>
      </h1>
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
      cart: {},
      totalPrice: 0,
    };
  },
  mounted() {
    let allCarts = JSON.parse(localStorage.getItem("carts"));
    let user = JSON.parse(localStorage.getItem("user"));
    this.cart = allCarts.find((cart) => cart.id == user.id);

    this.cart.items.forEach((element) => {
      this.totalPrice += element.amount * element.dessert.price;
    });
  },
  methods:{
    confirm(){            

      let user = JSON.parse(localStorage.getItem("user"));

      let notification = {
        firstname: user.firstname,
        lastname: user.lastname,
        answered: 0,
        message: 'Porudzbina ',
        price: this.totalPrice
      }

      this.cart.items.forEach((element, index) => {
        notification.message += element.amount + 'x ' + element.dessert.name 
        if(index != this.cart.items.lengths - 1) notification.message += ', '
      });
      
      let allCarts = JSON.parse(localStorage.getItem("carts"));
      let cartIndex = allCarts.findIndex(cart => cart.id = this.cart.id)
      this.cart.items = []
    
      let notifications = JSON.parse(localStorage.getItem('notifications'))
      notifications.push(notification)
      localStorage.setItem('notifications', JSON.stringify(notifications))

      allCarts[cartIndex] = this.cart
      localStorage.setItem('carts', JSON.stringify(allCarts))
      this.totalPrice = 0
      alert('Porudzbina uspesno poslata')
    }
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
  left: 30%;
  width: 40%;
  min-height: 70%;
  height: fit-content;
}

#img {
  width: 40%;
  padding-bottom: 3%;
}
</style>
