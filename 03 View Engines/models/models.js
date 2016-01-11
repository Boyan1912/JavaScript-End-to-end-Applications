module.exports = {
  nav: [
      {
          url: '/phones',
          title: 'Smart Phones'
      },
      {
          url: '/tablets',
          title: 'Tablets'
      },
      {
          url: '/wearables',
          title: 'Wearables'
      }
  ],
    phones: [
        {
            model: 'some phone',
            price: Math.floor((Math.random() * 100) + 1) + ' $'
        },
        {
            model: 'some phone 2',
            price: Math.floor((Math.random() * 100) + 1) + ' $'
        },
        {
            model: 'some phone 3',
            price: Math.floor((Math.random() * 100) + 1) + ' $'
        }
    ],
    tablets: [
        {
            model: 'some tablet',
            price: Math.floor((Math.random() * 100) + 1) + ' $'
        },
        {
            model: 'some tablet 2',
            price: Math.floor((Math.random() * 100) + 1) + ' $'
        },
        {
            model: 'some tablet 3',
            price: Math.floor((Math.random() * 100) + 1) + ' $'
        }
    ],
    wearables: [
        {
            model: 'something',
            price: Math.floor((Math.random() * 100) + 1) + ' $'
        },
        {
            model: 'something 2',
            price: Math.floor((Math.random() * 100) + 1) + ' $'
        },
        {
            model: 'something 3',
            price: Math.floor((Math.random() * 100) + 1) + ' $'
        }
    ]
};

