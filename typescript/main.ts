"use strict"
import Burger from "./burger.js"



//? Ajout le burger menu en dimension phone/tablette
    if (window.matchMedia('screen and (max-width:1023px)').matches){
    const burger = new Burger()
    burger.toggle(burger.nav)
    burger.logoClick()
    }



