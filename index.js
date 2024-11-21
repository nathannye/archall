import gsap from "gsap";
import About from "./src/about";
import Global from "./src/global";
import Home from "./src/home";
import Project from "./src/project";
import Sector from "./src/sector";
import { ScrollTrigger } from "gsap/all";

import './src/styles/about.css'
import './src/styles/global.css'
import  './src/styles/home.css'
import  './src/styles/index.css'
import  './src/styles/project.css'
import './src/styles/sector.css'
import './src/styles/styles.css'
import './src/styles/work.css'
import './src/styles/lenis.css'

export default class App{
  constructor() {
    this.currentPage = window.location.pathname;
    
    this.register()
    this.init()
  }

  register() {
    gsap.registerPlugin(ScrollTrigger)
  }

  init() {
    new Global()
    if (this.currentPage === '/') {
      new Home()
    }

    if(this.currentPage === '/about') {
      new About()
    }

    if (this.currentPage.startsWith('/projects/')) {
      new Project()
    }

    if (this.currentPage.startsWith('/sector/')) {
      new Sector()
    }
  }
}

new App()