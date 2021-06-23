class Player {
    
    constructor() {
        this.index = null;
        this.score=0;
        this.name = null
    }


    readCount() {
        var ref = database.ref('playerCount').once('value', function (data) {
            PC = data.val()
        })
    }

    updateCount(count) {
        database.ref('playerCount').set({
            'playerCount': count
        })
    }
//    title = createElement("h2")

    updateName() {
        var playerIndex = 'players/player' + this.index
        database.ref(playerIndex).set({
            'name': this.name,
            'score':this.score
        })
    }

    static readPlayerInfo(){
        var ref = database.ref('players').once('value', (data)=>{
            allPlayers= data.val();
        })
    }
}