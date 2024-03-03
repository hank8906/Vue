const Playlist = {
    data(){
        return {
            playlist: ["What about now","一千萬個可能","Me llamas"],
            searchTerm: "",
        };
    },
    computed:{
        filteredPlaylist() {
            if(this.searchTerm) { 
                return this.playlist.filter((song) =>
                    song.toLowerCase().includes(this.searchTerm.toLowerCase())
                );
            }else {
                return this.playlist;
            }
        },
    },
};

// 用mount方法掛載Vue到id為app的div上以便使用
Vue.createApp(Playlist).mount("#app");

