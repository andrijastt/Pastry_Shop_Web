<template>    
    
    <div id="footer" class="d-flex justify-content-between">
        <div id="footerText" style="padding-left: 10px;">
            Kontakt Informacije
        </div>
        <div id="footerText" style="padding-left: 3%;">
            Email:
            <i>slatki_zalogaj@gmail.com</i>
        </div>
        <div id="footerText" style="padding-right: 10px;"> 
            Radno vreme:
            <i>08:00-21:00</i>
        </div>
    </div>
    
</template>

<style>
    #footer{                
        position: absolute;
        width: 100%;
        height: fit-content;
        left: 0;
        bottom: 0;
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