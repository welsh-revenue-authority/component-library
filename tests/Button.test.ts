import * as mdiIcons from "@mdi/js";
import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import Button from "../src/components/Button.vue";
import Icon from "../src/components/Icon.vue";

describe("Button", () => {
  describe("Default Story", () => {
    it("should render with default size", () => {
      const wrapper = mount(Button, {
        props: {
          size: "default"
        },
        slots: {
          default: "Default Button"
        }
      });

      expect(wrapper.text()).toContain("Default Button");
      expect(wrapper.classes()).toContain("default-button");
      expect(wrapper.find("button").exists()).toBe(true);
    });

    it("should have default background color wra-black when not specified", () => {
      const wrapper = mount(Button, {
        slots: {
          default: "Default Button"
        }
      });

      expect(wrapper.classes()).toContain("wra-black");
    });
  });

  describe("Small Story", () => {
    it("should render with small size", () => {
      const wrapper = mount(Button, {
        props: {
          size: "small"
        },
        slots: {
          default: "Small Button"
        }
      });

      expect(wrapper.text()).toContain("Small Button");
      expect(wrapper.classes()).toContain("small-button");
    });
  });

  describe("BackgroundColour Story", () => {
    it("should render with wra-blue background color", () => {
      const wrapper = mount(Button, {
        props: {
          backgroundColor: "wra-blue"
        },
        slots: {
          default: "Blue Button"
        }
      });

      expect(wrapper.text()).toContain("Blue Button");
      expect(wrapper.classes()).toContain("wra-blue");
    });

    it("should render with wra-red background color", () => {
      const wrapper = mount(Button, {
        props: {
          backgroundColor: "wra-red"
        },
        slots: {
          default: "Red Button"
        }
      });

      expect(wrapper.classes()).toContain("wra-red");
    });

    it("should render with wra-green background color", () => {
      const wrapper = mount(Button, {
        props: {
          backgroundColor: "wra-green"
        },
        slots: {
          default: "Green Button"
        }
      });

      expect(wrapper.classes()).toContain("wra-green");
    });

    it("should render with wra-revenue background color", () => {
      const wrapper = mount(Button, {
        props: {
          backgroundColor: "wra-revenue"
        },
        slots: {
          default: "Revenue Button"
        }
      });

      expect(wrapper.classes()).toContain("wra-revenue");
    });

    it("should render with wra-white background color", () => {
      const wrapper = mount(Button, {
        props: {
          backgroundColor: "wra-white"
        },
        slots: {
          default: "White Button"
        }
      });

      expect(wrapper.classes()).toContain("wra-white");
    });
  });

  describe("Outlined Story", () => {
    it("should render as outlined button", () => {
      const wrapper = mount(Button, {
        props: {
          outlined: true
        },
        slots: {
          default: "Outlined Button"
        }
      });

      expect(wrapper.text()).toContain("Outlined Button");
      expect(wrapper.classes()).toContain("outlined-button");
    });

    it("should not have outlined class when outlined is false", () => {
      const wrapper = mount(Button, {
        props: {
          outlined: false
        },
        slots: {
          default: "Normal Button"
        }
      });

      expect(wrapper.classes()).not.toContain("outlined-button");
    });
  });

  describe("PrependIcon Story", () => {
    it("should render with prepend icon slot", () => {
      const wrapper = mount(Button, {
        props: {
          prependIcon: true
        },
        slots: {
          default: "Back Button",
          "prepend-icon": {
            template: `<span class="test-icon">Icon</span>`
          }
        }
      });

      expect(wrapper.text()).toContain("Back Button");
      expect(wrapper.find(".prepend-icon-wrapper").exists()).toBe(true);
      expect(wrapper.find(".test-icon").exists()).toBe(true);
    });

    it("should render with Icon component in prepend slot", () => {
      const wrapper = mount(Button, {
        props: {
          prependIcon: true
        },
        slots: {
          default: "Back Button",
          "prepend-icon": () =>
            mount(Icon, {
              props: {
                icon: mdiIcons.mdiChevronLeft,
                fill: "white"
              }
            }).element
        }
      });

      expect(wrapper.text()).toContain("Back Button");
      expect(wrapper.find(".prepend-icon-wrapper").exists()).toBe(true);
    });
  });

  describe("AppendIcon Story", () => {
    it("should render with append icon slot", () => {
      const wrapper = mount(Button, {
        props: {
          appendIcon: true
        },
        slots: {
          default: "Next Button",
          "append-icon": {
            template: `<span class="test-icon">Icon</span>`
          }
        }
      });

      expect(wrapper.text()).toContain("Next Button");
      expect(wrapper.find(".append-icon-wrapper").exists()).toBe(true);
      expect(wrapper.find(".test-icon").exists()).toBe(true);
    });

    it("should render with Icon component in append slot", () => {
      const wrapper = mount(Button, {
        props: {
          appendIcon: true
        },
        slots: {
          default: "Next Button",
          "append-icon": () =>
            mount(Icon, {
              props: {
                icon: mdiIcons.mdiChevronRight,
                fill: "white"
              }
            }).element
        }
      });

      expect(wrapper.text()).toContain("Next Button");
      expect(wrapper.find(".append-icon-wrapper").exists()).toBe(true);
    });
  });

  describe("AppendCustomIcon Story", () => {
    it("should render with custom append icon", () => {
      const wrapper = mount(Button, {
        props: {
          appendIcon: true
        },
        slots: {
          default: "Upload File",
          "append-icon": () =>
            mount(Icon, {
              props: {
                icon: mdiIcons.mdiUpload,
                fill: "white"
              }
            }).element
        }
      });

      expect(wrapper.text()).toContain("Upload File");
      expect(wrapper.find(".append-icon-wrapper").exists()).toBe(true);
    });
  });

  describe("Disabled Story", () => {
    it("should render as disabled", () => {
      const wrapper = mount(Button, {
        props: {
          disabled: true
        },
        slots: {
          default: "Disabled Button"
        }
      });

      expect(wrapper.text()).toContain("Disabled Button");
      expect(wrapper.find("button").attributes("disabled")).toBeDefined();
    });

    it("should not be disabled when disabled prop is false", () => {
      const wrapper = mount(Button, {
        props: {
          disabled: false
        },
        slots: {
          default: "Enabled Button"
        }
      });

      expect(wrapper.find("button").attributes("disabled")).toBeUndefined();
    });
  });

  describe("Button Type", () => {
    it("should always render as type button", () => {
      const wrapper = mount(Button, {
        slots: {
          default: "Button"
        }
      });

      expect(wrapper.find("button").attributes("type")).toBe("button");
    });
  });

  describe("Additional Props Combinations", () => {
    it("should handle multiple props together", () => {
      const wrapper = mount(Button, {
        props: {
          size: "small",
          backgroundColor: "wra-blue",
          outlined: true
        },
        slots: {
          default: "Complex Button"
        }
      });

      expect(wrapper.classes()).toContain("small-button");
      expect(wrapper.classes()).toContain("wra-blue");
      expect(wrapper.classes()).toContain("outlined-button");
    });

    it("should handle button with both prepend and append icons", () => {
      const wrapper = mount(Button, {
        props: {
          prependIcon: true,
          appendIcon: true
        },
        slots: {
          default: "Both Icons",
          "prepend-icon": {
            template: `<span class="prepend">Left</span>`
          },
          "append-icon": {
            template: `<span class="append">Right</span>`
          }
        }
      });

      expect(wrapper.find(".prepend-icon-wrapper").exists()).toBe(true);
      expect(wrapper.find(".append-icon-wrapper").exists()).toBe(true);
      expect(wrapper.find(".prepend").exists()).toBe(true);
      expect(wrapper.find(".append").exists()).toBe(true);
    });
  });

  describe("Component Structure", () => {
    it("should have wra-button class", () => {
      const wrapper = mount(Button, {
        slots: {
          default: "Button"
        }
      });

      expect(wrapper.classes()).toContain("wra-button");
    });

    it("should render slot content", () => {
      const wrapper = mount(Button, {
        slots: {
          default: "Custom Content Here"
        }
      });

      expect(wrapper.text()).toContain("Custom Content Here");
    });
  });
});
