<template>
    <div id="body">
        <div v-if="tenMinRemaining" class="container">
            <h3>오늘은:</h3>
            <h1>{{user.todaysArea}}!</h1>
        </div>
        <Timer @tenMinLeft="tenMinLeft()" @cleaningTime="cleaningTime()" @cleaningTimeEnd="cleaningTimeEnd()"></Timer>
        <div v-if="isCleaningTime" class="container">
            <h3>지금은 청소시간!</h3>
            <h3>스마트폰 쓰지마!</h3>
        </div>
        <div v-if="!tenMinRemaining" class="radioContainer">
            <el-radio class="cell" v-model="radio1" label="1" border size="medium" @change="toggleSelect">청소해요
            </el-radio>
            <el-radio class="cell" v-model="radio1" label="2" border size="medium" @change="toggleSelect">청소안해요
            </el-radio>
            <div class="cell emptydiv"></div>
            <el-select v-if="showSelect" class="cell" v-model="value" placeholder="Select" size="medium" @change="changeTodaysArea">
                <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value" size="medium">
                </el-option>
            </el-select>
        </div>
    </div>
</template>

<script>
    import Timer from './Timer'

    export default {
        name: "Body",
        components: {
            Timer
        },
        props: ['user'],
        data() {
            return {
                tenMinRemaining: false,
                isCleaningTime: false,
                radio1: '1',
                options: [{
                    value: '출타',
                    label: '출타'
                }, {
                    value: '야근',
                    label: '야근'
                }, {
                    value: '당직근무',
                    label: '당직근무'
                }],
                value: '출타',
                showSelect: false
            }
        },
        created() {
           if(this.user.todaysArea === "출타" || this.user.todaysArea === "야근" || this.user.todaysArea === "당직근무") {
               this.radio1 = '2';
               this.value = this.user.todaysArea;
               this.showSelect = true;
           }
        },
        methods: {
            tenMinLeft() {
                this.tenMinRemaining = true;
                this.$emit('tenMinRemaining');
            },
            cleaningTime() {
                this.isCleaningTime = true;
            },
            cleaningTimeEnd() {
                this.tenMinRemaining = false;
                this.isCleaningTime = false;
                this.$emit('cleaningTimeEnd');
            },
            toggleSelect() {
                this.showSelect = !this.showSelect;
                this.changeTodaysArea();
            },
            changeTodaysArea() {
                if (this.radio1 === '2') {
                    this.$emit('notCleaning', this.value);
                } else {

                    this.$emit('cleaning', '화장실'); // 일단 화장실로 설정
                }
            }
        }
    }
</script>

<style scoped>
    .container {
        text-align: center;
    }

    h3 {
        font-size: 50px;
    }

    h1 {
        font-size: 80px;
    }

    .cell {
        width: 47%;
        margin: 0 1% 1% 0 !important;

    }

    .emptydiv {
    }

    .radioContainer {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        margin-left: 2%;

    }
</style>