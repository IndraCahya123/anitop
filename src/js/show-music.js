import '../component/MusicList';
import dataMusic from './data-source';

const showMusic = async () => {
    const renderMusic = (data) => {
        const listMusicElement = document.querySelector('music-list');
        listMusicElement.musics = data;
    }

    const musics = await dataMusic();
    renderMusic(musics.slice(0, 9));
}

export default showMusic;