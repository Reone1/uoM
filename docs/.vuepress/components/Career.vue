<template>
  <div>
    <h2>Career</h2>
    <ul>
      <career-item
        v-bind:career="{
          company: 'Supaja',
          term: '2017.3 - 2019.3',
          description: '화상과외 서비스 플랫폼',
        }"
        v-bind:projects="[
          {
            title: 'Service Renewer',
            duration: '2018.8 ~ 2019.3',
            description:
              '서비스 운영 로직 변경에 의한 웹 서비스 페이지 개편 작업',
          },
        ]"
      />
      <career-item
        v-bind:career="{
          company: 'MxnCommerce Korea',
          term: '2020.8 ~ 재직중',
          description: 'Totaly global commerce service',
        }"
        v-bind:projects="[
          {
            title: 'VPL app',
            duration: '2020.8 ~ 2020.10',
            description:
              '외부 packaging System과 Web service간 API연동 및 데이터 처리',
          },
          {
            title: 'BackOffice Admin',
            duration: '2020.10 ~',
            description:
              '전체 서비스 구조 개편에 맞는 BackOffice 어플리케이션 개발.',
          },
        ]"
      />
    </ul>
  </div>
</template>
<script>
import CareerItem from "./CareerItem.vue";
export default {
  components: { CareerItem },
};
</script>
