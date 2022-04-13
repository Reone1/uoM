<template>
  <div>
    <h2>Career</h2>
    <ul>
      <li v-bind:key="career.company" v-for="career in careers">
        <career-item v-bind:career="career" />
      </li>
    </ul>
  </div>
</template>
<script>
import CareerItem from "./CareerItem.vue";
export default {
  components: { CareerItem },
  computed: {
    careers: () => [
      {
        company: "Supaja",
        term: "2017.3 - 2019.3",
        description: "화상과외 서비스 플랫폼",
        projects: [
          {
            title: "Service Renewer",
            duration: "2018.8 ~ 2019.3",
            description:
              "서비스 운영 로직 변경을 위한 웹 서비스 페이지 개편 작업",
          },
        ],
      },
      {
        company: "MxnCommerce Korea",
        term: "2020.8 ~ 재직중",
        description: "Totaly global commerce service",
        projects: [
          {
            title: "VPL app",
            duration: "2020.8 ~ 2020.10",
            description:
              "외부 packaging System과 Web service간 API연동 및 데이터 처리",
            // stack: ["nextjs", "nestjs"],
          },
          {
            title: "BackOffice Admin",
            duration: "2020.10 ~",
            description:
              "전체 서비스 구조 개편에 맞는 BackOffice 어플리케이션 개발.",
          },
        ],
      },
    ],
  },
};
</script>
