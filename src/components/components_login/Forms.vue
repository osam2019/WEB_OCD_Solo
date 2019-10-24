<template>
    <div id="forms">
        <el-input class="form inputText" type="text" placeholder="군번" v-model="inputId"></el-input>
        <el-input class="form inputText" type="password" placeholder="패스워드" v-model="inputPassword"></el-input>
        <el-button class="form button" type="success" v-on:click="login()">청소하러 가자!</el-button>
        <el-button class="form button last" type="primary" v-on:click="signup()">신병임?</el-button>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: "Forms",
        data() {
            return {
                inputId: '',
                inputPassword: '',
                userList: []
            }
        },
        methods: {
            login() {
                let user = null;
                // eslint-disable-next-line no-console
                console.log(this.userList)
;                for(let i = 0; i < this.userList.length; i++) {
                    if(this.inputId === this.userList[i].userId) {
                        if(this.inputPassword === this.userList[i].password) {
                            user = this.userList[i];
                        }
                    }
                }
                if(user !== null) {
                    this.$router.push({
                        name: 'Main',
                        params: {
                            user: user,
                            userList: this.userList
                        }

                    });
                } else {
                    alert("아이디 또는 패스워드를 확인해 주세요");
                }
            },
            signup() {
                this.$router.push('/signup');
            }
        },
        created() {
            axios.get('users.json')
                .then(res => this.userList = res.data)
                // eslint-disable-next-line no-console
                .catch(err => console.log(err));
        }

    }
</script>

<style scoped>
    #forms {
        width: 100%;
        height: 100%;
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .form {
        margin-bottom: 2%;
        min-width: 300px;
        max-width: 504px;
        width: 90%;
    }
</style>
