export const currentWeatherMock = {
  coord: {
    lon: -104.83,
    lat: 39.63
  },
  weather: [
    {
      id: 800,
      main: 'Clear',
      description: 'clear sky',
      icon: '01d'
    }
  ],
  base: 'stations',
  main: {
    temp: 79.97,
    pressure: 1016,
    humidity: 29,
    temp_min: 78.8,
    temp_max: 82.94
  },
  visibility: 16093,
  wind: {
    speed: 10.29,
    deg: 40,
    gust: 7.2
  },
  clouds: {
    all: 1
  },
  dt: 1537378500,
  sys: {
    type: 1,
    id: 602,
    message: 0.0038,
    country: 'US',
    sunrise: 1537361095,
    sunset: 1537405197
  },
  id: 7729501,
  name: 'Dove Valley',
  cod: 200
};

export const cleanLocationImage = () => {
  return mockImage;
};

export const tenHourWeatherMock = {
  "response": {
    "version": "0.1",
    "termsofService": "http://www.wunderground.com/weather/api/d/terms.html",
    "features": {
      "geolookup": 1,
      "conditions": 1,
      "hourly": 1,
      "forecast10day": 1
    }
  },
  "location": {
    "type": "CITY",
    "country": "US",
    "country_iso3166": "US",
    "country_name": "USA",
    "state": "CO",
    "city": "Aurora",
    "tz_short": "MDT",
    "tz_long": "America/Denver",
    "lat": "39.620000",
    "lon": "-104.830000",
    "zip": "80015",
    "magic": "1",
    "wmo": "99999",
    "l": "/q/zmw:80015.1.99999",
    "requesturl": "US/CO/Aurora.html",
    "wuiurl": "https://www.wunderground.com/US/CO/Aurora.html",
    "nearby_weather_stations": {
      "airport": {
        "station": [
          {
            "city": "Denver Centennial",
            "state": "CO",
            "country": "US",
            "icao": "KAPA",
            "lat": "39.56999969",
            "lon": "-104.84999847"
          },
          {
            "city": "Aurora",
            "state": "CO",
            "country": "US",
            "icao": "KBKF",
            "lat": "39.70000076",
            "lon": "-104.75000000"
          },
          {
            "city": "Denver",
            "state": "CO",
            "country": "US",
            "icao": "KDEN",
            "lat": "39.86000061",
            "lon": "-104.66999817"
          },
          {
            "city": "Denver",
            "state": "CO",
            "country": "US",
            "icao": "KFTG",
            "lat": "39.79000092",
            "lon": "-104.54000092"
          }
        ]
      },
      "pws": {
        "station": [
          {
            "neighborhood": "Woodgate",
            "city": "Aurora",
            "state": "CO",
            "country": "US",
            "id": "KCOAUROR225",
            "lat": 39.626328,
            "lon": -104.813309,
            "distance_km": 1,
            "distance_mi": 0
          },
          {
            "neighborhood": "The Glen at Piney Creek",
            "city": "Aurora",
            "state": "CO",
            "country": "US",
            "id": "KCOAUROR264",
            "lat": 39.613731,
            "lon": -104.808937,
            "distance_km": 1,
            "distance_mi": 1
          },
          {
            "neighborhood": "Shenandoah on Smoky Hill",
            "city": "Aurora",
            "state": "CO",
            "country": "US",
            "id": "KCOAUROR104",
            "lat": 39.62772,
            "lon": -104.808403,
            "distance_km": 2,
            "distance_mi": 1
          },
          {
            "neighborhood": "Pheasant Run",
            "city": "Aurora",
            "state": "CO",
            "country": "US",
            "id": "KCOAUROR279",
            "lat": 39.629711,
            "lon": -104.799004,
            "distance_km": 2,
            "distance_mi": 1
          },
          {
            "neighborhood": "Piney Creek",
            "city": "Centennial",
            "state": "CO",
            "country": "US",
            "id": "KCOCENTE59",
            "lat": 39.617825,
            "lon": -104.79493,
            "distance_km": 3,
            "distance_mi": 1
          },
          {
            "neighborhood": "backyard",
            "city": "Aurora",
            "state": "CO",
            "country": "US",
            "id": "KCOAUROR189",
            "lat": 39.617485,
            "lon": -104.794411,
            "distance_km": 3,
            "distance_mi": 1
          },
          {
            "neighborhood": "TigerDenWX",
            "city": "Aurora",
            "state": "CO",
            "country": "US",
            "id": "KCOAUROR39",
            "lat": 39.640335,
            "lon": -104.786819,
            "distance_km": 4,
            "distance_mi": 2
          },
          {
            "neighborhood": "Highlands at Piney Creek",
            "city": "Aurora",
            "state": "CO",
            "country": "US",
            "id": "KCOAUROR188",
            "lat": 39.614929,
            "lon": -104.77964,
            "distance_km": 4,
            "distance_mi": 2
          },
          {
            "neighborhood": "Ace Weather @ Chambers & Dartmouth",
            "city": "Aurora",
            "state": "CO",
            "country": "US",
            "id": "KCOAUROR47",
            "lat": 39.660461,
            "lon": -104.809952,
            "distance_km": 4,
            "distance_mi": 2
          },
          {
            "neighborhood": "Summer Valley",
            "city": "Aurora",
            "state": "CO",
            "country": "US",
            "id": "KCOAUROR259",
            "lat": 39.65287,
            "lon": -104.791153,
            "distance_km": 4,
            "distance_mi": 2
          },
          {
            "neighborhood": "The Farm",
            "city": "Aurora",
            "state": "CO",
            "country": "US",
            "id": "KCOAUROR278",
            "lat": 39.596062,
            "lon": -104.775948,
            "distance_km": 5,
            "distance_mi": 3
          },
          {
            "neighborhood": "Vickrey",
            "city": "Aurora",
            "state": "CO",
            "country": "US",
            "id": "KCOAUROR288",
            "lat": 39.627312,
            "lon": -104.767113,
            "distance_km": 5,
            "distance_mi": 3
          },
          {
            "neighborhood": "FLAKELABS",
            "city": "Aurora",
            "state": "CO",
            "country": "US",
            "id": "KCOAUROR166",
            "lat": 39.617828,
            "lon": -104.764313,
            "distance_km": 5,
            "distance_mi": 3
          },
          {
            "neighborhood": "Carriage Place",
            "city": "Aurora",
            "state": "CO",
            "country": "US",
            "id": "KCOAUROR240",
            "lat": 39.64629,
            "lon": -104.773697,
            "distance_km": 5,
            "distance_mi": 3
          },
          {
            "neighborhood": "Piney Creek Ranches West",
            "city": "Aurora",
            "state": "CO",
            "country": "US",
            "id": "KCOAUROR154",
            "lat": 39.601154,
            "lon": -104.768623,
            "distance_km": 5,
            "distance_mi": 3
          },
          {
            "neighborhood": "Prides Crossing",
            "city": "Aurora",
            "state": "CO",
            "country": "US",
            "id": "KCOAUROR292",
            "lat": 39.630203,
            "lon": -104.763687,
            "distance_km": 5,
            "distance_mi": 3
          },
          {
            "neighborhood": "Quincy Reservoir SE",
            "city": "Centennial",
            "state": "CO",
            "country": "US",
            "id": "KCOCENTE62",
            "lat": 39.628494,
            "lon": -104.762611,
            "distance_km": 5,
            "distance_mi": 3
          },
          {
            "neighborhood": "Highpoint",
            "city": "Aurora",
            "state": "CO",
            "country": "US",
            "id": "KCOAUROR147",
            "lat": 39.64444,
            "lon": -104.767349,
            "distance_km": 6,
            "distance_mi": 3
          },
          {
            "neighborhood": "Fox Hill",
            "city": "Aurora",
            "state": "CO",
            "country": "US",
            "id": "KCOAUROR190",
            "lat": 39.62598,
            "lon": -104.75959,
            "distance_km": 6,
            "distance_mi": 3
          },
          {
            "neighborhood": "Buckley/E.Yale",
            "city": "Aurora",
            "state": "CO",
            "country": "US",
            "id": "KCOAUROR33",
            "lat": 39.665672,
            "lon": -104.790642,
            "distance_km": 6,
            "distance_mi": 3
          },
          {
            "neighborhood": "Fox Hill S.E. of Quincy Res",
            "city": "Aurora/Centennial",
            "state": "CO",
            "country": "US",
            "id": "KCOAUROR13",
            "lat": 39.62793,
            "lon": -104.758636,
            "distance_km": 6,
            "distance_mi": 3
          },
          {
            "neighborhood": "E Brunswick Place and E Brown Place",
            "city": "Aurora",
            "state": "CO",
            "country": "US",
            "id": "KCOAUROR43",
            "lat": 39.663101,
            "lon": -104.783684,
            "distance_km": 6,
            "distance_mi": 3
          },
          {
            "neighborhood": "Himalaya Court @ Willow Trace",
            "city": "Aurora",
            "state": "CO",
            "country": "US",
            "id": "KCOAUROR280",
            "lat": 39.62418,
            "lon": -104.752953,
            "distance_km": 6,
            "distance_mi": 3
          },
          {
            "neighborhood": "Willow Trace",
            "city": "Aurora",
            "state": "CO",
            "country": "US",
            "id": "KCOAUROR183",
            "lat": 39.624569,
            "lon": -104.749649,
            "distance_km": 6,
            "distance_mi": 4
          }
        ]
      }
    }
  },
  "current_observation": {
    "image": {
      "url": "http://icons.wxug.com/graphics/wu2/logo_130x80.png",
      "title": "Weather Underground",
      "link": "http://www.wunderground.com"
    },
    "display_location": {
      "full": "Aurora, CO",
      "city": "Aurora",
      "state": "CO",
      "state_name": "Colorado",
      "country": "US",
      "country_iso3166": "US",
      "zip": "80015",
      "magic": "1",
      "wmo": "99999",
      "latitude": "39.620000",
      "longitude": "-104.830000",
      "elevation": "1767.2"
    },
    "observation_location": {
      "full": "Denver Centennial, Colorado",
      "city": "Denver Centennial",
      "state": "Colorado",
      "country": "US",
      "country_iso3166": "US",
      "latitude": "39.63",
      "longitude": "-104.81",
      "elevation": "5735 ft"
    },
    "estimated": {},
    "station_id": "KCOAUROR225",
    "observation_time": "Last Updated on September 19, 11:52 AM MDT",
    "observation_time_rfc822": "Wed, 19 Sep 2018 11:52:04 -0600",
    "observation_epoch": "1537379524",
    "local_time_rfc822": "Wed, 19 Sep 2018 11:52:48 -0600",
    "local_epoch": "1537379568",
    "local_tz_short": "MDT",
    "local_tz_long": "America/Denver",
    "local_tz_offset": "-0600",
    "weather": "",
    "temperature_string": "85.1 F (29.5 C)",
    "temp_f": 85.1,
    "temp_c": 29.5,
    "relative_humidity": "19%",
    "wind_string": "Calm",
    "wind_dir": "NNE",
    "wind_degrees": 19,
    "wind_mph": 0,
    "wind_gust_mph": 0,
    "wind_kph": 0,
    "wind_gust_kph": 0,
    "pressure_mb": "1010",
    "pressure_in": "29.84",
    "pressure_trend": "-",
    "dewpoint_string": "38 F (3 C)",
    "dewpoint_f": 38,
    "dewpoint_c": 3,
    "heat_index_string": "82 F (28 C)",
    "heat_index_f": 82,
    "heat_index_c": 28,
    "windchill_string": "NA",
    "windchill_f": "NA",
    "windchill_c": "NA",
    "feelslike_string": "82 F (28 C)",
    "feelslike_f": "82",
    "feelslike_c": "28",
    "visibility_mi": "10.0",
    "visibility_km": "16.1",
    "solarradiation": "537",
    "UV": "6.0",
    "precip_1hr_string": "0.00 in ( 0 mm)",
    "precip_1hr_in": "0.00",
    "precip_1hr_metric": " 0",
    "precip_today_string": "0.00 in (0 mm)",
    "precip_today_in": "0.00",
    "precip_today_metric": "0",
    "icon": "",
    "icon_url": "http://icons.wxug.com/i/c/k/.gif",
    "forecast_url": "http://www.wunderground.com/US/CO/Aurora.html",
    "history_url": "http://www.wunderground.com/weatherstation/WXDailyHistory.asp?ID=KCOAUROR225",
    "ob_url": "http://www.wunderground.com/cgi-bin/findweather/getForecast?query=39.626328,-104.813309",
    "nowcast": ""
  },
  "forecast": {
    "txt_forecast": {
      "date": "10:53 AM MDT",
      "forecastday": [
        {
          "period": 0,
          "icon": "chancetstorms",
          "icon_url": "http://icons.wxug.com/i/c/k/chancetstorms.gif",
          "title": "Wednesday",
          "fcttext": "Partly to mostly cloudy with scattered showers and thunderstorms developing this afternoon. High 88F. Winds ENE at 10 to 20 mph. Chance of rain 50%.",
          "fcttext_metric": "Partly to mostly cloudy with scattered showers and thunderstorms developing this afternoon. High near 30C. Winds ENE at 15 to 30 km/h. Chance of rain 40%.",
          "pop": "50"
        },
        {
          "period": 1,
          "icon": "nt_chancetstorms",
          "icon_url": "http://icons.wxug.com/i/c/k/nt_chancetstorms.gif",
          "title": "Wednesday Night",
          "fcttext": "Scattered showers and thunderstorms. Low 59F. Winds ESE at 5 to 10 mph. Chance of rain 50%.",
          "fcttext_metric": "Scattered showers and thunderstorms. Low around 15C. Winds ESE at 10 to 15 km/h. Chance of rain 50%.",
          "pop": "50"
        },
        {
          "period": 2,
          "icon": "partlycloudy",
          "icon_url": "http://icons.wxug.com/i/c/k/partlycloudy.gif",
          "title": "Thursday",
          "fcttext": "Cloudy skies early, then partly cloudy in the afternoon. High 82F. SW winds shifting to NNE at 10 to 15 mph.",
          "fcttext_metric": "Cloudy skies early, followed by partial clearing. High 27C. WSW winds shifting to NNE at 15 to 25 km/h.",
          "pop": "20"
        },
        {
          "period": 3,
          "icon": "nt_partlycloudy",
          "icon_url": "http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
          "title": "Thursday Night",
          "fcttext": "Partly cloudy. A stray shower or thunderstorm is possible. Low 49F. Winds NNE at 10 to 15 mph.",
          "fcttext_metric": "A few clouds. A stray shower or thunderstorm is possible. Low 9C. Winds NNE at 10 to 15 km/h.",
          "pop": "20"
        },
        {
          "period": 4,
          "icon": "clear",
          "icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
          "title": "Friday",
          "fcttext": "Sun and a few passing clouds. High 73F. Winds SE at 15 to 25 mph.",
          "fcttext_metric": "Sunshine along with some cloudy intervals. High 23C. Winds SE at 25 to 40 km/h.",
          "pop": "0"
        },
        {
          "period": 5,
          "icon": "nt_clear",
          "icon_url": "http://icons.wxug.com/i/c/k/nt_clear.gif",
          "title": "Friday Night",
          "fcttext": "A mostly clear sky. Low 51F. Winds S at 15 to 25 mph.",
          "fcttext_metric": "Clear skies. Low near 10C. Winds S at 25 to 40 km/h.",
          "pop": "0"
        },
        {
          "period": 6,
          "icon": "clear",
          "icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
          "title": "Saturday",
          "fcttext": "Mainly sunny. High 83F. SW winds shifting to E at 10 to 15 mph.",
          "fcttext_metric": "A mainly sunny sky. High 28C. SW winds shifting to E at 15 to 25 km/h.",
          "pop": "0"
        },
        {
          "period": 7,
          "icon": "nt_clear",
          "icon_url": "http://icons.wxug.com/i/c/k/nt_clear.gif",
          "title": "Saturday Night",
          "fcttext": "Clear skies. Low around 55F. Winds S at 10 to 15 mph.",
          "fcttext_metric": "Clear. Low 12C. Winds S at 15 to 25 km/h.",
          "pop": "0"
        },
        {
          "period": 8,
          "icon": "clear",
          "icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
          "title": "Sunday",
          "fcttext": "Except for a few afternoon clouds, mainly sunny. High near 85F. Winds SE at 5 to 10 mph.",
          "fcttext_metric": "Sunshine and some clouds. High 29C. Winds SE at 10 to 15 km/h.",
          "pop": "0"
        },
        {
          "period": 9,
          "icon": "nt_clear",
          "icon_url": "http://icons.wxug.com/i/c/k/nt_clear.gif",
          "title": "Sunday Night",
          "fcttext": "Mainly clear skies. Low near 55F. Winds SSW at 5 to 10 mph.",
          "fcttext_metric": "A few clouds. Low 12C. Winds SSW at 10 to 15 km/h.",
          "pop": "0"
        },
        {
          "period": 10,
          "icon": "clear",
          "icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
          "title": "Monday",
          "fcttext": "Sun and a few passing clouds. High 81F. WSW winds shifting to NE at 10 to 15 mph.",
          "fcttext_metric": "Plentiful sunshine. High 26C. WSW winds shifting to NE at 15 to 25 km/h.",
          "pop": "0"
        },
        {
          "period": 11,
          "icon": "nt_partlycloudy",
          "icon_url": "http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
          "title": "Monday Night",
          "fcttext": "A few clouds. Low 48F. Winds SE at 5 to 10 mph.",
          "fcttext_metric": "Clear skies with a few passing clouds. Low 9C. Winds SE at 10 to 15 km/h.",
          "pop": "0"
        },
        {
          "period": 12,
          "icon": "clear",
          "icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
          "title": "Tuesday",
          "fcttext": "Sunshine along with some cloudy intervals. A stray shower or thunderstorm is possible. High 68F. Winds SE at 10 to 15 mph.",
          "fcttext_metric": "A few clouds early, otherwise mostly sunny. A stray shower or thunderstorm is possible. High near 20C. SSW winds shifting to E at 15 to 25 km/h.",
          "pop": "20"
        },
        {
          "period": 13,
          "icon": "nt_clear",
          "icon_url": "http://icons.wxug.com/i/c/k/nt_clear.gif",
          "title": "Tuesday Night",
          "fcttext": "Mostly clear. Low near 45F. Winds SE at 10 to 15 mph.",
          "fcttext_metric": "Mostly clear. Low 7C. Winds SE at 15 to 25 km/h.",
          "pop": "20"
        },
        {
          "period": 14,
          "icon": "clear",
          "icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
          "title": "Wednesday",
          "fcttext": "Sun and a few passing clouds. High 69F. Winds E at 10 to 15 mph.",
          "fcttext_metric": "Intervals of clouds and sunshine. High 19C. Winds E at 15 to 25 km/h.",
          "pop": "20"
        },
        {
          "period": 15,
          "icon": "nt_clear",
          "icon_url": "http://icons.wxug.com/i/c/k/nt_clear.gif",
          "title": "Wednesday Night",
          "fcttext": "Clear skies. Low 43F. Winds SSE at 10 to 15 mph.",
          "fcttext_metric": "Clear skies. Low 6C. Winds SSE at 10 to 15 km/h.",
          "pop": "10"
        },
        {
          "period": 16,
          "icon": "clear",
          "icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
          "title": "Thursday",
          "fcttext": "A mainly sunny sky. High 71F. SSW winds shifting to ENE at 10 to 15 mph.",
          "fcttext_metric": "A mainly sunny sky. High 22C. SSW winds shifting to E at 15 to 25 km/h.",
          "pop": "0"
        },
        {
          "period": 17,
          "icon": "nt_clear",
          "icon_url": "http://icons.wxug.com/i/c/k/nt_clear.gif",
          "title": "Thursday Night",
          "fcttext": "Clear. Low 43F. Winds S at 5 to 10 mph.",
          "fcttext_metric": "Clear skies. Low 6C. Winds S at 10 to 15 km/h.",
          "pop": "0"
        },
        {
          "period": 18,
          "icon": "clear",
          "icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
          "title": "Friday",
          "fcttext": "A mainly sunny sky. High around 70F. SSW winds shifting to E at 10 to 15 mph.",
          "fcttext_metric": "A mainly sunny sky. High 21C. Winds ESE at 10 to 15 km/h.",
          "pop": "0"
        },
        {
          "period": 19,
          "icon": "nt_clear",
          "icon_url": "http://icons.wxug.com/i/c/k/nt_clear.gif",
          "title": "Friday Night",
          "fcttext": "Clear skies. Low 44F. Winds S at 10 to 15 mph.",
          "fcttext_metric": "Clear skies. Low 7C. Winds S at 10 to 15 km/h.",
          "pop": "0"
        }
      ]
    },
    "simpleforecast": {
      "forecastday": [
        {
          "date": {
            "epoch": "1537405200",
            "pretty": "7:00 PM MDT on September 19, 2018",
            "day": 19,
            "month": 9,
            "year": 2018,
            "yday": 261,
            "hour": 19,
            "min": "00",
            "sec": 0,
            "isdst": "1",
            "monthname": "September",
            "monthname_short": "Sep",
            "weekday_short": "Wed",
            "weekday": "Wednesday",
            "ampm": "PM",
            "tz_short": "MDT",
            "tz_long": "America/Denver"
          },
          "period": 1,
          "high": {
            "fahrenheit": "88",
            "celsius": "31"
          },
          "low": {
            "fahrenheit": "59",
            "celsius": "15"
          },
          "conditions": "Chance of a Thunderstorm",
          "icon": "chancetstorms",
          "icon_url": "http://icons.wxug.com/i/c/k/chancetstorms.gif",
          "skyicon": "",
          "pop": 50,
          "qpf_allday": {
            "in": 0.16,
            "mm": 4
          },
          "qpf_day": {
            "in": 0.01,
            "mm": 0
          },
          "qpf_night": {
            "in": 0.15,
            "mm": 4
          },
          "snow_allday": {
            "in": 0,
            "cm": 0
          },
          "snow_day": {
            "in": 0,
            "cm": 0
          },
          "snow_night": {
            "in": 0,
            "cm": 0
          },
          "maxwind": {
            "mph": 20,
            "kph": 32,
            "dir": "ENE",
            "degrees": 74
          },
          "avewind": {
            "mph": 13,
            "kph": 21,
            "dir": "ENE",
            "degrees": 74
          },
          "avehumidity": 33,
          "maxhumidity": 65,
          "minhumidity": 15
        },
        {
          "date": {
            "epoch": "1537491600",
            "pretty": "7:00 PM MDT on September 20, 2018",
            "day": 20,
            "month": 9,
            "year": 2018,
            "yday": 262,
            "hour": 19,
            "min": "00",
            "sec": 0,
            "isdst": "1",
            "monthname": "September",
            "monthname_short": "Sep",
            "weekday_short": "Thu",
            "weekday": "Thursday",
            "ampm": "PM",
            "tz_short": "MDT",
            "tz_long": "America/Denver"
          },
          "period": 2,
          "high": {
            "fahrenheit": "82",
            "celsius": "28"
          },
          "low": {
            "fahrenheit": "49",
            "celsius": "9"
          },
          "conditions": "Partly Cloudy",
          "icon": "partlycloudy",
          "icon_url": "http://icons.wxug.com/i/c/k/partlycloudy.gif",
          "skyicon": "",
          "pop": 20,
          "qpf_allday": {
            "in": 0,
            "mm": 0
          },
          "qpf_day": {
            "in": 0,
            "mm": 0
          },
          "qpf_night": {
            "in": 0,
            "mm": 0
          },
          "snow_allday": {
            "in": 0,
            "cm": 0
          },
          "snow_day": {
            "in": 0,
            "cm": 0
          },
          "snow_night": {
            "in": 0,
            "cm": 0
          },
          "maxwind": {
            "mph": 15,
            "kph": 24,
            "dir": "NW",
            "degrees": 324
          },
          "avewind": {
            "mph": 11,
            "kph": 18,
            "dir": "NW",
            "degrees": 324
          },
          "avehumidity": 48,
          "maxhumidity": 79,
          "minhumidity": 18
        },
        {
          "date": {
            "epoch": "1537578000",
            "pretty": "7:00 PM MDT on September 21, 2018",
            "day": 21,
            "month": 9,
            "year": 2018,
            "yday": 263,
            "hour": 19,
            "min": "00",
            "sec": 0,
            "isdst": "1",
            "monthname": "September",
            "monthname_short": "Sep",
            "weekday_short": "Fri",
            "weekday": "Friday",
            "ampm": "PM",
            "tz_short": "MDT",
            "tz_long": "America/Denver"
          },
          "period": 3,
          "high": {
            "fahrenheit": "73",
            "celsius": "23"
          },
          "low": {
            "fahrenheit": "51",
            "celsius": "11"
          },
          "conditions": "Clear",
          "icon": "clear",
          "icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
          "skyicon": "",
          "pop": 0,
          "qpf_allday": {
            "in": 0,
            "mm": 0
          },
          "qpf_day": {
            "in": 0,
            "mm": 0
          },
          "qpf_night": {
            "in": 0,
            "mm": 0
          },
          "snow_allday": {
            "in": 0,
            "cm": 0
          },
          "snow_day": {
            "in": 0,
            "cm": 0
          },
          "snow_night": {
            "in": 0,
            "cm": 0
          },
          "maxwind": {
            "mph": 25,
            "kph": 40,
            "dir": "SE",
            "degrees": 142
          },
          "avewind": {
            "mph": 18,
            "kph": 29,
            "dir": "SE",
            "degrees": 142
          },
          "avehumidity": 54,
          "maxhumidity": 71,
          "minhumidity": 38
        },
        {
          "date": {
            "epoch": "1537664400",
            "pretty": "7:00 PM MDT on September 22, 2018",
            "day": 22,
            "month": 9,
            "year": 2018,
            "yday": 264,
            "hour": 19,
            "min": "00",
            "sec": 0,
            "isdst": "1",
            "monthname": "September",
            "monthname_short": "Sep",
            "weekday_short": "Sat",
            "weekday": "Saturday",
            "ampm": "PM",
            "tz_short": "MDT",
            "tz_long": "America/Denver"
          },
          "period": 4,
          "high": {
            "fahrenheit": "83",
            "celsius": "28"
          },
          "low": {
            "fahrenheit": "55",
            "celsius": "13"
          },
          "conditions": "Clear",
          "icon": "clear",
          "icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
          "skyicon": "",
          "pop": 0,
          "qpf_allday": {
            "in": 0,
            "mm": 0
          },
          "qpf_day": {
            "in": 0,
            "mm": 0
          },
          "qpf_night": {
            "in": 0,
            "mm": 0
          },
          "snow_allday": {
            "in": 0,
            "cm": 0
          },
          "snow_day": {
            "in": 0,
            "cm": 0
          },
          "snow_night": {
            "in": 0,
            "cm": 0
          },
          "maxwind": {
            "mph": 15,
            "kph": 24,
            "dir": "SE",
            "degrees": 133
          },
          "avewind": {
            "mph": 10,
            "kph": 16,
            "dir": "SE",
            "degrees": 133
          },
          "avehumidity": 39,
          "maxhumidity": 70,
          "minhumidity": 12
        },
        {
          "date": {
            "epoch": "1537750800",
            "pretty": "7:00 PM MDT on September 23, 2018",
            "day": 23,
            "month": 9,
            "year": 2018,
            "yday": 265,
            "hour": 19,
            "min": "00",
            "sec": 0,
            "isdst": "1",
            "monthname": "September",
            "monthname_short": "Sep",
            "weekday_short": "Sun",
            "weekday": "Sunday",
            "ampm": "PM",
            "tz_short": "MDT",
            "tz_long": "America/Denver"
          },
          "period": 5,
          "high": {
            "fahrenheit": "85",
            "celsius": "29"
          },
          "low": {
            "fahrenheit": "55",
            "celsius": "13"
          },
          "conditions": "Clear",
          "icon": "clear",
          "icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
          "skyicon": "",
          "pop": 0,
          "qpf_allday": {
            "in": 0,
            "mm": 0
          },
          "qpf_day": {
            "in": 0,
            "mm": 0
          },
          "qpf_night": {
            "in": 0,
            "mm": 0
          },
          "snow_allday": {
            "in": 0,
            "cm": 0
          },
          "snow_day": {
            "in": 0,
            "cm": 0
          },
          "snow_night": {
            "in": 0,
            "cm": 0
          },
          "maxwind": {
            "mph": 10,
            "kph": 16,
            "dir": "SE",
            "degrees": 135
          },
          "avewind": {
            "mph": 9,
            "kph": 14,
            "dir": "SE",
            "degrees": 135
          },
          "avehumidity": 28,
          "maxhumidity": 51,
          "minhumidity": 10
        },
        {
          "date": {
            "epoch": "1537837200",
            "pretty": "7:00 PM MDT on September 24, 2018",
            "day": 24,
            "month": 9,
            "year": 2018,
            "yday": 266,
            "hour": 19,
            "min": "00",
            "sec": 0,
            "isdst": "1",
            "monthname": "September",
            "monthname_short": "Sep",
            "weekday_short": "Mon",
            "weekday": "Monday",
            "ampm": "PM",
            "tz_short": "MDT",
            "tz_long": "America/Denver"
          },
          "period": 6,
          "high": {
            "fahrenheit": "81",
            "celsius": "27"
          },
          "low": {
            "fahrenheit": "48",
            "celsius": "9"
          },
          "conditions": "Clear",
          "icon": "clear",
          "icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
          "skyicon": "",
          "pop": 0,
          "qpf_allday": {
            "in": 0,
            "mm": 0
          },
          "qpf_day": {
            "in": 0,
            "mm": 0
          },
          "qpf_night": {
            "in": 0,
            "mm": 0
          },
          "snow_allday": {
            "in": 0,
            "cm": 0
          },
          "snow_day": {
            "in": 0,
            "cm": 0
          },
          "snow_night": {
            "in": 0,
            "cm": 0
          },
          "maxwind": {
            "mph": 15,
            "kph": 24,
            "dir": "NNW",
            "degrees": 333
          },
          "avewind": {
            "mph": 10,
            "kph": 16,
            "dir": "NNW",
            "degrees": 333
          },
          "avehumidity": 28,
          "maxhumidity": 40,
          "minhumidity": 16
        },
        {
          "date": {
            "epoch": "1537923600",
            "pretty": "7:00 PM MDT on September 25, 2018",
            "day": 25,
            "month": 9,
            "year": 2018,
            "yday": 267,
            "hour": 19,
            "min": "00",
            "sec": 0,
            "isdst": "1",
            "monthname": "September",
            "monthname_short": "Sep",
            "weekday_short": "Tue",
            "weekday": "Tuesday",
            "ampm": "PM",
            "tz_short": "MDT",
            "tz_long": "America/Denver"
          },
          "period": 7,
          "high": {
            "fahrenheit": "68",
            "celsius": "20"
          },
          "low": {
            "fahrenheit": "45",
            "celsius": "7"
          },
          "conditions": "Clear",
          "icon": "clear",
          "icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
          "skyicon": "",
          "pop": 20,
          "qpf_allday": {
            "in": 0,
            "mm": 0
          },
          "qpf_day": {
            "in": 0,
            "mm": 0
          },
          "qpf_night": {
            "in": 0,
            "mm": 0
          },
          "snow_allday": {
            "in": 0,
            "cm": 0
          },
          "snow_day": {
            "in": 0,
            "cm": 0
          },
          "snow_night": {
            "in": 0,
            "cm": 0
          },
          "maxwind": {
            "mph": 15,
            "kph": 24,
            "dir": "SE",
            "degrees": 128
          },
          "avewind": {
            "mph": 11,
            "kph": 18,
            "dir": "SE",
            "degrees": 128
          },
          "avehumidity": 47,
          "maxhumidity": 64,
          "minhumidity": 33
        },
        {
          "date": {
            "epoch": "1538010000",
            "pretty": "7:00 PM MDT on September 26, 2018",
            "day": 26,
            "month": 9,
            "year": 2018,
            "yday": 268,
            "hour": 19,
            "min": "00",
            "sec": 0,
            "isdst": "1",
            "monthname": "September",
            "monthname_short": "Sep",
            "weekday_short": "Wed",
            "weekday": "Wednesday",
            "ampm": "PM",
            "tz_short": "MDT",
            "tz_long": "America/Denver"
          },
          "period": 8,
          "high": {
            "fahrenheit": "69",
            "celsius": "21"
          },
          "low": {
            "fahrenheit": "43",
            "celsius": "6"
          },
          "conditions": "Clear",
          "icon": "clear",
          "icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
          "skyicon": "",
          "pop": 20,
          "qpf_allday": {
            "in": 0,
            "mm": 0
          },
          "qpf_day": {
            "in": 0,
            "mm": 0
          },
          "qpf_night": {
            "in": 0,
            "mm": 0
          },
          "snow_allday": {
            "in": 0,
            "cm": 0
          },
          "snow_day": {
            "in": 0,
            "cm": 0
          },
          "snow_night": {
            "in": 0,
            "cm": 0
          },
          "maxwind": {
            "mph": 15,
            "kph": 24,
            "dir": "E",
            "degrees": 82
          },
          "avewind": {
            "mph": 11,
            "kph": 18,
            "dir": "E",
            "degrees": 82
          },
          "avehumidity": 47,
          "maxhumidity": 71,
          "minhumidity": 25
        },
        {
          "date": {
            "epoch": "1538096400",
            "pretty": "7:00 PM MDT on September 27, 2018",
            "day": 27,
            "month": 9,
            "year": 2018,
            "yday": 269,
            "hour": 19,
            "min": "00",
            "sec": 0,
            "isdst": "1",
            "monthname": "September",
            "monthname_short": "Sep",
            "weekday_short": "Thu",
            "weekday": "Thursday",
            "ampm": "PM",
            "tz_short": "MDT",
            "tz_long": "America/Denver"
          },
          "period": 9,
          "high": {
            "fahrenheit": "71",
            "celsius": "22"
          },
          "low": {
            "fahrenheit": "43",
            "celsius": "6"
          },
          "conditions": "Clear",
          "icon": "clear",
          "icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
          "skyicon": "",
          "pop": 0,
          "qpf_allday": {
            "in": 0,
            "mm": 0
          },
          "qpf_day": {
            "in": 0,
            "mm": 0
          },
          "qpf_night": {
            "in": 0,
            "mm": 0
          },
          "snow_allday": {
            "in": 0,
            "cm": 0
          },
          "snow_day": {
            "in": 0,
            "cm": 0
          },
          "snow_night": {
            "in": 0,
            "cm": 0
          },
          "maxwind": {
            "mph": 15,
            "kph": 24,
            "dir": "SE",
            "degrees": 124
          },
          "avewind": {
            "mph": 10,
            "kph": 16,
            "dir": "SE",
            "degrees": 124
          },
          "avehumidity": 41,
          "maxhumidity": 61,
          "minhumidity": 20
        },
        {
          "date": {
            "epoch": "1538182800",
            "pretty": "7:00 PM MDT on September 28, 2018",
            "day": 28,
            "month": 9,
            "year": 2018,
            "yday": 270,
            "hour": 19,
            "min": "00",
            "sec": 0,
            "isdst": "1",
            "monthname": "September",
            "monthname_short": "Sep",
            "weekday_short": "Fri",
            "weekday": "Friday",
            "ampm": "PM",
            "tz_short": "MDT",
            "tz_long": "America/Denver"
          },
          "period": 10,
          "high": {
            "fahrenheit": "70",
            "celsius": "21"
          },
          "low": {
            "fahrenheit": "44",
            "celsius": "7"
          },
          "conditions": "Clear",
          "icon": "clear",
          "icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
          "skyicon": "",
          "pop": 0,
          "qpf_allday": {
            "in": 0,
            "mm": 0
          },
          "qpf_day": {
            "in": 0,
            "mm": 0
          },
          "qpf_night": {
            "in": 0,
            "mm": 0
          },
          "snow_allday": {
            "in": 0,
            "cm": 0
          },
          "snow_day": {
            "in": 0,
            "cm": 0
          },
          "snow_night": {
            "in": 0,
            "cm": 0
          },
          "maxwind": {
            "mph": 15,
            "kph": 24,
            "dir": "SE",
            "degrees": 128
          },
          "avewind": {
            "mph": 11,
            "kph": 18,
            "dir": "SE",
            "degrees": 128
          },
          "avehumidity": 38,
          "maxhumidity": 51,
          "minhumidity": 23
        }
      ]
    }
  },
  "hourly_forecast": [
    {
      "FCTTIME": {
        "hour": "12",
        "hour_padded": "12",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2018",
        "mon": "9",
        "mon_padded": "09",
        "mon_abbrev": "Sep",
        "mday": "19",
        "mday_padded": "19",
        "yday": "261",
        "isdst": "1",
        "epoch": "1537380000",
        "pretty": "12:00 PM MDT on September 19, 2018",
        "civil": "12:00 PM",
        "month_name": "September",
        "month_name_abbrev": "Sep",
        "weekday_name": "Wednesday",
        "weekday_name_night": "Wednesday Night",
        "weekday_name_abbrev": "Wed",
        "weekday_name_unlang": "Wednesday",
        "weekday_name_night_unlang": "Wednesday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "85.0",
        "metric": "29"
      },
      "dewpoint": {
        "english": "36.0",
        "metric": "2"
      },
      "condition": "Mostly Cloudy",
      "icon": "mostlycloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/mostlycloudy.gif",
      "fctcode": "3",
      "sky": "63",
      "wspd": {
        "english": "10",
        "metric": "16"
      },
      "wdir": {
        "dir": "ENE",
        "degrees": "76"
      },
      "wx": "Mostly Cloudy",
      "uvi": "5",
      "humidity": "18",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "85.0",
        "metric": "29"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "15",
      "mslp": {
        "english": "29.67",
        "metric": "1005"
      }
    },
    {
      "FCTTIME": {
        "hour": "13",
        "hour_padded": "13",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2018",
        "mon": "9",
        "mon_padded": "09",
        "mon_abbrev": "Sep",
        "mday": "19",
        "mday_padded": "19",
        "yday": "261",
        "isdst": "1",
        "epoch": "1537383600",
        "pretty": "1:00 PM MDT on September 19, 2018",
        "civil": "1:00 PM",
        "month_name": "September",
        "month_name_abbrev": "Sep",
        "weekday_name": "Wednesday",
        "weekday_name_night": "Wednesday Night",
        "weekday_name_abbrev": "Wed",
        "weekday_name_unlang": "Wednesday",
        "weekday_name_night_unlang": "Wednesday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "86.9",
        "metric": "30"
      },
      "dewpoint": {
        "english": "34.7",
        "metric": "2"
      },
      "condition": "Mostly Cloudy",
      "icon": "mostlycloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/mostlycloudy.gif",
      "fctcode": "3",
      "sky": "66",
      "wspd": {
        "english": "12",
        "metric": "19"
      },
      "wdir": {
        "dir": "ENE",
        "degrees": "76"
      },
      "wx": "Mostly Cloudy",
      "uvi": "5",
      "humidity": "16",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "86.9",
        "metric": "30"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "15",
      "mslp": {
        "english": "29.64",
        "metric": "1004"
      }
    },
    {
      "FCTTIME": {
        "hour": "14",
        "hour_padded": "14",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2018",
        "mon": "9",
        "mon_padded": "09",
        "mon_abbrev": "Sep",
        "mday": "19",
        "mday_padded": "19",
        "yday": "261",
        "isdst": "1",
        "epoch": "1537387200",
        "pretty": "2:00 PM MDT on September 19, 2018",
        "civil": "2:00 PM",
        "month_name": "September",
        "month_name_abbrev": "Sep",
        "weekday_name": "Wednesday",
        "weekday_name_night": "Wednesday Night",
        "weekday_name_abbrev": "Wed",
        "weekday_name_unlang": "Wednesday",
        "weekday_name_night_unlang": "Wednesday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "88.0",
        "metric": "31"
      },
      "dewpoint": {
        "english": "34.7",
        "metric": "2"
      },
      "condition": "Overcast",
      "icon": "cloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/cloudy.gif",
      "fctcode": "4",
      "sky": "80",
      "wspd": {
        "english": "13",
        "metric": "21"
      },
      "wdir": {
        "dir": "ENE",
        "degrees": "70"
      },
      "wx": "Cloudy",
      "uvi": "4",
      "humidity": "15",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "88.0",
        "metric": "31"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "15",
      "mslp": {
        "english": "29.61",
        "metric": "1003"
      }
    },
    {
      "FCTTIME": {
        "hour": "15",
        "hour_padded": "15",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2018",
        "mon": "9",
        "mon_padded": "09",
        "mon_abbrev": "Sep",
        "mday": "19",
        "mday_padded": "19",
        "yday": "261",
        "isdst": "1",
        "epoch": "1537390800",
        "pretty": "3:00 PM MDT on September 19, 2018",
        "civil": "3:00 PM",
        "month_name": "September",
        "month_name_abbrev": "Sep",
        "weekday_name": "Wednesday",
        "weekday_name_night": "Wednesday Night",
        "weekday_name_abbrev": "Wed",
        "weekday_name_unlang": "Wednesday",
        "weekday_name_night_unlang": "Wednesday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "87.1",
        "metric": "31"
      },
      "dewpoint": {
        "english": "37.0",
        "metric": "3"
      },
      "condition": "Overcast",
      "icon": "cloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/cloudy.gif",
      "fctcode": "4",
      "sky": "90",
      "wspd": {
        "english": "13",
        "metric": "21"
      },
      "wdir": {
        "dir": "E",
        "degrees": "81"
      },
      "wx": "Cloudy",
      "uvi": "2",
      "humidity": "17",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "87.1",
        "metric": "31"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "15",
      "mslp": {
        "english": "29.59",
        "metric": "1002"
      }
    },
    {
      "FCTTIME": {
        "hour": "16",
        "hour_padded": "16",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2018",
        "mon": "9",
        "mon_padded": "09",
        "mon_abbrev": "Sep",
        "mday": "19",
        "mday_padded": "19",
        "yday": "261",
        "isdst": "1",
        "epoch": "1537394400",
        "pretty": "4:00 PM MDT on September 19, 2018",
        "civil": "4:00 PM",
        "month_name": "September",
        "month_name_abbrev": "Sep",
        "weekday_name": "Wednesday",
        "weekday_name_night": "Wednesday Night",
        "weekday_name_abbrev": "Wed",
        "weekday_name_unlang": "Wednesday",
        "weekday_name_night_unlang": "Wednesday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "84.8",
        "metric": "29"
      },
      "dewpoint": {
        "english": "39.1",
        "metric": "4"
      },
      "condition": "Overcast",
      "icon": "cloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/cloudy.gif",
      "fctcode": "4",
      "sky": "81",
      "wspd": {
        "english": "12",
        "metric": "19"
      },
      "wdir": {
        "dir": "E",
        "degrees": "84"
      },
      "wx": "Cloudy",
      "uvi": "2",
      "humidity": "20",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "84.8",
        "metric": "29"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "15",
      "mslp": {
        "english": "29.59",
        "metric": "1002"
      }
    },
    {
      "FCTTIME": {
        "hour": "17",
        "hour_padded": "17",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2018",
        "mon": "9",
        "mon_padded": "09",
        "mon_abbrev": "Sep",
        "mday": "19",
        "mday_padded": "19",
        "yday": "261",
        "isdst": "1",
        "epoch": "1537398000",
        "pretty": "5:00 PM MDT on September 19, 2018",
        "civil": "5:00 PM",
        "month_name": "September",
        "month_name_abbrev": "Sep",
        "weekday_name": "Wednesday",
        "weekday_name_night": "Wednesday Night",
        "weekday_name_abbrev": "Wed",
        "weekday_name_unlang": "Wednesday",
        "weekday_name_night_unlang": "Wednesday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "82.4",
        "metric": "28"
      },
      "dewpoint": {
        "english": "43.3",
        "metric": "6"
      },
      "condition": "Chance of a Thunderstorm",
      "icon": "chancetstorms",
      "icon_url": "http://icons.wxug.com/i/c/k/chancetstorms.gif",
      "fctcode": "14",
      "sky": "85",
      "wspd": {
        "english": "11",
        "metric": "18"
      },
      "wdir": {
        "dir": "ENE",
        "degrees": "78"
      },
      "wx": "Isolated Thunderstorms",
      "uvi": "1",
      "humidity": "25",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "82.4",
        "metric": "28"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "30",
      "mslp": {
        "english": "29.61",
        "metric": "1003"
      }
    },
    {
      "FCTTIME": {
        "hour": "18",
        "hour_padded": "18",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2018",
        "mon": "9",
        "mon_padded": "09",
        "mon_abbrev": "Sep",
        "mday": "19",
        "mday_padded": "19",
        "yday": "261",
        "isdst": "1",
        "epoch": "1537401600",
        "pretty": "6:00 PM MDT on September 19, 2018",
        "civil": "6:00 PM",
        "month_name": "September",
        "month_name_abbrev": "Sep",
        "weekday_name": "Wednesday",
        "weekday_name_night": "Wednesday Night",
        "weekday_name_abbrev": "Wed",
        "weekday_name_unlang": "Wednesday",
        "weekday_name_night_unlang": "Wednesday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "79.1",
        "metric": "26"
      },
      "dewpoint": {
        "english": "45.4",
        "metric": "7"
      },
      "condition": "Chance of a Thunderstorm",
      "icon": "chancetstorms",
      "icon_url": "http://icons.wxug.com/i/c/k/chancetstorms.gif",
      "fctcode": "14",
      "sky": "85",
      "wspd": {
        "english": "13",
        "metric": "21"
      },
      "wdir": {
        "dir": "ENE",
        "degrees": "77"
      },
      "wx": "Scattered Thunderstorms",
      "uvi": "0",
      "humidity": "30",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "79.1",
        "metric": "26"
      },
      "qpf": {
        "english": "0.01",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "47",
      "mslp": {
        "english": "29.64",
        "metric": "1004"
      }
    },
    {
      "FCTTIME": {
        "hour": "19",
        "hour_padded": "19",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2018",
        "mon": "9",
        "mon_padded": "09",
        "mon_abbrev": "Sep",
        "mday": "19",
        "mday_padded": "19",
        "yday": "261",
        "isdst": "1",
        "epoch": "1537405200",
        "pretty": "7:00 PM MDT on September 19, 2018",
        "civil": "7:00 PM",
        "month_name": "September",
        "month_name_abbrev": "Sep",
        "weekday_name": "Wednesday",
        "weekday_name_night": "Wednesday Night",
        "weekday_name_abbrev": "Wed",
        "weekday_name_unlang": "Wednesday",
        "weekday_name_night_unlang": "Wednesday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "75.3",
        "metric": "24"
      },
      "dewpoint": {
        "english": "46.4",
        "metric": "8"
      },
      "condition": "Chance of a Thunderstorm",
      "icon": "chancetstorms",
      "icon_url": "http://icons.wxug.com/i/c/k/chancetstorms.gif",
      "fctcode": "14",
      "sky": "90",
      "wspd": {
        "english": "9",
        "metric": "14"
      },
      "wdir": {
        "dir": "ENE",
        "degrees": "57"
      },
      "wx": "Scattered Thunderstorms",
      "uvi": "0",
      "humidity": "36",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "75.3",
        "metric": "24"
      },
      "qpf": {
        "english": "0.03",
        "metric": "1"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "49",
      "mslp": {
        "english": "29.67",
        "metric": "1005"
      }
    },
    {
      "FCTTIME": {
        "hour": "20",
        "hour_padded": "20",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2018",
        "mon": "9",
        "mon_padded": "09",
        "mon_abbrev": "Sep",
        "mday": "19",
        "mday_padded": "19",
        "yday": "261",
        "isdst": "1",
        "epoch": "1537408800",
        "pretty": "8:00 PM MDT on September 19, 2018",
        "civil": "8:00 PM",
        "month_name": "September",
        "month_name_abbrev": "Sep",
        "weekday_name": "Wednesday",
        "weekday_name_night": "Wednesday Night",
        "weekday_name_abbrev": "Wed",
        "weekday_name_unlang": "Wednesday",
        "weekday_name_night_unlang": "Wednesday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "72.6",
        "metric": "23"
      },
      "dewpoint": {
        "english": "47.7",
        "metric": "9"
      },
      "condition": "Chance of a Thunderstorm",
      "icon": "chancetstorms",
      "icon_url": "http://icons.wxug.com/i/c/k/nt_chancetstorms.gif",
      "fctcode": "14",
      "sky": "86",
      "wspd": {
        "english": "9",
        "metric": "14"
      },
      "wdir": {
        "dir": "N",
        "degrees": "2"
      },
      "wx": "Scattered Thunderstorms",
      "uvi": "0",
      "humidity": "41",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "72.6",
        "metric": "23"
      },
      "qpf": {
        "english": "0.05",
        "metric": "1"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "36",
      "mslp": {
        "english": "29.71",
        "metric": "1006"
      }
    },
    {
      "FCTTIME": {
        "hour": "21",
        "hour_padded": "21",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2018",
        "mon": "9",
        "mon_padded": "09",
        "mon_abbrev": "Sep",
        "mday": "19",
        "mday_padded": "19",
        "yday": "261",
        "isdst": "1",
        "epoch": "1537412400",
        "pretty": "9:00 PM MDT on September 19, 2018",
        "civil": "9:00 PM",
        "month_name": "September",
        "month_name_abbrev": "Sep",
        "weekday_name": "Wednesday",
        "weekday_name_night": "Wednesday Night",
        "weekday_name_abbrev": "Wed",
        "weekday_name_unlang": "Wednesday",
        "weekday_name_night_unlang": "Wednesday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "68.2",
        "metric": "20"
      },
      "dewpoint": {
        "english": "52.2",
        "metric": "11"
      },
      "condition": "Chance of a Thunderstorm",
      "icon": "chancetstorms",
      "icon_url": "http://icons.wxug.com/i/c/k/nt_chancetstorms.gif",
      "fctcode": "14",
      "sky": "73",
      "wspd": {
        "english": "9",
        "metric": "14"
      },
      "wdir": {
        "dir": "N",
        "degrees": "357"
      },
      "wx": "Scattered Thunderstorms",
      "uvi": "0",
      "humidity": "57",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "68.2",
        "metric": "20"
      },
      "qpf": {
        "english": "0.01",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "40",
      "mslp": {
        "english": "29.74",
        "metric": "1007"
      }
    },
    {
      "FCTTIME": {
        "hour": "22",
        "hour_padded": "22",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2018",
        "mon": "9",
        "mon_padded": "09",
        "mon_abbrev": "Sep",
        "mday": "19",
        "mday_padded": "19",
        "yday": "261",
        "isdst": "1",
        "epoch": "1537416000",
        "pretty": "10:00 PM MDT on September 19, 2018",
        "civil": "10:00 PM",
        "month_name": "September",
        "month_name_abbrev": "Sep",
        "weekday_name": "Wednesday",
        "weekday_name_night": "Wednesday Night",
        "weekday_name_abbrev": "Wed",
        "weekday_name_unlang": "Wednesday",
        "weekday_name_night_unlang": "Wednesday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "66.0",
        "metric": "19"
      },
      "dewpoint": {
        "english": "53.2",
        "metric": "12"
      },
      "condition": "Chance of a Thunderstorm",
      "icon": "chancetstorms",
      "icon_url": "http://icons.wxug.com/i/c/k/nt_chancetstorms.gif",
      "fctcode": "14",
      "sky": "63",
      "wspd": {
        "english": "7",
        "metric": "11"
      },
      "wdir": {
        "dir": "ENE",
        "degrees": "64"
      },
      "wx": "Scattered Thunderstorms",
      "uvi": "0",
      "humidity": "63",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "66.0",
        "metric": "19"
      },
      "qpf": {
        "english": "0.01",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "40",
      "mslp": {
        "english": "29.75",
        "metric": "1007"
      }
    },
    {
      "FCTTIME": {
        "hour": "23",
        "hour_padded": "23",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2018",
        "mon": "9",
        "mon_padded": "09",
        "mon_abbrev": "Sep",
        "mday": "19",
        "mday_padded": "19",
        "yday": "261",
        "isdst": "1",
        "epoch": "1537419600",
        "pretty": "11:00 PM MDT on September 19, 2018",
        "civil": "11:00 PM",
        "month_name": "September",
        "month_name_abbrev": "Sep",
        "weekday_name": "Wednesday",
        "weekday_name_night": "Wednesday Night",
        "weekday_name_abbrev": "Wed",
        "weekday_name_unlang": "Wednesday",
        "weekday_name_night_unlang": "Wednesday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "65.0",
        "metric": "18"
      },
      "dewpoint": {
        "english": "53.1",
        "metric": "12"
      },
      "condition": "Mostly Cloudy",
      "icon": "mostlycloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/nt_mostlycloudy.gif",
      "fctcode": "3",
      "sky": "77",
      "wspd": {
        "english": "6",
        "metric": "10"
      },
      "wdir": {
        "dir": "SE",
        "degrees": "124"
      },
      "wx": "Mostly Cloudy",
      "uvi": "0",
      "humidity": "65",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "65.0",
        "metric": "18"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "23",
      "mslp": {
        "english": "29.76",
        "metric": "1008"
      }
    },
    {
      "FCTTIME": {
        "hour": "0",
        "hour_padded": "00",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2018",
        "mon": "9",
        "mon_padded": "09",
        "mon_abbrev": "Sep",
        "mday": "20",
        "mday_padded": "20",
        "yday": "262",
        "isdst": "1",
        "epoch": "1537423200",
        "pretty": "12:00 AM MDT on September 20, 2018",
        "civil": "12:00 AM",
        "month_name": "September",
        "month_name_abbrev": "Sep",
        "weekday_name": "Thursday",
        "weekday_name_night": "Thursday Night",
        "weekday_name_abbrev": "Thu",
        "weekday_name_unlang": "Thursday",
        "weekday_name_night_unlang": "Thursday Night",
        "ampm": "AM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "64.2",
        "metric": "18"
      },
      "dewpoint": {
        "english": "54.2",
        "metric": "12"
      },
      "condition": "Chance of a Thunderstorm",
      "icon": "chancetstorms",
      "icon_url": "http://icons.wxug.com/i/c/k/nt_chancetstorms.gif",
      "fctcode": "14",
      "sky": "76",
      "wspd": {
        "english": "5",
        "metric": "8"
      },
      "wdir": {
        "dir": "ESE",
        "degrees": "109"
      },
      "wx": "Isolated Thunderstorms",
      "uvi": "0",
      "humidity": "70",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "64.2",
        "metric": "18"
      },
      "qpf": {
        "english": "0.01",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "34",
      "mslp": {
        "english": "29.75",
        "metric": "1007"
      }
    },
    {
      "FCTTIME": {
        "hour": "1",
        "hour_padded": "01",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2018",
        "mon": "9",
        "mon_padded": "09",
        "mon_abbrev": "Sep",
        "mday": "20",
        "mday_padded": "20",
        "yday": "262",
        "isdst": "1",
        "epoch": "1537426800",
        "pretty": "1:00 AM MDT on September 20, 2018",
        "civil": "1:00 AM",
        "month_name": "September",
        "month_name_abbrev": "Sep",
        "weekday_name": "Thursday",
        "weekday_name_night": "Thursday Night",
        "weekday_name_abbrev": "Thu",
        "weekday_name_unlang": "Thursday",
        "weekday_name_night_unlang": "Thursday Night",
        "ampm": "AM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "62.1",
        "metric": "17"
      },
      "dewpoint": {
        "english": "54.0",
        "metric": "12"
      },
      "condition": "Overcast",
      "icon": "cloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/nt_cloudy.gif",
      "fctcode": "4",
      "sky": "85",
      "wspd": {
        "english": "6",
        "metric": "10"
      },
      "wdir": {
        "dir": "ESE",
        "degrees": "123"
      },
      "wx": "Cloudy",
      "uvi": "0",
      "humidity": "75",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "62.1",
        "metric": "17"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "23",
      "mslp": {
        "english": "29.76",
        "metric": "1008"
      }
    },
    {
      "FCTTIME": {
        "hour": "2",
        "hour_padded": "02",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2018",
        "mon": "9",
        "mon_padded": "09",
        "mon_abbrev": "Sep",
        "mday": "20",
        "mday_padded": "20",
        "yday": "262",
        "isdst": "1",
        "epoch": "1537430400",
        "pretty": "2:00 AM MDT on September 20, 2018",
        "civil": "2:00 AM",
        "month_name": "September",
        "month_name_abbrev": "Sep",
        "weekday_name": "Thursday",
        "weekday_name_night": "Thursday Night",
        "weekday_name_abbrev": "Thu",
        "weekday_name_unlang": "Thursday",
        "weekday_name_night_unlang": "Thursday Night",
        "ampm": "AM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "61.9",
        "metric": "17"
      },
      "dewpoint": {
        "english": "54.3",
        "metric": "12"
      },
      "condition": "Overcast",
      "icon": "cloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/nt_cloudy.gif",
      "fctcode": "4",
      "sky": "88",
      "wspd": {
        "english": "6",
        "metric": "10"
      },
      "wdir": {
        "dir": "ESE",
        "degrees": "119"
      },
      "wx": "Cloudy",
      "uvi": "0",
      "humidity": "76",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "61.9",
        "metric": "17"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "15",
      "mslp": {
        "english": "29.76",
        "metric": "1008"
      }
    },
    {
      "FCTTIME": {
        "hour": "3",
        "hour_padded": "03",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2018",
        "mon": "9",
        "mon_padded": "09",
        "mon_abbrev": "Sep",
        "mday": "20",
        "mday_padded": "20",
        "yday": "262",
        "isdst": "1",
        "epoch": "1537434000",
        "pretty": "3:00 AM MDT on September 20, 2018",
        "civil": "3:00 AM",
        "month_name": "September",
        "month_name_abbrev": "Sep",
        "weekday_name": "Thursday",
        "weekday_name_night": "Thursday Night",
        "weekday_name_abbrev": "Thu",
        "weekday_name_unlang": "Thursday",
        "weekday_name_night_unlang": "Thursday Night",
        "ampm": "AM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "61.8",
        "metric": "17"
      },
      "dewpoint": {
        "english": "53.9",
        "metric": "12"
      },
      "condition": "Chance of a Thunderstorm",
      "icon": "chancetstorms",
      "icon_url": "http://icons.wxug.com/i/c/k/nt_chancetstorms.gif",
      "fctcode": "14",
      "sky": "87",
      "wspd": {
        "english": "5",
        "metric": "8"
      },
      "wdir": {
        "dir": "SE",
        "degrees": "138"
      },
      "wx": "Scattered Thunderstorms",
      "uvi": "0",
      "humidity": "75",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "61.8",
        "metric": "17"
      },
      "qpf": {
        "english": "0.01",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "37",
      "mslp": {
        "english": "29.76",
        "metric": "1008"
      }
    },
    {
      "FCTTIME": {
        "hour": "4",
        "hour_padded": "04",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2018",
        "mon": "9",
        "mon_padded": "09",
        "mon_abbrev": "Sep",
        "mday": "20",
        "mday_padded": "20",
        "yday": "262",
        "isdst": "1",
        "epoch": "1537437600",
        "pretty": "4:00 AM MDT on September 20, 2018",
        "civil": "4:00 AM",
        "month_name": "September",
        "month_name_abbrev": "Sep",
        "weekday_name": "Thursday",
        "weekday_name_night": "Thursday Night",
        "weekday_name_abbrev": "Thu",
        "weekday_name_unlang": "Thursday",
        "weekday_name_night_unlang": "Thursday Night",
        "ampm": "AM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "61.2",
        "metric": "16"
      },
      "dewpoint": {
        "english": "54.6",
        "metric": "13"
      },
      "condition": "Chance of a Thunderstorm",
      "icon": "chancetstorms",
      "icon_url": "http://icons.wxug.com/i/c/k/nt_chancetstorms.gif",
      "fctcode": "14",
      "sky": "90",
      "wspd": {
        "english": "6",
        "metric": "10"
      },
      "wdir": {
        "dir": "S",
        "degrees": "190"
      },
      "wx": "Scattered Thunderstorms",
      "uvi": "0",
      "humidity": "79",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "61.2",
        "metric": "16"
      },
      "qpf": {
        "english": "0.01",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "45",
      "mslp": {
        "english": "29.76",
        "metric": "1008"
      }
    },
    {
      "FCTTIME": {
        "hour": "5",
        "hour_padded": "05",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2018",
        "mon": "9",
        "mon_padded": "09",
        "mon_abbrev": "Sep",
        "mday": "20",
        "mday_padded": "20",
        "yday": "262",
        "isdst": "1",
        "epoch": "1537441200",
        "pretty": "5:00 AM MDT on September 20, 2018",
        "civil": "5:00 AM",
        "month_name": "September",
        "month_name_abbrev": "Sep",
        "weekday_name": "Thursday",
        "weekday_name_night": "Thursday Night",
        "weekday_name_abbrev": "Thu",
        "weekday_name_unlang": "Thursday",
        "weekday_name_night_unlang": "Thursday Night",
        "ampm": "AM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "60.7",
        "metric": "16"
      },
      "dewpoint": {
        "english": "53.6",
        "metric": "12"
      },
      "condition": "Chance of a Thunderstorm",
      "icon": "chancetstorms",
      "icon_url": "http://icons.wxug.com/i/c/k/nt_chancetstorms.gif",
      "fctcode": "14",
      "sky": "94",
      "wspd": {
        "english": "6",
        "metric": "10"
      },
      "wdir": {
        "dir": "SSE",
        "degrees": "155"
      },
      "wx": "Scattered Thunderstorms",
      "uvi": "0",
      "humidity": "77",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "60.7",
        "metric": "16"
      },
      "qpf": {
        "english": "0.01",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "38",
      "mslp": {
        "english": "29.75",
        "metric": "1007"
      }
    },
    {
      "FCTTIME": {
        "hour": "6",
        "hour_padded": "06",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2018",
        "mon": "9",
        "mon_padded": "09",
        "mon_abbrev": "Sep",
        "mday": "20",
        "mday_padded": "20",
        "yday": "262",
        "isdst": "1",
        "epoch": "1537444800",
        "pretty": "6:00 AM MDT on September 20, 2018",
        "civil": "6:00 AM",
        "month_name": "September",
        "month_name_abbrev": "Sep",
        "weekday_name": "Thursday",
        "weekday_name_night": "Thursday Night",
        "weekday_name_abbrev": "Thu",
        "weekday_name_unlang": "Thursday",
        "weekday_name_night_unlang": "Thursday Night",
        "ampm": "AM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "60.7",
        "metric": "16"
      },
      "dewpoint": {
        "english": "52.2",
        "metric": "11"
      },
      "condition": "Overcast",
      "icon": "cloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/nt_cloudy.gif",
      "fctcode": "4",
      "sky": "97",
      "wspd": {
        "english": "5",
        "metric": "8"
      },
      "wdir": {
        "dir": "S",
        "degrees": "182"
      },
      "wx": "Cloudy",
      "uvi": "0",
      "humidity": "74",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "60.7",
        "metric": "16"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "18",
      "mslp": {
        "english": "29.74",
        "metric": "1007"
      }
    },
    {
      "FCTTIME": {
        "hour": "7",
        "hour_padded": "07",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2018",
        "mon": "9",
        "mon_padded": "09",
        "mon_abbrev": "Sep",
        "mday": "20",
        "mday_padded": "20",
        "yday": "262",
        "isdst": "1",
        "epoch": "1537448400",
        "pretty": "7:00 AM MDT on September 20, 2018",
        "civil": "7:00 AM",
        "month_name": "September",
        "month_name_abbrev": "Sep",
        "weekday_name": "Thursday",
        "weekday_name_night": "Thursday Night",
        "weekday_name_abbrev": "Thu",
        "weekday_name_unlang": "Thursday",
        "weekday_name_night_unlang": "Thursday Night",
        "ampm": "AM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "60.0",
        "metric": "16"
      },
      "dewpoint": {
        "english": "52.0",
        "metric": "11"
      },
      "condition": "Overcast",
      "icon": "cloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/cloudy.gif",
      "fctcode": "4",
      "sky": "94",
      "wspd": {
        "english": "5",
        "metric": "8"
      },
      "wdir": {
        "dir": "SSW",
        "degrees": "209"
      },
      "wx": "Cloudy",
      "uvi": "0",
      "humidity": "75",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "60.0",
        "metric": "16"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "24",
      "mslp": {
        "english": "29.75",
        "metric": "1007"
      }
    },
    {
      "FCTTIME": {
        "hour": "8",
        "hour_padded": "08",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2018",
        "mon": "9",
        "mon_padded": "09",
        "mon_abbrev": "Sep",
        "mday": "20",
        "mday_padded": "20",
        "yday": "262",
        "isdst": "1",
        "epoch": "1537452000",
        "pretty": "8:00 AM MDT on September 20, 2018",
        "civil": "8:00 AM",
        "month_name": "September",
        "month_name_abbrev": "Sep",
        "weekday_name": "Thursday",
        "weekday_name_night": "Thursday Night",
        "weekday_name_abbrev": "Thu",
        "weekday_name_unlang": "Thursday",
        "weekday_name_night_unlang": "Thursday Night",
        "ampm": "AM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "62.0",
        "metric": "17"
      },
      "dewpoint": {
        "english": "52.3",
        "metric": "11"
      },
      "condition": "Overcast",
      "icon": "cloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/cloudy.gif",
      "fctcode": "4",
      "sky": "90",
      "wspd": {
        "english": "5",
        "metric": "8"
      },
      "wdir": {
        "dir": "S",
        "degrees": "184"
      },
      "wx": "Cloudy",
      "uvi": "0",
      "humidity": "71",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "62.0",
        "metric": "17"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "6",
      "mslp": {
        "english": "29.77",
        "metric": "1008"
      }
    },
    {
      "FCTTIME": {
        "hour": "9",
        "hour_padded": "09",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2018",
        "mon": "9",
        "mon_padded": "09",
        "mon_abbrev": "Sep",
        "mday": "20",
        "mday_padded": "20",
        "yday": "262",
        "isdst": "1",
        "epoch": "1537455600",
        "pretty": "9:00 AM MDT on September 20, 2018",
        "civil": "9:00 AM",
        "month_name": "September",
        "month_name_abbrev": "Sep",
        "weekday_name": "Thursday",
        "weekday_name_night": "Thursday Night",
        "weekday_name_abbrev": "Thu",
        "weekday_name_unlang": "Thursday",
        "weekday_name_night_unlang": "Thursday Night",
        "ampm": "AM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "64.7",
        "metric": "18"
      },
      "dewpoint": {
        "english": "51.9",
        "metric": "11"
      },
      "condition": "Overcast",
      "icon": "cloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/cloudy.gif",
      "fctcode": "4",
      "sky": "84",
      "wspd": {
        "english": "5",
        "metric": "8"
      },
      "wdir": {
        "dir": "SW",
        "degrees": "215"
      },
      "wx": "Cloudy",
      "uvi": "1",
      "humidity": "63",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "64.7",
        "metric": "18"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "3",
      "mslp": {
        "english": "29.78",
        "metric": "1008"
      }
    },
    {
      "FCTTIME": {
        "hour": "10",
        "hour_padded": "10",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2018",
        "mon": "9",
        "mon_padded": "09",
        "mon_abbrev": "Sep",
        "mday": "20",
        "mday_padded": "20",
        "yday": "262",
        "isdst": "1",
        "epoch": "1537459200",
        "pretty": "10:00 AM MDT on September 20, 2018",
        "civil": "10:00 AM",
        "month_name": "September",
        "month_name_abbrev": "Sep",
        "weekday_name": "Thursday",
        "weekday_name_night": "Thursday Night",
        "weekday_name_abbrev": "Thu",
        "weekday_name_unlang": "Thursday",
        "weekday_name_night_unlang": "Thursday Night",
        "ampm": "AM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "67.9",
        "metric": "20"
      },
      "dewpoint": {
        "english": "51.0",
        "metric": "11"
      },
      "condition": "Mostly Cloudy",
      "icon": "mostlycloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/mostlycloudy.gif",
      "fctcode": "3",
      "sky": "68",
      "wspd": {
        "english": "4",
        "metric": "6"
      },
      "wdir": {
        "dir": "WSW",
        "degrees": "245"
      },
      "wx": "Mostly Cloudy",
      "uvi": "2",
      "humidity": "55",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "67.9",
        "metric": "20"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "1",
      "mslp": {
        "english": "29.77",
        "metric": "1008"
      }
    },
    {
      "FCTTIME": {
        "hour": "11",
        "hour_padded": "11",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2018",
        "mon": "9",
        "mon_padded": "09",
        "mon_abbrev": "Sep",
        "mday": "20",
        "mday_padded": "20",
        "yday": "262",
        "isdst": "1",
        "epoch": "1537462800",
        "pretty": "11:00 AM MDT on September 20, 2018",
        "civil": "11:00 AM",
        "month_name": "September",
        "month_name_abbrev": "Sep",
        "weekday_name": "Thursday",
        "weekday_name_night": "Thursday Night",
        "weekday_name_abbrev": "Thu",
        "weekday_name_unlang": "Thursday",
        "weekday_name_night_unlang": "Thursday Night",
        "ampm": "AM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "71.1",
        "metric": "22"
      },
      "dewpoint": {
        "english": "46.9",
        "metric": "8"
      },
      "condition": "Partly Cloudy",
      "icon": "partlycloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/partlycloudy.gif",
      "fctcode": "2",
      "sky": "58",
      "wspd": {
        "english": "4",
        "metric": "6"
      },
      "wdir": {
        "dir": "WSW",
        "degrees": "259"
      },
      "wx": "Partly Cloudy",
      "uvi": "4",
      "humidity": "42",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "71.1",
        "metric": "22"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "0",
      "mslp": {
        "english": "29.76",
        "metric": "1008"
      }
    },
    {
      "FCTTIME": {
        "hour": "12",
        "hour_padded": "12",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2018",
        "mon": "9",
        "mon_padded": "09",
        "mon_abbrev": "Sep",
        "mday": "20",
        "mday_padded": "20",
        "yday": "262",
        "isdst": "1",
        "epoch": "1537466400",
        "pretty": "12:00 PM MDT on September 20, 2018",
        "civil": "12:00 PM",
        "month_name": "September",
        "month_name_abbrev": "Sep",
        "weekday_name": "Thursday",
        "weekday_name_night": "Thursday Night",
        "weekday_name_abbrev": "Thu",
        "weekday_name_unlang": "Thursday",
        "weekday_name_night_unlang": "Thursday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "74.9",
        "metric": "24"
      },
      "dewpoint": {
        "english": "43.3",
        "metric": "6"
      },
      "condition": "Partly Cloudy",
      "icon": "partlycloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/partlycloudy.gif",
      "fctcode": "2",
      "sky": "57",
      "wspd": {
        "english": "6",
        "metric": "10"
      },
      "wdir": {
        "dir": "NNW",
        "degrees": "335"
      },
      "wx": "Partly Cloudy",
      "uvi": "6",
      "humidity": "32",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "74.9",
        "metric": "24"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "0",
      "mslp": {
        "english": "29.74",
        "metric": "1007"
      }
    },
    {
      "FCTTIME": {
        "hour": "13",
        "hour_padded": "13",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2018",
        "mon": "9",
        "mon_padded": "09",
        "mon_abbrev": "Sep",
        "mday": "20",
        "mday_padded": "20",
        "yday": "262",
        "isdst": "1",
        "epoch": "1537470000",
        "pretty": "1:00 PM MDT on September 20, 2018",
        "civil": "1:00 PM",
        "month_name": "September",
        "month_name_abbrev": "Sep",
        "weekday_name": "Thursday",
        "weekday_name_night": "Thursday Night",
        "weekday_name_abbrev": "Thu",
        "weekday_name_unlang": "Thursday",
        "weekday_name_night_unlang": "Thursday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "77.4",
        "metric": "25"
      },
      "dewpoint": {
        "english": "41.1",
        "metric": "5"
      },
      "condition": "Partly Cloudy",
      "icon": "partlycloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/partlycloudy.gif",
      "fctcode": "2",
      "sky": "57",
      "wspd": {
        "english": "7",
        "metric": "11"
      },
      "wdir": {
        "dir": "N",
        "degrees": "0"
      },
      "wx": "Partly Cloudy",
      "uvi": "6",
      "humidity": "27",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "77.4",
        "metric": "25"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "0",
      "mslp": {
        "english": "29.72",
        "metric": "1006"
      }
    },
    {
      "FCTTIME": {
        "hour": "14",
        "hour_padded": "14",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2018",
        "mon": "9",
        "mon_padded": "09",
        "mon_abbrev": "Sep",
        "mday": "20",
        "mday_padded": "20",
        "yday": "262",
        "isdst": "1",
        "epoch": "1537473600",
        "pretty": "2:00 PM MDT on September 20, 2018",
        "civil": "2:00 PM",
        "month_name": "September",
        "month_name_abbrev": "Sep",
        "weekday_name": "Thursday",
        "weekday_name_night": "Thursday Night",
        "weekday_name_abbrev": "Thu",
        "weekday_name_unlang": "Thursday",
        "weekday_name_night_unlang": "Thursday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "79.2",
        "metric": "26"
      },
      "dewpoint": {
        "english": "37.7",
        "metric": "3"
      },
      "condition": "Partly Cloudy",
      "icon": "partlycloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/partlycloudy.gif",
      "fctcode": "2",
      "sky": "44",
      "wspd": {
        "english": "8",
        "metric": "13"
      },
      "wdir": {
        "dir": "N",
        "degrees": "353"
      },
      "wx": "Partly Cloudy",
      "uvi": "6",
      "humidity": "23",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "79.2",
        "metric": "26"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "0",
      "mslp": {
        "english": "29.7",
        "metric": "1006"
      }
    },
    {
      "FCTTIME": {
        "hour": "15",
        "hour_padded": "15",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2018",
        "mon": "9",
        "mon_padded": "09",
        "mon_abbrev": "Sep",
        "mday": "20",
        "mday_padded": "20",
        "yday": "262",
        "isdst": "1",
        "epoch": "1537477200",
        "pretty": "3:00 PM MDT on September 20, 2018",
        "civil": "3:00 PM",
        "month_name": "September",
        "month_name_abbrev": "Sep",
        "weekday_name": "Thursday",
        "weekday_name_night": "Thursday Night",
        "weekday_name_abbrev": "Thu",
        "weekday_name_unlang": "Thursday",
        "weekday_name_night_unlang": "Thursday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "79.7",
        "metric": "26"
      },
      "dewpoint": {
        "english": "35.0",
        "metric": "2"
      },
      "condition": "Partly Cloudy",
      "icon": "partlycloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/partlycloudy.gif",
      "fctcode": "2",
      "sky": "40",
      "wspd": {
        "english": "9",
        "metric": "14"
      },
      "wdir": {
        "dir": "N",
        "degrees": "351"
      },
      "wx": "Partly Cloudy",
      "uvi": "4",
      "humidity": "20",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "79.7",
        "metric": "26"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "0",
      "mslp": {
        "english": "29.69",
        "metric": "1005"
      }
    },
    {
      "FCTTIME": {
        "hour": "16",
        "hour_padded": "16",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2018",
        "mon": "9",
        "mon_padded": "09",
        "mon_abbrev": "Sep",
        "mday": "20",
        "mday_padded": "20",
        "yday": "262",
        "isdst": "1",
        "epoch": "1537480800",
        "pretty": "4:00 PM MDT on September 20, 2018",
        "civil": "4:00 PM",
        "month_name": "September",
        "month_name_abbrev": "Sep",
        "weekday_name": "Thursday",
        "weekday_name_night": "Thursday Night",
        "weekday_name_abbrev": "Thu",
        "weekday_name_unlang": "Thursday",
        "weekday_name_night_unlang": "Thursday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "80.3",
        "metric": "27"
      },
      "dewpoint": {
        "english": "32.8",
        "metric": "0"
      },
      "condition": "Partly Cloudy",
      "icon": "partlycloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/partlycloudy.gif",
      "fctcode": "2",
      "sky": "31",
      "wspd": {
        "english": "10",
        "metric": "16"
      },
      "wdir": {
        "dir": "NNE",
        "degrees": "21"
      },
      "wx": "Partly Cloudy",
      "uvi": "3",
      "humidity": "18",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "80.3",
        "metric": "27"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "0",
      "mslp": {
        "english": "29.68",
        "metric": "1005"
      }
    },
    {
      "FCTTIME": {
        "hour": "17",
        "hour_padded": "17",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2018",
        "mon": "9",
        "mon_padded": "09",
        "mon_abbrev": "Sep",
        "mday": "20",
        "mday_padded": "20",
        "yday": "262",
        "isdst": "1",
        "epoch": "1537484400",
        "pretty": "5:00 PM MDT on September 20, 2018",
        "civil": "5:00 PM",
        "month_name": "September",
        "month_name_abbrev": "Sep",
        "weekday_name": "Thursday",
        "weekday_name_night": "Thursday Night",
        "weekday_name_abbrev": "Thu",
        "weekday_name_unlang": "Thursday",
        "weekday_name_night_unlang": "Thursday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "79.8",
        "metric": "27"
      },
      "dewpoint": {
        "english": "32.3",
        "metric": "0"
      },
      "condition": "Clear",
      "icon": "clear",
      "icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
      "fctcode": "1",
      "sky": "26",
      "wspd": {
        "english": "11",
        "metric": "18"
      },
      "wdir": {
        "dir": "NNE",
        "degrees": "30"
      },
      "wx": "Mostly Sunny",
      "uvi": "1",
      "humidity": "18",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "79.8",
        "metric": "27"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "0",
      "mslp": {
        "english": "29.68",
        "metric": "1005"
      }
    },
    {
      "FCTTIME": {
        "hour": "18",
        "hour_padded": "18",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2018",
        "mon": "9",
        "mon_padded": "09",
        "mon_abbrev": "Sep",
        "mday": "20",
        "mday_padded": "20",
        "yday": "262",
        "isdst": "1",
        "epoch": "1537488000",
        "pretty": "6:00 PM MDT on September 20, 2018",
        "civil": "6:00 PM",
        "month_name": "September",
        "month_name_abbrev": "Sep",
        "weekday_name": "Thursday",
        "weekday_name_night": "Thursday Night",
        "weekday_name_abbrev": "Thu",
        "weekday_name_unlang": "Thursday",
        "weekday_name_night_unlang": "Thursday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "78.4",
        "metric": "26"
      },
      "dewpoint": {
        "english": "32.6",
        "metric": "0"
      },
      "condition": "Clear",
      "icon": "clear",
      "icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
      "fctcode": "1",
      "sky": "20",
      "wspd": {
        "english": "12",
        "metric": "19"
      },
      "wdir": {
        "dir": "NE",
        "degrees": "51"
      },
      "wx": "Mostly Sunny",
      "uvi": "0",
      "humidity": "19",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "78.4",
        "metric": "26"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "0",
      "mslp": {
        "english": "29.71",
        "metric": "1006"
      }
    },
    {
      "FCTTIME": {
        "hour": "19",
        "hour_padded": "19",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2018",
        "mon": "9",
        "mon_padded": "09",
        "mon_abbrev": "Sep",
        "mday": "20",
        "mday_padded": "20",
        "yday": "262",
        "isdst": "1",
        "epoch": "1537491600",
        "pretty": "7:00 PM MDT on September 20, 2018",
        "civil": "7:00 PM",
        "month_name": "September",
        "month_name_abbrev": "Sep",
        "weekday_name": "Thursday",
        "weekday_name_night": "Thursday Night",
        "weekday_name_abbrev": "Thu",
        "weekday_name_unlang": "Thursday",
        "weekday_name_night_unlang": "Thursday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "73.6",
        "metric": "23"
      },
      "dewpoint": {
        "english": "32.1",
        "metric": "0"
      },
      "condition": "Clear",
      "icon": "clear",
      "icon_url": "http://icons.wxug.com/i/c/k/nt_clear.gif",
      "fctcode": "1",
      "sky": "3",
      "wspd": {
        "english": "10",
        "metric": "16"
      },
      "wdir": {
        "dir": "ENE",
        "degrees": "67"
      },
      "wx": "Clear",
      "uvi": "0",
      "humidity": "22",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "73.6",
        "metric": "23"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "0",
      "mslp": {
        "english": "29.76",
        "metric": "1008"
      }
    },
    {
      "FCTTIME": {
        "hour": "20",
        "hour_padded": "20",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2018",
        "mon": "9",
        "mon_padded": "09",
        "mon_abbrev": "Sep",
        "mday": "20",
        "mday_padded": "20",
        "yday": "262",
        "isdst": "1",
        "epoch": "1537495200",
        "pretty": "8:00 PM MDT on September 20, 2018",
        "civil": "8:00 PM",
        "month_name": "September",
        "month_name_abbrev": "Sep",
        "weekday_name": "Thursday",
        "weekday_name_night": "Thursday Night",
        "weekday_name_abbrev": "Thu",
        "weekday_name_unlang": "Thursday",
        "weekday_name_night_unlang": "Thursday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "69.5",
        "metric": "21"
      },
      "dewpoint": {
        "english": "32.5",
        "metric": "0"
      },
      "condition": "Clear",
      "icon": "clear",
      "icon_url": "http://icons.wxug.com/i/c/k/nt_clear.gif",
      "fctcode": "1",
      "sky": "26",
      "wspd": {
        "english": "8",
        "metric": "13"
      },
      "wdir": {
        "dir": "E",
        "degrees": "83"
      },
      "wx": "Mostly Clear",
      "uvi": "0",
      "humidity": "25",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "69.5",
        "metric": "21"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "15",
      "mslp": {
        "english": "29.81",
        "metric": "1009"
      }
    },
    {
      "FCTTIME": {
        "hour": "21",
        "hour_padded": "21",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2018",
        "mon": "9",
        "mon_padded": "09",
        "mon_abbrev": "Sep",
        "mday": "20",
        "mday_padded": "20",
        "yday": "262",
        "isdst": "1",
        "epoch": "1537498800",
        "pretty": "9:00 PM MDT on September 20, 2018",
        "civil": "9:00 PM",
        "month_name": "September",
        "month_name_abbrev": "Sep",
        "weekday_name": "Thursday",
        "weekday_name_night": "Thursday Night",
        "weekday_name_abbrev": "Thu",
        "weekday_name_unlang": "Thursday",
        "weekday_name_night_unlang": "Thursday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "66.3",
        "metric": "19"
      },
      "dewpoint": {
        "english": "38.4",
        "metric": "4"
      },
      "condition": "Partly Cloudy",
      "icon": "partlycloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
      "fctcode": "2",
      "sky": "30",
      "wspd": {
        "english": "8",
        "metric": "13"
      },
      "wdir": {
        "dir": "SE",
        "degrees": "138"
      },
      "wx": "Partly Cloudy",
      "uvi": "0",
      "humidity": "36",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "66.3",
        "metric": "19"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "15",
      "mslp": {
        "english": "29.88",
        "metric": "1012"
      }
    },
    {
      "FCTTIME": {
        "hour": "22",
        "hour_padded": "22",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2018",
        "mon": "9",
        "mon_padded": "09",
        "mon_abbrev": "Sep",
        "mday": "20",
        "mday_padded": "20",
        "yday": "262",
        "isdst": "1",
        "epoch": "1537502400",
        "pretty": "10:00 PM MDT on September 20, 2018",
        "civil": "10:00 PM",
        "month_name": "September",
        "month_name_abbrev": "Sep",
        "weekday_name": "Thursday",
        "weekday_name_night": "Thursday Night",
        "weekday_name_abbrev": "Thu",
        "weekday_name_unlang": "Thursday",
        "weekday_name_night_unlang": "Thursday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "63.4",
        "metric": "17"
      },
      "dewpoint": {
        "english": "39.4",
        "metric": "4"
      },
      "condition": "Partly Cloudy",
      "icon": "partlycloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
      "fctcode": "2",
      "sky": "30",
      "wspd": {
        "english": "7",
        "metric": "11"
      },
      "wdir": {
        "dir": "ENE",
        "degrees": "68"
      },
      "wx": "Partly Cloudy",
      "uvi": "0",
      "humidity": "41",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "63.4",
        "metric": "17"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "15",
      "mslp": {
        "english": "29.93",
        "metric": "1014"
      }
    },
    {
      "FCTTIME": {
        "hour": "23",
        "hour_padded": "23",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2018",
        "mon": "9",
        "mon_padded": "09",
        "mon_abbrev": "Sep",
        "mday": "20",
        "mday_padded": "20",
        "yday": "262",
        "isdst": "1",
        "epoch": "1537506000",
        "pretty": "11:00 PM MDT on September 20, 2018",
        "civil": "11:00 PM",
        "month_name": "September",
        "month_name_abbrev": "Sep",
        "weekday_name": "Thursday",
        "weekday_name_night": "Thursday Night",
        "weekday_name_abbrev": "Thu",
        "weekday_name_unlang": "Thursday",
        "weekday_name_night_unlang": "Thursday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "60.8",
        "metric": "16"
      },
      "dewpoint": {
        "english": "39.4",
        "metric": "4"
      },
      "condition": "Clear",
      "icon": "clear",
      "icon_url": "http://icons.wxug.com/i/c/k/nt_clear.gif",
      "fctcode": "1",
      "sky": "26",
      "wspd": {
        "english": "6",
        "metric": "10"
      },
      "wdir": {
        "dir": "ENE",
        "degrees": "69"
      },
      "wx": "Mostly Clear",
      "uvi": "0",
      "humidity": "45",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "60.8",
        "metric": "16"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "15",
      "mslp": {
        "english": "29.97",
        "metric": "1015"
      }
    }
  ]
};

export const tenDayWeatherMock = {
  "response": {
    "version": "0.1",
    "termsofService": "http://www.wunderground.com/weather/api/d/terms.html",
    "features": {
      "geolookup": 1,
      "conditions": 1,
      "hourly": 1,
      "forecast10day": 1
    }
  },
  "location": {
    "type": "CITY",
    "country": "US",
    "country_iso3166": "US",
    "country_name": "USA",
    "state": "CO",
    "city": "Aurora",
    "tz_short": "MDT",
    "tz_long": "America/Denver",
    "lat": "39.620000",
    "lon": "-104.830000",
    "zip": "80015",
    "magic": "1",
    "wmo": "99999",
    "l": "/q/zmw:80015.1.99999",
    "requesturl": "US/CO/Aurora.html",
    "wuiurl": "https://www.wunderground.com/US/CO/Aurora.html",
    "nearby_weather_stations": {
      "airport": {
        "station": [
          {
            "city": "Denver Centennial",
            "state": "CO",
            "country": "US",
            "icao": "KAPA",
            "lat": "39.56999969",
            "lon": "-104.84999847"
          },
          {
            "city": "Aurora",
            "state": "CO",
            "country": "US",
            "icao": "KBKF",
            "lat": "39.70000076",
            "lon": "-104.75000000"
          },
          {
            "city": "Denver",
            "state": "CO",
            "country": "US",
            "icao": "KDEN",
            "lat": "39.86000061",
            "lon": "-104.66999817"
          },
          {
            "city": "Denver",
            "state": "CO",
            "country": "US",
            "icao": "KFTG",
            "lat": "39.79000092",
            "lon": "-104.54000092"
          }
        ]
      },
      "pws": {
        "station": [
          {
            "neighborhood": "Woodgate",
            "city": "Aurora",
            "state": "CO",
            "country": "US",
            "id": "KCOAUROR225",
            "lat": 39.626328,
            "lon": -104.813309,
            "distance_km": 1,
            "distance_mi": 0
          },
          {
            "neighborhood": "The Glen at Piney Creek",
            "city": "Aurora",
            "state": "CO",
            "country": "US",
            "id": "KCOAUROR264",
            "lat": 39.613731,
            "lon": -104.808937,
            "distance_km": 1,
            "distance_mi": 1
          },
          {
            "neighborhood": "Shenandoah on Smoky Hill",
            "city": "Aurora",
            "state": "CO",
            "country": "US",
            "id": "KCOAUROR104",
            "lat": 39.62772,
            "lon": -104.808403,
            "distance_km": 2,
            "distance_mi": 1
          },
          {
            "neighborhood": "Pheasant Run",
            "city": "Aurora",
            "state": "CO",
            "country": "US",
            "id": "KCOAUROR279",
            "lat": 39.629711,
            "lon": -104.799004,
            "distance_km": 2,
            "distance_mi": 1
          },
          {
            "neighborhood": "Piney Creek",
            "city": "Centennial",
            "state": "CO",
            "country": "US",
            "id": "KCOCENTE59",
            "lat": 39.617825,
            "lon": -104.79493,
            "distance_km": 3,
            "distance_mi": 1
          },
          {
            "neighborhood": "backyard",
            "city": "Aurora",
            "state": "CO",
            "country": "US",
            "id": "KCOAUROR189",
            "lat": 39.617485,
            "lon": -104.794411,
            "distance_km": 3,
            "distance_mi": 1
          },
          {
            "neighborhood": "TigerDenWX",
            "city": "Aurora",
            "state": "CO",
            "country": "US",
            "id": "KCOAUROR39",
            "lat": 39.640335,
            "lon": -104.786819,
            "distance_km": 4,
            "distance_mi": 2
          },
          {
            "neighborhood": "Highlands at Piney Creek",
            "city": "Aurora",
            "state": "CO",
            "country": "US",
            "id": "KCOAUROR188",
            "lat": 39.614929,
            "lon": -104.77964,
            "distance_km": 4,
            "distance_mi": 2
          },
          {
            "neighborhood": "Ace Weather @ Chambers & Dartmouth",
            "city": "Aurora",
            "state": "CO",
            "country": "US",
            "id": "KCOAUROR47",
            "lat": 39.660461,
            "lon": -104.809952,
            "distance_km": 4,
            "distance_mi": 2
          },
          {
            "neighborhood": "Summer Valley",
            "city": "Aurora",
            "state": "CO",
            "country": "US",
            "id": "KCOAUROR259",
            "lat": 39.65287,
            "lon": -104.791153,
            "distance_km": 4,
            "distance_mi": 2
          },
          {
            "neighborhood": "The Farm",
            "city": "Aurora",
            "state": "CO",
            "country": "US",
            "id": "KCOAUROR278",
            "lat": 39.596062,
            "lon": -104.775948,
            "distance_km": 5,
            "distance_mi": 3
          },
          {
            "neighborhood": "Vickrey",
            "city": "Aurora",
            "state": "CO",
            "country": "US",
            "id": "KCOAUROR288",
            "lat": 39.627312,
            "lon": -104.767113,
            "distance_km": 5,
            "distance_mi": 3
          },
          {
            "neighborhood": "FLAKELABS",
            "city": "Aurora",
            "state": "CO",
            "country": "US",
            "id": "KCOAUROR166",
            "lat": 39.617828,
            "lon": -104.764313,
            "distance_km": 5,
            "distance_mi": 3
          },
          {
            "neighborhood": "Carriage Place",
            "city": "Aurora",
            "state": "CO",
            "country": "US",
            "id": "KCOAUROR240",
            "lat": 39.64629,
            "lon": -104.773697,
            "distance_km": 5,
            "distance_mi": 3
          },
          {
            "neighborhood": "Piney Creek Ranches West",
            "city": "Aurora",
            "state": "CO",
            "country": "US",
            "id": "KCOAUROR154",
            "lat": 39.601154,
            "lon": -104.768623,
            "distance_km": 5,
            "distance_mi": 3
          },
          {
            "neighborhood": "Prides Crossing",
            "city": "Aurora",
            "state": "CO",
            "country": "US",
            "id": "KCOAUROR292",
            "lat": 39.630203,
            "lon": -104.763687,
            "distance_km": 5,
            "distance_mi": 3
          },
          {
            "neighborhood": "Quincy Reservoir SE",
            "city": "Centennial",
            "state": "CO",
            "country": "US",
            "id": "KCOCENTE62",
            "lat": 39.628494,
            "lon": -104.762611,
            "distance_km": 5,
            "distance_mi": 3
          },
          {
            "neighborhood": "Highpoint",
            "city": "Aurora",
            "state": "CO",
            "country": "US",
            "id": "KCOAUROR147",
            "lat": 39.64444,
            "lon": -104.767349,
            "distance_km": 6,
            "distance_mi": 3
          },
          {
            "neighborhood": "Fox Hill",
            "city": "Aurora",
            "state": "CO",
            "country": "US",
            "id": "KCOAUROR190",
            "lat": 39.62598,
            "lon": -104.75959,
            "distance_km": 6,
            "distance_mi": 3
          },
          {
            "neighborhood": "Buckley/E.Yale",
            "city": "Aurora",
            "state": "CO",
            "country": "US",
            "id": "KCOAUROR33",
            "lat": 39.665672,
            "lon": -104.790642,
            "distance_km": 6,
            "distance_mi": 3
          },
          {
            "neighborhood": "Fox Hill S.E. of Quincy Res",
            "city": "Aurora/Centennial",
            "state": "CO",
            "country": "US",
            "id": "KCOAUROR13",
            "lat": 39.62793,
            "lon": -104.758636,
            "distance_km": 6,
            "distance_mi": 3
          },
          {
            "neighborhood": "E Brunswick Place and E Brown Place",
            "city": "Aurora",
            "state": "CO",
            "country": "US",
            "id": "KCOAUROR43",
            "lat": 39.663101,
            "lon": -104.783684,
            "distance_km": 6,
            "distance_mi": 3
          },
          {
            "neighborhood": "Himalaya Court @ Willow Trace",
            "city": "Aurora",
            "state": "CO",
            "country": "US",
            "id": "KCOAUROR280",
            "lat": 39.62418,
            "lon": -104.752953,
            "distance_km": 6,
            "distance_mi": 3
          },
          {
            "neighborhood": "Willow Trace",
            "city": "Aurora",
            "state": "CO",
            "country": "US",
            "id": "KCOAUROR183",
            "lat": 39.624569,
            "lon": -104.749649,
            "distance_km": 6,
            "distance_mi": 4
          }
        ]
      }
    }
  },
  "current_observation": {
    "image": {
      "url": "http://icons.wxug.com/graphics/wu2/logo_130x80.png",
      "title": "Weather Underground",
      "link": "http://www.wunderground.com"
    },
    "display_location": {
      "full": "Aurora, CO",
      "city": "Aurora",
      "state": "CO",
      "state_name": "Colorado",
      "country": "US",
      "country_iso3166": "US",
      "zip": "80015",
      "magic": "1",
      "wmo": "99999",
      "latitude": "39.620000",
      "longitude": "-104.830000",
      "elevation": "1767.2"
    },
    "observation_location": {
      "full": "Denver Centennial, Colorado",
      "city": "Denver Centennial",
      "state": "Colorado",
      "country": "US",
      "country_iso3166": "US",
      "latitude": "39.63",
      "longitude": "-104.81",
      "elevation": "5735 ft"
    },
    "estimated": {},
    "station_id": "KCOAUROR225",
    "observation_time": "Last Updated on September 19, 11:52 AM MDT",
    "observation_time_rfc822": "Wed, 19 Sep 2018 11:52:04 -0600",
    "observation_epoch": "1537379524",
    "local_time_rfc822": "Wed, 19 Sep 2018 11:52:48 -0600",
    "local_epoch": "1537379568",
    "local_tz_short": "MDT",
    "local_tz_long": "America/Denver",
    "local_tz_offset": "-0600",
    "weather": "",
    "temperature_string": "85.1 F (29.5 C)",
    "temp_f": 85.1,
    "temp_c": 29.5,
    "relative_humidity": "19%",
    "wind_string": "Calm",
    "wind_dir": "NNE",
    "wind_degrees": 19,
    "wind_mph": 0,
    "wind_gust_mph": 0,
    "wind_kph": 0,
    "wind_gust_kph": 0,
    "pressure_mb": "1010",
    "pressure_in": "29.84",
    "pressure_trend": "-",
    "dewpoint_string": "38 F (3 C)",
    "dewpoint_f": 38,
    "dewpoint_c": 3,
    "heat_index_string": "82 F (28 C)",
    "heat_index_f": 82,
    "heat_index_c": 28,
    "windchill_string": "NA",
    "windchill_f": "NA",
    "windchill_c": "NA",
    "feelslike_string": "82 F (28 C)",
    "feelslike_f": "82",
    "feelslike_c": "28",
    "visibility_mi": "10.0",
    "visibility_km": "16.1",
    "solarradiation": "537",
    "UV": "6.0",
    "precip_1hr_string": "0.00 in ( 0 mm)",
    "precip_1hr_in": "0.00",
    "precip_1hr_metric": " 0",
    "precip_today_string": "0.00 in (0 mm)",
    "precip_today_in": "0.00",
    "precip_today_metric": "0",
    "icon": "",
    "icon_url": "http://icons.wxug.com/i/c/k/.gif",
    "forecast_url": "http://www.wunderground.com/US/CO/Aurora.html",
    "history_url": "http://www.wunderground.com/weatherstation/WXDailyHistory.asp?ID=KCOAUROR225",
    "ob_url": "http://www.wunderground.com/cgi-bin/findweather/getForecast?query=39.626328,-104.813309",
    "nowcast": ""
  },
  "forecast": {
    "txt_forecast": {
      "date": "10:53 AM MDT",
      "forecastday": [
        {
          "period": 0,
          "icon": "chancetstorms",
          "icon_url": "http://icons.wxug.com/i/c/k/chancetstorms.gif",
          "title": "Wednesday",
          "fcttext": "Partly to mostly cloudy with scattered showers and thunderstorms developing this afternoon. High 88F. Winds ENE at 10 to 20 mph. Chance of rain 50%.",
          "fcttext_metric": "Partly to mostly cloudy with scattered showers and thunderstorms developing this afternoon. High near 30C. Winds ENE at 15 to 30 km/h. Chance of rain 40%.",
          "pop": "50"
        },
        {
          "period": 1,
          "icon": "nt_chancetstorms",
          "icon_url": "http://icons.wxug.com/i/c/k/nt_chancetstorms.gif",
          "title": "Wednesday Night",
          "fcttext": "Scattered showers and thunderstorms. Low 59F. Winds ESE at 5 to 10 mph. Chance of rain 50%.",
          "fcttext_metric": "Scattered showers and thunderstorms. Low around 15C. Winds ESE at 10 to 15 km/h. Chance of rain 50%.",
          "pop": "50"
        },
        {
          "period": 2,
          "icon": "partlycloudy",
          "icon_url": "http://icons.wxug.com/i/c/k/partlycloudy.gif",
          "title": "Thursday",
          "fcttext": "Cloudy skies early, then partly cloudy in the afternoon. High 82F. SW winds shifting to NNE at 10 to 15 mph.",
          "fcttext_metric": "Cloudy skies early, followed by partial clearing. High 27C. WSW winds shifting to NNE at 15 to 25 km/h.",
          "pop": "20"
        },
        {
          "period": 3,
          "icon": "nt_partlycloudy",
          "icon_url": "http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
          "title": "Thursday Night",
          "fcttext": "Partly cloudy. A stray shower or thunderstorm is possible. Low 49F. Winds NNE at 10 to 15 mph.",
          "fcttext_metric": "A few clouds. A stray shower or thunderstorm is possible. Low 9C. Winds NNE at 10 to 15 km/h.",
          "pop": "20"
        },
        {
          "period": 4,
          "icon": "clear",
          "icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
          "title": "Friday",
          "fcttext": "Sun and a few passing clouds. High 73F. Winds SE at 15 to 25 mph.",
          "fcttext_metric": "Sunshine along with some cloudy intervals. High 23C. Winds SE at 25 to 40 km/h.",
          "pop": "0"
        },
        {
          "period": 5,
          "icon": "nt_clear",
          "icon_url": "http://icons.wxug.com/i/c/k/nt_clear.gif",
          "title": "Friday Night",
          "fcttext": "A mostly clear sky. Low 51F. Winds S at 15 to 25 mph.",
          "fcttext_metric": "Clear skies. Low near 10C. Winds S at 25 to 40 km/h.",
          "pop": "0"
        },
        {
          "period": 6,
          "icon": "clear",
          "icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
          "title": "Saturday",
          "fcttext": "Mainly sunny. High 83F. SW winds shifting to E at 10 to 15 mph.",
          "fcttext_metric": "A mainly sunny sky. High 28C. SW winds shifting to E at 15 to 25 km/h.",
          "pop": "0"
        },
        {
          "period": 7,
          "icon": "nt_clear",
          "icon_url": "http://icons.wxug.com/i/c/k/nt_clear.gif",
          "title": "Saturday Night",
          "fcttext": "Clear skies. Low around 55F. Winds S at 10 to 15 mph.",
          "fcttext_metric": "Clear. Low 12C. Winds S at 15 to 25 km/h.",
          "pop": "0"
        },
        {
          "period": 8,
          "icon": "clear",
          "icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
          "title": "Sunday",
          "fcttext": "Except for a few afternoon clouds, mainly sunny. High near 85F. Winds SE at 5 to 10 mph.",
          "fcttext_metric": "Sunshine and some clouds. High 29C. Winds SE at 10 to 15 km/h.",
          "pop": "0"
        },
        {
          "period": 9,
          "icon": "nt_clear",
          "icon_url": "http://icons.wxug.com/i/c/k/nt_clear.gif",
          "title": "Sunday Night",
          "fcttext": "Mainly clear skies. Low near 55F. Winds SSW at 5 to 10 mph.",
          "fcttext_metric": "A few clouds. Low 12C. Winds SSW at 10 to 15 km/h.",
          "pop": "0"
        },
        {
          "period": 10,
          "icon": "clear",
          "icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
          "title": "Monday",
          "fcttext": "Sun and a few passing clouds. High 81F. WSW winds shifting to NE at 10 to 15 mph.",
          "fcttext_metric": "Plentiful sunshine. High 26C. WSW winds shifting to NE at 15 to 25 km/h.",
          "pop": "0"
        },
        {
          "period": 11,
          "icon": "nt_partlycloudy",
          "icon_url": "http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
          "title": "Monday Night",
          "fcttext": "A few clouds. Low 48F. Winds SE at 5 to 10 mph.",
          "fcttext_metric": "Clear skies with a few passing clouds. Low 9C. Winds SE at 10 to 15 km/h.",
          "pop": "0"
        },
        {
          "period": 12,
          "icon": "clear",
          "icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
          "title": "Tuesday",
          "fcttext": "Sunshine along with some cloudy intervals. A stray shower or thunderstorm is possible. High 68F. Winds SE at 10 to 15 mph.",
          "fcttext_metric": "A few clouds early, otherwise mostly sunny. A stray shower or thunderstorm is possible. High near 20C. SSW winds shifting to E at 15 to 25 km/h.",
          "pop": "20"
        },
        {
          "period": 13,
          "icon": "nt_clear",
          "icon_url": "http://icons.wxug.com/i/c/k/nt_clear.gif",
          "title": "Tuesday Night",
          "fcttext": "Mostly clear. Low near 45F. Winds SE at 10 to 15 mph.",
          "fcttext_metric": "Mostly clear. Low 7C. Winds SE at 15 to 25 km/h.",
          "pop": "20"
        },
        {
          "period": 14,
          "icon": "clear",
          "icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
          "title": "Wednesday",
          "fcttext": "Sun and a few passing clouds. High 69F. Winds E at 10 to 15 mph.",
          "fcttext_metric": "Intervals of clouds and sunshine. High 19C. Winds E at 15 to 25 km/h.",
          "pop": "20"
        },
        {
          "period": 15,
          "icon": "nt_clear",
          "icon_url": "http://icons.wxug.com/i/c/k/nt_clear.gif",
          "title": "Wednesday Night",
          "fcttext": "Clear skies. Low 43F. Winds SSE at 10 to 15 mph.",
          "fcttext_metric": "Clear skies. Low 6C. Winds SSE at 10 to 15 km/h.",
          "pop": "10"
        },
        {
          "period": 16,
          "icon": "clear",
          "icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
          "title": "Thursday",
          "fcttext": "A mainly sunny sky. High 71F. SSW winds shifting to ENE at 10 to 15 mph.",
          "fcttext_metric": "A mainly sunny sky. High 22C. SSW winds shifting to E at 15 to 25 km/h.",
          "pop": "0"
        },
        {
          "period": 17,
          "icon": "nt_clear",
          "icon_url": "http://icons.wxug.com/i/c/k/nt_clear.gif",
          "title": "Thursday Night",
          "fcttext": "Clear. Low 43F. Winds S at 5 to 10 mph.",
          "fcttext_metric": "Clear skies. Low 6C. Winds S at 10 to 15 km/h.",
          "pop": "0"
        },
        {
          "period": 18,
          "icon": "clear",
          "icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
          "title": "Friday",
          "fcttext": "A mainly sunny sky. High around 70F. SSW winds shifting to E at 10 to 15 mph.",
          "fcttext_metric": "A mainly sunny sky. High 21C. Winds ESE at 10 to 15 km/h.",
          "pop": "0"
        },
        {
          "period": 19,
          "icon": "nt_clear",
          "icon_url": "http://icons.wxug.com/i/c/k/nt_clear.gif",
          "title": "Friday Night",
          "fcttext": "Clear skies. Low 44F. Winds S at 10 to 15 mph.",
          "fcttext_metric": "Clear skies. Low 7C. Winds S at 10 to 15 km/h.",
          "pop": "0"
        }
      ]
    },
    "simpleforecast": {
      "forecastday": [
        {
          "date": {
            "epoch": "1537405200",
            "pretty": "7:00 PM MDT on September 19, 2018",
            "day": 19,
            "month": 9,
            "year": 2018,
            "yday": 261,
            "hour": 19,
            "min": "00",
            "sec": 0,
            "isdst": "1",
            "monthname": "September",
            "monthname_short": "Sep",
            "weekday_short": "Wed",
            "weekday": "Wednesday",
            "ampm": "PM",
            "tz_short": "MDT",
            "tz_long": "America/Denver"
          },
          "period": 1,
          "high": {
            "fahrenheit": "88",
            "celsius": "31"
          },
          "low": {
            "fahrenheit": "59",
            "celsius": "15"
          },
          "conditions": "Chance of a Thunderstorm",
          "icon": "chancetstorms",
          "icon_url": "http://icons.wxug.com/i/c/k/chancetstorms.gif",
          "skyicon": "",
          "pop": 50,
          "qpf_allday": {
            "in": 0.16,
            "mm": 4
          },
          "qpf_day": {
            "in": 0.01,
            "mm": 0
          },
          "qpf_night": {
            "in": 0.15,
            "mm": 4
          },
          "snow_allday": {
            "in": 0,
            "cm": 0
          },
          "snow_day": {
            "in": 0,
            "cm": 0
          },
          "snow_night": {
            "in": 0,
            "cm": 0
          },
          "maxwind": {
            "mph": 20,
            "kph": 32,
            "dir": "ENE",
            "degrees": 74
          },
          "avewind": {
            "mph": 13,
            "kph": 21,
            "dir": "ENE",
            "degrees": 74
          },
          "avehumidity": 33,
          "maxhumidity": 65,
          "minhumidity": 15
        },
        {
          "date": {
            "epoch": "1537491600",
            "pretty": "7:00 PM MDT on September 20, 2018",
            "day": 20,
            "month": 9,
            "year": 2018,
            "yday": 262,
            "hour": 19,
            "min": "00",
            "sec": 0,
            "isdst": "1",
            "monthname": "September",
            "monthname_short": "Sep",
            "weekday_short": "Thu",
            "weekday": "Thursday",
            "ampm": "PM",
            "tz_short": "MDT",
            "tz_long": "America/Denver"
          },
          "period": 2,
          "high": {
            "fahrenheit": "82",
            "celsius": "28"
          },
          "low": {
            "fahrenheit": "49",
            "celsius": "9"
          },
          "conditions": "Partly Cloudy",
          "icon": "partlycloudy",
          "icon_url": "http://icons.wxug.com/i/c/k/partlycloudy.gif",
          "skyicon": "",
          "pop": 20,
          "qpf_allday": {
            "in": 0,
            "mm": 0
          },
          "qpf_day": {
            "in": 0,
            "mm": 0
          },
          "qpf_night": {
            "in": 0,
            "mm": 0
          },
          "snow_allday": {
            "in": 0,
            "cm": 0
          },
          "snow_day": {
            "in": 0,
            "cm": 0
          },
          "snow_night": {
            "in": 0,
            "cm": 0
          },
          "maxwind": {
            "mph": 15,
            "kph": 24,
            "dir": "NW",
            "degrees": 324
          },
          "avewind": {
            "mph": 11,
            "kph": 18,
            "dir": "NW",
            "degrees": 324
          },
          "avehumidity": 48,
          "maxhumidity": 79,
          "minhumidity": 18
        },
        {
          "date": {
            "epoch": "1537578000",
            "pretty": "7:00 PM MDT on September 21, 2018",
            "day": 21,
            "month": 9,
            "year": 2018,
            "yday": 263,
            "hour": 19,
            "min": "00",
            "sec": 0,
            "isdst": "1",
            "monthname": "September",
            "monthname_short": "Sep",
            "weekday_short": "Fri",
            "weekday": "Friday",
            "ampm": "PM",
            "tz_short": "MDT",
            "tz_long": "America/Denver"
          },
          "period": 3,
          "high": {
            "fahrenheit": "73",
            "celsius": "23"
          },
          "low": {
            "fahrenheit": "51",
            "celsius": "11"
          },
          "conditions": "Clear",
          "icon": "clear",
          "icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
          "skyicon": "",
          "pop": 0,
          "qpf_allday": {
            "in": 0,
            "mm": 0
          },
          "qpf_day": {
            "in": 0,
            "mm": 0
          },
          "qpf_night": {
            "in": 0,
            "mm": 0
          },
          "snow_allday": {
            "in": 0,
            "cm": 0
          },
          "snow_day": {
            "in": 0,
            "cm": 0
          },
          "snow_night": {
            "in": 0,
            "cm": 0
          },
          "maxwind": {
            "mph": 25,
            "kph": 40,
            "dir": "SE",
            "degrees": 142
          },
          "avewind": {
            "mph": 18,
            "kph": 29,
            "dir": "SE",
            "degrees": 142
          },
          "avehumidity": 54,
          "maxhumidity": 71,
          "minhumidity": 38
        },
        {
          "date": {
            "epoch": "1537664400",
            "pretty": "7:00 PM MDT on September 22, 2018",
            "day": 22,
            "month": 9,
            "year": 2018,
            "yday": 264,
            "hour": 19,
            "min": "00",
            "sec": 0,
            "isdst": "1",
            "monthname": "September",
            "monthname_short": "Sep",
            "weekday_short": "Sat",
            "weekday": "Saturday",
            "ampm": "PM",
            "tz_short": "MDT",
            "tz_long": "America/Denver"
          },
          "period": 4,
          "high": {
            "fahrenheit": "83",
            "celsius": "28"
          },
          "low": {
            "fahrenheit": "55",
            "celsius": "13"
          },
          "conditions": "Clear",
          "icon": "clear",
          "icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
          "skyicon": "",
          "pop": 0,
          "qpf_allday": {
            "in": 0,
            "mm": 0
          },
          "qpf_day": {
            "in": 0,
            "mm": 0
          },
          "qpf_night": {
            "in": 0,
            "mm": 0
          },
          "snow_allday": {
            "in": 0,
            "cm": 0
          },
          "snow_day": {
            "in": 0,
            "cm": 0
          },
          "snow_night": {
            "in": 0,
            "cm": 0
          },
          "maxwind": {
            "mph": 15,
            "kph": 24,
            "dir": "SE",
            "degrees": 133
          },
          "avewind": {
            "mph": 10,
            "kph": 16,
            "dir": "SE",
            "degrees": 133
          },
          "avehumidity": 39,
          "maxhumidity": 70,
          "minhumidity": 12
        },
        {
          "date": {
            "epoch": "1537750800",
            "pretty": "7:00 PM MDT on September 23, 2018",
            "day": 23,
            "month": 9,
            "year": 2018,
            "yday": 265,
            "hour": 19,
            "min": "00",
            "sec": 0,
            "isdst": "1",
            "monthname": "September",
            "monthname_short": "Sep",
            "weekday_short": "Sun",
            "weekday": "Sunday",
            "ampm": "PM",
            "tz_short": "MDT",
            "tz_long": "America/Denver"
          },
          "period": 5,
          "high": {
            "fahrenheit": "85",
            "celsius": "29"
          },
          "low": {
            "fahrenheit": "55",
            "celsius": "13"
          },
          "conditions": "Clear",
          "icon": "clear",
          "icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
          "skyicon": "",
          "pop": 0,
          "qpf_allday": {
            "in": 0,
            "mm": 0
          },
          "qpf_day": {
            "in": 0,
            "mm": 0
          },
          "qpf_night": {
            "in": 0,
            "mm": 0
          },
          "snow_allday": {
            "in": 0,
            "cm": 0
          },
          "snow_day": {
            "in": 0,
            "cm": 0
          },
          "snow_night": {
            "in": 0,
            "cm": 0
          },
          "maxwind": {
            "mph": 10,
            "kph": 16,
            "dir": "SE",
            "degrees": 135
          },
          "avewind": {
            "mph": 9,
            "kph": 14,
            "dir": "SE",
            "degrees": 135
          },
          "avehumidity": 28,
          "maxhumidity": 51,
          "minhumidity": 10
        },
        {
          "date": {
            "epoch": "1537837200",
            "pretty": "7:00 PM MDT on September 24, 2018",
            "day": 24,
            "month": 9,
            "year": 2018,
            "yday": 266,
            "hour": 19,
            "min": "00",
            "sec": 0,
            "isdst": "1",
            "monthname": "September",
            "monthname_short": "Sep",
            "weekday_short": "Mon",
            "weekday": "Monday",
            "ampm": "PM",
            "tz_short": "MDT",
            "tz_long": "America/Denver"
          },
          "period": 6,
          "high": {
            "fahrenheit": "81",
            "celsius": "27"
          },
          "low": {
            "fahrenheit": "48",
            "celsius": "9"
          },
          "conditions": "Clear",
          "icon": "clear",
          "icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
          "skyicon": "",
          "pop": 0,
          "qpf_allday": {
            "in": 0,
            "mm": 0
          },
          "qpf_day": {
            "in": 0,
            "mm": 0
          },
          "qpf_night": {
            "in": 0,
            "mm": 0
          },
          "snow_allday": {
            "in": 0,
            "cm": 0
          },
          "snow_day": {
            "in": 0,
            "cm": 0
          },
          "snow_night": {
            "in": 0,
            "cm": 0
          },
          "maxwind": {
            "mph": 15,
            "kph": 24,
            "dir": "NNW",
            "degrees": 333
          },
          "avewind": {
            "mph": 10,
            "kph": 16,
            "dir": "NNW",
            "degrees": 333
          },
          "avehumidity": 28,
          "maxhumidity": 40,
          "minhumidity": 16
        },
        {
          "date": {
            "epoch": "1537923600",
            "pretty": "7:00 PM MDT on September 25, 2018",
            "day": 25,
            "month": 9,
            "year": 2018,
            "yday": 267,
            "hour": 19,
            "min": "00",
            "sec": 0,
            "isdst": "1",
            "monthname": "September",
            "monthname_short": "Sep",
            "weekday_short": "Tue",
            "weekday": "Tuesday",
            "ampm": "PM",
            "tz_short": "MDT",
            "tz_long": "America/Denver"
          },
          "period": 7,
          "high": {
            "fahrenheit": "68",
            "celsius": "20"
          },
          "low": {
            "fahrenheit": "45",
            "celsius": "7"
          },
          "conditions": "Clear",
          "icon": "clear",
          "icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
          "skyicon": "",
          "pop": 20,
          "qpf_allday": {
            "in": 0,
            "mm": 0
          },
          "qpf_day": {
            "in": 0,
            "mm": 0
          },
          "qpf_night": {
            "in": 0,
            "mm": 0
          },
          "snow_allday": {
            "in": 0,
            "cm": 0
          },
          "snow_day": {
            "in": 0,
            "cm": 0
          },
          "snow_night": {
            "in": 0,
            "cm": 0
          },
          "maxwind": {
            "mph": 15,
            "kph": 24,
            "dir": "SE",
            "degrees": 128
          },
          "avewind": {
            "mph": 11,
            "kph": 18,
            "dir": "SE",
            "degrees": 128
          },
          "avehumidity": 47,
          "maxhumidity": 64,
          "minhumidity": 33
        },
        {
          "date": {
            "epoch": "1538010000",
            "pretty": "7:00 PM MDT on September 26, 2018",
            "day": 26,
            "month": 9,
            "year": 2018,
            "yday": 268,
            "hour": 19,
            "min": "00",
            "sec": 0,
            "isdst": "1",
            "monthname": "September",
            "monthname_short": "Sep",
            "weekday_short": "Wed",
            "weekday": "Wednesday",
            "ampm": "PM",
            "tz_short": "MDT",
            "tz_long": "America/Denver"
          },
          "period": 8,
          "high": {
            "fahrenheit": "69",
            "celsius": "21"
          },
          "low": {
            "fahrenheit": "43",
            "celsius": "6"
          },
          "conditions": "Clear",
          "icon": "clear",
          "icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
          "skyicon": "",
          "pop": 20,
          "qpf_allday": {
            "in": 0,
            "mm": 0
          },
          "qpf_day": {
            "in": 0,
            "mm": 0
          },
          "qpf_night": {
            "in": 0,
            "mm": 0
          },
          "snow_allday": {
            "in": 0,
            "cm": 0
          },
          "snow_day": {
            "in": 0,
            "cm": 0
          },
          "snow_night": {
            "in": 0,
            "cm": 0
          },
          "maxwind": {
            "mph": 15,
            "kph": 24,
            "dir": "E",
            "degrees": 82
          },
          "avewind": {
            "mph": 11,
            "kph": 18,
            "dir": "E",
            "degrees": 82
          },
          "avehumidity": 47,
          "maxhumidity": 71,
          "minhumidity": 25
        },
        {
          "date": {
            "epoch": "1538096400",
            "pretty": "7:00 PM MDT on September 27, 2018",
            "day": 27,
            "month": 9,
            "year": 2018,
            "yday": 269,
            "hour": 19,
            "min": "00",
            "sec": 0,
            "isdst": "1",
            "monthname": "September",
            "monthname_short": "Sep",
            "weekday_short": "Thu",
            "weekday": "Thursday",
            "ampm": "PM",
            "tz_short": "MDT",
            "tz_long": "America/Denver"
          },
          "period": 9,
          "high": {
            "fahrenheit": "71",
            "celsius": "22"
          },
          "low": {
            "fahrenheit": "43",
            "celsius": "6"
          },
          "conditions": "Clear",
          "icon": "clear",
          "icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
          "skyicon": "",
          "pop": 0,
          "qpf_allday": {
            "in": 0,
            "mm": 0
          },
          "qpf_day": {
            "in": 0,
            "mm": 0
          },
          "qpf_night": {
            "in": 0,
            "mm": 0
          },
          "snow_allday": {
            "in": 0,
            "cm": 0
          },
          "snow_day": {
            "in": 0,
            "cm": 0
          },
          "snow_night": {
            "in": 0,
            "cm": 0
          },
          "maxwind": {
            "mph": 15,
            "kph": 24,
            "dir": "SE",
            "degrees": 124
          },
          "avewind": {
            "mph": 10,
            "kph": 16,
            "dir": "SE",
            "degrees": 124
          },
          "avehumidity": 41,
          "maxhumidity": 61,
          "minhumidity": 20
        },
        {
          "date": {
            "epoch": "1538182800",
            "pretty": "7:00 PM MDT on September 28, 2018",
            "day": 28,
            "month": 9,
            "year": 2018,
            "yday": 270,
            "hour": 19,
            "min": "00",
            "sec": 0,
            "isdst": "1",
            "monthname": "September",
            "monthname_short": "Sep",
            "weekday_short": "Fri",
            "weekday": "Friday",
            "ampm": "PM",
            "tz_short": "MDT",
            "tz_long": "America/Denver"
          },
          "period": 10,
          "high": {
            "fahrenheit": "70",
            "celsius": "21"
          },
          "low": {
            "fahrenheit": "44",
            "celsius": "7"
          },
          "conditions": "Clear",
          "icon": "clear",
          "icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
          "skyicon": "",
          "pop": 0,
          "qpf_allday": {
            "in": 0,
            "mm": 0
          },
          "qpf_day": {
            "in": 0,
            "mm": 0
          },
          "qpf_night": {
            "in": 0,
            "mm": 0
          },
          "snow_allday": {
            "in": 0,
            "cm": 0
          },
          "snow_day": {
            "in": 0,
            "cm": 0
          },
          "snow_night": {
            "in": 0,
            "cm": 0
          },
          "maxwind": {
            "mph": 15,
            "kph": 24,
            "dir": "SE",
            "degrees": 128
          },
          "avewind": {
            "mph": 11,
            "kph": 18,
            "dir": "SE",
            "degrees": 128
          },
          "avehumidity": 38,
          "maxhumidity": 51,
          "minhumidity": 23
        }
      ]
    }
  },
  "hourly_forecast": [
    {
      "FCTTIME": {
        "hour": "12",
        "hour_padded": "12",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2018",
        "mon": "9",
        "mon_padded": "09",
        "mon_abbrev": "Sep",
        "mday": "19",
        "mday_padded": "19",
        "yday": "261",
        "isdst": "1",
        "epoch": "1537380000",
        "pretty": "12:00 PM MDT on September 19, 2018",
        "civil": "12:00 PM",
        "month_name": "September",
        "month_name_abbrev": "Sep",
        "weekday_name": "Wednesday",
        "weekday_name_night": "Wednesday Night",
        "weekday_name_abbrev": "Wed",
        "weekday_name_unlang": "Wednesday",
        "weekday_name_night_unlang": "Wednesday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "85.0",
        "metric": "29"
      },
      "dewpoint": {
        "english": "36.0",
        "metric": "2"
      },
      "condition": "Mostly Cloudy",
      "icon": "mostlycloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/mostlycloudy.gif",
      "fctcode": "3",
      "sky": "63",
      "wspd": {
        "english": "10",
        "metric": "16"
      },
      "wdir": {
        "dir": "ENE",
        "degrees": "76"
      },
      "wx": "Mostly Cloudy",
      "uvi": "5",
      "humidity": "18",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "85.0",
        "metric": "29"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "15",
      "mslp": {
        "english": "29.67",
        "metric": "1005"
      }
    },
    {
      "FCTTIME": {
        "hour": "13",
        "hour_padded": "13",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2018",
        "mon": "9",
        "mon_padded": "09",
        "mon_abbrev": "Sep",
        "mday": "19",
        "mday_padded": "19",
        "yday": "261",
        "isdst": "1",
        "epoch": "1537383600",
        "pretty": "1:00 PM MDT on September 19, 2018",
        "civil": "1:00 PM",
        "month_name": "September",
        "month_name_abbrev": "Sep",
        "weekday_name": "Wednesday",
        "weekday_name_night": "Wednesday Night",
        "weekday_name_abbrev": "Wed",
        "weekday_name_unlang": "Wednesday",
        "weekday_name_night_unlang": "Wednesday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "86.9",
        "metric": "30"
      },
      "dewpoint": {
        "english": "34.7",
        "metric": "2"
      },
      "condition": "Mostly Cloudy",
      "icon": "mostlycloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/mostlycloudy.gif",
      "fctcode": "3",
      "sky": "66",
      "wspd": {
        "english": "12",
        "metric": "19"
      },
      "wdir": {
        "dir": "ENE",
        "degrees": "76"
      },
      "wx": "Mostly Cloudy",
      "uvi": "5",
      "humidity": "16",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "86.9",
        "metric": "30"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "15",
      "mslp": {
        "english": "29.64",
        "metric": "1004"
      }
    },
    {
      "FCTTIME": {
        "hour": "14",
        "hour_padded": "14",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2018",
        "mon": "9",
        "mon_padded": "09",
        "mon_abbrev": "Sep",
        "mday": "19",
        "mday_padded": "19",
        "yday": "261",
        "isdst": "1",
        "epoch": "1537387200",
        "pretty": "2:00 PM MDT on September 19, 2018",
        "civil": "2:00 PM",
        "month_name": "September",
        "month_name_abbrev": "Sep",
        "weekday_name": "Wednesday",
        "weekday_name_night": "Wednesday Night",
        "weekday_name_abbrev": "Wed",
        "weekday_name_unlang": "Wednesday",
        "weekday_name_night_unlang": "Wednesday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "88.0",
        "metric": "31"
      },
      "dewpoint": {
        "english": "34.7",
        "metric": "2"
      },
      "condition": "Overcast",
      "icon": "cloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/cloudy.gif",
      "fctcode": "4",
      "sky": "80",
      "wspd": {
        "english": "13",
        "metric": "21"
      },
      "wdir": {
        "dir": "ENE",
        "degrees": "70"
      },
      "wx": "Cloudy",
      "uvi": "4",
      "humidity": "15",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "88.0",
        "metric": "31"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "15",
      "mslp": {
        "english": "29.61",
        "metric": "1003"
      }
    },
    {
      "FCTTIME": {
        "hour": "15",
        "hour_padded": "15",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2018",
        "mon": "9",
        "mon_padded": "09",
        "mon_abbrev": "Sep",
        "mday": "19",
        "mday_padded": "19",
        "yday": "261",
        "isdst": "1",
        "epoch": "1537390800",
        "pretty": "3:00 PM MDT on September 19, 2018",
        "civil": "3:00 PM",
        "month_name": "September",
        "month_name_abbrev": "Sep",
        "weekday_name": "Wednesday",
        "weekday_name_night": "Wednesday Night",
        "weekday_name_abbrev": "Wed",
        "weekday_name_unlang": "Wednesday",
        "weekday_name_night_unlang": "Wednesday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "87.1",
        "metric": "31"
      },
      "dewpoint": {
        "english": "37.0",
        "metric": "3"
      },
      "condition": "Overcast",
      "icon": "cloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/cloudy.gif",
      "fctcode": "4",
      "sky": "90",
      "wspd": {
        "english": "13",
        "metric": "21"
      },
      "wdir": {
        "dir": "E",
        "degrees": "81"
      },
      "wx": "Cloudy",
      "uvi": "2",
      "humidity": "17",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "87.1",
        "metric": "31"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "15",
      "mslp": {
        "english": "29.59",
        "metric": "1002"
      }
    },
    {
      "FCTTIME": {
        "hour": "16",
        "hour_padded": "16",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2018",
        "mon": "9",
        "mon_padded": "09",
        "mon_abbrev": "Sep",
        "mday": "19",
        "mday_padded": "19",
        "yday": "261",
        "isdst": "1",
        "epoch": "1537394400",
        "pretty": "4:00 PM MDT on September 19, 2018",
        "civil": "4:00 PM",
        "month_name": "September",
        "month_name_abbrev": "Sep",
        "weekday_name": "Wednesday",
        "weekday_name_night": "Wednesday Night",
        "weekday_name_abbrev": "Wed",
        "weekday_name_unlang": "Wednesday",
        "weekday_name_night_unlang": "Wednesday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "84.8",
        "metric": "29"
      },
      "dewpoint": {
        "english": "39.1",
        "metric": "4"
      },
      "condition": "Overcast",
      "icon": "cloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/cloudy.gif",
      "fctcode": "4",
      "sky": "81",
      "wspd": {
        "english": "12",
        "metric": "19"
      },
      "wdir": {
        "dir": "E",
        "degrees": "84"
      },
      "wx": "Cloudy",
      "uvi": "2",
      "humidity": "20",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "84.8",
        "metric": "29"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "15",
      "mslp": {
        "english": "29.59",
        "metric": "1002"
      }
    },
    {
      "FCTTIME": {
        "hour": "17",
        "hour_padded": "17",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2018",
        "mon": "9",
        "mon_padded": "09",
        "mon_abbrev": "Sep",
        "mday": "19",
        "mday_padded": "19",
        "yday": "261",
        "isdst": "1",
        "epoch": "1537398000",
        "pretty": "5:00 PM MDT on September 19, 2018",
        "civil": "5:00 PM",
        "month_name": "September",
        "month_name_abbrev": "Sep",
        "weekday_name": "Wednesday",
        "weekday_name_night": "Wednesday Night",
        "weekday_name_abbrev": "Wed",
        "weekday_name_unlang": "Wednesday",
        "weekday_name_night_unlang": "Wednesday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "82.4",
        "metric": "28"
      },
      "dewpoint": {
        "english": "43.3",
        "metric": "6"
      },
      "condition": "Chance of a Thunderstorm",
      "icon": "chancetstorms",
      "icon_url": "http://icons.wxug.com/i/c/k/chancetstorms.gif",
      "fctcode": "14",
      "sky": "85",
      "wspd": {
        "english": "11",
        "metric": "18"
      },
      "wdir": {
        "dir": "ENE",
        "degrees": "78"
      },
      "wx": "Isolated Thunderstorms",
      "uvi": "1",
      "humidity": "25",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "82.4",
        "metric": "28"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "30",
      "mslp": {
        "english": "29.61",
        "metric": "1003"
      }
    },
    {
      "FCTTIME": {
        "hour": "18",
        "hour_padded": "18",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2018",
        "mon": "9",
        "mon_padded": "09",
        "mon_abbrev": "Sep",
        "mday": "19",
        "mday_padded": "19",
        "yday": "261",
        "isdst": "1",
        "epoch": "1537401600",
        "pretty": "6:00 PM MDT on September 19, 2018",
        "civil": "6:00 PM",
        "month_name": "September",
        "month_name_abbrev": "Sep",
        "weekday_name": "Wednesday",
        "weekday_name_night": "Wednesday Night",
        "weekday_name_abbrev": "Wed",
        "weekday_name_unlang": "Wednesday",
        "weekday_name_night_unlang": "Wednesday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "79.1",
        "metric": "26"
      },
      "dewpoint": {
        "english": "45.4",
        "metric": "7"
      },
      "condition": "Chance of a Thunderstorm",
      "icon": "chancetstorms",
      "icon_url": "http://icons.wxug.com/i/c/k/chancetstorms.gif",
      "fctcode": "14",
      "sky": "85",
      "wspd": {
        "english": "13",
        "metric": "21"
      },
      "wdir": {
        "dir": "ENE",
        "degrees": "77"
      },
      "wx": "Scattered Thunderstorms",
      "uvi": "0",
      "humidity": "30",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "79.1",
        "metric": "26"
      },
      "qpf": {
        "english": "0.01",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "47",
      "mslp": {
        "english": "29.64",
        "metric": "1004"
      }
    },
    {
      "FCTTIME": {
        "hour": "19",
        "hour_padded": "19",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2018",
        "mon": "9",
        "mon_padded": "09",
        "mon_abbrev": "Sep",
        "mday": "19",
        "mday_padded": "19",
        "yday": "261",
        "isdst": "1",
        "epoch": "1537405200",
        "pretty": "7:00 PM MDT on September 19, 2018",
        "civil": "7:00 PM",
        "month_name": "September",
        "month_name_abbrev": "Sep",
        "weekday_name": "Wednesday",
        "weekday_name_night": "Wednesday Night",
        "weekday_name_abbrev": "Wed",
        "weekday_name_unlang": "Wednesday",
        "weekday_name_night_unlang": "Wednesday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "75.3",
        "metric": "24"
      },
      "dewpoint": {
        "english": "46.4",
        "metric": "8"
      },
      "condition": "Chance of a Thunderstorm",
      "icon": "chancetstorms",
      "icon_url": "http://icons.wxug.com/i/c/k/chancetstorms.gif",
      "fctcode": "14",
      "sky": "90",
      "wspd": {
        "english": "9",
        "metric": "14"
      },
      "wdir": {
        "dir": "ENE",
        "degrees": "57"
      },
      "wx": "Scattered Thunderstorms",
      "uvi": "0",
      "humidity": "36",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "75.3",
        "metric": "24"
      },
      "qpf": {
        "english": "0.03",
        "metric": "1"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "49",
      "mslp": {
        "english": "29.67",
        "metric": "1005"
      }
    },
    {
      "FCTTIME": {
        "hour": "20",
        "hour_padded": "20",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2018",
        "mon": "9",
        "mon_padded": "09",
        "mon_abbrev": "Sep",
        "mday": "19",
        "mday_padded": "19",
        "yday": "261",
        "isdst": "1",
        "epoch": "1537408800",
        "pretty": "8:00 PM MDT on September 19, 2018",
        "civil": "8:00 PM",
        "month_name": "September",
        "month_name_abbrev": "Sep",
        "weekday_name": "Wednesday",
        "weekday_name_night": "Wednesday Night",
        "weekday_name_abbrev": "Wed",
        "weekday_name_unlang": "Wednesday",
        "weekday_name_night_unlang": "Wednesday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "72.6",
        "metric": "23"
      },
      "dewpoint": {
        "english": "47.7",
        "metric": "9"
      },
      "condition": "Chance of a Thunderstorm",
      "icon": "chancetstorms",
      "icon_url": "http://icons.wxug.com/i/c/k/nt_chancetstorms.gif",
      "fctcode": "14",
      "sky": "86",
      "wspd": {
        "english": "9",
        "metric": "14"
      },
      "wdir": {
        "dir": "N",
        "degrees": "2"
      },
      "wx": "Scattered Thunderstorms",
      "uvi": "0",
      "humidity": "41",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "72.6",
        "metric": "23"
      },
      "qpf": {
        "english": "0.05",
        "metric": "1"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "36",
      "mslp": {
        "english": "29.71",
        "metric": "1006"
      }
    },
    {
      "FCTTIME": {
        "hour": "21",
        "hour_padded": "21",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2018",
        "mon": "9",
        "mon_padded": "09",
        "mon_abbrev": "Sep",
        "mday": "19",
        "mday_padded": "19",
        "yday": "261",
        "isdst": "1",
        "epoch": "1537412400",
        "pretty": "9:00 PM MDT on September 19, 2018",
        "civil": "9:00 PM",
        "month_name": "September",
        "month_name_abbrev": "Sep",
        "weekday_name": "Wednesday",
        "weekday_name_night": "Wednesday Night",
        "weekday_name_abbrev": "Wed",
        "weekday_name_unlang": "Wednesday",
        "weekday_name_night_unlang": "Wednesday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "68.2",
        "metric": "20"
      },
      "dewpoint": {
        "english": "52.2",
        "metric": "11"
      },
      "condition": "Chance of a Thunderstorm",
      "icon": "chancetstorms",
      "icon_url": "http://icons.wxug.com/i/c/k/nt_chancetstorms.gif",
      "fctcode": "14",
      "sky": "73",
      "wspd": {
        "english": "9",
        "metric": "14"
      },
      "wdir": {
        "dir": "N",
        "degrees": "357"
      },
      "wx": "Scattered Thunderstorms",
      "uvi": "0",
      "humidity": "57",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "68.2",
        "metric": "20"
      },
      "qpf": {
        "english": "0.01",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "40",
      "mslp": {
        "english": "29.74",
        "metric": "1007"
      }
    },
    {
      "FCTTIME": {
        "hour": "22",
        "hour_padded": "22",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2018",
        "mon": "9",
        "mon_padded": "09",
        "mon_abbrev": "Sep",
        "mday": "19",
        "mday_padded": "19",
        "yday": "261",
        "isdst": "1",
        "epoch": "1537416000",
        "pretty": "10:00 PM MDT on September 19, 2018",
        "civil": "10:00 PM",
        "month_name": "September",
        "month_name_abbrev": "Sep",
        "weekday_name": "Wednesday",
        "weekday_name_night": "Wednesday Night",
        "weekday_name_abbrev": "Wed",
        "weekday_name_unlang": "Wednesday",
        "weekday_name_night_unlang": "Wednesday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "66.0",
        "metric": "19"
      },
      "dewpoint": {
        "english": "53.2",
        "metric": "12"
      },
      "condition": "Chance of a Thunderstorm",
      "icon": "chancetstorms",
      "icon_url": "http://icons.wxug.com/i/c/k/nt_chancetstorms.gif",
      "fctcode": "14",
      "sky": "63",
      "wspd": {
        "english": "7",
        "metric": "11"
      },
      "wdir": {
        "dir": "ENE",
        "degrees": "64"
      },
      "wx": "Scattered Thunderstorms",
      "uvi": "0",
      "humidity": "63",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "66.0",
        "metric": "19"
      },
      "qpf": {
        "english": "0.01",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "40",
      "mslp": {
        "english": "29.75",
        "metric": "1007"
      }
    },
    {
      "FCTTIME": {
        "hour": "23",
        "hour_padded": "23",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2018",
        "mon": "9",
        "mon_padded": "09",
        "mon_abbrev": "Sep",
        "mday": "19",
        "mday_padded": "19",
        "yday": "261",
        "isdst": "1",
        "epoch": "1537419600",
        "pretty": "11:00 PM MDT on September 19, 2018",
        "civil": "11:00 PM",
        "month_name": "September",
        "month_name_abbrev": "Sep",
        "weekday_name": "Wednesday",
        "weekday_name_night": "Wednesday Night",
        "weekday_name_abbrev": "Wed",
        "weekday_name_unlang": "Wednesday",
        "weekday_name_night_unlang": "Wednesday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "65.0",
        "metric": "18"
      },
      "dewpoint": {
        "english": "53.1",
        "metric": "12"
      },
      "condition": "Mostly Cloudy",
      "icon": "mostlycloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/nt_mostlycloudy.gif",
      "fctcode": "3",
      "sky": "77",
      "wspd": {
        "english": "6",
        "metric": "10"
      },
      "wdir": {
        "dir": "SE",
        "degrees": "124"
      },
      "wx": "Mostly Cloudy",
      "uvi": "0",
      "humidity": "65",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "65.0",
        "metric": "18"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "23",
      "mslp": {
        "english": "29.76",
        "metric": "1008"
      }
    },
    {
      "FCTTIME": {
        "hour": "0",
        "hour_padded": "00",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2018",
        "mon": "9",
        "mon_padded": "09",
        "mon_abbrev": "Sep",
        "mday": "20",
        "mday_padded": "20",
        "yday": "262",
        "isdst": "1",
        "epoch": "1537423200",
        "pretty": "12:00 AM MDT on September 20, 2018",
        "civil": "12:00 AM",
        "month_name": "September",
        "month_name_abbrev": "Sep",
        "weekday_name": "Thursday",
        "weekday_name_night": "Thursday Night",
        "weekday_name_abbrev": "Thu",
        "weekday_name_unlang": "Thursday",
        "weekday_name_night_unlang": "Thursday Night",
        "ampm": "AM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "64.2",
        "metric": "18"
      },
      "dewpoint": {
        "english": "54.2",
        "metric": "12"
      },
      "condition": "Chance of a Thunderstorm",
      "icon": "chancetstorms",
      "icon_url": "http://icons.wxug.com/i/c/k/nt_chancetstorms.gif",
      "fctcode": "14",
      "sky": "76",
      "wspd": {
        "english": "5",
        "metric": "8"
      },
      "wdir": {
        "dir": "ESE",
        "degrees": "109"
      },
      "wx": "Isolated Thunderstorms",
      "uvi": "0",
      "humidity": "70",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "64.2",
        "metric": "18"
      },
      "qpf": {
        "english": "0.01",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "34",
      "mslp": {
        "english": "29.75",
        "metric": "1007"
      }
    },
    {
      "FCTTIME": {
        "hour": "1",
        "hour_padded": "01",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2018",
        "mon": "9",
        "mon_padded": "09",
        "mon_abbrev": "Sep",
        "mday": "20",
        "mday_padded": "20",
        "yday": "262",
        "isdst": "1",
        "epoch": "1537426800",
        "pretty": "1:00 AM MDT on September 20, 2018",
        "civil": "1:00 AM",
        "month_name": "September",
        "month_name_abbrev": "Sep",
        "weekday_name": "Thursday",
        "weekday_name_night": "Thursday Night",
        "weekday_name_abbrev": "Thu",
        "weekday_name_unlang": "Thursday",
        "weekday_name_night_unlang": "Thursday Night",
        "ampm": "AM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "62.1",
        "metric": "17"
      },
      "dewpoint": {
        "english": "54.0",
        "metric": "12"
      },
      "condition": "Overcast",
      "icon": "cloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/nt_cloudy.gif",
      "fctcode": "4",
      "sky": "85",
      "wspd": {
        "english": "6",
        "metric": "10"
      },
      "wdir": {
        "dir": "ESE",
        "degrees": "123"
      },
      "wx": "Cloudy",
      "uvi": "0",
      "humidity": "75",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "62.1",
        "metric": "17"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "23",
      "mslp": {
        "english": "29.76",
        "metric": "1008"
      }
    },
    {
      "FCTTIME": {
        "hour": "2",
        "hour_padded": "02",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2018",
        "mon": "9",
        "mon_padded": "09",
        "mon_abbrev": "Sep",
        "mday": "20",
        "mday_padded": "20",
        "yday": "262",
        "isdst": "1",
        "epoch": "1537430400",
        "pretty": "2:00 AM MDT on September 20, 2018",
        "civil": "2:00 AM",
        "month_name": "September",
        "month_name_abbrev": "Sep",
        "weekday_name": "Thursday",
        "weekday_name_night": "Thursday Night",
        "weekday_name_abbrev": "Thu",
        "weekday_name_unlang": "Thursday",
        "weekday_name_night_unlang": "Thursday Night",
        "ampm": "AM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "61.9",
        "metric": "17"
      },
      "dewpoint": {
        "english": "54.3",
        "metric": "12"
      },
      "condition": "Overcast",
      "icon": "cloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/nt_cloudy.gif",
      "fctcode": "4",
      "sky": "88",
      "wspd": {
        "english": "6",
        "metric": "10"
      },
      "wdir": {
        "dir": "ESE",
        "degrees": "119"
      },
      "wx": "Cloudy",
      "uvi": "0",
      "humidity": "76",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "61.9",
        "metric": "17"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "15",
      "mslp": {
        "english": "29.76",
        "metric": "1008"
      }
    },
    {
      "FCTTIME": {
        "hour": "3",
        "hour_padded": "03",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2018",
        "mon": "9",
        "mon_padded": "09",
        "mon_abbrev": "Sep",
        "mday": "20",
        "mday_padded": "20",
        "yday": "262",
        "isdst": "1",
        "epoch": "1537434000",
        "pretty": "3:00 AM MDT on September 20, 2018",
        "civil": "3:00 AM",
        "month_name": "September",
        "month_name_abbrev": "Sep",
        "weekday_name": "Thursday",
        "weekday_name_night": "Thursday Night",
        "weekday_name_abbrev": "Thu",
        "weekday_name_unlang": "Thursday",
        "weekday_name_night_unlang": "Thursday Night",
        "ampm": "AM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "61.8",
        "metric": "17"
      },
      "dewpoint": {
        "english": "53.9",
        "metric": "12"
      },
      "condition": "Chance of a Thunderstorm",
      "icon": "chancetstorms",
      "icon_url": "http://icons.wxug.com/i/c/k/nt_chancetstorms.gif",
      "fctcode": "14",
      "sky": "87",
      "wspd": {
        "english": "5",
        "metric": "8"
      },
      "wdir": {
        "dir": "SE",
        "degrees": "138"
      },
      "wx": "Scattered Thunderstorms",
      "uvi": "0",
      "humidity": "75",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "61.8",
        "metric": "17"
      },
      "qpf": {
        "english": "0.01",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "37",
      "mslp": {
        "english": "29.76",
        "metric": "1008"
      }
    },
    {
      "FCTTIME": {
        "hour": "4",
        "hour_padded": "04",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2018",
        "mon": "9",
        "mon_padded": "09",
        "mon_abbrev": "Sep",
        "mday": "20",
        "mday_padded": "20",
        "yday": "262",
        "isdst": "1",
        "epoch": "1537437600",
        "pretty": "4:00 AM MDT on September 20, 2018",
        "civil": "4:00 AM",
        "month_name": "September",
        "month_name_abbrev": "Sep",
        "weekday_name": "Thursday",
        "weekday_name_night": "Thursday Night",
        "weekday_name_abbrev": "Thu",
        "weekday_name_unlang": "Thursday",
        "weekday_name_night_unlang": "Thursday Night",
        "ampm": "AM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "61.2",
        "metric": "16"
      },
      "dewpoint": {
        "english": "54.6",
        "metric": "13"
      },
      "condition": "Chance of a Thunderstorm",
      "icon": "chancetstorms",
      "icon_url": "http://icons.wxug.com/i/c/k/nt_chancetstorms.gif",
      "fctcode": "14",
      "sky": "90",
      "wspd": {
        "english": "6",
        "metric": "10"
      },
      "wdir": {
        "dir": "S",
        "degrees": "190"
      },
      "wx": "Scattered Thunderstorms",
      "uvi": "0",
      "humidity": "79",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "61.2",
        "metric": "16"
      },
      "qpf": {
        "english": "0.01",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "45",
      "mslp": {
        "english": "29.76",
        "metric": "1008"
      }
    },
    {
      "FCTTIME": {
        "hour": "5",
        "hour_padded": "05",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2018",
        "mon": "9",
        "mon_padded": "09",
        "mon_abbrev": "Sep",
        "mday": "20",
        "mday_padded": "20",
        "yday": "262",
        "isdst": "1",
        "epoch": "1537441200",
        "pretty": "5:00 AM MDT on September 20, 2018",
        "civil": "5:00 AM",
        "month_name": "September",
        "month_name_abbrev": "Sep",
        "weekday_name": "Thursday",
        "weekday_name_night": "Thursday Night",
        "weekday_name_abbrev": "Thu",
        "weekday_name_unlang": "Thursday",
        "weekday_name_night_unlang": "Thursday Night",
        "ampm": "AM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "60.7",
        "metric": "16"
      },
      "dewpoint": {
        "english": "53.6",
        "metric": "12"
      },
      "condition": "Chance of a Thunderstorm",
      "icon": "chancetstorms",
      "icon_url": "http://icons.wxug.com/i/c/k/nt_chancetstorms.gif",
      "fctcode": "14",
      "sky": "94",
      "wspd": {
        "english": "6",
        "metric": "10"
      },
      "wdir": {
        "dir": "SSE",
        "degrees": "155"
      },
      "wx": "Scattered Thunderstorms",
      "uvi": "0",
      "humidity": "77",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "60.7",
        "metric": "16"
      },
      "qpf": {
        "english": "0.01",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "38",
      "mslp": {
        "english": "29.75",
        "metric": "1007"
      }
    },
    {
      "FCTTIME": {
        "hour": "6",
        "hour_padded": "06",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2018",
        "mon": "9",
        "mon_padded": "09",
        "mon_abbrev": "Sep",
        "mday": "20",
        "mday_padded": "20",
        "yday": "262",
        "isdst": "1",
        "epoch": "1537444800",
        "pretty": "6:00 AM MDT on September 20, 2018",
        "civil": "6:00 AM",
        "month_name": "September",
        "month_name_abbrev": "Sep",
        "weekday_name": "Thursday",
        "weekday_name_night": "Thursday Night",
        "weekday_name_abbrev": "Thu",
        "weekday_name_unlang": "Thursday",
        "weekday_name_night_unlang": "Thursday Night",
        "ampm": "AM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "60.7",
        "metric": "16"
      },
      "dewpoint": {
        "english": "52.2",
        "metric": "11"
      },
      "condition": "Overcast",
      "icon": "cloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/nt_cloudy.gif",
      "fctcode": "4",
      "sky": "97",
      "wspd": {
        "english": "5",
        "metric": "8"
      },
      "wdir": {
        "dir": "S",
        "degrees": "182"
      },
      "wx": "Cloudy",
      "uvi": "0",
      "humidity": "74",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "60.7",
        "metric": "16"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "18",
      "mslp": {
        "english": "29.74",
        "metric": "1007"
      }
    },
    {
      "FCTTIME": {
        "hour": "7",
        "hour_padded": "07",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2018",
        "mon": "9",
        "mon_padded": "09",
        "mon_abbrev": "Sep",
        "mday": "20",
        "mday_padded": "20",
        "yday": "262",
        "isdst": "1",
        "epoch": "1537448400",
        "pretty": "7:00 AM MDT on September 20, 2018",
        "civil": "7:00 AM",
        "month_name": "September",
        "month_name_abbrev": "Sep",
        "weekday_name": "Thursday",
        "weekday_name_night": "Thursday Night",
        "weekday_name_abbrev": "Thu",
        "weekday_name_unlang": "Thursday",
        "weekday_name_night_unlang": "Thursday Night",
        "ampm": "AM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "60.0",
        "metric": "16"
      },
      "dewpoint": {
        "english": "52.0",
        "metric": "11"
      },
      "condition": "Overcast",
      "icon": "cloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/cloudy.gif",
      "fctcode": "4",
      "sky": "94",
      "wspd": {
        "english": "5",
        "metric": "8"
      },
      "wdir": {
        "dir": "SSW",
        "degrees": "209"
      },
      "wx": "Cloudy",
      "uvi": "0",
      "humidity": "75",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "60.0",
        "metric": "16"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "24",
      "mslp": {
        "english": "29.75",
        "metric": "1007"
      }
    },
    {
      "FCTTIME": {
        "hour": "8",
        "hour_padded": "08",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2018",
        "mon": "9",
        "mon_padded": "09",
        "mon_abbrev": "Sep",
        "mday": "20",
        "mday_padded": "20",
        "yday": "262",
        "isdst": "1",
        "epoch": "1537452000",
        "pretty": "8:00 AM MDT on September 20, 2018",
        "civil": "8:00 AM",
        "month_name": "September",
        "month_name_abbrev": "Sep",
        "weekday_name": "Thursday",
        "weekday_name_night": "Thursday Night",
        "weekday_name_abbrev": "Thu",
        "weekday_name_unlang": "Thursday",
        "weekday_name_night_unlang": "Thursday Night",
        "ampm": "AM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "62.0",
        "metric": "17"
      },
      "dewpoint": {
        "english": "52.3",
        "metric": "11"
      },
      "condition": "Overcast",
      "icon": "cloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/cloudy.gif",
      "fctcode": "4",
      "sky": "90",
      "wspd": {
        "english": "5",
        "metric": "8"
      },
      "wdir": {
        "dir": "S",
        "degrees": "184"
      },
      "wx": "Cloudy",
      "uvi": "0",
      "humidity": "71",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "62.0",
        "metric": "17"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "6",
      "mslp": {
        "english": "29.77",
        "metric": "1008"
      }
    },
    {
      "FCTTIME": {
        "hour": "9",
        "hour_padded": "09",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2018",
        "mon": "9",
        "mon_padded": "09",
        "mon_abbrev": "Sep",
        "mday": "20",
        "mday_padded": "20",
        "yday": "262",
        "isdst": "1",
        "epoch": "1537455600",
        "pretty": "9:00 AM MDT on September 20, 2018",
        "civil": "9:00 AM",
        "month_name": "September",
        "month_name_abbrev": "Sep",
        "weekday_name": "Thursday",
        "weekday_name_night": "Thursday Night",
        "weekday_name_abbrev": "Thu",
        "weekday_name_unlang": "Thursday",
        "weekday_name_night_unlang": "Thursday Night",
        "ampm": "AM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "64.7",
        "metric": "18"
      },
      "dewpoint": {
        "english": "51.9",
        "metric": "11"
      },
      "condition": "Overcast",
      "icon": "cloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/cloudy.gif",
      "fctcode": "4",
      "sky": "84",
      "wspd": {
        "english": "5",
        "metric": "8"
      },
      "wdir": {
        "dir": "SW",
        "degrees": "215"
      },
      "wx": "Cloudy",
      "uvi": "1",
      "humidity": "63",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "64.7",
        "metric": "18"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "3",
      "mslp": {
        "english": "29.78",
        "metric": "1008"
      }
    },
    {
      "FCTTIME": {
        "hour": "10",
        "hour_padded": "10",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2018",
        "mon": "9",
        "mon_padded": "09",
        "mon_abbrev": "Sep",
        "mday": "20",
        "mday_padded": "20",
        "yday": "262",
        "isdst": "1",
        "epoch": "1537459200",
        "pretty": "10:00 AM MDT on September 20, 2018",
        "civil": "10:00 AM",
        "month_name": "September",
        "month_name_abbrev": "Sep",
        "weekday_name": "Thursday",
        "weekday_name_night": "Thursday Night",
        "weekday_name_abbrev": "Thu",
        "weekday_name_unlang": "Thursday",
        "weekday_name_night_unlang": "Thursday Night",
        "ampm": "AM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "67.9",
        "metric": "20"
      },
      "dewpoint": {
        "english": "51.0",
        "metric": "11"
      },
      "condition": "Mostly Cloudy",
      "icon": "mostlycloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/mostlycloudy.gif",
      "fctcode": "3",
      "sky": "68",
      "wspd": {
        "english": "4",
        "metric": "6"
      },
      "wdir": {
        "dir": "WSW",
        "degrees": "245"
      },
      "wx": "Mostly Cloudy",
      "uvi": "2",
      "humidity": "55",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "67.9",
        "metric": "20"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "1",
      "mslp": {
        "english": "29.77",
        "metric": "1008"
      }
    },
    {
      "FCTTIME": {
        "hour": "11",
        "hour_padded": "11",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2018",
        "mon": "9",
        "mon_padded": "09",
        "mon_abbrev": "Sep",
        "mday": "20",
        "mday_padded": "20",
        "yday": "262",
        "isdst": "1",
        "epoch": "1537462800",
        "pretty": "11:00 AM MDT on September 20, 2018",
        "civil": "11:00 AM",
        "month_name": "September",
        "month_name_abbrev": "Sep",
        "weekday_name": "Thursday",
        "weekday_name_night": "Thursday Night",
        "weekday_name_abbrev": "Thu",
        "weekday_name_unlang": "Thursday",
        "weekday_name_night_unlang": "Thursday Night",
        "ampm": "AM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "71.1",
        "metric": "22"
      },
      "dewpoint": {
        "english": "46.9",
        "metric": "8"
      },
      "condition": "Partly Cloudy",
      "icon": "partlycloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/partlycloudy.gif",
      "fctcode": "2",
      "sky": "58",
      "wspd": {
        "english": "4",
        "metric": "6"
      },
      "wdir": {
        "dir": "WSW",
        "degrees": "259"
      },
      "wx": "Partly Cloudy",
      "uvi": "4",
      "humidity": "42",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "71.1",
        "metric": "22"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "0",
      "mslp": {
        "english": "29.76",
        "metric": "1008"
      }
    },
    {
      "FCTTIME": {
        "hour": "12",
        "hour_padded": "12",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2018",
        "mon": "9",
        "mon_padded": "09",
        "mon_abbrev": "Sep",
        "mday": "20",
        "mday_padded": "20",
        "yday": "262",
        "isdst": "1",
        "epoch": "1537466400",
        "pretty": "12:00 PM MDT on September 20, 2018",
        "civil": "12:00 PM",
        "month_name": "September",
        "month_name_abbrev": "Sep",
        "weekday_name": "Thursday",
        "weekday_name_night": "Thursday Night",
        "weekday_name_abbrev": "Thu",
        "weekday_name_unlang": "Thursday",
        "weekday_name_night_unlang": "Thursday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "74.9",
        "metric": "24"
      },
      "dewpoint": {
        "english": "43.3",
        "metric": "6"
      },
      "condition": "Partly Cloudy",
      "icon": "partlycloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/partlycloudy.gif",
      "fctcode": "2",
      "sky": "57",
      "wspd": {
        "english": "6",
        "metric": "10"
      },
      "wdir": {
        "dir": "NNW",
        "degrees": "335"
      },
      "wx": "Partly Cloudy",
      "uvi": "6",
      "humidity": "32",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "74.9",
        "metric": "24"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "0",
      "mslp": {
        "english": "29.74",
        "metric": "1007"
      }
    },
    {
      "FCTTIME": {
        "hour": "13",
        "hour_padded": "13",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2018",
        "mon": "9",
        "mon_padded": "09",
        "mon_abbrev": "Sep",
        "mday": "20",
        "mday_padded": "20",
        "yday": "262",
        "isdst": "1",
        "epoch": "1537470000",
        "pretty": "1:00 PM MDT on September 20, 2018",
        "civil": "1:00 PM",
        "month_name": "September",
        "month_name_abbrev": "Sep",
        "weekday_name": "Thursday",
        "weekday_name_night": "Thursday Night",
        "weekday_name_abbrev": "Thu",
        "weekday_name_unlang": "Thursday",
        "weekday_name_night_unlang": "Thursday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "77.4",
        "metric": "25"
      },
      "dewpoint": {
        "english": "41.1",
        "metric": "5"
      },
      "condition": "Partly Cloudy",
      "icon": "partlycloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/partlycloudy.gif",
      "fctcode": "2",
      "sky": "57",
      "wspd": {
        "english": "7",
        "metric": "11"
      },
      "wdir": {
        "dir": "N",
        "degrees": "0"
      },
      "wx": "Partly Cloudy",
      "uvi": "6",
      "humidity": "27",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "77.4",
        "metric": "25"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "0",
      "mslp": {
        "english": "29.72",
        "metric": "1006"
      }
    },
    {
      "FCTTIME": {
        "hour": "14",
        "hour_padded": "14",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2018",
        "mon": "9",
        "mon_padded": "09",
        "mon_abbrev": "Sep",
        "mday": "20",
        "mday_padded": "20",
        "yday": "262",
        "isdst": "1",
        "epoch": "1537473600",
        "pretty": "2:00 PM MDT on September 20, 2018",
        "civil": "2:00 PM",
        "month_name": "September",
        "month_name_abbrev": "Sep",
        "weekday_name": "Thursday",
        "weekday_name_night": "Thursday Night",
        "weekday_name_abbrev": "Thu",
        "weekday_name_unlang": "Thursday",
        "weekday_name_night_unlang": "Thursday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "79.2",
        "metric": "26"
      },
      "dewpoint": {
        "english": "37.7",
        "metric": "3"
      },
      "condition": "Partly Cloudy",
      "icon": "partlycloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/partlycloudy.gif",
      "fctcode": "2",
      "sky": "44",
      "wspd": {
        "english": "8",
        "metric": "13"
      },
      "wdir": {
        "dir": "N",
        "degrees": "353"
      },
      "wx": "Partly Cloudy",
      "uvi": "6",
      "humidity": "23",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "79.2",
        "metric": "26"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "0",
      "mslp": {
        "english": "29.7",
        "metric": "1006"
      }
    },
    {
      "FCTTIME": {
        "hour": "15",
        "hour_padded": "15",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2018",
        "mon": "9",
        "mon_padded": "09",
        "mon_abbrev": "Sep",
        "mday": "20",
        "mday_padded": "20",
        "yday": "262",
        "isdst": "1",
        "epoch": "1537477200",
        "pretty": "3:00 PM MDT on September 20, 2018",
        "civil": "3:00 PM",
        "month_name": "September",
        "month_name_abbrev": "Sep",
        "weekday_name": "Thursday",
        "weekday_name_night": "Thursday Night",
        "weekday_name_abbrev": "Thu",
        "weekday_name_unlang": "Thursday",
        "weekday_name_night_unlang": "Thursday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "79.7",
        "metric": "26"
      },
      "dewpoint": {
        "english": "35.0",
        "metric": "2"
      },
      "condition": "Partly Cloudy",
      "icon": "partlycloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/partlycloudy.gif",
      "fctcode": "2",
      "sky": "40",
      "wspd": {
        "english": "9",
        "metric": "14"
      },
      "wdir": {
        "dir": "N",
        "degrees": "351"
      },
      "wx": "Partly Cloudy",
      "uvi": "4",
      "humidity": "20",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "79.7",
        "metric": "26"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "0",
      "mslp": {
        "english": "29.69",
        "metric": "1005"
      }
    },
    {
      "FCTTIME": {
        "hour": "16",
        "hour_padded": "16",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2018",
        "mon": "9",
        "mon_padded": "09",
        "mon_abbrev": "Sep",
        "mday": "20",
        "mday_padded": "20",
        "yday": "262",
        "isdst": "1",
        "epoch": "1537480800",
        "pretty": "4:00 PM MDT on September 20, 2018",
        "civil": "4:00 PM",
        "month_name": "September",
        "month_name_abbrev": "Sep",
        "weekday_name": "Thursday",
        "weekday_name_night": "Thursday Night",
        "weekday_name_abbrev": "Thu",
        "weekday_name_unlang": "Thursday",
        "weekday_name_night_unlang": "Thursday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "80.3",
        "metric": "27"
      },
      "dewpoint": {
        "english": "32.8",
        "metric": "0"
      },
      "condition": "Partly Cloudy",
      "icon": "partlycloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/partlycloudy.gif",
      "fctcode": "2",
      "sky": "31",
      "wspd": {
        "english": "10",
        "metric": "16"
      },
      "wdir": {
        "dir": "NNE",
        "degrees": "21"
      },
      "wx": "Partly Cloudy",
      "uvi": "3",
      "humidity": "18",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "80.3",
        "metric": "27"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "0",
      "mslp": {
        "english": "29.68",
        "metric": "1005"
      }
    },
    {
      "FCTTIME": {
        "hour": "17",
        "hour_padded": "17",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2018",
        "mon": "9",
        "mon_padded": "09",
        "mon_abbrev": "Sep",
        "mday": "20",
        "mday_padded": "20",
        "yday": "262",
        "isdst": "1",
        "epoch": "1537484400",
        "pretty": "5:00 PM MDT on September 20, 2018",
        "civil": "5:00 PM",
        "month_name": "September",
        "month_name_abbrev": "Sep",
        "weekday_name": "Thursday",
        "weekday_name_night": "Thursday Night",
        "weekday_name_abbrev": "Thu",
        "weekday_name_unlang": "Thursday",
        "weekday_name_night_unlang": "Thursday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "79.8",
        "metric": "27"
      },
      "dewpoint": {
        "english": "32.3",
        "metric": "0"
      },
      "condition": "Clear",
      "icon": "clear",
      "icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
      "fctcode": "1",
      "sky": "26",
      "wspd": {
        "english": "11",
        "metric": "18"
      },
      "wdir": {
        "dir": "NNE",
        "degrees": "30"
      },
      "wx": "Mostly Sunny",
      "uvi": "1",
      "humidity": "18",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "79.8",
        "metric": "27"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "0",
      "mslp": {
        "english": "29.68",
        "metric": "1005"
      }
    },
    {
      "FCTTIME": {
        "hour": "18",
        "hour_padded": "18",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2018",
        "mon": "9",
        "mon_padded": "09",
        "mon_abbrev": "Sep",
        "mday": "20",
        "mday_padded": "20",
        "yday": "262",
        "isdst": "1",
        "epoch": "1537488000",
        "pretty": "6:00 PM MDT on September 20, 2018",
        "civil": "6:00 PM",
        "month_name": "September",
        "month_name_abbrev": "Sep",
        "weekday_name": "Thursday",
        "weekday_name_night": "Thursday Night",
        "weekday_name_abbrev": "Thu",
        "weekday_name_unlang": "Thursday",
        "weekday_name_night_unlang": "Thursday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "78.4",
        "metric": "26"
      },
      "dewpoint": {
        "english": "32.6",
        "metric": "0"
      },
      "condition": "Clear",
      "icon": "clear",
      "icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
      "fctcode": "1",
      "sky": "20",
      "wspd": {
        "english": "12",
        "metric": "19"
      },
      "wdir": {
        "dir": "NE",
        "degrees": "51"
      },
      "wx": "Mostly Sunny",
      "uvi": "0",
      "humidity": "19",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "78.4",
        "metric": "26"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "0",
      "mslp": {
        "english": "29.71",
        "metric": "1006"
      }
    },
    {
      "FCTTIME": {
        "hour": "19",
        "hour_padded": "19",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2018",
        "mon": "9",
        "mon_padded": "09",
        "mon_abbrev": "Sep",
        "mday": "20",
        "mday_padded": "20",
        "yday": "262",
        "isdst": "1",
        "epoch": "1537491600",
        "pretty": "7:00 PM MDT on September 20, 2018",
        "civil": "7:00 PM",
        "month_name": "September",
        "month_name_abbrev": "Sep",
        "weekday_name": "Thursday",
        "weekday_name_night": "Thursday Night",
        "weekday_name_abbrev": "Thu",
        "weekday_name_unlang": "Thursday",
        "weekday_name_night_unlang": "Thursday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "73.6",
        "metric": "23"
      },
      "dewpoint": {
        "english": "32.1",
        "metric": "0"
      },
      "condition": "Clear",
      "icon": "clear",
      "icon_url": "http://icons.wxug.com/i/c/k/nt_clear.gif",
      "fctcode": "1",
      "sky": "3",
      "wspd": {
        "english": "10",
        "metric": "16"
      },
      "wdir": {
        "dir": "ENE",
        "degrees": "67"
      },
      "wx": "Clear",
      "uvi": "0",
      "humidity": "22",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "73.6",
        "metric": "23"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "0",
      "mslp": {
        "english": "29.76",
        "metric": "1008"
      }
    },
    {
      "FCTTIME": {
        "hour": "20",
        "hour_padded": "20",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2018",
        "mon": "9",
        "mon_padded": "09",
        "mon_abbrev": "Sep",
        "mday": "20",
        "mday_padded": "20",
        "yday": "262",
        "isdst": "1",
        "epoch": "1537495200",
        "pretty": "8:00 PM MDT on September 20, 2018",
        "civil": "8:00 PM",
        "month_name": "September",
        "month_name_abbrev": "Sep",
        "weekday_name": "Thursday",
        "weekday_name_night": "Thursday Night",
        "weekday_name_abbrev": "Thu",
        "weekday_name_unlang": "Thursday",
        "weekday_name_night_unlang": "Thursday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "69.5",
        "metric": "21"
      },
      "dewpoint": {
        "english": "32.5",
        "metric": "0"
      },
      "condition": "Clear",
      "icon": "clear",
      "icon_url": "http://icons.wxug.com/i/c/k/nt_clear.gif",
      "fctcode": "1",
      "sky": "26",
      "wspd": {
        "english": "8",
        "metric": "13"
      },
      "wdir": {
        "dir": "E",
        "degrees": "83"
      },
      "wx": "Mostly Clear",
      "uvi": "0",
      "humidity": "25",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "69.5",
        "metric": "21"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "15",
      "mslp": {
        "english": "29.81",
        "metric": "1009"
      }
    },
    {
      "FCTTIME": {
        "hour": "21",
        "hour_padded": "21",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2018",
        "mon": "9",
        "mon_padded": "09",
        "mon_abbrev": "Sep",
        "mday": "20",
        "mday_padded": "20",
        "yday": "262",
        "isdst": "1",
        "epoch": "1537498800",
        "pretty": "9:00 PM MDT on September 20, 2018",
        "civil": "9:00 PM",
        "month_name": "September",
        "month_name_abbrev": "Sep",
        "weekday_name": "Thursday",
        "weekday_name_night": "Thursday Night",
        "weekday_name_abbrev": "Thu",
        "weekday_name_unlang": "Thursday",
        "weekday_name_night_unlang": "Thursday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "66.3",
        "metric": "19"
      },
      "dewpoint": {
        "english": "38.4",
        "metric": "4"
      },
      "condition": "Partly Cloudy",
      "icon": "partlycloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
      "fctcode": "2",
      "sky": "30",
      "wspd": {
        "english": "8",
        "metric": "13"
      },
      "wdir": {
        "dir": "SE",
        "degrees": "138"
      },
      "wx": "Partly Cloudy",
      "uvi": "0",
      "humidity": "36",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "66.3",
        "metric": "19"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "15",
      "mslp": {
        "english": "29.88",
        "metric": "1012"
      }
    },
    {
      "FCTTIME": {
        "hour": "22",
        "hour_padded": "22",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2018",
        "mon": "9",
        "mon_padded": "09",
        "mon_abbrev": "Sep",
        "mday": "20",
        "mday_padded": "20",
        "yday": "262",
        "isdst": "1",
        "epoch": "1537502400",
        "pretty": "10:00 PM MDT on September 20, 2018",
        "civil": "10:00 PM",
        "month_name": "September",
        "month_name_abbrev": "Sep",
        "weekday_name": "Thursday",
        "weekday_name_night": "Thursday Night",
        "weekday_name_abbrev": "Thu",
        "weekday_name_unlang": "Thursday",
        "weekday_name_night_unlang": "Thursday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "63.4",
        "metric": "17"
      },
      "dewpoint": {
        "english": "39.4",
        "metric": "4"
      },
      "condition": "Partly Cloudy",
      "icon": "partlycloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
      "fctcode": "2",
      "sky": "30",
      "wspd": {
        "english": "7",
        "metric": "11"
      },
      "wdir": {
        "dir": "ENE",
        "degrees": "68"
      },
      "wx": "Partly Cloudy",
      "uvi": "0",
      "humidity": "41",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "63.4",
        "metric": "17"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "15",
      "mslp": {
        "english": "29.93",
        "metric": "1014"
      }
    },
    {
      "FCTTIME": {
        "hour": "23",
        "hour_padded": "23",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2018",
        "mon": "9",
        "mon_padded": "09",
        "mon_abbrev": "Sep",
        "mday": "20",
        "mday_padded": "20",
        "yday": "262",
        "isdst": "1",
        "epoch": "1537506000",
        "pretty": "11:00 PM MDT on September 20, 2018",
        "civil": "11:00 PM",
        "month_name": "September",
        "month_name_abbrev": "Sep",
        "weekday_name": "Thursday",
        "weekday_name_night": "Thursday Night",
        "weekday_name_abbrev": "Thu",
        "weekday_name_unlang": "Thursday",
        "weekday_name_night_unlang": "Thursday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "60.8",
        "metric": "16"
      },
      "dewpoint": {
        "english": "39.4",
        "metric": "4"
      },
      "condition": "Clear",
      "icon": "clear",
      "icon_url": "http://icons.wxug.com/i/c/k/nt_clear.gif",
      "fctcode": "1",
      "sky": "26",
      "wspd": {
        "english": "6",
        "metric": "10"
      },
      "wdir": {
        "dir": "ENE",
        "degrees": "69"
      },
      "wx": "Mostly Clear",
      "uvi": "0",
      "humidity": "45",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "60.8",
        "metric": "16"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "15",
      "mslp": {
        "english": "29.97",
        "metric": "1015"
      }
    }
  ]
};

export const mockResponseBlob = {
  type: 'cors',
  url:
    'https://maps.googleapis.com/maps/api/staticmap?cen….3944&key=AIzaSyBtTwcdpPJueSO5IdNwNIF5bhk8kw7aUeo',
  redirected: false,
  status: 200,
  ok: true
};

export const mockImage = {
  size: 26717,
  type: 'image/png'
};

export const mockGetCampsiteReturn = {
  type: 'element',
  name: 'detailDescription',
  attributes: {
    alert:
      'Colorado Parks and Wildlife reserves the right, when necessary, to modify any reservation policies.',
    contractID: 'CO',
    description:
      '  Handicap sites #53HD and #138HD are only reservable through the call center. These sites require a handicap sticker, plate or placard.      Fire danger is high. Contact the park for more details.    Cherry Creek State Park offers a great getaway from the daily grind, with recreation opportunities anchored around a 880 surface-acre lake. Visitors can view birds in their natural habitat. Fun seekers visit the park to enjoy boating, jet and water skiing, sailing, fishing, swimming, biking, horseback riding, and more. It provides the convenience of close-in camping at its 125 sites located on the east side of the reservoir.   For current conditions and more information, please visit the Cherry Creek website: http://cpw.state.co.us/placestogo/Parks/cherrycreek',
    drivingDirection:
      'One mile south of I-225 on Parker Rd., adjacent to Southeast Denver.',
    facilitiesDescription: '',
    facility: 'Cherry Creek State Park',
    facilityID: '50022',
    favorite: 'N',
    fullReservationUrl:
      'https://www.reserveamerica.com/campsiteSearch.do?contractCode=CO&parkId=50022',
    importantInformation:
      'Camping fees do not include the cost of a park pass. There are three group camping loops available to rent. The loops are the Arapahoe, Cherokee, and Chief Ouray. To make reservations for any of the group loops only, please contact the Campground Office at 303-693-3957. To make reservations for individual camp sites, please call 303-470-1144 or 1-800-244-5613. Please do not call the Cherry Creek State Park Campground to make reservations. For additional information ( NOT related to reservations ) please visit our website at www.colorado.gov/parks or call the Campground Registration Office at 303-693-3957. Please use www.cpwshop.com to make, cancel, or change reservations or make any license, pass, or retail purchases. ReserveAmerica.com has limited functionality for CPW customers.',
    latitude: '39.6286111',
    listingOnly: 'N',
    longitude: '-104.8305556',
    nearbyAttrctionDescription: '',
    note:
      'Cherry Creek State Park experiences high use May through October. Delays may occur when entering the park or accessing park facilities during this time, especially on weekends and holidays.',
    orientationDescription: '',
    recreationDescription: '',
    regionName: 'Northeast Region',
    reservationUrl: '/campsiteSearch.do?contractCode=CO&parkId=50022',
    webURL: ''
  },
  elements: [
    {
      type: 'element',
      name: 'address',
      attributes: {
        city: 'Aurora',
        country: 'United States',
        shortName: 'CHCR',
        state: 'Colorado',
        streetAddress: '4201 S. Parker Rd.',
        zip: '80014'
      }
    },
    {
      type: 'element',
      name: 'photo',
      attributes: {
        realUrl: '/webphotos/CO/pid50022/0/180x120.jpg',
        url:
          '<img width="180" height="120" src="/webphotos/CO/pid50022/0/180x120.jpg" class="PopBoxImageSmall" pbsrc="/webphotos/CO/pid50022/0/540x360.jpg" onclick="PopPhoto(this,50,\'PopBoxImageLarge\');"   />'
      }
    },
    {
      type: 'element',
      name: 'photo',
      attributes: {
        realUrl: '/webphotos/CO/pid50022/1/180x120.jpg',
        url:
          '<img width="180" height="120" src="/webphotos/CO/pid50022/1/180x120.jpg" class="PopBoxImageSmall" pbsrc="/webphotos/CO/pid50022/1/540x360.jpg" onclick="PopPhoto(this,50,\'PopBoxImageLarge\');"   />'
      }
    },
    {
      type: 'element',
      name: 'photo',
      attributes: {
        realUrl: '/webphotos/CO/pid50022/2/180x120.jpg',
        url:
          '<img width="180" height="120" src="/webphotos/CO/pid50022/2/180x120.jpg" class="PopBoxImageSmall" pbsrc="/webphotos/CO/pid50022/2/540x360.jpg" onclick="PopPhoto(this,50,\'PopBoxImageLarge\');"   />'
      }
    },
    {
      type: 'element',
      name: 'informationLink',
      attributes: {
        link: '',
        title: ''
      }
    },
    {
      type: 'element',
      name: 'contact',
      attributes: {
        name: 'Direct Line',
        number: ''
      }
    },
    {
      type: 'element',
      name: 'contact',
      attributes: {
        name: 'Ranger Station',
        number: ''
      }
    },
    {
      type: 'element',
      name: 'amenity',
      attributes: {
        distance: 'Within Facility',
        name: 'ADA Access'
      }
    },
    {
      type: 'element',
      name: 'amenity',
      attributes: {
        distance: 'Within Facility',
        name: 'ADA Fish. Access'
      }
    },
    {
      type: 'element',
      name: 'amenity',
      attributes: {
        distance: 'Within Facility',
        name: 'Amphitheater'
      }
    },
    {
      type: 'element',
      name: 'amenity',
      attributes: {
        distance: 'Within Facility',
        name: 'Beach (Swimming)'
      }
    },
    {
      type: 'element',
      name: 'amenity',
      attributes: {
        distance: 'Within Facility',
        name: 'Biking'
      }
    },
    {
      type: 'element',
      name: 'amenity',
      attributes: {
        distance: 'Within Facility',
        name: 'Bird Watching'
      }
    },
    {
      type: 'element',
      name: 'amenity',
      attributes: {
        distance: 'Within Facility',
        name: 'Boat Ramp'
      }
    },
    {
      type: 'element',
      name: 'amenity',
      attributes: {
        distance: 'Within Facility',
        name: 'Boat Rental'
      }
    },
    {
      type: 'element',
      name: 'amenity',
      attributes: {
        distance: 'Within Facility',
        name: 'Boating'
      }
    },
    {
      type: 'element',
      name: 'amenity',
      attributes: {
        distance: 'Within Facility',
        name: 'Camper Services Bldg'
      }
    },
    {
      type: 'element',
      name: 'amenity',
      attributes: {
        distance: 'Within Facility',
        name: 'Comfort Station'
      }
    },
    {
      type: 'element',
      name: 'amenity',
      attributes: {
        distance: 'Within Facility',
        name: 'Dog Training Area'
      }
    },
    {
      type: 'element',
      name: 'amenity',
      attributes: {
        distance: 'Within Facility',
        name: 'Dump Station'
      }
    },
    {
      type: 'element',
      name: 'amenity',
      attributes: {
        distance: 'Within Facility',
        name: 'Firewood Available'
      }
    },
    {
      type: 'element',
      name: 'amenity',
      attributes: {
        distance: 'Within Facility',
        name: 'Fishing'
      }
    },
    {
      type: 'element',
      name: 'amenity',
      attributes: {
        distance: 'Within Facility',
        name: 'Group Campground'
      }
    },
    {
      type: 'element',
      name: 'amenity',
      attributes: {
        distance: 'Within Facility',
        name: 'Group Camping'
      }
    },
    {
      type: 'element',
      name: 'amenity',
      attributes: {
        distance: 'Within Facility',
        name: 'Group Pavilions Available'
      }
    },
    {
      type: 'element',
      name: 'amenity',
      attributes: {
        distance: 'Within Facility',
        name: 'Group Picnic Area'
      }
    },
    {
      type: 'element',
      name: 'amenity',
      attributes: {
        distance: 'Within Facility',
        name: 'Group Picnicking'
      }
    },
    {
      type: 'element',
      name: 'amenity',
      attributes: {
        distance: 'Within Facility',
        name: 'Hiking'
      }
    },
    {
      type: 'element',
      name: 'amenity',
      attributes: {
        distance: 'Within Facility',
        name: 'Historical Site(S)'
      }
    },
    {
      type: 'element',
      name: 'amenity',
      attributes: {
        distance: 'Within Facility',
        name: 'Horseback Riding'
      }
    },
    {
      type: 'element',
      name: 'amenity',
      attributes: {
        distance: 'Within Facility',
        name: 'Ice Fishing'
      }
    },
    {
      type: 'element',
      name: 'amenity',
      attributes: {
        distance: 'Within Facility',
        name: 'Interpretitive Programs'
      }
    },
    {
      type: 'element',
      name: 'amenity',
      attributes: {
        distance: 'Within Facility',
        name: 'Jet Ski Rental'
      }
    },
    {
      type: 'element',
      name: 'amenity',
      attributes: {
        distance: 'Within Facility',
        name: 'Jet Skiing'
      }
    },
    {
      type: 'element',
      name: 'amenity',
      attributes: {
        distance: 'Within Facility',
        name: 'Laundry'
      }
    },
    {
      type: 'element',
      name: 'amenity',
      attributes: {
        distance: 'Within Facility',
        name: 'Laundry Facilities'
      }
    },
    {
      type: 'element',
      name: 'amenity',
      attributes: {
        distance: 'Within Facility',
        name: 'Marina'
      }
    },
    {
      type: 'element',
      name: 'amenity',
      attributes: {
        distance: 'Within Facility',
        name: 'Model Airplane Field'
      }
    },
    {
      type: 'element',
      name: 'amenity',
      attributes: {
        distance: 'Within Facility',
        name: 'Model Airplane Flying'
      }
    },
    {
      type: 'element',
      name: 'amenity',
      attributes: {
        distance: 'Within Facility',
        name: 'Natural Shade'
      }
    },
    {
      type: 'element',
      name: 'amenity',
      attributes: {
        distance: 'Within Facility',
        name: 'Nature Study Exhibits'
      }
    },
    {
      type: 'element',
      name: 'amenity',
      attributes: {
        distance: 'Within Facility',
        name: 'Pay Phones Available'
      }
    },
    {
      type: 'element',
      name: 'amenity',
      attributes: {
        distance: 'Within Facility',
        name: 'Photography'
      }
    },
    {
      type: 'element',
      name: 'amenity',
      attributes: {
        distance: 'Within Facility',
        name: 'Picnicking'
      }
    },
    {
      type: 'element',
      name: 'amenity',
      attributes: {
        distance: 'Within Facility',
        name: 'Ranger Station'
      }
    },
    {
      type: 'element',
      name: 'amenity',
      attributes: {
        distance: 'Within Facility',
        name: 'Sailing And Sailboarding'
      }
    },
    {
      type: 'element',
      name: 'amenity',
      attributes: {
        distance: 'Within Facility',
        name: 'Shooting Ranges'
      }
    },
    {
      type: 'element',
      name: 'amenity',
      attributes: {
        distance: 'Within Facility',
        name: 'Showers'
      }
    },
    {
      type: 'element',
      name: 'amenity',
      attributes: {
        distance: 'Within Facility',
        name: 'Snack Br Concession'
      }
    },
    {
      type: 'element',
      name: 'amenity',
      attributes: {
        distance: 'Within Facility',
        name: 'Stables'
      }
    },
    {
      type: 'element',
      name: 'amenity',
      attributes: {
        distance: 'Within Facility',
        name: 'Swimming'
      }
    },
    {
      type: 'element',
      name: 'amenity',
      attributes: {
        distance: 'Within Facility',
        name: 'Telephone'
      }
    },
    {
      type: 'element',
      name: 'amenity',
      attributes: {
        distance: 'Within Facility',
        name: 'Volleyball'
      }
    },
    {
      type: 'element',
      name: 'amenity',
      attributes: {
        distance: 'Within Facility',
        name: 'Water Skiing'
      }
    },
    {
      type: 'element',
      name: 'amenity',
      attributes: {
        distance: 'Within Facility',
        name: 'Wi-Fi Connection'
      }
    },
    {
      type: 'element',
      name: 'amenity',
      attributes: {
        distance: 'Within Facility',
        name: 'Wildlife Watching Opportunity'
      }
    },
    {
      type: 'element',
      name: 'bulletin',
      attributes: {
        description:
          '&lt;p&gt;Attention Colorado Parks and Wildlife Customers: please use &lt;a href=&quot;https://www.cpwshop.com/home.page&quot;&gt;www.cpwshop.com&lt;/a&gt; to make, cancel, or change reservations or make any license, pass, or retail purchases. &lt;a href=&quot;https://www.reserveamerica.com/&quot;&gt;ReserveAmerica.com&lt;/a&gt; has limited functionality for CPW customers.&lt;/p&gt;',
        headline: 'Attention'
      }
    }
  ]
};

export const mockText = `<detailDescription alert="Colorado Parks and Wildlife reserves the right, when necessary, to modify any reservation policies." contractID="CO" description="  Handicap sites #53HD and #138HD are only reservable through the call center. These sites require a handicap sticker, plate or placard.      Fire danger is high. Contact the park for more details.    Cherry Creek State Park offers a great getaway from the daily grind, with recreation opportunities anchored around a 880 surface-acre lake. Visitors can view birds in their natural habitat. Fun seekers visit the park to enjoy boating, jet and water skiing, sailing, fishing, swimming, biking, horseback riding, and more. It provides the convenience of close-in camping at its 125 sites located on the east side of the reservoir.   For current conditions and more information, please visit the Cherry Creek website: http://cpw.state.co.us/placestogo/Parks/cherrycreek" drivingDirection="One mile south of I-225 on Parker Rd., adjacent to Southeast Denver." facilitiesDescription="" facility="Cherry Creek State Park" facilityID="50022" favorite="N" fullReservationUrl="https://www.reserveamerica.com/campsiteSearch.do?contractCode=CO&amp;parkId=50022" importantInformation="Camping fees do not include the cost of a park pass. There are three group camping loops available to rent. The loops are the Arapahoe, Cherokee, and Chief Ouray. To make reservations for any of the group loops only, please contact the Campground Office at 303-693-3957. To make reservations for individual camp sites, please call 303-470-1144 or 1-800-244-5613. Please do not call the Cherry Creek State Park Campground to make reservations. For additional information ( NOT related to reservations ) please visit our website at www.colorado.gov/parks or call the Campground Registration Office at 303-693-3957. Please use www.cpwshop.com to make, cancel, or change reservations or make any license, pass, or retail purchases. ReserveAmerica.com has limited functionality for CPW customers." latitude="39.6286111" listingOnly="N" longitude="-104.8305556" nearbyAttrctionDescription="" note="Cherry Creek State Park experiences high use May through October. Delays may occur when entering the park or accessing park facilities during this time, especially on weekends and holidays." orientationDescription="" recreationDescription="" regionName="Northeast Region" reservationUrl="/campsiteSearch.do?contractCode=CO&amp;parkId=50022" webURL="">
<address city="Aurora" country="United States" shortName="CHCR" state="Colorado" streetAddress="4201 S. Parker Rd." zip="80014"/>
<photo realUrl="/webphotos/CO/pid50022/0/180x120.jpg" url="&lt;img width=&quot;180&quot; height=&quot;120&quot; src=&quot;/webphotos/CO/pid50022/0/180x120.jpg&quot; class=&quot;PopBoxImageSmall&quot; pbsrc=&quot;/webphotos/CO/pid50022/0/540x360.jpg&quot; onclick=&quot;PopPhoto(this,50,'PopBoxImageLarge');&quot;   /&gt;"/>
<photo realUrl="/webphotos/CO/pid50022/1/180x120.jpg" url="&lt;img width=&quot;180&quot; height=&quot;120&quot; src=&quot;/webphotos/CO/pid50022/1/180x120.jpg&quot; class=&quot;PopBoxImageSmall&quot; pbsrc=&quot;/webphotos/CO/pid50022/1/540x360.jpg&quot; onclick=&quot;PopPhoto(this,50,'PopBoxImageLarge');&quot;   /&gt;"/>
<photo realUrl="/webphotos/CO/pid50022/2/180x120.jpg" url="&lt;img width=&quot;180&quot; height=&quot;120&quot; src=&quot;/webphotos/CO/pid50022/2/180x120.jpg&quot; class=&quot;PopBoxImageSmall&quot; pbsrc=&quot;/webphotos/CO/pid50022/2/540x360.jpg&quot; onclick=&quot;PopPhoto(this,50,'PopBoxImageLarge');&quot;   /&gt;"/>
<informationLink link="" title=""/>
<contact name="Direct Line" number=""/>
<contact name="Ranger Station" number=""/>
<amenity distance="Within Facility" name="ADA Access"/>
<amenity distance="Within Facility" name="ADA Fish. Access"/>
<amenity distance="Within Facility" name="Amphitheater"/>
<amenity distance="Within Facility" name="Beach (Swimming)"/>
<amenity distance="Within Facility" name="Biking"/>
<amenity distance="Within Facility" name="Bird Watching"/>
<amenity distance="Within Facility" name="Boat Ramp"/>
<amenity distance="Within Facility" name="Boat Rental"/>
<amenity distance="Within Facility" name="Boating"/>
<amenity distance="Within Facility" name="Camper Services Bldg"/>
<amenity distance="Within Facility" name="Comfort Station"/>
<amenity distance="Within Facility" name="Dog Training Area"/>
<amenity distance="Within Facility" name="Dump Station"/>
<amenity distance="Within Facility" name="Firewood Available"/>
<amenity distance="Within Facility" name="Fishing"/>
<amenity distance="Within Facility" name="Group Campground"/>
<amenity distance="Within Facility" name="Group Camping"/>
<amenity distance="Within Facility" name="Group Pavilions Available"/>
<amenity distance="Within Facility" name="Group Picnic Area"/>
<amenity distance="Within Facility" name="Group Picnicking"/>
<amenity distance="Within Facility" name="Hiking"/>
<amenity distance="Within Facility" name="Historical Site(S)"/>
<amenity distance="Within Facility" name="Horseback Riding"/>
<amenity distance="Within Facility" name="Ice Fishing"/>
<amenity distance="Within Facility" name="Interpretitive Programs"/>
<amenity distance="Within Facility" name="Jet Ski Rental"/>
<amenity distance="Within Facility" name="Jet Skiing"/>
<amenity distance="Within Facility" name="Laundry"/>
<amenity distance="Within Facility" name="Laundry Facilities"/>
<amenity distance="Within Facility" name="Marina"/>
<amenity distance="Within Facility" name="Model Airplane Field"/>
<amenity distance="Within Facility" name="Model Airplane Flying"/>
<amenity distance="Within Facility" name="Natural Shade"/>
<amenity distance="Within Facility" name="Nature Study Exhibits"/>
<amenity distance="Within Facility" name="Pay Phones Available"/>
<amenity distance="Within Facility" name="Photography"/>
<amenity distance="Within Facility" name="Picnicking"/>
<amenity distance="Within Facility" name="Ranger Station"/>
<amenity distance="Within Facility" name="Sailing And Sailboarding"/>
<amenity distance="Within Facility" name="Shooting Ranges"/>
<amenity distance="Within Facility" name="Showers"/>
<amenity distance="Within Facility" name="Snack Br Concession"/>
<amenity distance="Within Facility" name="Stables"/>
<amenity distance="Within Facility" name="Swimming"/>
<amenity distance="Within Facility" name="Telephone"/>
<amenity distance="Within Facility" name="Volleyball"/>
<amenity distance="Within Facility" name="Water Skiing"/>
<amenity distance="Within Facility" name="Wi-Fi Connection"/>
<amenity distance="Within Facility" name="Wildlife Watching Opportunity"/>
<bulletin description="&amp;lt;p&amp;gt;Attention Colorado Parks and Wildlife Customers: please use &amp;lt;a href=&amp;quot;https://www.cpwshop.com/home.page&amp;quot;&amp;gt;www.cpwshop.com&amp;lt;/a&amp;gt; to make, cancel, or change reservations or make any license, pass, or retail purchases. &amp;lt;a href=&amp;quot;https://www.reserveamerica.com/&amp;quot;&amp;gt;ReserveAmerica.com&amp;lt;/a&amp;gt; has limited functionality for CPW customers.&amp;lt;/p&amp;gt;" headline="Attention"/>
</detailDescription>`;
