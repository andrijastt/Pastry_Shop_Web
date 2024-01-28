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
                        <div class="row">                            
                            <img class="cakePicture" src="../../public/img/Kolac_1.jpg">
                            <div class="col-9">
                                <div class="row fs-2 fw-bold">Kolac 1</div>
                                <div class="row fs-4">Kolac 1 opis</div>                                
                            </div>                
                        </div>                        
                        <div class="row">                            
                            <img class="cakePicture" src="../../public/img/Kolac_2.jpg">                            
                            <div class="col-9">
                                <div class="row fs-2 fw-bold">Kolac 2</div>
                                <div class="row fs-4">Kolac 2 opis</div>                                
                            </div>
                        </div>                        
                        <div class="row">                            
                            <img class="cakePicture" src="../../public/img/Kolac_3.jpg">                            
                            <div class="col-9">
                                <div class="row fs-2 fw-bold">Kolac 3</div>
                                <div class="row fs-4">Kolac 3 opis</div>                                
                            </div>
                        </div>           
                        <div class="row justify-content-between">
                                <img class="svg float-left" src="../assets/arrow-left-circle.svg">
                                <img class="svg float-right" src="../assets/arrow-right-circle.svg">
                        </div>             
                    </div>
                    <div class="col-5 card">
                        <h1 class="text-start fs-1 fw-bold">Torte</h1>                        
                        <div class="row">                            
                            <img class="col-1 cakePicture" src="../../public/img/Torta_1.jpg">                              
                            <div class="col-9">
                                <div class="row fs-2 fw-bold">Torta 1</div>
                                <div class="row fs-4">Torta 1 opis</div>                                
                            </div>
                        </div>                        
                        <div class="row">                            
                            <img class="cakePicture" src="../../public/img/Torta_2.jpg">                            
                            <div class="col-9">
                                <div class="row fs-2 fw-bold">Torta 2</div>
                                <div class="row fs-4">Torta 2 opis</div>                                
                            </div>
                        </div>                        
                        <div class="row">                            
                            <img class="cakePicture" src="../../public/img/Torta_3.jpg">                            
                            <div class="col-9">
                                <div class="row fs-2 fw-bold">Torta 3</div>
                                <div class="row fs-4">Torta 3 opis</div>                                
                            </div>
                        </div>           
                        <div class="row justify-content-between">
                                <img class="svg float-left" src="../assets/arrow-left-circle.svg">
                                <img class="svg float-right" src="../assets/arrow-right-circle.svg">
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
        data(){
            return{                
                allDesserts: [],
                cakes: [],
                promotions: [],
                desserts: []
            }
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