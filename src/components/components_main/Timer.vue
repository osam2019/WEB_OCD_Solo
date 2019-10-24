<template>
    <div id="timer">
        <countdown v-if="isCleaningTime" :time="time3" ref="countdown" :interval="1000" tag="h1" @end="onCleaningTimeEnd()">

        </countdown>
        <div v-if="!isCleaningTime">
            <h3 v-bind:class="[tenMinRemaining ? 'halfH3' : '']">청소까지:</h3>
            <countdown :time="time2" :interval="1000" tag="h1" @end="on10MinCountDownEnd()"></countdown>
            <!-- 10분전에 청소당번짜야되기 때문에 -->
            <countdown :time="time1" :interval="1000" tag="h1" @end="onRealCountDownEnd()">
                <template slot-scope="props">
                    <div id="theTimer">
                        <div class="block">
                            <p class="digit" v-bind:class="[tenMinRemaining ? 'halfSize' : 'fullSize']">{{ props.hours
                                }}</p>
                            <p v-if="!(props.hours === 0 && props.minutes < 10)" class="text">Hours</p>
                        </div>
                        <div class="block digit colon" v-bind:class="[tenMinRemaining ? 'halfSize' : 'fullSize']">
                            :
                        </div>
                        <div class="block">
                            <p class="digit" v-bind:class="[tenMinRemaining ? 'halfSize' : 'fullSize']">{{ props.minutes
                                }}</p>
                            <p v-if="!(props.hours === 0 && props.minutes < 10)" class="text">Minutes</p>
                        </div>
                        <div class="block digit colon" v-bind:class="[tenMinRemaining ? 'halfSize' : 'fullSize']">
                            :
                        </div>
                        <div class="block">
                            <p class="digit" v-bind:class="[tenMinRemaining ? 'halfSize' : 'fullSize']">{{ props.seconds
                                }}</p>
                            <p v-if="!(props.hours === 0 && props.minutes < 10)" class="text">Seconds</p>
                        </div>
                    </div>
                </template>
            </countdown>

        </div>
    </div>
</template>

<script>
    export default {
        name: "Timer",
        data: function () {
            this.tenMinRemaining = false;
            let now = new Date();
            let cleanTime = new Date();
            let tenMinBeforeCleanTime = new Date();
            let endCleaningTime = new Date();
            // let cleaningHour = 20;
            // if(now.getHours() > 20) {
            //     cleaningHour = 44;
            // }
            // let cleaningMinutes = 30;
            // let cleaningSeconds = 0;
            let cleaningHour = now.getHours();
            let cleaningMinutes = now.getMinutes();
            let cleaningSeconds = now.getSeconds() + 10;
            cleanTime.setHours(cleaningHour, cleaningMinutes, cleaningSeconds);
            tenMinBeforeCleanTime.setHours(cleaningHour, cleaningMinutes, cleaningSeconds - 5);
            endCleaningTime.setHours(cleaningHour, cleaningMinutes, cleaningSeconds + 5);

            return {
                tenMinRemaining: false,
                isCleaningTime: false,
                counting: false,
                time1: cleanTime - now,
                time2: tenMinBeforeCleanTime - now,
                time3: endCleaningTime - now
            };
        },
        methods: {
            on10MinCountDownEnd() {
                this.tenMinRemaining = true;
                this.$emit("tenMinLeft");
            },
            onRealCountDownEnd() {
                this.isCleaningTime = true;
                this.$emit("cleaningTime");
            },
            onCleaningTimeEnd() {
                this.isCleaningTime = false;
                this.tenMinRemaining = false;
                this.$emit("cleaningTimeEnd");
            }
        }

    }
</script>

<style scoped>
    @import url(https://fonts.googleapis.com/css?family=Roboto+Condensed:400|Roboto:100);

    h1 {
        font-size: 75px;
    }

    h3 {
        font-size: 50px;
    }

    .halfH3 {
        font-size: 30px;
    }

    #timer {
        text-align: center;
        margin-bottom: 2%;
    }

    .colon {
    }

    #theTimer {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    .block {
        display: flex;
        flex-direction: column;
    }

    .text {
        color: #333333;
        font-size: 20px;
        font-family: 'Roboto Condensed', serif;
        text-align: center;
    }

    .fullSize {
        font-size: 100%
    }


    .halfSize {
        font-size: 50%
    }

    .digit {
        color: #1abc9c;
        font-weight: 100;
        font-family: 'Roboto', serif;
        margin: 1%;
        text-align: center;
    }
</style>