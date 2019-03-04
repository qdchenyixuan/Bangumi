<template>
  <div>
    <div class="box">
      <div v-for="item in imgGroup" :key="item">
        <div class="card">
          <img :src="item" alt>
        </div>
        <div></div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.box {
  margin: 8px;
}
.card {
  //   box-shadow: 0 5px 10px rgba(0, 0, 0, 0.16);
  max-width: 100%;
  height: 300px;
  padding-bottom: 40%;
  background-color: #ff0000;
  overflow: hidden;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.16);
  border-radius: 6px;
  margin: 20px;
}
.card:hover {
  box-shadow: 0 6px 25px 0 rgba(30, 38, 44, 0.3);
}
img {
  width: 100%;
  z-index: 999;
}
</style>

<script>
import Axios from "axios";
export default {
  data() {
    return {
      imgGroup: [
        "https://i.pinimg.com/564x/b7/03/c7/b703c745b9317265ac3afebbb3a08db2.jpg",
        "https://i.pinimg.com/564x/09/5a/fe/095afe6eeddabe58b97bfe510dd079fe.jpg?b=t",
        "https://i.pinimg.com/564x/cc/21/7f/cc217fb3c699625a602af25703ec68c4.jpg?b=t",
        "https://i.pinimg.com/564x/3a/21/5a/3a215a731921b321b1adf748dab216c5.jpg?b=t"
      ]
    };
  },
  beforeMount() {
    this.axios
      .get("/subject/1244?responseGroup=large")
      .then(
        function(res) {
          console.log(res);
        }.bind(this)
      )
      .catch(function(error) {
        // handle error
        alert("主页API炸了");
      });
  }
};
</script>

