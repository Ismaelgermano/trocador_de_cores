function mudarCor () {
    let codigoCor = document.getElementById("codigoDaCor").value

    if (codigoCor === "") {
        alert("Nenhum valor exadecimal foi inserido!")
    } else {

        document.getElementById("container").style.background = codigoCor

        let hex = codigoCor;
        let rgb = parseInt(hex.substring(1), 16);
        let red = (rgb >> 16) & 0xFF;
        let green = (rgb >> 8) & 0xFF;
        let blue = rgb & 0xFF;

        let codRGB = "rgb(" + red + ", " + green + ", " + blue + ")"

        let novoElemento = document.createElement("p");
        novoElemento.className = "paragrafo"
        let textoDoElemento = document.createTextNode(codRGB);
        novoElemento.appendChild(textoDoElemento);
        document.getElementById("codigos").appendChild(novoElemento);

    }
}