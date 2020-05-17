 <template>
  <div>
    <img :src="`${path}${source}.jpg`" class="itemsList__image" alt />
  </div>
</template>
 
 <script>
export default {
  data() {
    return {
      path: "./public/"
    };
  },

  props: ["source"]
};
</script>
 
 <style>
</style>