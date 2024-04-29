let audios = [
    {caminho:'assets/audios/bom-dia-princesa.mp3', legenda:'bom dia princesa'},
    {caminho:'assets/audios/cade_menininho_de_papai.mp3', legenda:'minino de papai'},
    {caminho:'assets/audios/eae-mane-cade-o-pix-mwahahaha.mp3', legenda:'cade o pix'},
    {caminho:'assets/audios/elon-musk-uma-vez-disse-estourado.mp3', legenda:'elon musk'},
    {caminho:'assets/audios/ja-ganhou-tantantan.mp3', legenda:'ja ganhou tan tan tan'},
    {caminho:'assets/audios/prefeito-chuva.mp3', legenda:'obrigado meu prefeito'},
    {caminho:'assets/audios/sem-h-calanguinho.mp3', legenda:'calanguinho'},
    {caminho:'assets/audios/lobo-pidao.mp3', legenda:'lobo'},
    {caminho:'assets/audios/voce-era-o-meu-duo.mp3', legenda:'vc era meu duo'},
];

let botoes = document.querySelectorAll('.botao');
let legendas = document.querySelectorAll('p');

for (let i=0; i < 9; i++){
    legendas[i].textContent = audios[i].legenda;
    botoes[i].setAttribute('data-item', i);
}

let audioTag = document.querySelector('audio');

botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        let som = audios[botao.getAttribute('data-item')]
        audioTag.setAttribute('src', som.caminho)

        audioTag.addEventListener('loadeddata', () => {
            audioTag.play();
        })
    })
});
