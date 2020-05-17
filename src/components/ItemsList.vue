 <template>
  <ul class="itemsList">
    <li class="itemsList__list" v-for="(item, index) in arrayItems" :key="item.name">
      <div>
        <img :src="`/img/${item.src}.jpg`" class="itemsList__image" :alt="item.name" />
      </div>
      <!-- Outra opção carregando imagens -->
      <ImgItem :source="item.src" />
      <h2 class="itemsList__name">{{item.name}}</h2>
      <p class="itemsList__cost">{{item.cost | toDollar}}</p>
      <CommandButtons
        :cost="item.cost"
        :limit="item.limit"
        :amount="item.amount"
        :indexItem="index"
      />
    </li>
  </ul>
</template>
 
 <script>
import { mapState } from "vuex";
import CommandButtons from "./CommandButtons.vue";
import ImgItem from "./ImgItem.vue";
export default {
  components: {
    CommandButtons,
    ImgItem
  },
  name: "ItemsList",
  computed: {
    ...mapState(["arrayItems"])
  }
};
</script>
 
 <style>
</style>