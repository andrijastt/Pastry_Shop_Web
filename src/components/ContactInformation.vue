<template>    
    
    <footer id="footer" class="d-flex justify-content-between">
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
    </footer>
    
</template>

<style>
    #footer{                
        position: relative;        
        height: fit-content;
        bottom: 0;
        left: 0;
        right: 0;
        background: white;
        margin-top: 80%;       
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