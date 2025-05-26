import { generateRandomId } from '../utils';

const destinations = [
  {
    'id': generateRandomId(),
    'description': `
      Cras aliquet varius magna, non porta ligula feugiat eget.
      Fusce tristique felis at fermentum pharetra.
      Aliquam id orci ut lectus varius viverra.
      Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.
    `,
    'name': 'Barcelona',
    'pictures': [
      {
        'src': 'https://ih1.redbubble.net/image.5407575100.6953/flat,750x,075,f-pad,750x1000,f8f8f8.webp',
        'description': 'Barcelona 1'
      },
      {
        'src': 'https://ih1.redbubble.net/image.5407575100.6953/flat,750x,075,f-pad,750x1000,f8f8f8.webp',
        'description': 'Barcelona 2'
      },
      {
        'src': 'https://ih1.redbubble.net/image.5407575100.6953/flat,750x,075,f-pad,750x1000,f8f8f8.webp',
        'description': 'Barcelona 3'
      }
    ]
  },
  {
    'id': generateRandomId(),
    'description': `
      Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.
      Sed sed nisi sed augue convallis suscipit in sed felis.
      Aliquam erat volutpat.
    `,
    'name': 'Tokyo',
    'pictures': [
      {
        'src': 'https://ih1.redbubble.net/image.5407575100.6953/flat,750x,075,f-pad,750x1000,f8f8f8.webp',
        'description': 'Tokyo 1'
      }
    ]
  },
  {
    'id': generateRandomId(),
    'description': `
      Nunc fermentum tortor ac porta dapibus.
      In rutrum ac purus sit amet tempus.
    `,
    'name': 'New York',
    'pictures': [
      {
        'src': 'https://ih1.redbubble.net/image.5407575100.6953/flat,750x,075,f-pad,750x1000,f8f8f8.webp',
        'description': 'New York 1'
      },
      {
        'src': 'https://ih1.redbubble.net/image.5407575100.6953/flat,750x,075,f-pad,750x1000,f8f8f8.webp',
        'description': 'New York 2'
      }
    ]
  },
  {
    'id': generateRandomId(),
    'description': `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Cras aliquet varius magna, non porta ligula feugiat eget.
    `,
    'name': 'Sydney',
    'pictures': []
  },
  {
    'id': generateRandomId(),
    'description': `
      Fusce tristique felis at fermentum pharetra.
    `,
    'name': 'Paris',
    'pictures': [
      {
        'src': 'https://ih1.redbubble.net/image.5407575100.6953/flat,750x,075,f-pad,750x1000,f8f8f8.webp',
        'description': 'Paris 1'
      },
      {
        'src': 'https://ih1.redbubble.net/image.5407575100.6953/flat,750x,075,f-pad,750x1000,f8f8f8.webp',
        'description': 'Paris 2'
      },
      {
        'src': 'https://ih1.redbubble.net/image.5407575100.6953/flat,750x,075,f-pad,750x1000,f8f8f8.webp',
        'description': 'Paris 3'
      }
    ]
  },
  {
    'id': generateRandomId(),
    'description': `
      Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.
      Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.
    `,
    'name': 'Rome',
    'pictures': [
      {
        'src': 'https://ih1.redbubble.net/image.5407575100.6953/flat,750x,075,f-pad,750x1000,f8f8f8.webp',
        'description': 'Rome 1'
      }
    ]
  },
  {
    'id': generateRandomId(),
    'description': `
      Aliquam erat volutpat.
      Nunc fermentum tortor ac porta dapibus.
    `,
    'name': 'London',
    'pictures': [
      {
        'src': 'https://ih1.redbubble.net/image.5407575100.6953/flat,750x,075,f-pad,750x1000,f8f8f8.webp',
        'description': 'London 1'
      },
      {
        'src': 'https://ih1.redbubble.net/image.5407575100.6953/flat,750x,075,f-pad,750x1000,f8f8f8.webp',
        'description': 'London 2'
      }
    ]
  },
  {
    'id': generateRandomId(),
    'description': `
      Aliquam id orci ut lectus varius viverra.
      Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.
      Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.
      Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.
      Sed sed nisi sed augue convallis suscipit in sed felis.
    `,
    'name': 'Berlin',
    'pictures': [
      {
        'src': 'https://ih1.redbubble.net/image.5407575100.6953/flat,750x,075,f-pad,750x1000,f8f8f8.webp',
        'description': 'Berlin 1'
      }
    ]
  },
  {
    'id': generateRandomId(),
    'description': `
      Aliquam erat volutpat.
    `,
    'name': 'Amsterdam',
    'pictures': [
      {
        'src': 'https://ih1.redbubble.net/image.5407575100.6953/flat,750x,075,f-pad,750x1000,f8f8f8.webp',
        'description': 'Amsterdam 1'
      },
      {
        'src': 'https://ih1.redbubble.net/image.5407575100.6953/flat,750x,075,f-pad,750x1000,f8f8f8.webp',
        'description': 'Amsterdam 2'
      },
      {
        'src': 'https://ih1.redbubble.net/image.5407575100.6953/flat,750x,075,f-pad,750x1000,f8f8f8.webp',
        'description': 'Amsterdam 3'
      },
      {
        'src': 'https://ih1.redbubble.net/image.5407575100.6953/flat,750x,075,f-pad,750x1000,f8f8f8.webp',
        'description': 'Amsterdam 4'
      }
    ]
  }
];

const offersByType = [
  {
    'type': 'flight',
    'offers': [
      { 'id': generateRandomId(), 'title': 'Priority Boarding', 'price': 10 },
      { 'id': generateRandomId(), 'title': 'Extra Luggage', 'price': 25 },
      { 'id': generateRandomId(), 'title': 'Meal Service', 'price': 15 }
    ]
  },
  {
    'type': 'train',
    'offers': [
      { 'id': generateRandomId(), 'title': 'Window Seat', 'price': 15 },
      { 'id': generateRandomId(), 'title': 'Extra Legroom', 'price': 20 },
      { 'id': generateRandomId(), 'title': 'Quiet Zone', 'price': 10 }
    ]
  },
  {
    'type': 'bus',
    'offers': [
      { 'id': generateRandomId(), 'title': 'Food Package', 'price': 30 },
      { 'id': generateRandomId(), 'title': 'Wi-Fi', 'price': 5 },
      { 'id': generateRandomId(), 'title': 'Power Outlet', 'price': 3 }
    ]
  },
  {
    'type': 'sightseeing',
    'offers': [
      { 'id': generateRandomId(), 'title': 'Guide', 'price': 20 },
      { 'id': generateRandomId(), 'title': 'Skip the Line', 'price': 40 },
      { 'id': generateRandomId(), 'title': 'VIP Access', 'price': 50 }
    ]
  },
  {
    'type': 'taxi',
    'offers': [
      { 'id': generateRandomId(), 'title': 'VIP Transfer', 'price': 50 },
      { 'id': generateRandomId(), 'title': 'Pet-Friendly', 'price': 15 },
      { 'id': generateRandomId(), 'title': 'Airport Shuttle', 'price': 20 }
    ]
  },
  {
    'type': 'ship',
    'offers': [
      { 'id': generateRandomId(), 'title': 'Ocean View', 'price': 30 },
      { 'id': generateRandomId(), 'title': 'Premium Cabin', 'price': 100 },
      { 'id': generateRandomId(), 'title': 'All-Inclusive', 'price': 150 }
    ]
  },
  {
    'type': 'drive',
    'offers': [
      { 'id': generateRandomId(), 'title': 'Luxury Car', 'price': 75 },
      { 'id': generateRandomId(), 'title': 'GPS Rental', 'price': 10 },
      { 'id': generateRandomId(), 'title': 'Child Seat', 'price': 5 }
    ]
  },
  {
    'type': 'check-in',
    'offers': [
      { 'id': generateRandomId(), 'title': 'Express Check-in', 'price': 5 },
      { 'id': generateRandomId(), 'title': 'Priority Check-in', 'price': 15 },
      { 'id': generateRandomId(), 'title': 'Seat Selection', 'price': 10 }
    ]
  },
  {
    'type': 'restaurant',
    'offers': [
      { 'id': generateRandomId(), 'title': 'Wine Pairing', 'price': 30 },
      { 'id': generateRandomId(), 'title': 'Tasting Menu', 'price': 50 },
      { 'id': generateRandomId(), 'title': 'Chef’s Special', 'price': 40 }
    ]
  }
];

const mockRoutePoints = [
  {
    'id': generateRandomId(),
    'base_price': 1500,
    'date_from': '2025-02-20T10:30:00.000Z',
    'date_to': '2025-02-20T11:30:00.000Z',
    'destination': destinations[0].id,
    'is_favorite': true,
    'offers': [offersByType[0].offers[0].id],
    'type': 'flight'
  },
  {
    'id': generateRandomId(),
    'base_price': 350,
    'date_from': '2025-02-21T08:00:00.000Z',
    'date_to': '2025-02-21T10:00:00.000Z',
    'destination': destinations[1].id,
    'is_favorite': false,
    'offers': [offersByType[1].offers[1].id, offersByType[1].offers[2].id],
    'type': 'train'
  },
  {
    'id': generateRandomId(),
    'base_price': 80,
    'date_from': '2025-03-08T07:00:00.000Z',
    'date_to': '2025-03-08T09:00:00.000Z',
    'destination': destinations[2].id,
    'is_favorite': false,
    'offers': [offersByType[2].offers[0].id],
    'type': 'bus'
  },
  {
    'id': generateRandomId(),
    'base_price': 750,
    'date_from': '2025-03-08T09:00:00.000Z',
    'date_to': '2025-03-08T15:00:00.000Z',
    'destination': destinations[3].id,
    'is_favorite': true,
    'offers': [offersByType[3].offers[0].id, offersByType[3].offers[2].id],
    'type': 'sightseeing'
  },
  {
    'id': generateRandomId(),
    'base_price': 40,
    'date_from': '2025-03-24T11:00:00.000Z',
    'date_to': '2025-03-24T12:30:00.000Z',
    'destination': destinations[4].id,
    'is_favorite': false,
    'offers': [offersByType[4].offers[0].id, offersByType[4].offers[1].id, offersByType[4].offers[2].id],
    'type': 'taxi'
  },
  {
    'id': generateRandomId(),
    'base_price': 600,
    'date_from': '2025-03-26T15:00:00.000Z',
    'date_to': '2025-03-26T16:30:00.000Z',
    'destination': destinations[5].id,
    'is_favorite': true,
    'offers': [offersByType[5].offers[2].id],
    'type': 'ship'
  },
  {
    'id': generateRandomId(),
    'base_price': 350,
    'date_from': '2025-03-28T12:00:00.000Z',
    'date_to': '2025-03-28T13:30:00.000Z',
    'destination': destinations[6].id,
    'is_favorite': false,
    'offers': [offersByType[6].offers[2].id],
    'type': 'drive'
  },
  {
    'id': generateRandomId(),
    'base_price': 200,
    'date_from': '2025-04-01T09:00:00.000Z',
    'date_to': '2025-04-01T10:30:00.000Z',
    'destination': destinations[7].id,
    'is_favorite': true,
    'offers': [offersByType[7].offers[0].id, offersByType[7].offers[1].id],
    'type': 'check-in'
  },
  {
    'id': generateRandomId(),
    'base_price': 500,
    'date_from': '2025-05-02T18:00:00.000Z',
    'date_to': '2025-05-02T18:30:00.000Z',
    'destination': destinations[8].id,
    'is_favorite': true,
    'offers': [offersByType[8].offers[1].id, offersByType[8].offers[2].id],
    'type': 'restaurant'
  },
  {
    'id': generateRandomId(),
    'base_price': 0,
    'date_from': null,
    'date_to': null,
    'destination': '',
    'is_favorite': false,
    'offers': [],
    'type': ''
  }
];

export { mockRoutePoints, offersByType, destinations };
