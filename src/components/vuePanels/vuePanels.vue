<template>
<div class="panel panel-blur" v-panel-blur-bg-style>
  <div class="panel-heading clearfix" v-show="vuePanelTitle!=null">
    <h3 class="panel-title">{{vuePanelTitle}}</h3>
  </div>
  <div class="panel-body">
    <span>
      <slot></slot>
    </span>
  </div>
</div>
</template>

<script>
//  import $ from 'jquery'
import panelBlurBgStyle from './panelBlurBgStyle'
export default {
  name: 'vuePanel',
  directives: { panelBlurBgStyle },
  methods: {
    getBodyBgImageSizes () {
      let computedStyle = getComputedStyle(document.body, ':before')
      let image = new Image()
      image.src = computedStyle.backgroundImage.replace(/url\((['"])?(.*?)\1\)/gi, '$2')
      let elemW = document.documentElement.clientWidth
      let elemH = document.documentElement.clientHeight
      if (elemW <= 640) return
      let imgRatio = (image.height / image.width)       // original img ratio
      let containerRatio = (elemH / elemW)     // container ratio

      let finalHeight, finalWidth
      if (containerRatio > imgRatio) {
        finalHeight = elemH
        finalWidth = (elemH / imgRatio)
      } else {
        finalWidth = elemW
        finalHeight = (elemW * imgRatio)
      }
      return {
        backgroundSize: finalWidth + 'px' + ' ' + finalHeight + 'px',
        backgroundPosition: ((elemW - finalWidth) / 2) + 'px' + ' ' + ((elemH - finalHeight) / 2) + 'px'
      }
    }
  },
  data () {
    return {
      bgStyle: this.getBodyBgImageSizes()
    }
  },
  props: ['vuePanelTitle']
}
</script>

<style></style>
