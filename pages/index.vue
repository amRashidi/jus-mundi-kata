<template>
  <div>
    <HomeIntro v-bind="intro" />
    <HomeTestimonial v-bind="testimonial" class="mt-8" />
    <HomePartnership v-bind="partnership" class="pb-16" />
    <HomeFeatures :items="features" class="mt-9" />
    <HomeNewsfeed v-bind="news" class="mt-8" />
    <HomeBrands v-bind="brands" class="mt-16" />
  </div>
</template>
<script setup lang="ts">
const intro = {
  title: 'A Unique Partnership for the Publication of ICC Arbitration Awards',
  subtitle: 'The International Chamber of Commerce (ICC) & Jus Mundi have joined forces to make ICC Arbitration Awards and related materials freely available to the global legal community.',
  link: {
    text: 'access ICC awards',
    to: '/'
  }
}
const testimonial = {
  qoute: 'Publicising  and  disseminating  information  about  arbitration  has  been  one  of  ICC’s commitments  since  its  creation  and  an  instrumental  factor  in  facilitating  the  development  of trade worldwide.',
  author: {
    avatar: 'https://www.w3schools.com/howto/img_avatar.png',
    name: 'Amir Rashidi',
    text: 'Note to the Parties and the Arbitral Tribunals <br> on the Conduct of Arbitration under the ICC Rules of Arbitration'
  },
  link: {
    text: 'read the whole document',
    to: '/'
  }
}
const partnership = {
  title: 'Why this partnership?',
  contents: [
    'Throughout its 100-year history, ICC has brought global business together to support an international rules-based order, including the promotion of global trade and commerce through the work of the ICC International Court of Arbitration.',
    'ICC has partnered with Jus Mundi to provide full public access to all publishable ICC International Court of Arbitration awards and related documents made as of 1 January 2019'
  ]
}
const features = [
  {
    title: 'More key arbitration content',
    image: '/images/block/efficency_icon.svg',
    description: 'This unique partnership means you will have access to more key arbitration content to level up your arbitration research.'
  },
  {
    title: 'More transparency',
    image: '/images/block/morecontent_icon.svg',
    description: 'You will appreciate the increase in transparency in arbitration!'
  },
  {
    title: 'More efficiency',
    image: '/images/block/transparency_icon.svg',
    description: 'Jus Mundi’s AI-powered technology efficiently delivers thorough legal research and due diligence with full confidence.'
  }
]
const news = {
  slogan: 'newsfeed',
  title: 'ICC International Court of Arbitration News & Links',
  link: {
    text: 'read all news',
    to: '/'
  },
  items: [
    { title: 'Corsair becomes the latest airline to pilot ICC AOKpass', link: '/' },
    { title: 'ICC warns EU vaccine export controls must be rolled back without delay', link: '/' },
    { title: 'Eduardo Silva Romero talks of advancing diversity, scope of ICC Institute as new Chair', link: '/' },
    { title: 'ICC/UNICEF: Funding shortfalls and supply chain challenges threaten equitable vaccine distribution', link: '/' },
    { title: 'ICC Trading Thoughts with Karima-Catherine Goundiam, founder of B2beeMatch', link: '/' }
  ]
}
const brands = {
  title: 'Trusted by the Best Arbitration Teams Worldwide',
  brands: [
    { name: 'budford', image: 'images/‌brands/budford.svg' },
    { name: 'curtis', image: 'images/‌brands/curtis.svg' },
    { name: 'denton', image: 'images/‌brands/denton.svg' },
    { name: 'dlapiper', image: 'images/‌brands/dla piper.svg' },
    { name: 'evershed', image: 'images/‌brands/evershed.svg' },
    { name: 'fcdo', image: 'images/‌brands/fcdo.svg' },
    { name: 'foley', image: 'images/‌brands/foley.svg' },
    { name: 'freshfields', image: 'images/‌brands/freshfields.svg' },
    { name: 'gibsondune', image: 'images/‌brands/gibson-dune.svg' },
    { name: 'mofa', image: 'images/‌brands/mofa.svg' },
    { name: 'shearman', image: 'images/‌brands/shearman.svg' },
    { name: 'threecrow', image: 'images/‌brands/threecrown.svg' }
  ]
}
</script>
