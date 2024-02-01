<template>
  <div>
    <NavigationHeader/>    
    <body>
      <div class="card" id="logIn">        
        <div class="card-body">
          <h1 class="card-title" id="prijaviSe">Prijavi se</h1>
          <form class="">
            <div class="mb-3 d-flex justify-content-center input-group-lg">              
              <input type="text" 
                class="form-control w-75 bg-light bg-gradient" 
                placeholder="Korisnicko Ime"
                v-model="username">              
            </div>

            <div class="mb-3 d-flex justify-content-center input-group-lg">              
              <input type="password" 
                class="form-control w-75 bg-light bg-gradient" 
                placeholder="Lozinka"
                v-model="password">
            </div>

            <div class="gap-2 d-flex justify-content-center">            
              <button type="button" class="btn btn-warning btn-lg" @click="login(0)">Prijavi se (Kupac)</button>
              <button type="button" class="btn btn-warning btn-lg" @click="login(1)">Prijavi se (Prodavac)</button>
            </div>

          </form>          
        </div>
      </div>    
    </body>      
  </div>

  <ContactInformation/>  
</template>

<script>

  import NavigationHeader from '../components/NavigationHeader.vue'
  import ContactInformation from '../components/ContactInformation.vue'
  import users from '../data/users.js'

  export default {
    name: 'HomeView',
    components: {
      NavigationHeader,
      ContactInformation
    },
    data(){
      return{
        users: [],
        username: '',
        password: ''
      }
    },
    mounted(){
      if(localStorage.getItem('users') == null) this.users = users      
      else this.users = JSON.parse(localStorage.getItem('users'))      
    },
    methods:{
      login(value){
        let user = this.users.find(user => user.username == this.username && user.password == this.password && user.type == value)        
        if(user != null){
          localStorage.setItem('user', JSON.stringify(user))

          if(value == 0)
            this.$router.push('buyer')
          else
          this.$router.push('seller')
        }
        else alert('Uneti su pogresni podaci')
      },      
    }
  }
</script>

<style>    

  body{
    background-image: url('../assets/background.jpg');
    background-size: cover;    
  }

  input::placeholder{
    color: black !important;        
  }

  #logIn{      
    position: absolute;
    width: 30%;
    height: fit-content;
    left: 35%;
    top: 20%;      
  }

  #prijaviSe{
    font-weight: bold;
    font-style: italic;
  }
</style>