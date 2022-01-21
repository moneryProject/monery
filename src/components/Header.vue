<template>
    <header class="header">
        <h1 class="header__heading">ホーム</h1>
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
  &__heading{
    color: $headerTextColor;
    font-size: 1.4rem;
    font-weight: bold;
  }
}
</style>