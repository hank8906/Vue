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
            showAnswer: false,
            countDown: 5,
            timer: null,
        };
    },

    // 計算屬性，可將邏輯包裝為類似函數的樣子，但並不能視為函數
    computed:{
        label(){
            return this.showAnswer 
            ? "隱藏答案" + this.countDown
            : "顯示答案"; 
        }
    },

    // 定義方法
    methods:{
        toggleAnswer(){
            this.showAnswer = !this.showAnswer;            
        }
    },

    // 定義監聽器，要與監聽的屬性維持同樣的名字，不能自定義
    watch:{
        showAnswer(newVal, oldVal) {
            if(newVal){
                // 顯示答案後，將不是5的秒數回到5秒
                this.countDown = 5;

                // 將timer裡的值清除，以免倒計時未結束時用戶手動點擊隱藏答案，又點擊顯示答案
                // 但timer並未被清除，這時會註冊多個timer，這些timer會同時修改countdown的值
                if(this.timer){
                    clearInterval(this.timer);
                    this.timer = null;
                }

                // 正常情況
                // 倒計時為1秒
                this.timer = setInterval(() => {
                    // 一次減一秒
                    this.countDown -= 1;

                    //倒計時到0時
                    if(this.countDown == 0){
                        this.showAnswer = false;
                        clearInterval(this.timer);
                        this.timer = null;
                    }
                }, 1000);
            }
        }
    },
});    
app.mount("#app")