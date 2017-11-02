class NavbarController {
  constructor() {
    this.isLogin;
    if (localStorage.getItem('fake-isLogin') == "true") {
      this.isLogin = true;
    } else {
      this.isLogin = false;
    }
  }

  init(){
    this.isNavBarCollapsed = false;
    this.toggleNavBar = () => this.isNavBarCollapsed = !this.isNavBarCollapsed;
  }

  toggleNavBar() {
    this.isNavBarCollapsed = !this.isNavBarCollapsed;
  }
}

export default NavbarController;
