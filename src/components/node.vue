<template>
  <g key="circleGroup">
    <circle
      v-for="node in nodes"
      :class="'node' + (node.selected ? ' selected' : '')"
      xmlns="http://www.w3.org/2000/svg"
      :r="node.r"
      :cx="node.x"
      :cy="node.y"
      :key="node.id"
    ></circle>
  </g>
  <!--<circle-->
  <!--v-else-->
  <!--class="node"-->
  <!--xmlns="http://www.w3.org/2000/svg"-->
  <!--:r="radius"-->
  <!--:x="x"-->
  <!--:y="y"-->
  <!--&gt;</circle>-->
</template>
<script>
  export default {
    name: 'netNode',
    props: {
      nodes: {
        type: Array,
        default: []
      }
//      selected: {
//        type: Boolean,
//        default: false
//      },
//      r: {
//        type: Number,
//        default: 5
//      },
//      x: {
//        type: Number,
//        default: 0
//      },
//      y: {
//        type: Number,
//        default: 0
//      }
//      _key: {
//        type: String,
//        default: ''
//      }
    }
  }
</script>
<style>
  .node {
    stroke: #FFFFFF;
    cursor: pointer;
    fill: #FFFFFF;
    stroke-width: 0;
  }

  .node.selected {
    fill: #1C89C9;
    stroke-width: 2px;
  }
</style>
