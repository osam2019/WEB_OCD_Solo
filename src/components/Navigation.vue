<template>
    <div id="navigation">
        <div id="name">
            <div class="name"><img class="rank" :src="user.rank + '.png'"/> {{user.userName}} <i class="el-icon-edit editIcon"></i></div>
            <el-button class="logout" type="danger" v-on:click="logout()">Log Out</el-button>
        </div>
        <!--        <nav id="nav">-->
        <!--            <router-link class="spacing" to="/Login">로그아웃</router-link>-->
        <!--        </nav>-->
    </div>
</template>

<script>
    export default {
        name: "Navigation",
        data() {
            return {
            }
        },
        props: ["user"],
        methods: {
            logout() {
                this.$router.push("/login");
            }
        }
    }
</script>

<style scoped>
    #name {
        text-align: center;
        font-size: 30px;
        display: flex;
        justify-content: space-between;
    }

    #navigation {
        width: 100%;
    }
    .editIcon {
        font-size: 20px;
    }
    .rank {
        width: 40px;
    }

    .name {
        margin-left: 3%;
    }

    .logout {
        margin-right: 2%;
    }
</style>
