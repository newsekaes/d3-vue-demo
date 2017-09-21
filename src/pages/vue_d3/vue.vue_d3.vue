<template>
  <svg class="net" xmlns="http://www.w3.org/2000/svg" :width="width" :height="height">
    <g key="linksGroup">
      <line
        v-for="link in net.links"
        :class="'link' + (link.selected ? ' selected' : '')"
        :x1="link.source.x"
        :x2="link.target.x"
        :y1="link.source.y"
        :y2="link.target.y"
        :key="link.index"
        @click="onClick(link)"
      ></line>
    </g>
    <g key="nodesGroup">
      <g v-for="node in net.nodes" :key="node.id">
        <text class="name" :x="node.x" :y="node.y - r">{{node.id}}</text>
        <circle
          :class="'node' + (node.selected ? ' selected' : '')"
          :r="r"
          :cx="node.x"
          :cy="node.y"
          @click="onClick(node)"
        ></circle>
      </g>
    </g>
  </svg>
</template>
<script>
  export default {
    props: {
      net: {
        type: Object,
        default: {
          links: [],
          nodes: []
        }
      },
      width: {
        type: Number,
        default: 500
      },
      height: {
        type: Number,
        default: 500
      }
    },
    data () {
      return {
        r: 10
      }
    },
    methods: {
      onClick (item) {
        item.selected = true
      }
    }
  }
</script>
<style>
  .net {
    background: rgb(8, 17, 26);
  }

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

  .link {
    stroke: rgb(100, 200, 235);
    stroke-width: 3px;
    cursor: pointer;
  }

  .link.selected {
    stroke: #b40000
  }
  .name{
    fill: #ffffff
  }
</style>
