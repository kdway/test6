
import { useTranslation } from "react-i18next";
import React from 'react';
const Navbar = () => {
     //Calling t and i18n method from useTranslation hook 
            //Creating a method to change the language onChnage from select box
            const { t,i18n } = useTranslation();
     const changeLanguageHandler = (e) => {
        const languageValue = e.target.value
        i18n.changeLanguage(languageValue);}

  
    
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary shadow-lg p-4">
        <div class="container-fluid">


          <a class="navbar-brand" href="#">Navbar</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/Contact">Contact</a>
              </li>
           </ul>

   
      
      

      
        
    
            
          </div>
        </div>
        <form class="d-flex mt-2 me-5" >
  

  <select className="custom-select" style={{width: 200}} onChange={changeLanguageHandler}>
  <option value="en" >English</option>
  <option value="fr" >French</option>
  </select>


</form>           

        
      </nav>

      
      <h1 className='text'>{t('manish')}</h1> 
     <p></p>
    
    </>
  )
};

export default Navbar;
