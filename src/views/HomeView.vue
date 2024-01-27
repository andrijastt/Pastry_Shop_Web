<template>
  <div>
    <NavigationHeader>

    </NavigationHeader>  
    <body>
      <div class="card" id="logIn">        
        <div class="card-body">
          <h1 class="card-title" id="prijaviSe">Prijavi se</h1>
          <form class="">
            <div class="mb-3 d-flex justify-content-center input-group-lg">              
              <input type="text" class="form-control w-75 bg-light bg-gradient" placeholder="Korisnicko Ime">              
            </div>

            <div class="mb-3 d-flex justify-content-center input-group-lg">              
              <input type="password" class="form-control w-75 bg-light bg-gradient" placeholder="Lozinka">
            </div>

            <div class="gap-2 d-flex justify-content-center">            
              <button type="button" class="btn btn-warning btn-lg">Prijavi se (Kupac)</button>
              <button type="button" class="btn btn-warning btn-lg">Prijavi se (Prodavac)</button>
            </div>

          </form>          
        </div>
      </div>    
    </body>      
  </div>

  <ContactInformation>
    
  </ContactInformation>
</template>

<script>

  import NavigationHeader from '../components/NavigationHeader.vue'
  import ContactInformation from '../components/ContactInformation.vue'

  export default {
    name: 'HomeView',
    components: {
      NavigationHeader,
      ContactInformation
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
    height: 30%;
    left: 35%;
    top: 20%;      
  }

  #prijaviSe{
    font-weight: bold;
    font-style: italic;
  }
</style>