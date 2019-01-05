$(document).ready(function(){
    console.log('Here in Main');
  });

  var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!'
    }
  });

  new Vue({ el: '#components-demo' });

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
          this.postFontSize += enlargeAmount
        }
      }
  });



 
 
 