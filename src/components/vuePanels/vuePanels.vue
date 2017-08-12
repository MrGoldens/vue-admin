<template>
<div class="panel panel-blur" :style="bgStyle">
  <div class="panel-body">
    <span>
      <slot></slot>
    </span>
  </div>
</div>
</template>

<script>
//  import $ from 'jquery'
  export default {
    name: 'vuePanel',
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
        console.log({width: finalWidth, height: finalHeight, positionX: (elemW - finalWidth) / 2, positionY: (elemH - finalHeight) / 2})
        console.log({backgroundSize: finalWidth + 'px' + ' ' + finalHeight + 'px', backgroundPosition: ((elemW - finalWidth) / 2) + 'px' + ' ' + ((elemH - finalHeight) / 2) + 'px'})
//        return {width: finalWidth, height: finalHeight, positionX: (elemW - finalWidth) / 2, positionY: (elemH - finalHeight) / 2}
        return {backgroundSize: finalWidth + 'px' + ' ' + finalHeight + 'px', backgroundPosition: ((elemW - finalWidth) / 2) + 'px' + ' ' + ((elemH - finalHeight) / 2) + 'px'}
      }
    },
    data () {
      return {
        bgStyle: this.getBodyBgImageSizes()
      }
    }
  }
</script>

<style></style>
