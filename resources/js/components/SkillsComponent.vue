<template>
    <div v-if="!jubotroncreate" id="skills" class="container">
        <h1>
            //SKILLS
        </h1>

        <div class="skills_slide">
            <i class="arrow_slide fas fa-chevron-left"></i>
            <div v-show="!secondPage" class="card_skill" v-for="skill,i in skillCards" :key="i">
                <div>
                    <img :src="skill.image" alt="skill">
                </div>

                <h3>
                    {{skill.title}}
                </h3>

            </div>

            <div v-show="secondPage" class="card_skill" v-for="skill,i in skillCardsp2" :key="i">
                <div>
                    <img :src="skill.image" alt="skill">
                </div>

                <h3>
                    {{skill.title}} 2
                </h3>

            </div>

            <i @click="nextSkill" class="arrow_slide fas fa-chevron-right"></i>
        </div>


        


    </div>

</template>

<script>


    export default {
        
        data(){
            return{
               jubotroncreate : true,
               skillCards : [
                   {
                       image : '/storage/img/logo2.png',
                       title : 'HTML'
                   },
                   {
                       image : '/storage/img/logo2.png',
                       title : 'HTML'
                   },
                   {
                       image : '/storage/img/logo2.png',
                       title : 'HTML'
                   }
               ],
               skillCardsp2 : [
                   {
                       image : '/storage/img/logo2.png',
                       title : 'HTML'
                   },
                   {
                       image : '/storage/img/logo2.png',
                       title : 'HTML'
                   },
                   {
                       image : '/storage/img/logo2.png',
                       title : 'HTML'
                   }
               ],
               secondPage : false,
                
            }
        },
       created(){
            this.$root.$on('jumbocreate',(value)=>{
            this.jubotroncreate = value;
            });
       },
       methods :{
        nextSkill(){
            this.secondPage = !this.secondPage;
        }
       }
    }
</script>
