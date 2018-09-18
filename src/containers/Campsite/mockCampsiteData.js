export const currentWeatherMock = {
  coord: { lon: -105.19, lat: 39.65 },
  weather: [{ id: 800, main: 'Clear', description: 'clear sky', icon: '01n' }],
  base: 'stations',
  main: {
    temp: 55.92,
    pressure: 1020,
    humidity: 69,
    temp_min: 50.72,
    temp_max: 60.8
  },
  visibility: 16093,
  wind: { speed: 4.97, deg: 255.5 },
  clouds: { all: 1 },
  dt: 1536582960,
  sys: {
    type: 1,
    id: 602,
    message: 0.0155,
    country: 'US',
    sunrise: 1536583069,
    sunset: 1536628587
  },
  id: 420005679,
  name: 'Sheridan',
  cod: 200
};

export const tenHourWeatherMock = {
  response: {
    version: '0.1',
    termsofService: 'http://www.wunderground.com/weather/api/d/terms.html',
    features: { geolookup: 1, conditions: 1, hourly: 1, forecast10day: 1 }
  },
  location: {
    type: 'CITY',
    country: 'US',
    country_iso3166: 'US',
    country_name: 'USA',
    state: 'CO',
    city: 'Denver',
    tz_short: 'MDT',
    tz_long: 'America/Denver',
    lat: '39.68999863',
    lon: '-105.13999939',
    zip: '80228',
    magic: '1',
    wmo: '99999',
    l: '/q/zmw:80228.1.99999',
    requesturl: 'US/CO/Denver.html',
    wuiurl: 'https://www.wunderground.com/US/CO/Denver.html',
    nearby_weather_stations: {
      airport: {
        station: [
          {
            city: 'Broomfield',
            state: 'CO',
            country: 'US',
            icao: 'KBJC',
            lat: '39.90999985',
            lon: '-105.12000275'
          },
          {
            city: 'Denver Centennial',
            state: 'CO',
            country: 'US',
            icao: 'KAPA',
            lat: '39.56999969',
            lon: '-104.84999847'
          },
          {
            city: 'Aurora',
            state: 'CO',
            country: 'US',
            icao: 'KBKF',
            lat: '39.70000076',
            lon: '-104.75000000'
          },
          {
            city: 'Erie',
            state: 'CO',
            country: 'US',
            icao: 'KEIK',
            lat: '40.00999832',
            lon: '-105.05000305'
          }
        ]
      },
      pws: {
        station: [
          {
            neighborhood: 'Green Mountain 5972',
            city: 'Denver',
            state: 'CO',
            country: 'US',
            id: 'KCODENVE325',
            lat: 39.692314,
            lon: -105.142639,
            distance_km: 0,
            distance_mi: 0
          },
          {
            neighborhood: 'Beech Park Green Mountain',
            city: 'Denver',
            state: 'CO',
            country: 'US',
            id: 'KCODENVE446',
            lat: 39.687904,
            lon: -105.143372,
            distance_km: 0,
            distance_mi: 0
          },
          {
            neighborhood: '',
            city: 'Lakewood',
            state: 'CO',
            country: 'US',
            id: 'KCOLAKEW19',
            lat: 39.687763,
            lon: -105.135139,
            distance_km: 0,
            distance_mi: 0
          },
          {
            neighborhood: 'DJM-Green Mountain, LKWD, CO',
            city: 'Denver',
            state: 'CO',
            country: 'US',
            id: 'KCODENVE428',
            lat: 39.695068,
            lon: -105.137642,
            distance_km: 0,
            distance_mi: 0
          },
          {
            neighborhood: 'lakewood',
            city: 'Denver',
            state: 'CO',
            country: 'US',
            id: 'KCODENVE367',
            lat: 39.681778,
            lon: -105.133858,
            distance_km: 1,
            distance_mi: 0
          },
          {
            neighborhood: 'Hutchenson',
            city: 'Denver',
            state: 'CO',
            country: 'US',
            id: 'KCODENVE432',
            lat: 39.684708,
            lon: -105.150627,
            distance_km: 1,
            distance_mi: 0
          },
          {
            neighborhood: 'Green Mountain',
            city: 'Denver',
            state: 'CO',
            country: 'US',
            id: 'KCODENVE650',
            lat: 39.701702,
            lon: -105.144836,
            distance_km: 1,
            distance_mi: 0
          },
          {
            neighborhood: 'Green Mountain Village',
            city: 'Denver',
            state: 'CO',
            country: 'US',
            id: 'KCODENVE421',
            lat: 39.700127,
            lon: -105.129784,
            distance_km: 1,
            distance_mi: 0
          },
          {
            neighborhood: 'Green Mountain Estates',
            city: 'Lakewood',
            state: 'CO',
            country: 'US',
            id: 'KCOLAKEW51',
            lat: 39.701107,
            lon: -105.150124,
            distance_km: 1,
            distance_mi: 0
          },
          {
            neighborhood: 'Green Mountain Village 1',
            city: 'Denver',
            state: 'CO',
            country: 'US',
            id: 'KCODENVE551',
            lat: 39.703163,
            lon: -105.128189,
            distance_km: 1,
            distance_mi: 1
          },
          {
            neighborhood: 'Green Mountain Village',
            city: 'Denver',
            state: 'CO',
            country: 'US',
            id: 'KCODENVE430',
            lat: 39.703781,
            lon: -105.128807,
            distance_km: 1,
            distance_mi: 1
          },
          {
            neighborhood: 'Green Mountain',
            city: 'Lakewood',
            state: 'CO',
            country: 'US',
            id: 'KCODENVE36',
            lat: 39.672138,
            lon: -105.149742,
            distance_km: 2,
            distance_mi: 1
          },
          {
            neighborhood: 'Green Mountain Vistas',
            city: 'Lakewood',
            state: 'CO',
            country: 'US',
            id: 'KCOLAKEW32',
            lat: 39.710178,
            lon: -105.146347,
            distance_km: 2,
            distance_mi: 1
          },
          {
            neighborhood: 'Gennwood Heights',
            city: 'Denver',
            state: 'CO',
            country: 'US',
            id: 'KCODENVE651',
            lat: 39.69846,
            lon: -105.113327,
            distance_km: 2,
            distance_mi: 1
          },
          {
            neighborhood: 'Green Mountain Summit',
            city: 'Denver',
            state: 'CO',
            country: 'US',
            id: 'KCODENVE459',
            lat: 39.677643,
            lon: -105.165207,
            distance_km: 2,
            distance_mi: 1
          },
          {
            neighborhood: 'Carmody',
            city: 'Denver',
            state: 'CO',
            country: 'US',
            id: 'KCODENVE454',
            lat: 39.678627,
            lon: -105.111572,
            distance_km: 2,
            distance_mi: 1
          },
          {
            neighborhood: 'Green Mountain/Morrison',
            city: 'Morrison',
            state: 'CO',
            country: 'US',
            id: 'KCOMORRI6',
            lat: 39.670704,
            lon: -105.16256,
            distance_km: 2,
            distance_mi: 1
          },
          {
            neighborhood: 'Kendrick Lake',
            city: 'Denver',
            state: 'CO',
            country: 'US',
            id: 'KCODENVE517',
            lat: 39.686764,
            lon: -105.105743,
            distance_km: 2,
            distance_mi: 1
          },
          {
            neighborhood: 'Lakewood',
            city: 'Denver',
            state: 'CO',
            country: 'US',
            id: 'KCODENVE49',
            lat: 39.698856,
            lon: -105.107384,
            distance_km: 2,
            distance_mi: 1
          },
          {
            neighborhood: 'Glennon Heights',
            city: 'Denver',
            state: 'CO',
            country: 'US',
            id: 'KCODENVE655',
            lat: 39.706345,
            lon: -105.112556,
            distance_km: 2,
            distance_mi: 1
          },
          {
            neighborhood: 'Overlook at Bear Creek',
            city: 'Lakewood',
            state: 'CO',
            country: 'US',
            id: 'KCOLAKEW46',
            lat: 39.672474,
            lon: -105.113182,
            distance_km: 3,
            distance_mi: 1
          },
          {
            neighborhood: 'Six Avenue West',
            city: 'Golden',
            state: 'CO',
            country: 'US',
            id: 'KCOGOLDE223',
            lat: 39.713905,
            lon: -105.15773,
            distance_km: 3,
            distance_mi: 1
          },
          {
            neighborhood: '6th Ave W Estates',
            city: 'Golden',
            state: 'CO',
            country: 'US',
            id: 'KCOGOLDE47',
            lat: 39.715759,
            lon: -105.154388,
            distance_km: 3,
            distance_mi: 1
          },
          {
            neighborhood: 'Jeffs Lacrosse S84060 Solterra',
            city: 'Morrison',
            state: 'CO',
            country: 'US',
            id: 'KCOMORRI42',
            lat: 39.671936,
            lon: -105.173492,
            distance_km: 3,
            distance_mi: 2
          },
          {
            neighborhood: 'Bear Creek - Fox',
            city: 'Lakewood',
            state: 'CO',
            country: 'US',
            id: 'KCOLAKEW48',
            lat: 39.66235,
            lon: -105.119766,
            distance_km: 3,
            distance_mi: 2
          },
          {
            neighborhood: '6th Ave West',
            city: 'Golden',
            state: 'CO',
            country: 'US',
            id: 'KCOGOLDE109',
            lat: 39.721748,
            lon: -105.155739,
            distance_km: 3,
            distance_mi: 2
          },
          {
            neighborhood: 'Bear Creek Ranchettes',
            city: 'Lakewood',
            state: 'CO',
            country: 'US',
            id: 'KCOLAKEW65',
            lat: 39.658585,
            lon: -105.121513,
            distance_km: 3,
            distance_mi: 2
          },
          {
            neighborhood: '6th Ave. West',
            city: 'Golden',
            state: 'CO',
            country: 'US',
            id: 'KCOGOLDE82',
            lat: 39.722626,
            lon: -105.155022,
            distance_km: 3,
            distance_mi: 2
          },
          {
            neighborhood: 'Lakewood',
            city: 'Denver',
            state: 'CO',
            country: 'US',
            id: 'KCODENVE525',
            lat: 39.700123,
            lon: -105.096626,
            distance_km: 3,
            distance_mi: 2
          }
        ]
      }
    }
  },
  current_observation: {
    image: {
      url: 'http://icons.wxug.com/graphics/wu2/logo_130x80.png',
      title: 'Weather Underground',
      link: 'http://www.wunderground.com'
    },
    display_location: {
      full: 'Denver, CO',
      city: 'Denver',
      state: 'CO',
      state_name: 'Colorado',
      country: 'US',
      country_iso3166: 'US',
      zip: '80228',
      magic: '1',
      wmo: '99999',
      latitude: '39.68999863',
      longitude: '-105.13999939',
      elevation: '1795.0'
    },
    observation_location: {
      full: 'Broomfield, Colorado',
      city: 'Broomfield',
      state: 'Colorado',
      country: 'US',
      country_iso3166: 'US',
      latitude: '39.69',
      longitude: '-105.14',
      elevation: '5972 ft'
    },
    estimated: {},
    station_id: 'KCODENVE325',
    observation_time: 'Last Updated on September 10, 9:49 AM MDT',
    observation_time_rfc822: 'Mon, 10 Sep 2018 09:49:27 -0600',
    observation_epoch: '1536594567',
    local_time_rfc822: 'Mon, 10 Sep 2018 09:49:35 -0600',
    local_epoch: '1536594575',
    local_tz_short: 'MDT',
    local_tz_long: 'America/Denver',
    local_tz_offset: '-0600',
    weather: 'Partly Cloudy',
    temperature_string: '74.3 F (23.5 C)',
    temp_f: 74.3,
    temp_c: 23.5,
    relative_humidity: '38%',
    wind_string: 'From the East at 2 MPH Gusting to 2.0 MPH',
    wind_dir: 'East',
    wind_degrees: 90,
    wind_mph: 2,
    wind_gust_mph: '2.0',
    wind_kph: 3.2,
    wind_gust_kph: '3.2',
    pressure_mb: '1028',
    pressure_in: '30.36',
    pressure_trend: '0',
    dewpoint_string: '47 F (8 C)',
    dewpoint_f: 47,
    dewpoint_c: 8,
    heat_index_string: 'NA',
    heat_index_f: 'NA',
    heat_index_c: 'NA',
    windchill_string: 'NA',
    windchill_f: 'NA',
    windchill_c: 'NA',
    feelslike_string: '74.3 F (23.5 C)',
    feelslike_f: '74.3',
    feelslike_c: '23.5',
    visibility_mi: '50.0',
    visibility_km: '80.4',
    solarradiation: '--',
    UV: '3',
    precip_1hr_string: '0.00 in ( 0 mm)',
    precip_1hr_in: '0.00',
    precip_1hr_metric: ' 0',
    precip_today_string: '0.00 in (0 mm)',
    precip_today_in: '0.00',
    precip_today_metric: '0',
    icon: 'partlycloudy',
    icon_url: 'http://icons.wxug.com/i/c/k/partlycloudy.gif',
    forecast_url: 'http://www.wunderground.com/US/CO/Denver.html',
    history_url:
      'http://www.wunderground.com/weatherstation/WXDailyHistory.asp?ID=KCODENVE325',
    ob_url:
      'http://www.wunderground.com/cgi-bin/findweather/getForecast?query=39.692314,-105.142639',
    nowcast: ''
  }
};

export const tenDayWeatherMock = {
  response: {
    version: '0.1',
    termsofService: 'http://www.wunderground.com/weather/api/d/terms.html',
    features: { geolookup: 1, conditions: 1, hourly: 1, forecast10day: 1 }
  },
  location: {
    type: 'CITY',
    country: 'US',
    country_iso3166: 'US',
    country_name: 'USA',
    state: 'CO',
    city: 'Denver',
    tz_short: 'MDT',
    tz_long: 'America/Denver',
    lat: '39.68999863',
    lon: '-105.13999939',
    zip: '80228',
    magic: '1',
    wmo: '99999',
    l: '/q/zmw:80228.1.99999',
    requesturl: 'US/CO/Denver.html',
    wuiurl: 'https://www.wunderground.com/US/CO/Denver.html',
    nearby_weather_stations: {
      airport: {
        station: [
          {
            city: 'Broomfield',
            state: 'CO',
            country: 'US',
            icao: 'KBJC',
            lat: '39.90999985',
            lon: '-105.12000275'
          },
          {
            city: 'Denver Centennial',
            state: 'CO',
            country: 'US',
            icao: 'KAPA',
            lat: '39.56999969',
            lon: '-104.84999847'
          },
          {
            city: 'Aurora',
            state: 'CO',
            country: 'US',
            icao: 'KBKF',
            lat: '39.70000076',
            lon: '-104.75000000'
          },
          {
            city: 'Erie',
            state: 'CO',
            country: 'US',
            icao: 'KEIK',
            lat: '40.00999832',
            lon: '-105.05000305'
          }
        ]
      },
      pws: {
        station: [
          {
            neighborhood: 'Green Mountain 5972',
            city: 'Denver',
            state: 'CO',
            country: 'US',
            id: 'KCODENVE325',
            lat: 39.692314,
            lon: -105.142639,
            distance_km: 0,
            distance_mi: 0
          },
          {
            neighborhood: 'Beech Park Green Mountain',
            city: 'Denver',
            state: 'CO',
            country: 'US',
            id: 'KCODENVE446',
            lat: 39.687904,
            lon: -105.143372,
            distance_km: 0,
            distance_mi: 0
          },
          {
            neighborhood: '',
            city: 'Lakewood',
            state: 'CO',
            country: 'US',
            id: 'KCOLAKEW19',
            lat: 39.687763,
            lon: -105.135139,
            distance_km: 0,
            distance_mi: 0
          },
          {
            neighborhood: 'DJM-Green Mountain, LKWD, CO',
            city: 'Denver',
            state: 'CO',
            country: 'US',
            id: 'KCODENVE428',
            lat: 39.695068,
            lon: -105.137642,
            distance_km: 0,
            distance_mi: 0
          },
          {
            neighborhood: 'lakewood',
            city: 'Denver',
            state: 'CO',
            country: 'US',
            id: 'KCODENVE367',
            lat: 39.681778,
            lon: -105.133858,
            distance_km: 1,
            distance_mi: 0
          },
          {
            neighborhood: 'Hutchenson',
            city: 'Denver',
            state: 'CO',
            country: 'US',
            id: 'KCODENVE432',
            lat: 39.684708,
            lon: -105.150627,
            distance_km: 1,
            distance_mi: 0
          },
          {
            neighborhood: 'Green Mountain',
            city: 'Denver',
            state: 'CO',
            country: 'US',
            id: 'KCODENVE650',
            lat: 39.701702,
            lon: -105.144836,
            distance_km: 1,
            distance_mi: 0
          },
          {
            neighborhood: 'Green Mountain Village',
            city: 'Denver',
            state: 'CO',
            country: 'US',
            id: 'KCODENVE421',
            lat: 39.700127,
            lon: -105.129784,
            distance_km: 1,
            distance_mi: 0
          },
          {
            neighborhood: 'Green Mountain Estates',
            city: 'Lakewood',
            state: 'CO',
            country: 'US',
            id: 'KCOLAKEW51',
            lat: 39.701107,
            lon: -105.150124,
            distance_km: 1,
            distance_mi: 0
          },
          {
            neighborhood: 'Green Mountain Village 1',
            city: 'Denver',
            state: 'CO',
            country: 'US',
            id: 'KCODENVE551',
            lat: 39.703163,
            lon: -105.128189,
            distance_km: 1,
            distance_mi: 1
          },
          {
            neighborhood: 'Green Mountain Village',
            city: 'Denver',
            state: 'CO',
            country: 'US',
            id: 'KCODENVE430',
            lat: 39.703781,
            lon: -105.128807,
            distance_km: 1,
            distance_mi: 1
          },
          {
            neighborhood: 'Green Mountain',
            city: 'Lakewood',
            state: 'CO',
            country: 'US',
            id: 'KCODENVE36',
            lat: 39.672138,
            lon: -105.149742,
            distance_km: 2,
            distance_mi: 1
          },
          {
            neighborhood: 'Green Mountain Vistas',
            city: 'Lakewood',
            state: 'CO',
            country: 'US',
            id: 'KCOLAKEW32',
            lat: 39.710178,
            lon: -105.146347,
            distance_km: 2,
            distance_mi: 1
          },
          {
            neighborhood: 'Gennwood Heights',
            city: 'Denver',
            state: 'CO',
            country: 'US',
            id: 'KCODENVE651',
            lat: 39.69846,
            lon: -105.113327,
            distance_km: 2,
            distance_mi: 1
          },
          {
            neighborhood: 'Green Mountain Summit',
            city: 'Denver',
            state: 'CO',
            country: 'US',
            id: 'KCODENVE459',
            lat: 39.677643,
            lon: -105.165207,
            distance_km: 2,
            distance_mi: 1
          },
          {
            neighborhood: 'Carmody',
            city: 'Denver',
            state: 'CO',
            country: 'US',
            id: 'KCODENVE454',
            lat: 39.678627,
            lon: -105.111572,
            distance_km: 2,
            distance_mi: 1
          },
          {
            neighborhood: 'Green Mountain/Morrison',
            city: 'Morrison',
            state: 'CO',
            country: 'US',
            id: 'KCOMORRI6',
            lat: 39.670704,
            lon: -105.16256,
            distance_km: 2,
            distance_mi: 1
          },
          {
            neighborhood: 'Kendrick Lake',
            city: 'Denver',
            state: 'CO',
            country: 'US',
            id: 'KCODENVE517',
            lat: 39.686764,
            lon: -105.105743,
            distance_km: 2,
            distance_mi: 1
          },
          {
            neighborhood: 'Lakewood',
            city: 'Denver',
            state: 'CO',
            country: 'US',
            id: 'KCODENVE49',
            lat: 39.698856,
            lon: -105.107384,
            distance_km: 2,
            distance_mi: 1
          },
          {
            neighborhood: 'Glennon Heights',
            city: 'Denver',
            state: 'CO',
            country: 'US',
            id: 'KCODENVE655',
            lat: 39.706345,
            lon: -105.112556,
            distance_km: 2,
            distance_mi: 1
          },
          {
            neighborhood: 'Overlook at Bear Creek',
            city: 'Lakewood',
            state: 'CO',
            country: 'US',
            id: 'KCOLAKEW46',
            lat: 39.672474,
            lon: -105.113182,
            distance_km: 3,
            distance_mi: 1
          },
          {
            neighborhood: 'Six Avenue West',
            city: 'Golden',
            state: 'CO',
            country: 'US',
            id: 'KCOGOLDE223',
            lat: 39.713905,
            lon: -105.15773,
            distance_km: 3,
            distance_mi: 1
          },
          {
            neighborhood: '6th Ave W Estates',
            city: 'Golden',
            state: 'CO',
            country: 'US',
            id: 'KCOGOLDE47',
            lat: 39.715759,
            lon: -105.154388,
            distance_km: 3,
            distance_mi: 1
          },
          {
            neighborhood: 'Jeffs Lacrosse S84060 Solterra',
            city: 'Morrison',
            state: 'CO',
            country: 'US',
            id: 'KCOMORRI42',
            lat: 39.671936,
            lon: -105.173492,
            distance_km: 3,
            distance_mi: 2
          },
          {
            neighborhood: 'Bear Creek - Fox',
            city: 'Lakewood',
            state: 'CO',
            country: 'US',
            id: 'KCOLAKEW48',
            lat: 39.66235,
            lon: -105.119766,
            distance_km: 3,
            distance_mi: 2
          },
          {
            neighborhood: '6th Ave West',
            city: 'Golden',
            state: 'CO',
            country: 'US',
            id: 'KCOGOLDE109',
            lat: 39.721748,
            lon: -105.155739,
            distance_km: 3,
            distance_mi: 2
          },
          {
            neighborhood: 'Bear Creek Ranchettes',
            city: 'Lakewood',
            state: 'CO',
            country: 'US',
            id: 'KCOLAKEW65',
            lat: 39.658585,
            lon: -105.121513,
            distance_km: 3,
            distance_mi: 2
          },
          {
            neighborhood: '6th Ave. West',
            city: 'Golden',
            state: 'CO',
            country: 'US',
            id: 'KCOGOLDE82',
            lat: 39.722626,
            lon: -105.155022,
            distance_km: 3,
            distance_mi: 2
          },
          {
            neighborhood: 'Lakewood',
            city: 'Denver',
            state: 'CO',
            country: 'US',
            id: 'KCODENVE525',
            lat: 39.700123,
            lon: -105.096626,
            distance_km: 3,
            distance_mi: 2
          }
        ]
      }
    }
  }
};

export const facilityIDMock = '148541';

export const contractIDMock = 'NRSO';
