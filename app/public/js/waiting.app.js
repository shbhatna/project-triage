var waitingApp = new Vue({
  el: '#patientWaitingApp',
  data: {
    patients: []
  },
  methods: {
    fetchPatients() {
      fetch('api/waiting/')
      .then(response => response.json())
      .then(json => { waitingApp.patients = json })
    },
    formatLocalVisitDate(d) {
    return  moment.utc(d), local(), format("HH:mm MMM Do");//24hour Time + month & date
    //need to have return to ensure that the method returns a VALUES
    }
  },
  sinceLocalVisistDate(d){
    return moment,utc(d).local().fromNow();
  }
},
  created() {
    this.fetchPatients();
  }
});
