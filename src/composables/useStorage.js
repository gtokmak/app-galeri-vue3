import {ref, watchEffect} from 'vue'
import {depo, veritabanı, tarih} from '@/firebase/config'

 const useStorage=(dosya)=>{

    const error = ref(null);
    const url= ref(null);
    const progress = ref(null);

    watchEffect(()=>{
            const storageRef = depo.ref('resimler/'+ dosya.name);
            const collectionRef = veritabanı.collection('resimler');
            storageRef.put(dosya)
                .on('state_changed',(snap)=>{
                    let yuzdelik = (snap.bytesTransferred/ snap.totalBytes) * 100 ;
                    progress.value = yuzdelik;
                    console.log(progress.value)
                    }, (err)=>{
                        error.value = err;
                    }, async()=>{
                        const dlUrl = await storageRef.getDownloadURL();
                        const olusturulmaTarihi = tarih();
                        await collectionRef.add({
                            url:dlUrl,
                            olusturulmaTarihi:olusturulmaTarihi
                        })
                        url.value= dlUrl;

                });
    });

    return { url, error, progress}
}

export default useStorage