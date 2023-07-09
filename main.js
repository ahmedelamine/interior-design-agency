// Menu button
const menuBtn = document.getElementById("menuBtn")
menuBtn.addEventListener("click", () => {
    const links = document.getElementById("links");
    links.classList.toggle("show")
})

// Extending panel
const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}

