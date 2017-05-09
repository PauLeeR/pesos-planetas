function Peso(){
	var elPeso = document.getElementById('peso').value;
	var planeta = document.getElementById("elegir-planeta").value;


	if(planeta == "mercurio"){
		alert("Tu peso en Mercurio es de: " + ((parseInt(elPeso) * 3.7) / 9.8).toFixed(3) + "kg");
	}
	else if(planeta == "venus"){
		alert("Tu peso en Venus es de: " + ((parseInt(elPeso) * 8.87) / 9.8).toFixed(3) + " Kg");
	}
	else if(planeta =="marte"){
		alert("Tu peso en Marte es de: " +((parseInt(elPeso) * 3.71) / 9.8).toFixed(3) + " Kg");
	}
	else if(planeta =="jupiter"){
		alert("Tu peso en Jupiter es de: " +((parseInt(elPeso) * 24.79) / 9.8).toFixed(3) + " Kg");
	}	
	else if(planeta == "saturno"){
		alert("Tu peso en Saturno es de: " + ((parseInt(elPeso) * 10.44) / 9.8).toFixed(3) + " Kg");
	}
	else if(planeta == "urano"){
		alert("Tu peso en Urano es de: " + ((parseInt(elPeso) * 8.69) / 9.8).toFixed(3) + " Kg");
	}
	else if(planeta =="neptuno"){
		alert("Tu peso en Neptuno es de: " +((parseInt(elPeso) * 11.15) /9.8).toFixed(3) + " Kg");
	}	
	else if(planeta =="pluton"){
		alert("Tu peso en Pluton es de: " +((parseInt(elPeso) * 0.62) / 9.8).toFixed(3) + " Kg");

	}
}
