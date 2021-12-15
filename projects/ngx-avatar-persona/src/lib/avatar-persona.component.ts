import { Component, Input } from '@angular/core';
import { AvatarPersonaProps } from './avatar-persona-props';

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
    this.props.size = i || 0;
  }

  get size(): number {
    return this.props.size!;
  }

  constructor() {}
}
