class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.0,
      };
      //adicione a imagem block.png a esta classe
      this.image = loadImage("block.png")
      this.visibility = 255
      
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      //se a velocidade dos blocos for menor que 3, exiba a caixa
      //se não for, remova a caixa do mundo, adicione uma imagem no lugar e faça com que ela desapareça devagar
      if(this.body.speed < 3){
      var pos= this.body.position;
      rectMode(CENTER);
      rect(pos.x,pos.y,this.width, this.height);
      } else {
        World.remove(world, this.body);
        this.visibility = this.visibility -5
        console.log(this.visibility)
        push();
        imageMode(CENTER)
        tint(255,this.visibility)
        image(this.image,this.body.position.x,this.body.position.y,40,40)
        pop();
      }
    }
}