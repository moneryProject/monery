<template>
    <div class="profile">
        <header class="header">
            <h1 class="header__heading">アカウント登録完了</h1>
        </header>
        <main class="profile__wrap">
            <div class="profile__wrap__input">
                <div class="profile__wrap__img">
                    <img src="../../assets/signup/human.png" alt="">
                </div>
                <section class="profile__wrap__input__box">
                    <label class="profile__wrap__input__box__heading">なまえ</label><br>
                    <input type="text" placeholder="入力してください" maxlength="15"/>
                    <div class="profile__wrap__input__box__border"></div>
                </section>
                <section class="profile__wrap__input__box">
                    <label class="profile__wrap__input__box__heading">性別</label><br>
                    <div class="profile__wrap__input__box__sex">
                        <label for=""><input type="radio" name="性別" value="男" /> 男</label>
                        <label for=""><input type="radio" name="性別" value="女" /> 女</label>
                        <label for=""><input type="radio" name="性別" value="指定なし" /> 指定なし</label>
                    </div>
                    <div class="profile__wrap__input__box__border"></div>
                </section>
                <section class="profile__wrap__input__box">
                    <label class="profile__wrap__input__box__heading">生年月日</label><br>
                    <input type="date" id="start" name="trip-start" value="1999-01-01">
                    <div class="profile__wrap__input__box__border"></div>
                </section>
            </div>
            <router-link to="Home" class="profile__wrap__link">プロフィールを登録する</router-link>
            <router-link to="Home" class="profile__wrap__prelink">スキップする</router-link>
        </main>
    </div>
</template>

<style lang="scss" scoped>
@import "@/sass/_vars";
@import "@/sass/header";
.profile__wrap{
    margin-top: 150px;
    &__img{
        text-align: center;
        margin-bottom: 25px;
    }
    &__input{
        width: 295px;
        margin: 0 auto;
        &__box{
            width: 100%;
            margin-bottom: 25px;
            &__heading{
                color: #585858;
                font-size: 1.2rem;
                font-weight: 700;
                letter-spacing: 0.8px;
                margin-bottom: 8px;
            }
            &__sex{
                display: flex;
                align-items: center;
                margin: 8px 0;
                label{
                    display: flex;
                    align-items: center;
                    margin-right: 13px;
                }
            }
            input{
                padding: 8px 0;
                font-size: 1.2rem;
                font-weight: 700;
                letter-spacing: 0.8px;
            }
            &__border{
                width: 100%;
                border-bottom: 1px solid #F3F3F3;
            }
        }
    }
    &__link{
        display: block;
        width: 295px;
        line-height: 48px;
        background-color: #EB734B;
        color: #fff;
        font-size: 1.4rem;
        text-align: center;
        text-decoration: none;
        border-radius: 112px;
        margin: 60px auto 0;
    }
    &__prelink{
        display: block;
        width: 295px;
        line-height: 48px;
        background-color: #fff;
        color: #EB734B;
        font-size: 1.4rem;
        text-align: center;
        text-decoration: none;
        border-radius: 112px;
        margin: 24px auto 0;
        border: 2px solid #EB734B
    }
}
::placeholder {
  color: #D8D8D8;
}
</style>