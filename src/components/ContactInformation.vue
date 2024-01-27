<template>    
    
    <div id="footer" class="d-flex justify-content-between">
        <div id="footerText">
            Kontakt Informacije
        </div>
        <div id="footerText">
            Email:
            <i>slatki_zalogaj@gmail.com</i>
        </div>
        <div id="footerText"> 
            Radno vreme:
            <i>08:00-21:00</i>
        </div>
    </div>
    
</template>

<style>
    #footer{        
        position: absolute;
        width: 100%;
        height: 5%;
        left: 0px;
        bottom: 0px;
        background: white;
    }

    #footerText{                
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 36px;
        line-height: 44px;

        color: #000000;
    }
</style>

<script>
    export default {
        name: 'ContactInformation'
    }
</script>