<template>
    <div id="footer">
        <p class="roomCode"> Code: {{user.roomId}} <i class="el-icon-document-copy"></i></p>
        <div class="buttonContainer">
            <el-button class="button" type="success" v-on:click="cleanerList">인원현황</el-button>
            <el-button class="button" type="primary" v-on:click="editAreas">구역편집</el-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Footer",
        props: ['user', 'userList'],
        methods: {
            cleanerList() {
                this.$emit("cleanerList");
            },
            editAreas() {
                this.$emit("editAreas");
            }
        }
    }
</script>

<style scoped>
    #footer {
        margin-top: 2%;
        width: 100%;
        display: flex;
        justify-content: space-between;
    }

    .roomCode {
        width: 50%;
        margin-left: 2%;
        line-height: 40px;

    }

    .buttonContainer {
        width:50%;
        margin-right: 2%;
        text-align: right;
    }

    .button {
        width: 48%;
        margin-left: 1% !important;
        margin-right: 1% !important;
        text-align: center;
    }
</style>