# Avatar Persona Angular Component

<a href="https://github.com/greenpau/ngx-avatar-persona/actions/" target="_blank"><img src="https://github.com/greenpau/ngx-avatar-persona/workflows/build/badge.svg?branch=main"></a>
<span class="badge-npmversion"><a href="https://npmjs.org/package/ngx-avatar-persona" title="View this project on NPM"><img src="https://img.shields.io/npm/v/ngx-avatar-persona.svg" alt="NPM version" /></a></span>

## Overview

This component display an avatar with primary and secondary text. Upon clicking
on it, the component displays a navigation menu allowing a user to
navigate to either "Portal" or "Sign Out".

**Note**: The click does not cause the redirect. Rather, it emits an event
to its parent component with either `portal` or `logout` string.

![](https://github.com/authp/authp.github.io/blob/main/docs/authenticate/webapps/images/ngx-avatar-persona-animation.gif?raw=true)

See also:
* [github.com/greenpau/ngx-authp-service](https://github.com/greenpau/ngx-authp-service)

## Installation

```bash
npm install ngx-avatar-persona --save

# or

yarn add ngx-avatar-persona
```

## Usage

Add the `AvatarPersonaModule` to your `app.module.ts` as a provider:

```typescript
import { AvatarPersonaModule } from 'ngx-avatar-persona';

@NgModule({
  imports: [
    ...
    AvatarPersonaModule,
    ...
  ],
  ...
})
```

Next, add the `AvatarPersonaComponent` in `app.component.html`
via `ngx-avatar-persona`.

```html
    <mat-toolbar class="shadow" color="primary">
      <mat-toolbar-row>

        <span class="toolbar-avatar">
          <ngx-avatar-persona
            (redirect)="redirect($event)"
            [primaryText]="userAvatarPrimaryText"
            [secondaryText]="userAvatarSecondaryText"
            [avatarInitials]="userAvatarInitials"
            [avatarUrl]="userAvatarUrl">
          </ngx-avatar-persona>
        </span>

      </mat-toolbar-row>
    </mat-toolbar>
```

The `app.component.ts` should implement `redirect()` function
to handle the re-routing.

For example, the following function implements the re-rerouting
to Auth Portal link page and sign out.

```typescript
  redirect(dest: string) {
    const cfg = this.authpService.getConfig();
    switch (dest) {
      case 'portal':
        window.location.href = `${cfg.baseUrl}/portal`;
        break;
      case 'logout':
        window.location.href = `${cfg.baseUrl}/logout`;
        break;
      default:
        console.error(`received unsupported redirect to ${dest}`);
        break;
    }
  }
```
