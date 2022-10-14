(function(){
	//variáveis
	let cnv = document.querySelector("#meuCanvas");
	let ctx = cnv.getContext("2d");
	let blk;
	
	//Teclas
	const LEFT = 37
	const UP = 38
	const RIGHT = 39
	const DOWN = 40;

	const A = 65;
	const W = 87;
	const D = 68;
	const S = 83;
	//Movimentos
	let mvLeft = mvUp = mvRight = mvDown = false;
	
	let plLeft = plUp = plRight = plDown = false;
	//Arrays
	let sprites = [];
	let blocks = [];
	
	
	//Objetos instanciados com os seguintes parâmetros: posX, posY, Largura, Altura e cor

	var player1 = new Sprite(840, 5, 50, 50, "./naticima.png", true);
	sprites.push(player1);

	var player2 = new Sprite(50, 345, 50, 50, "./semgracacima.png", true);
	sprites.push(player2);
	
	let block1 = new Sprite(110, 250, 20, 150 , "#000");
	sprites.push(block1);
	blocks.push(block1);

	let block2 = new Sprite(800, 0, 20, 150, "#000");
	sprites.push(block2);
	blocks.push(block2);

	let block3 = new Sprite(500, 100, 100, 100, "#000");
	sprites.push(block3);
	blocks.push(block3);

	let block4 = new Sprite(300, 200, 10, 100, "#000");
	sprites.push(block4);
	blocks.push(block4);

	let block5 = new Sprite(150, 50, 200, 50, "#000");
	sprites.push(block5);
	blocks.push(block5);

	let block6 = new Sprite(400, 320, 300, 30, "#000");
	sprites.push(block6);
	blocks.push(block6);

	let block7 = new Sprite(700, 250, 20, 100, "#000");
	sprites.push(block7);
	blocks.push(block7);
	
	//entradas
	//Evento disparado quando uma tecla é pressionada
	window.addEventListener("keydown",function(e){
		let key = e.keyCode;
		switch(key){
			case LEFT:
				mvLeft = true;
				break;
			case UP:
				mvUp = true;
				break;
			case RIGHT:
				mvRight = true;
				break;
			case DOWN:
				mvDown = true;
				break;
		}
	},false);
	
	//Evento disparado quando uma tecla é solta
	window.addEventListener("keyup",function(e){
		let key = e.keyCode;
		switch(key){
			case LEFT:
				mvLeft = false;
				break;
			case UP:
				mvUp = false;
				break;
			case RIGHT:
				mvRight = false;
				break;
			case DOWN:
				mvDown = false;
				break;
		}
	},false);
	//Player 2 
	window.addEventListener("keydown",function(r){
		let key = r.keyCode;
		switch(key){
			case A:
				plLeft = true;
				break;
			case W:
				plUp = true;
				break;
			case D:
				plRight = true;
				break;
			case S:
				plDown = true;
				break;
		}
	},false);
	
	//Evento disparado quando uma tecla é solta
	window.addEventListener("keyup",function(r){
		let key = r.keyCode;
		switch(key){
			case A:
				plLeft = false;
				break;
			case W:
				plUp = false;
				break;
			case D:
				plRight = false;
				break;
			case S:
				plDown = false;
				break;
		}
	},false);

	//funções
	function loop(){
		window.requestAnimationFrame(loop,cnv);
		update();
		update2();
		render();
	}
	player1.velocidade = 1.2;

	//Atualizações
	function update(){
		if(mvLeft && !mvRight){
			player1.image.src = "natiesquerda.png"
			player1.posX -=player1.velocidade;
		}
		if(mvRight && !mvLeft){
			player1.image.src = "natidireita.png"
			player1.posX +=player1.velocidade;
		}
		if(mvUp && !mvDown){
			player1.image.src = "naticima.png"
			player1.posY -=player1.velocidade;
		}
		if(mvDown && !mvUp){
			player1.image.src = "natibaixo.png"
			player1.posY +=player1.velocidade;
		}
		//Limites da tela
		player1.posX = Math.max(0, Math.min(cnv.width - player1.width, player1.posX));
		player1.posY = Math.max(0, Math.min(cnv.height - player1.height, player1.posY));
		
		//Colisões
		for(let i in blocks){
			let blk = blocks[i];
			if(blk.visible){
				blockCollide(player1,blk);
			}
			if(blk.visible){
				playerCollide(player1,player2);	
			}
		}
		


	}
	player2.velocidade = 1.2;
	//Player 2 
	function update2(){
		if(plLeft && !plRight){
			player2.image.src = "semgracaesquerda.png"
			player2.posX -=player2.velocidade;
		}
		if(plRight && !plLeft){
			player2.image.src = "semgracadireita.png"
			player2.posX +=player2.velocidade;
		}
		if(plUp && !plDown){
			player2.image.src = "semgracacima.png"
			player2.posY -=player2.velocidade;
		}
		if(plDown && !plUp){
			player2.image.src = "semgracabaixo.png"
			player2.posY +=player2.velocidade;
		}
		//Limites da tela
		player2.posX = Math.max(0, Math.min(cnv.width - player2.width, player2.posX));
		player2.posY = Math.max(0, Math.min(cnv.height - player2.height, player2.posY));
		
		//Colisões
		for(let i in blocks){
			var blk = blocks[i];
			if(blk.visible){
				blockCollide(player2,blk);
			}					
			}
			if(blk.visible){
				playerCollide(player2,player1);	
			
		}	
		
		
	}

	//Renderização ou desenho na tela
	function render(){
		ctx.clearRect(0,0,cnv.width,cnv.height);
		for(let i in sprites){
			let spr = sprites[i];
			if(spr.visible){
				if (spr.image) {
					ctx.drawImage(spr.image,
						spr.posX,
						spr.posY,
						spr.width, spr.height);	
					ctx.rotate(0);			
				}else{
					ctx.fillStyle = spr.color;
					ctx.fillRect(spr.posX, spr.posY, spr.width, spr.height);
				}
			}
		}
		
	}
	loop();
}());













