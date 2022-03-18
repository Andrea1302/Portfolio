<template>
    <div v-if="!jubotroncreate" id="progetti">
        <div class="container" >
            <h1>
                //PROGETTI
            </h1>

            <div class="project_container">
                <div class="img_project">
                    <img :src="slidePlaystation[activeSlide].image" alt="">
                </div>

                <div class="descrizione_progetto">
                    <h2>
                        Playstation
                    </h2>

                    <p>
                        Replica del sito Playstation. Un progetto alla quale sono molto affezionato in quanto è stato uno dei primi in cui ho usufruito della libreria Bootstrap.
                    </p>

                    <a href="">
                        Scopri di pi&ugrave;
                    </a>
                </div>
            </div>

            <div class="project_container">
                <div class="descrizione_progetto_second">
                    <h2>
                        TITOLO
                    </h2>

                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod aliquam possimus, adipisci ea ipsam dolore corrupti neque pariatur voluptatem quisquam eveniet nostrum, facere, modi placeat officiis ratione. Magnam, vero explicabo.
                    </p>

                    <a href="">
                        Scopri di pi&ugrave;
                    </a>
                </div>

                <div class="img_project">
                    <img src="/storage/img/boolflix.png" alt="">
                </div>

                
            </div>

            <div class="project_container">
                <div class="img_project">
                    <img src="/storage/img/boolflix.png" alt="">
                </div>

                <div class="descrizione_progetto">
                    <h2>
                        TITOLO
                    </h2>

                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod aliquam possimus, adipisci ea ipsam dolore corrupti neque pariatur voluptatem quisquam eveniet nostrum, facere, modi placeat officiis ratione. Magnam, vero explicabo.
                    </p>

                    <a href="">
                        Scopri di pi&ugrave;
                    </a>
                </div>
            </div>

            
            <div class="project_container">
                <div class="descrizione_progetto_second">
                    <h2>
                        TITOLO
                    </h2>

                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod aliquam possimus, adipisci ea ipsam dolore corrupti neque pariatur voluptatem quisquam eveniet nostrum, facere, modi placeat officiis ratione. Magnam, vero explicabo.
                    </p>

                    <a href="">
                        Scopri di pi&ugrave;
                    </a>
                </div>
                
                <div class="img_project">
                    <img src="/storage/img/boolflix.png" alt="">
                </div>

                
            </div>
        </div>
    </div>

</template>

<script>


    export default {
        
        data(){
            return{
               jubotroncreate : true,
                activeSlide : 0,
               slidePlaystation : [
                   {
                       image : '/storage/img/playschermata1.png'
                   },
                   {
                       image : '/storage/img/playschermata2.png'
                   },
                   {
                       image : '/storage/img/playschermata3.png'
                   }

               ]
            }
        },
       created(){
            this.$root.$on('jumbocreate',(value)=>{
            this.jubotroncreate = value;
            });
            this.scrollimg();
       },
       methods :{
            nextSlide:function(){
            if ( this.activeSlide >= this.slidePlaystation.length - 1){
                this.activeSlide = 0
            } else {
                this.activeSlide ++;
            }
            
        },
        scrollimg(){
            setInterval(() => {

                this.nextSlide();
            }, 3000);
        }
       }
    }
</script>