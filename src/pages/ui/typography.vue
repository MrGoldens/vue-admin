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
    <div class="col-xlg-3 col-lg-6  col-md-6 col-sm-6 col-xs-12 typography-widget">
      <vue-panel class="with-scroll more-text-widget" vue-panel-title="Some more text">
        <div class="section-block light-text">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis
            ullamcorper ligula sodales at. Nulla tellus elit, varius non commodo eget, mattis vel eros. In sed
            ornare
            nulla. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis.
          </p>
        </div>
        <div class="section-block regular-text">
          <p>Curabitur bibendum ornare dolor, quis ullamcorper ligula dfgz`zzsodales at. Nullam quis risus eget urna
            mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus
            mus. Nullam id dolor id.
          </p>
        </div>
        <div class="section-block upper-text bold-text">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor,
            quis
            ullamcorper ligula sodales at. Nulla tellus elit, varius non commodo eget, mattis vel eros. In sed
            ornare
            nulla. </p>
        </div>
        <div class="section-block bold-text">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor,
            quis
            ullam-corper ligula sodales at. Nulla tellus elit, varius non commodo eget, mattis vel eros. In sed
            ornare
            nulla.
          </p>
        </div>
        <div class="section-block small-text">
          <p>Secondary text. Lorem ipsum dolor sit amet, id mollis iaculis mi nisl pulvinar,</p>

          <p>lacinia scelerisque pharetra, placerat vestibulum eleifend</p>

          <p> pellentesque, mi nam.</p>
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
