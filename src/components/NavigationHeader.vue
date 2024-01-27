<template>
    <div id = "nav">
        <h1 class="position-absolute top-0 start-0" id="name">            
            Slatki Zalogaj
        </h1>
    </div>
</template>
    
<style>
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
        height: 8%;
        left: 0px;
        top: 0px;
        background: white;
    }
</style>

<script>
    export default {
        name: 'NavigationHeader'
    }
</script>
