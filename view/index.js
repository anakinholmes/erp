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

    /* responsive */
    #em{
        margin-right: 10em;
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
    .timebtn {
        width: 6.5em;
        margin: 5px;
    }
    .timebtn.active{
        color: #FFFFFF;
        background-color: var(--primary-color);
    }
    .savebtn{
        width: 7em;
        background-color: var(--primary-bg);
        color: var(--primary-color);
        margin-top: 1em;
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
    
    .btn-small {
        min-width: 50px;
    }
    
    .btn-day {
        font-family: 'Open Sans';
        font-size: 1em;
        display: flex;
        justify-content: center;
        align-items: center;
        border: none;
        background: rgba(0, 0, 0, 0);
        width: 100%;
        height: 100%;
        cursor: pointer;
        z-index: 99;
    - 0;
        border-radius: 10px;
        transition: 0.4s all;
    }
        
    .btn-day.active::before {
        position: absolute;
        content: '';
        width: 40px;
        height: 40px;
        background: var(--primary-color);
        border-radius: 10px;
        z-index: -1;
    }
 
    
    /* Calendar */
    
    /* .container {
        display: ;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        min-height: 100vh;
        background: #ecf1f8;
    }
     */
    /* .calendar-assets {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 100%;
        padding: 10px;
    } 
     */
    // #currentDate{
    //   text-align:center;
    //   font-size:calc(var(--bs-font-size)+8px);
    // }

    .calendar {
        height: 345px;
        width: 310px;
        border-radius: 18px;
        background: #ffffff;
          padding: 10px;
          user-select: none;
    }
    
    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-radius: 18px 18px 0px 0px;
        padding: calc(var(--bs-padding)-9px);
        height: 40px;
        width: 100%;
        color: var(--text-color);
    }
    
    .month {
        font-size: calc(var(--bs-font-size) );
    }
    .icon {
        padding: 10px;
        font-size: 1em;
        margin: 0 0 0 5px;
        background-color: #FFF;
        color: var(--text-color);
        border: none;
        cursor: pointer;
    - 0;
    }
    
    .icon:hover {
        cursor: pointer;
    }
    
    #calendar {
        width: 100%;
    }
    
    .weekends th {
        font-size: 1em;
        color: gray;
        font-weight: 400;
        width: 40px;
        margin: 10px 0;
    }
    
    #calendar tr {
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;
        text-align: center;
        margin: 3px;
    }
    
    #calendar td {
        display: flex;
        height: 40px;
        width: 40px;
        justify-content: center;
        align-items: center;
        text-align: center;
        z-index: 99;
    }
    .overflow-scroll{
        width: 500px;
        height: 300px;
        // display: grid;
        // grid-template-rows: repeat(4, auto);
        // overflow: auto;
        // overflow-x: hidden;
            }

    .btn-day{
        font-family: var(--body-font);
    }
    .btn-day.disabled {
        color: grey;
        
    }
    .date_time_picker{
        display: flex;
    }
    .sym{
        height: var(--header-height);
        width:100%;
    }
    .symptoms{
        margin-top: 1em;
    }
    .symptomsOnset{
        margin-top: 1.2em;
     
    }
 
    .container1 {
        margin-left: 5em;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        width: 50vw;}
    input[type="radio"] {
        opacity:0;
        position:absolute;
        z-index: 100;
        transform: scale(2.5);
    }
    input[type=radio]:checked + label{
        color: #FFF;
        font-weight: 600;
        background: var(--primary-color);
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
   
    </style>
<main>
<div class="row">
    <h3>Эмнэлэг</h3>
    <div class="col-xl-8 col-lg-8 col-md-12 col-sm-12">
        <div id="main-section" class="shadow-gray-drop">
                <div class="card-body">
                    <h4>Эмнэлгийн цаг авах </h4>
                     
                        <label for="" class="col-md-3 col-sm-5 col-form-label">Төрөл</label>
                        <div class="col-lg-10 col-md-12"  >
                        <form class="btn-group float-left "  id="container"  style="margin: 4px 8px;" >
                        <button class="btn btn-primary active" value="Үзлэгийн цаг">Үзлэг</button>
                        <button class="btn btn-primary" value="Эмчилгээний цаг">Эмчилгээ</button>
                        </div>
                        
                        <label for="" class="col-md-8 col-sm-5 col-form-label" id="em" >Цагийн мэдээлэл</label>
                        
                            <div class="date_time_picker">
                            <div class="container2">
                           <label for="" class="col-md-8 col-sm-5 col-form-label">
                           <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                           <path d="M8.25 14C8.25 13.5858 8.58579 13.25 9 13.25H15C15.4142 13.25 15.75 13.5858 15.75 14C15.75 14.4142 15.4142 14.75 15 14.75H9C8.58579 14.75 8.25 14.4142 8.25 14Z" fill="currentColor" />
                           <path fill-rule="evenodd" clip-rule="evenodd" d="M9 1.25C9.41421 1.25 9.75 1.58579 9.75 2V3.26061C10.4192 3.25 11.1628 3.25 11.9889 3.25H12.0111C12.8372 3.25 13.5808 3.25 14.25 3.26061V2C14.25 1.58579 14.5858 1.25 15 1.25C15.4142 1.25 15.75 1.58579 15.75 2V3.31358C17.2619 3.40837 18.4234 3.65335 19.3798 4.34815C19.8679 4.70281 20.2972 5.13209 20.6518 5.62023C21.4537 6.7239 21.6564 8.10088 21.7206 9.97432C21.75 10.8315 21.75 11.8289 21.75 12.989V13.011C21.75 14.1711 21.75 15.1685 21.7206 16.0257C21.6564 17.8991 21.4537 19.2761 20.6518 20.3798C20.2972 20.8679 19.8679 21.2972 19.3798 21.6518C18.2761 22.4537 16.8991 22.6564 15.0257 22.7206C14.1684 22.75 13.171 22.75 12.0108 22.75H11.9547C10.1182 22.75 8.67861 22.75 7.53648 22.6263C6.37094 22.5 5.42656 22.2377 4.62024 21.6518C4.13209 21.2972 3.70281 20.8679 3.34815 20.3798C2.76232 19.5734 2.50001 18.6291 2.37373 17.4635C2.24999 16.3214 2.24999 14.8818 2.25 13.0452L2.25 12.9889C2.25 11.8289 2.25 10.8315 2.27937 9.97432C2.34356 8.10087 2.5463 6.7239 3.34815 5.62023C3.70281 5.13209 4.13209 4.70281 4.62024 4.34815C5.57655 3.65335 6.73808 3.40837 8.25 3.31358V2C8.25 1.58579 8.58579 1.25 9 1.25ZM8.25 4.81725C6.88795 4.91092 6.10177 5.12585 5.50191 5.56168C5.14111 5.82382 4.82382 6.14111 4.56168 6.50191C4.12585 7.10177 3.91092 7.88795 3.81725 9.25H20.1827C20.0891 7.88795 19.8741 7.10177 19.4383 6.50191C19.1762 6.14111 18.8589 5.82382 18.4981 5.56168C17.8982 5.12585 17.1121 4.91092 15.75 4.81725V5C15.75 5.41421 15.4142 5.75 15 5.75C14.5858 5.75 14.25 5.41421 14.25 5V4.76079C13.5904 4.75005 12.8476 4.75 12 4.75C11.1524 4.75 10.4096 4.75005 9.75 4.76079V5C9.75 5.41421 9.41421 5.75 9 5.75C8.58579 5.75 8.25 5.41421 8.25 5V4.81725ZM20.2392 10.75H3.76079C3.75005 11.4096 3.75 12.1524 3.75 13C3.75 14.8916 3.75103 16.25 3.865 17.302C3.97745 18.3399 4.19259 18.9901 4.56168 19.4981C4.82382 19.8589 5.14111 20.1762 5.50191 20.4383C6.00992 20.8074 6.66013 21.0225 7.69805 21.135C8.74999 21.249 10.1084 21.25 12 21.25C12.8483 21.25 13.5918 21.2499 14.2518 21.2392C14.2562 20.7645 14.271 20.4151 14.3208 20.1005C14.7105 17.6401 16.6401 15.7105 19.1005 15.3208C19.4151 15.271 19.7645 15.2562 20.2392 15.2518C20.25 14.5918 20.25 13.8483 20.25 13C20.25 12.1524 20.25 11.4096 20.2392 10.75ZM20.1826 16.7528C19.7776 16.7575 19.5402 16.7699 19.3352 16.8023C17.5166 17.0904 16.0904 18.5166 15.8023 20.3352C15.7699 20.5402 15.7575 20.7776 15.7528 21.1826C17.1131 21.0888 17.8986 20.8738 18.4981 20.4383C18.8589 20.1762 19.1762 19.8589 19.4383 19.4981C19.8738 18.8986 20.0888 18.1131 20.1826 16.7528Z" fill="currentColor" />
                           </svg>
                           Огноо</label>
                               <!-- <div class="calendar-assets">
                                   <h1 id="currentDate"></h1>
                                   
                              </div> -->
                              <div class="calendar shadow-gray-drop" id="table">
                                <div class="header">
                                  <div class="month" id="month-header">
                                  </div>
                                  <div class="buttons">
                                    <button class="icon"><</button>
                                    <button class="icon">></button>
                                  </div>
                                </div>
                              </div>
                              </div>
                              <div class="container1">
                              <label for="" class="col-md-7 col-sm-7 col-form-label">
                              <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path d="M8.25 14C8.25 13.5858 8.58579 13.25 9 13.25H15C15.4142 13.25 15.75 13.5858 15.75 14C15.75 14.4142 15.4142 14.75 15 14.75H9C8.58579 14.75 8.25 14.4142 8.25 14Z" fill="currentColor" />
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M9 1.25C9.41421 1.25 9.75 1.58579 9.75 2V3.26061C10.4192 3.25 11.1628 3.25 11.9889 3.25H12.0111C12.8372 3.25 13.5808 3.25 14.25 3.26061V2C14.25 1.58579 14.5858 1.25 15 1.25C15.4142 1.25 15.75 1.58579 15.75 2V3.31358C17.2619 3.40837 18.4234 3.65335 19.3798 4.34815C19.8679 4.70281 20.2972 5.13209 20.6518 5.62023C21.4537 6.7239 21.6564 8.10088 21.7206 9.97432C21.75 10.8315 21.75 11.8289 21.75 12.989V13.011C21.75 14.1711 21.75 15.1685 21.7206 16.0257C21.6564 17.8991 21.4537 19.2761 20.6518 20.3798C20.2972 20.8679 19.8679 21.2972 19.3798 21.6518C18.2761 22.4537 16.8991 22.6564 15.0257 22.7206C14.1684 22.75 13.171 22.75 12.0108 22.75H11.9547C10.1182 22.75 8.67861 22.75 7.53648 22.6263C6.37094 22.5 5.42656 22.2377 4.62024 21.6518C4.13209 21.2972 3.70281 20.8679 3.34815 20.3798C2.76232 19.5734 2.50001 18.6291 2.37373 17.4635C2.24999 16.3214 2.24999 14.8818 2.25 13.0452L2.25 12.9889C2.25 11.8289 2.25 10.8315 2.27937 9.97432C2.34356 8.10087 2.5463 6.7239 3.34815 5.62023C3.70281 5.13209 4.13209 4.70281 4.62024 4.34815C5.57655 3.65335 6.73808 3.40837 8.25 3.31358V2C8.25 1.58579 8.58579 1.25 9 1.25ZM8.25 4.81725C6.88795 4.91092 6.10177 5.12585 5.50191 5.56168C5.14111 5.82382 4.82382 6.14111 4.56168 6.50191C4.12585 7.10177 3.91092 7.88795 3.81725 9.25H20.1827C20.0891 7.88795 19.8741 7.10177 19.4383 6.50191C19.1762 6.14111 18.8589 5.82382 18.4981 5.56168C17.8982 5.12585 17.1121 4.91092 15.75 4.81725V5C15.75 5.41421 15.4142 5.75 15 5.75C14.5858 5.75 14.25 5.41421 14.25 5V4.76079C13.5904 4.75005 12.8476 4.75 12 4.75C11.1524 4.75 10.4096 4.75005 9.75 4.76079V5C9.75 5.41421 9.41421 5.75 9 5.75C8.58579 5.75 8.25 5.41421 8.25 5V4.81725ZM20.2392 10.75H3.76079C3.75005 11.4096 3.75 12.1524 3.75 13C3.75 14.8916 3.75103 16.25 3.865 17.302C3.97745 18.3399 4.19259 18.9901 4.56168 19.4981C4.82382 19.8589 5.14111 20.1762 5.50191 20.4383C6.00992 20.8074 6.66013 21.0225 7.69805 21.135C8.74999 21.249 10.1084 21.25 12 21.25C12.8483 21.25 13.5918 21.2499 14.2518 21.2392C14.2562 20.7645 14.271 20.4151 14.3208 20.1005C14.7105 17.6401 16.6401 15.7105 19.1005 15.3208C19.4151 15.271 19.7645 15.2562 20.2392 15.2518C20.25 14.5918 20.25 13.8483 20.25 13C20.25 12.1524 20.25 11.4096 20.2392 10.75ZM20.1826 16.7528C19.7776 16.7575 19.5402 16.7699 19.3352 16.8023C17.5166 17.0904 16.0904 18.5166 15.8023 20.3352C15.7699 20.5402 15.7575 20.7776 15.7528 21.1826C17.1131 21.0888 17.8986 20.8738 18.4981 20.4383C18.8589 20.1762 19.1762 19.8589 19.4383 19.4981C19.8738 18.8986 20.0888 18.1131 20.1826 16.7528Z" fill="currentColor" />
                              </svg>  Цаг сонгох</label>
                                  <div class="row overflow-scroll" id="timep">
                                      <button class="btn timebtn btn-primary " value="08:30">08:30 AM</button>
                                      <button class="btn timebtn btn-primary" value="08:50">08:50 AM</button>
                                      <button class="btn timebtn btn-primary" value="09:10">09:10 AM</button>
                                      <button class="btn timebtn btn-primary" value="09:30">09:30 AM</button>
                                      <button class="btn timebtn btn-primary" value="09:50">09:50 AM</button>
                                      <button class="btn timebtn btn-primary" value="10:10">10:10 AM</button>
                                      <button class="btn timebtn btn-primary" value="10:30">10:30 AM</button>
                                      <button class="btn timebtn btn-primary" value="10:50">10:50 AM</button>
                                      <button class="btn timebtn btn-primary" value="11:10">11:10 AM</button>
                                      <button class="btn timebtn btn-primary" value="11:30">11:30 AM</button>
                                      <button class="btn timebtn btn-primary" value="11:50">11:50 AM</button>
                                      <button class="btn timebtn btn-primary" value="12:10">12:10 PM</button>
                                      <button class="btn timebtn btn-primary" value="12:30">12:30 PM</button>
                                      <button class="btn timebtn btn-primary" value="12:50">12:50 PM</button>
                                      <button class="btn timebtn btn-primary" value="13:10">13:10 PM</button>
                                      <button class="btn timebtn btn-primary" value="14:30">14:30 PM</button>
                                      <button class="btn timebtn btn-primary" value="14:50">14:50 PM</button>
                                      <button class="btn timebtn btn-primary" value="15:10">15:10 PM</button>
                                      <button class="btn timebtn btn-primary" value="15:30">15:30 PM</button>
                                      <button class="btn timebtn btn-primary" value="15:50">15:50 PM</button>
                                      <button class="btn timebtn btn-primary" value="16:10">16:10 PM</button>
                                      <button class="btn timebtn btn-primary" value="16:30">16:30 PM</button>
                                      <button class="btn timebtn btn-primary" value="16:50">16:50 PM</button>
                                      <button class="btn timebtn btn-primary" value="17:10">17:10 PM</button>
                              </div>
                            </div>
                              </div>
                            <div class="symptoms">
                                <label for="" class="col-md-7 col-sm-7 col-form-label">Зовиур</label>
                                <input class="sym" type="text">
                            </div>

                            <div class="symptomsOnset">
                                <label for="" class="col-md-6 col-sm-3 col-form-label">Үргэлжилсэн хугацаа</label>
                                <input class="symon" type="number">
                            </div>
                            <button class="btn btn-primary savebtn" id = "savebtn">Хадгалах</button>
                        </form>
                </div>
            </div>
        </div>
    </div>
    </main>
`



class ErpAppointment extends HTMLElement{
    constructor(){
        super();

        this.months = [
            "January","February","March","April","May","June","July", "Avgust","Setember", "October","November","December"];
        this.weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
        this.date = new Date(); 
       
        const shadowRoot = this.attachShadow({mode:'open'});
        shadowRoot.appendChild( template.content.cloneNode(true));
        const linkEl = document.createElement('link');
        linkEl.rel = 'stylesheet';
        linkEl.href = 'https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css';
        shadowRoot.appendChild(linkEl);

        shadowRoot.getElementById('container').addEventListener('click', this.handleButtonClick);    
        shadowRoot.getElementById('timep').addEventListener('click', this.activateButton);    
        shadowRoot.querySelector('.icon:first-child').addEventListener('click', this.prevMonth.bind(this));
        shadowRoot.querySelector('.icon:last-child').addEventListener('click', this.nextMonth.bind(this));
        
    }   

 
    handleButtonClick = (event) => {
        const buttons = this.shadowRoot.querySelectorAll('.btn');
        buttons.forEach(button => {
            button.classList.remove('active');
        });
        const clickedButton = event.target;
        clickedButton.classList.add('active');
    }
    activateButton = (event) => {
        const button = this.shadowRoot.querySelectorAll('.timebtn');
        button.forEach(button => {
            // this.shadowRoot.querySelector('.timebtn').value
            // if(isTimeBeforeCurent(this.date.getHours(), this.date.getMinutes())){
            //     button.setAttribute('disabled', ' ');
            // }            
            button.classList.remove('active');
        });
        const clickedButton = event.target;
        clickedButton.classList.add('active');
    }

    activateButton = (event) => {
        const button = this.shadowRoot.querySelectorAll('.timebtn');
        button.forEach(button => {
            // this.shadowRoot.querySelector('.timebtn').value
            // if(isTimeBeforeCurent(this.date.getHours(), this.date.getMinutes())){
            //     button.setAttribute('disabled', ' ');
            // }            
            button.classList.remove('active');
        });
        const clickedButton = event.target;
        clickedButton.classList.add('active');
    }
    //  getCurrentDate(element, asString) {
    //     if (element) {
    //         if (asString) {
    //             return element.textContent = weekdays[date.getDay()] + date.getDate()  + months[date.getMonth()]  + date.getFullYear();
    //         }
    //         return element.value = date.toISOString().substr(0, 10);
    //     }
    //     return date;
    // }

    generateCalendar() {
        const calendar = this.shadowRoot.getElementById('calendar')
        if (calendar) {
            calendar.remove();
        }
        const table = document.createElement("table");
        table.id = "calendar";
     
        const trHeader = document.createElement('tr');
        trHeader.className = 'weekends';
        this.weekdays.map(week => {
            const th = document.createElement('th');
            const w = document.createTextNode(week.substring(0, 3));
            th.appendChild(w);
            trHeader.appendChild(th);
        });
     
        table.appendChild(trHeader);
     
        const weekDay = new Date(
            this.date.getFullYear(),
            this.date.getMonth(),
            0
        ).getDay();
     
        const lastDay = new Date(
            this.date.getFullYear(),
            this.date.getMonth() + 1,
            0
        ).getDate();
    
        let tr = document.createElement("tr");
        let td = '';
        let empty = '';
        let lbl = document.createElement('label');
        let inpt = document.createElement('input');
        let week = 0;
     
        while (week < weekDay) {
            td = document.createElement("td");
            empty = document.createTextNode(' ');
            td.appendChild(empty);
            tr.appendChild(td);
            week++;
        }
    
        for (let i = 1; i <= lastDay;) {
            while (week < 7) {
                td = document.createElement('td');
                let text = document.createTextNode(i);
                lbl = document.createElement('label');
                inpt = document.createElement('input');
                inpt.type = "radio";
                inpt.name = "udur";
                inpt.id = `udur${i}`;
                inpt.value = `${i}`;
                inpt.className ="udur";
                lbl.className = "btn-day";
                lbl.setAttribute("for",`udur${i}`);
                td.appendChild(inpt);

                // btn.addEventListener('click',this.changeDate.bind(this));
                week++;
    
                if (i <= lastDay) {
                    if (this.isDateBeforeCurrentDate(this.date.getFullYear(), this.date.getMonth(), i+1)) {

                        lbl.appendChild(text);
                        inpt.setAttribute('disabled',' ');
                        lbl.classList.add('disabled');
                    } 
                    else{
                        lbl.appendChild(text);
                    }
                    td.appendChild(lbl);
                    i++;
                } else {
                    text = document.createTextNode(' ');
                    td.appendChild(text);
                }
                tr.appendChild(td);

                
            }
            table.appendChild(tr);
    
            tr = document.createElement("tr");
    
            week = 0;
        }
        this.shadowRoot.querySelector('.calendar').appendChild(table);
        this.changeHeader(this.date);
        this.shadowRoot.getElementById('month-header').innerHTML = this.months[this.date.getMonth()].substring(0, 3) + ' ' + this.date.getFullYear();
    }

     
    changeHeader(dateHeader) {
        const month = this.shadowRoot.getElementById("month-header");
        if (month.childNodes[0]) {
            month.removeChild(month.childNodes[0]);
        }
        const headerMonth = document.createElement("h1");
        const textMonth = document.createTextNode(this.months[dateHeader.getMonth()].substring(0, 3) + " " + dateHeader.getFullYear());
        headerMonth.appendChild(textMonth);
        month.appendChild(headerMonth);
    }

    isDateCurrentDate(year, month, day) {
        const currentDate = new Date();
        const selectedDate = new Date(year, month, day);
        return selectedDate === currentDate;
    }
    isDateBeforeCurrentDate(year, month, day) {
        const currentDate = new Date();
        const selectedDate = new Date(year, month, day);
        return selectedDate < currentDate;
    }

    nextMonth() {
        this.date = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 1);
        this.generateCalendar(this.date);
    }
    
    prevMonth() {
        this.date = new Date(this.date.getFullYear(), this.date.getMonth() - 1, 1);
        this.generateCalendar(this.date);
    }

    // disableTimeButton(){
    //     const button = this.shadowRoot.querySelectorAll('.timebtn');
    //     button.forEach(button => { 
    //         if(isTimeBeforeCurent(this.date.getHours(), this.date.getMinutes())){
    //             button.setAttribute('disabled', ' ');
            
    //     }});
    // }
    isTimeBeforeCurent(hours, minute){
        const currentTime = new Date();
        const selectedTime = new Date(hours, minute);
        return selectedTime < currentTime;
    }
    displayRadioValue() {
        let radioVal;
        const radios = this.shadowRoot.querySelectorAll('input[name="udur"]');
        radios.forEach(radio => {
          radio.addEventListener('click', function () {
            radioVal = radio.value;
            console.log(radioVal);
          });
        });
    }
    redirectPage(){
        let type = this.shadowRoot.querySelector(".btn.btn-primary.active").value;
        let onsar = this.shadowRoot.querySelector("#month-header").value;
        let tsag = this.shadowRoot.querySelector(".btn.timebtn.btn-primary.active").value;
        let symptoms = this.shadowRoot.querySelector(".sym").value;
        let symptomsOnset = this.shadowRoot.querySelector(".symon").value;

        // Create data object
        let data = {
            type: type,
            onsar: onsar,
            tsag: tsag,
            symptoms: symptoms,
            symptomsOnset: symptomsOnset
        };

  // Save data to local storage
  localStorage.setItem("myData", JSON.stringify(data));
        window.location.replace('./appointment.html');
    }

        connectedCallback() {
            this.generateCalendar();
            this.nextMonth();
            this.prevMonth();
            this.displayRadioValue();
   
        }
    
        disconnectedCallback() {
        }
    
        attributeChangedCallback(name, oldVal, newVal) {
            shadowRoot.querySelector('.udur').addEventListener('click', this.displayRadioValue);  
            shadowRoot.getElementById('savebtn').addEventListener('click', this.redirectPage); 
        }
}
    
customElements.define("erp-appointment", ErpAppointment);
