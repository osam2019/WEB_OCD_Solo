<template>
    <div class="cleanerItem">
        <p>
            <img class="rank" :src="user.rank + '.png'"/>{{user.userName}}
        </p>
        <p class="notCleaning area" v-if="user.todaysArea==='출타' || user.todaysArea === '야근' || user.todaysArea === '당직근무'">{{user.todaysArea}}</p>
        <p v-if="!(user.todaysArea==='출타' || user.todaysArea === '야근' || user.todaysArea === '당직근무') && !onlyTenMinutes" class="area"><i class="present el-icon-success"></i></p>
        <p class="cleaning area" v-if="!(user.todaysArea==='출타' || user.todaysArea === '야근' || user.todaysArea === '당직근무') && onlyTenMinutes">{{user.todaysArea}}</p>
    </div>
    
</template>

<script>
    export default {
        name: "CleanerItem",
        props: ['user', 'onlyTenMinutes']
    }
</script>

<style scoped>
    .cleanerItem {
        background: #f4f4f4;
        padding: 10px;
        border-bottom: 1px #ccc dotted;
        font-size: 20px;
        display:flex;
        justify-content: space-between;
        margin-right: 2%;
        margin-left:    2%;
    }
    .rank {
        width: 30px;
        margin-right:10px;
    }
    .present {
        color: #42b983;
    }
    .cleaning {
        color: #42b983;
    }
    .notCleaning {
        color: red;
    }


</style>