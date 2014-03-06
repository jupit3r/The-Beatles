//********** ALBUM SCROLLER **********//

var albumPics = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg", "11.jpg", "12.jpg", "13.jpg", "14.jpg"];
var albumNames = ["Please Please Me", 'With The Beatles', "A Hard Day's Night", "Beatles For Sale", "Help!", "Rubber Soul", "Revolver", "Sgt. Pepper's Lonely Hearts Club Band", "The Beatles (White Album)", "Magical Mystery Tour", "Yellow Submarine", "Abbey Road", "Hey Jude", "Let It Be"];
var trackList = [

"1. I Saw Her Standing There
2. Misery
3. Anna (Go to Him)
4. Chains
5. Boys
6. Ask Me Why
7. Please Please Me
8. Love Me Do
9. P.S. I Love You
10. Baby It's You
11. Do You Want to Know a Secret
12. A Taste of Honey
13. There’s a Place
14 Twist and Shout",
	
"1. It Won't Be Long
2. All I've Got to Do
3. All My Loving
4. Don’t Bother Me
5. Little Child
6. Till There Was You
7. Please Mister Postman
8. Roll Over Beethoven
9. Hold Me Tight
10. You Really Got a Hold On Me
11. I Wanna Be Your Man
12. Devil In Her Heart
13. Not a Second Time
14. Money (That's What I Want)",
	
"1. A Hard Day's Night
2. I Should Have Known Better
3. If I Fell
4. I’m Happy Just to Dance With You
5. And I Love Her
6. Tell Me Why
7. Can’t Buy Me Love
8. Any Time At All
9. I'll Cry Instead
10. Things We Said Today
11. When I Get Home
12. You Can't Do That
13. I’ll Be Back",	

"1. No Reply
2. I’m a Loser
3. Baby’s In Black
4. Rock and Roll Music
5. I’ll Follow the Sun
6. Mr. Moonlight
7. Kansas City / Hey-Hey-Hey-Hey!
8. Eight Days a Week
9. Words of Love
10. Honey Don't
11. Every Little Thing
12. I Don't Want to Spoil the Party
13. What You're Doing
14. Everybody’s Trying to Be My Baby", 

"1. Help!
2. The Night Before
3. You’ve Got to Hide Your Love Away
4. I Need You
5. Another Girl
6. You’re Going to Lose That Girl
7. Ticket to Ride
8. Act Naturally
9. It’s Only Love
10. You Like Me Too Much
11. Tell Me What You See
12. I’ve Just Seen a Face
13. Yesterday
14. Dizzy Miss Lizzy",

"1. Drive My Car
2. Norwegian Wood (This Bird Has Flown)
3. You Won't See Me
4. Nowhere Man
5. Think For Yourself
6. The Word
7. Michelle
8. What Goes On
9. Girl
10. I’m Looking Through You
11. In My Life
12. Wait
13. If I Needed Someone
14. Run For Your Life",

"1. Taxman
2. Eleanor Rigby
3. I’m Only Sleeping
4. Love You To
5. Here, There and Everywhere
6. Yellow Submarine
7. She Said She Said
8. Good Day Sunshine
9. And Your Bird Can Sing
10. For No One
11. Doctor Robert
12. I Want to Tell You
13. Got to Get You Into My Life
14. Tomorrow Never Knows",

"1. Sgt. Pepper's Lonely Hearts Club Band
2. With a Little Help From My Friends
3. Lucy In the Sky With Diamonds
4. Getting Better
5. Fixing a Hole
6. She’s Leaving Home
7. Being For the Benefit of Mr. Kite!
8. Within You Without You
9. When I'm Sixty-Four
10. Lovely Rita
11. Good Morning Good Morning
12. Sgt. Pepper's Lonely Hearts Club Band (Reprise)
13. A Day In the Life",

"**DISK ONE**
1. Back In the U.S.S.R.
2. Dear Prudence
3. Glass Onion
4. Ob-La-Di, Ob-La-Da
5. Wild Honey Pie
6. The Continuing Story of Bungalow Bill
7. While My Guitar Gently Weeps
8. Happiness Is a Warm Gun
9. Martha My Dear
10. I’m So Tired
11. Blackbird
12. Piggies
13. Rocky Raccoon
14. Don’t Pass Me By
15. Why Don't We Do It In the Road?
16. I Will
17. Julia

**DISK TWO** 1. Birthday
2. Yer Blues
3. Mother Nature's Son
4. Everybody’s Got Something to Hide Except Me and My Monkey
5. Sexy Sadie
6. Helter Skelter
7. Long, Long, Long
8. Revolution 1
9. Honey Pie
10. Savoy Truffle
11. Cry Baby Cry
12. Revolution 9
13. Good Night",

"1. Magical Mystery Tour
2. The Fool On the Hill
3. Flying
4. Blue Jay Way
5. Your Mother Should Know
6. I Am the Walrus
7. Hello, Goodbye
8. Strawberry Fields Forever
9. Penny Lane
10. Baby, You're a Rich Man
11. All You Need Is Love",

"1.  Yellow Submarine
2. Only a Northern Song
3. All Together Now
4. Hey Bulldog
5. It’s All Too Much
6. All You Need Is Love",

"1. Come Together
2. Something
3. Maxwell’s Silver Hammer
4. Oh! Darling
5. Octopus’s Garden
6. I Want You (She's So Heavy)
7. Here Comes the Sun
8. Because
9. You Never Give Me Your Money
10. Sun King
11. Mean Mr. Mustard
12. Polythene Pam
13. She Came In Through the Bathroom Window
14. The Beatles
15. Carry That Weight
16. The End
17. Her Majesty",

"1. Can’t Buy Me Love
2. I Should Have Known Better
3. Paperback Writer
4. Rain
5. Lady Madonna
6. Revolution
7. Hey Jude
8. Old Brown Shoe
9. Don’t Let Me Down
10. The Ballad of John and Yoko", 

"1. Two of Us
2. Dig a Pony
3. Across the Universe
4. I Me Mine
5. Dig It
6. Let It Be
7. Maggie Mae
8. I’ve Got a Feeling
9. One After 909
10. The Long and Winding Road
11. For You Blue
12. Get Back"
];



for (var i = 0; i<albumPics.length; i++) {
	var thumb = Ti.UI.createImageView({
		image:albumPics[i], top:5, left:8+105*i, right:8, height:95, width:95,
		opacity:0, albumName: albumNames[i], trackName:trackList[i], type:'albums'
	});
	
	thumb.animate({
		duration:800*1, opacity:1, delay: 600*i
	});
	thumb.addEventListener ('click', thumbClicked);
	$.thumbsScroll.add(thumb);
}



//********** BAND SCROLLER **********//

var bandPics = ["15.jpg", "16.jpg", "17.jpg", "18.jpg"];
var bandNames = ["Paul McCartney", "John Lennon","George Harrison", "Ringo Starr" ];
var bandInfo = [

	"	Sir James Paul McCartney was born on 18 June 1942, he is an English musician, singer, songwriter, multi-instrumentalist, and composer.  At the age of fifteen, McCartney met Lennon and his band, the Quarrymen, at the St Peter's Church Hall fête in Woolton on 6 July 1957. The band invited McCartney to join soon afterwards as a rhythm guitarist, and he formed a close working relationship with Lennon.  
	
	He gained worldwide fame as a member of the Beatles, his songwriting partnership with Lennon is one of the most celebrated of the 20th century. After the band's break-up, he pursued a solo career and later formed Wings with his first wife, Linda, and Denny Laine.",
	
	"	Born John Winston Lennon on 9 October 1940, he was a singer and songwriter who rose to worldwide fame as a founder member of the Beatles, the most commercially successful band in the history of popular music.  
	
	With Paul McCartney, he formed a songwriting partnership that is one of the most celebrated of the 20th century. Raised in Liverpool, as a teenager Lennon became involved in the skiffle craze; his first band, the Quarrymen, evolved into the Beatles in 1960.  When the group disbanded in 1970, Lennon embarked on a solo career that produced many critically acclaimed albums.  
	
	At around 10:50 pm on 8 December 1980, as Lennon returned to his New York apartment he was shot in the back four times.  Lennon was taken to the emergency room but was pronounced dead on arrival.",

	"	George Harrison was born on 25 February 1943 was an English musician, singer and songwriter who achieved international fame as the lead guitarist of the Beatles. 
	
	Although John Lennon and Paul McCartney were the band's primary songwriters, most of their albums included at least one Harrison composition, including 'While My Guitar Gently Weeps'. By 1965 he had begun to lead the Beatles towards Indian classical music through his use of the sitar. He developed an interest in the Hare Krishna movement and became an admirer of Indian culture and mysticism, introducing them to the other members of the Beatles and their Western audience by incorporating Indian instrumentation in their music. After the band's break-up in 1970, Harrison released the triple album All Things Must Pass. 
	
	Harrison died in 2001, aged 58, from lung cancer. He was cremated and his ashes were scattered in the Ganges and Yamuna rivers in India.",

	"	Ringo Starr (Richard Starkey) was born on 7 July 1940 is an English musician, singer, songwriter and actor who gained worldwide fame as the drummer for the Beatles. He also wrote the Beatles' songs 'Don't Pass Me Be' and 'Octopus's Garden', and is credited as a co-writer of others. 
	
	When the Beatles formed in 1960, Starr was a member of another Liverpool group, Rory Storm and the Hurricanes. After achieving moderate success with them in the UK and Hamburg, he quit the Hurricanes and joined the Beatles in August 1962, replacing Pete Best.  After their break-up in 1970, he released several successful singles."

];

for (var i = 0; i<bandPics.length; i++) {
	var thumb = Ti.UI.createImageView({
		image:bandPics[i], top:5, left:8+105*i, right:8, height:95, width:95,
		opacity:0, bandName: bandNames[i], infoName:bandInfo[i], type:'bands'
	});
	
	thumb.animate({
		duration:800*1, 
		opacity:1, 
		delay: 600*i
	});
	thumb.addEventListener ('click', thumbClicked);
	
	$.thumbsScroll2.add(thumb);
}



//********** BAND/ALBUM SLIDER **********//

function thumbClicked(e){
	
	$.main.image = e.source.image;
	$.album.text = e.source.albumName;
	$.bands.text = e.source.bandName;
	$.info.text = e.source.infoName;
	$.track.text = e.source.trackName;
	$.details.animate({
		duration: 700, 
		right: 0
	});
	
	
	
//********** VIEW INFO BOX **********//	

	if (e.source.type==='albums'){
		$.track.height='auto';
		$.track.backgroundColor="rgba(229, 229, 229, .25)";
	}
	else{
		$.track.backgroundColor="rgba(229, 229, 229, 0)";
	}
	
	if (e.source.type==='bands'){
		$.info.height='auto';
		$.info.backgroundColor="rgba(229, 229, 229, .25)";
	}
	else{
		$.info.backgroundColor="rgba(229, 229, 229, 0)";
	}
	
}



//********** BACK SWIPE **********//

$.details.addEventListener('swipe', function(e){
	if(e.direction == 'left'){
		$.details.animate ({
			duration: 700,
			right: 320,
		});
	}
});



//********** VIEWER INFO ANIMATOR **********//

$.motion.animate ({
	duration: 1500,
	delay: 650,
});



//********** THIS RUNS THE APP **********//

$.index.open();





//     lvw/.     //