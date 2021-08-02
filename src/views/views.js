import { SectionA, SectionB, SectionC } from "./section";
import * as statesA from "./states/sectionA";
import * as statesC from "./states/sectionC";

class Views {
  constructor() {
    this.componentA = new SectionA();
    this.componentB = new SectionB();
    this.componentC = new SectionC();

    this.searchInput = document.getElementById('searchinput');
    this.searchBtn =  document.querySelector(".search-btn");
    this.accountComponent =  document.querySelector(".account-div");

    //setting up initial states
    this.componentA.init();
    this.componentC.init();
  }

  showAlert(status, message) {
    const alertDiv = document.createElement("div");
    alertDiv.classList.add("alert", `${status}`, "p-1");
    alertDiv.innerHTML = `
    <p class="alert-message">${message}</p>
  <i class="alert-close-btn fas fa-times"></i>
    `;
    document.querySelector(".alert-parent").prepend(alertDiv);
    setTimeout(() => {
      document.querySelector(".alert").remove();
    }, 2200);
  }

  accountlogInState(profile) {
    this.componentA.change(new statesA.loggedInState(profile));
    this.componentA.change(new statesC.loggedInState(profile));
  }

  spinnerState(sectionId) {
    if (sectionId === "section-c") {
      this.componentC.change(new statesC.spinnerState());
    }
    if (sectionId === "section-b") {
      // this.componentB.change(new statesB.spinnerState());
      console.log("spinners on section-b hehe");
    }
  }

  searchResultsState(result) {
    this.componentC.change(new statesC.searchResultState(result));
  }
}

export default Views;
