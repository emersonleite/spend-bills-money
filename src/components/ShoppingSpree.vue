 <template>
  <div v-show="moneyLeft < 90000000000" class="shoppingSpree">
    <h2 class="shoppingSpree__title">Your Shopping Spree</h2>
    <ul class="shoppingSpree__items">
      <li
        class="shoppingSpree__item"
        v-for="item in arrayItems"
        :key="item.name"
        v-show="item.amount > 0"
      >
        <img class="shoppingSpree__image" :src="`/img/${item.src}.jpg`" alt />
        <p>
          <span class="shoppingSpree__name">{{item.name}} x</span>
          <span class="shoppingSpree__amount">{{item.amount}}</span>
        </p>
      </li>
    </ul>
  </div>
</template>
 
 <script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["arrayItems", "moneyLeft"]),
  },
};
</script>