var url = ("https://animechan.vercel.app/api/quotes/anime?title=naruto")

async function reqFetch() {
    var urlFetch = await fetch(url,{mode:'no-cors'})
    var urlData = await urlFetch.json()
    urlData.map((ele) => {
        var parent = document.querySelector('.imageBox')
        var cardData = document.createElement('div')
        cardData.innerHTML = `
        <div class='col'>
        <div class='card h-100'>
        <div class='card-body'>
        <h2 class='card-title text-center'>${ele.anime}</h2>
        <h5 class='card-text character'>${ele.character}</h5>
        <p class='card-text qoute'>${ele.quote}</p>


     `
        parent.append(cardData)
        console.log(ele)
    })
}
reqFetch();
