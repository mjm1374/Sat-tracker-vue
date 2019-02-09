/* Satelite search scripts by Mike McAllister
 * mike@logikbox.com
 * 02/09/2019
 *
 * based of the N2YO API
 * https://www.n2yo.com/api/#above
 *
 * Addiotnal Data from UCS
 * https://www.ucsusa.org/nuclear-weapons/space-weapons/satellite-database
 *
 */

const apiKey = "6MVMLK-EJ3FXU-BTVB3F-3TNQ";
//const GMAP = "AIzaSyDpn5_1gAS4SJOuzvkeMZK22yOlvZY2kKE";
const satURL = "https://www.n2yo.com/rest/v1/satellite/";


    var x = document.getElementById("local");
    var sLat = document.getElementById("searchLat");
    var sLng = document.getElementById("searchLng");
    var sRad = document.getElementById("searchRad");
    var sButton = document.getElementById("searchAbove");
    var e = document.getElementById("searchtype");
    let SatList = [];
    let markers = [];
    
    let year =  (new Date()).getFullYear();
    $('.copyright').text(year);
    


$(document).ready(function(){

  var local = getLocation();

    function initValidation()
    {
        // irrelevant code here
        function validate(_block){
            console.log( "test", _block );
        }
    
        initValidation.validate = validate;
    }

    initValidation();
    initValidation.validate( "hello" );

  });

  var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!'
    }
  });

//   new Vue({ el: '#components-demo' });
//   new Vue({ el: '#custom-input' });
  

  // var blog = new Vue({
  //   el: '#blog-post-demo',
  //   data: {
  //     posts: [
  //       { id: 1, title: 'My journey with Vue!' , content: '...content....'},
  //       { id: 2, title: 'Blogging with Vue' , content: '...content....' },
  //       { id: 3, title: 'Why Vue is so fun' , content: '...content....' }
  //     ],
  //     postFontSize: 1
  //   },
  //   methods: {
  //       onEnlargeText: function (enlargeAmount) {
  //         this.postFontSize += enlargeAmount;
  //       }
  //     }
  // });


 
//   new Vue({
//     el: '#dynamic-component-demo',
//     data: {
//       currentTab: 'Home',
//       tabs: ['Home', 'Posts', 'Archive']
//     },
//     computed: {
//       currentTabComponent: function () {
//         return 'tab-' + this.currentTab.toLowerCase()
//       }
//     }
//   });


var loopcnt = 0;
setInterval(function(){ 
  loopcnt++;
  app.message = "Loop" + loopcnt;

}, 3000);
 
 
 