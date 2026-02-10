function jugar() {
    let continuar = "SI";

    while (continuar === "SI") {

        // 1. Número aleatorio entre 1 y 9
        const numeroComputadora = Math.floor(Math.random() * 9) + 1;

        // 2. Pedir número entre 3 y 6 con validación
        let numeroUsuario;

        while (true) {
            let entrada = prompt("Ingrese un número entre 3 y 6:");

            // Validar que no sea null (cancelar)
            if (entrada === null) {
                alert("Debe ingresar un número.");
                continue;
            }

            // Validar que sea entero numérico
            if (!/^-?\d+$/.test(entrada)) {
                alert("Error: Debe ingresar un número entero.");
                continue;
            }

            numeroUsuario = parseInt(entrada);

            // Validar rango
            if (numeroUsuario < 3 || numeroUsuario > 6) {
                alert("Error: El número debe estar entre 3 y 6.");
            } else {
                break;
            }
        }

        // 3. Pedir adivinanza
        let adivinanza;
        while (true) {
            adivinanza = prompt("¿Cree que su número es MAYOR, MENOR o IGUAL al de la computadora?").toUpperCase();

            if (adivinanza === "MAYOR" || adivinanza === "MENOR" || adivinanza === "IGUAL") {
                break;
            } else {
                alert("Debe escribir MAYOR, MENOR o IGUAL.");
            }
        }

        // 4. Comparar números
        let resultado;
        if (numeroUsuario > numeroComputadora) resultado = "MAYOR";
        else if (numeroUsuario < numeroComputadora) resultado = "MENOR";
        else resultado = "IGUAL";

        // 5. Mostrar resultado
        let mensaje = `La computadora eligió ${numeroComputadora}, usted eligió ${numeroUsuario}.\n` +
                      `Usted dijo que su número es ${adivinanza}.\n`;

        if (adivinanza === resultado) {
            mensaje += "¡Ha adivinado!";
        } else {
            mensaje += "No adivinó.";
        }

        alert(mensaje);

        // 6. Preguntar si quiere jugar otra vez
        continuar = prompt("¿Desea jugar otra vez? (SI / NO)").toUpperCase();

        if (continuar !== "SI") {
            alert("Gracias por jugar.\n Nombre - Alumno: Yommany Morales\nCarnet: 18001560");
            break;
        }
    }
}

jugar();