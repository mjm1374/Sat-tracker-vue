
  Vue.component('button-counter', {
    data: function () {
      return {
        count: 0
      }
    },
    template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
  });
  
  Vue.component('satList',{
      data: function(){
          return{
            markerid: 0,
            satName: 'unknown'
          }

      },
      template: '<a class="markerClick" data-markerid="{{ markerid }}" href="javascript:satDetail({{ markerid }} ,0);">{{ satName}}</a>'

  });

  Vue.component('blog-post', {
    props: ['post'],
    template: `
      <div class="blog-post">
    
            <h3>{{ post.title }}</h3>
            <button v-on:click="$emit('enlarge-text')">
            Enlarge text
            </button>
            <div v-html="post.content"></div>
 
      </div>
    `
  })