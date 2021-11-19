<template>
    <div class="not-found">
        <div class="text-info">
            <h1>404 <small> Not found </small></h1>
            <p>
                The page <b>{{ $route.fullPath }}</b> doesn't exist
            </p>

            <div class="buttons">
                <CButton @click="$router.back()">
                    <i class="fa fa-arrow-left"></i> Go Back
                </CButton>
                <CButton @click="$router.push('/')">
                    <i class="fa fa-home"></i> Go Home
                </CButton>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import CButton from '@/components/CButton.vue';

export default defineComponent({
    name: '404',
    components: {
        CButton
    }
});
</script>
<style lang="scss" scoped>
//   h1{
//   font-size: 6rem;
// }
// .not-found h1 small {
//   font-size: 1.5rem;
//   display: block;
//   font-weight: 400;
// }
// .not-found p {
//   font-size: 2rem;
// }
// .not-found a {
//   font-size: 2rem;
//   text-decoration: none;
// }

.not-found {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 50px;

    .text-info {
        text-align: center;
        h1 {
            font-size: 6rem;

            small {
                font-size: 1.5rem;
                display: block;
                font-weight: 400;
            }
        }
        p {
            font-size: 2rem;
        }
        a {
            font-size: 2rem;
            text-decoration: none;
        }
        .buttons {
            display: flex;
            justify-content: space-around;
            align-items: center;
            margin: 60px;

            button {
                // width
            }
        }
    }
}
</style>
