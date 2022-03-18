<template>
    <div>
        
    </div>

</template>

<script>


    export default {
        
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
