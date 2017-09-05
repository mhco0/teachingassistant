import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule }   from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MetasComponent } from './metas.component';
<<<<<<< HEAD
=======
import { AlunosComponent } from './alunos.component';
>>>>>>> 3d64e16... modularizando o componente principal
import { AlunoService } from './aluno.service';

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    MetasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
=======
    MetasComponent,
    AlunosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'metas',
        component: MetasComponent
      },
      {
        path: 'alunos',
        component: AlunosComponent
      }
    ])
>>>>>>> 3d64e16... modularizando o componente principal
  ],
  providers: [AlunoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
