<template>
  <div id="app">
    <TheHeader />
    <SpendBill />
    <MoneyLeft />
    <ItemsList />
    <ShoppingSpree />
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import SpendBill from "@/components/SpendBill.vue";
import MoneyLeft from "@/components/MoneyLeft.vue";
import ItemsList from "@/components/ItemsList.vue";
import ShoppingSpree from "@/components/ShoppingSpree.vue";
import TheFooter from "@/components/TheFooter.vue";

export default {
  name: "App",
  components: {
    TheHeader,
    SpendBill,
    MoneyLeft,
    ItemsList,
    ShoppingSpree,
    TheFooter
  }
};
</script>

<style lang="scss">
@import "./assets/scss/imports.scss";
@import "./assets/scss/variables.scss";
@import "./assets/scss/reset.scss";
@import "./assets/scss/header.scss";
@import "./assets/scss/spendBill.scss";
@import "./assets/scss/moneyLeft.scss";
@import "./assets/scss/itemsList.scss";
@import "./assets/scss/shoppingSpree.scss";
@import "./assets/scss/commandButtons.scss";
@import "./assets/scss/theFooter.scss";
@import "./assets/scss/media.scss";
</style>
