<template>
    <div id="addRoom">
        <el-input class="form inputText" type="text" placeholder="방 코드!" v-model="roomCode"></el-input>
        <el-button class="form button" type="success" v-on:click="enterRoom()">입 장!</el-button>
        <el-button class="form button" type="primary" v-on:click="createRoom()">방만들기!</el-button>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: "AddRoom",
        methods: {
            enterRoom() {
                if(this.roomCode !== 'c1231de2') {
                    alert("방이 존재하지 않습니다.");
                } else {
                    this.$emit('enterRoom', this.roomCode);
                }
            },
            createRoom() {
                this.$emit('createRoom', 'createRoom');
            }
        },
        data() {
            return {
                user: {},
                roomCode: 'c1231de2'
            }
        },
        created() {

            let userId = this.$route.params.userId || "1";

            let userList = null;
            let self = this;
            axios.get('./users.json')
                .then(function(res) {
                    userList = res.data;
                    for(let i = 0; i < userList.length; i++) {
                        if(userList[i].userId === userId) {
                            self.user = userList[i];
                        }
                    }
                })
                // eslint-disable-next-line no-console
                .catch(err => console.log(err));
        }
    }
</script>

<style scoped>
    #addRoom {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
    }

    .form {
        margin-bottom: 2%;
        width: 90%;
    }

</style>
