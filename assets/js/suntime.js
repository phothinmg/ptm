/**
 * These Codes are  base on ;
 *  https://gist.github.com/ruiokada/b28076d4911820ddcbbc
 *
 * Computations are based on the formulas found in:
 * https://en.wikipedia.org/wiki/Julian_day#Converting_Julian_or_Gregorian_calendar_date_to_Julian_Day_Number
 * https://en.wikipedia.org/wiki/Sunrise_equation#Complete_calculation_on_Earth
 * https://en.wikipedia.org/wiki/Daytime
 * https://en.wikipedia.org/wiki/Equation_of_time
 *
 */

(function ($) {
  const cities_data = [
    {
      city: "Nay Pyi Daw",
      state_id: 0,
      state: "Union Territory",
      citymm: "နေပြည်တော်",
      latitude: 19.76426959059103,
      longitude: 96.0787901880646,
      timezone: 6.5,
    },
    {
      city: "Myitkyina",
      state_id: 1,
      state: "Kachin",
      citymm: "မြစ်ကြီးနား",
      latitude: 25.547691521130595,
      longitude: 97.27262049197644,
      timezone: 6.5,
    },
    {
      city: "Loikaw",
      state_id: 2,
      state: "Kayah",
      citymm: "လွိုင်ကော်",
      latitude: 19.675149444979333,
      longitude: 97.21277445941172,
      timezone: 6.5,
    },
    {
      city: "Hpa-An",
      state_id: 3,
      state: "Kayin",
      citymm: "ဘားအံ",
      latitude: 16.87732198060054,
      longitude: 97.64365335697266,
      timezone: 6.5,
    },
    {
      city: "Hakha",
      state_id: 4,
      state: "Chin",
      citymm: "ဟားခါး",
      latitude: 22.64245099779985,
      longitude: 93.60420222019783,
      timezone: 6.5,
    },
    {
      city: "Monywa",
      state_id: 5,
      state: "Sagaing",
      citymm: "မုံရွာ",
      latitude: 22.121057779609323,
      longitude: 95.15280257043605,
      timezone: 6.5,
    },
    {
      city: "Dawei",
      state_id: 6,
      state: "Tanintharyi",
      citymm: "ထားဝယ်",
      latitude: 14.08259028937109,
      longitude: 98.19356901660903,
      timezone: 6.5,
    },
    {
      city: "Bago",
      state_id: 7,
      state: "Bago",
      citymm: "ပဲခူး",
      latitude: 20.1545539857668,
      longitude: 96.46703029945,
      timezone: 6.5,
    },
    {
      city: "Magway",
      state_id: 8,
      state: "Magway",
      citymm: "မကွေး",
      latitude: 20.1545539857668,
      longitude: 94.9453105738894,
      timezone: 6.5,
    },
    {
      city: "Mandalay",
      state_id: 9,
      state: "Mandalay",
      citymm: "မန္တလေး",
      latitude: 21.963584835420896,
      longitude: 96.08440368824961,
      timezone: 6.5,
    },
    {
      city: "Mawlamyine",
      state_id: 10,
      state: "Mon",
      citymm: "မော်လမြိုင်",
      latitude: 16.45471871530237,
      longitude: 97.64459517809713,
      timezone: 6.5,
    },
    {
      city: "Sittwe",
      state_id: 11,
      state: "Rakhine",
      citymm: "စစ်တွေ",
      latitude: 20.15376619273015,
      longitude: 92.86811744580149,
      timezone: 6.5,
    },
    {
      city: "Yangon",
      state_id: 12,
      state: "Yangon",
      citymm: "ရန်ကုန်",
      latitude: 16.843019937737683,
      longitude: 96.15821203942693,
      timezone: 6.5,
    },
    {
      city: "Taunggyi",
      state_id: 13,
      state: "Shan(South)",
      citymm: "တောင်ကြီး",
      latitude: 20.79077515436522,
      longitude: 97.03366156892119,
      timezone: 6.5,
    },
    {
      city: "Lashio",
      state_id: 13,
      state: "Shan(North)",
      citymm: "လားရှိုး",
      latitude: 22.967982399898016,
      longitude: 97.75290018248508,
      timezone: 6.5,
    },
    {
      city: "Keng Tung",
      state_id: 13,
      state: "Shan(East)",
      citymm: "ကျိုင်းတုံ",
      latitude: 21.294463560040654,
      longitude: 99.59403154209312,
      timezone: 6.5,
    },
    {
      city: "Pathein",
      state_id: 14,
      state: " Ayeyarwaddy",
      citymm: "ပုသိမ်",
      latitude: 16.783431381189967,
      longitude: 94.72187792413753,
      timezone: 6.5,
    },
  ];
  const RADIANS_PER_DEGREE = Math.PI / 180.0;
  const DEGREES_PER_RADIAN = 180.0 / Math.PI;
  const DAYS_PER_YEAR = 365;
  const _DAYS_PER_LEAP_YEAR = 366;
  const _DAYS_PER_CENTURY = 36524;
  const _DAYS_PER_400_YEARS = 146097;
  const J2000 = 2451545.0009;
  const SOLAR_NOON_OFFSET = 12;
  const MAX_COS_OMEGA = 1;
  const MIN_COS_OMEGA = -1;
  const SOLAR_ALTITUDE = -0.83;
  const EARTH_TILT = 23.45;
  // current
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1;
  const currentYear = currentDate.getFullYear();
  const currentDay = currentDate.getDate();
  // julian day
  const a = Math.floor((14 - currentMonth) / 12);
  const y = currentYear + 4800 - a;
  const m = currentMonth + 12 * a - 3;
  const j_day =
    currentDay +
    Math.floor((153 * m + 2) / 5) +
    DAYS_PER_YEAR * y +
    Math.floor(y / 4) -
    Math.floor(y / 100) +
    Math.floor(y / 400) -
    32045;
  // Sun equation

  /**
   * Calculate the local time of sunrise and sunset.
   *
   * @param {number} latitude The latitude of the location.
   * @param {number} longitude The longitude of the location.
   * @param {number} [timezone] The timezone offset in hours.
   *
   * @returns {Array<number>} An array containing the local time of sunrise and sunset.
   */
  function sun(latitude, longitude, timezone) {
    const n_star = j_day - J2000 - longitude / 360.0;
    const n = Math.floor(n_star + 0.5);
    const solar_noon = J2000 - longitude / 360.0 + n;
    const M = 356.047 + 0.9856002585 * n;
    const C =
      1.9148 * Math.sin(M * RADIANS_PER_DEGREE) +
      0.02 * Math.sin(2 * M * RADIANS_PER_DEGREE) +
      0.0003 * Math.sin(3 * M * RADIANS_PER_DEGREE);
    const L = (M + 102.9372 + C + 180) % 360;
    const j_transit =
      solar_noon +
      0.0053 * Math.sin(M * RADIANS_PER_DEGREE) -
      0.0069 * Math.sin(2 * L * RADIANS_PER_DEGREE);
    const D =
      Math.asin(
        Math.sin(L * RADIANS_PER_DEGREE) *
          Math.sin(EARTH_TILT * RADIANS_PER_DEGREE)
      ) * DEGREES_PER_RADIAN;
    const cos_omega =
      (Math.sin(SOLAR_ALTITUDE * RADIANS_PER_DEGREE) -
        Math.sin(latitude * RADIANS_PER_DEGREE) *
          Math.sin(D * RADIANS_PER_DEGREE)) /
      (Math.cos(latitude * RADIANS_PER_DEGREE) *
        Math.cos(D * RADIANS_PER_DEGREE));
    if (cos_omega > MAX_COS_OMEGA) {
      return [null, -1];
    }
    //
    if (cos_omega < MIN_COS_OMEGA) {
      return [-1, null];
    }
    const omega = Math.acos(cos_omega) * DEGREES_PER_RADIAN;
    const j_set = j_transit + omega / 360.0;
    const j_rise = j_transit - omega / 360.0;
    const utc_time_set = 24 * (j_set - j_day) + SOLAR_NOON_OFFSET;
    const utc_time_rise = 24 * (j_rise - j_day) + SOLAR_NOON_OFFSET;
    const tz_offset =
      timezone === undefined
        ? (-1 * currentDate.getTimezoneOffset()) / 60
        : timezone;
    const local_rise = (utc_time_rise + tz_offset) % 24;
    const local_set = (utc_time_set + tz_offset) % 24;
    return [local_rise, local_set];
  }
  //   DOM
  function timeDiff(decimalTime1, decimalTime2) {
    const seconds1 = Math.floor(decimalTime1 * 3600);
    const seconds2 = Math.floor(decimalTime2 * 3600);
    const diffSeconds = Math.abs(seconds1 - seconds2);
    const decimalDiff = diffSeconds / 3600;
    const hours = Math.floor(decimalDiff);
    const minutes = Math.floor((decimalDiff - hours) * 60);
    const seconds = Math.floor(((decimalDiff - hours) * 60 - minutes) * 60);
    const formattedHours = hours.toString().padStart(2, "0");
    const formattedMinutes = minutes.toString().padStart(2, "0");
    const formattedSeconds = seconds.toString().padStart(2, "0");
    const formattedTimeDiff = `${formattedHours} : ${formattedMinutes} : ${formattedSeconds}`;

    return formattedTimeDiff;
  }
  function convertDecimalTime(decimalTime) {
    const hours = Math.floor(decimalTime);
    const minutes = Math.floor((decimalTime - hours) * 60);
    const seconds = Math.floor(((decimalTime - hours) * 60 - minutes) * 60);
    let formattedHours = hours.toString().padStart(2, "0");
    const formattedMinutes = minutes.toString().padStart(2, "0");
    const formattedSeconds = seconds.toString().padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";
    if (hours > 12) {
      formattedHours = (hours - 12).toString().padStart(2, "0");
    } else if (hours === 0) {
      formattedHours = "12";
    }
    const formattedTime =
      formattedHours +
      ":" +
      formattedMinutes +
      ":" +
      formattedSeconds +
      " " +
      ampm;

    return formattedTime;
  }
  function mmSunTime(latitude, longitude, timezone) {
    const [localRise, localSet] = sun(latitude, longitude, timezone);
    let sunrise = "N/A";
    let sunset = "N/A";
    let daytime = "N/A";
    if (localRise !== null && localSet !== null) {
      sunrise = convertDecimalTime(localRise);
      sunset = convertDecimalTime(localSet);
      daytime = timeDiff(localRise, localSet);
    }
    return {
      sunrise,
      sunset,
      daytime,
    };
  }
  function citiesDayTime() {
    return cities_data.map((city) => {
      const mmst = mmSunTime(city.latitude, city.longitude, city.timezone);
      return {
        city: city.city,
        state: city.state,
        sunrise: mmst.sunrise,
        sunset: mmst.sunset,
        daytime: mmst.daytime,
      };
    });
  }
  const trs = citiesDayTime()
    .map((t) => {
      return `<tr><td data-label="City">${t.city}</td><td data-label="State/Region">${t.state}</td><td data-label="Sunrise">${t.sunrise}</td><td data-label="Sunset">${t.sunset}</td><td data-label="Day Length">${t.daytime}</td></tr>`;
    })
    .join("\n");

  const tbody = $.document.getElementById("suntime");
  if (tbody) {
    tbody.innerHTML = trs;
  }
  const today = $.document.getElementById("today");
  const dateTime = new Date().toLocaleString("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit",
    weekday: "short",
  });
  if (today) {
    today.innerHTML = dateTime;
  }
})(window);
