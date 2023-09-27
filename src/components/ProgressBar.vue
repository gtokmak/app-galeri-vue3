<template>
    <div class="progress-bar">
        yükleniyor
    </div>
</template>

<script>
import useStorage from '@/composables/useStorage'
import {watchEffect} from 'vue';
    export default {
        props:['file'],
        setup(props, context) {
           const {progress} = useStorage(props.file)

           watchEffect(()=>{
                if (progress.value >= 100) {
                    context.emit('tamamlandi')
                }
           })
        },
    }
</script>

<style scoped>

</style>