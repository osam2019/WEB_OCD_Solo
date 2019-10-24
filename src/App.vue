<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>
<script>
    // import axios from 'axios'
    export default {
        name: "app",
        components: {},
        data() {
            return {
                loggedIn: false, //로그인이 되어 있는지 확인
                userId: "1",
                user: {},
                userList: []
            }
        }
        ,
        created() {

            if (!this.loggedIn) {
                this.$router.push('/login');
            } else {
                // 로그인이 되어 있으면 userId에 로그인 되어 있는 유저 아이디를 저장
                this.$router.push({name: 'Main', params: {userId: self.userId}});
                // let userList = [];
                // let self = this;
                // axios.get('./users.json')
                //     .then(function(res) {
                //         userList = res.data;
                //         let user = null;
                //         for(let i = 0; i < userList.length; i++) {
                //             if(userList[i].userId === self.userId) {
                //                 user = userList[i];
                //             }
                //         }
                //         if (user.roomId !== '') {
                //             self.$router.push({name: 'Main', params: {userId: self.userId}});
                //         } else {
                //             self.$router.push({name: 'AddRoom', params: {userId: self.userId}});
                //         }
                //     })
                //     // eslint-disable-next-line no-console
                //     .catch(err => console.log(err));
            }
        }
    }
</script>
<style>
    * {
        margin: 0;
        padding: 0;
    }

    body {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    #app {
        min-height: 346px;
        max-height: 812px;
        min-width: 320px;
        max-width: 504px;
        width: 100%;
        height: 100%;
        margin: 1%;
        padding: 0.5%;
        border: 1px solid #000000;
    }
</style>
