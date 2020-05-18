 <template>
  <div class="commandButtons">
    <button
      :class="{'commandButtons__buttonSell--disabled': inputValue === 0}"
      class="commandButtons__buttonSell"
      :disabled="inputValue === 0"
      @click="toSell"
    >Sell</button>
    <input class="commandButtons__input" @change="inputChanged" type="text" v-model="inputValue" />
    <button
      :class="{'commandButtons__buttonSell--disabled': inputValue >= limit || negative}"
      class="commandButtons__buttonBuy"
      :disabled="inputValue >= limit"
      @click="toBuy"
    >Buy</button>
  </div>
</template>
 
 <script>
import { mapState } from "vuex";
import { mapActions } from "vuex";
import { BillsMoney } from "@/main.js";
export default {
  name: "CommandButtons",
  props: ["cost", "limit", "amount", "indexItem"],
  data() {
    return {
      inputValue: 0,
      negative: false
    };
  },
  computed: {
    ...mapState(["moneyLeft", "arrayItems"]),
    /* Calculo do total gasto até o momento */
    moneySpend() {
      const total = this.arrayItems.reduce((acc, item) => {
        return acc + item.cost * item.amount;
      }, 0);
      if (total > BillsMoney) {
        return BillsMoney;
      } else {
        return total;
      }
    },
    dataItem() {
      return {
        index: this.indexItem,
        input: this.inputValue
      };
    }
  },
  methods: {
    ...mapActions(["updateMoney"]),
    moneySpend2() {
      const total = this.arrayItems.reduce((acc, item) => {
        return acc + item.cost * item.amount;
      }, 0);
      if (total > BillsMoney) {
        return BillsMoney;
      } else {
        return total;
      }
    },
    inputChanged() {
      if (Number(this.inputValue) * this.cost > BillsMoney - this.moneySpend) {
        this.inputValue = Math.floor(
          (BillsMoney - this.moneySpend) / this.cost
        );
      }
      if (this.inputValue > this.limit) {
        this.inputValue = this.limit;
      }
      this.$store.commit("UPDATE_AMOUNT_CHANGE", this.dataItem);
      this.$store.dispatch("updateMoney", this.moneySpend);
    },
    toSell() {
      this.$store.commit("UPDATE_AMOUNT_DOWN", this.indexItem);
      this.$store.dispatch("updateMoney", this.moneySpend);
      this.inputValue--;
    },
    toBuy() {
      this.$store.commit("UPDATE_AMOUNT_UP", this.indexItem);
      this.$store.dispatch("updateMoney", this.moneySpend);
      console.log(this.moneySpend);
      if (this.moneySpend >= BillsMoney) {
        this.negative = true;
      } else {
        this.inputValue++;
      }
    }
  }
};
</script>
 
 <style>
</style>