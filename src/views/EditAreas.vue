<template>
    <div id="editAreas">
        <el-input class="form inputText" type="text" placeholder="방이름!" v-model="roomName"></el-input>
        <AreasList v-bind:areas="areas"></AreasList>
        <el-button class="form" type="success" v-on:click="editAreas">청소 하러 가자!</el-button>
        <el-button class="form last" type="danger" v-on:click="back">취 소</el-button>
    </div>
</template>

<script>
    import AreasList from "../components/components_edit_area/AreasList"
    import axios from 'axios';

    export default {
        name: "EditAreas",
        components: {
            AreasList
        },
        data() {
            return {
                areas: [],
                roomName: ''
            }
        },
        methods: {
            editAreas() {
                this.$emit('editAreas', this.roomName);
            },
            back() {
                this.$emit('back');
            }
        },
        created() {
            axios.get('./areas.json')
                .then(res => this.areas = res.data)
                // eslint-disable-next-line no-console
                .catch(err => console.log(err));
        }
    }
</script>

<style scoped>

    #editAreas {
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