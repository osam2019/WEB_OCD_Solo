<template>
    <div id="cleanerList">
        <div v-bind:key="user.id" v-for="user in userList">
            <CleanerItem v-bind:onlyTenMinutes="onlyTenMinutes" v-bind:user="user"></CleanerItem>
        </div>
    </div>
</template>

<script>
    import CleanerItem from "./CleanerItem"
    export default {
        name: "CleanerList",
        props: ['userList', 'onlyTenMinutes'],
        components: {
            CleanerItem
        }
    }
</script>

<style scoped>

</style>