<template>
    <header class="header">
        <h1 class="header__heading">ホーム</h1>
        <router-link to="Notice" class="header__link">
          <img src="../assets/home/bell.svg" alt="">
        </router-link>
    </header>
</template>

<style lang="scss" scoped>
@import "@/sass/_vars";
.header{
  width: 100vw;
  height: 80px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  margin-bottom: 6px;
  background-color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  &__heading{
    color: $headerTextColor;
    font-size: 1.4rem;
    font-weight: bold;
  }
  &__link{
    position: absolute;
    bottom: 0;
    right: 16px;
  }
}
</style>