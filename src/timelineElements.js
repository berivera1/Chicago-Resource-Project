let timelineElements = [
  {
    id: 1,
    title: "Chicago Race Riots",
    description:
      "A young black man named Eugene Williams drowned at 29th St Beach after swimming into a ‘white-only’ area and having stones thrown at him. A white police officer refused to arrest the white perpetrator, and arrested a black individual instead. This incident sparked five days of rioting between angry mobs, leaving 38 dead and 291 wounded.",
    buttonText: "Chicago Public Library",
    buttonLink: "https://web.archive.org/web/20060615060650/http://www.chipublib.org/004chicago/disasters/riots_race.html",
    date: "July 27th, 1919 - July 31st, 1919",
    icon: "work",
    startYear: "1919",
  },
  {
    id: 2,
    title: "Memorial Day Massacre",
    description:
      "Police fired bullets into a crowd of steel workers during a march towards the Republic Steel Mill. Union workers and their families held a Memorial Day demonstration that ended in chaos, leaving 10 dead, 40 officers wounded, and 60 protestors wounded.",
    buttonText: "Illinois Labor History",
    buttonLink: "https://web.archive.org/web/20140228084227/http://www.illinoislaborhistory.org/memorial-day-massacre.html",
    date: "May 30th, 1937",
    icon: "work",
    startYear: "1937",
  },
  {
    id: 3,
    title: "Division Street Riots",
    description:
      "Years of tension between the Puerto Rican community and the CPD erupt in chaos after a Puerto Rican heritage parade. A police officer alleges that a man named Arcelis Cruz is armed during a group altercation and shoots him in the leg. This sparks days of riots that left 16 wounded and 49 arrested.",
    buttonText: "Chicagoist",
    buttonLink: "https://web.archive.org/web/20170519040728/http://chicagoist.com/2006/06/14/humboldt_park_riots_remembered.php",
    buttonText2: "The Encyclopedia of Chicago History",
    buttonLink2: "http://www.encyclopedia.chicagohistory.org/pages/1027.html",
    date: "June 12th, 1966 - June 14th, 1966",
    icon: "work",
    startYear: "1966",
  },
  {
    id: 4,
    title: "MLK Riots",
    description:
      "Riots and demonstrations happen across Chicago and the rest of the US following the assasination of Martin Luther King Jr.. In Chicago, these riots left 11 dead, 90 officers wounded, 48 demonstrators wounded, and over 2,000 demonstrators arrested.",
    buttonText: "The Encyclopedia of Chicago History",
    buttonLink: "http://www.encyclopedia.chicagohistory.org/pages/6354.html",
    date: "April 5th, 1968 - April 7th, 1968",
    icon: "school",
    startYear: "1968",
  },
  {
    id: 5,
    title: "DNC Protests",
    description:
      "Tensions escalated between anti-war protestors and police officers outside the Democratic National Convention. The number of officers and protesters wounded is not fully clear, although hundreds are cited to have received medical care for exposure to tear gas and other injuries.",
    buttonText: "Chicago Sun Times",
    buttonLink: "https://chicago.suntimes.com/2018/8/17/18439080/the-whole-world-watched-50-years-after-the-1968-chicago-convention",
    buttonText2: "Washington Post",
    buttonLink2: "https://www.washingtonpost.com/news/retropolis/wp/2018/08/24/a-party-that-had-lost-its-mind-in-1968-democrats-held-one-of-historys-most-disastrous-conventions/",
    date: "August 23rd, 1968 - August 28th, 1968",
    icon: "school",
    startYear: "1968",
  },
  {
    id: 6,
    title: "Fatal Shooting of Fred Hampton",
    description:
      "Fred Hampton was a political activist associated with the Black Panthers and other civil rights organizations of the time. He was killed in an early-morning police raid at point blank range along with his friend, Mark Clark. A civil lawsuit filed by a group of Hampton’s survivors was awarded in 1982.",
    buttonText: "Democracy Now",
    buttonLink: "https://www.democracynow.org/2009/12/4/the_assassination_of_fred_hampton_how",
    date: "December 4th, 1969",
    icon: "school",
    startYear: "1969",
  },
  {
    id: 7,
    title: "Jon Burge Torture and Trials",
    description:
      "Jon Burge served on the Chicago Police Department for over twenty years, and was convicted in 2010 for torturing his interrogation suspects for confessions. Associated cases and trials would continue to come up in court throughout the following decades.",
    buttonText: "Chicago Tribune",
    buttonLink: "https://www.chicagotribune.com/news/ct-jon-burge-chicago-police-torture-timeline-20180919-htmlstory.html",
    date: "March 1st, 1970 - July 29th, 2016",
    icon: "school",
    startYear: "1970",
  },
  {
    id: 8,
    title: "Humboldt Park Riot",
    description:
      "Riots broke out across Humboldt Park following a police altercation where officers shot and killed two young men named Julio Osorio and Rafael Cruz. Thousands of mostly Puerto Rican individuals participated in this event that left 49 wounded, and 2 dead.",
    buttonText: "The Encyclopedia of Chicago History",
    buttonLink: "http://www.encyclopedia.chicagohistory.org/pages/1027.html",
    buttonText2: "WBEZ",
    buttonLink2: "https://www.wbez.org/stories/a-community-tries-to-hold-its-ground/ef022c1c-a7e3-4bca-89de-4822ac837c0a",
    buttonText3: "New York Times",
    buttonLink3: "https://www.nytimes.com/1977/06/05/archives/2-killed-49-injured-in-chicago-violence-gunfire-looting-follow.html",
    date: "June 4th, 1977 - June 5th, 1977",
    icon: "school",
    startYear: "1977",
  },
  {
    id: 9,
    title: "George Jones and Street Files Policy Reform",
    description:
      "High-school senior, George Jones, was falsely indicted and held in police custody for five weeks. His case exposed a CPD policy of ‘street files’ where evidence in favor of defendants was sometimes hidden from the jury during a trial. Jones was eventually awarded a settlement in 1987.",
    buttonText: "Chicago Tribune",
    buttonLink: "https://www.chicagotribune.com/news/ct-xpm-1987-03-06-8701180333-story.html",
    buttonText2: "Peoples' Law Office",
    buttonLink2: "https://peopleslawoffice.com/about-civil-rights-lawyers/history/george-jones-street-files-and-false-imprisonment/",
    date: "May 4th, 1981 - April 24th, 1987",
    icon: "school",
    startYear: "1981",
  },
  {
    id: 10,
    title: "Homan Square Disappearances",
    description:
      "More than 7,000 individuals were detained by CPD at an off-the-books interrogation warehouse in Homan Square. 82.2% of the people that were detained at Homan Square were black, despite only making up 32.9% of the Chicago population.",
    buttonText: "The Guardian",
    buttonLink: "https://www.theguardian.com/us-news/2015/oct/19/homan-square-chicago-police-disappeared-thousands",
    date: "August 2004 - June 2015",
    icon: "school",
    startYear: "2004",
  },
  {
    id: 11,
    title: "Fatal Shooting of Rekia Boyd",
    description:
      "An off-duty officer calls in a noise complaint near Douglas Park and proceeds to confront the group of four who were making the noise. The officer claims one of the men, Antonio Cross, approached him with a gun, so he fired his weapon into the group. The bullets injured Cross, and struck 22 year-old Rekia Boyd in the head. Boyd died the next day at the hospital. The city settled a lawsuit with the Boyd family in 2013. In 2015, the officer was cleared of all charges due to a failed prosecution.",
    buttonText: "New York Times",
    buttonLink: "https://www.nytimes.com/2015/04/21/us/chicago-police-detective-cleared-of-manslaughter-in-shooting-death.html",
    buttonText2: "Chicago Tribune",
    buttonLink2: "https://www.chicagotribune.com/news/ct-dante-servin-acquittal-met-20150626-story.html",
    buttonText3: "Huffington Post",
    buttonLink3: "https://www.huffpost.com/entry/chicagoans-rally-for-reki_n_1385032",
    date: "March 21st, 2012",
    icon: "school",
    startYear: "2012",
  },
  {
    id: 12,
    title: "Chicago BLM Chapter Founded",
    description:
      "Taken from the BLM website, ‘#BlackLivesMatter was founded in 2013 in response to the acquittal of Trayvon Martin’s murderer.’ The 100% volunteer run Chicago chapter was founded in 2014, and is currently working to ‘create just and equitable systems’ as well as working to ‘end state violence and criminalization of Black communities.’",
    buttonText: "Black Lives Matter Chicago",
    buttonLink: "https://www.blacklivesmatterchicago.com/",
    date: "2014",
    icon: "school",
    startYear: "2014",
  },
  {
    id: 13,
    title: "Fatal Shooting of Laquan McDonald",
    description:
      "An officer responded to a call about a 17 year-old boy named Laquan McDonald who was behaving strangely while walking down the street on the South Side. McDonald was carrying a knife and refused to drop it. Dashcam footage shows the officer firing at McDonald while he was walking away, killing him. The city of Chicago reached a settlement with the McDonald family in 2015, and in 2018 the officer was found guilty of second-degree murder along with 16 counts of aggrivated battery with a firearm.",
    buttonText: "NPR",
    buttonLink: "https://www.npr.org/2019/01/17/686097601/verdict-expected-for-chicago-cops-charged-in-cover-up-of-laquan-mcdonald-shootin",
    buttonText2: "Time",
    buttonLink2: "https://time.com/4126670/chicago-releases-video-of-laquan-mcdonald-shooting/",
    date: "October 20th, 2014",
    icon: "school",
    startYear: "2014",
  },
{
    id: 14,
    title: "Department of Justice Investigation",
    description:
      "A thirteen month investigation by the Department of Justice Civil Rights Division revealed that the Chicago Police Department had been systemically denying citizens their civil rights for years. Using unlawful force, overall lack of training, and other instances of negligent misconduct were cited in this comprehensive report.",
    buttonText: "Department of Justice",
    buttonLink: "https://www.justice.gov/opa/file/925846/download",
    buttonText2: "The Atlantic",
    buttonLink2: "https://www.theatlantic.com/news/archive/2017/01/justice-department-chicago-police-report/513113/",
    buttonText3: "Black Lives Matter Chicago",
    buttonLink3: "https://www.blacklivesmatterchicago.com/doj-investigation/",
    date: "December 7th, 2015 - January 13th, 2017",
    icon: "school",
    startYear: "2015",
  },
  {
    id: 15,
    title: "George Floyd and Breonna Taylor Protests",
    description:
      "A summer of protests sweep across the nation following the murders of unarmed black individuals like Ahmaud Arbery, George Floyd, Breonna Taylor, and more. Political turmoil and the COVID-19 global pandemic created an incredibly unique landscape for this milestone in civil rights activism. While there isn’t a total count of officers or protesters injured, in Chicago alone, thousands of protestors were arrested at non-violent demonstrations.",
    buttonText: "The Guardian",
    buttonLink: "https://www.theguardian.com/world/2020/oct/31/americans-killed-protests-political-unrest-acled",
    buttonText2: "Block Club Chicago",
    buttonLink2: "https://blockclubchicago.org/2020/11/19/60-protesters-sue-city-alleging-chicago-police-abused-them-without-justification-at-summer-protests/",
    date: "May 28th, 2020 - Present",
    icon: "school",
    startYear: "2020",
  },
];

export default timelineElements;