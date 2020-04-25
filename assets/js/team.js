Vue.component("execom-member", {
  template: `<div :id="'mem'+id">
  <div class="memberbox">
      <img  @error="onImageLoadFailure" class="memberimage" :src="source">
  </div>
  <div class="memberdeets">
      <p class="membername">{{ name }}</p>
      <p class="memberpos">{{designation}}</p>
      <p class="memberphone"><a :href="'tel: '+phone">{{phone}}</a></p>
  </div>
</div> `,
  props: ["id", "source", "name", "designation", "phone"],
  methods: {
    onImageLoadFailure(event) {
      event.target.src = "assets/images/member.png";
    },
  },
});

new Vue({
  el: "#teambox",
  data: {
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
        source: "assets/images/members/andriaalexthomas.jpg",
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
        source: "assets/images/sreerajr.jpg",
      },
    ],
  },
});

Vue.component("rot-member", {
  props: ["name", "source"],
  template: `<div class="rot-mem d-flex">
  <img  @error="onImageLoadFailure" :src=source>
  <h3>{{name}}</h3>
</div>`,
  methods: {
    onImageLoadFailure(event) {
      event.target.src = "assets/images/member.png";
    },
  },
});
new Vue({
  el: "#rest-of-the-team",
  data: {
    rotMembers: [
      {
        name: "Abdul Hadi P S",
        source: "assets/images/members/abdulhadi.jpg",
      },
      {
        name: "Sreelal D",
        source: "assets/images/members/sreelald.jpg",
      },
      {
        name: "Ashish Prakash",
        source: "assets/images/members/ashishprakash.jpg",
      },
      {
        name: "Sreejith K Sunil",
        source: "assets/images/members/sreejithksunil.jpg",
      },
      {
        name: "Sachin Varghese",
        source: "assets/images/members/sachinvarghese.jpg",
      },
      {
        name: "Vivek Eugene",
        source: "assets/images/members/vivekeugene.jpg",
      },
      {
        name: "Parvathy A L",
        source: "assets/images/members/parvathyal.jpg",
      },
      {
        name: "Sanat Wilson",
        source: "assets/images/members/sanatwilson.jpg",
      },
      {
        name: "Anandhu M B",
        source: "assets/images/members/anandhumb.jpg",
      },
      {
        name: "Anandu K P",
        source: "assets/images/members/anandukp.jpg",
      },
      {
        name: "Hashim N M",
        source: "assets/images/members/hashimnm.jpg",
      },
      {
        name: "Salih V P",
        source: "assets/images/members/salihvp.jpg",
      },
      {
        name: "Dilvaseem",
        source: "assets/images/members/dilvaseem.jpg",
      },
      {
        name: "Mohamed Hazeem",
        source: "assets/images/members/mohamedhazeem.jpg",
      },
      {
        name: "Yedukrishnan P S",
        source: "assets/images/members/yedukrishnanps.jpg",
      },
      {
        name: "Amal Babu",
        source: "assets/images/members/amalbabu.jpg",
      },
      {
        name: "Anugrah T V",
        source: "assets/images/members/anugrahtv.jpg",
      },
      {
        name: "Sidharth H",
        source: "assets/images/members/sidharthh.jpg",
      },
      {
        name: "Safwan P",
        source: "assets/images/members/safwanp.jpg",
      },
    ],
  },
});
