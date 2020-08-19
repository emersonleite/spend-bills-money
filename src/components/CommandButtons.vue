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
      :class="{'commandButtons__buttonSell--disabled': inputValue >= limit}"
      class="commandButtons__buttonBuy"
      :disabled="inputValue >= limit"
      @click="toBuy"
    >Buy</button>
  </div>
</template>
 
 <script>
import { mapState, mapActions, mapMutations } from "vuex";
export default {
  name: "CommandButtons",
  props: ["cost", "limit", "amount", "indexItem"],
  data() {
    return {
      inputValue: 0,
    };
  },
  computed: {
    ...mapState(["moneyLeft", "arrayItems", "BillsMoney"]),
    moneySpend() {
      const total = this.arrayItems.reduce((acc, item) => {
        return acc + item.cost * item.amount;
      }, 0);
      if (total > this.BillsMoney) {
        return this.BillsMoney;
      } else {
        return total;
      }
    },
    dataItem() {
      return {
        index: this.indexItem,
        input: this.inputValue,
      };
    },
  },
  methods: {
    ...mapActions(["updateMoney"]),
    ...mapMutations([
      "UPDATE_AMOUNT_CHANGE",
      "UPDATE_AMOUNT_DOWN",
      "UPDATE_AMOUNT_UP",
    ]),
    inputChanged() {
      if (
        Number(this.inputValue) * this.cost >
        this.BillsMoney - this.moneySpend
      ) {
        this.inputValue = Math.floor(
          (this.BillsMoney - this.moneySpend) / this.cost
        );
      }
      if (this.inputValue > this.limit) {
        this.inputValue = this.limit;
      }
      this.UPDATE_AMOUNT_CHANGE(this.dataItem);
      this.updateMoney(this.moneySpend);
    },
    toSell() {
      this.UPDATE_AMOUNT_DOWN(this.indexItem);
      this.updateMoney(this.moneySpend);
      this.inputValue--;
    },
    toBuy() {
      if (this.cost <= this.moneyLeft) {
        this.UPDATE_AMOUNT_UP(this.indexItem);
        this.updateMoney(this.moneySpend);
        this.inputValue++;
      }
    },
  },
};
</script>