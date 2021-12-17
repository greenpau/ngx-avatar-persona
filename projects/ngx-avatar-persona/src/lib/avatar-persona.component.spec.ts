import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { AvatarPersonaComponent } from './avatar-persona.component';

describe('AvatarPersonaComponent', () => {
  let component: AvatarPersonaComponent;
  let fixture: ComponentFixture<AvatarPersonaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatMenuModule, MatButtonModule, MatIconModule],
      declarations: [AvatarPersonaComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvatarPersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
