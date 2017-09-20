<template>
  <g key="lineGroup">
    <line
      v-for="link in links"
      :class="'link' + (link.selected ? ' selected' : '')"
      :x1="link.x1"
      :x2="link.x2"
      :y1="link.y1"
      :y2="link.y2"
      :key="link.id"
    ></line>
  </g>
</template>
<script>
  export default {
    name: 'netLink',
    props: {
      links: {
        type: Array,
        default: []
      }
//      x1: {
//        type: Number,
//        default: 0
//      },
//      x2: {
//        type: Number,
//        default: 0
//      },
//      y1: {
//        type: Number,
//        default: 0
//      },
//      y2: {
//        type: Number,
//        default: 0
//      },
//      selected: {
//        type: Boolean,
//        default: false
//      }
//      _key: {
//        type: String,
//        default: ''
//      }
    }
  }
</script>
<style>
  .link {
    stroke: rgb(100, 200, 235);
    stroke-width: 1px;
  }

  .link.selected {
    stroke: #b40000
  }
</style>
