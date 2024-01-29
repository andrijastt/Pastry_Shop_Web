<template>
    <NavigationHeader></NavigationHeader>
    <body>
        <div class="row justify-content-evenly" id="licniPodaci">
            <div class="col-5 card">
                <h1 class="text-center fs-1 fw-bold">Licni Podaci</h1>                        
                <form class="">

                    <div class="mb-3 d-flex justify-content-center input-group-lg">              
                    <input type="text" 
                        class="form-control w-50 bg-light bg-gradient" 
                        placeholder="Korisnicko Ime"
                        v-model="newUsername">              
                    </div> 

                    <div class="mb-3 d-flex justify-content-center input-group-lg">              
                    <input type="text" 
                        class="form-control w-50 bg-light bg-gradient" 
                        placeholder="Ime"
                        v-model="newFirstname">              
                    </div>            

                    <div class="mb-3 d-flex justify-content-center input-group-lg">              
                    <input type="text" 
                        class="form-control w-50 bg-light bg-gradient" 
                        placeholder="Prezime"
                        v-model="newLastname">              
                    </div>            

                    <div class="mb-3 d-flex justify-content-center input-group-lg">              
                    <input type="text" 
                        class="form-control w-50 bg-light bg-gradient" 
                        placeholder="Adresa"
                        v-model="newAddress">              
                    </div>            

                    <div class="mb-3 d-flex justify-content-center input-group-lg">              
                    <input type="text" 
                        class="form-control w-50 bg-light bg-gradient" 
                        placeholder="Kontakt telefon"
                        v-model="newTelephone">              
                    </div>                                   

                    <div class="gap-2 d-flex justify-content-center">            
                        <button type="button" class="btn btn-warning btn-lg" @click="updateUserData()">Izmeni podatke</button>                    
                    </div>
                    <br>
                </form>
            </div>
            <div class="col-5 card">
                <h1 class="text-center fs-1 fw-bold">Lozinka</h1>   
                <div class="mb-3 d-flex justify-content-center input-group-lg">              
                    <input type="password" 
                        class="form-control w-50 bg-light bg-gradient" 
                        placeholder="Stara lozinka"
                        v-model="oldPassword">              
                    </div>            

                    <div class="mb-3 d-flex justify-content-center input-group-lg">              
                    <input type="password" 
                        class="form-control w-50 bg-light bg-gradient" 
                        placeholder="Nova lozinka"
                        v-model="newPassword0">              
                    </div>            

                    <div class="mb-3 d-flex justify-content-center input-group-lg">              
                    <input type="password" 
                        class="form-control w-50 bg-light bg-gradient" 
                        placeholder="Potvrda nove lozinka"
                        v-model="newPassword1">              
                    </div>                                   

                    <div class="gap-2 d-flex justify-content-center">            
                        <button type="button" class="btn btn-warning btn-lg" @click="updateUserPassword()">Izmeni lozinku</button>                    
                    </div>                     
            </div>
        </div>
    </body>
    <ContactInformation></ContactInformation>
</template>

<script>

    import NavigationHeader from '../components/NavigationHeader.vue'
    import ContactInformation from '../components/ContactInformation.vue'
    import users from '../data/users.js'

    export default{
        name: 'ChangeProfileInfoView',
        components:{
            NavigationHeader,
            ContactInformation
        },
        data(){
            return{
                users: [],
                newUsername: '',
                newFirstname: '',
                newLastname: '',
                newAddress: '',
                newTelephone: '',
                oldPassword: '',
                newPassword0: '',
                newPassword1: ''
            }
        },
        methods: {
            updateUserData(){                
                let user = JSON.parse(localStorage.getItem('user'))
                if(this.newUsername != '') user.username = this.newUsername
                if(this.newFirstname != '') user.firstname = this.newFirstname
                if(this.newLastname != '') user.lastname = this.newLastname
                if(this.newAddress != '') user.address = this.newAddress
                if(this.newTelephone != '') user.telephone = this.newTelephone

                localStorage.setItem('user', JSON.stringify(user))
                
                let index = this.users.findIndex(u => u.id == user.id)
                this.users[index] = user

                this.newUsername != ''
                this.newFirstname != ''
                this.newLastname != ''
                this.newAddress != ''
                this.newTelephone != ''

                alert("Podaci usepesno promenjeni")
            },
            updateUserPassword(){
                let user = JSON.parse(localStorage.getItem('user'))                

                if(this.oldPassword != user.password || this.newPassword0 != this.newPassword1){
                    alert('Pogresno uneti podaci')
                }
                else {
                    user.password = this.newPassword0;
                    localStorage.setItem('user', JSON.stringify(user))                
                    let index = this.users.findIndex(u => u.id == user.id)
                    this.users[index] = user                    
                    alert("Lozinka usepesno promenjena")
                }
                this.oldPassword = ''
                this.newPassword1 = ''
                this.newPassword0 = ''
            }
        },
        mounted(){
            if(localStorage.getItem('users') == null) this.users = users
            else this.users = JSON.parse(localStorage.getItem('users'))
        }
    }

</script>

<style>

    h1{
        font-style: italic;
    }

    body{
        background-image: url('../assets/background.jpg');
        background-size: cover;    
        display: flex;                        
        flex-direction: column;
    }

    #licniPodaci{
        position: absolute;
        top: 20%;
        left: 17%;
        width: 70%;        
    }
    
</style>
