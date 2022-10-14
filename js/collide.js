function blockCollide(r1,r2){
	//r1 -> bloqueado
	//r2 -> parede
	//armazenam a distância entre os retângulos
	let posicaoX = r1.centerX() - r2.centerX();
	let posicaoY = r1.centerY() - r2.centerY();
	
	//soma das metades
	let somaMetadeWidth = r1.halfWidth() + r2.halfWidth();
	let somaMetadeHeight = r1.halfHeight() + r2.halfHeight();
	
	if(Math.abs(posicaoX) < somaMetadeWidth && Math.abs(posicaoY) < somaMetadeHeight){
		
		let overlapX = somaMetadeWidth - Math.abs(posicaoX);
		let overlapY = somaMetadeHeight - Math.abs(posicaoY);
		
		if(overlapX >= overlapY){//colisão por cima ou por baixo
			if(posicaoY > 0){//por cima
				r1.posY += overlapY;
			} else {
				r1.posY -= overlapY;
			}
		} else {//colisão pela esquerda ou direita
			if(posicaoX > 0){//colisão pela esquerda
				r1.posX += overlapX;
			} else {
				r1.posX -= overlapX;
			}
		}
	}
}

function playerCollide(r1, r2){
	//r1 -> bloqueado
	//r2 -> parede
	//armazenam a distância entre os retângulos
	let posicaoX = r1.centerX() - r2.centerX();
	let posicaoY = r1.centerY() - r2.centerY();
	
	//soma das metades
	let somaMetadeWidth = r1.halfWidth() + r2.halfWidth();
	let somaMetadeHeight = r1.halfHeight() + r2.halfHeight();
	
	if(Math.abs(posicaoX) < somaMetadeWidth && Math.abs(posicaoY) < somaMetadeHeight){
		
		let overlapX = somaMetadeWidth - Math.abs(posicaoX);
		let overlapY = somaMetadeHeight - Math.abs(posicaoY);
		
		if(overlapX >= overlapY){//colisão por cima ou por baixo
			if(posicaoY > 0){//por cima
				r1.posY += overlapY;
				
					const danoPlayer1 = Math.floor(Math.random() * 4);
					const danoPlayer2 = Math.floor(Math.random() * 4);
					r1.posY += 50;
					r2.posY -= 50;

					console.log(danoPlayer1);
					console.log(danoPlayer2);

					const p1 = document.getElementById('player1');
					const p2 = document.getElementById('player2');

					for (let index = 0; index < danoPlayer1; index++) {
						p2.removeChild(select.lastChild);
					}

					for (let index = 0; index < danoPlayer2; index++) {
						p1.removeChild(select.lastChild);
					}


			} else {
				r1.posY -= overlapY;
				
					const danoPlayer1 = Math.floor(Math.random() * 4);
					const danoPlayer2 = Math.floor(Math.random() * 4);
					r1.posY -= 50;
					r2.posY += 50;
					console.log(danoPlayer1);
					console.log(danoPlayer2);

					const p1 = document.getElementById('player1');
					const p2 = document.getElementById('player2');

					for (let index = 0; index < danoPlayer1; index++) {
						p2.removeChild(p2.lastChild);
					}

					for (let index = 0; index < danoPlayer2; index++) {
						p1.removeChild(p1.lastChild);
					}
					
			}
		} else {//colisão pela esquerda ou direita
			if(posicaoX > 0){//colisão pela esquerda
				r1.posX += overlapX;
				
					const danoPlayer1 = Math.floor(Math.random() * 4);
					const danoPlayer2 = Math.floor(Math.random() * 4);
					r1.posX += 50;
					r2.posX -= 50;
					console.log(danoPlayer1);
					console.log(danoPlayer2);

					const p1 = document.getElementById('player1');
					const p2 = document.getElementById('player2');

					for (let index = 0; index < danoPlayer1; index++) {
						p2.removeChild(p2.lastChild);
					}

					for (let index = 0; index < danoPlayer2; index++) {
						p1.removeChild(p1.lastChild);
					}
				
				
			} else {
				r1.posX -= overlapX;
				
					const danoPlayer1 = Math.floor(Math.random() * 4);
					const danoPlayer2 = Math.floor(Math.random() * 4);
					r1.posX -= 50;
					r2.posX += 50;
					console.log(danoPlayer1);
					console.log(danoPlayer2);

					const p1 = document.getElementById('player1');
					const p2 = document.getElementById('player2');

					for (let index = 0; index < danoPlayer1; index++) {
						p2.removeChild(p2.lastChild);
					}

					for (let index = 0; index < danoPlayer2; index++) {
						p1.removeChild(p1.lastChild);
					}
				
			}
		}

		if(document.getElementById("player1").childElementCount == 0){
			alert('Nããããããããooo! A equipe Natiruts perdeu!')
			document.location.reload(true);
		}

		if(document.getElementById("player2").childElementCount == 0){
			alert('A equipe Natiruts venceu!')
			document.location.reload(true);
		}

	}
}
