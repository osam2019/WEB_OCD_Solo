<template>
    <div class="areaItem">
        <p>
            {{area.areaName}}

            <el-switch
                    class="switch"
                    v-model="value2"
                    active-color="#13ce66"
                    inactive-color="#ff4949">
            </el-switch>
        </p>
        <div class="clear"></div>
    </div>
    
</template>

<script>
    export default {
        name: "AreaItem",
        props: ["area"],
        methods: {
        }, data() {
            return {
                value2: this.area.included
            }
        }
    }
</script>

<style scoped>
    .areaItem {
        background: #f4f4f4;
        padding: 10px;
        border-bottom: 1px #ccc dotted;
    }
    .switch {
        float:right;
    }
</style>