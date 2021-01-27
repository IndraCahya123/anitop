class Top extends HTMLElement{
    constructor(){
        super()
        this._shadowRoot = this.attachShadow({
            mode: "open"
        })
    }
    
    connectedCallback(){
        this.render()
    }

    render(){
        this._shadowRoot.innerHTML = `
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap');
            
            .top-wrapper{
                position: relative;
                margin: 150px auto 50px;
                border-radius: 15px;
                width: 75%;
            }
        
            .top{
                font-family: 'Poppins', sans-serif;
                display: flex;
                justify-content: space-around;
                align-items: center;
                width: 100%;
                background-color: rgba(255, 255, 255, 0.05);
                padding: 50px 0;
                box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
                z-index: 5;
            }

            h1{
                font-size: 40px;
            }

            p{
                font-size: 25px;
                text-align: center;
            }

            @media screen and (max-width: 1125px){
                h1{
                    font-size: 32px;
                }

                p{
                    font-size: 16px;
                }
            }

            @media screen and (max-width: 720px){
                .top{
                    flex-direction: column-reverse;
                }

                h1{
                    width: 75%;
                    text-align: center;
                    margin: 0 auto;
                }
            }
        </style>

        <div class="top-wrapper">
            <div class="top">
                <div class="top-text">
                    <h1>Welcome, To Anime Music World!</h1>
                    <p>Music list that make your day hyped</p>
                </div>
                <div class="top-logo">
                    <img style="border-radius: 50%;" src="https://i.pinimg.com/236x/02/66/ff/0266ff8718db7ef31ead9b42f906786a.jpg" alt="Top Logo">
                </div>
            </div>
        </div>
        `
    }
}

customElements.define('top-styled', Top)