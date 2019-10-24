<template>
    <div id="signUp">
        <Logo></Logo>
        <el-input class="form inputText" type="text" placeholder="군번"></el-input>
        <el-select class="form" v-model="value" placeholder="Select" size="medium">
            <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value" size="medium">
            </el-option>
        </el-select>
        <el-input class="form inputText" type="text" placeholder="이름"></el-input>
        <el-input class="form inputText" type="password" placeholder="패스워드"></el-input>
        <el-input class="form inputText" type="password" placeholder="패스워드 확인"></el-input>
        <el-button class="form button" type="success" v-on:click="login()">청소하러 가자!</el-button>
        <el-button class="form button" type="danger" v-on:click="back()">취 소</el-button>
    </div>
</template>

<script>
    import Logo from '../components/components_login/Logo'

    export default {
        name: "SignUp",
        components: {
            Logo
        },
        data() {
            return {

                options: [{
                    value: 1,
                    label: '이등병'
                }, {
                    value: 2,
                    label: '일등병'
                }, {
                    value: 3,
                    label: '상등병'
                }, {
                    value: 4,
                    label: '병장'
                }],
                value: 1
            }
        },
        methods: {
            login() {
                alert("서버가 아직 활성화 되지 않은 관계로 users.json 파일에 있는 정보들로 로그인 해주시기바랍니다. ")
            },
            back() {
                this.$router.go(-1);
            }
        }
    }
</script>

<style scoped>

    #signUp {
        width: 100%;
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