import { mount } from "cypress/angular"
import { worker } from "../../mocks/browser";
import { AppComponent } from "./app.component"
import { AppModule } from "./app.module";


worker.start()


describe('AppComponent', () => {

    it('should load', () => {
        mount(AppComponent, {imports: [AppModule]});
    })
})
