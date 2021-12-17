import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { AvatarPersonaComponent } from './avatar-persona.component';

@NgModule({
  declarations: [AvatarPersonaComponent],
  imports: [CommonModule, MatButtonModule, MatMenuModule, MatIconModule],
  exports: [AvatarPersonaComponent],
})
export class AvatarPersonaModule {}
