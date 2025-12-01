---
layout: post
author: Pho Thin
---

ပြင်သစ်ပညာရှင် [Joseph Justus Scaliger][jjc](1540-1609) သည် နှစ်များကိုရေတွက်ရာတွင် [BC][Anno_Domini] [AD][Anno_Domini] တွေထည့်တွက်စရာမလိုသော နှစ်စဉ် အပေါင်းဂဏန်းတစ်ခု သတ်မှတ်ရန် စဥ်းစားခဲ့ပြီးယခုခေတ်လူသိများသော [Julian Period][julian_period]ကိုမိတ်ဆက်ခဲ့သည်။သူ၏[Julian Period][julian_period]သည် 4713 BCEဇန်နဝါရီလ 1 ရက်နေ့ UTCစံတော်ချိန် နေ့လည် 12 နာရီမှာ စတင်ပြီး နှစ်ပေါင်း 7980 ကြာမြင့်မည်ဖြစ်သည်။နှစ်ပေါင်း 7980 ကြာပြီးနောက်မှာ 1 ကနေ ပြန်စမည်ဖြစ်သည်။

တစ်ကြိမ်လျင် နှစ်ပေါင်း 7980 ရအောင် [Solar cycle][solar_cycle] ,[Lunar cycle (Metonic cycle)][lunar_cycle] နှင့် ,[Indiction cycle][indiction_cycle]တို့အားအခြေခံပြီးအောက်ပါအတိုင်းတွက်ချက်ထားခြင်းဖြစ်သည်။ ယခုလိုတွက်ချက်ရခြင်း အကြောင်းအရင်းမှာ [BC][Anno_Domini] 4713 တွင် [Solar cycle][solar_cycle] ,[Lunar cycle (Metonic cycle)][lunar_cycle] နှင့် ,[Indiction cycle][indiction_cycle] တန်ဖိုးအားလုံး 1 ဖြစ်နေပီး နောက်တစ်ကြိမ် နှစ်ပေါင်း 7980 အကြာ [AD][Anno_Domini] 3268 တွင် ထပ်မံဖြစ်ပေါ်မည်ဖြစ်သောကြောင့်ဖြစ်သည်။

```text
28 (solar cycle) × 19 (lunar cycle) × 15 (indiction cycle) = 7980 years
```

နှစ်တစ်နှစ်၏ လက်ရှိ Julian Period တွင် ရောက်ရှိနေသော နှစ်ပါင်းကိုသိရှိနိုင်ရန် အဆင့်ဆင့်တွက်ချက်သော JavaScript Function များအားအောက်တွင်ဖော်ပြထားပါသည်။

```js
// The position of the year within the 28 years  'Solar Cycle'.
function solorNumber(year) {
  return ((year + 8) % 28) + 1;
}
// The position of the year within the 19 years 'Lunar cycle (Metonic cycle)'.
function lunarNumber(year) {
  return (year % 19) + 1;
}
// The position of the year within the 15 years 'Indiction cycle (taxation cycle)'.
function indictionNumber(year) {
  return ((year + 2) % 15) + 1;
}
// The position of the year in current 'Julian Period'.
function julianPeriodYear(year) {
  return (
    (6916 * indictionNumber(year) +
      4200 * lunarNumber(year) +
      4845 * solorNumber(year)) %
    (15 * 19 * 28)
  );
}
```

#### Julian Day And Julian Day Number

Julian Day [[JD][jd]] ဆိုသည်မှာ Julian Period အစမှ စတင်၍ တောက်လျောက်ရေတွက်လာသော စုစုပေါင်းရက်အရေအတွက်ဖြစ်သည်။ Julian Day Number [[JDN][jdn]] ဆိုသည်မှာ Julian Day [[JD][jd]] ၏ ကိန်းပြည့်အပိုင်းဖြစ်သည်။

ပြက္ခဒိန်များကဲ့ သို့ နှစ် လ ရက် ရေတွက်ခြင်းမဟုတ်ပါ စမှတ်မှရေတွက်ခဲ့သော စုစုပေါင်းရက်အရေအတွက်သာဖြစ်သည်။ နာရီ မိနစ် စက္ကန့်များအတွက်လည်း ရက်တစ်ရက်၏ အပိုင်းကိန်း (သို့) ကိန်းပြည့်နောက်မှ ဒသမကိန်းအဖြစ်ဖော်ပြသည်။ ပုံမှန်ပြက္ခဒိန် ရက်စွဲ `25.11.2025` မနက် `00:00` နာရီအတွက် `JD = 2461004.5` ဖြစ်သည်။ Julian Day [[JD][jd]] စတင်ရေတွက်သည်မှာ နေ့လည်မွန်းတည့်ချိန်မှဖြစ်သည့်အတွက် `25.11.2025` နေ့လည် `12`နာရီအတွက်ဆိုလျင် `JD` မှာ ကိန်းပြည့် `2461005` ဖြစ်မည်။ ဥပမာ `JD = 2461004.5`ဆိုလျင်`JDN = 2461004` ဖြစ်သည်။

ရိုးရှင်းစွာဆက်တိုက်ရေတွက်ခဲ့သောကြောင့် ဖြစ်ရပ်နှစ်ခုကြားအချိန်ကာလကွာခြားမှုအားလွယ်ကူစွာတွက်ချက်နိုင်စေပါသည်။ [ဂရီဂိုရီယန်][gregorian_calendar] သို့မဟုတ် [ဂျူလီယန်][julian_calendar]ပြက္ခဒိန်များကဲ့သို့သော ပြက္ခဒိန်များ၏ မညီညွတ်မှုများ ရက်ထပ်နှစ်များ၏ ရှုပ်ထွေးမှုများကို ရှောင်ရှားနိုင်သောကြောင့် နက္ခတ္တဗေဒနှင့် အခြားသိပ္ပံနည်းကျ အသုံးချမှုများအတွက် အသင့်တော်ဆုံးဖြစ်သည်။

#### Calculation of Julian Day

ကျနော်၏ ယခုမှတ်စုတွင် [ဂရီဂိုရီယန်][gregorian_calendar] ပြက္ခဒိန် ရက်စွဲမှ Julian Day [[JD][jd]] အကြား အပြန်အလှန် တွက်ချက်ခြင်းအားချရေးထားပါသည်။

##### 1582, October

1582 အောက်တိုဘာလတွင် ကက်သလစ်နိုင်ငံအများစုတွင် ပုတ်ရဟန်းမင်းကြီး ဂရီဂိုရီ ၁၃ [[Pope Gregory XIII][Pope_Gregory_XIII]] ၏ အမိန့်ဖြင့် [ဂျူလီယန်][julian_calendar] ပြက္ခဒိန်မှ ယခုခေတ်အသုံးများသော[ဂရီဂိုရီယန်][gregorian_calendar] ပြက္ခဒိန်ကို အစားထိုးအသုံးပြုခဲ့ကြသည်။ နိုင်ငံအလိုက်လက်ခံကအသုံးပြုသည့်နှစ်ကွားခြားချက်တော့ရှိသည်။ [ဂျူလီယန်][julian_calendar]ပြက္ခဒိန်၏ တစ်နှစ်ကာလသည် အမှန်တကယ် Solar Year နှင့် တစ်နှစ်တွင် 11 မိနစ် 14 စက္ကန့် မျှ ကွာခြားသည်။ ရာစုနှစ်များစွာကြာလာသည့်အခါ ကွာခြားချက်ကများလာပီး ကက်သလစ် သာသနာတွင် အီစတာပွဲနေ့တွက်ချက်ခြင်း စသည်တို့တွင် ပြသနာများဖြစ်ပေါ်စေခဲ့သည်။ ကျနော်တို့မြန်မာပြက္ခဒိန်တွင် ကဆုန်လအတွင်း သင်္ကြန်ကျတာမျိုးဖြစ်ဖူးသည်။

ထို့ကြောင့် 1582 အောက်တိုဘာ 4 ရက်မှ 1582 အောက်တိုဘာ 15 ရက်သို့ တန်းရောက်သွားပြီး အောက်တိုဘာ 5 ရက်မှ အောက်တိုဘာ 14 ရက် 10 ရက်တာကာလကိုဖယ်ရှားလိုက်ခြင်းဖြစ်သည်။ 1582 အောက်တိုဘာ 15 မှစ၍ ကျနော်တို့ ဂရီဂိုရီယန် ပြက္ခဒိန် ခေတ်ကိုရောက် ပြီလို့ဆိုနိုင်ပါသည်။ ယခုအချက်သည် Julian Day [[JD][jd]] နှင့် ပြက္ခဒိန်ရက်စွဲ များအကြား အပြန်အလှန် ဆက်သွယ်မှုတွက်ချက်ရာတွင် လက်ရှိ [Julian Period][julian_period] တစ်ခုလုံးအတွက်ခြုံငုံတွက်ချက်မည်ဆိုပါက မဖြစ်မနေထည့်သွင်းစဥ်းစားရမည်ဖြစ်သည်။ အောက်တွင် ရက်စွဲတစ်ခုသည် ဂရီဂိုရီယန် ခေတ်လား မတိုင်ခင်လားဆိုတာကို စစ်ဆေးနိုင်သော JavaScript Function တစ်ခုကိုဖော်ပြထားပါသည်။

```js
/**
 * Check if a given date is a Gregorian date.
 *
 * A date is Gregorian if its year is greater than 1582, or if its year is 1582
 * and its month is greater than 10, or if its year is 1582, its month is 10
 * and its day is greater than 14.
 *
 * @param {number} year - The year of the date.
 * @param {number} month - The month of the date.
 * @param {number} day - The day of the date.
 * @returns {boolean} - True if the date is Gregorian, false otherwise.
 */
function isGregorian(year, month, day) {
  return (
    year > 1582 || (year === 1582 && (month > 10 || (month === 10 && day > 14)))
  );
}
```

##### Adjust Month and Year for January or February

ရက်ထပ်နှစ်များအတွက် ထပ်တိုးရက်အား ဖေဖော်ဝါရီလတွင် ထည့်သွင်းကြသည့်အတွက် ဇန်နဝါရီ သို့မဟုတ် ဖေဖော်ဝါရီ လအား ပြီးခဲ့သည့်နှစ်၏ 13 လ နှင့် 14 လမြောက်လအဖြစ်သတ်မှတ်လိုက်ခြင်းဖြင့် ရက်ထပ်ရက်များအတွက် ကိုင်တွယ်ရာတွင် ပိုမိုချောမွေ့သွားစေပါသည်။အဓိကအားဖြင့် ရက်ထပ်နှစ်များတွင် တစ်ရက်တိုးသော ဖေဖော်ဝါရီလအား နောက်ဆုံးထား လိုက်ခြင်းဖြစ်သည်။

```js
function adjustMonthYear(year, month) {
  if (month < 3) {
    year = year - 1;
    month = month + 12;
  }
  return { year, month };
}
```

##### Jean Meeus's Algorithm

**Calculating the Julian Day [[JD][jd]] from a Gregorian Date** :

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
