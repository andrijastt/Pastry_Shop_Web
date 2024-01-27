<template>
    <NavigationHeader>

    </NavigationHeader>
    <body>
        <div id ="promotions" class="row justify-content-center">
            <div class="col-11 card">
                <div class="row justify-content-evenly">
                    <!-- <div class="col-4 card">
                        aaaaaa
                    </div> -->
                    <!-- <div class="col-4 card">
                        aaaaaa
                    </div>
                    <div class="col-4 card">
                        aaaaaa
                    </div> -->

                    <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active" data-bs-interval="1000">
                                <!-- <img src="../assets/logo.png" class="d-block w-100"> -->
                            </div>
                            <div class="carousel-item" data-bs-interval="2000">
                                <!-- <img src="../assets/logout.png" class="d-block w-100"> -->
                            </div>                            
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>

                </div>
            </div>
        </div>
        <div id = "pastries" class="container">
            <div class="row justify-content-between">
                <div class="col-5 card">
                    <h1 class="card-title ">Kolaci</h1>
                    <div class="card-content">
                        <div class="col-11">
                            <!-- <div class="row" v-for="cake in cakes" :key="cake.id">
                                {{ cake[0].name }}
                            </div>  -->
                            <div class="row">
                                <img class="col-6" src="../../public/img/Torta_1.jpg">
                                <div class="col-6">
                                    <div class="row">{{ desserts[0].name }}</div>
                                    <div class="row">{{ desserts[0].description }}</div>
                                </div>
                            </div>
                            <div class="row justify-content-between">
                                <img class="svg float-left" src="../assets/arrow-left-circle.svg">
                                <img class="svg float-right" src="../assets/arrow-right-circle.svg">
                            </div>
                        </div>                        
                    </div>
                </div>
                <div class="col-5 card">
                    <h1 class="card-title">Torte</h1>
                </div>
            </div>
        </div>
    </body>
    <ContactInformation>

    </ContactInformation>
</template>

<script>

    import desserts from '../data/desserts.js'

    import NavigationHeader from '../components/NavigationHeader.vue'
    import ContactInformation from '../components/ContactInformation.vue'

    export default{
        name: 'BuyerView',
        components:{
            NavigationHeader,
            ContactInformation
        },
        data(){
            return{                
                allDesserts: [],
                cakes: [],
                promotions: [],
                desserts: []
            }
        },
        mounted(){
            if(localStorage.getItem('desserts') != null){
                this.allDesserts = JSON.parse(localStorage.getItem('desserts'))                                
            }
            else{ 
                this.allDesserts = desserts                
                // localStorage.setItem('desserts', JSON.stringify(this.allDesserts))
            }

            this.cakes = this.allDesserts.filter(dessert => dessert.isCake == true) 
            console.log(this.cakes)                       
            this.desserts = this.allDesserts.filter(dessert => dessert.isCake == false)            
            console.log(this.desserts)                       
            this.promotions = this.allDesserts.filter(dessert => dessert.promotion == true)            
            console.log(this.promotions)                       
        }
    }

</script>

<style>    

  body{
    background-image: url('../assets/background.jpg');
    background-size: cover;    
  }

  #promotions{
    position: absolute;
    width: 100%;
    height: 35%;    
    top: 10%;
  }

  #pastries{
    position: absolute;    
    height: 40%;    
    left: 15%;
    top: 50%;
  }

  .svg{
    width: 10%;
  }
  
</style>