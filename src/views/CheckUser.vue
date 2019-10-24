<template>

    <div id="checkUser">
        <el-input class="form inputText" type="text" placeholder="확인하고 싶은 소대 방 코드입력!"></el-input>
        <el-button class="form button" type="success" v-on:click="check()">확 인!</el-button>
        <el-button class="form button" type="danger" v-on:click="cancel()">취 소</el-button>
    </div>
</template>

<script>

    export default {
        name: "CheckUser",
        methods: {
            check() {

            },
            cancel() {
                this.$router.go(-1);
            }
        }
    }
</script>

<style scoped>
    #checkUser {
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