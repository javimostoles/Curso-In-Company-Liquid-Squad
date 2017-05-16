var trenesOperativos = 5;
var totalTrenes = 15;

function estadoDetalle () {
	if(trenesOperativos === 0){
		console.log("Ningún tren está operativo");
		return
	}

	if(trenesOperativos === totalTrenes){
		console.log("Todos los trenes está operativos");
		return
	}

  for (var i = 1; i <= totalTrenes; i++) {
	  let extraInfo = "";

		if(i === 13){
			var date = new Date();
			if(date.getDay() === 6){
				extraInfo += ". Info: ¡Tren fiestero!";
			}
		}

	  if (i === 10 || i === 12){
		  extraInfo += ". Info: servicio nocturno";
	  }

	  let info = "El tren " + i + " esta " + (i <= trenesOperativos ? "funcionando" : "parado");
	  console.log(info + extraInfo);
  }
};