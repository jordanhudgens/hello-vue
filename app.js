new Vue({
  el: "#app",
  data: {
    title: "Daily Smarty Branding Details",
    content: "Welcome to the branding page",
    instagram: "https://www.instagram.com/dailysmarty/",
    detailClasses: ["style-details-text", "blue_text"],
    showImg: false,
    smallImg: true,
    medImg: false,
    lgImg: false,
    imgHeight: 150,
    imgWidth: 150,
    squaredResult: 0,
    firstName: "",
    lastName: ""
  },
  methods: {
    greeting() {
      return this.content;
    },
    toggleImg() {
      console.log("toggleImg clicked");

      this.showImg = !this.showImg;

      // if (this.showImg) {
      //   this.showImg = false;
      // } else {
      //   this.showImg = true;
      // }
    },
    showImgOptions() {
      if (this.smallImg) {
        this.imgHeight = 250;
        this.imgWidth = 250;
        this.smallImg = false;
        this.medImg = true;
      } else if (this.medImg) {
        this.imgHeight = 350;
        this.imgWidth = 350;
        this.medImg = false;
        this.lgImg = true;
      } else {
        this.imgHeight = 150;
        this.imgWidth = 150;
        this.lgImg = false;
        this.smallImg = true;
      }
    },
    altShowImgOptions() {
      if (this.smallImg) {
        this.smallImg = false;
        this.medImg = true;
      } else if (this.medImg) {
        this.medImg = false;
        this.lgImg = true;
      } else {
        this.lgImg = false;
        this.smallImg = true;
      }
    },
    imgClick(evt) {
      console.log(evt.target.src);
    },
    igClick() {
      console.log("Instagram link clicked");
    },
    square(evt) {
      this.squaredResult = evt.target.value * evt.target.value;
    },
    hotKey() {
      console.log("You used a modifier key!");
    }
  }
});

new Vue({
  el: "#logoList",
  data: {
    testing: "Heyyy",
    logos: [
      { className: "image_logos", imgSource: "images/ds_circle_logo.png" },
      { className: "image_logos", imgSource: "images/ds_square_logo.png" },
      { className: "text_logos", imgSource: "images/ds_icon_text_logo.png" },
      { className: "text_logos", imgSource: "images/ds_text_logo.png" }
    ]
  }
});
