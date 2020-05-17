 <template>
  <div class="moneyLeft">
    <p>{{this.moneyLeft | toDollar}} left</p>
  </div>
</template>
 
 <script>
import { mapState } from "vuex";
export default {
  name: "MoneyLeft",
  computed: {
    ...mapState(["moneyLeft"])
  }
};
</script>
 
 <style lang="scss">
</style>