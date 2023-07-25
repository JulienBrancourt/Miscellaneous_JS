const generationCouleur = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    const ajoutTitreBloc1 = () => {
        const bloc1 = document.querySelector('#generateurCouleur')
        bloc1.innerHTML = '' //pour éviter l'accumulation de balises h2 dans le bloc

        const titreBloc1 = document.createElement('h2')
        titreBloc1.textContent = `RGB : ${r},${g},${b}`
        titreBloc1.style.backgroundColor = 'grey'
        titreBloc1.style.padding = '15px'
        titreBloc1.style.borderRadius = '10px'

        bloc1.appendChild(titreBloc1)
        bloc1.style.backgroundColor = `rgb(${r},${g},${b})`
            
    };


    ajoutTitreBloc1();
}

setInterval(generationCouleur, 1500)