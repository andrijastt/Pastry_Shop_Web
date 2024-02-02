<template>
    <NavigationHeader></NavigationHeader>
    <body>
        <div class="card col-11" id="notifications">
            <div class="card-body">
                <div class="card-title text-start fw-bold fs-1">
                   Obavestenja 
                   <hr class="hr" />
                </div>
                <div class="card-body">

                </div>
            </div>
        </div>
    </body>
    <ContactInformation></ContactInformation>
</template>

<script>

    import NavigationHeader from "../components/NavigationHeader.vue"
    import ContactInformation from "../components/ContactInformation.vue"

    export default{
        name: 'NotificationsView',
        components:{
            NavigationHeader,
            ContactInformation
        },
        data() {
            return{
                notifications: []
            }
        },
        mounted(){
            let allNotifications = JSON.parse(localStorage.getItem('notifications'))
            let user = JSON.parse(localStorage.getItem('user'))
            this.notifications = allNotifications.filter(notification => notification.userID = user.id && notification.answered != 0)
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

    #notifications{
        position: absolute;
        top: 15%;
        left: 4%;
    }
</style>