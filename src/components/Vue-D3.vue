<template>
  <div>
    <svg :width="width" :height="height">
      <!--<g :style="{transform: `translate(${margin.left},${margin.top})`}">-->
        <path class="line" :d="path"></path>
        <!--<path class="line" :d="paths.line"></path>-->
        <!--<path class="selector" :d="paths.selector"></path>-->
      <!--</g>-->
    </svg>
  </div>
</template>
<script>
  import * as d3 from 'd3'
  export default {
    name: 'char',
    props: {
      data: {
        type: Array,
        default: () => []
      },
      width: {
        type: Number,
        default: 500
      },
      height: {
        type: Number,
        default: 500
      },
      margin: {
        type: Object,
        default: () => ({
          left: 10,
          right: 10,
          top: 10,
          bottom: 10
        })
      }
    },
    data () {
      return {
        path: '',
        scale: {
          x: null,
          y: null
        }
      }
    },
    computed: {
//      range () {
//        const minX = d3.min(this.data.map(d => d[0]))
//        const maxX = d3.max(this.data.map(d => d[0]))
//        const minY = d3.min(this.data.map(d => d[1]))
//        const maxY = d3.max(this.data.map(d => d[1]))
//        return {
//          x: [minX, maxX],
//          y: [minY, maxY]
//        }
//      }
    },
    methods: {
      createPath (data) {
        return d3.line()(data)
      },
      range (data) {
        const minX = d3.min(data.map(d => d[0]))
        const maxX = d3.max(data.map(d => d[0]))
        const minY = d3.min(data.map(d => d[1]))
        const maxY = d3.max(data.map(d => d[1]))
        return {
          x: [minX, maxX],
          y: [minY, maxY]
        }
      },
      initialize (data) {
        this.scale.x = d3.scaleLinear().domain(this.range(data).x).range([0 + this.margin.left, this.width - this.margin.right])
        this.scale.y = d3.scaleLinear().domain(this.range(data).y).range([this.height - this.margin.bottom, 0 + this.margin.top])
      },
      update (points) {
        const data = points.map((d) => [this.scale.x(d[0]), this.scale.y(d[1])])
        this.path = this.createPath(data)
      },
      tween (newData, oldData) {
        const step = newData.map((d, i) => ([d[0] - oldData[i][0], d[1] - oldData[i][1]]))
        let stepNum = 0
        const maxStepNum = 60
        const _this = this
        function animate () {
          if (stepNum > maxStepNum) {
            return
          }
          stepNum++
          const points = oldData.map((d, i) => ([d[0] + step[i][0] * stepNum / maxStepNum, d[1] + step[i][1] * stepNum / maxStepNum]))
          _this.initialize(points)
          _this.update(points)
          requestAnimationFrame(animate)
        }
        animate()
      }
    },
    watch: {
      data (newData, oldData) {
        if (newData.length === oldData.length) {
          this.tween(newData, oldData)
        } else {
          this.initialize(newData)
          this.update(newData)
        }
      }
    }
  }
</script>
<style lang="sass" scoped>
  .line
    stroke-width: 3px
    stroke: #78BF96
    fill: none
</style>
