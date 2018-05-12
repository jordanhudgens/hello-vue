new Vue({
  el: "#app",
  data: {
    title: "Daily Smarty Branding Details",
    content: "Welcome to the branding page",
    instagram: "https://www.instagram.com/dailysmarty/",
    detailClasses: ["style-details-text", "blue_text"],
    showImg: false
  },
  methods: {
    greeting() {
      return this.content;
    },
    toggleImg() {
      console.log("toggleImg clicked");

      if (this.showImg) {
        this.showImg = false;
      } else {
        this.showImg = true;
      }
    }
  }
});
