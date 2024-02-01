<template>
    <div id = "nav" class="d-flex justify-content-between">
        <h1 id="name" @click="route('home')">            
            Slatki Zalogaj
        </h1>
        <a class="fs-2 align-self-center" v-show="(isBuyer || isSeller) && this.$route.name != 'changeProfileInfo'" 
            @click="route('changeProfileInfo')">Izmeni profil</a>
        <a class="fs-2 align-self-center" v-show="isBuyer && this.$route.name != 'notifications'"
        @click="route('notifications')">Obavestenja</a>
        <a class="fs-2 align-self-center" v-show="isBuyer  && this.$route.name != 'cart'"
        @click="route('cart')">Korpa</a>
        <img id="logOut" src="../assets/logout.png" @click="logOut()" v-show="isBuyer || isSeller">
    </div>
</template>
    
<style>   
    a{                
        text-decoration-line: underline;                
        color: #000000;
    }

    #name{
        padding: 20px;
        font-family: 'Inter';
        font-style: italic;
        font-weight: 700;
        font-size: 64px;
        line-height: 30px;
        color: black;
    }

    #nav{        
        position: absolute;
        width: 100%;
        height: max-content;
        left: 0px;
        top: 0px;
        background: white;
    }

    #logOut{
        width: 4%;        
    }
</style>

<script>
    export default {
        name: 'NavigationHeader',
        methods: {
            logOut(){
                localStorage.removeItem('user')
                this.isBuyer = false
                this.isSeller = false
                this.$router.push('/')
            },
            route(path){
                if(path == 'home'){
                    if(localStorage.getItem('user') != null){
                        let user = JSON.parse(localStorage.getItem('user'))                    
    
                        if(user.type == 0) this.$router.push({path: '/buyer'})
                        else this.$router.push({path: '/seller'})
    
                    }
                    return
                }
                this.$router.push({path: '/' + path})
            }
        },
        data(){
            return{
                isBuyer: false,
                isSeller: false
            }
        },
        mounted(){
            if(localStorage.getItem('user') != null){
                let user = JSON.parse(localStorage.getItem('user'))
                if(user.type == 0) this.isBuyer = true
                else this.isSeller = true
            }
        }
    }
</script>
