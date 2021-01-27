import '../component/MusicList';
import dataMusic from './data-source';

let searchMusic = async (keyword) => {
    const musics = await dataMusic();

    const renderMusic = (data) => {
        const listMusicElement = document.querySelector('music-list');
        listMusicElement.musics = data;
    }
    
    let selectedMusic = musics.filter(music => {
        let regex = new RegExp(`^${keyword}`, 'gi')
        return music.title.match(regex);
    })
    
    renderMusic(selectedMusic);
}

export default searchMusic;

//"Aoarashi no Ato de"