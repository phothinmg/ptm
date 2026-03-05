---
layout: post
title: Julian Period and Julian Day
date: 2025-11-08
---

<!-- markdownlint-disable MD001 -->

### Julian Period

ပြင်သစ်ပညာရှင် [Joseph Justus Scaliger][jjc](1540-1609) သည် နှစ်များကိုရေတွက်ရာတွင် [BC][Anno_Domini] [AD][Anno_Domini] တွေထည့်တွက်စရာမလိုသော နှစ်စဉ် အပေါင်းဂဏန်းတစ်ခု သတ်မှတ်ရန် စဥ်းစားခဲ့ပြီးယခုခေတ်လူသိများသော [Julian Period][julian_period]ကိုမိတ်ဆက်ခဲ့သည်။

သူ၏[Julian Period][julian_period]သည် 4713 BCEဇန်နဝါရီလ 1 ရက်နေ့ UTCစံတော်ချိန် နေ့လည် 12 နာရီမှာ စတင်ပြီး နှစ်ပေါင်း 7980 ကြာမြင့်မည်ဖြစ်သည်။နှစ်ပေါင်း 7980 ကြာပြီးနောက်မှာ 1 ကနေ ပြန်စမည်ဖြစ်သည်။တစ်ကြိမ်လျင် နှစ်ပေါင်း 7980 ရအောင် [Solar cycle][solar_cycle] ,[Lunar cycle (Metonic cycle)][lunar_cycle] နှင့် ,[Indiction cycle][indiction_cycle]တို့အားအခြေခံပြီးအောက်ပါအတိုင်းတွက်ချက်ထားခြင်းဖြစ်သည်။

$ 28 \left(\text{solar cycle}\right) \times 19 \left(\text{lunar cycle}\right) \times 15 \left(\text{indiction cycle}\right) = 7980 \text{ years} $

ယခုလိုတွက်ချက်ရခြင်း အကြောင်းအရင်းမှာ [BC][Anno_Domini] 4713 တွင် [Solar cycle][solar_cycle] ,[Lunar cycle (Metonic cycle)][lunar_cycle] နှင့် ,[Indiction cycle][indiction_cycle] တန်ဖိုးအားလုံး 1 ဖြစ်နေပီး နောက်တစ်ကြိမ် နှစ်ပေါင်း 7980 အကြာ [AD][Anno_Domini] 3268 တွင် ထပ်မံဖြစ်ပေါ်မည်ဖြစ်သောကြောင့်ဖြစ်သည်။

### Julian Day And Julian Day Number

Julian Day [[JD][jd]] ဆိုသည်မှာ Julian Period အစမှ စတင်၍ တောက်လျောက်ရေတွက်လာသော စုစုပေါင်းရက်အရေအတွက်ဖြစ်သည်။ Julian Day Number [[JDN][jdn]] ဆိုသည်မှာ Julian Day [[JD][jd]] ၏ ကိန်းပြည့်အပိုင်းဖြစ်သည်။

ပြက္ခဒိန်များကဲ့ သို့ နှစ် လ ရက် ရေတွက်ခြင်းမဟုတ်ပါ စမှတ်မှရေတွက်ခဲ့သော စုစုပေါင်းရက်အရေအတွက်သာဖြစ်သည်။ နာရီ မိနစ် စက္ကန့်များအတွက်လည်း ရက်တစ်ရက်၏ အပိုင်းကိန်း (သို့) ကိန်းပြည့်နောက်မှ ဒသမကိန်းအဖြစ်ဖော်ပြသည်။ ပုံမှန်ပြက္ခဒိန် ရက်စွဲ `25.11.2025` မနက် `00:00` နာရီအတွက် `JD = 2461004.5` ဖြစ်သည်။ Julian Day [[JD][jd]] စတင်ရေတွက်သည်မှာ နေ့လည်မွန်းတည့်ချိန်မှဖြစ်သည့်အတွက် `25.11.2025` နေ့လည် `12`နာရီအတွက်ဆိုလျင် `JD` မှာ ကိန်းပြည့် `2461005` ဖြစ်မည်။ ဥပမာ `JD = 2461004.5`ဆိုလျင်`JDN = 2461004` ဖြစ်သည်။

ရိုးရှင်းစွာဆက်တိုက်ရေတွက်ခဲ့သောကြောင့် ဖြစ်ရပ်နှစ်ခုကြားအချိန်ကာလကွာခြားမှုအားလွယ်ကူစွာတွက်ချက်နိုင်စေပါသည်။ [ဂရီဂိုရီယန်][gregorian_calendar] သို့မဟုတ် [ဂျူလီယန်][julian_calendar]ပြက္ခဒိန်များကဲ့သို့သော ပြက္ခဒိန်များ၏ မညီညွတ်မှုများ ရက်ထပ်နှစ်များ၏ ရှုပ်ထွေးမှုများကို ရှောင်ရှားနိုင်သောကြောင့် နက္ခတ္တဗေဒနှင့် အခြားသိပ္ပံနည်းကျ အသုံးချမှုများအတွက် အသင့်တော်ဆုံးဖြစ်သည်။

### Calculation of Julian Day From Gregorian Date

ကျနော်၏ ယခုမှတ်စုတွင် [ဂရီဂိုရီယန်][gregorian_calendar] ပြက္ခဒိန် ရက်စွဲမှ Julian Day [[JD][jd]] အကြား အပြန်အလှန် တွက်ချက်ခြင်းအားချရေးထားပါသည်။

#### 1582, October

1582 အောက်တိုဘာလတွင် ကက်သလစ်နိုင်ငံအများစုတွင် ပုတ်ရဟန်းမင်းကြီး ဂရီဂိုရီ ၁၃ [[Pope Gregory XIII][Pope_Gregory_XIII]] ၏ အမိန့်ဖြင့် [ဂျူလီယန်][julian_calendar] ပြက္ခဒိန်မှ ယခုခေတ်အသုံးများသော[ဂရီဂိုရီယန်][gregorian_calendar] ပြက္ခဒိန်ကို အစားထိုးအသုံးပြုခဲ့ကြသည်။ နိုင်ငံအလိုက်လက်ခံကအသုံးပြုသည့်နှစ်ကွားခြားချက်တော့ရှိသည်။ [ဂျူလီယန်][julian_calendar]ပြက္ခဒိန်၏ တစ်နှစ်ကာလသည် အမှန်တကယ် Solar Year နှင့် တစ်နှစ်တွင် 11 မိနစ် 14 စက္ကန့် မျှ ကွာခြားသည်။ ရာစုနှစ်များစွာကြာလာသည့်အခါ ကွာခြားချက်ကများလာပီး ကက်သလစ် သာသနာတွင် အီစတာပွဲနေ့တွက်ချက်ခြင်း စသည်တို့တွင် ပြသနာများဖြစ်ပေါ်စေခဲ့သည်။ ကျနော်တို့မြန်မာပြက္ခဒိန်တွင် ကဆုန်လအတွင်း သင်္ကြန်ကျတာမျိုးဖြစ်ဖူးသည်။

ထို့ကြောင့် 1582 အောက်တိုဘာ 4 ရက်မှ 1582 အောက်တိုဘာ 15 ရက်သို့ တန်းရောက်သွားပြီး အောက်တိုဘာ 5 ရက်မှ အောက်တိုဘာ 14 ရက် 10 ရက်တာကာလကိုဖယ်ရှားလိုက်ခြင်းဖြစ်သည်။ 1582 အောက်တိုဘာ 15 မှစ၍ ကျနော်တို့ ဂရီဂိုရီယန် ပြက္ခဒိန် ခေတ်ကိုရောက် ပြီလို့ဆိုနိုင်ပါသည်။ ယခုအချက်သည် Julian Day [[JD][jd]] နှင့် ပြက္ခဒိန်ရက်စွဲ များအကြား အပြန်အလှန် ဆက်သွယ်မှုတွက်ချက်ရာတွင် လက်ရှိ [Julian Period][julian_period] တစ်ခုလုံးအတွက်ခြုံငုံတွက်ချက်မည်ဆိုပါက မဖြစ်မနေထည့်သွင်းစဥ်းစားရမည်ဖြစ်သည်။

Example JavaScript Function ->

```js
/**
 * Checks if a given Gregorian date is after the Gregorian calendar reform.
 *
 * @param {number} year - Gregorian year.
 * @param {number} month - Gregorian month (1-12).
 * @param {number} day - Gregorian day(1-31).
 * @return {boolean} True if the date is after the reform, false otherwise.
 */
function isGregorian(year, month, day) {
  return (
    year > 1582 || (year === 1582 && (month > 10 || (month === 10 && day > 14)))
  );
}
```

#### Adjust Month and Year for January and February

ရက်ထပ်နှစ်များအတွက် ထပ်တိုးရက်အား ဖေဖော်ဝါရီလတွင် ထည့်သွင်းကြသည့်အတွက် ဇန်နဝါရီ သို့မဟုတ် ဖေဖော်ဝါရီ လအား ပြီးခဲ့သည့်နှစ်၏ 13 လ နှင့် 14 လမြောက်လအဖြစ်သတ်မှတ်လိုက်ခြင်းဖြင့် ရက်ထပ်ရက်များအတွက် ကိုင်တွယ်ရာတွင် ပိုမိုချောမွေ့သွားစေပါသည်။အဓိကအားဖြင့် ရက်ထပ်နှစ်များတွင် တစ်ရက်တိုးသော ဖေဖော်ဝါရီလအား နောက်ဆုံးထား လိုက်ခြင်းဖြစ်သည်။

##### Example JavaScript Function ->

```js
/**
 * Adjusts a Gregorian date to account for January and February being
 * part of the previous year when using the Meeus/Zeller style.
 *
 * @param {number} year - Gregorian year.
 * @param {number} month - Gregorian month (1-12).
 * @param {number} day - Gregorian day (1-31).
 * @return {object} Object with year, month and day properties.
 */
function adjustJanFeb(year, month, day) {
  if (month < 3) {
    year -= 1;
    month += 12;
  }
  return { year, month, day };
}
```

#### Jean Meeus's Algorithm

[Jean Meeus][jean_meeus] က သူ့၏ [Astronomical Algorithms][jean_meeus_astronomical_algorithms] စာအုပ်မှာ [ဂရီဂိုရီယန်][gregorian_calendar] ပြက္ခဒိန် ရက်စွဲအတွက် Julian Day [[JD][jd]] ကို တွက်ချက်ဖို့ algorithm တစ်ခုကို အောက်ပါအတိုင်း ပေးထားပါသည်။ တွက်ချက်မှုအားလုံးအတွက် `integer truncation` ကို အသုံးပြုပါတယ်။

$ JD = INT \left(365.25\times\left(Y + 4716\right) \right) + INT\left(30.6001\times\left(M + 1\right)\right)+D+B+1524.5$

**ဒီနေရာမှာ** :

1. $Y=year$ \\
   (astronomical year numbering, 1 BCE/BC is year 0, 2 BCE/BC is year -1, etc.) \\
   ခရစ်မပေါ်မှီ နှစ်များ (BC or BCE) အတွက် ဥပမာ BC 4713 ဆိုလျင် -4712 ဖြစ်ပါမည်။

2. $M=month$ \\
   (January = 1, February = 2, ..., December = 12)

3. $D=day$ \\
   (day of the month) \\
   နာရီ မိနစ် စက္ကန့် များအတွက် ဒသမ ကိန်းဖြင့်ဖော်ပြနိုင်ပါသည်။2.5 ဆိုလျင် 2 ရက်နေ့12:00နာရီကိုဆိုလိုသည်။

4. $INT=\text{integer truncation}$\\
   ဥပမာ အနေနှင့်: \\
   $INT\left(365.25\right) = 365$ \\
   $INT\left(30.6001\right) = 30$ \\
   $INT\left(-3.99\right) = -3$

   **Example JavaScript Function ->**

   ```js
   /**
    * Integer truncation function.
    *
    * @param {number} d - The number to perform integer truncation on.
    * @return {number} The result of integer truncation.
    *
    * This function behaves as follows:
    *   - If d is positive, return Math.floor(d).
    *   - If d is equal to Math.floor(d), return d.
    *   - Otherwise, return Math.floor(d) + 1.
    */
   function integerTruncation(d) {
     //integer truncation
     if (d > 0) {
       return Math.floor(d);
     }
     if (d === Math.floor(d)) {
       return d;
     }
     // moves toward zero
     return Math.floor(d) + 1;
   }
   ```

5. $B$ = ဂရီဂိုရီယန် ပြက္ခဒိန် ၏ ရက်ထပ်နှစ်များအတွက် ကွဲလွဲသောရက်များအားတွက်ချက်ထားခြင်းဖြစ်သည်။ 1582 အောက်တိုဘာ 4 ရက်မတိုင်ခင်ရက်စွဲများအတွက် ဆိုလျင် တန်ဖိုးမှာ `0` ဖြစ်သည်။ ဂရီဂိုရီယန် ပြက္ခဒိန်စတင်အသုံးပြုသော ရက်စွဲများအတွက်သာ ကွဲလွဲရက်များတွက်ချက်ရခြင်းဖြစ်သည်။

   $A=\text{INT}\left(Y/100\right)$ \\
   $B=2-\text{A} + \text{INT}\left(A/4\right)$

   > အနည်းငယ်ရှုပ်ထွေးသော ပြက္ခဒိန်များ၏ ရက်ထပ်နှစ်ကွာခြားချက်များအား ဂရီဂိုရီယန် ပြက္ခဒိန် အတွက် ညှိနှိုင်းတွက်ချက်ခြင်းဖြစ်ပါသည်။ ယခုတွက်ချက်မှုအတွက် အသေးစိတ်အား မှတ်စုတစ်ခုထပ်မံရေးသားပါအုန်းမည်။

   **Example JavaScript Function ->**

   ```js
   /**
    * Century anchor correction factor for Julian Day calculation.
    *
    * @param {number} year - Gregorian year.
    * @param {number} month - Gregorian month (1-12).
    * @param {number} day - Gregorian day (1-31).
    * @return {number} Century anchor correction factor.
    */
   function gregorianCorrectionFactor(year, month, day) {
     // Century Anchor
     const A = integerTruncation(year / 100);
     let B = 0;
     if (isGregorian(year, month, day)) {
       B = 2 - A + integerTruncation(A / 4);
     }
     return B;
   }
   ```

#### Full Calculation Example

ဂရီဂိုရီယန် ပြက္ခဒိန်ရက်စွဲနှင့် အချိန်မှ Julian Day သို့ပြောင်းလဲခြင်းအား တွက်ချက်သည့် ဥပမာ JavaScript function အဆင့်ဆင့်အပြည့်အစုံ အားအောက်တွင်ဖော်ပြထားပါသည်။

```js
/**
 * Checks if a given Gregorian date is after the Gregorian calendar reform.
 *
 * @param {number} year - Gregorian year.
 * @param {number} month - Gregorian month (1-12).
 * @param {number} day - Gregorian day(1-31).
 * @return {boolean} True if the date is after the reform, false otherwise.
 */
function isGregorian(year, month, day) {
  return (
    year > 1582 || (year === 1582 && (month > 10 || (month === 10 && day > 14)))
  );
}

/**
 * Adjusts a Gregorian date to account for January and February being
 * part of the previous year when using the Meeus/Zeller style.
 *
 * @param {number} year - Gregorian year.
 * @param {number} month - Gregorian month (1-12).
 * @param {number} day - Gregorian day (1-31).
 */
function adjustJanFeb(year, month, day) {
  // Adjust Jan/Feb to months 13/14 of previous year (Meeus / Zeller style)
  if (month < 3) {
    year -= 1;
    month += 12;
  }
  return { year, month, day };
}

/**
 * Integer truncation function.
 *
 * @param {number} d - The number to perform integer truncation on.
 * @return {number} The result of integer truncation.
 *
 * This function behaves as follows:
 *   - If d is positive, return Math.floor(d).
 *   - If d is equal to Math.floor(d), return d.
 *   - Otherwise, return Math.floor(d) + 1.
 */
function integerTruncation(d) {
  //integer truncation
  if (d > 0) {
    return Math.floor(d);
  }
  if (d === Math.floor(d)) {
    return d;
  }
  // moves toward zero
  return Math.floor(d) + 1;
}

/**
 * Century anchor correction factor for Julian Day calculation.
 *
 * @param {number} year - Gregorian year.
 * @param {number} month - Gregorian month (1-12).
 * @param {number} day - Gregorian day (1-31).
 * @return {number} Century anchor correction factor.
 */
function gregorianCorrectionFactor(year, month, day) {
  // Century Anchor
  const A = integerTruncation(year / 100);
  let B = 0;
  if (isGregorian(year, month, day)) {
    B = 2 - A + integerTruncation(A / 4);
  }
  return B;
}
/**
 * Converts hours, minutes, and seconds to a fractional day value.
 *
 * @param {number} h - Hours (0-23).
 * @param {number} m - Minutes (0-59).
 * @param {number} s - Seconds (0-59).
 * @return {number} Fractional day value.
 */
function hms2f(h, m, s) {
  return h / 24 + m / 1440 + s / 86400;
}
/**
 * Converts a Gregorian date to a Julian Day value.
 *
 * @param {number} year - Gregorian year.
 * @param {number} month - Gregorian month (1-12).
 * @param {number} day - Gregorian day (1-31).
 * @param {number} [hour=12] - Hours (0-23).
 * @param {number} [minute=0] - Minutes (0-59).
 * @param {number} [second=0] - Seconds (0-59).
 * @return {number} Julian Day value.
 */
function gregorianToJD(year, month, day, hour = 12, minute = 0, second = 0) {
  const adjusted = adjustJanFeb(year, month, day);
  year = adjusted.year;
  month = adjusted.month;
  day = adjusted.day;
  const B = gregorianCorrectionFactor(year, month, day);
  const dayFraction = hms2f(hour, minute, second);
  // Meeus algorithm (JDN has fractional .5 offset included)
  let julianDay =
    integerTruncation(365.25 * (year + 4716)) +
    integerTruncation(30.6001 * (month + 1)) +
    day +
    B -
    1524.5;
  return julianDay + dayFraction;
}
```

<!-- markdownlint-disable MD053 -->

[jjc]: https://en.wikipedia.org/wiki/Joseph_Justus_Scaliger
[julian_period]: https://en.wikipedia.org/wiki/Julian_day#External_links:~:text=%5Bedit%5D-,Julian%20Period,-%5Bedit%5D
[solar_cycle]: https://en.wikipedia.org/wiki/Solar_cycle_/(calendar/)
[lunar_cycle]: https://en.wikipedia.org/wiki/Metonic_cycle
[indiction_cycle]: https://en.wikipedia.org/wiki/Indiction
[jd]: https://en.wikipedia.org/wiki/Julian_day
[jdn]: https://en.wikipedia.org/wiki/Julian_day#:~:text=The-,Julian%20day%20number,-(JDN)%20has%20the
[Anno_Domini]: https://en.wikipedia.org/wiki/Anno_Domini
[gregorian_calendar]: https://en.wikipedia.org/wiki/Gregorian_calendar
[julian_calendar]: https://en.wikipedia.org/wiki/Julian_calendar
[Pope_Gregory_XIII]: https://en.wikipedia.org/wiki/Pope_Gregory_XIII
[jean_meeus_astronomical_algorithms]: https://www.scribd.com/document/444162160/Jean-Meeus-Astronomical-algorithms-1998-pdf
[jean_meeus]: https://en.wikipedia.org/wiki/Jean_Meeus
