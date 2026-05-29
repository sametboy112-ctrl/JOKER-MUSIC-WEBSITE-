// ===== Data Arrays =====
const musicData = [
    { 
        title: "Blinding Lights", 
        artist: "The Weeknd", 
        poster: "https://i.ytimg.com/vi/fHI8X4OXluQ/hqdefault.jpg", 
        videoId: "fHI8X4OXluQ" 
    },
    { 
        title: "Shape of You", 
        artist: "Ed Sheeran", 
        poster: "https://i.ytimg.com/vi/JGwWNGJdvx8/hqdefault.jpg", 
        videoId: "JGwWNGJdvx8" 
    },
    { 
        title: "Dance Monkey", 
        artist: "Tones and I", 
        poster: "https://i.ytimg.com/vi/q0hyYWKXF0Q/hqdefault.jpg", 
        videoId: "q0hyYWKXF0Q" 
    },
    { 
        title: "Uptown Funk", 
        artist: "Mark Ronson ft. Bruno Mars", 
        poster: "https://i.ytimg.com/vi/OPf0YbXqDm0/hqdefault.jpg", 
        videoId: "OPf0YbXqDm0" 
    },
    { 
        title: "See You Again", 
        artist: "Wiz Khalifa ft. Charlie Puth", 
        poster: "https://i.ytimg.com/vi/RgKAFK5djSk/hqdefault.jpg", 
        videoId: "RgKAFK5djSk" 
    },
    { 
        title: "Sugar", 
        artist: "Maroon 5", 
        poster: "https://i.ytimg.com/vi/09R8_2nJtjg/hqdefault.jpg", 
        videoId: "09R8_2nJtjg" 
    }
];

const moviesData = [
    { 
        title: "Avengers: Endgame", 
        year: "2019", 
        poster: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg", 
        videoId: "TcMBFSGVi1c" 
    },
    { 
        title: "Joker", 
        year: "2019", 
        poster: "https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg", 
        videoId: "zAGVQLHvwOY" 
    },
    { 
        title: "Inception", 
        year: "2010", 
        poster: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg", 
        videoId: "YoHD9XEInc0" 
    },
    { 
        title: "The Dark Knight", 
        year: "2008", 
        poster: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg", 
        videoId: "EXeTwQWrcwY" 
    },
    { 
        title: "Interstellar", 
        year: "2014", 
        poster: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg", 
        videoId: "zSWdZVtXT7E" 
    },
    { 
        title: "Parasite", 
        year: "2019", 
        poster: "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjRhMTUzYzVmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg", 
        videoId: "5xH0HfJHsaY" 
    }
];

// ===== Render Cards =====
function renderMusicCards(data) {
    const grid = document.getElementById('musicGrid');
    grid.innerHTML = '';
    data.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${item.poster}" alt="${item.title}" loading="lazy">
            <div class="card-body">
                <h3>${item.title}</h3>
                <p>${item.artist}</p>
            </div>
        `;
        card.addEventListener('click', () => openPlayer(item.videoId));
        grid.appendChild(card);
    });
}

function renderMovieCards(data) {
    const grid = document.getElementById('moviesGrid');
    grid.innerHTML = '';
    data.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${item.poster}" alt="${item.title}" loading="lazy">
            <div class="card-body">
                <h3>${item.title}</h3>
                <p>${item.year}</p>
            </div>
        `;
        card.addEventListener('click', () => openPlayer(item.videoId));
        grid.appendChild(card);
    });
}

// ===== YouTube Modal =====
const modal = document.getElementById('playerModal');
const closeBtn = document.querySelector('.close');
const playerDiv = document.getElementById('player');

function openPlayer(videoId) {
    modal.style.display = 'block';
    playerDiv.innerHTML = `<iframe width="100%" height="450" src="https://www.youtube.com/embed/${videoId}?autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`;
}

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    playerDiv.innerHTML = ''; // stop video
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        playerDiv.innerHTML = '';
    }
});

// ===== Search =====
const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase().trim();
    const filteredMusic = musicData.filter(item =>
        item.title.toLowerCase().includes(query) || item.artist.toLowerCase().includes(query)
    );
    const filteredMovies = moviesData.filter(item =>
        item.title.toLowerCase().includes(query) || item.year.includes(query)
    );
    renderMusicCards(filteredMusic);
    renderMovieCards(filteredMovies);
});

// ===== Initial Load =====
renderMusicCards(musicData);
renderMovieCards(moviesData);