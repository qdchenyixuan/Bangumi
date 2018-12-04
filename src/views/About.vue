<style lang="scss">

.mu-item-title {
    // 评论昵称
    color: #1976d2;
}

</style>

<template lang="html">

<div class="">
    <mu-list textline="two-line">
        <mu-sub-header inset>吐槽</mu-sub-header>
        <mu-list-item avatar button :ripple="false" v-for="item in complaints">
            <mu-list-item-action>
                <mu-avatar>
                    <img class="mu-avatar-inner" :src="item.user.avatar.medium" alt="">
                    <!-- <mu-icon class="mu-avatar-inner" :src="item.user.avatar.medium"></mu-icon> -->
                </mu-avatar>
            </mu-list-item-action>
            <mu-list-item-content>
                <mu-list-item-title>{{item.user.nickname}}</mu-list-item-title>
                <mu-list-item-sub-title>{{item.title}}</mu-list-item-sub-title>
            </mu-list-item-content>
            <mu-list-item-action>
                <mu-button icon>
                    <mu-icon value="info"></mu-icon>
                </mu-button>
            </mu-list-item-action>
        </mu-list-item>


    </mu-list>
</div>

</template>

<script>

export default {
    data() {
            return {
                complaints: []
            }
        },
        methods: {},
        beforeMount: function() {
            console.log(11);
            this.axios
                .get("/subject/54433?responseGroup=large")
                .then(
                    function(response) {
                        // handle success
                        console.log(response.data);
                        this.complaints = response.data.topic
                        // console.log(this.complaints);
                    }.bind(this)
                )
                .catch(function(error) {
                    // handle error
                    alert("主页API炸了qwq");
                });
        }
}

</script>
