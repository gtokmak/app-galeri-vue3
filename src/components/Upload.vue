<template>
    <div>
        <form >
            <label >
                <input type="file" @change="dosyaYukle"/>
                <span><i class="fas fa-cloud-upload-alt"></i>Resim Yükle</span>
            </label>
            <div class="output">
                <div v-if="dosyaHata" class="error">{{ dosyaHata }}</div>
                <div v-if="dosya"> {{ dosya.name }}</div>
                <ProgressBar v-if="dosya" :file="dosya" @tamamlandi="dosya=null"/>
            </div>
        </form>
    </div>
</template>

<script>
import {ref} from 'vue'
import ProgressBar from './ProgressBar.vue';
    export default {
        components:{
            ProgressBar
        },

        setup() {
            const dosya = ref('');
            const dosyaHata =ref('');
            const tipler= ['image/png', 'image/jpeg']

            const dosyaYukle=(e)=>{
            let secilen = e.target.files[0];
            if(secilen && tipler.includes(secilen.type)){
                dosya.value =secilen;
                dosyaHata.value = null;
            } else{
                dosya.value=null;
                dosyaHata.value ="Lütfen bir resim dosyası seçiniz(png, jpeg)";
            }
        }
            return {
                dosyaYukle, dosya, dosyaHata
            }
        },
        
    }
</script>

<style scoped>
form{
    margin: 30px auto 10px;
    text-align: center;

}
label input{
    height: 0;
    width: 0;
    opacity: 0;
}

label {
    display: block;
    width: 150px;
    height: 30px;
    background-color: var(--secondary);
    border: 1px solid var(--secondary);
    border-radius: 6px;
    margin: 10px auto;
    line-height: 30px;
    color: white;
    font-weight: bold;
    cursor: pointer;
}

.output{
    height: 40px;
    font-size: 0.8rem;
}
.error{
    color:var(--error);
}
</style>