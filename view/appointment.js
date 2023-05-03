const template = document.createElement('template');
template.innerHTML = `
<style>
:host {
    --body-font: 'Open Sans', sans-serif;
    --header-height: 56px;
    --nav-width: 92px;
    --bs-font-size: 14px;
    --bs-line-height: 20px;
    --z-fixed: 100;
    --bs-padding: 24px;
    --sched-padding: 3px;
    --text-color: #03102A;
    --primary-color: #1052D4;
    --teams-color: #3f46ac;
    --secondary-color: #FEC24E;
    --text-p-color: #03102a99;
    --text-h4-color: #03102acc;
    --line-color: #EAECEC;
    --disable: #D0D2D7;
    --bg: #EEF8FF;
    --grad-bg: linear-gradient(111.32deg, rgba(130, 194, 254, 0.2) 12.89%, rgba(49, 127, 245, 0.2) 100%);
    --primary-bg: #125cec21;
    --teams-bg: #777ee3;
    /*--gray-bg: #F8F9FA;*/
    --gray-bg: #E9ECEF;
    --primary-filter: invert(14%) sepia(96%) saturate(6001%) hue-rotate(220deg) brightness(94%) contrast(87%);
    --white-filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(325deg) brightness(107%) contrast(102%);
    --gray-filter: invert(29%) sepia(30%) saturate(400%) hue-rotate(181deg) brightness(89%) contrast(90%);
    }
    main{
        position: relative;
        margin: 0 !important;
        transition: .5s;
        min-height: calc(100% - var(--header-height)-1px);
        font-family: var(--body-font) !important;
        color: var(--text-color);
        text-align: left;
        letter-spacing: normal;
        background: var(--bg);
    }
    h3, h4{
        color: var(--text-color);
        font-weight: 700;
    }
    h3{
       font-size: calc(var(--bs-font-size)+7px);
    }
    h4{
        font-size: calc(var(--bs-font-size)+4px);
        color: var(--text-h4-color);
        margin-block-start: 1.33em;
        margin-block-end: 1.33em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        font-weight: bold;
    } 
    #main-section{
        background-color: #fff;
        width: 100%;
        border-radius: 10px;
        padding: var(--bs-padding);
        margin-bottom: var(--bs-padding);
        min-height: calc(100vh - var(--header-height) - var(--bs-padding)*3 - var(--bs-line-height)-12px);
        display: inline-block;
    }
   .row{
        --bs-gutter-x: var(--bs-padding);
        --bs-gutter-y: 0;
        display: flex;
        flex-wrap: wrap;
        margin-top: calc(-1*var(--bs-gutter-y));
        margin-right: calc(-.5*var(--bs-gutter-x));
        margin-left:calc(-.5*var(--bs-gutter-x)) ;

    }
    
    .col-form-label label{
        display:  inline;
        color: var(--text-color);
        font-size: var(--bs-font-size);
        line-height: var(--bs-line-height);
        margin-bottom: 0;
    }

    .btn.btn-primary{
        background-color: var(--primary-bg);
        color: var(--primary-color);
        border:var(--primary-bg);
    }    
 
    .btn{
        display: inline-block;
        font-family: var(--body-font);
        line-height: 1.5;
        text-align: center;
        text-decoration: none;
        vertical-align: middle;
        cursor: pointer;
        -webkit-user-select: none;
        user-select: none;
        border: 1px solid transparent;
        padding: 0.375rem 0.75rem;
        font-size: 1rem;
        border-radius: 0.25rem;
        transition: color .15s ease-in-out;
    }

    .btn-group{
        position: relative;
        display: inline-flex;
        vertical-align: middle;
    }
    .icon{
        padding-right: calc(var(--bs-padding) - 15px);
    }
    .float-left {
        float: left;
    }
    .card{
        position: relative;
        display: flex;
        flex-direction: column;
        min-width: 0;
        word-wrap: break-word;
        background-color: #FFFFFF;
        background-clip: border-box;
        border: 1px solid rgba(0, 0, 0, .125);
        border-radius: 0.25rem;
    }
    .shadow-gray-drop {
        box-shadow: 0px 0px 10px rgba(149, 157, 165, 0.1), inset 0px 1px 1px #FFFFFF;
    }
    .group-cont{
        border: solid 1px var(--line-color);
        border-radius: 5px;
        margin: 0.5rem 0;
        padding: 1rem;
        display:flex;
        justify-content: space-between
    }
    ul, ol{
        padding:0;
    }
    ol:nth-child(1){
        font-weight: 600;
        
    }
    ol:nth-child(2),ol:nth-child(3),ol:nth-child(4){
        display: inline-block; 
        margin-left:10px;  
        margin-top:10px; 
    }
    #myList li:nth-child(3) {
        order: -1;
      }

    @media only screen and (max-width: 750px) {
        .container1 {
            width: 100%}
        .overflow-scroll{
            width: 100%;
            height: 210px;

            display: grid;
            grid-template-rows: repeat(3, auto);
            overflow: auto;
            overflow-x: hidden;
                }
        .date_time_picker{
            display: inline-block;
            margin: 0;
        }
        .container1{
            margin-left: 0;
        }
        .sym{
            height: var(--header-height);
            width:100%;
        }
        .symon{
            width:30%;
        }
        .symptoms .symptomsOnset{
            margin-top: 0.5em;
        }
        .timebtn {
            width: 5.2em;
            margin: 8px;
        }
        .col-xl-8.col-lg-8.col-md-12.col-sm-12 {
            padding: 0px;
        }
    }
    </style>
    <main>
        <div class="row">
            <h3>Эмнэлэг</h3>
            <div class="col-xl-8 col-lg-8 col-md-12 col-sm-12">
                <div id="main-section" class="shadow-gray-drop">
                        <div class="card-body">
                            <h4>Эмнэлгийн цаг авах </h4>
                            <div class="group-cont" id="list-elm" >
                             <ul id="mylist"></ul>
                             <div class= "action">
                             <label>Хүлээлгэнд</label>
                             <button class="btn btn-primary deletebtn" id = "deletebtn">Цуцлах</button>
                             </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </main>
`

 class Appointment extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({mode:'open'});
        shadowRoot.appendChild( template.content.cloneNode(true));
        const linkEl = document.createElement('link');
        linkEl.rel = 'stylesheet';
        linkEl.href = 'https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css';
        shadowRoot.appendChild(linkEl);


        shadowRoot.querySelector('.deletebtn').addEventListener('click', this.deleteButton);   
    }
    deleteButton = (event) => {
        window.location.replace('./index.html');
           
      }
    


    dispalyList(){
        const list = this.shadowRoot.getElementById('mylist');
        const data = JSON.parse(localStorage.getItem('myData'));
         for (const key in data) {
            const ol = document.createElement('ol');
            ol.textContent = `${data[key]}`;
            list.appendChild(ol);
            }
                }
    connectedCallback() {
        this.dispalyList();
    }
 
    disconnectedCallback() {
       
    }
 
    attributeChangedCallback(name, oldVal, newVal) {
        
    }
 
    adoptedCallback() {
        
    }
 
 }
 
 window.customElements.define('appointment-list', Appointment);