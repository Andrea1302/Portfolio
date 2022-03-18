<template>
 <div :id="jumbotronCreated?'jumbotron' :'jumbotron_created'">
     <img v-if="jumbotronCreated" class="logo" src="storage/img/logo2.png" alt="logo">
     <div :id="circleLayoutData?'circle':''"></div>
     <div v-if="!jumbotronCreated" class="container">
        <nav class="row  justify-content-between align-items-center">
                
                <!-- struttura mobile  -->
                <div class="row mx-0 justify-content-between align-items-center" id="phone_model">
                    <div class="col-7">
                         <a href="/"><img src="storage/img/logo-after.png" alt="logo-after"></a>

                        <a href="storage/fileCV/CV-Andrea.pdf" download="ANDREA-SCARPA-CV">SCARICA IL MIO CV</a>
                    </div>
                       
                    <div class="col-5" id="contact_me_phoneLayout">
                         <a class="btn" id="contattami" href="#">
                                CONTATTAMI
                        </a>
                    </div>
                       
                </div>    

            <!-- struttura desktop      -->

            <div class="col-lg-7 col-sm-12 px-0" id="nav_sx">

                <a id="logo_on_desktop" href="/homepage"><img src="storage/img/logo-after.png" alt="logo-after"></a>

                <h2>ANDREA SCARPA</h2>

                <span id="space">|</span>
                <span>
                    Junior Developer
                </span>
            </div>

             <div id="nav_dx" class="col-lg-4">
                <a href="storage/fileCV/CV-Andrea.pdf" download="ANDREA-SCARPA-CV">SCARICA IL MIO CV</a>

                <a class="btn" id="contattami" href="#">
                    CONTATTAMI
                </a>
            </div>
        </nav> 


        <div class="row" id="jumbotext">
            <div id="number_row" class="col-1">
                <div id="number_row_1">
                    1
                </div>
                <div id="number_row_2">
                    2
                </div>
                <div id="number_row_3">
                    3
                </div>
            
            </div>
            <div class="col-10">
                <span class="typed-text">{{ typeValue }}</span>
                <span class="cursor" :class="{'typing': typeStatus}">&nbsp;</span>
            </div>
        </div>

        <div class="text-center scroll">
            SCROLL
            <div>
                <a href="#scroll"><i class="go_down fas fa-chevron-down"></i></a>
            </div>
        </div>
     </div>

 </div>


</template>

<script>


    export default {
        
        data(){
            return{
               jumbotronCreated : true,
               circleLayoutData : false,

               typeValue: '',
                typeStatus: false,
                typeArray: [`Ciao  Sono Andrea e nella vita amo <programmare/>`],
                typingSpeed: 75,
                typeArrayIndex: 0,
                charIndex: 0
            }
        },
       created(){
           this.circleLayout()

           this.mainLayout()

           setTimeout(this.typeText,4500);
       },
       methods :{
           circleLayout(){
                setTimeout(() => {
                    this.circleLayoutData = true;
                }, 2500);
           },
           mainLayout(){
                setTimeout(() => {
                    this.jumbotronCreated = false;
                    this.circleLayoutData = false;
                    this.$root.$emit('jumbocreate',this.jumbotronCreated);

                }, 3500);
           },
           


           typeText() {
                if(this.charIndex < this.typeArray[this.typeArrayIndex].length) {
                    if(!this.typeStatus)
                        this.typeStatus = true;
                        this.typeValue += this.typeArray[this.typeArrayIndex].charAt(this.charIndex);
                        this.charIndex += 1;
                        setTimeout(this.typeText, this.typingSpeed);
                }
                else {
                this.typeStatus = false;
                }
      },
       }
    }
</script>
