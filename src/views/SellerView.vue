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
              v-model="name"
            />
          </div>
          <div class="mb-3 d-flex justify-content-center input-group-lg">
            <input
              type="number"
              class="form-control w-75 bg-light bg-gradient"
              placeholder="Cena"
              min="0"
              v-model="price"
            />
          </div>

          <div class="mb-3 d-flex justify-content-evenly input-group-lg">
            <div><input type="checkbox" v-model="promotion"/><B class="fs-5">Promocija</B></div>
            <div><input type="radio" value="false" v-model="isCake"/><B class="fs-5">Kolac</B></div>
            <div><input type="radio" value="true" v-model="isCake"/><B class="fs-5">Torta</B></div>
          </div>

          <div class="mb-3 d-flex justify-content-center input-group-lg">
            <textarea
              class="form-control w-75 bg-light bg-gradient"
              placeholder="Opis"
              min="0"
              v-model="description"
            />
          </div>
          <div class="mb-3 d-flex justify-content-center input-group-lg">
            <textarea
              class="form-control w-75 bg-light bg-gradient"
              placeholder="Sastav"
              min="0"
              v-model="ingerdients"
            />
          </div>

          <div class="mb-3 d-flex justify-content-evenly input-group-lg">
            <img src="../../public/img/Kolac_1.jpg" class="img" @click="imgValue = 'Kolac_1.jpg'" :class="imgValue === 'Kolac_1.jpg' ? 'border border-primary' : ''" />
            <img src="../../public/img/Kolac_2.jpg" class="img" @click="imgValue = 'Kolac_2.jpg'" :class="imgValue === 'Kolac_2.jpg' ? 'border border-primary' : ''" />
            <img src="../../public/img/Torta_1.jpg" class="img" @click="imgValue = 'Torta_1.jpg'" :class="imgValue === 'Torta_1.jpg' ? 'border border-primary' : ''" />
          </div>

          <div class="mb-3 d-flex justify-content-evenly input-group-lg">
            <button type="button" class="btn btn-warning btn-lg fs-1">
              Dodaj
            </button>
          </div>
        </div>
      </div>
      <div class="card col-5">
        <div class="card-body">
          <h1 class="card-title fw-bold fs-1">Narudzbine</h1>
          <hr class="hr" />
          <div v-for="(notification, index) in notifications" :key="index">
            <div class="fs-4 text-start">
              <b>{{ notification.firstname }} {{ notification.lastname }}: </b>{{ notification.message }} ({{ notification.price }} RSD)
            </div>
            <br>
            <div v-if="notification.answered == 0">
              <div class="gap-5 d-flex justify-content-center">
                <button type="button" class="btn btn-warning btn-lg" @click="setNotification(1, notification)">
                  Prihvati
                </button>
                <button type="button" class="btn btn-warning btn-lg" @click="setNotification(0, notification)">
                  Odbij
                </button>
              </div>
            </div>
            <div v-else>
              <div v-if="notification.answered == 1" class="fs-3 fw-bold">Prihvacena porudzbina</div>
              <div v-else class="fs-3 fw-bold">Odbijena porudzbina</div>
            </div>
            <hr class="hr" />
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
  name: "SellerView",
  components: {
    NavigationHeader,
    ContactInformation,
  },
  data() {
    return {
      notifications: [],
      name: '',
      price: 0,
      promotion: false,
      isCake: false,
      imgValue: '',
      description: '',
      ingerdients: '',
      nextID: 14
    };
  },
  mounted() {
    this.notifications = JSON.parse(localStorage.getItem("notifications"));
  },
  methods:{
    setNotification(val, notification){
      notification.answered = val
      localStorage.setItem('notifications', JSON.stringify(this.notifications))

      if(val == 1) alert('Porudzbina prihvacena')
      else alert('Porudzbina odbijena')
    },
    addNewDessert(){

      if(this.name === '' || this.description === '' || this.ingredients === '' || this.picture === '' || this.price <= 0){
        alert('Nisu svi podaci uneti lepo')
        return
      }

      let newDessert = {
        id: this.nextID,        
        name: this.name,
        description: this.description,
        ingredients: this.ingerdients,
        picture: this.imgValue,  
        price: this.price,      
        promotion: this.promotion,
        isCake: this.isCake
      }
      this.nextID++
      let allDesserts = JSON.parse(localStorage.getItem('desserts'))
      allDesserts.push(newDessert)
      localStorage.setItem('desserts', JSON.stringify(allDesserts))

      alert('Uspesno dodat novi kolac')
    }
  }
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
