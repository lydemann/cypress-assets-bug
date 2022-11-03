import { mount } from "cypress/angular"
import { AppComponent } from "./app.component"
import { AppModule } from "./app.module";


describe('AppComponent', () => {

    it('should load', () => {
        mount(AppComponent, {imports: [AppModule]});
    })
})
