<template>
  <div class="container">
    <h1 class="title">Hoş Geldiniz</h1>
    <div class="content">
      <p>
        Etki Profesyonelleri için Veri Analitiği kapasite geliştirme programına ait dashboard'a hoş geldiniz. 
        Bu platform, programımızın tüm bileşenlerine erişiminizi sağlamak üzere tasarlanmıştır.
      </p>
      <p>
        Bu program, Impact Hub Ankara ve Rubiks Analytics'in ortak çalışmasının bir ürünüdür. 
        Impact Hub Ankara topluluğunda yer alan Rubiks Analytics’in veri bilimi ve analitiği alanındaki bilgi ve tecrübelerinin, Impact Hub’ın sosyal etki alanındaki uzmanlığı ile biraraya gelmesiyle tasarlanan kapasite geliştirme programı, özellikle sosyal alanlarda çalışanlara, veri bilimi, veri analitiği ve istatistik konularında derinlemesine bilgi kazandırmayı hedefliyor. 
      </p>
      <NuxtLink to="/icerik" class="button">Dashboard'a git</NuxtLink>
      <div class="dashboard-info">
        <p>Dashboard'unuzda şunları bulacaksınız:</p>
        <ul>
          <li>Kendi hızınızda ilerleyebileceğiniz öğrenim modülleri</li>
          <li>Ders materyalleri ve kaynaklar</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
// You can add any necessary imports or logic here
</script>

<style lang="scss" scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  font-family: 'Poppins', sans-serif;
  background-color: #ffffff;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

.title {
  font-size: 2.5rem;
  color: #2c3e50;
  text-align: center;
  margin-bottom: 2rem;
  border-bottom: 2px solid #3498db;
  padding-bottom: 1rem;
}

.content {
  line-height: 1.6;
  color: #34495e;

  p {
    margin-bottom: 1.5rem;
  }
}

.button {
  display: inline-block;
  background-color: #3498db;
  color: white;
  padding: 0.75rem 1.5rem;
  text-decoration: none;
  border-radius: 4px;
  font-weight: 600;
  transition: background-color 0.3s ease, transform 0.2s ease;
  
  &:hover {
    background-color: #2980b9;
    transform: translateY(-2px);
  }
}

.dashboard-info {
  margin-top: 2rem;
  background-color: #f8f9fa;
  padding: 1.5rem;
  border-radius: 4px;
  border-left: 4px solid #3498db;

  p {
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  ul {
    list-style-type: none;
    padding-left: 0;

    li {
      margin-bottom: 0.5rem;
      position: relative;
      padding-left: 1.5rem;

      &::before {
        content: "•";
        color: #3498db;
        position: absolute;
        left: 0;
        top: 0;
      }
    }
  }
}
</style>