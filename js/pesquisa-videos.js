let inputElement = document.querySelector(".uk-search-input")
let listElement = document.querySelector(".uk-grid div")
let itemElement = document.querySelectorAll(".uk-grid div")

console.log(itemElement)

inputElement.addEventListener("input", (e) => {
    let inputed = e.target.value.toLowerCase()
    itemElement.forEach((li) => {
        let text = li.textContent.toLowerCase()
        if (text.includes(inputed)) {
            li.style.display = "block"
        } else {
            li.style.display = "none"
        }
    })
})