class MyProjects extends HTMLElement {

    constructor(){
        super()
        this.attachShadow({mode : 'open'})
        this.title = this.getAttribute('title')
        this.link = this.getAttribute('link')
        this.backgroundImage = this.getAttribute('backgroundImage')
    }

    getResourses = () =>{
        return `
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link href="https://fonts.googleapis.com/css2?family=Kufam:wght@500&display=swap" rel="stylesheet">
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap" rel="stylesheet">
        `
    }
    getTemplate(){
        const contentNode = document.createElement('template')

        contentNode.innerHTML = `
        ${this.getResourses()}
        ${this.getStylesTemplate()}

          <article class="cards">
              <ul class="grid cs-style">
                <li>
                  <figure>
                    <img src="img/${this.backgroundImage}" alt="${this.title} Image">
                    <figcaption>
                      <div>
                        <h3>${this.title}</h3>
                      </div>
                      <div>
                        <a href=${this.link} target='_blank'>In Construction</a>
                      </div>
                    </figcaption>
                  </figure>
                </li>
              </ul>
            </article>
            `
            
            return contentNode
    }
    getStylesTemplate(){
        return`
            <style>
                .miProjects {
                    margin-block-end: 12em;
                }
                .titleP {
                    margin: auto;
                  }
                  
                  .titleP h1 {
                    font-size: 2rem !important;
                    text-align: center;
                  }
                  .cards {
                    display: flex;
                    justify-content: center;
                    width: 75%;
                    margin: auto;
                  }
                  .grid {
                    list-style: none;
                    margin: 0 auto;
                    padding: 0;
                    text-align: center;
                  }
                  
                  .grid li {
                    display: inline-block;
                    margin: 0;
                    padding: 20px;
                    position: relative;
                    text-align: left;
                  }
                  
                  .grid figure {
                    margin: 0;
                    overflow: hidden;
                    position: relative;
                  }
                  
                  
                  .grid figcaption {
                    background: rgba(117, 16, 247, 0.5);
                    bottom: 0;
                    color: #ffffff;
                    height: 100%;
                    left: 0;
                    opacity: 0;
                    padding: 20px;
                    position: absolute;
                    top: auto;
                    transform: translateY(100%);
                    transition: transform 0.4s, opacity 0.1s 0.3s;
                    width: 100%;
                    backdrop-filter: blur(2px);
                  }

                  figcaption div{
                    width: 100%;
                    height: 3.7rem;
                  }

                  .grid figcaption h3 {
                    margin: 0 0 0vh;
                    padding: 0;
                  }
                  
                  .grid figcaption a {
                    background: #f7f7f8;
                    color: #f29400;
                    display: inline-block;
                    padding: 5px 10px;
                    text-align: center;
                    margin-bottom: 5rem;
                    position: absolute;
                    top: 65%;
                  }
                  
                  .grid figure img {
                    display: block;
                    max-width: 100%;
                    position: relative;
                    transition: transform 0.4s;
                  }
                  
                  .grid figure:hover figcaption {
                    opacity: 1;
                    transform: translateY(0px);
                    transition: transform 0.4s, opacity 0.1s;
                  }
                  @media (max-width: 1450px){
                    h3{
                      font-size: 2em;
                    }
                  }

                  
            </style>
        `
    }

    render(){
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode('true'))
    }
    connectedCallback(){
        this.render()
    }
    disconnectedCallback() {
        console.log('Custom square element removed from page.');
      }
}

customElements.define('my-projects', MyProjects)