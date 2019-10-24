<template>
  <div>
    <h1>{{roomName}}</h1>
    <h2>{{roomCode}}</h2>
  </div>

</template>

<script>
    export default {
        name: "Main",
        data() {
            return {
                roomName: "방1",
                roomCode: "c1e4g53d",
                isAdmin: false
            }
        }
    }
</script>

<style scoped>

</style>
