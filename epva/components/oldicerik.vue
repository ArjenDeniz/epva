<template>
  <div class="dashboard-container">
    <h1 class="dashboard-title">EPVA Programı</h1>
    <Accordion :items="accordionItems" multiple>
      <template #header="{ item }">
        {{ item.header }}
      </template>
    </Accordion>
  </div>
</template>

<script setup>
// definePageMeta({
//   middleware: ['auth-user']
// })
const accordionItems = [
  { header: 'Bilimsel Hazırlık Çalışma Kaynakları', content: `  <p>Aşağıdaki bağlantılar, bilgi seviyesi anketi sonucunda kendinizi rahat hissetmediğiniz alanları geliştirmenize yardımcı olmak için seçilerek sunulmuştur.</p>
  
  <h3>Bilimsel Hazırlık</h3>
  
  <h4>Veri Toplama:</h4>
  <ul>
    <li><a href="https://support.microsoft.com/tr-tr/office/yeni-bir-form-veya-test-oluşturma-3c39c220-e30e-401d-bb6f-c1861d5aea01" target="_blank">Form Oluşturma Temelleri</a></li>
  </ul>
  
  <h4>İstatistik:</h4>
  <ul>
    <li><a href="https://tr.khanacademy.org/math/ap-statistics/analyzing-categorical-ap" target="_blank">Kategorik Veriyi Analiz Etme</a></li>
    <li><a href="https://tr.khanacademy.org/math/ap-statistics/summarizing-quantitative-data-ap" target="_blank">Nicel Verileri Özetleme</a></li>
    <li><a href="https://tr.khanacademy.org/math/ap-statistics/quantitative-data-ap" target="_blank">Nicel Verileri Gösterme ve Açıklama</a></li>
  </ul>
  
  <h4>Excel:</h4>
  <ul>
    <li><a href="https://support.microsoft.com/tr-tr/office/excel-video-training-9bc05390-e94c-46af-a5b3-d7c22f6990bb" target="_blank">Excel Temelleri</a></li>
  </ul>` },{header:"İngilizce Kaynaklar Nasıl Çevirilir?", content:`<p>Chrome'un yerleşik çeviri özelliği, İngilizce kaynakları kolayca Türkçe'ye çevirmenizi sağlar. Bu yöntem, ayrı bir çeviri sayfası açmaya gerek kalmadan, doğrudan web sayfasını çevirmenize olanak tanır. Aşağıdaki stepleri gereksinimleri sağladıktan sonra Opera, Safari, Edge gibi tarayıcılar için de kullanabilirsiniz.</p>
  
  <h3>Temel Adımlar:</h3>
  <ul>
    <li>Chrome tarayıcısını açın.</li>
    <li>Çevirmek istediğiniz İngilizce web sayfasına gidin.</li>
    <li>Chrome otomatik olarak sayfanın dilini algılayacak ve çeviri seçeneği sunacaktır.</li>
    <li>Çeviri seçeneğine tıklayarak sayfayı Türkçe'ye çevirin.</li>
  </ul>
  
  <p><strong>Not:</strong> Otomatik çevirilerin her zaman mükemmel olamayacağını unutmayın. Özellikle teknik terimlerde veya karmaşık açıklamalarda, orijinal metne de göz atmanız faydalı olabilir.</p>
  `}
]
</script>
<style lang="scss" scoped>
.dashboard-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  font-family: 'Poppins', sans-serif;
  background-color: #ffffff;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

.dashboard-title {
  font-size: 2.5rem;
  color: #2c3e50;
  text-align: center;
  margin-bottom: 2rem;
  border-bottom: 2px solid #3498db;
  padding-bottom: 1rem;
}
</style>