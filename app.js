import About from "./about";
import Global from "./app";
import Home from "./home";
import Project from "./project";
import Sector from "./sector";

export default class App{
  constructor() {
    currentPage = window.location.pathname;
    this.init()
  }

  init() {
    new Global()
    new Animations
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