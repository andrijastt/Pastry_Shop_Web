<template>
    <NavigationHeader>

    </NavigationHeader>
    <body>
        <div id ="promotions" class="row justify-content-center">
            <div class="col-11 card">
                <div class="row justify-content-evenly">
                    <div class="col-4 card border-0">
                        <img src="../../public/img/Kolac_1.jpg" class="card-top-img promotionPicture mx-auto d-block">
                        <div class="card-title fs-2 fw-bold">Kolac 1</div>
                        <div class="card-text fs-4">Kolac 1 opis</div>
                    </div>
                    <div class="col-4 card border-0">
                        <img src="../../public/img/Kolac_2.jpg" class="card-top-img  promotionPicture mx-auto d-block">
                        <div class="card-title fs-2 fw-bold">Kolac 2</div>
                        <div class="card-text fs-4">Kolac 2 opis</div>
                    </div>
                    <div class="col-4 card border-0">
                        <img src="../../public/img/Torta_1.jpg" class="card-top-img promotionPicture mx-auto d-block">
                        <div class="card-title fs-2 fw-bold">Torta 1</div>
                        <div class="card-text fs-4">Torta 1 opis</div>
                    </div>                    
                </div>
            </div>
        </div>        
        <div id ="pastries" class="row justify-content-center">
            <div class="col-12">
                <div class="row justify-content-evenly">                    
                    <div class="col-5 card">                        
                        <h1 class="text-start fs-1 fw-bold">Kolaci</h1>                        
                        <div class="row" v-for="dessert in desserts.slice(startDessert, endDessert)" :key="dessert.id">                            
                            <img class="cakePicture" :src="'/img/' + dessert.picture">
                            <div class="col-9">
                                <div class="row fs-2 fw-bold">{{dessert.name}}</div>
                                <div class="row fs-4">{{dessert.description}}</div>                                
                            </div>                
                        </div>                                                          
                        <div class="row justify-content-between">
                                <img class="svg float-left" src="../assets/arrow-left-circle.svg" @click="decrement(0)">
                                <img class="svg float-right" src="../assets/arrow-right-circle.svg" @click="increment(0)">
                        </div>             
                    </div>

                    <div class="col-5 card">
                        <h1 class="text-start fs-1 fw-bold">Torte</h1>                        
                        <div class="row" v-for="cake in cakes.slice(startCake, endCake)" :key="cake.id">                                                    
                            <img class="col-1 cakePicture" :src="'/img/' + cake.picture" >                              
                            <div class="col-9">
                                <div class="row fs-2 fw-bold">{{ cake.name }}</div>
                                <div class="row fs-4">{{ cake.description }}</div>                                
                            </div>
                        </div>                         
                        <div class="row justify-content-between">
                                <img class="svg float-left" src="../assets/arrow-left-circle.svg" @click="decrement(1)">
                                <img class="svg float-right" src="../assets/arrow-right-circle.svg" @click="increment(1)">
                        </div>
                    </div>                                        
                </div>
            </div>
        </div>
    </body>
    <footer>
        <ContactInformation >
        </ContactInformation>
    </footer>
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
        mounted(){
            // if(localStorage.getItem('desserts') != null){
            //     this.allDesserts = JSON.parse(localStorage.getItem('desserts'))                                
            // }
            // else{ 
            //     this.allDesserts = desserts                
            //     // localStorage.setItem('desserts', JSON.stringify(this.allDesserts))
            // }

            this.allDesserts = desserts                            
            this.cakes = this.allDesserts.filter(dessert => dessert.isCake == true)            
            this.desserts = this.allDesserts.filter(dessert => dessert.isCake == false)                                    
            this.promotions = this.allDesserts.filter(dessert => dessert.promotion == true)                                    
        },
        data(){
            return{                
                allDesserts: [],
                cakes: [],
                promotions: [],
                desserts: [],
                startCake: 0,
                endCake: 3,
                startDessert: 0,
                endDessert: 3
            }
        },
        methods:{
            increment(flag){           
                
                if(flag == 0){
                    if(this.endDessert + 3 <= this.desserts.length + 1){                    
                        this.startDessert += 3
                        this.endDessert += 3
                    }
                    else {
                        if(this.endDessert != this.desserts.length){
                            this.startDessert += 3
                            this.endDessert = this.desserts.length
                        }                    
                    }                
                }
                else {                    
                    if(this.endCake + 3 <= this.cakes.length + 1){                    
                        this.startCake += 3
                        this.endCake += 3
                    }
                    else {
                        if(this.endCake != this.cakes.length){
                            this.startCake += 3
                            this.endCake = this.cakes.length
                        }                    
                    }                
                }
            },
            decrement(flag){                
                if(flag == 0){
                    if(this.startDessert > 0){
                        this.startDessert -= 3
                        if(this.endDessert == this.desserts.length){
                            this.endDessert = this.startDessert + 3
                        }
                        else {
                            this.endDessert -= 3
                        }
                    }
                }
                else {
                    if(this.startCake > 0){
                        this.startCake -= 3
                        if(this.endCake == this.cakes.length){
                            this.endCake = this.startCake + 3
                        }
                        else {
                            this.endCake -= 3
                        }
                    }                
                }
            }
        }
    }

</script>

<style>  

    a{                
        text-decoration-line: underline;                
        color: #000000;
    }

    body{
        background-image: url('../assets/background.jpg');
        background-size: cover;    
        display: flex;                        
        flex-direction: column;
    }

    #promotions{
        position: absolute;
        width: 100%;
        height: 35%;    
        top: 10%;
    }

    #pastries{
        position: absolute;
        width: 100%;
        height: 35%;    
        top: 50%;    
    }

    .svg{
        width: 10%;
    }

    .cakePicture{
        width: 25%;
        height: 90%;
    }

    .promotionPicture{
        width: 35%;
        height: 80%;
    }
  
</style>