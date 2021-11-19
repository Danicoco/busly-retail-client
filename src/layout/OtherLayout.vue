<template>
  <div class="other-layout">
    <main class="layout-content">
      <div class="brand">
        <img class="logo" src="@/assets/RapidPlayLogo.png" alt="logo" id="logo" />
      </div>
      <router-view />
    </main>
  </div>
</template>

<style lang="scss" scoped>
.other-layout {
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  height: 100vh;
  // height: 100%;
  // margin: 0;
  // margin-top: -50px;
  padding: 2rem 0;

  .layout-content {
    margin-left: auto;
    margin-right: auto;

    .brand {
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;

      img {
        width: 130px;
        height: 76px;
        margin-bottom: 30px;
      }
    }
  }
}

@media only screen and (min-width: 480px) {
  .layout-content {
    // width: 0px;
    margin-left: auto;
    margin-right: auto;
    //   display: flex;
    //   flex-direction: column;
    //   justify-content: center;
    //   border: 1px solid green;

    img {
      margin-top: 30px;
    }
  }
}

@media only screen and (max-width: 880px) {
  .layout-content {
    width: 450px;
    margin-left: auto;
    margin-right: auto;
    // height: 100vh;
  }
}
</style>
