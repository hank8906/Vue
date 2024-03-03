const app = Vue.createApp({
    // data屬性值是一個函數
    // 函數需要返回一個對像
    data() {
        return {
            name:"同學",
            link:"https://www.dcard.tw/f",
            todos:[
                {
                    content:"DS",
                    complete:true,
                },
                {
                    content:"法條",
                    complete:false,
                },
                {
                    content:"網管",
                    complete:false,
                },
            ],
            books:["Javascript","Java","Python"],
        };
    },
});    
app.mount("#app")