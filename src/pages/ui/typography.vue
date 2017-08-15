<template>
  <div class="typography-document-samples row-fluid">
    <div class="col-xlg-3 col-lg-6  col-md-6 col-sm-6 col-xs-12 typography-widget">
      <vue-panel vue-panel-title="Text Size" class="with-scroll heading-widget">
        <div class="section-block">
          <h1>H1. Heading 1</h1>

          <p>Lorem ipsum dolor sit amet, id mollis iaculis mi nisl pulvinar, lacinia scelerisque pharetra, placerat
            vestibulum eleifend pellentesque.</p>
        </div>
        <div class="section-block">
          <h2>H2. Heading 2</h2>

          <p>Lorem ipsum dolor sit amet, id mollis iaculis mi nisl pulvinar, lacinia scelerisque pharetra, placerat
            vestibulum eleifend pellentesque.</p>
        </div>
        <div class="section-block">
          <h3>H3. Heading 3</h3>

          <p>Lorem ipsum dolor sit amet, id mollis iaculis mi nisl pulvinar, lacinia scelerisque pharetra, placerat
            vestibulum eleifend pellentesque.</p>
        </div>
        <div class="section-block">
          <h4>H4. Heading 4</h4>

          <p>Lorem ipsum dolor sit amet, id mollis iaculis mi nisl pulvinar, lacinia scelerisque pharetra,.</p>
        </div>
        <div class="section-block">
          <h5>H5. Heading 5</h5>

          <p>Lorem ipsum dolor sit amet, id mollis iaculis mi nisl pulvinar, lacinia scelerisque pharetra.</p>
        </div>
      </vue-panel>
    </div>
  </div>
</template>

<script>
  import { vuePanel } from '../../components/vuePanels'
  export default {
    components: {
      vuePanel
    }
  }
</script>

<style></style>
