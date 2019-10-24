<template>
  <div>
    <h2>{{rank}} {{userName}}</h2>
    <nav>
      <router-link class="spacing"
                   tag="li"
                   v-for="routes in links"
                   v-bind:key="routes.id"
                   :to="`${routes.page}`">{{routes.text}}</router-link>

    </nav>
  </div>
</template>

<script>
    export default {
        name: "Navigation",
        data() {
            return {
                userName: "서동성",
                rank: 3,
                links: [
                    {
                        id: 1,
                        text: 'Main',
                        page: '/Main'
                    },
                    {
                        id: 2,
                        text: 'AddRoom',
                        page: '/AddRoom'
                    },
                    {
                        id: 3,
                        text: 'Login',
                        page: '/Login'
                    }
                ]
            }
        }
    }
</script>

<style scoped>
  .spacing {
    Margin-right: 10px;
  }

</style>
