class AppNav extends HTMLElement{
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
        
        :host{
            font-family: 'Poppins', sans-serif;
            position: fixed;
            top: 0;
            background-color: #22333B;
            padding: 10px 50px;
            border-bottom-left-radius: 20px;
            border-bottom-right-radius: 20px;
            border-bottom: 1px solid rgba(255,255,255, 0.5);
            z-index: 99;
        }

        .home{
            display: flex;
            align-items: center;
        }

        img{
            height: 56px;
            width: 56px;
            border-radius: 50%;
        }

        a{
            text-decoration: none;
            font-size: 30px;
            margin-left: 15px;
            letter-spacing: 2px;
            color: #fff;
        }

        .search, .btn-search{
            border-radius: 5px;
            padding: 5px;
        }

        .btn-search{
            cursor: pointer;
            background-color: aquamarine;
            transition: all 0.5s ease-in-out;
        }

        .btn-search:hover{
            filter: brightness(80%);
        }

        @media screen and (max-width: 650px){
            :host{
                padding: 10px 0 10px 20px;
            }
            
            img{
                height: 36px;
                width: 36px;
            }

            a{
                font-size: 26px;
            }
        }
        </style>

        <div class="home">
            <img src="https://i.pinimg.com/236x/02/66/ff/0266ff8718db7ef31ead9b42f906786a.jpg" class="circle-rounded" alt="logo">
            <a href="#">ANITOP</a>
        </div>
        <div class="search-wrapper">
            <input id="search" class="search" placeholder="Cari Music...">
            <button id="btn-search" class="btn-search">Search</button>
        </div>
        `
    }
}

customElements.define('app-nav', AppNav)