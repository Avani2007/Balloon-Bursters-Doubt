class Form{

    constructor(){
        this.button = createButton('Enter')
        this.input = createInput('Name (as entered before)')
        this.greeting = createElement('h1')
    }

    display(){
        var title = createElement('h1')
        title.html('Balloon Bursters')
        
        title.position(700,200)
        this.button.position(970,400)
        this.input.position(770,400)
        this.greeting.position(650,150)

        this.button.mousePressed(()=>{
            this.button.hide()
            this.input.hide()
            player.name = this.input.value

            PC+=1
            console.log(PC);
            player.index = 1
           player.updateName()
            player.updateCount(PC)
            this.greeting.html("Hello.."+player.name+"!")
            
           

        })
    }

}