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

export const mockGetCampsiteListReturn = [
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "Y",
      "contractID": "IND2",
      "contractType": "PRIVATE",
      "facilityID": "720142",
      "facilityName": "Rent an RV for Your Next Adventure",
      "faciltyPhoto": "/webphotos/IND2/pid720142/0/80x53.jpg",
      "favorite": "N",
      "latitude": "39.7302833",
      "listingOnly": "Y",
      "longitude": "-104.9525917",
      "regionName": "",
      "reservationChannel": "Web Reservable",
      "shortName": "M042",
      "sitesWithAmps": "Y",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "Lakefront",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "Y",
      "contractID": "INDP",
      "contractType": "PRIVATE",
      "facilityID": "721016",
      "facilityName": "South Park Mobile Home and RV Community",
      "faciltyPhoto": "/webphotos/INDP/pid721016/0/80x53.jpg",
      "favorite": "N",
      "latitude": "39.6493861",
      "listingOnly": "Y",
      "longitude": "-105.024525",
      "regionName": "",
      "reservationChannel": "Web Reservable",
      "shortName": "GS0916",
      "sitesWithAmps": "Y",
      "sitesWithPetsAllowed": "N",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "Y",
      "contractID": "ELSI",
      "contractType": "PRIVATE",
      "facilityID": "740650",
      "facilityName": "Golden Terrace South RV Resort",
      "faciltyPhoto": "/webphotos/ELSI/pid740650/0/80x53.jpg",
      "favorite": "N",
      "latitude": "39.7208611",
      "listingOnly": "Y",
      "longitude": "-105.2009167",
      "regionName": "",
      "reservationChannel": "Web Reservable",
      "shortName": "A650",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "N",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "Y",
      "contractID": "INDP",
      "contractType": "PRIVATE",
      "facilityID": "722069",
      "facilityName": "Dakota Ridge RV Resort",
      "faciltyPhoto": "/webphotos/INDP/pid722069/0/80x53.jpg",
      "favorite": "N",
      "latitude": "39.7195194",
      "listingOnly": "Y",
      "longitude": "-105.2012389",
      "regionName": "",
      "reservationChannel": "Web Reservable",
      "shortName": "GS1969",
      "sitesWithAmps": "Y",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "CO",
      "contractType": "STATE",
      "facilityID": "50022",
      "facilityName": "Cherry Creek State Park",
      "faciltyPhoto": "/webphotos/CO/pid50022/0/80x53.jpg",
      "favorite": "N",
      "latitude": "39.6286111",
      "listingOnly": "N",
      "longitude": "-104.8305556",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "CHCR",
      "sitesWithAmps": "Y",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "Y",
      "sitesWithWaterHookup": "Y",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "CO",
      "contractType": "STATE",
      "facilityID": "50021",
      "facilityName": "Chatfield State Park",
      "faciltyPhoto": "/webphotos/CO/pid50021/0/80x53.jpg",
      "favorite": "N",
      "latitude": "39.5380556",
      "listingOnly": "N",
      "longitude": "-105.0872222",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "CHSR",
      "sitesWithAmps": "Y",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "Y",
      "sitesWithWaterHookup": "Y",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "CO",
      "contractType": "STATE",
      "facilityID": "50025",
      "facilityName": "Golden Gate Canyon State Park",
      "faciltyPhoto": "/webphotos/CO/pid50025/0/80x53.jpg",
      "favorite": "N",
      "latitude": "39.8313",
      "listingOnly": "N",
      "longitude": "-105.4104667",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "GOGA",
      "sitesWithAmps": "Y",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "73811",
      "facilityName": "INDIAN CREEK EQUESTRIAN CAMPGROUND",
      "faciltyPhoto": "/webphotos/NRSO/pid73811/0/80x53.jpg",
      "favorite": "N",
      "latitude": "39.3916667",
      "listingOnly": "N",
      "longitude": "-105.1088889",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "ICEC",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "113589",
      "facilityName": "SQUAW MOUNTAIN FIRE LOOKOUT",
      "faciltyPhoto": "/webphotos/NRSO/pid113589/0/80x53.jpg",
      "favorite": "N",
      "latitude": "39.6788889",
      "listingOnly": "N",
      "longitude": "-105.4927778",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "E589",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "N",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "CO",
      "contractType": "STATE",
      "facilityID": "56101",
      "facilityName": "Staunton State Park",
      "faciltyPhoto": "/webphotos/CO/pid56101/0/80x53.jpg",
      "favorite": "N",
      "latitude": "39.4969",
      "listingOnly": "N",
      "longitude": "-105.382",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "A101",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "70032",
      "facilityName": "COLD SPRINGS",
      "faciltyPhoto": "/webphotos/NRSO/pid70032/0/80x53.jpg",
      "favorite": "N",
      "latitude": "39.8416667",
      "listingOnly": "N",
      "longitude": "-105.4941667",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "COLS",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "Y",
      "contractID": "KOAI",
      "contractType": "PRIVATE",
      "facilityID": "730238",
      "facilityName": "Denver West / Central City KOA",
      "faciltyPhoto": "/webphotos/KOAI/pid730238/0/80x53.jpg",
      "favorite": "N",
      "latitude": "39.7916056",
      "listingOnly": "Y",
      "longitude": "-105.5107583",
      "regionName": "",
      "reservationChannel": "Web Reservable",
      "shortName": "K0138",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "N",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "70034",
      "facilityName": "PICKLE GULCH",
      "faciltyPhoto": "/webphotos/NRSO/pid70034/0/80x53.jpg",
      "favorite": "N",
      "latitude": "39.8432028",
      "listingOnly": "N",
      "longitude": "-105.5226111",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "PICG",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "CO",
      "contractType": "STATE",
      "facilityID": "50020",
      "facilityName": "St Vrain State Park",
      "faciltyPhoto": "/webphotos/CO/pid50020/0/80x53.jpg",
      "favorite": "N",
      "latitude": "40.1697222",
      "listingOnly": "N",
      "longitude": "-104.9877778",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "STVR",
      "sitesWithAmps": "Y",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "Y",
      "sitesWithWaterHookup": "Y",
      "sitesWithWaterfront": "Lakefront",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "70577",
      "facilityName": "KELLY DAHL",
      "faciltyPhoto": "/webphotos/NRSO/pid70577/0/80x53.jpg",
      "favorite": "N",
      "latitude": "39.9325",
      "listingOnly": "N",
      "longitude": "-105.4977778",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "KELD",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "70776",
      "facilityName": "COLUMBINE CAMPGROUND",
      "faciltyPhoto": "/webphotos/NRSO/pid70776/0/80x53.jpg",
      "favorite": "N",
      "latitude": "39.8148083",
      "listingOnly": "N",
      "longitude": "-105.5518444",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "COLC",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "70033",
      "facilityName": "ECHO LAKE",
      "faciltyPhoto": "/webphotos/NRSO/pid70033/0/80x53.jpg",
      "favorite": "N",
      "latitude": "39.6562722",
      "listingOnly": "N",
      "longitude": "-105.5956417",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "ECH1",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "70053",
      "facilityName": "KELSEY CAMPGROUND",
      "faciltyPhoto": "/webphotos/NRSO/pid70053/0/80x53.jpg",
      "favorite": "N",
      "latitude": "39.3163889",
      "listingOnly": "N",
      "longitude": "-105.2666667",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "KELS",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "70052",
      "facilityName": "BUFFALO CAMPGROUND",
      "faciltyPhoto": "/webphotos/NRSO/pid70052/0/80x53.jpg",
      "favorite": "N",
      "latitude": "39.3415944",
      "listingOnly": "N",
      "longitude": "-105.329625",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "BUF1",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "70055",
      "facilityName": "MEADOWS GROUP CAMPGROUND",
      "faciltyPhoto": "/images/nophoto.jpg",
      "favorite": "N",
      "latitude": "39.3319444",
      "listingOnly": "N",
      "longitude": "-105.3166667",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "MEAG",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "70035",
      "facilityName": "WEST CHICAGO CREEK",
      "faciltyPhoto": "/webphotos/NRSO/pid70035/0/80x53.jpg",
      "favorite": "N",
      "latitude": "39.6790389",
      "listingOnly": "N",
      "longitude": "-105.6574194",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "WECC",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "PRCG",
      "contractType": "PRIVATE",
      "facilityID": "1063250",
      "facilityName": "Lavern M Johnson Park",
      "faciltyPhoto": "/webphotos/PRCG/pid1063250/0/80x53.jpg",
      "favorite": "N",
      "latitude": "40.2233333",
      "listingOnly": "N",
      "longitude": "-105.2736111",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "D250",
      "sitesWithAmps": "Y",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "Y",
      "sitesWithWaterHookup": "Y",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "Y",
      "contractID": "KOAI",
      "contractType": "PRIVATE",
      "facilityID": "730237",
      "facilityName": "Denver East / Strasburg KOA",
      "faciltyPhoto": "/webphotos/KOAI/pid730237/0/80x53.jpg",
      "favorite": "N",
      "latitude": "39.7353583",
      "listingOnly": "Y",
      "longitude": "-104.3214",
      "regionName": "",
      "reservationChannel": "Web Reservable",
      "shortName": "K0137",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "N",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "70054",
      "facilityName": "LONE ROCK CAMPGROUND (CO)",
      "faciltyPhoto": "/images/nophoto.jpg",
      "favorite": "N",
      "latitude": "39.2516667",
      "listingOnly": "N",
      "longitude": "-105.2341667",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "LONR",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "70759",
      "facilityName": "PEACEFUL VALLEY",
      "faciltyPhoto": "/webphotos/NRSO/pid70759/0/80x53.jpg",
      "favorite": "N",
      "latitude": "40.1313889",
      "listingOnly": "N",
      "longitude": "-105.5061111",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "PEAC",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "70760",
      "facilityName": "CAMP DICK",
      "faciltyPhoto": "/images/nophoto.jpg",
      "favorite": "N",
      "latitude": "40.13",
      "listingOnly": "N",
      "longitude": "-105.5183333",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "CAMD",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "70623",
      "facilityName": "GUANELLA PASS",
      "faciltyPhoto": "/webphotos/NRSO/pid70623/0/80x53.jpg",
      "favorite": "N",
      "latitude": "39.6127778",
      "listingOnly": "N",
      "longitude": "-105.7161111",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "GUAN",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "N",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "70579",
      "facilityName": "PAWNEE",
      "faciltyPhoto": "/webphotos/NRSO/pid70579/0/80x53.jpg",
      "favorite": "N",
      "latitude": "40.1314556",
      "listingOnly": "N",
      "longitude": "-105.5670611",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "PAWN",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "109084",
      "facilityName": "BURNING BEAR CAMPGROUND",
      "faciltyPhoto": "/images/nophoto.jpg",
      "favorite": "N",
      "latitude": "39.5139111",
      "listingOnly": "N",
      "longitude": "-105.71",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "C084",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "74132",
      "facilityName": "GENEVA PARK CAMPGROUND",
      "faciltyPhoto": "/images/nophoto.jpg",
      "favorite": "N",
      "latitude": "39.5272222",
      "listingOnly": "N",
      "longitude": "-105.7283333",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "GENE",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "LARC",
      "contractType": "COUNTY",
      "facilityID": "710102",
      "facilityName": "Carter Lake",
      "faciltyPhoto": "/webphotos/LARC/pid710102/0/80x53.jpg",
      "favorite": "N",
      "latitude": "40.3358333",
      "listingOnly": "N",
      "longitude": "-105.2166667",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "LRM1",
      "sitesWithAmps": "Y",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "Lakefront",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "70578",
      "facilityName": "OLIVE RIDGE",
      "faciltyPhoto": "/webphotos/NRSO/pid70578/0/80x53.jpg",
      "favorite": "N",
      "latitude": "40.2088333",
      "listingOnly": "N",
      "longitude": "-105.5223944",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "OLIV",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "LARC",
      "contractType": "COUNTY",
      "facilityID": "710103",
      "facilityName": "Flatiron Reservoir",
      "faciltyPhoto": "/webphotos/LARC/pid710103/0/80x53.jpg",
      "favorite": "N",
      "latitude": "40.3697222",
      "listingOnly": "N",
      "longitude": "-105.2355556",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "LRM2",
      "sitesWithAmps": "Y",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "Lakefront",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "LARC",
      "contractType": "COUNTY",
      "facilityID": "710106",
      "facilityName": "Pinewood Reservoir",
      "faciltyPhoto": "/webphotos/LARC/pid710106/0/80x53.jpg",
      "favorite": "N",
      "latitude": "40.3611111",
      "listingOnly": "N",
      "longitude": "-105.2852778",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "LRM5",
      "sitesWithAmps": "Y",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "Lakefront",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "Y",
      "contractID": "INDP",
      "contractType": "PRIVATE",
      "facilityID": "720165",
      "facilityName": "Loveland RV Resort",
      "faciltyPhoto": "/webphotos/INDP/pid720165/0/80x53.jpg",
      "favorite": "N",
      "latitude": "40.4078889",
      "listingOnly": "Y",
      "longitude": "-105.0132806",
      "regionName": "",
      "reservationChannel": "Web Reservable",
      "shortName": "GS0065",
      "sitesWithAmps": "Y",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "72085",
      "facilityName": "MANITOU LAKE PAVILION",
      "faciltyPhoto": "/webphotos/NRSO/pid72085/0/80x53.jpg",
      "favorite": "N",
      "latitude": "39.0883333",
      "listingOnly": "N",
      "longitude": "-105.0980556",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "MNLP",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "Lakefront",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "73770",
      "facilityName": "TIMBERLINE CAMPGROUND",
      "faciltyPhoto": "/webphotos/NRSO/pid73770/0/80x53.jpg",
      "favorite": "N",
      "latitude": "39.4319444",
      "listingOnly": "N",
      "longitude": "-105.7619444",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "TIMR",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "70685",
      "facilityName": "PAINTED ROCKS",
      "faciltyPhoto": "/webphotos/NRSO/pid70685/0/80x53.jpg",
      "favorite": "N",
      "latitude": "39.0844444",
      "listingOnly": "N",
      "longitude": "-105.1052778",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "PAIN",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "70684",
      "facilityName": "COLORADO CAMPGROUND",
      "faciltyPhoto": "/webphotos/NRSO/pid70684/0/80x53.jpg",
      "favorite": "N",
      "latitude": "39.0797222",
      "listingOnly": "N",
      "longitude": "-105.0933333",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "COLO",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "72081",
      "facilityName": "KENOSHA PASS CAMPGROUND",
      "faciltyPhoto": "/webphotos/NRSO/pid72081/0/80x53.jpg",
      "favorite": "N",
      "latitude": "39.4130556",
      "listingOnly": "N",
      "longitude": "-105.7566667",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "KENP",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "Y",
      "contractID": "INDP",
      "contractType": "PRIVATE",
      "facilityID": "721267",
      "facilityName": "Riverview RV Park &amp; Campground",
      "faciltyPhoto": "/webphotos/INDP/pid721267/0/80x53.jpg",
      "favorite": "N",
      "latitude": "40.4168806",
      "listingOnly": "Y",
      "longitude": "-105.1899",
      "regionName": "",
      "reservationChannel": "Web Reservable",
      "shortName": "GS1167",
      "sitesWithAmps": "Y",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "Y",
      "contractID": "INDP",
      "contractType": "PRIVATE",
      "facilityID": "720125",
      "facilityName": "Greeley RV Park",
      "faciltyPhoto": "/webphotos/INDP/pid720125/0/80x53.jpg",
      "favorite": "N",
      "latitude": "40.3933833",
      "listingOnly": "Y",
      "longitude": "-104.6734278",
      "regionName": "",
      "reservationChannel": "Web Reservable",
      "shortName": "GS0025",
      "sitesWithAmps": "Y",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "70036",
      "facilityName": "ARAPAHO BAY",
      "faciltyPhoto": "/webphotos/NRSO/pid70036/0/80x53.jpg",
      "favorite": "N",
      "latitude": "40.1194389",
      "listingOnly": "N",
      "longitude": "-105.7558083",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "ARAP",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "70048",
      "facilityName": "PIKE COMMUNITY",
      "faciltyPhoto": "/webphotos/NRSO/pid70048/0/80x53.jpg",
      "favorite": "N",
      "latitude": "39.0647222",
      "listingOnly": "N",
      "longitude": "-105.0922222",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "PIKE",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "70683",
      "facilityName": "SOUTH MEADOWS",
      "faciltyPhoto": "/webphotos/NRSO/pid70683/0/80x53.jpg",
      "favorite": "N",
      "latitude": "39.0647222",
      "listingOnly": "N",
      "longitude": "-105.0922222",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "SOUM",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "CO",
      "contractType": "STATE",
      "facilityID": "50019",
      "facilityName": "Boyd Lake State Park",
      "faciltyPhoto": "/webphotos/CO/pid50019/0/80x53.jpg",
      "favorite": "N",
      "latitude": "40.4477778",
      "listingOnly": "N",
      "longitude": "-105.0372222",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "BOLA",
      "sitesWithAmps": "Y",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "Lakefront",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "LARC",
      "contractType": "COUNTY",
      "facilityID": "710104",
      "facilityName": "Hermit Park.",
      "faciltyPhoto": "/webphotos/LARC/pid710104/0/80x53.jpg",
      "favorite": "N",
      "latitude": "40.3561111",
      "listingOnly": "N",
      "longitude": "-105.4569444",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "LRM3",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "70049",
      "facilityName": "RED ROCKS GROUP CAMPGROUND",
      "faciltyPhoto": "/webphotos/NRSO/pid70049/0/80x53.jpg",
      "favorite": "N",
      "latitude": "39.0441667",
      "listingOnly": "N",
      "longitude": "-105.0797222",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "REDR",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "96719",
      "facilityName": "SPRUCE GROVE CAMPGROUND",
      "faciltyPhoto": "/images/nophoto.jpg",
      "favorite": "N",
      "latitude": "39.1377778",
      "listingOnly": "N",
      "longitude": "-105.4616667",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "E719",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "ESTS",
      "contractType": "COUNTY",
      "facilityID": "300100",
      "facilityName": "ESTES PARK CAMPGROUND AT MARYS LAKE",
      "faciltyPhoto": "/webphotos/ESTS/pid300100/0/80x53.jpg",
      "favorite": "N",
      "latitude": "40.3466667",
      "listingOnly": "N",
      "longitude": "-105.5325",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "A100",
      "sitesWithAmps": "Y",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "Y",
      "sitesWithWaterHookup": "Y",
      "sitesWithWaterfront": "Lakefront",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "73543",
      "facilityName": "ASPEN (CO)",
      "faciltyPhoto": "/images/nophoto.jpg",
      "favorite": "N",
      "latitude": "39.4252778",
      "listingOnly": "N",
      "longitude": "-105.8408333",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "ASPN",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "N",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "ESTS",
      "contractType": "COUNTY",
      "facilityID": "300101",
      "facilityName": "ESTES PARK CAMPGROUND AT EAST PORTAL",
      "faciltyPhoto": "/webphotos/ESTS/pid300101/0/80x53.jpg",
      "favorite": "N",
      "latitude": "40.3277778",
      "listingOnly": "N",
      "longitude": "-105.5772222",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "A101",
      "sitesWithAmps": "Y",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "Y",
      "sitesWithWaterHookup": "Y",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "Y",
      "contractID": "KOAI",
      "contractType": "PRIVATE",
      "facilityID": "730258",
      "facilityName": "Estes Park KOA",
      "faciltyPhoto": "/webphotos/KOAI/pid730258/0/80x53.jpg",
      "favorite": "N",
      "latitude": "40.3796",
      "listingOnly": "Y",
      "longitude": "-105.4887",
      "regionName": "",
      "reservationChannel": "Web Reservable",
      "shortName": "K0158",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "N",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "73564",
      "facilityName": "JEFFERSON CREEK",
      "faciltyPhoto": "/images/nophoto.jpg",
      "favorite": "N",
      "latitude": "39.4369444",
      "listingOnly": "N",
      "longitude": "-105.8608333",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "JEFF",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "N",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "70942",
      "facilityName": "GLACIER BASIN CAMPGROUND",
      "faciltyPhoto": "/images/nophoto.jpg",
      "favorite": "N",
      "latitude": "40.3291667",
      "listingOnly": "N",
      "longitude": "-105.5933333",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "CG48",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "70611",
      "facilityName": "LODGEPOLE (CO)",
      "faciltyPhoto": "/images/nophoto.jpg",
      "favorite": "N",
      "latitude": "39.4166667",
      "listingOnly": "N",
      "longitude": "-105.8497222",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "LODS",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "N",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "Y",
      "contractID": "INDP",
      "contractType": "PRIVATE",
      "facilityID": "722667",
      "facilityName": "Manor RV Park",
      "faciltyPhoto": "/images/nophoto.jpg",
      "favorite": "N",
      "latitude": "40.3617111",
      "listingOnly": "Y",
      "longitude": "-105.5382389",
      "regionName": "",
      "reservationChannel": "Web Reservable",
      "shortName": "GS2567",
      "sitesWithAmps": "Y",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "Y",
      "contractID": "INDP",
      "contractType": "PRIVATE",
      "facilityID": "721507",
      "facilityName": "Spruce Lake RV Resort",
      "faciltyPhoto": "/webphotos/INDP/pid721507/0/80x53.jpg",
      "favorite": "N",
      "latitude": "40.3624611",
      "listingOnly": "Y",
      "longitude": "-105.54265",
      "regionName": "",
      "reservationChannel": "Web Reservable",
      "shortName": "GS1407",
      "sitesWithAmps": "Y",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "Y",
      "contractID": "INDP",
      "contractType": "PRIVATE",
      "facilityID": "722211",
      "facilityName": "Elk Meadow Lodge and RV Resort",
      "faciltyPhoto": "/webphotos/INDP/pid722211/0/80x53.jpg",
      "favorite": "N",
      "latitude": "40.3620306",
      "listingOnly": "Y",
      "longitude": "-105.5532",
      "regionName": "",
      "reservationChannel": "Web Reservable",
      "shortName": "GS2111",
      "sitesWithAmps": "Y",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "70943",
      "facilityName": "MORAINE PARK CAMPGROUND",
      "faciltyPhoto": "/webphotos/NRSO/pid70943/0/80x53.jpg",
      "favorite": "N",
      "latitude": "40.3625",
      "listingOnly": "N",
      "longitude": "-105.6019444",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "CG47",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "70047",
      "facilityName": "MEADOW RIDGE",
      "faciltyPhoto": "/webphotos/NRSO/pid70047/0/80x53.jpg",
      "favorite": "N",
      "latitude": "38.9775",
      "listingOnly": "N",
      "longitude": "-104.9847222",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "MEAR",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "70050",
      "facilityName": "THUNDER RIDGE",
      "faciltyPhoto": "/webphotos/NRSO/pid70050/0/80x53.jpg",
      "favorite": "N",
      "latitude": "38.9766667",
      "listingOnly": "N",
      "longitude": "-104.9830556",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "THUN",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "Y",
      "contractID": "IND2",
      "contractType": "PRIVATE",
      "facilityID": "720143",
      "facilityName": "Rent an RV for Your Next Adventure",
      "faciltyPhoto": "/webphotos/IND2/pid720143/0/80x53.jpg",
      "favorite": "N",
      "latitude": "40.3847444",
      "listingOnly": "Y",
      "longitude": "-105.586375",
      "regionName": "",
      "reservationChannel": "Web Reservable",
      "shortName": "M043",
      "sitesWithAmps": "Y",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "Lakefront",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "LARC",
      "contractType": "COUNTY",
      "facilityID": "710105",
      "facilityName": "Horsetooth Reservoir",
      "faciltyPhoto": "/webphotos/LARC/pid710105/0/80x53.jpg",
      "favorite": "N",
      "latitude": "40.5294444",
      "listingOnly": "N",
      "longitude": "-105.165",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "LRM4",
      "sitesWithAmps": "Y",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "Y",
      "sitesWithWaterHookup": "Y",
      "sitesWithWaterfront": "Riverfront",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "70037",
      "facilityName": "GREEN RIDGE",
      "faciltyPhoto": "/webphotos/NRSO/pid70037/0/80x53.jpg",
      "favorite": "N",
      "latitude": "40.20565",
      "listingOnly": "N",
      "longitude": "-105.8442528",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "GRER",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "73545",
      "facilityName": "ROUND MOUNTAIN",
      "faciltyPhoto": "/images/nophoto.jpg",
      "favorite": "N",
      "latitude": "39.0305556",
      "listingOnly": "N",
      "longitude": "-105.4311111",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "ROUN",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "N",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "75054",
      "facilityName": "SOUTH FORK GROUP SITE ",
      "faciltyPhoto": "/images/nophoto.jpg",
      "favorite": "N",
      "latitude": "39.7940528",
      "listingOnly": "N",
      "longitude": "-106.0306278",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "SFOR",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "73805",
      "facilityName": "CUTTHROAT BAY GROUP",
      "faciltyPhoto": "/webphotos/NRSO/pid73805/0/80x53.jpg",
      "favorite": "N",
      "latitude": "40.1913972",
      "listingOnly": "N",
      "longitude": "-105.8736222",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "CBAY",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "Y",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "70038",
      "facilityName": "STILLWATER (COLORADO)",
      "faciltyPhoto": "/webphotos/NRSO/pid70038/0/80x53.jpg",
      "favorite": "N",
      "latitude": "40.18165",
      "listingOnly": "N",
      "longitude": "-105.891125",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "STCO",
      "sitesWithAmps": "Y",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "Y",
      "sitesWithWaterfront": "Lakefront",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "70755",
      "facilityName": "LOWRY CAMPGROUND",
      "faciltyPhoto": "/webphotos/NRSO/pid70755/0/80x53.jpg",
      "favorite": "N",
      "latitude": "39.5986111",
      "listingOnly": "N",
      "longitude": "-106.0344444",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "LOWR",
      "sitesWithAmps": "Y",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "70569",
      "facilityName": "PROSPECTOR",
      "faciltyPhoto": "/webphotos/NRSO/pid70569/0/80x53.jpg",
      "favorite": "N",
      "latitude": "39.5958333",
      "listingOnly": "N",
      "longitude": "-106.0344444",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "PROS",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "70503",
      "facilityName": "WINDY POINT (CO)",
      "faciltyPhoto": "/webphotos/NRSO/pid70503/0/80x53.jpg",
      "favorite": "N",
      "latitude": "39.6077778",
      "listingOnly": "N",
      "longitude": "-106.0444444",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "WINP",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "75373",
      "facilityName": "SAPPHIRE POINT OVERLOOK",
      "faciltyPhoto": "/images/nophoto.jpg",
      "favorite": "N",
      "latitude": "39.5880556",
      "listingOnly": "N",
      "longitude": "-106.0436111",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "SAPP",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "N",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "72084",
      "facilityName": "ASPENGLEN CAMPGROUND",
      "faciltyPhoto": "/images/nophoto.jpg",
      "favorite": "N",
      "latitude": "40.4222222",
      "listingOnly": "N",
      "longitude": "-105.6202778",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "ASPC",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "73704",
      "facilityName": "ROBERTS CABIN",
      "faciltyPhoto": "/webphotos/NRSO/pid73704/0/80x53.jpg",
      "favorite": "N",
      "latitude": "39.34",
      "listingOnly": "N",
      "longitude": "-105.9316667",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "ROTS",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "N",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "73885",
      "facilityName": "WILLOW CREEK GROUP",
      "faciltyPhoto": "/webphotos/NRSO/pid73885/0/80x53.jpg",
      "favorite": "N",
      "latitude": "40.1425",
      "listingOnly": "N",
      "longitude": "-105.9530556",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "WILL",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "Y",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "73544",
      "facilityName": "BLUE MOUNTAIN",
      "faciltyPhoto": "/images/nophoto.jpg",
      "favorite": "N",
      "latitude": "38.9613889",
      "listingOnly": "N",
      "longitude": "-105.3613889",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "BLMT",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "N",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "CO",
      "contractType": "STATE",
      "facilityID": "50030",
      "facilityName": "Lory State Park",
      "faciltyPhoto": "/images/nophoto.jpg",
      "favorite": "N",
      "latitude": "40.5777778",
      "listingOnly": "N",
      "longitude": "-105.1819444",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "LOST",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "N",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "Y",
      "contractID": "INDP",
      "contractType": "PRIVATE",
      "facilityID": "721217",
      "facilityName": "Winding River Resort",
      "faciltyPhoto": "/webphotos/INDP/pid721217/0/80x53.jpg",
      "favorite": "N",
      "latitude": "40.2772889",
      "listingOnly": "Y",
      "longitude": "-105.8514389",
      "regionName": "",
      "reservationChannel": "Web Reservable",
      "shortName": "GS1117",
      "sitesWithAmps": "Y",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "70500",
      "facilityName": "PEAK ONE",
      "faciltyPhoto": "/webphotos/NRSO/pid70500/0/80x53.jpg",
      "favorite": "N",
      "latitude": "39.5847222",
      "listingOnly": "N",
      "longitude": "-106.0694444",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "PEAK",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "70499",
      "facilityName": "HEATON BAY",
      "faciltyPhoto": "/webphotos/NRSO/pid70499/0/80x53.jpg",
      "favorite": "N",
      "latitude": "39.605",
      "listingOnly": "N",
      "longitude": "-106.0777778",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "HEA1",
      "sitesWithAmps": "Y",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "Y",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "72109",
      "facilityName": "HAPPY MEADOWS",
      "faciltyPhoto": "/images/nophoto.jpg",
      "favorite": "N",
      "latitude": "39.0377333",
      "listingOnly": "N",
      "longitude": "-105.6073972",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "HAME",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "N",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "Riverfront",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "CO",
      "contractType": "STATE",
      "facilityID": "50032",
      "facilityName": "Mueller State Park",
      "faciltyPhoto": "/webphotos/CO/pid50032/0/80x53.jpg",
      "favorite": "N",
      "latitude": "38.8947222",
      "listingOnly": "N",
      "longitude": "-105.1794444",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "MUST",
      "sitesWithAmps": "Y",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "Y",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "Y",
      "contractID": "KOAI",
      "contractType": "PRIVATE",
      "facilityID": "730266",
      "facilityName": "Fort Collins / Lakeside KOA",
      "faciltyPhoto": "/webphotos/KOAI/pid730266/0/80x53.jpg",
      "favorite": "N",
      "latitude": "40.6148",
      "listingOnly": "Y",
      "longitude": "-105.1143",
      "regionName": "",
      "reservationChannel": "Web Reservable",
      "shortName": "K0166",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "N",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "73561",
      "facilityName": "RIVERSIDE (CO)",
      "faciltyPhoto": "/images/nophoto.jpg",
      "favorite": "N",
      "latitude": "38.9438889",
      "listingOnly": "N",
      "longitude": "-105.4411111",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "RIVS",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "N",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "73559",
      "facilityName": "SPRINGER GULCH",
      "faciltyPhoto": "/images/nophoto.jpg",
      "favorite": "N",
      "latitude": "38.9273833",
      "listingOnly": "N",
      "longitude": "-105.4248917",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "SPGU",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "N",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "Y",
      "contractID": "INDP",
      "contractType": "PRIVATE",
      "facilityID": "722617",
      "facilityName": "Pikes Peak RV Park &amp; Campground",
      "faciltyPhoto": "/webphotos/INDP/pid722617/0/80x53.jpg",
      "favorite": "N",
      "latitude": "38.8568472",
      "listingOnly": "Y",
      "longitude": "-104.9007917",
      "regionName": "",
      "reservationChannel": "Web Reservable",
      "shortName": "GS2517",
      "sitesWithAmps": "Y",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "Y",
      "contractID": "INDP",
      "contractType": "PRIVATE",
      "facilityID": "721317",
      "facilityName": "Garden of the Gods RV Resort",
      "faciltyPhoto": "/webphotos/INDP/pid721317/0/80x53.jpg",
      "favorite": "N",
      "latitude": "38.8571694",
      "listingOnly": "Y",
      "longitude": "-104.8849889",
      "regionName": "",
      "reservationChannel": "Web Reservable",
      "shortName": "GS1217",
      "sitesWithAmps": "Y",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "CO",
      "contractType": "STATE",
      "facilityID": "50024",
      "facilityName": "Eleven Mile State Park",
      "faciltyPhoto": "/webphotos/CO/pid50024/0/80x53.jpg",
      "favorite": "N",
      "latitude": "38.9355556",
      "listingOnly": "N",
      "longitude": "-105.5008333",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "ELMI",
      "sitesWithAmps": "Y",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "Lakefront",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "Y",
      "contractID": "INDP",
      "contractType": "PRIVATE",
      "facilityID": "721435",
      "facilityName": "Fountain Creek RV Park",
      "faciltyPhoto": "/webphotos/INDP/pid721435/0/80x53.jpg",
      "favorite": "N",
      "latitude": "38.8514944",
      "listingOnly": "Y",
      "longitude": "-104.8713528",
      "regionName": "",
      "reservationChannel": "Web Reservable",
      "shortName": "GS1335",
      "sitesWithAmps": "Y",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "Y",
      "contractID": "INDP",
      "contractType": "PRIVATE",
      "facilityID": "721488",
      "facilityName": "Goldfield RV Park",
      "faciltyPhoto": "/webphotos/INDP/pid721488/0/80x53.jpg",
      "favorite": "N",
      "latitude": "38.8449389",
      "listingOnly": "Y",
      "longitude": "-104.8669389",
      "regionName": "",
      "reservationChannel": "Web Reservable",
      "shortName": "GS1388",
      "sitesWithAmps": "Y",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "73563",
      "facilityName": "COVE CAMPGROUND",
      "faciltyPhoto": "/images/nophoto.jpg",
      "favorite": "N",
      "latitude": "38.9105556",
      "listingOnly": "N",
      "longitude": "-105.4602778",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "CCAM",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "N",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "73562",
      "facilityName": "SPILLWAY CAMPGROUND",
      "faciltyPhoto": "/images/nophoto.jpg",
      "favorite": "N",
      "latitude": "38.9066667",
      "listingOnly": "N",
      "longitude": "-105.4677778",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "SPLL",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "N",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "CO",
      "contractType": "STATE",
      "facilityID": "50028",
      "facilityName": "Jackson Lake State Park",
      "faciltyPhoto": "/webphotos/CO/pid50028/0/80x53.jpg",
      "favorite": "N",
      "latitude": "40.3813889",
      "listingOnly": "N",
      "longitude": "-104.0969444",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "JALA",
      "sitesWithAmps": "Y",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "Lakefront",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "Y",
      "contractID": "INDP",
      "contractType": "PRIVATE",
      "facilityID": "720347",
      "facilityName": "Middlefork RV Resort",
      "faciltyPhoto": "/webphotos/INDP/pid720347/0/80x53.jpg",
      "favorite": "N",
      "latitude": "39.2202389",
      "listingOnly": "Y",
      "longitude": "-105.992975",
      "regionName": "",
      "reservationChannel": "Web Reservable",
      "shortName": "GS0247",
      "sitesWithAmps": "Y",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "73741",
      "facilityName": "JACKS GULCH",
      "faciltyPhoto": "/webphotos/NRSO/pid73741/0/80x53.jpg",
      "favorite": "N",
      "latitude": "40.6368361",
      "listingOnly": "N",
      "longitude": "-105.5269472",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "JAGU",
      "sitesWithAmps": "Y",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "75397",
      "facilityName": "ANSEL WATROUS",
      "faciltyPhoto": "/webphotos/NRSO/pid75397/0/80x53.jpg",
      "favorite": "N",
      "latitude": "40.6897083",
      "listingOnly": "N",
      "longitude": "-105.3491639",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "ANSE",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "Y",
      "contractID": "KOAI",
      "contractType": "PRIVATE",
      "facilityID": "730225",
      "facilityName": "Cripple Creek KOA",
      "faciltyPhoto": "/webphotos/KOAI/pid730225/0/80x53.jpg",
      "favorite": "N",
      "latitude": "38.7744944",
      "listingOnly": "Y",
      "longitude": "-105.1176167",
      "regionName": "",
      "reservationChannel": "Web Reservable",
      "shortName": "K0125",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "N",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "75394",
      "facilityName": "STOVE PRAIRIE",
      "faciltyPhoto": "/webphotos/NRSO/pid75394/0/80x53.jpg",
      "favorite": "N",
      "latitude": "40.6833861",
      "listingOnly": "N",
      "longitude": "-105.3966472",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "STOV",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "113789",
      "facilityName": "GORE CREEK CAMPGROUND",
      "faciltyPhoto": "/webphotos/NRSO/pid113789/0/80x53.jpg",
      "favorite": "N",
      "latitude": "39.6275",
      "listingOnly": "N",
      "longitude": "-106.2725",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "C789",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "Y",
      "contractID": "INDP",
      "contractType": "PRIVATE",
      "facilityID": "720614",
      "facilityName": "Emerald RV Park",
      "faciltyPhoto": "/images/nophoto.jpg",
      "favorite": "N",
      "latitude": "40.2517083",
      "listingOnly": "Y",
      "longitude": "-103.8797667",
      "regionName": "",
      "reservationChannel": "Web Reservable",
      "shortName": "GS0514",
      "sitesWithAmps": "Y",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "75490",
      "facilityName": "COW CREEK SOUTH",
      "faciltyPhoto": "/images/nophoto.jpg",
      "favorite": "N",
      "latitude": "39.8794444",
      "listingOnly": "N",
      "longitude": "-106.2772222",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "CWCS",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "75395",
      "facilityName": "NARROWS (CO)",
      "faciltyPhoto": "/webphotos/NRSO/pid75395/0/80x53.jpg",
      "favorite": "N",
      "latitude": "40.6912917",
      "listingOnly": "N",
      "longitude": "-105.4321389",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "NARS",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "70028",
      "facilityName": "MOUNTAIN PARK",
      "faciltyPhoto": "/webphotos/NRSO/pid70028/0/80x53.jpg",
      "favorite": "N",
      "latitude": "40.6820333",
      "listingOnly": "N",
      "longitude": "-105.4691083",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "MOUT",
      "sitesWithAmps": "Y",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "73565",
      "facilityName": "HORSESHOE CAMPGROUND",
      "faciltyPhoto": "/images/nophoto.jpg",
      "favorite": "N",
      "latitude": "39.2016667",
      "listingOnly": "N",
      "longitude": "-106.0861111",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "HOCG",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "N",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "Y",
      "contractID": "KOAI",
      "contractType": "PRIVATE",
      "facilityID": "730267",
      "facilityName": "Fort Collins North / Wellington KOA",
      "faciltyPhoto": "/webphotos/KOAI/pid730267/0/80x53.jpg",
      "favorite": "N",
      "latitude": "40.7549306",
      "listingOnly": "Y",
      "longitude": "-104.9852667",
      "regionName": "",
      "reservationChannel": "Web Reservable",
      "shortName": "K0167",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "N",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "CO",
      "contractType": "STATE",
      "facilityID": "50081",
      "facilityName": "Cheyenne Mountain State Park",
      "faciltyPhoto": "/webphotos/CO/pid50081/0/80x53.jpg",
      "favorite": "N",
      "latitude": "38.7355556",
      "listingOnly": "N",
      "longitude": "-104.8194444",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "CHYM",
      "sitesWithAmps": "Y",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "Y",
      "sitesWithWaterHookup": "Y",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "73754",
      "facilityName": "CROW VALLEY",
      "faciltyPhoto": "/images/nophoto.jpg",
      "favorite": "N",
      "latitude": "40.6438889",
      "listingOnly": "N",
      "longitude": "-104.3377778",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "CROV",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "70690",
      "facilityName": "CAMP HALE EAST FORK GROUP",
      "faciltyPhoto": "/webphotos/NRSO/pid70690/0/80x53.jpg",
      "favorite": "N",
      "latitude": "39.4194444",
      "listingOnly": "N",
      "longitude": "-106.2866667",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "EAF1",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "73542",
      "facilityName": "BUFFALO SPRINGS",
      "faciltyPhoto": "/images/nophoto.jpg",
      "favorite": "N",
      "latitude": "39.0338889",
      "listingOnly": "N",
      "longitude": "-105.9891667",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "BUSP",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "N",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "PRCG",
      "contractType": "PRIVATE",
      "facilityID": "1068450",
      "facilityName": "Canyonside Campground",
      "faciltyPhoto": "/webphotos/PRCG/pid1068450/0/80x53.jpg",
      "favorite": "N",
      "latitude": "40.6976972",
      "listingOnly": "N",
      "longitude": "-105.6112667",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "E450",
      "sitesWithAmps": "Y",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "Y",
      "contractID": "KOAI",
      "contractType": "PRIVATE",
      "facilityID": "730210",
      "facilityName": "Colorado Springs KOA",
      "faciltyPhoto": "/webphotos/KOAI/pid730210/0/80x53.jpg",
      "favorite": "N",
      "latitude": "38.7117111",
      "listingOnly": "Y",
      "longitude": "-104.7248028",
      "regionName": "",
      "reservationChannel": "Web Reservable",
      "shortName": "K0110",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "N",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "70029",
      "facilityName": "CHAMBERS LAKE",
      "faciltyPhoto": "/webphotos/NRSO/pid70029/0/80x53.jpg",
      "favorite": "N",
      "latitude": "40.59575",
      "listingOnly": "N",
      "longitude": "-105.8428528",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "CHAM",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "70570",
      "facilityName": "CAMP HALE MEMORIAL",
      "faciltyPhoto": "/webphotos/NRSO/pid70570/0/80x53.jpg",
      "favorite": "N",
      "latitude": "39.4202778",
      "listingOnly": "N",
      "longitude": "-106.315",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "CAMH",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "72021",
      "facilityName": "BELLAIRE LAKE CAMPGROUND",
      "faciltyPhoto": "/webphotos/NRSO/pid72021/0/80x53.jpg",
      "favorite": "N",
      "latitude": "40.7651417",
      "listingOnly": "N",
      "longitude": "-105.6118667",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "BELC",
      "sitesWithAmps": "Y",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "73761",
      "facilityName": "TIGIWON COMMUNITY HOUSE",
      "faciltyPhoto": "/webphotos/NRSO/pid73761/0/80x53.jpg",
      "favorite": "N",
      "latitude": "39.5233333",
      "listingOnly": "N",
      "longitude": "-106.42",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "TIGI",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "N",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "CO",
      "contractType": "STATE",
      "facilityID": "50042",
      "facilityName": "State Forest State Park",
      "faciltyPhoto": "/webphotos/CO/pid50042/0/80x53.jpg",
      "favorite": "N",
      "latitude": "40.5983333",
      "listingOnly": "N",
      "longitude": "-105.9536111",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "STFO",
      "sitesWithAmps": "Y",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "Y",
      "sitesWithWaterHookup": "Y",
      "sitesWithWaterfront": "Lakefront",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "70031",
      "facilityName": "WEST LAKE",
      "faciltyPhoto": "/webphotos/NRSO/pid70031/0/80x53.jpg",
      "favorite": "N",
      "latitude": "40.7887028",
      "listingOnly": "N",
      "longitude": "-105.5684639",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "WLCO",
      "sitesWithAmps": "Y",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "Y",
      "contractID": "KOAI",
      "contractType": "PRIVATE",
      "facilityID": "730356",
      "facilityName": "Limon KOA",
      "faciltyPhoto": "/webphotos/KOAI/pid730356/0/80x53.jpg",
      "favorite": "N",
      "latitude": "39.2645167",
      "listingOnly": "Y",
      "longitude": "-103.6728722",
      "regionName": "",
      "reservationChannel": "Web Reservable",
      "shortName": "K0256",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "N",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "70030",
      "facilityName": "DOWDY LAKE",
      "faciltyPhoto": "/webphotos/NRSO/pid70030/0/80x53.jpg",
      "favorite": "N",
      "latitude": "40.7965139",
      "listingOnly": "N",
      "longitude": "-105.5655056",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "DOWD",
      "sitesWithAmps": "Y",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "70265",
      "facilityName": "FATHER DYER",
      "faciltyPhoto": "/webphotos/NRSO/pid70265/0/80x53.jpg",
      "favorite": "N",
      "latitude": "39.2735611",
      "listingOnly": "N",
      "longitude": "-106.3486861",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "FATH",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "70313",
      "facilityName": "PRINTER BOY",
      "faciltyPhoto": "/webphotos/NRSO/pid70313/0/80x53.jpg",
      "favorite": "N",
      "latitude": "39.2694444",
      "listingOnly": "N",
      "longitude": "-106.3466667",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "PRIN",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "70233",
      "facilityName": "BABY DOE",
      "faciltyPhoto": "/webphotos/NRSO/pid70233/0/80x53.jpg",
      "favorite": "N",
      "latitude": "39.2697222",
      "listingOnly": "N",
      "longitude": "-106.3505556",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "BABY",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "70297",
      "facilityName": "MOLLY BROWN",
      "faciltyPhoto": "/webphotos/NRSO/pid70297/0/80x53.jpg",
      "favorite": "N",
      "latitude": "39.2663889",
      "listingOnly": "N",
      "longitude": "-106.3497222",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "MOLB",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "70598",
      "facilityName": "SILVER DOLLAR",
      "faciltyPhoto": "/webphotos/NRSO/pid70598/0/80x53.jpg",
      "favorite": "N",
      "latitude": "39.2622222",
      "listingOnly": "N",
      "longitude": "-106.3527778",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "STOM",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "73860",
      "facilityName": "PINEY GUARD STATION",
      "faciltyPhoto": "/webphotos/NRSO/pid73860/0/80x53.jpg",
      "favorite": "N",
      "latitude": "39.7575",
      "listingOnly": "N",
      "longitude": "-106.5605556",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "PIGS",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "N",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "70789",
      "facilityName": "MAY QUEEN",
      "faciltyPhoto": "/webphotos/NRSO/pid70789/0/80x53.jpg",
      "favorite": "N",
      "latitude": "39.2786111",
      "listingOnly": "N",
      "longitude": "-106.4322222",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "MAYQ",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "70290",
      "facilityName": "LAKEVIEW CAMPGROUND",
      "faciltyPhoto": "/webphotos/NRSO/pid70290/0/80x53.jpg",
      "favorite": "N",
      "latitude": "39.0997222",
      "listingOnly": "N",
      "longitude": "-106.3611111",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "LAV1",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "Y",
      "contractID": "INDP",
      "contractType": "PRIVATE",
      "facilityID": "721024",
      "facilityName": "Arrowhead Point Campground and Cabins",
      "faciltyPhoto": "/webphotos/INDP/pid721024/0/80x53.jpg",
      "favorite": "N",
      "latitude": "38.9103722",
      "listingOnly": "Y",
      "longitude": "-106.1790639",
      "regionName": "",
      "reservationChannel": "Web Reservable",
      "shortName": "GS0924",
      "sitesWithAmps": "Y",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "73780",
      "facilityName": "BASSAM GUARD STATION",
      "faciltyPhoto": "/webphotos/NRSO/pid73780/0/80x53.jpg",
      "favorite": "N",
      "latitude": "38.7466667",
      "listingOnly": "N",
      "longitude": "-105.9433333",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "BSMC",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "N",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "70791",
      "facilityName": "WHITE STAR",
      "faciltyPhoto": "/webphotos/NRSO/pid70791/0/80x53.jpg",
      "favorite": "N",
      "latitude": "39.09",
      "listingOnly": "N",
      "longitude": "-106.3655556",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "WSTR",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "Y",
      "contractID": "INDP",
      "contractType": "PRIVATE",
      "facilityID": "722119",
      "facilityName": "Terry Bison Ranch RV Park",
      "faciltyPhoto": "/webphotos/INDP/pid722119/0/80x53.jpg",
      "favorite": "N",
      "latitude": "41.0004694",
      "listingOnly": "Y",
      "longitude": "-104.9052806",
      "regionName": "",
      "reservationChannel": "Web Reservable",
      "shortName": "GS2019",
      "sitesWithAmps": "Y",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "WY"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "73580",
      "facilityName": "STUB CREEK CABIN",
      "faciltyPhoto": "/webphotos/NRSO/pid73580/0/80x53.jpg",
      "favorite": "N",
      "latitude": "40.7938889",
      "listingOnly": "N",
      "longitude": "-105.905",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "STUB",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "N",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "Y",
      "contractID": "KOAI",
      "contractType": "PRIVATE",
      "facilityID": "730169",
      "facilityName": "Buena Vista KOA",
      "faciltyPhoto": "/webphotos/KOAI/pid730169/0/80x53.jpg",
      "favorite": "N",
      "latitude": "38.8206889",
      "listingOnly": "Y",
      "longitude": "-106.0920889",
      "regionName": "",
      "reservationChannel": "Web Reservable",
      "shortName": "K0069",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "N",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "Y",
      "contractID": "INDP",
      "contractType": "PRIVATE",
      "facilityID": "721830",
      "facilityName": "Royal View Campground",
      "faciltyPhoto": "/webphotos/INDP/pid721830/0/80x53.jpg",
      "favorite": "N",
      "latitude": "38.4950389",
      "listingOnly": "Y",
      "longitude": "-105.3505611",
      "regionName": "",
      "reservationChannel": "Web Reservable",
      "shortName": "GS1730",
      "sitesWithAmps": "Y",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "96569",
      "facilityName": "DAWSON CABIN",
      "faciltyPhoto": "/webphotos/NRSO/pid96569/0/80x53.jpg",
      "favorite": "N",
      "latitude": "39.005",
      "listingOnly": "N",
      "longitude": "-106.3533333",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "G569",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "Y",
      "contractID": "KOAI",
      "contractType": "PRIVATE",
      "facilityID": "730489",
      "facilityName": "Royal Gorge / Canon City KOA",
      "faciltyPhoto": "/webphotos/KOAI/pid730489/0/80x53.jpg",
      "favorite": "N",
      "latitude": "38.4895056",
      "listingOnly": "Y",
      "longitude": "-105.330575",
      "regionName": "",
      "reservationChannel": "Web Reservable",
      "shortName": "K0389",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "N",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "74152",
      "facilityName": "CRESCENT MINING CAMP",
      "faciltyPhoto": "/webphotos/NRSO/pid74152/0/80x53.jpg",
      "favorite": "N",
      "latitude": "38.9919444",
      "listingOnly": "N",
      "longitude": "-106.4147222",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "CRMC",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "70422",
      "facilityName": "CHAPMAN CAMPGROUND AND GROUP",
      "faciltyPhoto": "/webphotos/NRSO/pid70422/0/80x53.jpg",
      "favorite": "N",
      "latitude": "39.3083333",
      "listingOnly": "N",
      "longitude": "-106.6330556",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "CHAP",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "Y",
      "contractID": "IND2",
      "contractType": "PRIVATE",
      "facilityID": "720347",
      "facilityName": "Rent an RV for Your Next Adventure",
      "faciltyPhoto": "/webphotos/IND2/pid720347/0/80x53.jpg",
      "favorite": "N",
      "latitude": "41.0923556",
      "listingOnly": "Y",
      "longitude": "-104.9362694",
      "regionName": "",
      "reservationChannel": "Web Reservable",
      "shortName": "M247",
      "sitesWithAmps": "Y",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "Lakefront",
      "state": "WY"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "Y",
      "contractID": "INDP",
      "contractType": "PRIVATE",
      "facilityID": "721619",
      "facilityName": "AB Camping RV Park",
      "faciltyPhoto": "/webphotos/INDP/pid721619/0/80x53.jpg",
      "favorite": "N",
      "latitude": "41.10205",
      "listingOnly": "Y",
      "longitude": "-104.8217389",
      "regionName": "",
      "reservationChannel": "Web Reservable",
      "shortName": "GS1519",
      "sitesWithAmps": "Y",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "WY"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "CO",
      "contractType": "STATE",
      "facilityID": "50043",
      "facilityName": "Sylvan Lake State Park",
      "faciltyPhoto": "/webphotos/CO/pid50043/0/80x53.jpg",
      "favorite": "N",
      "latitude": "39.4780556",
      "listingOnly": "N",
      "longitude": "-106.7330556",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "SYLA",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "Lakefront",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "Y",
      "contractID": "KOAI",
      "contractType": "PRIVATE",
      "facilityID": "730471",
      "facilityName": "Pueblo KOA",
      "faciltyPhoto": "/webphotos/KOAI/pid730471/0/80x53.jpg",
      "favorite": "N",
      "latitude": "38.4095194",
      "listingOnly": "Y",
      "longitude": "-104.6164194",
      "regionName": "",
      "reservationChannel": "Web Reservable",
      "shortName": "K0371",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "N",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "70044",
      "facilityName": "COLLEGIATE PEAKS",
      "faciltyPhoto": "/webphotos/NRSO/pid70044/0/80x53.jpg",
      "favorite": "N",
      "latitude": "38.8130556",
      "listingOnly": "N",
      "longitude": "-106.3152778",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "COLV",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "110534",
      "facilityName": "DEARHAMER CAMPGROUND",
      "faciltyPhoto": "/webphotos/NRSO/pid110534/0/80x53.jpg",
      "favorite": "N",
      "latitude": "39.3608833",
      "listingOnly": "N",
      "longitude": "-106.7386861",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "E534",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "Riverfront",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "70045",
      "facilityName": "MOUNT PRINCETON",
      "faciltyPhoto": "/images/nophoto.jpg",
      "favorite": "N",
      "latitude": "38.7141667",
      "listingOnly": "N",
      "longitude": "-106.2227778",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "MOUP",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "75441",
      "facilityName": "DUMONT CAMPGROUND",
      "faciltyPhoto": "/images/nophoto.jpg",
      "favorite": "N",
      "latitude": "40.4040194",
      "listingOnly": "N",
      "longitude": "-106.6235167",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "DUMT",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "Y",
      "contractID": "KOAI",
      "contractType": "PRIVATE",
      "facilityID": "730198",
      "facilityName": "Cheyenne KOA",
      "faciltyPhoto": "/webphotos/KOAI/pid730198/0/80x53.jpg",
      "favorite": "N",
      "latitude": "41.1391861",
      "listingOnly": "Y",
      "longitude": "-104.6986889",
      "regionName": "",
      "reservationChannel": "Web Reservable",
      "shortName": "K0098",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "N",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "WY"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "70043",
      "facilityName": "CHALK LAKE",
      "faciltyPhoto": "/webphotos/NRSO/pid70043/0/80x53.jpg",
      "favorite": "N",
      "latitude": "38.7127778",
      "listingOnly": "N",
      "longitude": "-106.2338889",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "CHAL",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "70042",
      "facilityName": "CASCADE (COLORADO)",
      "faciltyPhoto": "/webphotos/NRSO/pid70042/0/80x53.jpg",
      "favorite": "N",
      "latitude": "38.7105556",
      "listingOnly": "N",
      "longitude": "-106.2441667",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "CASC",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "Y",
      "contractID": "IND2",
      "contractType": "PRIVATE",
      "facilityID": "720144",
      "facilityName": "Rent an RV for Your Next Adventure",
      "faciltyPhoto": "/webphotos/IND2/pid720144/0/80x53.jpg",
      "favorite": "N",
      "latitude": "39.1581722",
      "listingOnly": "Y",
      "longitude": "-106.6685611",
      "regionName": "",
      "reservationChannel": "Web Reservable",
      "shortName": "M044",
      "sitesWithAmps": "Y",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "Lakefront",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "Y",
      "contractID": "INDP",
      "contractType": "PRIVATE",
      "facilityID": "722752",
      "facilityName": "Restway Travel Park",
      "faciltyPhoto": "/webphotos/INDP/pid722752/0/80x53.jpg",
      "favorite": "N",
      "latitude": "41.1569444",
      "listingOnly": "Y",
      "longitude": "-104.7333333",
      "regionName": "",
      "reservationChannel": "Web Reservable",
      "shortName": "GS2652",
      "sitesWithAmps": "Y",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "WY"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "CO",
      "contractType": "STATE",
      "facilityID": "50067",
      "facilityName": "Arkansas Headwaters Recreation Area",
      "faciltyPhoto": "/webphotos/CO/pid50067/0/80x53.jpg",
      "favorite": "N",
      "latitude": "38.5375",
      "listingOnly": "N",
      "longitude": "-105.9930556",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "AHRA",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "Riverfront",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "WY",
      "contractType": "STATE",
      "facilityID": "1220011",
      "facilityName": "Curt Gowdy State Park",
      "faciltyPhoto": "/webphotos/WY/pid1220011/0/80x53.jpg",
      "favorite": "N",
      "latitude": "41.1852778",
      "listingOnly": "N",
      "longitude": "-105.2438889",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "WY11",
      "sitesWithAmps": "Y",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "Y",
      "sitesWithWaterfront": "",
      "state": "WY"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "70423",
      "facilityName": "MOLLIE B_WHITE RIVER",
      "faciltyPhoto": "/webphotos/NRSO/pid70423/0/80x53.jpg",
      "favorite": "N",
      "latitude": "39.3766667",
      "listingOnly": "N",
      "longitude": "-106.8138889",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "MOLL",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "111791",
      "facilityName": "LITTLE MAUD CAMPGROUND",
      "faciltyPhoto": "/webphotos/NRSO/pid111791/0/80x53.jpg",
      "favorite": "N",
      "latitude": "39.3766667",
      "listingOnly": "N",
      "longitude": "-106.8138889",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "B791",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "111790",
      "facilityName": "RUEDI MARINA CAMPGROUND",
      "faciltyPhoto": "/webphotos/NRSO/pid111790/0/80x53.jpg",
      "favorite": "N",
      "latitude": "39.3727778",
      "listingOnly": "N",
      "longitude": "-106.8138889",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "B790",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "Lakefront",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "Y",
      "contractID": "INDP",
      "contractType": "PRIVATE",
      "facilityID": "722753",
      "facilityName": "WYO Campground",
      "faciltyPhoto": "/images/nophoto.jpg",
      "favorite": "N",
      "latitude": "41.1596306",
      "listingOnly": "Y",
      "longitude": "-104.5157611",
      "regionName": "",
      "reservationChannel": "Web Reservable",
      "shortName": "GS2653",
      "sitesWithAmps": "Y",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "WY"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "73933",
      "facilityName": "GRIZZLY CREEK GUARD STATION",
      "faciltyPhoto": "/webphotos/NRSO/pid73933/0/80x53.jpg",
      "favorite": "N",
      "latitude": "40.5569444",
      "listingOnly": "N",
      "longitude": "-106.5872222",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "GRIC",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "N",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "Y",
      "contractID": "KOAI",
      "contractType": "PRIVATE",
      "facilityID": "730218",
      "facilityName": "Cotopaxi / Arkansas River KOA",
      "faciltyPhoto": "/webphotos/KOAI/pid730218/0/80x53.jpg",
      "favorite": "N",
      "latitude": "38.3784611",
      "listingOnly": "Y",
      "longitude": "-105.6673833",
      "regionName": "",
      "reservationChannel": "Web Reservable",
      "shortName": "K0118",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "N",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "Y",
      "contractID": "INDP",
      "contractType": "PRIVATE",
      "facilityID": "721284",
      "facilityName": "Sugarbush Campground",
      "faciltyPhoto": "/images/nophoto.jpg",
      "favorite": "N",
      "latitude": "38.4328667",
      "listingOnly": "Y",
      "longitude": "-105.8323111",
      "regionName": "",
      "reservationChannel": "Web Reservable",
      "shortName": "GS1184",
      "sitesWithAmps": "Y",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "70835",
      "facilityName": "TEAL LAKE GROUP CAMPSITE",
      "faciltyPhoto": "/webphotos/NRSO/pid70835/0/80x53.jpg",
      "favorite": "N",
      "latitude": "40.5847222",
      "listingOnly": "N",
      "longitude": "-106.6055556",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "TEAL",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "N",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "CO",
      "contractType": "STATE",
      "facilityID": "50036",
      "facilityName": "Lake Pueblo State Park",
      "faciltyPhoto": "/images/nophoto.jpg",
      "favorite": "N",
      "latitude": "38.2763889",
      "listingOnly": "N",
      "longitude": "-104.7183333",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "PURE",
      "sitesWithAmps": "Y",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "Lakefront",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "70414",
      "facilityName": "DINNER STATION",
      "faciltyPhoto": "/images/nophoto.jpg",
      "favorite": "N",
      "latitude": "38.9052778",
      "listingOnly": "N",
      "longitude": "-106.5861111",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "DINN",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "CO",
      "contractType": "STATE",
      "facilityID": "50040",
      "facilityName": "Stagecoach State Park",
      "faciltyPhoto": "/webphotos/CO/pid50040/0/80x53.jpg",
      "favorite": "N",
      "latitude": "40.2508333",
      "listingOnly": "N",
      "longitude": "-106.8363889",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "STAG",
      "sitesWithAmps": "Y",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "Lakefront",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "70058",
      "facilityName": "DIFFICULT CAMPGROUND",
      "faciltyPhoto": "/webphotos/NRSO/pid70058/0/80x53.jpg",
      "favorite": "N",
      "latitude": "39.1416667",
      "listingOnly": "N",
      "longitude": "-106.7708333",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "DIFF",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "Y",
      "contractID": "INDP",
      "contractType": "PRIVATE",
      "facilityID": "721079",
      "facilityName": "Bighorn RV Park",
      "faciltyPhoto": "/images/nophoto.jpg",
      "favorite": "N",
      "latitude": "38.3636389",
      "listingOnly": "Y",
      "longitude": "-105.74605",
      "regionName": "",
      "reservationChannel": "Web Reservable",
      "shortName": "GS0979",
      "sitesWithAmps": "Y",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "70041",
      "facilityName": "ANGEL OF SHAVANO GROUP",
      "faciltyPhoto": "/images/nophoto.jpg",
      "favorite": "N",
      "latitude": "38.5827778",
      "listingOnly": "N",
      "longitude": "-106.22",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "ANSG",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "70019",
      "facilityName": "HIDDEN VALLEY PICNIC",
      "faciltyPhoto": "/images/nophoto.jpg",
      "favorite": "N",
      "latitude": "41.2416667",
      "listingOnly": "N",
      "longitude": "-105.4163889",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "HIDD",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "N",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "WY"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "70416",
      "facilityName": "Lakeview Gunnison",
      "faciltyPhoto": "/images/nophoto.jpg",
      "favorite": "N",
      "latitude": "38.8175",
      "listingOnly": "N",
      "longitude": "-106.58",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "LABI",
      "sitesWithAmps": "Y",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "Y",
      "contractID": "INDP",
      "contractType": "PRIVATE",
      "facilityID": "720881",
      "facilityName": "Aunt Sara&apos;s River Dance RV Resort",
      "faciltyPhoto": "/webphotos/INDP/pid720881/0/80x53.jpg",
      "favorite": "N",
      "latitude": "39.6475",
      "listingOnly": "Y",
      "longitude": "-106.9994333",
      "regionName": "",
      "reservationChannel": "Web Reservable",
      "shortName": "GS0781",
      "sitesWithAmps": "Y",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "70059",
      "facilityName": "SILVER BAR",
      "faciltyPhoto": "/images/nophoto.jpg",
      "favorite": "N",
      "latitude": "39.1458333",
      "listingOnly": "N",
      "longitude": "-106.8916667",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "SILL",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "N",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "70060",
      "facilityName": "SILVER BELL",
      "faciltyPhoto": "/images/nophoto.jpg",
      "favorite": "N",
      "latitude": "39.1416667",
      "listingOnly": "N",
      "longitude": "-106.8916667",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "SILB",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "N",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "70046",
      "facilityName": "OHAVER LAKE",
      "faciltyPhoto": "/webphotos/NRSO/pid70046/0/80x53.jpg",
      "favorite": "N",
      "latitude": "38.4277778",
      "listingOnly": "N",
      "longitude": "-106.1430556",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "OHAV",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "Lakefront",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "70061",
      "facilityName": "SILVER QUEEN",
      "faciltyPhoto": "/images/nophoto.jpg",
      "favorite": "N",
      "latitude": "39.1330556",
      "listingOnly": "N",
      "longitude": "-106.9",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "SILQ",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "N",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "116389",
      "facilityName": "LOTTIS CREEK CAMPGROUND",
      "faciltyPhoto": "/images/nophoto.jpg",
      "favorite": "N",
      "latitude": "38.7755833",
      "listingOnly": "N",
      "longitude": "-106.6275306",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "F389",
      "sitesWithAmps": "Y",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "Y",
      "sitesWithWaterHookup": "Y",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "70695",
      "facilityName": "MONARCH PARK",
      "faciltyPhoto": "/webphotos/NRSO/pid70695/0/80x53.jpg",
      "favorite": "N",
      "latitude": "38.5155556",
      "listingOnly": "N",
      "longitude": "-106.3241667",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "MONA",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "Y",
      "contractID": "IND2",
      "contractType": "PRIVATE",
      "facilityID": "720140",
      "facilityName": "Rent an RV for Your Next Adventure",
      "faciltyPhoto": "/webphotos/IND2/pid720140/0/80x53.jpg",
      "favorite": "N",
      "latitude": "40.5409528",
      "listingOnly": "Y",
      "longitude": "-106.8501333",
      "regionName": "",
      "reservationChannel": "Web Reservable",
      "shortName": "M040",
      "sitesWithAmps": "Y",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "Lakefront",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "Y",
      "contractID": "KOAI",
      "contractType": "PRIVATE",
      "facilityID": "730544",
      "facilityName": "Steamboat Springs KOA",
      "faciltyPhoto": "/webphotos/KOAI/pid730544/0/80x53.jpg",
      "favorite": "N",
      "latitude": "40.5050806",
      "listingOnly": "Y",
      "longitude": "-106.8769",
      "regionName": "",
      "reservationChannel": "Web Reservable",
      "shortName": "K0444",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "N",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "70417",
      "facilityName": "LODGEPOLE (Taylor River)",
      "faciltyPhoto": "/images/nophoto.jpg",
      "favorite": "N",
      "latitude": "38.7611111",
      "listingOnly": "N",
      "longitude": "-106.6611111",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "LODG",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "75482",
      "facilityName": "EAST MAROON PORTAL PICNIC SITE",
      "faciltyPhoto": "/webphotos/NRSO/pid75482/0/80x53.jpg",
      "favorite": "N",
      "latitude": "39.1030556",
      "listingOnly": "N",
      "longitude": "-106.9344444",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "EMPP",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "N",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "Y",
      "contractID": "KOAI",
      "contractType": "PRIVATE",
      "facilityID": "730343",
      "facilityName": "Laramie KOA",
      "faciltyPhoto": "/webphotos/KOAI/pid730343/0/80x53.jpg",
      "favorite": "N",
      "latitude": "41.3218583",
      "listingOnly": "Y",
      "longitude": "-105.6119278",
      "regionName": "",
      "reservationChannel": "Web Reservable",
      "shortName": "K0243",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "N",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "WY"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "72006",
      "facilityName": "Maroon Bells Amphitheatre",
      "faciltyPhoto": "/webphotos/NRSO/pid72006/0/80x53.jpg",
      "favorite": "N",
      "latitude": "39.0916667",
      "listingOnly": "N",
      "longitude": "-106.9416667",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "MBSA",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "N",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "73865",
      "facilityName": "MINGUS RANCH",
      "faciltyPhoto": "/webphotos/NRSO/pid73865/0/80x53.jpg",
      "favorite": "N",
      "latitude": "38.0930556",
      "listingOnly": "N",
      "longitude": "-105.11",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "MINR",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "N",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "75040",
      "facilityName": "SEEDHOUSE GROUP SITES",
      "faciltyPhoto": "/images/nophoto.jpg",
      "favorite": "N",
      "latitude": "40.7736111",
      "listingOnly": "N",
      "longitude": "-106.7341667",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "SEED",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "N",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "Y",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "CO",
      "contractType": "STATE",
      "facilityID": "50065",
      "facilityName": "North Sterling State Park",
      "faciltyPhoto": "/webphotos/CO/pid50065/0/80x53.jpg",
      "favorite": "N",
      "latitude": "40.7891667",
      "listingOnly": "N",
      "longitude": "-103.2655556",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "NOST",
      "sitesWithAmps": "Y",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "Lakefront",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "Y",
      "contractID": "INDP",
      "contractType": "PRIVATE",
      "facilityID": "721987",
      "facilityName": "Grape Creek RV Park Campground &amp; Cabins",
      "faciltyPhoto": "/webphotos/INDP/pid721987/0/80x53.jpg",
      "favorite": "N",
      "latitude": "38.1064333",
      "listingOnly": "Y",
      "longitude": "-105.4588694",
      "regionName": "",
      "reservationChannel": "Web Reservable",
      "shortName": "GS1887",
      "sitesWithAmps": "Y",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "96619",
      "facilityName": "DAVENPORT CAMPGROUND",
      "faciltyPhoto": "/webphotos/NRSO/pid96619/0/80x53.jpg",
      "favorite": "N",
      "latitude": "38.0555556",
      "listingOnly": "N",
      "longitude": "-105.0697222",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "H619",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "70419",
      "facilityName": "ROSY LANE",
      "faciltyPhoto": "/images/nophoto.jpg",
      "favorite": "N",
      "latitude": "38.7305556",
      "listingOnly": "N",
      "longitude": "-106.7466667",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "ROSY",
      "sitesWithAmps": "Y",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "75442",
      "facilityName": "SEEDHOUSE CAMPGROUND",
      "faciltyPhoto": "/images/nophoto.jpg",
      "favorite": "N",
      "latitude": "40.7723833",
      "listingOnly": "N",
      "longitude": "-106.7714667",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "SDHS",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "75096",
      "facilityName": "SEEDHOUSE GUARD STATION",
      "faciltyPhoto": "/webphotos/NRSO/pid75096/0/80x53.jpg",
      "favorite": "N",
      "latitude": "40.7751222",
      "listingOnly": "N",
      "longitude": "-106.7724111",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "SEDH",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "N",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "70418",
      "facilityName": "ONE MILE",
      "faciltyPhoto": "/images/nophoto.jpg",
      "favorite": "N",
      "latitude": "38.7272222",
      "listingOnly": "N",
      "longitude": "-106.7591667",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "ONEM",
      "sitesWithAmps": "Y",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "73926",
      "facilityName": "KEYSTONE RANGER STATION",
      "faciltyPhoto": "/webphotos/NRSO/pid73926/0/80x53.jpg",
      "favorite": "N",
      "latitude": "41.1677778",
      "listingOnly": "N",
      "longitude": "-106.2525",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "KYST",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "N",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "WY"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "70040",
      "facilityName": "BIG CREEK LAKES CAMPGROUND",
      "faciltyPhoto": "/webphotos/NRSO/pid70040/0/80x53.jpg",
      "favorite": "N",
      "latitude": "40.9363889",
      "listingOnly": "N",
      "longitude": "-106.6116667",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "BIGL",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "75371",
      "facilityName": "BREWERY CREEK GUARD STATION",
      "faciltyPhoto": "/webphotos/NRSO/pid75371/0/80x53.jpg",
      "favorite": "N",
      "latitude": "38.2877778",
      "listingOnly": "N",
      "longitude": "-106.1677778",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "BCGS",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "N",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "73946",
      "facilityName": "SPRUCE MTN FIRE LOOKOUT TOWER",
      "faciltyPhoto": "/webphotos/NRSO/pid73946/0/80x53.jpg",
      "favorite": "N",
      "latitude": "41.2030556",
      "listingOnly": "N",
      "longitude": "-106.2166667",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "SPMT",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "N",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "WY"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "74119",
      "facilityName": "ALVARADO CAMPGROUND",
      "faciltyPhoto": "/webphotos/NRSO/pid74119/0/80x53.jpg",
      "favorite": "N",
      "latitude": "38.0788889",
      "listingOnly": "N",
      "longitude": "-105.5633333",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "ALVA",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "113790",
      "facilityName": "SHEPHERDS RIM CAMPGROUND",
      "faciltyPhoto": "/webphotos/NRSO/pid113790/0/80x53.jpg",
      "favorite": "N",
      "latitude": "39.9947222",
      "listingOnly": "N",
      "longitude": "-107.2427778",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "C790",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "Y",
      "contractID": "KOAI",
      "contractType": "PRIVATE",
      "facilityID": "730182",
      "facilityName": "Carbondale / Crystal River KOA",
      "faciltyPhoto": "/webphotos/KOAI/pid730182/0/80x53.jpg",
      "favorite": "N",
      "latitude": "39.3205083",
      "listingOnly": "Y",
      "longitude": "-107.2084083",
      "regionName": "",
      "reservationChannel": "Web Reservable",
      "shortName": "K0082",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "N",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "70288",
      "facilityName": "LA VISTA CAMPGROUND - LAKE ISABEL",
      "faciltyPhoto": "/webphotos/NRSO/pid70288/0/80x53.jpg",
      "favorite": "N",
      "latitude": "37.9844444",
      "listingOnly": "N",
      "longitude": "-105.0594444",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "LAKV",
      "sitesWithAmps": "Y",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "70329",
      "facilityName": "SOUTHSIDE CAMPGROUND - LAKE ISABEL",
      "faciltyPhoto": "/webphotos/NRSO/pid70329/0/80x53.jpg",
      "favorite": "N",
      "latitude": "37.9827778",
      "listingOnly": "N",
      "longitude": "-105.0575",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "LASS",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "73708",
      "facilityName": "LAKE ISABEL CABIN",
      "faciltyPhoto": "/webphotos/NRSO/pid73708/0/80x53.jpg",
      "favorite": "N",
      "latitude": "37.9811111",
      "listingOnly": "N",
      "longitude": "-105.0502778",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "LISA",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "N",
      "sitesWithSewerHookup": "Y",
      "sitesWithWaterHookup": "Y",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "70320",
      "facilityName": "ST CHARLES CAMPGROUND - LAKE ISABEL",
      "faciltyPhoto": "/webphotos/NRSO/pid70320/0/80x53.jpg",
      "favorite": "N",
      "latitude": "37.9811111",
      "listingOnly": "N",
      "longitude": "-105.0655556",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "LACO",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "Y",
      "contractID": "INDP",
      "contractType": "PRIVATE",
      "facilityID": "721355",
      "facilityName": "Glenwood Canyon Resort",
      "faciltyPhoto": "/webphotos/INDP/pid721355/0/80x53.jpg",
      "favorite": "N",
      "latitude": "39.5593889",
      "listingOnly": "Y",
      "longitude": "-107.2935611",
      "regionName": "",
      "reservationChannel": "Web Reservable",
      "shortName": "GS1255",
      "sitesWithAmps": "Y",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "CO",
      "contractType": "STATE",
      "facilityID": "50035",
      "facilityName": "Pearl Lake State Park",
      "faciltyPhoto": "/webphotos/CO/pid50035/0/80x53.jpg",
      "favorite": "N",
      "latitude": "40.7861111",
      "listingOnly": "N",
      "longitude": "-106.8963889",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "PELA",
      "sitesWithAmps": "Y",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "Lakefront",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "73671",
      "facilityName": "SPRUCE GROUP - LAKE ISABEL",
      "faciltyPhoto": "/webphotos/NRSO/pid73671/0/80x53.jpg",
      "favorite": "N",
      "latitude": "37.9677778",
      "listingOnly": "N",
      "longitude": "-105.0672222",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "LAIS",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "N",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "73670",
      "facilityName": "PONDEROSA GROUP - LAKE ISABEL",
      "faciltyPhoto": "/webphotos/NRSO/pid73670/0/80x53.jpg",
      "favorite": "N",
      "latitude": "37.9677778",
      "listingOnly": "N",
      "longitude": "-105.0672222",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "LAPO",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "N",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "Y",
      "contractID": "KOAI",
      "contractType": "PRIVATE",
      "facilityID": "730472",
      "facilityName": "Pueblo South / Colorado City KOA",
      "faciltyPhoto": "/webphotos/KOAI/pid730472/0/80x53.jpg",
      "favorite": "N",
      "latitude": "37.9594083",
      "listingOnly": "Y",
      "longitude": "-104.7977361",
      "regionName": "",
      "reservationChannel": "Web Reservable",
      "shortName": "K0372",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "N",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "70661",
      "facilityName": "REDSTONE",
      "faciltyPhoto": "/webphotos/NRSO/pid70661/0/80x53.jpg",
      "favorite": "N",
      "latitude": "39.1941667",
      "listingOnly": "N",
      "longitude": "-107.2322222",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "REDS",
      "sitesWithAmps": "Y",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "Y",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "CO",
      "contractType": "STATE",
      "facilityID": "50041",
      "facilityName": "Steamboat Lake State Park",
      "faciltyPhoto": "/webphotos/CO/pid50041/0/80x53.jpg",
      "favorite": "N",
      "latitude": "40.7866667",
      "listingOnly": "N",
      "longitude": "-106.9777778",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "STLA",
      "sitesWithAmps": "Y",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "Lakefront",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "70415",
      "facilityName": "LAKE IRWIN",
      "faciltyPhoto": "/images/nophoto.jpg",
      "favorite": "N",
      "latitude": "38.8811111",
      "listingOnly": "N",
      "longitude": "-107.1069444",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "LAKI",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "70421",
      "facilityName": "BOGAN FLATS CAMPGROUND GRP S",
      "faciltyPhoto": "/webphotos/NRSO/pid70421/0/80x53.jpg",
      "favorite": "N",
      "latitude": "39.0997222",
      "listingOnly": "N",
      "longitude": "-107.2583333",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "BOGA",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "73938",
      "facilityName": "LITTLE BROOKLYN LAKE GUARD",
      "faciltyPhoto": "/images/nophoto.jpg",
      "favorite": "N",
      "latitude": "41.3627778",
      "listingOnly": "N",
      "longitude": "-106.2408333",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "LBLG",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "N",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "WY"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "70039",
      "facilityName": "HAHNS PEAK LAKE",
      "faciltyPhoto": "/images/nophoto.jpg",
      "favorite": "N",
      "latitude": "40.8394444",
      "listingOnly": "N",
      "longitude": "-106.9897222",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "HAHN",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "N",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "147540",
      "facilityName": "Marvine Campground",
      "faciltyPhoto": "/webphotos/NRSO/pid147540/0/80x53.jpg",
      "favorite": "N",
      "latitude": "40.0069444",
      "listingOnly": "N",
      "longitude": "-107.4261111",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "O540",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "PRCG",
      "contractType": "PRIVATE",
      "facilityID": "1068250",
      "facilityName": "Routt County Fairgrounds",
      "faciltyPhoto": "/webphotos/PRCG/pid1068250/0/80x53.jpg",
      "favorite": "N",
      "latitude": "40.4900083",
      "listingOnly": "N",
      "longitude": "-107.2608139",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "H250",
      "sitesWithAmps": "Y",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "Y",
      "sitesWithWaterHookup": "Y",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "75090",
      "facilityName": "SNOW SURVEY CABIN",
      "faciltyPhoto": "/webphotos/NRSO/pid75090/0/80x53.jpg",
      "favorite": "N",
      "latitude": "41.3264389",
      "listingOnly": "N",
      "longitude": "-106.3781611",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "SNOS",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "N",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "WY"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "70707",
      "facilityName": "NORTH FORK CAMPGROUND",
      "faciltyPhoto": "/webphotos/NRSO/pid70707/0/80x53.jpg",
      "favorite": "N",
      "latitude": "40.0583333",
      "listingOnly": "N",
      "longitude": "-107.4497222",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "NOR2",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "74169",
      "facilityName": "HOG PARK CAMPGROUND",
      "faciltyPhoto": "/images/nophoto.jpg",
      "favorite": "N",
      "latitude": "41.0252472",
      "listingOnly": "N",
      "longitude": "-106.8636028",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "HOGP",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "N",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "WY"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "CO",
      "contractType": "STATE",
      "facilityID": "50070",
      "facilityName": "Yampa River State Park",
      "faciltyPhoto": "/webphotos/CO/pid50070/0/80x53.jpg",
      "favorite": "N",
      "latitude": "40.4908333",
      "listingOnly": "N",
      "longitude": "-107.3125",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "YAMP",
      "sitesWithAmps": "Y",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "Riverfront",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "70023",
      "facilityName": "RYAN PARK",
      "faciltyPhoto": "/images/nophoto.jpg",
      "favorite": "N",
      "latitude": "41.3255556",
      "listingOnly": "N",
      "longitude": "-106.4925",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "RYAN",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "N",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "WY"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "Y",
      "contractID": "KOAI",
      "contractType": "PRIVATE",
      "facilityID": "730293",
      "facilityName": "Gunnison KOA",
      "faciltyPhoto": "/webphotos/KOAI/pid730293/0/80x53.jpg",
      "favorite": "N",
      "latitude": "38.5293111",
      "listingOnly": "Y",
      "longitude": "-106.9465583",
      "regionName": "",
      "reservationChannel": "Web Reservable",
      "shortName": "K0193",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "N",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "73896",
      "facilityName": "BRUSH CREEK WORK CENTER BARRACK",
      "faciltyPhoto": "/webphotos/NRSO/pid73896/0/80x53.jpg",
      "favorite": "N",
      "latitude": "41.34",
      "listingOnly": "N",
      "longitude": "-106.52",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "BCWB",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "N",
      "sitesWithSewerHookup": "Y",
      "sitesWithWaterHookup": "Y",
      "sitesWithWaterfront": "",
      "state": "WY"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "93268",
      "facilityName": "UPPER CROSSING GUARD STATION",
      "faciltyPhoto": "/webphotos/NRSO/pid93268/0/80x53.jpg",
      "favorite": "N",
      "latitude": "38.1388889",
      "listingOnly": "N",
      "longitude": "-106.4561111",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "UCGS",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "N",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "CO",
      "contractType": "STATE",
      "facilityID": "50034",
      "facilityName": "Paonia State Park",
      "faciltyPhoto": "/webphotos/CO/pid50034/0/80x53.jpg",
      "favorite": "N",
      "latitude": "38.9616667",
      "listingOnly": "N",
      "longitude": "-107.3391667",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "PAON",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "Lakefront",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "CO",
      "contractType": "STATE",
      "facilityID": "52700",
      "facilityName": "Elkhead Reservoir State Park",
      "faciltyPhoto": "/images/nophoto.jpg",
      "favorite": "N",
      "latitude": "40.5569444",
      "listingOnly": "N",
      "longitude": "-107.3805556",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "B700",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "Lakefront",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "75041",
      "facilityName": "BOTTLE CREEK GROUP PICNIC SITE",
      "faciltyPhoto": "/webphotos/NRSO/pid75041/0/80x53.jpg",
      "favorite": "N",
      "latitude": "41.1708333",
      "listingOnly": "N",
      "longitude": "-106.8991667",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "BOTT",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "N",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "WY"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "Y",
      "contractID": "IND2",
      "contractType": "PRIVATE",
      "facilityID": "720233",
      "facilityName": "Rent an RV for Your Next Adventure",
      "faciltyPhoto": "/webphotos/IND2/pid720233/0/80x53.jpg",
      "favorite": "N",
      "latitude": "41.1292278",
      "listingOnly": "Y",
      "longitude": "-103.0166333",
      "regionName": "",
      "reservationChannel": "Web Reservable",
      "shortName": "M133",
      "sitesWithAmps": "Y",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "Lakefront",
      "state": "NE"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "96669",
      "facilityName": "Pinon Flats Campground",
      "faciltyPhoto": "/webphotos/NRSO/pid96669/0/80x53.jpg",
      "favorite": "N",
      "latitude": "37.7333333",
      "listingOnly": "N",
      "longitude": "-105.5166667",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "D669",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "74062",
      "facilityName": "STEVENS CREEK CAMPGROUND",
      "faciltyPhoto": "/webphotos/NRSO/pid74062/0/80x53.jpg",
      "favorite": "N",
      "latitude": "38.4911111",
      "listingOnly": "N",
      "longitude": "-107.0969444",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "STEC",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "Lakefront",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "Y",
      "contractID": "INDP",
      "contractType": "PRIVATE",
      "facilityID": "721464",
      "facilityName": "Gunnison Lakeside RV Park &amp; Cabins",
      "faciltyPhoto": "/webphotos/INDP/pid721464/0/80x53.jpg",
      "favorite": "N",
      "latitude": "38.4866694",
      "listingOnly": "Y",
      "longitude": "-107.1024389",
      "regionName": "",
      "reservationChannel": "Web Reservable",
      "shortName": "GS1364",
      "sitesWithAmps": "Y",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "Y",
      "contractID": "KOAI",
      "contractType": "PRIVATE",
      "facilityID": "730330",
      "facilityName": "La Junta KOA",
      "faciltyPhoto": "/webphotos/KOAI/pid730330/0/80x53.jpg",
      "favorite": "N",
      "latitude": "37.9990028",
      "listingOnly": "Y",
      "longitude": "-103.5893167",
      "regionName": "",
      "reservationChannel": "Web Reservable",
      "shortName": "K0230",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "N",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "Y",
      "contractID": "INDP",
      "contractType": "PRIVATE",
      "facilityID": "720718",
      "facilityName": "Cabela&apos;s RV Park",
      "faciltyPhoto": "/images/nophoto.jpg",
      "favorite": "N",
      "latitude": "41.1158389",
      "listingOnly": "Y",
      "longitude": "-102.9586806",
      "regionName": "",
      "reservationChannel": "Web Reservable",
      "shortName": "GS0618",
      "sitesWithAmps": "Y",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "NE"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "118990",
      "facilityName": "BOW RIVER RANGER STATION",
      "faciltyPhoto": "/webphotos/NRSO/pid118990/0/80x53.jpg",
      "favorite": "N",
      "latitude": "41.5263889",
      "listingOnly": "N",
      "longitude": "-106.3891667",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "D990",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "N",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "WY"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "Y",
      "contractID": "KOAI",
      "contractType": "PRIVATE",
      "facilityID": "730220",
      "facilityName": "Craig KOA",
      "faciltyPhoto": "/webphotos/KOAI/pid730220/0/80x53.jpg",
      "favorite": "N",
      "latitude": "40.5102028",
      "listingOnly": "Y",
      "longitude": "-107.5138472",
      "regionName": "",
      "reservationChannel": "Web Reservable",
      "shortName": "K0120",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "N",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "75367",
      "facilityName": "CARNERO GUARD STATION",
      "faciltyPhoto": "/webphotos/NRSO/pid75367/0/80x53.jpg",
      "favorite": "N",
      "latitude": "37.9883333",
      "listingOnly": "N",
      "longitude": "-106.4241667",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "CARN",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "74064",
      "facilityName": "EAST ELK CREEK GROUP CAMPSITE",
      "faciltyPhoto": "/webphotos/NRSO/pid74064/0/80x53.jpg",
      "favorite": "N",
      "latitude": "38.4855556",
      "listingOnly": "N",
      "longitude": "-107.1722222",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "EEGS",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "74060",
      "facilityName": "ELK CREEK CAMPGROUND",
      "faciltyPhoto": "/webphotos/NRSO/pid74060/0/80x53.jpg",
      "favorite": "N",
      "latitude": "38.4677778",
      "listingOnly": "N",
      "longitude": "-107.1758333",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "ELKC",
      "sitesWithAmps": "Y",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "Y",
      "contractID": "IND2",
      "contractType": "PRIVATE",
      "facilityID": "720139",
      "facilityName": "Rent an RV for Your Next Adventure",
      "faciltyPhoto": "/webphotos/IND2/pid720139/0/80x53.jpg",
      "favorite": "N",
      "latitude": "37.7195111",
      "listingOnly": "Y",
      "longitude": "-105.8134778",
      "regionName": "",
      "reservationChannel": "Web Reservable",
      "shortName": "M039",
      "sitesWithAmps": "Y",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "Lakefront",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "74096",
      "facilityName": "SANDSTONE CABIN",
      "faciltyPhoto": "/webphotos/NRSO/pid74096/0/80x53.jpg",
      "favorite": "N",
      "latitude": "41.11",
      "listingOnly": "N",
      "longitude": "-107.17",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "SACA",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "N",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "WY"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "CO",
      "contractType": "STATE",
      "facilityID": "50029",
      "facilityName": "Lathrop State Park",
      "faciltyPhoto": "/webphotos/CO/pid50029/0/80x53.jpg",
      "favorite": "N",
      "latitude": "37.6047222",
      "listingOnly": "N",
      "longitude": "-104.8386111",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "LAST",
      "sitesWithAmps": "Y",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "74063",
      "facilityName": "RED CREEK GROUP SITE",
      "faciltyPhoto": "/webphotos/NRSO/pid74063/0/80x53.jpg",
      "favorite": "N",
      "latitude": "38.4852778",
      "listingOnly": "N",
      "longitude": "-107.24",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "RCGS",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "CO",
      "contractType": "STATE",
      "facilityID": "50066",
      "facilityName": "San Luis Lakes State Wildlife Area",
      "faciltyPhoto": "/webphotos/CO/pid50066/0/80x53.jpg",
      "favorite": "N",
      "latitude": "37.675",
      "listingOnly": "N",
      "longitude": "-105.7391667",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "SALU",
      "sitesWithAmps": "Y",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "72140",
      "facilityName": "STONE CELLAR GUARD STATION",
      "faciltyPhoto": "/webphotos/NRSO/pid72140/0/80x53.jpg",
      "favorite": "N",
      "latitude": "38.0191667",
      "listingOnly": "N",
      "longitude": "-106.6813889",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "STNS",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "N",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "73891",
      "facilityName": "JACK CREEK CREW QUARTERS",
      "faciltyPhoto": "/webphotos/NRSO/pid73891/0/80x53.jpg",
      "favorite": "N",
      "latitude": "41.27",
      "listingOnly": "N",
      "longitude": "-107.1116667",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "JACC",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "N",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "WY"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "73892",
      "facilityName": "JACK CREEK GUARD STATION",
      "faciltyPhoto": "/webphotos/NRSO/pid73892/0/80x53.jpg",
      "favorite": "N",
      "latitude": "41.27",
      "listingOnly": "N",
      "longitude": "-107.1116667",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "JCGS",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "N",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "WY"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "PRCG",
      "contractType": "PRIVATE",
      "facilityID": "1062600",
      "facilityName": "Blue Mesa Escape",
      "faciltyPhoto": "/webphotos/PRCG/pid1062600/0/80x53.jpg",
      "favorite": "N",
      "latitude": "38.4513889",
      "listingOnly": "N",
      "longitude": "-107.3133333",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "B600",
      "sitesWithAmps": "Y",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "Y",
      "sitesWithWaterHookup": "Y",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "74061",
      "facilityName": "LAKE FORK CAMPGROUND",
      "faciltyPhoto": "/webphotos/NRSO/pid74061/0/80x53.jpg",
      "favorite": "N",
      "latitude": "38.4588889",
      "listingOnly": "N",
      "longitude": "-107.33",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "LAFO",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "Lakefront",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "Y",
      "contractID": "INDP",
      "contractType": "PRIVATE",
      "facilityID": "722073",
      "facilityName": "Robidoux RV Park",
      "faciltyPhoto": "/webphotos/INDP/pid722073/0/80x53.jpg",
      "favorite": "N",
      "latitude": "41.8113389",
      "listingOnly": "Y",
      "longitude": "-103.6750306",
      "regionName": "",
      "reservationChannel": "Web Reservable",
      "shortName": "GS1973",
      "sitesWithAmps": "Y",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "NE"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "CO",
      "contractType": "STATE",
      "facilityID": "50072",
      "facilityName": "John Martin Reservoir State Park",
      "faciltyPhoto": "/webphotos/CO/pid50072/0/80x53.jpg",
      "favorite": "N",
      "latitude": "38.0847222",
      "listingOnly": "N",
      "longitude": "-102.9583333",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "JOMA",
      "sitesWithAmps": "Y",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "Lakefront",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "Y",
      "contractID": "KOAI",
      "contractType": "PRIVATE",
      "facilityID": "730108",
      "facilityName": "Alamosa KOA",
      "faciltyPhoto": "/webphotos/KOAI/pid730108/0/80x53.jpg",
      "favorite": "N",
      "latitude": "37.4745528",
      "listingOnly": "Y",
      "longitude": "-105.7985806",
      "regionName": "",
      "reservationChannel": "Web Reservable",
      "shortName": "K0008",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "N",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "Y",
      "contractID": "INDP",
      "contractType": "PRIVATE",
      "facilityID": "721330",
      "facilityName": "South Fork Campground",
      "faciltyPhoto": "/webphotos/INDP/pid721330/0/80x53.jpg",
      "favorite": "N",
      "latitude": "37.6772806",
      "listingOnly": "Y",
      "longitude": "-106.5684889",
      "regionName": "",
      "reservationChannel": "Web Reservable",
      "shortName": "GS1230",
      "sitesWithAmps": "Y",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "97524",
      "facilityName": "ALDER GUARD STATION",
      "faciltyPhoto": "/webphotos/NRSO/pid97524/0/80x53.jpg",
      "favorite": "N",
      "latitude": "37.7044444",
      "listingOnly": "N",
      "longitude": "-106.6466667",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "B524",
      "sitesWithAmps": "Y",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "148540",
      "facilityName": "BEAR LAKE CAMPGROUND (CO)",
      "faciltyPhoto": "/webphotos/NRSO/pid148540/0/80x53.jpg",
      "favorite": "N",
      "latitude": "37.3253611",
      "listingOnly": "N",
      "longitude": "-105.1388611",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "P540",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "Y",
      "contractID": "INDP",
      "contractType": "PRIVATE",
      "facilityID": "720651",
      "facilityName": "Peacock Meadows Riverside RV Park",
      "faciltyPhoto": "/webphotos/INDP/pid720651/0/80x53.jpg",
      "favorite": "N",
      "latitude": "37.6730806",
      "listingOnly": "Y",
      "longitude": "-106.6190111",
      "regionName": "",
      "reservationChannel": "Web Reservable",
      "shortName": "GS0551",
      "sitesWithAmps": "Y",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "73707",
      "facilityName": "RIVER HILL",
      "faciltyPhoto": "/webphotos/NRSO/pid73707/0/80x53.jpg",
      "favorite": "N",
      "latitude": "38.2122222",
      "listingOnly": "N",
      "longitude": "-107.4302778",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "RIVH",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "N",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "148541",
      "facilityName": "BLUE LAKE CAMPGROUND",
      "faciltyPhoto": "/webphotos/NRSO/pid148541/0/80x53.jpg",
      "favorite": "N",
      "latitude": "37.3132167",
      "listingOnly": "N",
      "longitude": "-105.1389667",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "K541",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "Y",
      "contractID": "INDP",
      "contractType": "PRIVATE",
      "facilityID": "721797",
      "facilityName": "Alpine Trails RV Park",
      "faciltyPhoto": "/webphotos/INDP/pid721797/0/80x53.jpg",
      "favorite": "N",
      "latitude": "37.6717528",
      "listingOnly": "Y",
      "longitude": "-106.6426833",
      "regionName": "",
      "reservationChannel": "Web Reservable",
      "shortName": "GS1697",
      "sitesWithAmps": "Y",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NE",
      "contractType": "STATE",
      "facilityID": "230121",
      "facilityName": "Lake Minatare SRA",
      "faciltyPhoto": "/webphotos/NE/pid230121/0/80x53.jpg",
      "favorite": "N",
      "latitude": "41.9330556",
      "listingOnly": "N",
      "longitude": "-103.4955556",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "0121",
      "sitesWithAmps": "Y",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "NE"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "72298",
      "facilityName": "JACKSON GUARD STATION",
      "faciltyPhoto": "/webphotos/NRSO/pid72298/0/80x53.jpg",
      "favorite": "N",
      "latitude": "38.2133333",
      "listingOnly": "N",
      "longitude": "-107.5232444",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "JACS",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "N",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "74118",
      "facilityName": "PURGATOIRE CAMPGROUND",
      "faciltyPhoto": "/webphotos/NRSO/pid74118/0/80x53.jpg",
      "favorite": "N",
      "latitude": "37.2525",
      "listingOnly": "N",
      "longitude": "-105.1091667",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "PURG",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "73706",
      "facilityName": "MARSHALL PARK",
      "faciltyPhoto": "/webphotos/NRSO/pid73706/0/80x53.jpg",
      "favorite": "N",
      "latitude": "37.7888889",
      "listingOnly": "N",
      "longitude": "-106.9858333",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "MASH",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "N",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "114189",
      "facilityName": "OFF COW CAMP CABIN",
      "faciltyPhoto": "/webphotos/NRSO/pid114189/0/80x53.jpg",
      "favorite": "N",
      "latitude": "37.4894444",
      "listingOnly": "N",
      "longitude": "-106.4716667",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "B189",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "N",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "Springs",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "114190",
      "facilityName": "FITTON GUARD STATION CABIN",
      "faciltyPhoto": "/webphotos/NRSO/pid114190/0/80x53.jpg",
      "favorite": "N",
      "latitude": "37.4880556",
      "listingOnly": "N",
      "longitude": "-106.4686111",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "A190",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "N",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "Springs",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "70537",
      "facilityName": "BIG MEADOWS DEL NORTE",
      "faciltyPhoto": "/webphotos/NRSO/pid70537/0/80x53.jpg",
      "favorite": "N",
      "latitude": "37.5380556",
      "listingOnly": "N",
      "longitude": "-106.7961111",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "BIGS",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "Riverfront",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "Y",
      "contractID": "KOAI",
      "contractType": "PRIVATE",
      "facilityID": "730477",
      "facilityName": "Rawlins KOA",
      "faciltyPhoto": "/webphotos/KOAI/pid730477/0/80x53.jpg",
      "favorite": "N",
      "latitude": "41.7798639",
      "listingOnly": "Y",
      "longitude": "-107.22975",
      "regionName": "",
      "reservationChannel": "Web Reservable",
      "shortName": "K0377",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "N",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "WY"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "Y",
      "contractID": "INDP",
      "contractType": "PRIVATE",
      "facilityID": "720130",
      "facilityName": "Western Hills Campground",
      "faciltyPhoto": "/webphotos/INDP/pid720130/0/80x53.jpg",
      "favorite": "N",
      "latitude": "41.7852306",
      "listingOnly": "Y",
      "longitude": "-107.2666389",
      "regionName": "",
      "reservationChannel": "Web Reservable",
      "shortName": "GS0030",
      "sitesWithAmps": "Y",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "WY"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "Y",
      "contractID": "INDP",
      "contractType": "PRIVATE",
      "facilityID": "720120",
      "facilityName": "Red Desert Rose RV Park",
      "faciltyPhoto": "/webphotos/INDP/pid720120/0/80x53.jpg",
      "favorite": "N",
      "latitude": "41.7833806",
      "listingOnly": "Y",
      "longitude": "-107.2722111",
      "regionName": "",
      "reservationChannel": "Web Reservable",
      "shortName": "GS0020",
      "sitesWithAmps": "Y",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "WY"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "75106",
      "facilityName": "ELWOOD CABIN",
      "faciltyPhoto": "/images/nophoto.jpg",
      "favorite": "N",
      "latitude": "37.4041667",
      "listingOnly": "N",
      "longitude": "-106.6386111",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "ELWC",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "N",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "97369",
      "facilityName": "PLATORO CABIN 2",
      "faciltyPhoto": "/images/nophoto.jpg",
      "favorite": "N",
      "latitude": "37.3527778",
      "listingOnly": "N",
      "longitude": "-106.5280556",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "F369",
      "sitesWithAmps": "Y",
      "sitesWithPetsAllowed": "N",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "Y",
      "sitesWithWaterfront": "Riverfront",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "97370",
      "facilityName": "PLATORO CABIN 1",
      "faciltyPhoto": "/webphotos/NRSO/pid97370/0/80x53.jpg",
      "favorite": "N",
      "latitude": "37.3527778",
      "listingOnly": "N",
      "longitude": "-106.5280556",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "E370",
      "sitesWithAmps": "Y",
      "sitesWithPetsAllowed": "N",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "Y",
      "sitesWithWaterfront": "Riverfront",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "70682",
      "facilityName": "THIRTY MILE",
      "faciltyPhoto": "/webphotos/NRSO/pid70682/0/80x53.jpg",
      "favorite": "N",
      "latitude": "37.7233333",
      "listingOnly": "N",
      "longitude": "-107.2575",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "THMI",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "N",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "70026",
      "facilityName": "LAKE FORK(RIO GRANDE NATL FORE",
      "faciltyPhoto": "/images/nophoto.jpg",
      "favorite": "N",
      "latitude": "37.2997222",
      "listingOnly": "N",
      "longitude": "-106.4666667",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "LAKF",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "Riverfront",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "72273",
      "facilityName": "WEST FORK CAMPGROUND",
      "faciltyPhoto": "/webphotos/NRSO/pid72273/0/80x53.jpg",
      "favorite": "N",
      "latitude": "37.4447222",
      "listingOnly": "N",
      "longitude": "-106.9030556",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "WEFO",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "WY",
      "contractType": "STATE",
      "facilityID": "1220024",
      "facilityName": "Seminoe State Park ",
      "faciltyPhoto": "/webphotos/WY/pid1220024/0/80x53.jpg",
      "favorite": "N",
      "latitude": "42.1363889",
      "listingOnly": "N",
      "longitude": "-106.8913889",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "WY24",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "Y",
      "sitesWithWaterHookup": "Y",
      "sitesWithWaterfront": "",
      "state": "WY"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "72365",
      "facilityName": "PALISADES HORSE CAMP",
      "faciltyPhoto": "/webphotos/NRSO/pid72365/0/80x53.jpg",
      "favorite": "N",
      "latitude": "37.5463889",
      "listingOnly": "N",
      "longitude": "-107.1966667",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "PHCA",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "72276",
      "facilityName": "EAST FORK CAMPGROUND",
      "faciltyPhoto": "/webphotos/NRSO/pid72276/0/80x53.jpg",
      "favorite": "N",
      "latitude": "37.3741667",
      "listingOnly": "N",
      "longitude": "-106.8866667",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "EACA",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "Riverfront",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "N",
      "contractID": "NRSO",
      "contractType": "FEDERAL",
      "facilityID": "133990",
      "facilityName": "WILLIAMS CREEK CAMPGROUND",
      "faciltyPhoto": "/webphotos/NRSO/pid133990/0/80x53.jpg",
      "favorite": "N",
      "latitude": "37.4951972",
      "listingOnly": "N",
      "longitude": "-107.2266972",
      "regionName": "",
      "reservationChannel": "",
      "shortName": "K990",
      "sitesWithAmps": "N",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "Y",
      "sitesWithWaterHookup": "Y",
      "sitesWithWaterfront": "Riverfront",
      "state": "CO"
    }
  },
  {
    "type": "element",
    "name": "result",
    "attributes": {
      "agencyIcon": "",
      "agencyName": "",
      "availabilityStatus": "Y",
      "contractID": "INDP",
      "contractType": "PRIVATE",
      "facilityID": "721336",
      "facilityName": "Pagosa Riverside Campground",
      "faciltyPhoto": "/webphotos/INDP/pid721336/0/80x53.jpg",
      "favorite": "N",
      "latitude": "37.2860806",
      "listingOnly": "Y",
      "longitude": "-106.9795",
      "regionName": "",
      "reservationChannel": "Web Reservable",
      "shortName": "GS1236",
      "sitesWithAmps": "Y",
      "sitesWithPetsAllowed": "Y",
      "sitesWithSewerHookup": "N",
      "sitesWithWaterHookup": "N",
      "sitesWithWaterfront": "",
      "state": "CO"
    }
  }
];

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
