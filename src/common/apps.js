import {DEFAULT_APP_ICON} from "#common/consts.js";

export const appsMetas = new Map();

export class AppMeta {
  type;
  component;
  createApp;
  icon;

  constructor(type, component, createApp, icon = DEFAULT_APP_ICON) {
    this.type = type;
    this.component = component;
    this.createApp = createApp;
    this.icon = icon;
    appsMetas.set(type, this);
  }
}

