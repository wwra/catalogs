// Angular
import {NgModule} from '@angular/core';
import {BrowserModule}  from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

// Services
import {TreeService} from "../services/tree-service";

// Components
import {AppComponent} from '.';
import {TreeBlockComponent} from "../treeblock";
import {TreeViewComponent} from "../tree-view";
import {DescriptionComponent} from "../information";
import {CommentsComponent} from "../comments";

@NgModule({
    imports     : [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule
    ],
    providers   : [
        TreeService
    ],
    declarations: [
        AppComponent,
        TreeBlockComponent,
        TreeViewComponent,
        DescriptionComponent,
        CommentsComponent
    ],
    bootstrap   : [AppComponent]
})
export class AppModule {
}
