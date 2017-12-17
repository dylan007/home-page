window.onload = function(){
//fixed number of events to be attended to get a certificate-domain wise
const codeCert =10;
const webCert =10;
const appCert =10;
const designCert =10;
const hashCert =10;
//total number of decided events for each domain
const codeTotal =15;
const webTotal =15;
const appTotal =15;
const designTotal =15;
const hashTotal =15;
//Events attended till now (current)-domain wise 
var codeCurr;
var webCurr;
var appCurr;
var designCurr;
var hashCurr;
/* 
To calulate cuurent completion rate for certificate 
eg : 
(codeCurr/codeCert)*100 = completion rate, to update css of progress bar 
value displayed in progress bar = codeCurr (NOT COMPLETION RATE)

//completion rates per domian 
var codeCompRate = (codeCurr/codeCert)*100;
var webCompRate;= (webCurr/webCert)*100;
var appCompRate =(appCurr/appCert)*100;
var designCompRat = (designCurr/designCert)*100;
var hashCompRate =(hashCurr/hashCert)*100;
//progress is same as attendance(data for charts) - domain wise 
var codeProg = (codeCurr/codeTotal)*100;
var webProg =(webCurr/webTotal)*100;
var appProg =(appCurr/appTotal)*100;
var designProg =(designCurr/designTotal)*100;
var hashProg =(hashCurr/hashTotal)*100;
//second parameter for chart
var codeSecParChart = 100 - codeProg;
var webSecParChart = 100 - webProg;
var appSecParChart = 100 - appProg;
var designSecParChart = 100 - designProg;
var hashSecParChart = 100 - hashProg;
*/
var ctx = document.getElementById("codeChart").getContext('2d');
var codeChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ["Workshops attended","Workshops left to get certificate"],
    datasets: [{
      backgroundColor: [
        "#3498db",
        "#ffffff"
      ],
      data: [33.5, 7]
    }]
  },
  options: {
      legend: {
         labels: {
            fontColor: 'white' 
         },
         display:false
      }
   },

});
var ctx1 = document.getElementById("webChart").getContext('2d');
var webChart = new Chart(ctx1, {
  type: 'doughnut',
  data: {
    labels: ["Workshops attended","Workshops not attended"],
    datasets: [{
      backgroundColor: [
        "#3498db",
        "#ffffff"
      ],
      data: [12, 7]
    }]
  },
  options: {
      legend: {
         labels: {
            fontColor: 'white' 
         },
         display:false
      }
   }
});
var ctx2 = document.getElementById("appChart").getContext('2d');
var appChart = new Chart(ctx2, {
  type: 'doughnut',
  data: {
    labels: ["Workshops attended","Workshops not attended"],
    datasets: [{
      backgroundColor: [
        "#3498db",
        "#ffffff"
      ],
      data: [12, 7]
    }]
  },
  options: {
      legend: {
         labels: {
            fontColor: 'white' 
         },
         display:false
      }
   }
});
var ctx3 = document.getElementById("designChart").getContext('2d');
var designChart = new Chart(ctx3, {
  type: 'doughnut',
  data: {
    labels: ["Workshops attended","Workshops not attended"],
    datasets: [{
      backgroundColor: [
        "#3498db",
        "#ffffff"
      ],
      data: [12, 7]
    }]
  },
  options: {
      legend: {
         labels: {
            fontColor: 'white' 
         },
         display:false
      }
   }
});
var ctx4 = document.getElementById("hashChart").getContext('2d');
var hashChart = new Chart(ctx4, {
  type: 'doughnut',
  data: {
    labels: ["Workshops attended","Workshops not attended"],
    datasets: [{
      backgroundColor: [
        "#3498db",
        "#ffffff"
      ],
      data: [12, 7]
    }]
  },
  options: {
      legend: {
         labels: {
            fontColor: 'white' 
         },
         display:false
      }
   }
});
//modal for certificates 
var certModal = document.getElementById('Mod');
var link = document.getElementById("myBtn");
var exit = document.getElementsByClassName("close")[0];
link.onclick = function() {
    certModal.style.display = "block";
}

exit.onclick = function() {
    certModal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == certModal ) {
        certModal.style.display = "none";
    }
    else if(event.target == eventsModal){
    	eventsModal.style.display = "none";
    }
}

//modal for events 
var eventsModal = document.getElementById('eventMod');
var connect = document.getElementById('viewEvents');
var closed = document.getElementsByClassName("close")[1];

connect.onclick = function(){
	eventsModal.style.display = "block";
}
closed.onclick = function(){
	eventsModal.style.display= "none";

}



}