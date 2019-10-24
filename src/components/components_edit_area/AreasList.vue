<template>
    <div id="areasList">
        <div v-bind:key="area.id" v-for="area in areas">
            <AreaItem v-bind:area="area"></AreaItem>
        </div>
    </div>
</template>

<script>
    import AreaItem from "../components_edit_area/AreaItem"
    export default {
        name: "AreasList",
        components: {
            AreaItem
        },
        props: ["areas"]
    }
</script>

<style scoped>
    #areasList {
        width: 90%;
        margin-bottom: 1%;
        margin-top: 1%;
    }
</style>