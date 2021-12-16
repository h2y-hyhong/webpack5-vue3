<template>
    <div>Hello, X1AXX1A</div>
</template>
<script>
import { defineComponent } from "vue";
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";

export default defineComponent({
  setup() {
    let store = useStore();
    let router = useRouter();
    let route = useRoute();

    console.log("store", store);
    console.log("router", router);
    console.log("route", route);
    console.log('I am App Printing in the library');
  }  
})
</script>
