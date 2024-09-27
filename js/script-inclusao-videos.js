var gallery = document.getElementById('gallery')
var grid = document.querySelector('.uk-grid')

const buscarImagens = async () => {
    var request = await fetch('http://localhost:3000')

    var response = await request.json()

    console.log('response :>> ', response)

    renderizarImg(response)

    return response
}

buscarImagens();

const renderizarImg = (imagens) => {

    imagens.forEach(srcImagem => {
        var colunaGrid = document.createElement('div')
        var video = document.createElement('video')
        var cardGrid = document.createElement('div')
        var cardTop = document.createElement('div')
        var cardBody = document.createElement('div')
        var textFile = document.createElement('p')

        colocarClassCardGrid(cardGrid)
        colocarClassCardTop(cardTop)
        colcoarClassCardBody(cardBody)
        colocarAtributosVideo(video)
        colocarAtributoTextFile(textFile)

        video.src = `./public/imagens/${srcImagem}`
        textFile.replaceChildren(' ', srcImagem)

        var colocarGrid = grid.appendChild(colunaGrid)
        var colocarCard = colocarGrid.appendChild(cardGrid)
        var colocarCardTop = colocarCard.appendChild(cardTop)
        var colocarCardBody = colocarCard.appendChild(cardBody)
        var colocarTextFile = colocarCardBody.appendChild(textFile)
        var colocarImagem = colocarCardTop.appendChild(video)
    });

}

function colocarAtributosVideo(video) {
    video.setAttribute('uk-video', 'autoplay: hover')
    video.setAttribute('loop', '')
    video.setAttribute('muted', '')
    video.setAttribute('playsinline', '')
    video.setAttribute('controls', '')
}

function colcoarClassCardBody(cardBody) {
    cardBody.classList.add('uk-card-body')
}

function colocarClassCardTop(cardTop){
    cardTop.classList.add('uk-card-media-top')
}

function colocarClassCardGrid(cardGrid){
    cardGrid.classList.add('uk-card', 'uk-card-default', 'uk-card-body')
}

function colocarAtributoTextFile(textFile){
    textFile.classList.add('uk-text-muted')
}