<template>
    <div id="cleanerList">
        <CleanerListComponent v-bind:onlyTenMinutes="onlyTenMinutes" v-bind:userList="userList"></CleanerListComponent>
        <el-button class="exit" type="danger" v-on:click="back">나가기</el-button>
    </div>
</template>

<script>
    import CleanerListComponent from '../components/components_cleaner_list/CleanerListComponent'

    export default {
        name: "ClearnerList",
        components: {
            CleanerListComponent
        },
        data() {
            return {
                userList: this.$route.params.userList,
                user: this.$route.params.user
            }
        },
        props: ['onlyTenMinutes'],
        methods: {
            back() {
                this.$emit("back");
            }
        },
        created() {
            let list = [];
            let roomId = this.$route.params.user.roomId;
            for(let i = 0; i < this.$route.params.userList.length; i++) {
                if(this.$route.params.userList[i].roomId === roomId) {
                    list.push(this.$route.params.userList[i]);
                }
            }
            this.userList = list;
        }
    }
</script>

<style scoped>
    #cleanerList {
        width: 100%;
        text-align: center;
    }
    .exit {
        margin-top: 2%;
        width:96%;
    }
</style>