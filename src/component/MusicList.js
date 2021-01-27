import './MusicItem';

class MusicList extends HTMLElement{
    constructor(){
        super()
        this._shadowRoot = this.attachShadow({
            mode: "open"
        })
    }

    connectedCallback(){
        this.height = this.getAttribute('height') || null
    }

    set musics(musics){
        this._musics = musics
        this.render()
    }

    render() {
        this._shadowRoot.innerHTML = `
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap');

                :host{
                    font-family: 'Poppins', sans-serif;
                    width: 90%;
                    display: flex;
                    flex-wrap: wrap;
                    margin: 50px auto;
                    padding: 0 20px;
                    justify-content: space-around;
                }
            </style>
        `

        this._musics.forEach(music => {
            const musicItemElement = document.createElement('music-item')
            musicItemElement.music = music
            this._shadowRoot.appendChild(musicItemElement)
        })
    }
}

customElements.define('music-list', MusicList)