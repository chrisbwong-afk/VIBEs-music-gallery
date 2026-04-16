const fs = require('fs')
const path = require('path')

const audioDir = path.join(__dirname, 'Audio')
const outputFile = path.join(__dirname, 'Song-list.json')

const files = fs.readdirSync(audioDir)

const songs = files
  .filter(file => file.endsWith('.mp3'))
  .map(file => {
    const base = file
      .replace('.mp3', '')
      .replace(/^\d+\s*/, '') // removes "130 "

    return {
      id: base,
      title: base,
      file: `Audio/${file}`,
      cover: `Thumbnail/${base}.jpg`,
      preload: "none"
    }
  })

fs.writeFileSync(outputFile, JSON.stringify(songs, null, 2))

console.log("Song-list.json generated!")
console.log("AUDIO DIR:", audioDir)
console.log("FILES:", files)
console.log("FILTERED:", files.filter(f => f.endsWith('.mp3')))