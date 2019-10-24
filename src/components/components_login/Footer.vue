<template>
    <div id="footer">
        <el-button id="buttonCheck" type="danger" v-on:click="cheeckUser()">병사들 청소 잘하는지 확인</el-button>
        <div class="clear"></div>
    </div>
</template>

<script>
    export default {
        name: "Footer",
        methods: {
            cheeckUser() {
                this.$router.push('/checkuser');
            }
        }
    }
</script>

<style scoped>
    #footer {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
    }

    #buttonCheck {
        margin-right: 5%
    }
</style>
