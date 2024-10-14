import About from "./about";
import Global from "./global";
import Home from "./home";
import Project from "./project";
import Sector from "./sector";

export default class App{
  constructor() {
    this.currentPage = window.location.pathname;
    console.log('current page', this.currentPage)
    this.init()
  }

  init() {
    new Global()
    if (this.currentPage === '/') {
      new Home()
      console.log('created home')
    }

    if(this.currentPage === '/about') {
      new About()
      console.log('created about')
    }

    if (this.currentPage.startsWith('/projects/')) {
      new Project()
      console.log('created project')
    }

    if (this.currentPage.startsWith('/sector/')) {
      new Sector()
      console.log('created sector')
    }



  }
}

new App()