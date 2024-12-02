const quote = document.getElementById("quote")
const author = document.getElementById("author")
const newQuote = document.getElementById("new-quote")
const gmailShare = document.getElementById("gmail-share")


const api_url = "https://api.quotable.io/random"

async function getQuote(url) {

    try {
        const response = await fetch(url)

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }
        var data = await response.json()
        quote.innerHTML = data.content
        author.innerHTML = data.author


    } catch (error) {
        console.error("Error fetching the quote:", error);

    }

}

newQuote.addEventListener("click", () => { getQuote(api_url) })
gmailShare.addEventListener("click", () => gmail())


getQuote(api_url)

function gmail() {
    //link for twitter:
    // window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML + "---- by " + author.innerHTML, "Tweet Window", "width=600, height =300")

    // for gmail
    let url = 'https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=&su=Your+Subject+here&body=' + quote.innerHTML + "---- by " + author.innerHTML;

    window.open(url, 'sharer', 'toolbar=0,status=0,width=648,height=395');
}



document.getElementById("quote-heading").addEventListener("copy", (event) => {
    const selectedData = window.getSelection().toString()
    event.clipboardData.setData("text/plain", "🖕")
    event.preventDefault()
})