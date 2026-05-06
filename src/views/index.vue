<template>
  <CHeader @toPage="toPage" />
  <CMain @toPage="toPage" />
  <CAboutUs />
  <CHowItWork />
  <CDirections @toPage="toPage" />
  <CCatalogAuto />
  <CReviews />
  <CContacts />
  <CFooter @toPage="toPage" />
  <Modal />
</template>

<script setup>
import CFooter from '../components/CFooter.vue'
import CContacts from '../components/CContacts.vue'
import CReviews from '../components/CReviews.vue'
import CCatalogAuto from '../components/CCatalogAuto.vue'
import CDirections from '../components/CDirections.vue'
import CHowItWork from '../components/CHowItWork.vue'
import CAboutUs from '../components/CAboutUs.vue'
import CMain from '../components/CMain.vue'
import CHeader from '../components/CHeader.vue'
import Modal from '@/components/Modal.vue'

function toPage(page) {
  if (page === 'top') {
    window.scrollTo({top: 0, behavior: 'smooth'});
  } else {
    document.querySelector(`#${page}`).scrollIntoView({ behavior: "smooth" });
  }
}
</script>

<style scoped lang="scss"></style>
