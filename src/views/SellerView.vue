<template>
    <NavigationHeader>

    </NavigationHeader>
    <body>
        
    </body>
    <ContactInformation>

    </ContactInformation>
</template>

<script>

    import NavigationHeader from '../components/NavigationHeader.vue'
    import ContactInformation from '../components/ContactInformation.vue'

    export default{
        name: 'SellerView',
        components:{
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
  
</style>