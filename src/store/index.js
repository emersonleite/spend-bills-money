import Vue from "vue";
import Vuex from "vuex";
/* import { BillsMoney } from "@/main.js"; */

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    BillsMoney: 90000000000,
    moneyLeft: 90000000000,
    spree: false,
    arrayItems: [
      {
        name: "Big Mac",
        cost: 2,
        amount: 0,
        src: "bigmac",
      },
      {
        name: "Cup of Coffee",
        cost: 4,
        amount: 0,
        src: "cupofcoffee",
      },
      { name: "Book", cost: 15, amount: 0, src: "book" },
      { name: "Video Game", cost: 60, amount: 0, src: "videogame" },
      { name: "Charity", cost: 100, amount: 0, src: "charity" },
      { name: "Headphones", cost: 200, amount: 0, src: "headphones" },
      { name: "Air Jordans", cost: 200, amount: 0, src: "airjordans" },
      { name: "Skateboard", cost: 300, amount: 0, src: "skateboard" },
      { name: "Smartphone", cost: 600, amount: 0, src: "smartphone" },
      { name: "Gaming Console", cost: 600, amount: 0, src: "gamingconsole" },
      { name: "Bike", cost: 800, amount: 0, src: "bike" },
      { name: "Drone", cost: 800, amount: 0, src: "drone" },
      {
        name: "Designer Handbag",
        cost: 1000,
        amount: 0,
        src: "designerhandbag",
      },
      { name: "Jet Ski", cost: 8000, amount: 0, src: "jetski" },
      { name: "4K TV", cost: 10000, amount: 0, src: "4ktv" },
      { name: "Diamond Ring", cost: 10000, amount: 0, src: "diamondring" },
      { name: "Rolex", cost: 15000, amount: 0, src: "rolex" },
      { name: "Speed boat", cost: 30000, amount: 0, src: "speedboat" },
      { name: "Food Truck", cost: 50000, amount: 0, src: "foodtruck" },
      { name: "Tesla", cost: 70000, amount: 0, src: "tesla" },
      { name: "Monster Truck", cost: 150000, amount: 0, src: "monstertruck" },
      { name: "Helicopter", cost: 175000, amount: 0, src: "helicopter" },
      { name: "Ferrari", cost: 200000, amount: 0, src: "ferrari" },
      { name: "Lamborghini", cost: 200000, amount: 0, src: "lamborghini" },
      { name: "Firetruck", cost: 200000, amount: 0, src: "firetruck" },
      { name: "Townhouse", cost: 200000, amount: 0, src: "townhouse" },
      { name: "Bar", cost: 300000, amount: 0, src: "bar" },
      { name: "Pizza Shop", cost: 500000, amount: 0, src: "pizzashop" },
      { name: "Bar of Gold", cost: 500000, amount: 0, src: "barofgold" },
      { name: "Superbowl Ad", cost: 5000000, amount: 0, src: "superbowlad" },
      { name: "Beach House", cost: 5000000, amount: 0, src: "beachhouse" },
      { name: "Yacht", cost: 10000000, amount: 0, src: "yacht" },
      { name: "F16", cost: 15000000, amount: 0, src: "f16" },
      { name: "Skyscraper", cost: 50000000, amount: 0, src: "skyscraper" },
      { name: "Mansion", cost: 50000000, amount: 0, src: "mansion" },
      { name: "Rocket", cost: 60000000, amount: 0, src: "rocket" },
      {
        name: "Passenger Jet",
        cost: 150000000,
        amount: 0,
        src: "passengerjet",
      },
      {
        name: "Mona Lisa",
        cost: 780000000,
        amount: 0,
        limit: 1,
        src: "monalisa",
      },
      { name: "Cruise Ship", cost: 1200000000, amount: 0, src: "cruiseship" },
      {
        name: "NBA Team",
        cost: 1300000000,
        amount: 0,
        limit: 30,
        src: "nbateam",
      },
      {
        name: "MLB Team",
        cost: 1500000000,
        amount: 0,
        limit: 30,
        src: "mlbteam",
      },
      {
        name: "NFL Team",
        cost: 2300000000,
        amount: 0,
        limit: 32,
        src: "nflteam",
      },
    ],
  },
  mutations: {
    UPDATE_MONEY(state, payload) {
      state.moneyLeft = state.BillsMoney - payload;
    },
    UPDATE_AMOUNT_UP(state, payload) {
      state.arrayItems[payload].amount++;
    },
    UPDATE_AMOUNT_DOWN(state, payload) {
      state.arrayItems[payload].amount--;
    },
    UPDATE_AMOUNT_CHANGE(state, payload) {
      state.arrayItems[payload.index].amount = payload.input;
    },
  },
  actions: {
    updateMoney(context, payload) {
      context.commit("UPDATE_MONEY", payload);
    },
  },
  modules: {},
});
