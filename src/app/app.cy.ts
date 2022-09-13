import { mount } from "cypress/angular"
import { AppComponent } from "./app.component"


describe('AppComponent', () => {

    it('should load', () => {
        mount(AppComponent);
    })
})
