Vue.component("button-counter",{data:function(){return{count:0}},template:'<button v-on:click="count++">You clicked me {{ count }} times.</button>'}),Vue.component("satList",{data:function(){return{markerid:0,satName:"unknown"}},template:'<a class="markerClick" data-markerid="{{ markerid }}" href="javascript:satDetail({{ markerid }} ,0);">{{ satName}}</a>'}),Vue.component("blog-post",{props:["post"],template:'\n      <div class="blog-post">\n    \n            <h3 v-html="post.title "></h3>\n            <button v-on:click="$emit(\'enlarge-text\', 0.1)">\n            Enlarge text\n            </button>\n            <div v-html="post.content"></div>\n \n      </div>\n    '}),$(document).ready(function(){console.log("Here in Main")});var app=new Vue({el:"#app",data:{message:"Hello Vue!"}});new Vue({el:"#components-demo"}),new Vue({el:"#blog-post-demo",data:{posts:[{id:1,title:"My journey with Vue",content:"...content...."},{id:2,title:"Blogging with Vue",content:"...content...."},{id:3,title:"Why Vue is so fun",content:"...content...."}],postFontSize:1},methods:{onEnlargeText:function(t){this.postFontSize+=t}}});