class MyFooter extends HTMLElement{
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
            :host{
                background-color: #D6D6D6;
                border-top-left-radius: 20px;
                border-top-right-radius: 20px;
                border-top: 1px solid #fff;
                box-shadow: inset 0 3px 5px rgba(255, 255, 255, 0.9);
            }
        </style>

        <div class="dicoding" style="margin: auto 0; display: flex; align-items: center">
            <img style="width: 36px; height: 36px;" src="https://d17ivq9b7rppb3.cloudfront.net/original/jobs/cloud_content_writer_180619113505.png" alt="">
            <p style="color: #000; margin-left: 10px;">DICODING</p>
        </div>
        <div class="disclaimer">
            <p style="color: #000; text-align: center;">Indra CB @ 2021</p>
        </div>
        `
    }
}

customElements.define('my-footer', MyFooter)