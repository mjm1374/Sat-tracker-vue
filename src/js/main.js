$(document).ready(function(){
    console.log('Here in Main');

    var tester = function(){
        console.log('xxx');

        function y(){
            console.log('yyy');
        }
    }

    tester();

 

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

  new Vue({ el: '#components-demo' });
  new Vue({ el: '#custom-input' });
  

  new Vue({
    el: '#blog-post-demo',
    data: {
      posts: [
        { id: 1, title: 'My journey with Vue' , content: '...content....'},
        { id: 2, title: 'Blogging with Vue' , content: '...content....' },
        { id: 3, title: 'Why Vue is so fun' , content: '...content....' }
      ],
      postFontSize: 1
    },
    methods: {
        onEnlargeText: function (enlargeAmount) {
          this.postFontSize += enlargeAmount;
        }
      }
  });



  new Vue({
    el: '#dynamic-component-demo',
    data: {
      currentTab: 'Home',
      tabs: ['Home', 'Posts', 'Archive']
    },
    computed: {
      currentTabComponent: function () {
        return 'tab-' + this.currentTab.toLowerCase()
      }
    }
  });



 
 
 