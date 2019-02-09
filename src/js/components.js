
  Vue.component('button-counter', {
    data: function () {
      return {
        count: 0
      };
    },
    template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
  });
  
  Vue.component('satList',{
      data: function(){
          return{
            markerid: 0,
            satName: 'unknown'
          };

      },
      template: '<a class="markerClick" data-markerid="{{ markerid }}" href="javascript:satDetail({{ markerid }} ,0);">{{ satName}}</a>'

  });

  Vue.component('blog-post', {
    props: ['post'],
    template: `
      <div class="blog-post">
    
            <h3 v-html="post.title "></h3>
            <button v-on:click="$emit('enlarge-text', 0.1)">
            Enlarge text
            </button>
            <div v-html="post.content"></div>
 
      </div>
    `
  });



  Vue.component('custom-input', {
    props: ['value'],
    template: `
      <input
        v-bind:value="value"
        v-on:input="$emit('input', $event.target.value)"
      >
    `
  });

  Vue.component('alert-box', {
    template: `
      <div class="demo-alert-box">
        <strong>Error!</strong>
        <slot></slot>
      </div>
    `
  });

  Vue.component('tab-home', { 
    template: '<div>Home component</div>' 
  });
  Vue.component('tab-posts', { 
    template: '<div>Posts component</div>' 
  });
  Vue.component('tab-archive', { 
    template: '<div>Archive component</div>' 
  });

