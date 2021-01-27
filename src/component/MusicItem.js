class MusicItem extends HTMLElement{
    constructor(){
        super()
        this._shadowRoot = this.attachShadow({
            mode: 'open'
        })
    }

    set music(music){
        this._music = music
        this.render()
    }

    render(){
        this._shadowRoot.innerHTML = `
            <style>
                :host{
                    position: relative;
                    flex-wrap: 1;
                    width: 27%;
                    display: flex;
                    flex-direction: column;
                    margin-bottom: 70px;
                    padding: 15px 20px;
                    border-radius: 15px;
                    background-color: rgba(255, 255, 255, 0.05);
                    border-top: 1px solid rgba(255, 255, 255, 0.5);
                    border-left: 1px solid rgba(255, 255, 255, 0.5);
                    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
                    overflow: hidden;
                }

                :host::before{
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 40px;
                    height: 100%;
                    background: rgba(255, 255, 255, 0.5);
                    transform: skewX(45deg) translateX(-400px);
                    transition: 0.2s ease-in-out;
                }

                :host(:hover):before{
                    transform: skewX(45deg) translateX(800px);
                }
            
                .anime-image{
                    background-size: cover;
                    background-position: center center;
                    border-radius: 15px;
                    height: 400px;
                }
            
                .anime-title{
                    font-size: 30px;
                    text-transform: capitalize;
                    letter-spacing: 2px;
                    padding: 0 10px;
                }

                .music-desc span{
                    display: block;
                    font-size: 18px;
                }
            
                .media{
                    display: flex;
                    justify-content: space-around;
                    margin: 15px 0;
                }
            
                .media .btn{
                    border-radius: 5px;
                    padding: 10px 0;
                    text-decoration: none;
                    color: #fff;
                    width: 25%;
                    text-align: center;
                    transition: all 0.5s ease-in-out;
                }

                .media .btn:hover{
                    filter: brightness(85%);
                    letter-spacing: 2px;
                }

                .youtube{
                    background-color: red;
                }

                .spotify{
                    background-color: #1DB954;
                }

                .itunes{
                    background: linear-gradient(45deg, #5fc9f8, #fecb2e, #fd9426, #fc3158, #147efb, #53d769);
                }

                @media screen and (max-width: 1125px){
                    :host{
                        width: 40%;
                    }
                }

                @media screen and (max-width: 720px){
                    :host{
                        width: 80%;
                    }
                }

                @media screen and (max-width: 480px){
                    .anime-image{
                        height: 250px;
                    }

                    .media .btn{
                        font-size: 12px;
                    }

                    .media .btn:hover{
                        filter: brightness(85%);
                        letter-spacing: 0;
                    }
                }
            </style>

            <img class="anime-image" src="${this._music.imageUrl}" alt="Anime Poster">
            <p class="anime-title">${this._music.title}</p>
            <div class="music-desc">
                <div class="artists">
                    <span>Artist : ${this._music.artists}</span>
                </div>
                <div class="media-wrapper">
                    <span>Media : </span>
                    <div class="media">
                        <a href="${this._music.mediaUrl.youtube}" type="button" class="btn btn-danger youtube">Youtube</a>
                        <a href="${this._music.mediaUrl.spotify}" type="button" class="btn btn-success spotify">Spotify</a>
                        <a href="${this._music.mediaUrl.itunes}" type="button" class="btn btn-warning itunes">iTunes</a>
                    </div>
                </div>
            </div>
        `
    }

}

customElements.define('music-item', MusicItem)