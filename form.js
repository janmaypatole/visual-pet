class Form {

constructor(){
 this.title = createElement('h2')
 this.button1 = createButton("feed the dog")
 this.button2 = createButton("add the milk")
    }

display(){
this.title.html("welcome to visual pet")
this.title.position(500,50)
this.button.position(500,400)

this.button.mousePresssed(()=>{
    milku = milku-1
})

this.button.mousePresssed(()=>{
  milku = milku+1
})
}
}