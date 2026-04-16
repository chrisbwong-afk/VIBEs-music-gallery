document.addEventListener("DOMContentLoaded", () => {
    fetch ("Song-list.json")
        . then(response => response.json())
        . then(songs => {
            const gallery = document.querySelector(".gallery")

            songs.forEach(song => {
                const box = document.createElement("div")
                box.className = "box"

                box.innerHTML = `
                    <img src="${song.cover}" onclick="toggleAudio('${song.id}')" alt="${song.title}">
                    <audio id="${song.id}" preload="${song.preload || "none"}">
                        <source src="${song.file}" type="audio/mpeg">
                    </audio>
                `
                gallery.appendChild(box)
            })

        })
        .catch(error => console.error("Error loading songs:", error))


})