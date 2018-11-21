<style scoped lang="scss">

.mu-card__raised {

    border-radius: 5px;
}

.home-card {
    margin: 33px 15px;
    width: 45%
    // height: 170px;
    // width: 240px;
    // box-shadow: 0 5px 10px rgba(0, 0, 0, 0.16);
    // border-radius: 5px
}

.bodier {
    padding: 56px 0 0px;
    box-sizing: border-box;
}

.appbar {
    position: fixed;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    z-index: 99;
}

</style>

<template>

<div class="all">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
    <div class="appbar">
        <mu-appbar style="width: 100%;" color="#607d8b">
            <mu-button icon slot="left" @click="open=!open">
                <mu-icon value="menu"></mu-icon>
            </mu-button>
            e轩 Bangumi
            <mu-menu slot="right">
                <mu-button flat>菜单</mu-button>
                <mu-list slot="content">
                    <mu-list-item button>
                        <mu-list-item-content>
                            <mu-list-item-title>Menu Item 1</mu-list-item-title>
                        </mu-list-item-content>
                    </mu-list-item>
                    <mu-list-item button>
                        <mu-list-item-content>
                            <mu-list-item-title>Menu Item 2</mu-list-item-title>
                        </mu-list-item-content>
                    </mu-list-item>
                </mu-list>
            </mu-menu>
        </mu-appbar>

        <mu-drawer :open.sync="open" :docked="docked" :right="position === 'right'">
            <mu-list>
                <mu-list-item button>
                    <mu-list-item-title>Menu Item 1</mu-list-item-title>
                </mu-list-item>
                <mu-list-item button>
                    <mu-list-item-title>Menu Item 2</mu-list-item-title>
                </mu-list-item>
                <mu-list-item @click="open = false" button>
                    <mu-list-item-title>Close</mu-list-item-title>
                </mu-list-item>
            </mu-list>
        </mu-drawer>
    </div>
    <div class="bodier">
        <div class="home-card" v-for="item in anima">
            <mu-card raised style="width: 100%; max-width: 375px; margin: 0 auto;">
                <!-- <mu-card-header title="Myron Avatar" sub-title="sub title">

                </mu-card-header> -->
                <mu-card-media title="Image Title" sub-title="Image Sub Title">
                    <img :src="item.subject.images.large">
                </mu-card-media>
                <mu-card-title title="Content Title" sub-title="Content Title"></mu-card-title>


            </mu-card>
        </div>

    </div>


</div>

</template>

<script lang="ts">

export default {
    data() {
            return {
                docked: false,
                open: false,
                position: 'left',

                anima: []
            }
        },
        methods: {

        },
        beforeMount: function() {

            this.axios.get('/user/323238/collections/anime?app_id=bgm5205b7a605e30c83&max_results=155')
                .then(function(response) {
                    // handle success
                    console.log(response.data[0].collects[0].list);
                    let annimaComplete = response.data[0].collects[0].list

                    this.anima = annimaComplete
                    console.log(this.annima)
                }.bind(this))
                .catch(function(error) {
                    // handle error
                    alert("主页API炸了qwq")
                })


        }
}
// import {
//     Component, Vue
// }
// from 'vue-property-decorator';
// import HelloWorld from '@/components/HelloWorld.vue';
// @ is an alias to /src

// @
// Component({
//     components: {
//         HelloWorld,
//     },
// })
// export default class Home extends Vue {}

</script>
