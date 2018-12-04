<template lang="html">
<div class="">
  1
</div>
</template>

<script>
export default {
  data(){
    return{

    }
  },
  methods:{},
  beforeMount:function(){
    console.log(11);
    this.axios
      .get("/subject/247?responseGroup=medium")
      .then(
        function(response) {
          // handle success
          console.log(response);
        }.bind(this)
      )
      .catch(function(error) {
        // handle error
        alert("主页API炸了qwq");
      });
  }
}
</script>

<style lang="scss">
</style>
