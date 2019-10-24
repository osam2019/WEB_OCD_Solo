<template>
    <div id="cleanerList">
        <CleanerListComponent v-bind:onlyTenMinutes="onlyTenMinutes" v-bind:userList="userList"></CleanerListComponent>
        <div id="buttonsContainer">
            <img class="kakaoShareButton" src="kakaolink_btn_medium.png" v-on:click="share"/>
            <el-button class="exit" type="danger" v-on:click="back">나가기</el-button>

        </div>
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
            },
            share() {
                alert("아직 준비되지 않았습니다.!");
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
    #buttonsContainer {
        margin-top: 2%;
        display: flex;
        margin-left: 2%
    }
    .exit {
        width:84%;
    }
    .kakaoShareButton {
        width: 12%;
        margin-right: 2%;
    }
</style>