<template>
    <div class="amount">
        <header class="header">
            <router-link to="PaymentMethod" class="header__link">
                <img src="../../assets/back-icon.svg" alt="戻るボタンアイコン">
            </router-link>
            <h1 class="header__heading">金額入力</h1>
        </header> 
        <div class="amount__wrap">
            <div class="amount__wrap__icon">
                <img src="../../assets/home/human-icon.png" alt="">
            </div>
            <p class="amount__wrap__text">木田さんへ送る</p>
            <table class="amount__wrap__calc">
                <tr>
                    <td colspan="3"><input type="text" v-model="output" class="amount__wrap__money"></td>
                </tr>
                <div class="amount__wrap__calc__box">
                    <tr v-for="(row, key) in items" :key="key" class="amount__wrap__calc__box__column">
                        <td v-for="(item, key) in row" :key="key">
                            <button v-on:click="calc(item)" class="amount__wrap__calc__box__column__cell">{{ item }}</button>
                        </td>
                    </tr>
                    <div class="amount__wrap__calc__box__clear">
                        <button value="C" v-on:click="calc('C')" class="amount__wrap__calc__box__clear__cell">×</button>
                        <button value="C" v-on:click="calc('C')" class="amount__wrap__calc__box__clear__cell">C</button>
                        <button value="C" v-on:click="calc('C')" class="amount__wrap__calc__box__clear__cell">AC</button>
                    </div>
                    <button class="amount__wrap__calc__box__next" @click="confirm">次へ</button>
                </div>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return{
            output: '',
            items: [
                ['1', '2', '3',],
                ['4', '5', '6',],
                ['7', '8', '9',],
                ['0', '00',]
            ]
        }
    },
    methods: {
        calc: function (cmd) {
            if(cmd === 'C'){
                this.output = '0'
            }else if(this.output === '0') {
                this.output = cmd
            }else{
                this.output += cmd
            }
        },
        confirm: function(){
            localStorage.setItem('obj', JSON.stringify({
              output: this.output,
            }))
            this.$router.push('PaymentMoney')
        }
    }
}
</script>

<style lang="scss" scoped>
@import "@/sass/_vars";
@import "@/sass/header";
.amount__wrap{
    text-align: center;
    color: $mainTextColor;
    margin-top: 120px;
    &__icon{
        margin-bottom: 16px;
    }
    &__text{
        font-size: 1.2rem;
        font-weight: bold;
    }
    &__money{
        width: 100%;
        color: $payTextColor;
        font-size: 4.2rem;
        font-weight: bold;
        margin: 32px 0 40px;
        letter-spacing: 1px;
        text-align: center;
        span{
            font-size: 2.2rem;
        }
    }
    &__calc{
        &__box{
            position: relative;
            &__column{
                display: block;
                margin-left: 50px;
                td{
                    width: 58px;
                    height: 56px;
                    line-height: 58px;
                    margin: 0 21px 16px 0;
                    &:last-child{
                        margin: 0;
                    }
                }
                &__cell{
                    width: 58px;
                    height: 56px;
                    line-height: 58px;
                    background-color: #F3F3F3;
                    border-radius: 100%;
                    color: #4F4F4F;
                    font-size: 1.8rem;
                    font-weight: 700;
                    margin-right: 15px;
                }
            }
            &__clear{
                display: flex;
                flex-direction: column;
                position: absolute;
                right: 50px;
                top: 0;
                &__cell{
                    width: 58px;
                    height: 56px;
                    line-height: 58px;
                    background-color: #F3F3F3;
                    border-radius: 100%;
                    color: #4F4F4F;
                    font-size: 1.8rem;
                    font-weight: 700;
                    margin-bottom: 10px;
                }
            }
            &__next{
                width: 137px;
                height: 48px;
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: #EB734B;
                border-radius: 112px;
                color: #fff;
                font-size: 1.4rem;
                font-weight: bold;
                letter-spacing: 2px;
                text-decoration: none;
                margin-top: 5px;
                position: absolute;
                right: 50px;
                bottom: 10px;
            }
        }
    }
}
</style>