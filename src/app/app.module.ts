import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {HandshakeModule} from "./shared/handshake/handshake.module";
import {RouterModule} from "@angular/router";
import {BrowserModule} from "@angular/platform-browser";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
    declarations: [AppComponent],
    imports: [HandshakeModule, RouterModule, BrowserModule, HttpClientModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {
}