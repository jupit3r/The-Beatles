function Controller() {
    function thumbClicked(e) {
        $.main.image = e.source.image;
        $.album.text = e.source.albumName;
        $.bands.text = e.source.bandName;
        $.info.text = e.source.infoName;
        $.track.text = e.source.trackName;
        $.details.animate({
            duration: 700,
            right: 0
        });
        if ("albums" === e.source.type) {
            $.track.height = "auto";
            $.track.backgroundColor = "rgba(229, 229, 229, .25)";
        } else $.track.backgroundColor = "rgba(229, 229, 229, 0)";
        if ("bands" === e.source.type) {
            $.info.height = "auto";
            $.info.backgroundColor = "rgba(229, 229, 229, .25)";
        } else $.info.backgroundColor = "rgba(229, 229, 229, 0)";
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.background = Ti.UI.createImageView({
        opacity: ".25",
        id: "background",
        image: "Intro.jpg"
    });
    $.__views.index.add($.__views.background);
    $.__views.main = Ti.UI.createImageView({
        id: "main",
        bottom: "50",
        height: "250"
    });
    $.__views.index.add($.__views.main);
    $.__views.thumbsScroll = Ti.UI.createScrollView({
        id: "thumbsScroll",
        top: "20",
        left: "0",
        height: "105",
        backgroundColor: "rbga(176, 196, 222, .25)"
    });
    $.__views.index.add($.__views.thumbsScroll);
    $.__views.band = Ti.UI.createImageView({
        id: "band",
        bottom: "20",
        height: "250"
    });
    $.__views.index.add($.__views.band);
    $.__views.thumbsScroll2 = Ti.UI.createScrollView({
        id: "thumbsScroll2",
        bottom: ".5",
        left: "0",
        height: "105",
        backgroundColor: "rbga(176, 196, 222, .25)"
    });
    $.__views.index.add($.__views.thumbsScroll2);
    $.__views.details = Ti.UI.createView({
        id: "details",
        width: "320",
        top: "20",
        right: "320",
        backgroundColor: "rbga(119, 136, 153, .90)"
    });
    $.__views.index.add($.__views.details);
    $.__views.__alloyId0 = Ti.UI.createScrollView({
        id: "__alloyId0"
    });
    $.__views.details.add($.__views.__alloyId0);
    $.__views.main = Ti.UI.createImageView({
        id: "main",
        image: "1.png",
        top: "5",
        height: "250"
    });
    $.__views.__alloyId0.add($.__views.main);
    $.__views.album = Ti.UI.createLabel({
        color: "white",
        font: {
            fontSize: 20
        },
        id: "album",
        top: "235",
        height: "90",
        text: "Album",
        textAlign: "center"
    });
    $.__views.__alloyId0.add($.__views.album);
    $.__views.bands = Ti.UI.createLabel({
        color: "white",
        font: {
            fontSize: 20
        },
        textAlign: "center",
        id: "bands",
        top: "235",
        height: "90",
        text: "Band"
    });
    $.__views.__alloyId0.add($.__views.bands);
    $.__views.motion = Ti.UI.createView({
        id: "motion"
    });
    $.__views.__alloyId0.add($.__views.motion);
    $.__views.info = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontFamily: "avenir",
            fontSize: 15
        },
        textAlign: "center",
        backgroundColor: "rgba(229, 229, 229, .25)",
        borderRadius: "5",
        height: "auto",
        id: "info",
        top: "305",
        width: "303",
        text: "Info"
    });
    $.__views.motion.add($.__views.info);
    $.__views.motion = Ti.UI.createView({
        id: "motion"
    });
    $.__views.__alloyId0.add($.__views.motion);
    $.__views.track = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontFamily: "avenir",
            fontSize: 15
        },
        backgroundColor: "rgba(229, 229, 229, 0)",
        borderRadius: "5",
        height: "auto",
        id: "track",
        top: "305",
        width: "303",
        text: "Track"
    });
    $.__views.motion.add($.__views.track);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var albumPics = [ "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg", "11.jpg", "12.jpg", "13.jpg", "14.jpg" ];
    var albumNames = [ "Please Please Me", "With The Beatles", "A Hard Day's Night", "Beatles For Sale", "Help!", "Rubber Soul", "Revolver", "Sgt. Pepper's Lonely Hearts Club Band", "The Beatles (White Album)", "Magical Mystery Tour", "Yellow Submarine", "Abbey Road", "Hey Jude", "Let It Be" ];
    var trackList = [ "1. I Saw Her Standing There\n2. Misery\n3. Anna (Go to Him)\n4. Chains\n5. Boys\n6. Ask Me Why\n7. Please Please Me\n8. Love Me Do\n9. P.S. I Love You\n10. Baby It's You\n11. Do You Want to Know a Secret\n12. A Taste of Honey\n13. There’s a Place\n14 Twist and Shout", "1. It Won't Be Long\n2. All I've Got to Do\n3. All My Loving\n4. Don’t Bother Me\n5. Little Child\n6. Till There Was You\n7. Please Mister Postman\n8. Roll Over Beethoven\n9. Hold Me Tight\n10. You Really Got a Hold On Me\n11. I Wanna Be Your Man\n12. Devil In Her Heart\n13. Not a Second Time\n14. Money (That's What I Want)", "1. A Hard Day's Night\n2. I Should Have Known Better\n3. If I Fell\n4. I’m Happy Just to Dance With You\n5. And I Love Her\n6. Tell Me Why\n7. Can’t Buy Me Love\n8. Any Time At All\n9. I'll Cry Instead\n10. Things We Said Today\n11. When I Get Home\n12. You Can't Do That\n13. I’ll Be Back", "1. No Reply\n2. I’m a Loser\n3. Baby’s In Black\n4. Rock and Roll Music\n5. I’ll Follow the Sun\n6. Mr. Moonlight\n7. Kansas City / Hey-Hey-Hey-Hey!\n8. Eight Days a Week\n9. Words of Love\n10. Honey Don't\n11. Every Little Thing\n12. I Don't Want to Spoil the Party\n13. What You're Doing\n14. Everybody’s Trying to Be My Baby", "1. Help!\n2. The Night Before\n3. You’ve Got to Hide Your Love Away\n4. I Need You\n5. Another Girl\n6. You’re Going to Lose That Girl\n7. Ticket to Ride\n8. Act Naturally\n9. It’s Only Love\n10. You Like Me Too Much\n11. Tell Me What You See\n12. I’ve Just Seen a Face\n13. Yesterday\n14. Dizzy Miss Lizzy", "1. Drive My Car\n2. Norwegian Wood (This Bird Has Flown)\n3. You Won't See Me\n4. Nowhere Man\n5. Think For Yourself\n6. The Word\n7. Michelle\n8. What Goes On\n9. Girl\n10. I’m Looking Through You\n11. In My Life\n12. Wait\n13. If I Needed Someone\n14. Run For Your Life", "1. Taxman\n2. Eleanor Rigby\n3. I’m Only Sleeping\n4. Love You To\n5. Here, There and Everywhere\n6. Yellow Submarine\n7. She Said She Said\n8. Good Day Sunshine\n9. And Your Bird Can Sing\n10. For No One\n11. Doctor Robert\n12. I Want to Tell You\n13. Got to Get You Into My Life\n14. Tomorrow Never Knows", "1. Sgt. Pepper's Lonely Hearts Club Band\n2. With a Little Help From My Friends\n3. Lucy In the Sky With Diamonds\n4. Getting Better\n5. Fixing a Hole\n6. She’s Leaving Home\n7. Being For the Benefit of Mr. Kite!\n8. Within You Without You\n9. When I'm Sixty-Four\n10. Lovely Rita\n11. Good Morning Good Morning\n12. Sgt. Pepper's Lonely Hearts Club Band (Reprise)\n13. A Day In the Life", "**DISK ONE**\n1. Back In the U.S.S.R.\n2. Dear Prudence\n3. Glass Onion\n4. Ob-La-Di, Ob-La-Da\n5. Wild Honey Pie\n6. The Continuing Story of Bungalow Bill\n7. While My Guitar Gently Weeps\n8. Happiness Is a Warm Gun\n9. Martha My Dear\n10. I’m So Tired\n11. Blackbird\n12. Piggies\n13. Rocky Raccoon\n14. Don’t Pass Me By\n15. Why Don't We Do It In the Road?\n16. I Will\n17. Julia\n\n**DISK TWO**\n1. Birthday\n2. Yer Blues\n3. Mother Nature's Son\n4. Everybody’s Got Something to Hide Except Me and My Monkey\n5. Sexy Sadie\n6. Helter Skelter\n7. Long, Long, Long\n8. Revolution 1\n9. Honey Pie\n10. Savoy Truffle\n11. Cry Baby Cry\n12. Revolution 9\n13. Good Night", "1. Magical Mystery Tour\n2. The Fool On the Hill\n3. Flying\n4. Blue Jay Way\n5. Your Mother Should Know\n6. I Am the Walrus\n7. Hello, Goodbye\n8. Strawberry Fields Forever\n9. Penny Lane\n10. Baby, You're a Rich Man\n11. All You Need Is Love", "1.  Yellow Submarine\n2. Only a Northern Song\n3. All Together Now\n4. Hey Bulldog\n5. It’s All Too Much\n6. All You Need Is Love", "1. Come Together\n2. Something\n3. Maxwell’s Silver Hammer\n4. Oh! Darling\n5. Octopus’s Garden\n6. I Want You (She's So Heavy)\n7. Here Comes the Sun\n8. Because\n9. You Never Give Me Your Money\n10. Sun King\n11. Mean Mr. Mustard\n12. Polythene Pam\n13. She Came In Through the Bathroom Window\n14. The Beatles\n15. Carry That Weight\n16. The End\n17. Her Majesty", "1. Can’t Buy Me Love\n2. I Should Have Known Better\n3. Paperback Writer\n4. Rain\n5. Lady Madonna\n6. Revolution\n7. Hey Jude\n8. Old Brown Shoe\n9. Don’t Let Me Down\n10. The Ballad of John and Yoko", "1. Two of Us\n2. Dig a Pony\n3. Across the Universe\n4. I Me Mine\n5. Dig It\n6. Let It Be\n7. Maggie Mae\n8. I’ve Got a Feeling\n9. One After 909\n10. The Long and Winding Road\n11. For You Blue\n12. Get Back" ];
    for (var i = 0; albumPics.length > i; i++) {
        var thumb = Ti.UI.createImageView({
            image: albumPics[i],
            top: 5,
            left: 8 + 105 * i,
            right: 8,
            height: 95,
            width: 95,
            opacity: 0,
            albumName: albumNames[i],
            trackName: trackList[i],
            type: "albums"
        });
        thumb.animate({
            duration: 800,
            opacity: 1,
            delay: 600 * i
        });
        thumb.addEventListener("click", thumbClicked);
        $.thumbsScroll.add(thumb);
    }
    var bandPics = [ "15.jpg", "16.jpg", "17.jpg", "18.jpg" ];
    var bandNames = [ "Paul McCartney", "John Lennon", "George Harrison", "Ringo Starr" ];
    var bandInfo = [ "	Sir James Paul McCartney was born on 18 June 1942, he is an English musician, singer, songwriter, multi-instrumentalist, and composer.  At the age of fifteen, McCartney met Lennon and his band, the Quarrymen, at the St Peter's Church Hall fête in Woolton on 6 July 1957. The band invited McCartney to join soon afterwards as a rhythm guitarist, and he formed a close working relationship with Lennon.  \n	\n	He gained worldwide fame as a member of the Beatles, his songwriting partnership with Lennon is one of the most celebrated of the 20th century. After the band's break-up, he pursued a solo career and later formed Wings with his first wife, Linda, and Denny Laine.", "	Born John Winston Lennon on 9 October 1940, he was a singer and songwriter who rose to worldwide fame as a founder member of the Beatles, the most commercially successful band in the history of popular music.  \n	\n	With Paul McCartney, he formed a songwriting partnership that is one of the most celebrated of the 20th century. Raised in Liverpool, as a teenager Lennon became involved in the skiffle craze; his first band, the Quarrymen, evolved into the Beatles in 1960.  When the group disbanded in 1970, Lennon embarked on a solo career that produced many critically acclaimed albums.  \n	\n	At around 10:50 pm on 8 December 1980, as Lennon returned to his New York apartment he was shot in the back four times.  Lennon was taken to the emergency room but was pronounced dead on arrival.", "	George Harrison was born on 25 February 1943 was an English musician, singer and songwriter who achieved international fame as the lead guitarist of the Beatles. \n	\n	Although John Lennon and Paul McCartney were the band's primary songwriters, most of their albums included at least one Harrison composition, including 'While My Guitar Gently Weeps'. By 1965 he had begun to lead the Beatles towards Indian classical music through his use of the sitar. He developed an interest in the Hare Krishna movement and became an admirer of Indian culture and mysticism, introducing them to the other members of the Beatles and their Western audience by incorporating Indian instrumentation in their music. After the band's break-up in 1970, Harrison released the triple album All Things Must Pass. \n	\n	Harrison died in 2001, aged 58, from lung cancer. He was cremated and his ashes were scattered in the Ganges and Yamuna rivers in India.", "	Ringo Starr (Richard Starkey) was born on 7 July 1940 is an English musician, singer, songwriter and actor who gained worldwide fame as the drummer for the Beatles. He also wrote the Beatles' songs 'Don't Pass Me Be' and 'Octopus's Garden', and is credited as a co-writer of others. \n	\n	When the Beatles formed in 1960, Starr was a member of another Liverpool group, Rory Storm and the Hurricanes. After achieving moderate success with them in the UK and Hamburg, he quit the Hurricanes and joined the Beatles in August 1962, replacing Pete Best.  After their break-up in 1970, he released several successful singles." ];
    for (var i = 0; bandPics.length > i; i++) {
        var thumb = Ti.UI.createImageView({
            image: bandPics[i],
            top: 5,
            left: 8 + 105 * i,
            right: 8,
            height: 95,
            width: 95,
            opacity: 0,
            bandName: bandNames[i],
            infoName: bandInfo[i],
            type: "bands"
        });
        thumb.animate({
            duration: 800,
            opacity: 1,
            delay: 600 * i
        });
        thumb.addEventListener("click", thumbClicked);
        $.thumbsScroll2.add(thumb);
    }
    $.details.addEventListener("swipe", function(e) {
        "left" == e.direction && $.details.animate({
            duration: 700,
            right: 320
        });
    });
    $.motion.animate({
        duration: 1500,
        delay: 650
    });
    $.index.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;