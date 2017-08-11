<template>
<div class="panel panel-blur">
  <div class="panel-body">
    <span>
      <slot></slot>
    </span>
  </div>
</div>
</template>

<script>
  export default {
    name: 'vuePanel',
    mounted () {
      let computedStyle = getComputedStyle(document.body, ':before')
      let image = new Image()
      image.src = computedStyle.backgroundImage.replace(/url\((['"])?(.*?)\1\)/gi, '$2')
      function getBodyBgImageSizes () {
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
        return {width: finalWidth, height: finalHeight, positionX: (elemW - finalWidth) / 2, positionY: (elemH - finalHeight) / 2}
      }
      getBodyBgImageSizes()
    }
  }
</script>

<style></style>
