<template>
  <div class="login">
    <h2>Login</h2>

    <div class="card">
      <form @submit.prevent="handleSubmit">
        <div>
          <span>
            <label for="">Mobile Number</label>
            <div>
              <input
                type="text"
                placeholder="+555-555-555"
                v-model="mobile"
                id="idMobile"
                autofocus
                required
              />
            </div>
          </span>
        </div>

        <div>
          <span>
            <label for="">Password</label>
            <div>
              <input
                :type="passwordFieldType"
                v-model="password"
                @keypress.enter="handleSubmit"
                toggleMask
                :feedback="false"
                placeholder="*******"
                id="idPassword"
                required
              />

              <i
                v-if="togglePassword === true"
                class="fa fa-eye"
                id="right"
                @click="viewPassword"
              />

              <i
                v-else
                class="fa fa-eye-slash"
                id="right"
                @click="viewPassword"
              />
            </div>
          </span>
        </div>

        <!-- <router-link :to="{ name: 'ForgotPassword' }">
          <p class="forgot">Forgot password?</p>
        </router-link> -->

        <CSButton class="button" text="Login" size="large" :loading="loading" />
      </form>
    </div>

    <Toast v-if="showToastModal" @close-modal="showToastModal = false">
      <SingleToast
        :desc="toastMsg"
        :toastType="toastType"
        @close-modal="showToastModal = false"
      />
    </Toast>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import CSButton from "@/components/CSButton.vue";
import router from "@/router";
import Toast from "@/components/toast/Toast.vue";
import SingleToast from "@/components/toast/SingleToast.vue";

export default defineComponent({
  name: "Login",
  components: {
    CSButton,
    Toast,
    SingleToast,
  },

  setup() {
    const loading = ref(false);
    const togglePassword = ref(false);
    const mobile = ref("");
    const password = ref("");
    const passwordFieldType = ref("password");
    const idMobile = ref(false);
    const idPassword = ref(false);
    const showToastModal = ref(false);
    const toastMsg = ref("");
    const toastType = ref("");

    const validateInput = () => {
      const mobileValid = !!mobile.value;
      const passValid = !!password.value;
      return mobileValid && passValid;
    };

    const viewPassword = () => {
      passwordFieldType.value =
        passwordFieldType.value === "password" ? "text" : "password";
      togglePassword.value = !togglePassword.value;
    };

    const url = process.env.ONE_RAPID_PLAY_URL;

    const handleSubmit = () => {
      loading.value = true;
      const data = {
        mobile_number: mobile.value,
        password: password.value,
      };

      // loading.value = false;
          toastMsg.value = "Toast message";
          toastType.value = "success";
          showToastModal.value = true;

      // adminStore.actions.adminLogin(data).then((res) => {
      //   console.log(url);
      //   if (res.success) {
      //     loading.value = false;
      //     toastMsg.value = res.message;
      //     toastType.value = "success";
      //     showToastModal.value = true;
      //     router.push("/");

      //   } else {
      //     loading.value = false;

      //     toastMsg.value = res.message;
      //     toastType.value = "danger";
      //     showToastModal.value = true;
      //   }
      // });
    };

    return {
      loading,
      togglePassword,
      passwordFieldType,
      mobile,
      password,
      idMobile,
      idPassword,
      showToastModal,
      toastMsg,
      toastType,

      validateInput,
      viewPassword,
      handleSubmit,
    };
  },
});
</script>

<style lang="scss">
.login {
  // .card {
  //   width
  margin: 0px auto;
  // padding: 50px 0;
  height: 100%;

  .card {
    width: 450px;
    background: #fff;
    padding: 1.5rem;
    border-radius: 0.5rem;
    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.1);
    margin: 0 auto;

    form {
      > div {
        span {
          display: flex;
          flex-direction: column;
          margin: 30px 0;

          label {
            font-weight: 600;
            margin: 5px 0;
          }

          > div {
            display: flex;
            position: relative;

            #left {
              margin-right: -35px;
              margin-top: auto;
              margin-bottom: auto;
              z-index: 10;
            }

            #right {
              // margin-left: -25px;
              // margin-left: -10%;
              // margin-top: auto;
              // margin-bottom: auto;
              // position: absolute;
              z-index: 10;
            }
            #idPassword {
              width: 91%;
            }
            input {
              border: 1px solid;
              border-color: #cee3ff;
              border-radius: 4px;
              padding: 0 1rem;
              height: 48px;
              width: 100%;
              outline: none;

              &:focus {
                border-color: #0d142f;
              }

              &:disabled {
                border-color: #e6e6e6;
                background-color: #f5f5f5;
                color: #bdbdbd;
              }

              &.invalid {
                border-color: red;
                font-weight: 600;
              }
            }
          }
        }
      }
      a {
        text-decoration: none;
        color: #000;

        .forgot {
          float: right;
          font-size: 14px;
          margin-top: -5px;
        }
      }

      .button {
        width: 100%;

        &:hover {
          cursor: pointer;
        }
      }
    }
  }
  // }
}

@media screen and (max-width: 480px) {
  .login {
    height: 100%;
    padding: 0 10px;
    .card {
      width: 250px;

      form {
        margin: 0 auto;
      }
    }
  }
}

@media screen and (max-width: 880px) {
  .login {
    .card {
      width: 250px;

      form {
        margin: 0 auto;
      }
    }
  }
}
</style>
