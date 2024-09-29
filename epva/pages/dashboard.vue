<template>
  <div>
    <h1>Dashboard</h1>
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
  { header: 'Bilimsel Hazırlık Çalışma Kaynakları', content: `  <p>Aşağıdaki bağlantılar, belirli alanlarda kendinizi geliştirmenize yardımcı olmak için sunulmuştur. Bu kaynaklar, program konularında kendinizi daha güvende hissetmenizi sağlayacaktır.</p>
  
  <h3>Bilimsel Hazırlık</h3>
  
  <h4>Veri Toplama:</h4>
  <ul>
    <li><a href="https://support.microsoft.com/tr-tr/office/yeni-bir-form-veya-test-oluşturma-3c39c220-e30e-401d-bb6f-c1861d5aea01" target="_blank">Forms Basics</a></li>
  </ul>
  
  <h4>İstatistik:</h4>
  <ul>
    <li><a href="https://tr.khanacademy.org/math/ap-statistics/analyzing-categorical-ap" target="_blank">Kategorik Veriyi Analiz Etme</a></li>
    <li><a href="https://tr.khanacademy.org/math/ap-statistics/summarizing-quantitative-data-ap" target="_blank">Nicel Verileri Özetleme</a></li>
    <li><a href="https://tr.khanacademy.org/math/ap-statistics/quantitative-data-ap" target="_blank">Nicel Verileri Gösterme ve Açıklama</a></li>
  </ul>
  
  <h4>Excel:</h4>
  <ul>
    <li><a href="https://support.microsoft.com/en-us/office/excel-video-training-9bc05390-e94c-46af-a5b3-d7c22f6990bb" target="_blank">Basics</a></li>
  </ul>` },
]
</script>