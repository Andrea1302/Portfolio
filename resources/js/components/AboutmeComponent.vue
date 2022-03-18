<template>
 <div v-if="!jubotroncreate">
     <a name="scroll"></a>
     <section class="aboutme">
         <div class="descrizione">
           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde quos et iste possimus nam dolores saepe voluptatem odio quis quam aut beatae temporibus aliquam porro, eligendi amet eveniet facilis doloremque.

           <div class="download">
                <a href="storage/fileCV/CV-Andrea.pdf" download="ANDREA-SCARPA-CV">SCARICA IL MIO CV <i class="fas fa-chevron-right"></i></a>
           </div>
         </div>

         <div class="img_mia">
             <img src="/storage/img/fotomia.png" alt="">
         </div>
     </section>

 </div>


</template>

<script>
    export default {
        name: 'Aboutme',

        data(){
            return{
               jubotroncreate : true,
            }
        },
       created(){
            this.$root.$on('jumbocreate',(value)=>{
            this.jubotroncreate = value;
            });
       },
       methods :{
       }
    }
</script>
