<template>
    <div>Hello, X1AXX1A</div>
</template>
<script>
import { 
  defineComponent, 
  getCurrentInstance, 
  inject 
} from "vue";
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";

export default defineComponent({
  setup() {
    const $axios = inject("$axios");
    const { proxy } = getCurrentInstance();
    let store = useStore();
    let router = useRouter();
    let route = useRoute();
    
    console.log("this", getCurrentInstance());
    console.log("store", store);
    console.log("router", router);
    console.log("route", route);
    // provide, inject 사용하여 전역처럼 사용
    console.log("$axios", $axios);

    //전역 프로퍼티를 사용
    console.log("$axios2", proxy.$axios2);
    console.log('I am App Printing in the library');
  }  
})
</script>
