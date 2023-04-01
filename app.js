const app = new Vue({
  el: '#app',
  data: {
    title: 'Kevin Schnaubelt\nSoftware Developer',
    projects: [
      {
        id: 1,
        title: 'Linked Merch',
        description: 'Buy something, customize a QR code for it, then design it\'s path! (In progress)',
        image: 'linkmerchsplash.png',
        link: 'https://github.com/Kevin-Schnaubelt-Jr/Linked-Merch'
      },
      {
        id: 2,
        title: 'Trivia Blaster!',
        description: 'Play a 10 round game of trivia using the Open Trivia Database API! ',
        image: 'trivia blaster.png',
        link: 'https://github.com/Kevin-Schnaubelt-Jr/Trivia-Blaster'
      },
      {
        id: 3,
        title: 'TCL Financial Aid Calculator',
        description: 'Created for my college\'s financial aid office. Calculates tuition assistance and grants.',
        image: 'FinancialAidCalc port.png',
        link: 'https://github.com/Kevin-Schnaubelt-Jr/TCL-Financial-Aid-Calculator'
      }
    ]
  },
  mounted() {
    // function startGreenSockAnimation() {
    //   gsap.from('h1', { duration: 1, y: -50, opacity: 0, ease: 'back.out(1.7)' });
    //   gsap.from('.project', { duration: 1, y: 50, opacity: 0, stagger: 0.3, ease: 'back.out(1.7)' });
    // }
  }
});
