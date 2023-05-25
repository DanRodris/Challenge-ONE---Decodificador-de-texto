const criptografar = document.getElementById("btn-criptografar");
const desencriptografar = document.getElementById("btn-desencriptografar");
const copiar = document.getElementById("btn-copiar");
const textoInicial = document.getElementById("textoInput");
const textoFinal = document.getElementById("textoFinal");
const menino = document.getElementById("menino");
const textoInfo = document.getElementById("textoInfo");
const direita = document.getElementById("direita");

const remplace = (newvalue) =>{
    textoFinal.innerHTML = newvalue;
	textoFinal.classList.add("ajustar");
    direita.classList.add("ajustar");
    textoInicial.value = "";
    textoInicial.style.height = "auto";
    textoInicial.placeholder = "Digite o texto aqui";
    menino.classList.add("ocultar");
    textoInfo.classList.add("ocultar");
    copiar.classList.remove("bn-ocultar");
}

const reset = () =>{
    textoInicial.value = "";
    textoInicial.style.height = "auto";
    textoFinal.innerHTML = "";
    direita.classList.remove("ajuste")
    textoFinal.classList.remove("ajustar");
    menino.classList.remove("ocultar");
    textoFinal.placeholder ="Nenhuma mensagem encontrada";
    textoInfo.classList.remove("ocultar");
    copiar.classList.add("bn_ocultar");
    textoInicial.focus();
};

let remplazar = [
	["e", "enter"],
	["o", "ober"],
	["i", "imes"],
	["a", "ai"],
	["u", "ufat"]
];

criptografar.addEventListener('click', () =>{
    const texto = textoInicial.value.toLowerCase();
    if (texto != ""){
        function criptar(newtext){
            for (let i = 0; i < remplazar.length; i++){
                if (newtext.includes(remplazar[i][0])) {
					newtext = newtext.replaceAll(remplazar[i][0], remplazar[i][1]);
				};
                

            };
            return newtext;
        };
        remplace(criptar(texto));
    }else{
        alert("Digite o texto para Criptografar");
		reset();
    };


});

desencriptografar.addEventListener('click', () =>{
      const texto = textoInicial.value.toLowerCase();
      if (texto != ""){
        function desencript(newtext){
            for (let i = 0; i < remplazar.length; i++){
                if (newtext.includes(remplazar[i][1])) {
					newtext = newtext.replaceAll(remplazar[i][1], remplazar[i][0]);
				};
                

            };
            return newtext;
        };
        remplace(desencript(texto));
    }else{
        alert("Digite o texto para Desencriptografar");
		reset();
    };


});

copiar.addEventListener("click", () =>{
    let texto = textoFinal;
	texto.select();
	document.execCommand("copy");
    alert("Texto Copiado");
	reset();

});

textoInicial.addEventListener("change", e =>{
    textoInicial.style.height = "auto";
	let scHeight = e.target.scrollHeight;
	textoInicial.style.height = `${scHeight}px`;

});

textoInicial.addEventListener("keyup", e => {
	textoInicial.style.height = "auto";
	let scHeight = e.target.scrollHeight;
	textoInicial.style.height = `${scHeight}px`;
});



