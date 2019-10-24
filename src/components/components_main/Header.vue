<template>
    <div id="mainHeader">
        <h2 id="h2RoomName">{{user.roomName}}</h2>
        <el-button id="buttonOut" type="danger" icon="el-icon-close" circle v-on:click="exitRoom()"></el-button>
    </div>
</template>

<script>
    export default {
        name: "Header",
        methods: {
            exitRoom() {
                this.$emit("exitRoom");
            }
        },
        props: ['user'],
        created() {
        }
    }
</script>

<style scoped>
    h2 {
        margin:2%;
    }
    button {
        margin:2%;
    }
    #mainHeader {
        display: flex;
        justify-content: space-between;
    }
    #h2RoomName {
    }

    #buttonOut {
    }

</style>