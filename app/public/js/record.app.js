var patientRecordApp = new Vue({
  el: '#patientRecordApp',
  data: {
    patients: [],
    formPatients:{
      firstName:"",
      lastName:"",
      dob:"",
      sexAtBirth:"",
    }
  },
  methods: {
    fetchPatients() {
      fetch('dummy.php')
      .then(response => response.json())
      .then(json => { patientRecordApp.patients = json })
    },
    handleCreateRecord(event){
      // problem - that the data is not stored
      //form is using the same instance
    //  fetch(url, {method:'post', data:thisFormPatient})
      //.then()
      this.patients.push(this.formPatients);
      this.formPatients={
        formPatients:{
          firstName:"",
          lastName:"",
          dob:"",
          sexAtBirth:"",
        }
      }
    }
  },
  created() {
    this.fetchPatients();
  }
});
