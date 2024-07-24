<template>

  <loader-data ref="loader" :isOpen="dataLoading" @close="LoaderHide()">
    <template #default>
      <p>{{LoaderData}}</p>
    </template>

    <template #actions>
      <button @click="LoaderHide()">Okay</button>
    </template>

  </loader-data>

  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="LoadSurveys">Load Submitted Experiences</base-button>
      </div>
      <ul>
        <survey-result v-for="result in results" :key="result.id" :name="result.name"
          :rating="result.rating"></survey-result>
      </ul>
    </base-card>
  </section>



  <!-- <button @click="SetTimeOut">SetTimeOut</button> -->

</template>

<script>
import SurveyResult from './SurveyResult.vue';

export default {
  // props: ['results'],
  components: {
    SurveyResult,
  },
  mounted() {
    this.LoadSurveys();
  },
  data() {
    return {
      results: [],
      dataLoading: true,
      LoaderData: 'Loading'
    }
  },
  methods: {
    SetTimeOut() {
      setTimeout(() => {
        this.dataLoading = !this.dataLoading ;
      }, 1000);
    },
    async LoadSurveys() {
      try {
        // this.SetTimeOut();
        
        this.LoaderShow();
        var response = await fetch('https://vue-sending-http-request-10a75-default-rtdb.firebaseio.com/surveys.json', {
        // var response = await fetch('https://vue-sending-http-request-10a75-default-rtdb.firebaseio.com/surveys', {
          method: 'GET',
        });

        console.log('response', response);
        
        if (!response.ok) {
          this.LoaderHide();
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        this.LoaderHide();
        var data = await response.json();
        this.results = data;
        
        console.log('data', data);
      } catch (error) {
        // alert(1)
        console.log('Error loading surverys', error.message);
        this.LoaderData = error.status ? error.status : 'Failed to Fetch Please try again'
        this.LoaderShow();
        throw error
      }
    },
    LoaderHide(eventData) {
      this.LoaderData =  'Loading'
      console.log('close eventdata' , eventData);
      this.dataLoading = false
    },
    LoaderShow() {
      this.dataLoading = true
    }
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>