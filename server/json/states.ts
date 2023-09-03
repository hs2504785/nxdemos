const states = [
  {
    name: 'Andaman and Nicobar Islands',
    isoCode: 'AN',
    countryCode: 'IN',
    latitude: '11.74008670',
    longitude: '92.65864010',
  },
  {
    name: 'Andhra Pradesh',
    isoCode: 'AP',
    countryCode: 'IN',
    latitude: '15.91289980',
    longitude: '79.73998750',
  },
  {
    name: 'Arunachal Pradesh',
    isoCode: 'AR',
    countryCode: 'IN',
    latitude: '28.21799940',
    longitude: '94.72775280',
  },
  {
    name: 'Assam',
    isoCode: 'AS',
    countryCode: 'IN',
    latitude: '26.20060430',
    longitude: '92.93757390',
  },
  {
    name: 'Bihar',
    isoCode: 'BR',
    countryCode: 'IN',
    latitude: '25.09607420',
    longitude: '85.31311940',
  },
  {
    name: 'Chandigarh',
    isoCode: 'CH',
    countryCode: 'IN',
    latitude: '30.73331480',
    longitude: '76.77941790',
  },
  {
    name: 'Chhattisgarh',
    isoCode: 'CT',
    countryCode: 'IN',
    latitude: '21.27865670',
    longitude: '81.86614420',
  },
  {
    name: 'Dadra and Nagar Haveli and Daman and Diu',
    isoCode: 'DH',
    countryCode: 'IN',
    latitude: '20.39737360',
    longitude: '72.83279910',
  },
  {
    name: 'Delhi',
    isoCode: 'DL',
    countryCode: 'IN',
    latitude: '28.70405920',
    longitude: '77.10249020',
  },
  {
    name: 'Goa',
    isoCode: 'GA',
    countryCode: 'IN',
    latitude: '15.29932650',
    longitude: '74.12399600',
  },
  {
    name: 'Gujarat',
    isoCode: 'GJ',
    countryCode: 'IN',
    latitude: '22.25865200',
    longitude: '71.19238050',
  },
  {
    name: 'Haryana',
    isoCode: 'HR',
    countryCode: 'IN',
    latitude: '29.05877570',
    longitude: '76.08560100',
  },
  {
    name: 'Himachal Pradesh',
    isoCode: 'HP',
    countryCode: 'IN',
    latitude: '31.10482940',
    longitude: '77.17339010',
  },
  {
    name: 'Jammu and Kashmir',
    isoCode: 'JK',
    countryCode: 'IN',
    latitude: '33.27783900',
    longitude: '75.34121790',
  },
  {
    name: 'Jharkhand',
    isoCode: 'JH',
    countryCode: 'IN',
    latitude: '23.61018080',
    longitude: '85.27993540',
  },
  {
    name: 'Karnataka',
    isoCode: 'KA',
    countryCode: 'IN',
    latitude: '15.31727750',
    longitude: '75.71388840',
  },
  {
    name: 'Kerala',
    isoCode: 'KL',
    countryCode: 'IN',
    latitude: '10.85051590',
    longitude: '76.27108330',
  },
  {
    name: 'Ladakh',
    isoCode: 'LA',
    countryCode: 'IN',
    latitude: '34.22684750',
    longitude: '77.56194190',
  },
  {
    name: 'Lakshadweep',
    isoCode: 'LD',
    countryCode: 'IN',
    latitude: '10.32802650',
    longitude: '72.78463360',
  },
  {
    name: 'Madhya Pradesh',
    isoCode: 'MP',
    countryCode: 'IN',
    latitude: '22.97342290',
    longitude: '78.65689420',
  },
  {
    name: 'Maharashtra',
    isoCode: 'MH',
    countryCode: 'IN',
    latitude: '19.75147980',
    longitude: '75.71388840',
  },
  {
    name: 'Manipur',
    isoCode: 'MN',
    countryCode: 'IN',
    latitude: '24.66371730',
    longitude: '93.90626880',
  },
  {
    name: 'Meghalaya',
    isoCode: 'ML',
    countryCode: 'IN',
    latitude: '25.46703080',
    longitude: '91.36621600',
  },
  {
    name: 'Mizoram',
    isoCode: 'MZ',
    countryCode: 'IN',
    latitude: '23.16454300',
    longitude: '92.93757390',
  },
  {
    name: 'Nagaland',
    isoCode: 'NL',
    countryCode: 'IN',
    latitude: '26.15843540',
    longitude: '94.56244260',
  },
  {
    name: 'Odisha',
    isoCode: 'OR',
    countryCode: 'IN',
    latitude: '20.95166580',
    longitude: '85.09852360',
  },
  {
    name: 'Puducherry',
    isoCode: 'PY',
    countryCode: 'IN',
    latitude: '11.94159150',
    longitude: '79.80831330',
  },
  {
    name: 'Punjab',
    isoCode: 'PB',
    countryCode: 'IN',
    latitude: '31.14713050',
    longitude: '75.34121790',
  },
  {
    name: 'Rajasthan',
    isoCode: 'RJ',
    countryCode: 'IN',
    latitude: '27.02380360',
    longitude: '74.21793260',
  },
  {
    name: 'Sikkim',
    isoCode: 'SK',
    countryCode: 'IN',
    latitude: '27.53297180',
    longitude: '88.51221780',
  },
  {
    name: 'Tamil Nadu',
    isoCode: 'TN',
    countryCode: 'IN',
    latitude: '11.12712250',
    longitude: '78.65689420',
  },
  {
    name: 'Telangana',
    isoCode: 'TG',
    countryCode: 'IN',
    latitude: '18.11243720',
    longitude: '79.01929970',
  },
  {
    name: 'Tripura',
    isoCode: 'TR',
    countryCode: 'IN',
    latitude: '23.94084820',
    longitude: '91.98815270',
  },
  {
    name: 'Uttar Pradesh',
    isoCode: 'UP',
    countryCode: 'IN',
    latitude: '26.84670880',
    longitude: '80.94615920',
  },
  {
    name: 'Uttarakhand',
    isoCode: 'UT',
    countryCode: 'IN',
    latitude: '30.06675300',
    longitude: '79.01929970',
  },
  {
    name: 'West Bengal',
    isoCode: 'WB',
    countryCode: 'IN',
    latitude: '22.98675690',
    longitude: '87.85497550',
  },
];

module.exports = states;
