import ValidationTooltip from "./components/ValidationTooltip.vue";

const components = {
  ValidationTooltip
};

export default (app) => {
  for (const prop in components) {
    if (components.hasOwnProperty(prop)) {
      app.component(components[prop].name, components[prop]);
    }
  }
};
