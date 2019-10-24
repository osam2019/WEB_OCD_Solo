<template>
    <div id="main">
        <div class="nav">
            <Navigation v-bind:user="user"></Navigation>
        </div>
        <div>
            <ModuleContainer v-bind:user="user" v-bind:userList="userList"></ModuleContainer>
        </div>
    </div>

</template>

<script>
    import Navigation from '../components/Navigation';
    import ModuleContainer from "../components/ModuleContainer";

    export default {
        name: "Main",
        components: {
            Navigation,
            ModuleContainer
        },
        data() {
            return {
                user: this.$route.params.user,
                userList: this.$route.params.userList
            }
        }
    }
</script>

<style scoped>
    #main {
        max-width: 500px;
        width: 100%;
        height: auto;
        margin: 0 auto;
    }
    .nav {
        margin-bottom: 2%;
    }
</style>
