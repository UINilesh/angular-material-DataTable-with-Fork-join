import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommentsComponent } from './components/comments/comments.component';
import { PhotosComponent } from './components/photos/photos.component';
import { PostsComponent } from './components/posts/posts.component';
import { TodosComponent } from './components/todos/todos.component';
import { UserComponent } from './components/user/user.component';


const routes: Routes = [
  {
    path:'user',component:UserComponent
  },
  {
    path:'comment',component:CommentsComponent
  }, 
  {
    path:'photodata',component:PhotosComponent
  },
  {
    path:'todos',component:TodosComponent
  },
  {
    path:'post',component:PostsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
