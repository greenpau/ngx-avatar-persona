import { Component, Input, Output } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { AvatarPersonaProps } from './avatar-persona-props';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'ngx-avatar-persona',
  templateUrl: './avatar-persona.component.html',
  styleUrls: ['./avatar-persona.component.scss'],
})
export class AvatarPersonaComponent {
  props: AvatarPersonaProps = new AvatarPersonaProps();

  @Input()
  set primaryText(s: string) {
    this.props.primaryText = (s && s.trim()) || 'Anonymous';
    this.props.avatarInitials = this.parseInitials(this.props.primaryText);
  }
  get primaryText(): string {
    return this.props.primaryText!;
  }

  @Input()
  set secondaryText(s: string) {
    this.props.secondaryText = (s && s.trim()) || 'Unknown';
  }

  get secondaryText(): string {
    return this.props.secondaryText!;
  }

  @Input()
  set avatarUrl(s: string) {
    this.props.avatarUrl = (s && s.trim()) || '';
  }

  get avatarUrl(): string {
    return this.props.avatarUrl!;
  }

  @Input()
  set avatarInitials(s: string) {
    if (!s || s.length === 0) {
      return;
    }
    this.props.avatarInitials = (s && s.trim()) || '';
  }

  get avatarInitials(): string {
    return this.props.avatarInitials!;
  }

  @Input()
  set avatarAlt(s: string) {
    this.props.avatarAlt = (s && s.trim()) || '';
  }

  get avatarAlt(): string {
    return this.props.avatarAlt!;
  }

  @Input()
  set size(i: number) {
    this.props.size = i || 36;
  }

  get size(): number {
    return this.props.size!;
  }

  @Output() redirect: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
    this.props.size = 36;
  }

  parseInitials(s: string): string {
    const p = s.split(' ');
    let initials = p[0].substring(0, 1).toUpperCase();
    if (p.length > 1) {
      initials += p[p.length - 1].substring(0, 1).toUpperCase();
    }
    return initials;
  }
}
