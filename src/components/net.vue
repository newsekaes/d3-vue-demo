<template>
  <svg class="net" xmlns="http://www.w3.org/2000/svg" :width="width" :height="height">
      <net-node
        :nodes="net.nodes"
      ></net-node>
      <net-link
        :links="net.links"
      ></net-link>
  </svg>
</template>
<script>
  import netNode from './node'
  import NetLink from './link'
  export default {
    name: 'net',
    props: {
      width: {
        type: Number,
        default: 500
      },
      height: {
        type: Number,
        default: 500
      },
      net: {
        type: Object,
        default: () => ({})
      }
    },
    components: {
      NetLink,
      netNode
    }
  }
</script>
<style>
  .net {
    background: rgb(8, 17, 26);
  }
</style>
