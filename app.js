const app = new Vue({
  el: '#app',
  data: {
    title: 'Kevin Schnaubelt',
    projects: [
      {
        id: 1,
        title: 'Project 1',
        description: 'Project 1 description goes here...',
        image: 'kingoftown.PNG'
      },
      {
        id: 2,
        title: 'Project 2',
        description: 'Project 2 description goes here...',
        image: 'jonathan_holmes.jpg'
      },
      {
        id: 3,
        title: 'Project 3',
        description: 'Project 3 description goes here...',
        image: 'clonewars.jpg'
      }
    ]
  },
  mounted() {
    gsap.from('h1', { duration: 1, y: -50, opacity: 0, ease: 'back.out(1.7)' });
    gsap.from('.project', { duration: 1, y: 50, opacity: 0, stagger: 0.3, ease: 'back.out(1.7)' });
  }
});
