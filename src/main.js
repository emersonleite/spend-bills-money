import Vue from "vue";
import App from "./App.vue";
import store from "./store";

Vue.config.productionTip = false;

export const BillsMoney = 90000000000;

Vue.filter("toDollar", (valor) => {
  valor = Number(valor);
  if (!isNaN(valor)) {
    return valor
      .toLocaleString("en-us", {
        style: "currency",
        currency: "USD",
      })
      .slice(0, -3);
  } else {
    return "";
  }
});

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
