//App config

const App = {
    
    data() {
        return {
            inputValue: "",
            api: "https://api.lyrics.ovh/",
            songs: []
        }
        
    },

   methods: {
       async searchSong () {
           const request = await fetch(`${this.api}/suggest/${this.inputValue}`);
           const response = await request.json();
           this.songs = response.data
            

       }
   },
}

Vue.createApp(App).mount(".main") 