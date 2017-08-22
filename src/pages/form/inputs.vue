<template>
  <div class="widgets">
    <div class="row">
      <div class="col-md-6">
        <vue-panel vue-panel-title="Standard Fields" class="with-scroll">
          <form>
            <div class="form-group">
              <label for="input01">Text</label>
              <input type="text" class="form-control" id="input01" placeholder="Text">
            </div>
            <div class="form-group">
              <label for="input02">Password</label>
              <input type="password" class="form-control" id="input02" placeholder="Password">
            </div>
            <div class="form-group">
              <label for="input03">Rounded Corners</label>
              <input type="text" class="form-control form-control-rounded" id="input03" placeholder="Rounded Corners">
            </div>
            <div class="form-group">
              <label for="input04">With help</label>
              <input type="text" class="form-control" id="input04" placeholder="With help">
              <span class="help-block sub-little-text">A block of help text that breaks onto a new line and may extend beyond one line.</span>
            </div>
            <div class="form-group">
              <label for="input05">Disabled Input</label>
              <input type="text" class="form-control" id="input05" placeholder="Disabled Input" disabled>
            </div>

            <div class="form-group">
              <label for="textarea01">Textarea</label>
              <textarea placeholder="Default Input" class="form-control" id="textarea01"></textarea>
            </div>

            <div class="form-group">
              <input type="text" class="form-control input-sm" id="input2" placeholder="Small Input">
            </div>
            <div class="form-group">
              <input type="text" class="form-control input-lg" id="input4" placeholder="Large Input">
            </div>
          </form>
        </vue-panel>
        <vue-panel vue-panel-title="Input Groups" class="with-scroll">
          <div class="input-group">
            <span class="input-group-addon input-group-addon-primary addon-left" id="basic-addon1">@</span>
            <input type="text" class="form-control with-primary-addon" placeholder="Username"
                   aria-describedby="basic-addon1">
          </div>

          <div class="input-group">
            <input type="text" class="form-control with-warning-addon" placeholder="Recipient's username"
                   aria-describedby="basic-addon2">
            <span class="input-group-addon input-group-addon-warning addon-right" id="basic-addon2">@example.com</span>
          </div>

          <div class="input-group">
            <span class="input-group-addon addon-left input-group-addon-success">$</span>
            <input type="text" class="form-control with-success-addon" aria-label="Amount (to the nearest dollar)">
            <span class="input-group-addon addon-right input-group-addon-success">.00</span>
          </div>

          <div class="input-group">
            <input type="text" class="form-control with-danger-addon" placeholder="Search for...">
            <span class="input-group-btn">
      <button class="btn btn-danger" type="button">Go!</button>
  </span>
          </div>
        </vue-panel>
      </div>
    </div>
  </div>
</template>

<script>
  import VuePanel from '../../components/vuePanels/vuePanels.vue'

  export default {components: {VuePanel}}

</script>

<style></style>
