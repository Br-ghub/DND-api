const cards = document.getElementById("cards");
fetch("https://www.dnd5eapi.co/api/2014/magic-items")
.then(response => response.json())
.then((data)=>{
    data.results.forEach((element) => {
        let card = document.createElement("a");
        card.href = "https://www.dnd5eapi.co" + element.url;
        card.classList.add("card");
        card.innerHTML = element.name;
        cards.append(card);
    });
})

cards.addEventListener("click", (e)=>{
    e.preventDefault()
    const element = e.target.closest(".card");
    const tempTab = window.open("", "_blank");
    if (tempTab) {
        tempTab.document.write(`<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${element.innerHTML}</title>
            <link rel="stylesheet" href="style.css">
        </head>
        <div class="body">
            <header>
                <h1>${element.innerHTML}</h1>
            </header>
            <div class="cont" id="cards"></div>
        </div>
        <script>
        const cont = document.getElementById("cards");
        fetch("${element.href}")
        .then(response=>response.json())
        .then((data)=>{
            const card = document.createElement("img")
            card.src = "https://www.dnd5eapi.co" + data.image
            const spec = document.createElement("p")
            spec.innerHTML = data.desc
            cont.append(card)
            cont.append(spec)
            });
            <\/script>`)
            }
})