// 示例：计算属性和方法的区别
const app = Vue.createApp({
  data() {
    return {
      blogPosts: [
        "Vue 3.0x 入门实战",
        "Vue 3.x 完全指南",
        "React 18 新特性介绍",
        "JavaScript 基础语法概览",
      ],
      counter: 0,
    };
  },
  
  // 有緩存
  computed:{
    vueBlogs(){
      console.log("調用了 vueBlogs() 計算屬相函數");
      return this.blogPosts.filter((blog) => blog.includes("Vue"));
    }
  },

  // 無緩存
  methods:{
    getVueBlogs(count){
      console.log("調用了 vueBlogs() 計算屬相函數");
      return this.blogPosts.filter((blog) => blog.includes("Vue")).slice(0,count);
    }
  }
});
app.mount("#app");
