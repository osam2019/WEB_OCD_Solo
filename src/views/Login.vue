<template>
  <div>
    <Logo></Logo>
    <Forms></Forms>
    <Footer></Footer>
  </div>

</template>

<script>
    import Logo from '../components/components_login/Logo'
    import Forms from '../components/components_login/Forms'
    import Footer from '../components/components_login/Footer'

    export default {
        name: "Login",
        components: {
            Logo,
            Forms,
            Footer
        }
    }
</script>

<style scoped>

</style>
