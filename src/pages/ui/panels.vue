<template>
  <div>
   <h2>Bootstrap panels</h2>
    <div class="row">

      <div class="col-md-12 col-lg-4">
        <div class="panel panel-default bootstrap-panel xsmall-panel">
          <div class="panel-body">
            <p>A panel in bootstrap is a bordered box with some padding around its content.</p>

            <p class="p-with-code">Panels are created with the <code>.panel</code> class, and content inside the panel has a
              <code>.panel-body</code> class. The <code>.panel-default .panel-primary .panel-danger</code> and other classes
              are used to style the color of the
              panel. See the next example on this page for more contextual classes.</p>
          </div>
        </div>
      </div>

      <div class="col-md-12 col-lg-4">
        <div class="panel panel-default bootstrap-panel xsmall-panel">
          <div class="panel-heading">Panel Heading</div>
          <div class="panel-body">
            <p class="p-with-code">The <code>.panel-heading</code> class adds a heading to the panel.Easily add a heading
              container to your
              panel with .panel-heading. You may also include any
              <code>h1-h6</code> with a <code>.panel-title</code> class to add a pre-styled heading.
            </p>
          </div>
        </div>
      </div>

      <div class="col-md-12 col-lg-4">
        <div class="panel panel-default bootstrap-panel">
          <div class="panel-body footer-panel">
            <p class="p-with-code">
              Wrap buttons or secondary text in <code>.panel-footer</code>. Note that panel footers do not inherit colors
              and
              borders when
              using contextual variations as they are not meant to be in the foreground.
            </p>
          </div>
          <div class="panel-footer">Panel Footer</div>
        </div>
      </div>
    </div>

    <h2>Panels with Contextual Classes</h2>
    <div class="row">
      <div class="col-md-6 col-lg-4">
        <div class="panel panel-default contextual-example-panel bootstrap-panel">
          <div class="panel-heading">Panel with panel-default class</div>
          <div class="panel-body">To color the panel, use contextual classes. This is sample <code>.panel-default</code>
            panel
          </div>
        </div>
      </div>

      <div class="col-md-6 col-lg-4">
        <div class="panel panel-primary contextual-example-panel bootstrap-panel">
          <div class="panel-heading">Panel with panel-primary class</div>
          <div class="panel-body">Sample <code>.panel-primary</code> panel</div>
        </div>
      </div>

      <div class="col-md-6 col-lg-4">
        <div class="panel panel-success contextual-example-panel bootstrap-panel">
          <div class="panel-heading">Panel with panel-success class</div>
          <div class="panel-body">Sample <code>.panel-success</code> panel</div>
        </div>
      </div>

      <div class="col-md-6 col-lg-4">
        <div class="panel panel-info contextual-example-panel bootstrap-panel">
          <div class="panel-heading">Panel with panel-info class</div>
          <div class="panel-body">Sample <code>.panel-info</code> panel</div>
        </div>
      </div>

      <div class="col-md-6 col-lg-4">
        <div class="panel panel-warning contextual-example-panel bootstrap-panel">
          <div class="panel-heading">Panel with panel-warning class</div>
          <div class="panel-body">Sample <code>.panel-warning</code> panel</div>
        </div>
      </div>

      <div class="col-md-6 col-lg-4">
        <div class="panel panel-danger contextual-example-panel bootstrap-panel">
          <div class="panel-heading">Panel with panel-danger class</div>
          <div class="panel-body">Sample <code>.panel-danger</code> panel</div>
        </div>
      </div>

    </div>

    <div class="row">
      <div class="col-md-12">
        <h2>Panel Group</h2>

        <div class="panel-group">
          <div class="panel panel-default bootstrap-panel">
            <div class="panel-heading">Panel group 1</div>
            <div class="panel-body">
              <p>To group many panels together, wrap a <code>&lt;div&gt;</code> with class <code>
                .panel-group</code> around them.</p>
            </div>
          </div>
          <div class="panel panel-default bootstrap-panel">
            <div class="panel-heading">Panel group 2</div>
            <div class="panel-body">
              <p>The <code>.panel-group</code> class clears the bottom-margin of each panel.</p>
            </div>
          </div>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
  export default {}
</script>

<style></style>
