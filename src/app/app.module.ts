import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http' 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { UserComponent } from './components/user/user.component';
import { TodosComponent } from './components/todos/todos.component';
import { PhotosComponent } from './components/photos/photos.component';
import { CommentsComponent } from './components/comments/comments.component';
import { PostsComponent } from './components/posts/posts.component';
import { SharedataService } from './services/sharedata.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShareModuleModule } from "./material/share-module/share-module.module";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    UserComponent,
    TodosComponent,
    PhotosComponent,
    CommentsComponent,
    PostsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ShareModuleModule
  ],
  exports:[],
  providers: [SharedataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
