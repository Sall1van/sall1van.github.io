<template>
  <div class="modal-overlay">

  </div>
</template>

<script setup>

</script>

<style scoped lang="scss">
.modal-overlay {
  position: fixed;
  height: 100%;
  width: 100%;
  left: 0px;
  top: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: auto;
  z-index: 1101;
  background-color: rgba(0, 0, 0, 0.4);
}
</style>
