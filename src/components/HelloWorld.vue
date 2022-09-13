<template>
  <div class="w-full flex flex-col items-center self-center">
    <h1>{{ msg }}</h1>

    <div
      class="grid sm:grid-col-2 w-full justify-center grid-cols-12 p-5 text-1xl"
    >
      <div
        class="lg:col-span-2 sm:col-span-6 md:col-span-4"
        v-for="item in sortedBlocksData"
        :key="item.selfIndex"
      >
        <WordBox
          @add-new-block="addNewBlock"
          @toggle-block="toggleBlock"
          class=""
          :word="item.blockData"
          :selfIndex="item.selfIndex"
          :blockName="item.blockName"
          :color="item.color"
          :enabled="item.enabled"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapMutations, mapState } from "vuex";
import WordBox from "./WordBox.vue";
import AddNewBlockFinder from "./AddNewBlockFinder.vue";
import draggable from "vuedraggable";

// get blocksData state from store

export default defineComponent({
  name: "HelloWorld",
  computed: {
    // computed method to get a sorted array of blocksData via selfIndex property
    sortedBlocksData() {
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      return this.blocksData.sort((a: any, b: any) => {
        return a.selfIndex - b.selfIndex;
      });
      // return true;
    },
    ...mapState(["blocksData"]),
    ...mapMutations(["addNewBlockMutation", "enableBlockMutation"]),
  },

  props: {
    msg: String,
  },
  data() {
    return {
      options: [
        { value: 10, name: "10KG" },
        { value: 20, name: "20KG" },
      ],
      colorPallet: [
        //textColor is always white
        // pick colors that are very light
        "#F9A8D4",
        "#b6fcd5",
        "#f9d0c4",
        "#f9f3c4",
        "#c4f9f3",
        "#c4d5f9",
        "#f9c4f3",
        "#f9c4c4",
        "#c4f9c4",
        "#c4f9f9",
        "#c6f1ba",
        "#e0dbd5",
      ],
      colorsInUse: ["#F9A8D4"],
    };
  },
  components: { WordBox, draggable, AddNewBlockFinder },
  methods: {
    // method to get a random color from colorPallet
    getRandomColor() {
      const color =
        this.colorPallet[Math.floor(Math.random() * this.colorPallet.length)];
      console.log("color", color);
      // move the color to colorsInUse
      // this.colorsInUse.push(color);
      // remove the color from colorPallet
      // this.colorPallet.splice(this.colorPallet.indexOf(color), 1);
      return color;
    },
    addNewBlock(e: any) {
      console.log("add new block", e);
      this.$store.commit("addNewBlockMutation", e);
      // this.addNewBlockMutation();
      // open modal to add new block
      // this.$store.commit("addNewBlock", e);
    },
    toggleBlock(e: any) {
      console.log("enable block", e);
      this.$store.commit("toggleBlockMutation", e);
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
// h3 {
//   margin: 40px 0 0;
// }
// ul {
//   list-style-type: none;
//   padding: 0;
// }
// li {
//   display: inline-block;
//   margin: 0 10px;
// }
// a {
//   color: #42b983;
// }
</style>
