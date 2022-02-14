<template>
    <div class="nav">
        <ul class="nav__wrap">
            <li class="nav__wrap__content">
                <!-- home -->
                <router-link to="Home" class="nav__wrap__content__link" exact>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 10.6316L11.099 2L21 10.6316" stroke="#FFB29D" stroke-width="2" stroke-linecap="round"/>
                        <path d="M3.37646 8.94727V21.9999H18.426V8.94727" stroke="#FFB29D" stroke-width="2" stroke-linecap="round"/>
                        <path d="M8.12891 21.7895V14.6316H14.0695V21.7895" stroke="#FFB29D" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                    <span class="nav__wrap__content__link__text">ホーム</span>
                </router-link>
            </li>
            <li class="nav__wrap__content">
                <!-- search -->
                <router-link to="Search" class="nav__wrap__content__link" exact>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.9997 7.7419C19.9997 11.4805 17.0213 14.4838 13.3807 14.4838C9.74017 14.4838 6.76172 11.4805 6.76172 7.7419C6.76172 4.0033 9.74017 1 13.3807 1C17.0213 1 19.9997 4.0033 19.9997 7.7419Z" stroke="#FFB29D" stroke-width="2"/>
                        <path d="M1 19.9998L8.30155 12.2579" stroke="#FFB29D" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                    <span class="nav__wrap__content__link__text">検索</span>
                </router-link>
            </li>
            <li class="nav__wrap__content">
                <!-- message -->
                <router-link to="Message" class="nav__wrap__content__link" exact>
                    <svg width="24" height="24" viewBox="-1 -1 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.11182 15.5872L3.09037 15.7932L3.1638 15.4444L3.00007 15.1278L2.11182 15.5872ZM1.31576 19.3684L2.26747 19.6754L2.28354 19.6256L2.29431 19.5744L1.31576 19.3684ZM2.47366 20.7368L2.31928 19.7488H2.31928L2.47366 20.7368ZM6.42472 19.8943L6.88288 19.0054L6.54794 18.8328L6.18235 18.9241L6.42472 19.8943ZM20 11C20 15.9706 15.9706 20 11 20V22C17.0751 22 22 17.0751 22 11H20ZM11 2C15.9706 2 20 6.02944 20 11H22C22 4.92487 17.0751 0 11 0V2ZM2 11C2 6.02944 6.02944 2 11 2V0C4.92487 0 0 4.92487 0 11H2ZM3.00007 15.1278C2.36125 13.8925 2 12.4899 2 11H0C0 12.817 0.44135 14.5339 1.22357 16.0465L3.00007 15.1278ZM2.29431 19.5744L3.09037 15.7932L1.13327 15.3811L0.337214 19.1624L2.29431 19.5744ZM2.31928 19.7488C2.21111 19.7657 2.14095 19.7662 2.10157 19.7634C2.06309 19.7606 2.05967 19.7552 2.07862 19.7629C2.09958 19.7715 2.13192 19.7898 2.16461 19.8214C2.19653 19.8523 2.21609 19.8837 2.22662 19.9058C2.23637 19.9263 2.23685 19.9354 2.23543 19.9272C2.234 19.9188 2.23192 19.9 2.23278 19.8703C2.23363 19.8408 2.23719 19.807 2.24374 19.771C2.25028 19.735 2.25886 19.7021 2.26747 19.6754L0.364055 19.0614C0.24482 19.431 0.116576 20.1262 0.420701 20.7653C0.5918 21.1248 0.889743 21.4373 1.32067 21.6137C1.7279 21.7805 2.17764 21.7952 2.62804 21.7249L2.31928 19.7488ZM6.18235 18.9241C5.27098 19.1518 3.51719 19.5617 2.31928 19.7488L2.62803 21.7249C3.92052 21.5229 5.74795 21.0941 6.66709 20.8645L6.18235 18.9241ZM11 20C9.51438 20 8.11557 19.6408 6.88288 19.0054L5.96656 20.7832C7.47596 21.5612 9.18819 22 11 22V20Z" fill="#FFB29D"/>
                        <circle cx="7" cy="11" r="1" fill="#FFB29D"/>
                        <circle cx="11" cy="11" r="1" fill="#FFB29D"/>
                        <circle cx="15" cy="11" r="1" fill="#FFB29D"/>
                    </svg>
                    <span class="nav__wrap__content__link__text">メッセージ</span>
                </router-link>
            </li>
            <li class="nav__wrap__content">
                <!-- mypage -->
                <router-link to="Mypage" class="nav__wrap__content__link" exact>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="10" cy="5" r="4" stroke="#FFB29D" stroke-width="2"/>
                        <path d="M1 16.9525C1 14.1911 3.23858 11.9525 6 11.9525H14C16.7614 11.9525 19 14.1911 19 16.9525V19H1V16.9525Z" stroke="#FFB29D" stroke-width="2"/>
                    </svg>
                    <span class="nav__wrap__content__link__text">マイページ</span>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
</script>

<style lang="scss" scoped>
@import "@/sass/_vars";
.nav{
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 9999;
    background-color: #fff;
    &__wrap{
        width: 100vw;
        height: 70px;
        list-style: none;
        display: flex;
        justify-content: space-around;
        align-items: center;
        &__content{
            width: 25%;
            height: 75px;
            &__link{
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                text-decoration: none;
                &__text{
                    color: $navTextColor;
                    font-size: 1rem;
                }
            }
        }
    }
}
.router-link-active svg, 
.router-link-active path,
.router-link-active circle,
.router-link-active span{
    stroke: #FA744F;
    color: #FA744F;
}

</style>