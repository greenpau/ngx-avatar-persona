# Avatar Persona Angular Component

<a href="https://github.com/greenpau/ngx-avatar-persona/actions/" target="_blank"><img src="https://github.com/greenpau/ngx-avatar-persona/workflows/build/badge.svg?branch=main"></a>
<span class="badge-npmversion"><a href="https://npmjs.org/package/ngx-avatar-persona" title="View this project on NPM"><img src="https://img.shields.io/npm/v/ngx-avatar-persona.svg" alt="NPM version" /></a></span>

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
            [primaryText]="userAvatarPrimaryText"
            [secondaryText]="userAvatarSecondaryText"
            [avatarUrl]="userAvatarUrl">
          </ngx-avatar-persona>
        </span>

      </mat-toolbar-row>
    </mat-toolbar>
```
