const config = {
  translations: {
    en: {
      "app.components.LeftMenu.navbrand.title": "BAG Dashboard",

      "app.components.LeftMenu.navbrand.workplace": "BAG",

      "Auth.form.welcome.title": "Welcome to BAG",

      "Auth.form.welcome.subtitle": "Login to your account",

      "Settings.profile.form.section.experience.interfaceLanguageHelp":
        "Preference changes will apply only to you.",
    },
  }, 
};

const bootstrap = (app) => {
  console.log(app);
   document.title = "BAG Admin Panel";
};

export default {
  config,
  bootstrap,
};
