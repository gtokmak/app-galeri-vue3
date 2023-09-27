<template>
 <div class="App">
  <Title></Title>
  <Upload></Upload>
  <ImageGrid @secilen="secilenResimGuncelle"></ImageGrid>
  <Modal v-if="secilenResim" :imgURL="secilenResim" @kapat="secilenResimGuncelle"></Modal>
    
 </div>
</template>

<script>
import ImageGrid from './components/ImageGrid.vue';
import Title from './components/Title.vue';
import Upload from './components/Upload.vue';
import Modal from './components/Modal.vue';
import { ref } from 'vue';

export default {
  name: 'App',
  components: {
    ImageGrid,
    Upload,
    Title,
    Modal
  }, setup() {
    const secilenResim = ref(null)

    const secilenResimGuncelle=(url)=>{
      secilenResim.value = url;
    }
    return {
      secilenResim, secilenResimGuncelle
    }
  },
}
</script>

<style>
</style>
