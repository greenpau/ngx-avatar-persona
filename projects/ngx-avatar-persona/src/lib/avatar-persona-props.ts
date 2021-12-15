export interface IAvatarPersonaProps {
  primaryText?: string;
  secondaryText?: string;
  size?: number;
  avatarUrl?: string;
  avatarAlt?: string;
  avatarInitials?: string;
}

export class AvatarPersonaProps implements IAvatarPersonaProps {
  primaryText?: string;
  secondaryText?: string;
  size?: number;
  avatarUrl?: string;
  avatarAlt?: string;
  avatarInitials?: string;

  constructor() {}
}
