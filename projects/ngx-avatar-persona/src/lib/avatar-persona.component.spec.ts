import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarPersonaComponent } from './avatar-persona.component';

describe('AvatarPersonaComponent', () => {
  let component: AvatarPersonaComponent;
  let fixture: ComponentFixture<AvatarPersonaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
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
