import { veritabanı } from '@/firebase/config'
import {ref} from 'vue'


const useCollection=(k)=> {
    const belgeler = ref(null)
    const hata = ref(null)

    let collectionRef = veritabanı.collection(k).orderBy('olusturulmaTarihi','desc')

    collectionRef.onSnapshot(snap =>{
        let sonuclar = [];
        snap.docs.forEach(doc=>{
            sonuclar.push({...doc.data(), doc:doc.id})
        })
        belgeler.value = sonuclar;
        hata.value=null
    }, err=>{
        belgeler.value=null;
        hata.value = err.message;
    })
    return {hata, belgeler}
}

export default useCollection