function yourWeightBeyond(){

	function sistemaSolar(planeta, gravedad){
		this.planeta = planeta;
		this.gravedad = gravedad;
	}

	var planetas = [];
	var mercurio = new sistemaSolar("mercurio", 2.8);
	var venus = new sistemaSolar("venus", 8.9);
  var marte = new sistemaSolar("marte", 3.72);
  var jupiter = new sistemaSolar("jupiter", 22.9);
	var saturno = new sistemaSolar("saturno", 9.1);
	var urano = new sistemaSolar("urano", 7.8);
	var neptuno = new sistemaSolar("neptuno", 11.0);

	planetas.push(mercurio);
	planetas.push(venus);
	planetas.push(marte);
	planetas.push(jupiter);
	planetas.push(saturno);
	planetas.push(urano);
	planetas.push(neptuno);

	planetas.forEach(function calcularPeso(el){
			var contenedor = document.getElementById('planeta');
			var selector = document.createElement('option');
			var planeta = document.createTextNode(el.planeta);
			selector.appendChild(planeta);
			contenedor.appendChild(selector);

			document.getElementById('res').addEventListener("click", function calculo(){
				var peso = document.getElementById('peso').value;
				var selector = document.getElementById('planeta').value;
				var g_tierra = 9.8;
				var peso_final = peso * el.gravedad / g_tierra;
				if(selector == el.planeta){
					alert("Tu peso en " + el.planeta + " es: " + peso_final.toFixed(2));
				}
			});
	});
}

yourWeightBeyond();
