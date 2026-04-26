# VIBEs – Visual Interactive Beat Experiences

A responsive music gallery web application that allows users to browse, play, and interact with a curated collection of audio tracks through a custom-built audio player and dynamic UI system.

---

## Overview

VIBEs is a browser-based music player and gallery that combines audio playback with interactive controls, keyboard shortcuts, and visual feedback. It was designed as a lightweight alternative to traditional music players, focusing on customization, usability, and fast interaction.

The project supports features such as shuffle playback, looping, autoplay, volume control, dark mode, and quick navigation shortcuts.

---

## Features

- Custom-built audio player with play, pause, skip, and rewind controls
- Shuffle, loop, and autoplay functionality for dynamic playback behavior
- Interactive album/track gallery with thumbnail-based selection
- Mini progress bar and full-track progress tracking
- Volume control with real-time visual feedback
- Dark mode toggle for accessibility and user preference
- Built-in help panel with full keyboard shortcut support
- Keyboard shortcuts for fast navigation and playback control
- Download current track functionality

---

## Keyboard Shortcuts

- `Q` – Rewind 10 seconds  
- `W` – Return to top  
- `E` – Skip 10 seconds  
- `S` – Shuffle track  
- `D` – Toggle loop  
- `A` – Toggle autoplay  
- `Z` – Volume down  
- `X` – Volume up  
- `Space` – Play / Pause  
- `/` – Toggle help menu  
- `1–9` – Jump to 10%–90% of track  
- `C` – Toggle dark mode  
- `Ctrl + Shift + G` – Download current track  

---

## Tech Stack

- HTML5
- CSS3
- JavaScript (Vanilla)
- Lucide Icons
- HTML5 Audio API
- DOM Manipulation

---

## Architecture

- **Player-function.js**  
  Handles core audio logic including playback, shuffle, looping, volume control, and time navigation.

- **Gallery-builder.js**  
  Dynamically generates and manages the music gallery interface and track display system.

- **HTML UI Layer**  
  Combines player controls, gallery view, and help system into a single-page interactive interface.

---

## Key Implementation Details

- Uses the HTML5 `<audio>` API for full control over playback state
- Dynamic DOM updates for progress bars, thumbnails, and UI states
- Event-driven architecture for both mouse and keyboard interactions
- Modular separation of player logic and gallery rendering
- Real-time UI updates for playback progress and volume changes
- Lucide icon library loaded via CDN for lightweight UI elements

---

## UX / Design Goals

- Fast access to music controls without navigating menus
- Minimal latency between user input and audio response
- Clear visual feedback for playback state and progress
- Keyboard-first interaction design for power users
- Clean separation between “now playing” and library browsing

---

## Future Improvements

- Add metadata support (artist, album, duration display)
- Improve mobile responsiveness for touch-based controls
- Add search and filtering for large music libraries
- Introduce playlist creation and saving
- Replace global functions with modular JS architecture (ES modules)
- Improve accessibility (ARIA labels + screen reader support)

---

## Purpose

This project was built to explore:
- Advanced DOM manipulation and event handling
- Audio API integration in the browser
- Interactive UI design for media applications
- State management in vanilla JavaScript applications
- Building a full-featured frontend without frameworks

---


## Author

Christopher Wong  
