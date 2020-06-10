var app = new Vue({
                el: '#app',
                data: {
                    items: []
                },
                mounted: function(){
                   this.loadItems();
                },
                methods: {
                    loadItems: function(){

                        // Init variables
                        var self = this
                        var app_id = "appw7q9xOL7nliwUP";
                        var app_key = "keyCLfpLr70tFjAiJ";
                        this.items = []
axios.get(
                            "https://api.airtable.com/v0/"+app_id+"/Challenges-table?view=Grid%20view",
                            {
                                headers: { Authorization: "Bearer "+app_key }
                            }
                        ).then(function(response){
                            self.items =response.data.records;
                        }).catch(function(error){
                            console.log(error)
                        })
                    }
                }
            })
