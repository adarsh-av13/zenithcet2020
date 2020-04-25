Vue.component("execom-member", {
  template: `<div :id="'mem'+id">
  <div class="memberbox">
      <img class="memberimage" :src="source">
  </div>
  <div class="memberdeets">
      <p class="membername">{{ name }}</p>
      <p class="memberpos">{{designation}}</p>
      <p class="memberphone"><a :href="'tel: '+phone">{{phone}}</a></p>
  </div>
</div> `,
  props: ["id", "source", "name", "designation", "phone"],
});

new Vue({
  el: "#teambox",
  data: {
    mine: "Hola!",
    eMembers: [
      {
        name: "ASLAM KHAN P V",
        designation: "Team Captain",
        phone: "+91 9876543210",
        source: "assets/images/members/aslamkhanpv.jpg",
      },
      {
        name: "A ANTO NIGIN",
        designation: "Manager",
        phone: "+91 9876556789",
        source: "assets/images/members/aantonigin.jpg",
      },
      {
        name: "ANDRIA ALEX THOMAS",
        designation: "Sponsorship and Marketing Head",
        phone: "+91 9876543210",
        source: "assets/images/member.png",
      },
      {
        name: "P SURYANARAYAN NAIR",
        designation: "Technical Head",
        phone: "+91 9876543210",
        source: "assets/images/members/psuryanarayannair.jpg",
      },
      {
        name: "SREERAJ R",
        designation: "Production Head",
        phone: "+91 9876543210",
        source: "assets/images/member.png",
      },
    ],
  },
});
