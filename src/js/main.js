import '../component/MusicList';
import showMusic from './show-music';
import searchMusic from './search-music';

const main = () => {

    const appNav = document.querySelector('app-nav');
    const searchInput = appNav.shadowRoot.querySelector('#search');
    const searchButton = appNav.shadowRoot.querySelector('#btn-search');
    const musicList = document.querySelector('music-list');

    showMusic();
    
    searchButton.addEventListener('click', () => {
        musicList.innerHTML = "";

        let keyword = searchInput.value;
        
        if (keyword === null || keyword === undefined || keyword === "") {
            showMusic();
        } else {
            searchMusic(keyword);
        }
    });
    
}

export default main