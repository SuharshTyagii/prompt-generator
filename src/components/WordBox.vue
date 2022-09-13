<template>
  <div>
    <div
      class="border relative flex flex-col items-center"
      :style="this.enabled ? 'opacity: 1' : 'opacity: 0.3'"
    >
      <!--  add a new block -->
      <button
        @click="$emit('addNewBlock', { index: this.selfIndex, onMy: 'left' })"
        class="absolute -left-5 top-1/2 btn-primary"
      >
        +
      </button>
      <button
        @click="$emit('addNewBlock', { index: this.selfIndex, onMy: 'right' })"
        class="absolute -right-5 top-1/2 btn-primary"
      >
        +
      </button>

      <div>
        <span class="text-2xl">{{ blockName }}</span>
        <!-- add new box button left -->
        <!-- trash icon -->
        <span class="absolute right-0 top-0 flex space-x-2 p-2">
          <button><b-icon-trash class="fill-red-500" /></button>
        </span>

        <!-- add a shift to left button on top -->
        <span class="absolute left-0 w-full -top-8 flex space-x-2 p-2">
          <button class="">
            <b-icon-arrow-left class="fill-black" :style="{ color: color }" />
          </button>
          <button class="bg-blue-500">
            <b-icon-arrow-right class="fill-white" />
          </button>
        </span>
        <!-- enable/disable icon -->
        <span class="absolute left-0 top-0 flex space-x-2 p-2">
          <button @click="$emit('toggleBlock', this.selfIndex)">
            <b-icon-eye-fill v-if="this.enabled" class="fill-blue-500" />
            <b-icon-eye-slash-fill v-else class="fill-blue-500" />
          </button>
        </span>
      </div>

      <VueScrollPicker
        v-model="selectedValue"
        @dblclick="boxClicked"
        :style="{
          backgroundColor: color,
        }"
        :options="word"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// import drag icon from bootstrap
import {
  BIconArrowsMove,
  BIconTrash,
  BIconArrowLeft,
  BIconArrowRight,
  BIconEyeFill,
  BIconEyeSlashFill,
} from "bootstrap-icons-vue";

export default defineComponent({
  name: "WordBox",
  props: {
    word: String,
    blockName: String,
    index: Number,
    selfIndex: Number,
    color: Object,
    enabled: Boolean,
  },
  components: {
    BIconArrowsMove,
    BIconTrash,
    BIconArrowLeft,
    BIconArrowRight,
    BIconEyeFill,
    BIconEyeSlashFill,
  },
  data() {
    return {
      name: "Vue 3 + TypeScript + Vite",
      options: [
        { value: 10, name: "10KG" },
        { value: 20, name: "20KG" },
      ],
      selectedValue: "",
    };
  },
  methods: {
    mouseDrag(e: any) {
      console.log(e);
    },
    mouseDown(e: any) {
      console.log(e);
      console.log("mouse down on " + this.blockName);
      // move the box
    },
    boxClicked(e: any) {
      console.log(e);
      console.log("box clicked on " + this.blockName);
      // get value
      console.log(` value is ${this.selectedValue}`);
      console.log(`color is ${this.color}`);
    },
  },
});
</script>
