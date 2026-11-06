// Chakras game cards. Edit freely. A card can be plain text, or an object:
//   {"text": "...", "seconds": 60}                       adds a timer (practices)
//   {"text": "...", "deeper": "...", "theme": "..."}     adds a "Go deeper" follow-up and a small theme label
//   {"text": "...", "care": "..."}                       adds a short safety note
// "deepen" decks hold challenging practices for people who are already open; they unlock once a chakra is awake.
// A chakra can also have an "intimacy" deck behind an 18+ check (Sacral has one): intimacy with yourself, your body, pleasure and desire.
window.CHAKRAS = [
  {
    "id": "root",
    "bija": "LAM",
    "affirmation": "I am safe. I belong here.",
    "name": "Root",
    "sanskrit": "Muladhara",
    "color": "#ff6b8b",
    "theme": "Safety, grounding, feeling at home in yourself",
    "intro": "Sit comfortably with your feet flat on the floor. Take three slow breaths and feel the ground holding you.",
    "reflect": [
      {
        "theme": "boundaries",
        "text": "Do you trust your own judgment?",
        "deeper": "Think of the last time you ignored it. What were you afraid would happen if you listened?"
      },
      {
        "theme": "boundaries",
        "text": "What makes you feel safe?",
        "deeper": "How much of that could you give yourself, without waiting for anyone else?"
      },
      {
        "theme": "boundaries",
        "text": "When have you been pressured into something you didn't want to do?",
        "deeper": "What did you need to hear in that moment, and who could have said it?"
      },
      {
        "theme": "boundaries",
        "text": "What are you never willing to compromise on?",
        "deeper": "Have you ever compromised on it anyway? What did it cost you?"
      },
      {
        "theme": "boundaries",
        "text": "What happens inside you when someone crosses one of your boundaries?",
        "deeper": "Where do you feel it in your body first?"
      },
      {
        "theme": "boundaries",
        "text": "Who in your life respects your \"no\" without needing a reason?",
        "deeper": "How does your body feel around them, compared with everyone else?"
      },
      {
        "theme": "boundaries",
        "text": "What triggers you faster than anything else?",
        "deeper": "What older hurt might that moment be touching?"
      },
      {
        "theme": "boundaries",
        "text": "What calms you down when you're angry?",
        "deeper": "What is the anger trying to protect?"
      },
      {
        "theme": "childhood",
        "text": "What is your earliest memory of feeling truly safe?",
        "deeper": "What was there in that moment that's missing from your life now?"
      },
      {
        "theme": "childhood",
        "text": "When did you first feel unsafe as a child?",
        "deeper": "What did little you decide about the world that day? Is it still true?"
      },
      {
        "theme": "childhood",
        "text": "What was your biggest fear as a child?",
        "deeper": "Does some grown-up version of it still follow you?"
      },
      {
        "theme": "childhood",
        "text": "What was the happiest moment of your childhood?",
        "deeper": "What feeling from that day are you still chasing?"
      },
      {
        "theme": "childhood",
        "text": "What is the most important lesson you learned as a child?",
        "deeper": "Who taught it to you, and do you still agree with them?"
      },
      {
        "theme": "childhood",
        "text": "If you could change one thing about your childhood, what would it be?",
        "deeper": "How could you give yourself a little of that now?"
      },
      {
        "theme": "childhood",
        "text": "What do you miss most about being a child?",
        "deeper": "What would it take to let a bit of it back in?"
      },
      {
        "theme": "childhood",
        "text": "What would you tell your childhood self tonight?",
        "deeper": "Say it out loud. Notice what happens when you hear it."
      },
      {
        "theme": "safety & money",
        "text": "Where in your life do you feel safest right now?",
        "deeper": "What, exactly, makes it feel that way?"
      },
      {
        "theme": "safety & money",
        "text": "Where do you feel most insecure right now?",
        "deeper": "What is one small step that would make it feel even a little safer?"
      },
      {
        "theme": "safety & money",
        "text": "What did you learn about money from the adults who raised you?",
        "deeper": "Which of those lessons are you still living by without ever choosing them?"
      },
      {
        "theme": "safety & money",
        "text": "What is your earliest memory of money?",
        "deeper": "What feeling came with it?"
      },
      {
        "theme": "safety & money",
        "text": "What are your biggest fears about money?",
        "deeper": "If the worst happened, who and what would still be there for you?"
      },
      {
        "theme": "safety & money",
        "text": "What does \"enough\" mean to you?",
        "deeper": "How would you know if you already had it?"
      },
      {
        "theme": "safety & money",
        "text": "How does money affect the way you see your own worth?",
        "deeper": "Who would you be if your worth had nothing to do with your bank account?"
      },
      {
        "theme": "safety & money",
        "text": "What would you do if money were never a worry again?",
        "deeper": "Which small piece of that could you start this month?"
      }
    ],
    "deepen": [
      {
        "theme": "deep practice",
        "text": "Hold Malasana, a deep squat, heels down if you can, palms together at your heart. Breathe into your pelvic floor and stay through the discomfort.",
        "seconds": 180,
        "deeper": "What did your mind tell you to make you stand up early?"
      },
      {
        "theme": "deep practice",
        "text": "Mula Bandha: on each exhale, gently draw up the pelvic floor and hold for five counts; release on the inhale. Twenty rounds.",
        "seconds": 240,
        "deeper": "Where else in your body were you gripping without noticing?"
      },
      {
        "theme": "deep practice",
        "text": "Walk barefoot on the earth (grass, soil or sand) slowly for twenty minutes, phone away. Feel every part of each foot land.",
        "seconds": 1200,
        "deeper": "What changed in your thoughts between minute one and minute twenty?"
      },
      {
        "theme": "deep practice",
        "text": "Horse stance: feet wide, knees bent, back straight, arms forward. Stay until your legs shake, then stay ten more breaths.",
        "seconds": 180,
        "deeper": "When the shaking started, what did you want to do? What did you do?",
        "care": "Ease off if your knees hurt."
      },
      {
        "theme": "deep practice",
        "text": "Chant LAM aloud 108 times, slow and low, feeling it at the base of your spine.",
        "seconds": 600,
        "deeper": "Where did the sound land in your body?"
      },
      {
        "theme": "inquiry",
        "text": "Write down your three deepest survival fears (money, home, being alone, illness). Next to each, write the oldest memory it comes from.",
        "deeper": "Which fear is protecting a younger you, and what does that younger you need now?"
      },
      {
        "theme": "inquiry",
        "text": "List everything you'd keep if your whole life had to fit in one bag.",
        "deeper": "What does that tell you about what actually makes you safe?"
      },
      {
        "theme": "real-life challenge",
        "text": "Do one thing today that feels unsafe in a healthy way: ask for what you're worth, eat alone in a restaurant, or let go of a backup plan.",
        "deeper": "What did you learn about how solid your ground really is?"
      }
    ],
    "practice": [
      {
        "text": "Stand barefoot. Rock slowly from heels to toes and feel your weight shift into the ground.",
        "seconds": 60
      },
      {
        "text": "Rub your own feet slowly, one at a time. Thank them for carrying you everywhere.",
        "seconds": 60
      },
      {
        "text": "Breathe in for four counts, hold for four, out for four, hold for four. Repeat.",
        "seconds": 60
      },
      "Name three things in your life right now that feel solid and secure. Say them out loud.",
      {
        "text": "Lie down flat, one hand on your belly. Feel each breath rise and fall.",
        "seconds": 90
      },
      "Finish this sentence out loud: \"I am safe, and I have everything I need for...\""
    ]
  },
  {
    "id": "sacral",
    "bija": "VAM",
    "affirmation": "I let joy move through me.",
    "name": "Sacral",
    "sanskrit": "Svadhisthana",
    "color": "#ffa05c",
    "theme": "Joy, play, feelings and creativity",
    "intro": "Roll your shoulders, shake out your hands, and let yourself smile for no reason at all.",
    "reflect": [
      {
        "theme": "your body",
        "text": "How do you really feel about your body?",
        "deeper": "Whose voice do you hear when you judge it?"
      },
      {
        "theme": "your body",
        "text": "Do you feel at home in your own body, soft and sensual?",
        "deeper": "When did you last feel that way, and what was different then?"
      },
      {
        "theme": "your body",
        "text": "What does your body do for you that you rarely thank it for?",
        "deeper": "Thank one part of it out loud right now."
      },
      {
        "theme": "your body",
        "text": "If you could change something about your body, what would it be?",
        "deeper": "Who first taught you that it needed changing?"
      },
      {
        "theme": "your body",
        "text": "How could you celebrate your body this week?",
        "deeper": "What usually gets in the way of doing it?"
      },
      {
        "theme": "your body",
        "text": "What does caring for your body look like when you're at your best?",
        "deeper": "What's the smallest version of that you could do tonight?"
      },
      {
        "theme": "relationships",
        "text": "How do you feel about being in a romantic relationship?",
        "deeper": "What fear sits underneath that feeling?"
      },
      {
        "theme": "relationships",
        "text": "What brings you real pleasure?",
        "deeper": "When did you last let yourself have it without guilt?"
      },
      {
        "theme": "relationships",
        "text": "How do you show love to your friends?",
        "deeper": "Is that the way you most want to be loved back?"
      },
      {
        "theme": "relationships",
        "text": "What is an absolute deal breaker for you in love?",
        "deeper": "Where did you learn to draw that line?"
      },
      {
        "theme": "relationships",
        "text": "Are you comfortable with your own desires?",
        "deeper": "What would change if you stopped apologizing for them?"
      },
      {
        "theme": "relationships",
        "text": "What do you value most in the people closest to you?",
        "deeper": "Do you offer that same thing to yourself?"
      },
      {
        "theme": "feelings",
        "text": "Do you believe you deserve a happy life?",
        "deeper": "What would you have to forgive to fully believe it?"
      },
      {
        "theme": "feelings",
        "text": "Which emotion do you find hardest to express?",
        "deeper": "What happened the last time you let it out?"
      },
      {
        "theme": "feelings",
        "text": "What do you need to let go of?",
        "deeper": "What are you afraid will happen if you do?"
      },
      {
        "theme": "feelings",
        "text": "What do you want to create in your life?",
        "deeper": "What feeling are you hoping it will give you?"
      },
      {
        "theme": "feelings",
        "text": "Which emotion would you like to feel more often?",
        "deeper": "What usually invites it in?"
      },
      {
        "theme": "feelings",
        "text": "How do your emotions shape your relationships?",
        "deeper": "Which feeling do you most often hide from the people you love?"
      }
    ],
    "intimacy": [
      {
        "theme": "your body & senses",
        "text": "When do you feel most at home in your body?",
        "deeper": "What would it take to feel that way a little more often?"
      },
      {
        "theme": "your body & senses",
        "text": "How do you touch your own body when no one is watching: with care, or in a hurry?",
        "deeper": "What would loving, unhurried touch feel like tonight?"
      },
      {
        "theme": "your body & senses",
        "text": "Which part of your body do you find hardest to love?",
        "deeper": "What would you say to it if it could hear you?"
      },
      {
        "theme": "your body & senses",
        "text": "Which textures, scents and sounds make you feel sensual?",
        "deeper": "When did you last surround yourself with them, just for you?"
      },
      {
        "theme": "your body & senses",
        "text": "Can you look at your naked body in the mirror with kindness?",
        "deeper": "What do you notice first, and what would you rather notice?"
      },
      {
        "theme": "your body & senses",
        "text": "How do you care for your body after a hard day?",
        "deeper": "What would it look like to treat that care as sacred?"
      },
      {
        "theme": "pleasure & desire",
        "text": "What does pleasure mean to you, outside of sex?",
        "deeper": "How much of it do you allow yourself in an ordinary week?"
      },
      {
        "theme": "pleasure & desire",
        "text": "How do you feel about touching yourself for pleasure?",
        "deeper": "Whose voice comes up when you think about it?"
      },
      {
        "theme": "pleasure & desire",
        "text": "What do you desire just for you, not for anyone else?",
        "deeper": "What's stopping you from giving it to yourself?"
      },
      {
        "theme": "pleasure & desire",
        "text": "Do you know your own body: what you like, and how you like it?",
        "deeper": "How could you explore that gently, with curiosity instead of pressure?"
      },
      {
        "theme": "pleasure & desire",
        "text": "When do you feel sexy alone, with no one looking?",
        "deeper": "What does that version of you know that you forget around others?"
      },
      {
        "theme": "pleasure & desire",
        "text": "Do you let yourself feel desire, or do you shut it down?",
        "deeper": "What are you afraid it would ask of you?"
      },
      {
        "theme": "shame & healing",
        "text": "What did you learn growing up about your body and pleasure?",
        "deeper": "Which of those messages are you ready to put down?"
      },
      {
        "theme": "shame & healing",
        "text": "Is there shame you carry about your sexuality?",
        "deeper": "If it belonged to someone you love, would you judge them for it?"
      },
      {
        "theme": "shame & healing",
        "text": "Has someone else's touch, words or opinion changed how you feel in your own skin?",
        "deeper": "What would it take to claim your body back as yours? You don't have to do that alone."
      },
      {
        "theme": "shame & healing",
        "text": "Do you feel safe in your own body?",
        "deeper": "Where do you feel safest in it, and can you breathe into that place now?"
      },
      {
        "theme": "shame & healing",
        "text": "How do you honor your own yes and no, even with yourself?",
        "deeper": "Where have you been pushing past your own limits?"
      },
      {
        "theme": "shame & healing",
        "text": "What would it mean to be your own first love?",
        "deeper": "What is one way you could court yourself this week?"
      },
      {
        "theme": "self-love ritual",
        "text": "Slowly massage oil or lotion into your skin, one part at a time, as if it belonged to someone you adore.",
        "seconds": 120,
        "deeper": "Which part of you was hungriest for that care?"
      },
      {
        "theme": "self-love ritual",
        "text": "Rest one hand on your lower belly and one on your heart. Breathe slowly into both and let your hips soften.",
        "seconds": 90,
        "deeper": "What did your body want you to know?"
      },
      {
        "theme": "self-love ritual",
        "text": "Stand in front of a mirror and say three things you find beautiful about your body, out loud.",
        "deeper": "Which one was hardest to say, and why?"
      },
      {
        "theme": "self-love ritual",
        "text": "Put on music that makes you feel sensual and move your hips slowly, just for you.",
        "seconds": 120,
        "deeper": "How did it feel to move only for your own pleasure?"
      }
    ],
    "deepen": [
      {
        "theme": "deep practice",
        "text": "Pigeon pose, three minutes on each side, breathing into the hip. Let emotion come up if it does.",
        "seconds": 360,
        "deeper": "What feeling was stored in your hips today?",
        "care": "Ease out if you feel sharp knee pain."
      },
      {
        "theme": "deep practice",
        "text": "Shaking release: stand and shake your whole body, starting from the knees and hips, for five minutes. Let sound come out.",
        "seconds": 300,
        "deeper": "What did your body release that your words never have?"
      },
      {
        "theme": "deep practice",
        "text": "Dance with your eyes closed to three songs you've never danced to. No steps, only impulse.",
        "seconds": 720,
        "deeper": "Which movement surprised you?"
      },
      {
        "theme": "deep practice",
        "text": "Feel one difficult emotion fully for five minutes (sadness, envy, anger) without fixing it. Breathe and name only the body sensations.",
        "seconds": 300,
        "deeper": "Where did it live in your body, and did it change?"
      },
      {
        "theme": "deep practice",
        "text": "Chant VAM 108 times, letting your pelvis rock gently with the sound.",
        "seconds": 600,
        "deeper": "What did the rocking stir up?"
      },
      {
        "theme": "deep practice",
        "text": "Create something for one hour with no goal and no audience: paint, write, cook, move. Don't show anyone.",
        "seconds": 3600,
        "deeper": "What came out when no one was going to see it?"
      },
      {
        "theme": "inquiry",
        "text": "Name the pleasure you deny yourself most. Write the rule you live by about it, and where that rule came from.",
        "deeper": "Is that rule still yours? What would you rewrite it to?"
      },
      {
        "theme": "real-life challenge",
        "text": "Water ritual: take a slow bath or shower in silence, and with each part of you that you wash, name one feeling you're letting go.",
        "deeper": "Which feeling didn't want to leave?"
      }
    ],
    "practice": [
      {
        "text": "Put on a song you love and dance like nobody's watching, because nobody is.",
        "seconds": 90
      },
      {
        "text": "Move your hips in slow circles, one way and then the other. Let it feel good.",
        "seconds": 45
      },
      "Doodle, hum, or write one silly line of poetry. It doesn't have to be good.",
      {
        "text": "Wrap yourself in something soft and just enjoy how it feels.",
        "seconds": 60
      },
      "Plan one small treat for yourself this week, and decide on the day.",
      "Name a feeling you're having right now, without judging it. Just say: \"I feel...\""
    ]
  },
  {
    "id": "solar",
    "bija": "RAM",
    "affirmation": "I trust my own fire.",
    "name": "Solar Plexus",
    "sanskrit": "Manipura",
    "color": "#ffdc5e",
    "theme": "Confidence, strength, believing in yourself",
    "intro": "Sit tall. Put a hand just above your belly button and breathe into it, slow and deep.",
    "reflect": [
      {
        "theme": "confidence",
        "text": "When do you feel most confident?",
        "deeper": "What are you doing, and who are you with?"
      },
      {
        "theme": "confidence",
        "text": "What's something you've done that you're quietly proud of?",
        "deeper": "Why do you keep it quiet?"
      },
      {
        "theme": "confidence",
        "text": "What would you try if you knew you couldn't fail?",
        "deeper": "What's the real fear: failing, or being seen trying?"
      },
      {
        "theme": "confidence",
        "text": "What strength do other people notice in you before you do?",
        "deeper": "Why is it hard for you to see it?"
      },
      {
        "theme": "confidence",
        "text": "When did you last surprise yourself?",
        "deeper": "What did that moment show you about what you're capable of?"
      },
      {
        "theme": "confidence",
        "text": "What does your inner critic say most often?",
        "deeper": "If it were trying to protect you, what would it be protecting you from?"
      },
      {
        "theme": "power & choices",
        "text": "Whose opinion do you give too much weight to?",
        "deeper": "What would you decide differently if they never found out?"
      },
      {
        "theme": "power & choices",
        "text": "Where in your life do you feel powerless right now?",
        "deeper": "What is one thing in that situation you do control?"
      },
      {
        "theme": "power & choices",
        "text": "What decision have you been putting off?",
        "deeper": "What would you choose if you trusted yourself completely?"
      },
      {
        "theme": "power & choices",
        "text": "Where do you say yes when you mean no?",
        "deeper": "What are you hoping to get by saying yes?"
      },
      {
        "theme": "power & choices",
        "text": "What boundary would you like to hold more firmly?",
        "deeper": "What does it cost you to keep not holding it?"
      },
      {
        "theme": "power & choices",
        "text": "What does anger feel like in your body?",
        "deeper": "What is it asking you to change?"
      },
      {
        "theme": "self-worth",
        "text": "Do you feel worthy of the things you want?",
        "deeper": "Who told you that you had to earn them?"
      },
      {
        "theme": "self-worth",
        "text": "What do you do to prove yourself to others?",
        "deeper": "Who would you be if you didn't have to prove anything?"
      },
      {
        "theme": "self-worth",
        "text": "How do you talk to yourself when you make a mistake?",
        "deeper": "Would you ever speak to someone you love that way?"
      },
      {
        "theme": "self-worth",
        "text": "What goal have you given up on?",
        "deeper": "Did you stop wanting it, or stop believing you could?"
      },
      {
        "theme": "self-worth",
        "text": "What does success mean to you, in your own words?",
        "deeper": "Whose definition have you been living by instead?"
      },
      {
        "theme": "self-worth",
        "text": "When do you shrink yourself to make others comfortable?",
        "deeper": "What would it feel like to take up your full space?"
      }
    ],
    "deepen": [
      {
        "theme": "deep practice",
        "text": "Kapalabhati: three rounds of thirty quick, forceful exhales through the nose, belly snapping in, inhales passive. Rest a minute between rounds.",
        "seconds": 300,
        "deeper": "How did your energy and focus feel afterward?",
        "care": "Skip if pregnant, or with high blood pressure, a heart condition or epilepsy. Stop if you feel dizzy."
      },
      {
        "theme": "deep practice",
        "text": "Boat pose: five holds of thirty seconds, resting fifteen between. Breathe into your core instead of holding your breath.",
        "seconds": 240,
        "deeper": "When it burned, what did you tell yourself?"
      },
      {
        "theme": "deep practice",
        "text": "Agni Sara: stand with hands on thighs, exhale fully, and on empty lungs pump the belly in and out ten times. Five rounds.",
        "seconds": 240,
        "deeper": "Where did you feel the fire afterward?",
        "care": "Empty stomach only. Skip if pregnant or during your period."
      },
      {
        "theme": "deep practice",
        "text": "End your shower with sixty seconds of cold water, breathing slowly through it.",
        "seconds": 60,
        "deeper": "What did you learn about choosing discomfort?",
        "care": "Skip with a heart condition or Raynaud's."
      },
      {
        "theme": "deep practice",
        "text": "Chant RAM 108 times with force, one hand on your upper belly.",
        "seconds": 600,
        "deeper": "Did your voice get stronger or weaker as you went?"
      },
      {
        "theme": "inquiry",
        "text": "Write a letter from your most powerful self to your current self: what it sees, what it's tired of waiting for, and what it demands next.",
        "deeper": "Which demand scares you most?"
      },
      {
        "theme": "real-life challenge",
        "text": "Do the thing you've avoided all week, today, before dinner.",
        "deeper": "What was the avoiding really protecting you from?"
      },
      {
        "theme": "real-life challenge",
        "text": "Say no today to one request you'd normally say yes to out of guilt, without explaining yourself.",
        "deeper": "What happened in your body as you said it?"
      }
    ],
    "practice": [
      {
        "text": "Stand in a power pose: feet wide, hands on hips, chin up. Breathe big.",
        "seconds": 60
      },
      "Say out loud: \"I am capable. I am enough. I can do hard things.\" Say it like you mean it.",
      "Write down three things you did well this week, no matter how small.",
      {
        "text": "Breathe fire: short, quick breaths out through your nose while your belly pumps. Then rest.",
        "seconds": 30
      },
      "Pick one small task you've been avoiding and do the very first step of it right now.",
      {
        "text": "Hold a plank, or any pose that makes you feel strong. Notice how strong you are.",
        "seconds": 30
      }
    ]
  },
  {
    "id": "heart",
    "bija": "YAM",
    "affirmation": "I give and receive love freely.",
    "name": "Heart",
    "sanskrit": "Anahata",
    "color": "#6ee7a8",
    "theme": "Love, compassion, forgiveness",
    "intro": "Place both hands over your heart. Feel it beating, steady and faithful, just for you.",
    "reflect": [
      {
        "theme": "giving & receiving",
        "text": "What does love mean to you?",
        "deeper": "Has that meaning changed since you were younger?"
      },
      {
        "theme": "giving & receiving",
        "text": "Who makes you feel truly loved?",
        "deeper": "Have you told them? What would you say?"
      },
      {
        "theme": "giving & receiving",
        "text": "How do you receive love from others?",
        "deeper": "Do you let it all the way in, or do you brush it off?"
      },
      {
        "theme": "giving & receiving",
        "text": "What's your love language?",
        "deeper": "How would someone who loves you know what you need?"
      },
      {
        "theme": "giving & receiving",
        "text": "When did you last do something thoughtful for someone?",
        "deeper": "How did it feel in your body afterward?"
      },
      {
        "theme": "giving & receiving",
        "text": "What are your hopes for your love life?",
        "deeper": "What would you need to believe about yourself to let them happen?"
      },
      {
        "theme": "hurt & forgiveness",
        "text": "What are your fears about love?",
        "deeper": "Where did you first learn to be afraid of it?"
      },
      {
        "theme": "hurt & forgiveness",
        "text": "Do you fear getting close to people?",
        "deeper": "What do you think they'll find if they get close?"
      },
      {
        "theme": "hurt & forgiveness",
        "text": "Have you lost someone close to you?",
        "deeper": "What would you want them to know about how you're doing now?"
      },
      {
        "theme": "hurt & forgiveness",
        "text": "Are you holding a grudge against someone who hurt you?",
        "deeper": "What is holding onto it protecting you from?"
      },
      {
        "theme": "hurt & forgiveness",
        "text": "What negative beliefs do you hold about love?",
        "deeper": "Whose voice does that belief sound like?"
      },
      {
        "theme": "hurt & forgiveness",
        "text": "Is there something you need to forgive yourself for?",
        "deeper": "What did you need back then that you didn't have?"
      },
      {
        "theme": "self-love",
        "text": "What does self-love look like on an ordinary day?",
        "deeper": "How much of that did you give yourself today?"
      },
      {
        "theme": "self-love",
        "text": "Do you spend real time alone with yourself?",
        "deeper": "What do you discover about yourself when it's quiet?"
      },
      {
        "theme": "self-love",
        "text": "What do you love about yourself that has nothing to do with what you do for others?",
        "deeper": "Why might that be hard to answer?"
      },
      {
        "theme": "self-love",
        "text": "Do you make time for the people you care about?",
        "deeper": "Who has been waiting to hear from you?"
      },
      {
        "theme": "self-love",
        "text": "What would you say to a friend who felt the way you feel right now?",
        "deeper": "Can you say it to yourself, word for word?"
      },
      {
        "theme": "self-love",
        "text": "What are your hopes and dreams for the world?",
        "deeper": "What small part of that lives in how you treat people?"
      }
    ],
    "deepen": [
      {
        "theme": "deep practice",
        "text": "Loving-kindness for a difficult person: for ten minutes, send \"May you be happy, may you be free from suffering\" to someone who hurt you.",
        "seconds": 600,
        "deeper": "Where did your heart close, and what happened when you breathed into it?"
      },
      {
        "theme": "deep practice",
        "text": "Camel pose: kneel, hands to your lower back or heels, and lift your chest open. Five breaths, three times.",
        "seconds": 180,
        "deeper": "What came up when your heart was exposed?",
        "care": "Keep your neck long. Skip with a back injury."
      },
      {
        "theme": "deep practice",
        "text": "Hold your own gaze in a mirror for five full minutes. Every time you look away and come back, say \"I love you.\"",
        "seconds": 300,
        "deeper": "What did you see in your eyes at minute four?"
      },
      {
        "theme": "deep practice",
        "text": "Let yourself grieve one loss fully, with music or photos, without pulling yourself together.",
        "seconds": 900,
        "deeper": "What does that grief say about how much you loved?"
      },
      {
        "theme": "deep practice",
        "text": "Chant YAM 108 times with both hands over your heart.",
        "seconds": 600,
        "deeper": "What softened?"
      },
      {
        "theme": "inquiry",
        "text": "Where do you give love to be needed, rather than freely?",
        "deeper": "What would giving without needing anything back feel like?"
      },
      {
        "theme": "real-life challenge",
        "text": "Write a forgiveness letter to someone you still resent. Don't send it. Then write their reply as if they finally understood.",
        "deeper": "What do you need, now that you've heard it?"
      },
      {
        "theme": "real-life challenge",
        "text": "Tell someone today something true and tender you've never said: \"I'm proud of you,\" \"I miss you,\" or \"You hurt me.\"",
        "deeper": "What did that vulnerability cost, and what did it give?"
      }
    ],
    "practice": [
      {
        "text": "Give yourself a long hug. Arms all the way around, squeeze gently, and stay.",
        "seconds": 30
      },
      "Look in a mirror, into your own eyes, and say: \"I love you. I'm proud of you.\"",
      {
        "text": "Breathe in love, breathe out tension. Picture green light filling your chest.",
        "seconds": 60
      },
      "Write a short, kind note to your younger self.",
      "Send a message to someone you love, just to tell them you're thinking of them.",
      "Name three people or things you're grateful for today, and why."
    ]
  },
  {
    "id": "throat",
    "bija": "HAM",
    "affirmation": "My voice deserves to be heard.",
    "name": "Throat",
    "sanskrit": "Vishuddha",
    "color": "#6cc4ff",
    "theme": "Honest words, speaking your truth, being heard",
    "intro": "Hum one long note on a single breath. Feel it buzz in your throat and chest.",
    "reflect": [
      {
        "theme": "speaking up",
        "text": "What's something you've been wanting to say, but haven't?",
        "deeper": "What's the worst that could happen if you said it? And the best?"
      },
      {
        "theme": "speaking up",
        "text": "When did you learn that it wasn't safe to speak up?",
        "deeper": "Is that still true in your life today?"
      },
      {
        "theme": "speaking up",
        "text": "What's a \"yes\" you said lately that should have been a \"no\"?",
        "deeper": "What would a kind, clear no have sounded like?"
      },
      {
        "theme": "speaking up",
        "text": "Who do you find it hardest to be honest with?",
        "deeper": "What are you afraid you'll lose?"
      },
      {
        "theme": "speaking up",
        "text": "What do you hold back when you disagree with someone?",
        "deeper": "What would happen if you said the quiet part out loud?"
      },
      {
        "theme": "speaking up",
        "text": "When did your voice last shake, but you spoke anyway?",
        "deeper": "What did that teach you about yourself?"
      },
      {
        "theme": "being heard",
        "text": "When do you feel truly heard?",
        "deeper": "What does that person do that others don't?"
      },
      {
        "theme": "being heard",
        "text": "What do you wish people asked you about more often?",
        "deeper": "What would you want to tell them?"
      },
      {
        "theme": "being heard",
        "text": "Do you listen to others the way you want to be listened to?",
        "deeper": "What makes it hard to really listen?"
      },
      {
        "theme": "being heard",
        "text": "Who in your life talks over you?",
        "deeper": "What would change if you stopped letting it slide?"
      },
      {
        "theme": "being heard",
        "text": "When did you last feel misunderstood?",
        "deeper": "What did you need them to understand?"
      },
      {
        "theme": "being heard",
        "text": "How do you express yourself when words aren't enough?",
        "deeper": "When did you last give yourself time for that?"
      },
      {
        "theme": "truth",
        "text": "What's a truth about yourself you've been afraid to admit?",
        "deeper": "Who would you be if you admitted it?"
      },
      {
        "theme": "truth",
        "text": "Where in your life are you pretending?",
        "deeper": "What would it take to stop, even a little?"
      },
      {
        "theme": "truth",
        "text": "What small lie do you tell most often?",
        "deeper": "What is it protecting?"
      },
      {
        "theme": "truth",
        "text": "What does your gut keep saying that your mouth won't?",
        "deeper": "Say it now, just to yourself."
      },
      {
        "theme": "truth",
        "text": "What part of your story have you never told anyone?",
        "deeper": "Who would you want to be the first to hear it?"
      },
      {
        "theme": "truth",
        "text": "If your voice could say anything to the world right now, what would it say?",
        "deeper": "Say one sentence of it out loud."
      }
    ],
    "deepen": [
      {
        "theme": "deep practice",
        "text": "Mauna: stay completely silent for two hours. No talking, no texting, no typing to anyone.",
        "seconds": 7200,
        "deeper": "What did you notice about the words you usually reach for?"
      },
      {
        "theme": "deep practice",
        "text": "Ujjayi breath for ten minutes: slow, ocean-sounding breaths with a slight squeeze at the back of the throat, inhale and exhale equal.",
        "seconds": 600,
        "deeper": "How did your throat feel when you finished?"
      },
      {
        "theme": "deep practice",
        "text": "Lion's breath: inhale through the nose, then exhale through a wide-open mouth, tongue out, with a loud \"haaa.\" Twelve rounds.",
        "seconds": 120,
        "deeper": "Did it feel freeing or embarrassing, and why?"
      },
      {
        "theme": "deep practice",
        "text": "Record yourself talking for three minutes about something you believe in. Listen back all the way through.",
        "seconds": 180,
        "deeper": "What would you change, and what do you secretly like?"
      },
      {
        "theme": "deep practice",
        "text": "Chant HAM 108 times, feeling the buzz in your throat.",
        "seconds": 600,
        "deeper": "Where did your voice want to go quiet?"
      },
      {
        "theme": "inquiry",
        "text": "Write the truth you'd say if no one could punish you for it. Then decide who needs to hear it.",
        "deeper": "What would it cost to keep it in for another year?"
      },
      {
        "theme": "real-life challenge",
        "text": "Have the conversation you've been avoiding, within 24 hours. Speak in \"I feel… I need…\"",
        "deeper": "What did your voice sound like when it was honest?"
      },
      {
        "theme": "real-life challenge",
        "text": "Sing a whole song out loud, alone, at full voice, and don't stop when it cracks.",
        "deeper": "Where did you hold back?"
      }
    ],
    "practice": [
      {
        "text": "Sing along to a song you love, out loud and full voice.",
        "seconds": 90
      },
      "Say three true sentences about how you're really doing today. No \"I'm fine.\"",
      {
        "text": "Gently massage your neck and jaw. Let your mouth fall open and relax.",
        "seconds": 45
      },
      {
        "text": "Write without stopping: \"What I really want to say is...\"",
        "seconds": 120
      },
      "Say \"no\" out loud five times, firmly and kindly. Notice how it feels.",
      {
        "text": "Chant \"ham\" (hahm) slowly, letting each one vibrate in your throat.",
        "seconds": 45
      }
    ]
  },
  {
    "id": "thirdeye",
    "bija": "OM",
    "affirmation": "I trust what I see within.",
    "name": "Third Eye",
    "sanskrit": "Ajna",
    "color": "#a98bff",
    "theme": "Intuition, vision, seeing clearly",
    "intro": "Close your eyes. Rest a fingertip lightly between your eyebrows and breathe.",
    "reflect": [
      {
        "theme": "intuition",
        "text": "What's your gut been telling you lately?",
        "deeper": "What happens in your body when you ignore it?"
      },
      {
        "theme": "intuition",
        "text": "When did you last trust your intuition, and what happened?",
        "deeper": "And a time you didn't? What was the difference?"
      },
      {
        "theme": "intuition",
        "text": "How does your intuition speak to you: a feeling, a voice, an image?",
        "deeper": "When is it loudest?"
      },
      {
        "theme": "intuition",
        "text": "What do you already know but keep pretending you don't?",
        "deeper": "What would you have to do if you admitted it?"
      },
      {
        "theme": "intuition",
        "text": "What's a sign you've been ignoring?",
        "deeper": "What are you afraid it's pointing toward?"
      },
      {
        "theme": "intuition",
        "text": "Whose advice do you trust more than your own?",
        "deeper": "What would happen if you asked yourself first?"
      },
      {
        "theme": "vision",
        "text": "Picture yourself a year from now, happy. What does your life look like?",
        "deeper": "What's one thing in that picture you could start this week?"
      },
      {
        "theme": "vision",
        "text": "What dream do you keep coming back to?",
        "deeper": "Why do you think it won't let you go?"
      },
      {
        "theme": "vision",
        "text": "What did you dream of becoming as a child?",
        "deeper": "What part of that dream is still alive in you?"
      },
      {
        "theme": "vision",
        "text": "If your life were a story, what chapter are you in?",
        "deeper": "What do you want the next chapter to be called?"
      },
      {
        "theme": "vision",
        "text": "What would you do with your life if no one were watching?",
        "deeper": "How different is that from what you're doing now?"
      },
      {
        "theme": "vision",
        "text": "Which version of yourself are you growing into?",
        "deeper": "What does that version of you do differently than you do today?"
      },
      {
        "theme": "seeing clearly",
        "text": "What do you see clearly now that you couldn't see a year ago?",
        "deeper": "What helped the fog lift?"
      },
      {
        "theme": "seeing clearly",
        "text": "What pattern keeps repeating in your life?",
        "deeper": "What might it be trying to teach you?"
      },
      {
        "theme": "seeing clearly",
        "text": "What illusion about someone have you had to let go of?",
        "deeper": "What did seeing the truth give you?"
      },
      {
        "theme": "seeing clearly",
        "text": "Where are you seeing what you want to see, instead of what's really there?",
        "deeper": "What would you notice if you looked again?"
      },
      {
        "theme": "seeing clearly",
        "text": "What do your dreams at night keep showing you?",
        "deeper": "If they were a message, what would it say?"
      },
      {
        "theme": "seeing clearly",
        "text": "What would you see differently if fear weren't in the way?",
        "deeper": "And what would you do next?"
      }
    ],
    "deepen": [
      {
        "theme": "deep practice",
        "text": "Trataka: gaze at a candle flame without blinking for as long as you can, then close your eyes and hold the afterimage. Repeat for ten minutes.",
        "seconds": 600,
        "deeper": "What did you see in the darkness?",
        "care": "Skip with epilepsy or an eye condition. Blink whenever you need to."
      },
      {
        "theme": "deep practice",
        "text": "Nadi Shodhana: alternate-nostril breathing for ten minutes, in for 4, hold for 4, out for 8.",
        "seconds": 600,
        "deeper": "How balanced did you feel afterward?",
        "care": "The breath holds are optional. Skip them if pregnant or with high blood pressure."
      },
      {
        "theme": "deep practice",
        "text": "Sit in complete darkness for fifteen minutes with your eyes open and watch what your mind shows you.",
        "seconds": 900,
        "deeper": "What did your mind fill the dark with?"
      },
      {
        "theme": "deep practice",
        "text": "For ten minutes, picture your life five years from now in vivid detail: rooms, people, sounds, and how you feel.",
        "seconds": 600,
        "deeper": "What detail surprised you?"
      },
      {
        "theme": "deep practice",
        "text": "Chant OM 108 times, feeling it between your brows.",
        "seconds": 600,
        "deeper": "What image or color appeared?"
      },
      {
        "theme": "inquiry",
        "text": "Write down a belief you hold that might be an illusion, then argue against it as convincingly as you can.",
        "deeper": "What shifts if it isn't true?"
      },
      {
        "theme": "real-life challenge",
        "text": "Keep a dream journal for seven mornings. Write before you touch your phone.",
        "deeper": "Which symbols or feelings keep repeating?"
      },
      {
        "theme": "real-life challenge",
        "text": "Make one decision today using only your gut. Notice the first answer in your body before your mind argues.",
        "deeper": "How did it turn out, and how did it feel to trust yourself?"
      }
    ],
    "practice": [
      {
        "text": "Eyes closed, imagine a deep indigo light between your brows, growing brighter with each breath.",
        "seconds": 90
      },
      {
        "text": "Gently press and circle the spot between your eyebrows with your fingertip.",
        "seconds": 30
      },
      "Ask yourself a question you've been stuck on, close your eyes, and notice the first answer that comes.",
      {
        "text": "Look at one thing in the room and really see it: color, shape, light, texture.",
        "seconds": 60
      },
      "Write down one dream for your future, in the present tense, as if it's already true.",
      {
        "text": "Sit in silence and simply watch your thoughts drift by like clouds.",
        "seconds": 120
      }
    ]
  },
  {
    "id": "crown",
    "bija": "AUM",
    "affirmation": "I am whole, and I am connected.",
    "name": "Crown",
    "sanskrit": "Sahasrara",
    "color": "#f19cff",
    "theme": "Gratitude, purpose, feeling whole",
    "intro": "Sit still, palms open on your knees. Breathe in silence and feel the space around you.",
    "reflect": [
      {
        "theme": "meaning",
        "text": "What gives your life meaning?",
        "deeper": "When did you last feel it in an ordinary moment?"
      },
      {
        "theme": "meaning",
        "text": "What kind of person do you want to be remembered as?",
        "deeper": "What did you do today that matches that?"
      },
      {
        "theme": "meaning",
        "text": "What do you believe happens after we die?",
        "deeper": "How does that belief shape the way you live?"
      },
      {
        "theme": "meaning",
        "text": "What are you here to learn?",
        "deeper": "What lesson keeps finding you?"
      },
      {
        "theme": "meaning",
        "text": "What would make your life feel complete?",
        "deeper": "What if, in some way, it already is?"
      },
      {
        "theme": "meaning",
        "text": "What has your hardest season taught you?",
        "deeper": "Can you thank it, even a little?"
      },
      {
        "theme": "connection",
        "text": "When do you feel most connected to something bigger than yourself?",
        "deeper": "How could you invite that feeling in more often?"
      },
      {
        "theme": "connection",
        "text": "What do you believe in, deep down?",
        "deeper": "Where did that belief come from?"
      },
      {
        "theme": "connection",
        "text": "When did you last feel awe?",
        "deeper": "What made it feel so big?"
      },
      {
        "theme": "connection",
        "text": "How are you connected to the people who came before you?",
        "deeper": "What did they give you that you still carry?"
      },
      {
        "theme": "connection",
        "text": "Where do you find the sacred in everyday life?",
        "deeper": "What would change if you noticed it more?"
      },
      {
        "theme": "connection",
        "text": "What does surrender mean to you?",
        "deeper": "What are you still holding tight that you could set down?"
      },
      {
        "theme": "peace",
        "text": "What are you most grateful for right now?",
        "deeper": "Who or what made it possible?"
      },
      {
        "theme": "peace",
        "text": "What's a moment this year when you felt completely at peace?",
        "deeper": "What wasn't there in that moment that's usually there?"
      },
      {
        "theme": "peace",
        "text": "What would it feel like to need nothing, just for tonight?",
        "deeper": "Breathe into that feeling for three slow breaths."
      },
      {
        "theme": "peace",
        "text": "What do you need to accept so you can be at peace?",
        "deeper": "What would acceptance give you that fighting doesn't?"
      },
      {
        "theme": "peace",
        "text": "If your whole self could speak right now, what would it say?",
        "deeper": "Can you trust it?"
      },
      {
        "theme": "peace",
        "text": "What would you tell yourself at the start of this journey, now that you've reached the end?",
        "deeper": "What will you carry into tomorrow?"
      }
    ],
    "deepen": [
      {
        "theme": "deep practice",
        "text": "Sit in silent meditation for twenty minutes. No music, no guidance. Each time you notice a thought, return to the breath.",
        "seconds": 1200,
        "deeper": "What was underneath the thoughts when they paused?"
      },
      {
        "theme": "deep practice",
        "text": "Self-inquiry: ask yourself \"Who am I?\" Each time an answer comes (a name, a role, a feeling), ask \"Who is noticing that?\"",
        "seconds": 900,
        "deeper": "What was left when every answer fell away?"
      },
      {
        "theme": "deep practice",
        "text": "Yoga nidra: lie down and move your awareness slowly through every part of your body, staying awake at the edge of sleep.",
        "seconds": 1200,
        "deeper": "Where were you at the deepest point?"
      },
      {
        "theme": "deep practice",
        "text": "Spend one hour with no phone and no media, outside if you can, simply present.",
        "seconds": 3600,
        "deeper": "What came to you in the empty space?"
      },
      {
        "theme": "deep practice",
        "text": "Chant AUM, or sit in silence, for 108 breaths, ending in total stillness.",
        "seconds": 900,
        "deeper": "What was the stillness like?"
      },
      {
        "theme": "inquiry",
        "text": "For ten minutes, imagine it's the last evening of a life fully lived. What matters now?",
        "deeper": "What will you change tomorrow because of it?"
      },
      {
        "theme": "inquiry",
        "text": "Write down every person, being and force that made today possible, going back as far as you can.",
        "deeper": "How did it feel to see how held you are?"
      },
      {
        "theme": "real-life challenge",
        "text": "Go a whole day without complaining. Each time you catch one, replace it with a blessing.",
        "deeper": "What did your mind reach for instead?"
      }
    ],
    "practice": [
      {
        "text": "Sit in complete silence. Breathe slowly and just be.",
        "seconds": 120
      },
      "Say a quiet thank-you out loud: to your body, to your day, to yourself.",
      {
        "text": "Gently massage your scalp with your fingertips, like a slow shampoo.",
        "seconds": 60
      },
      {
        "text": "Imagine soft violet light pouring in through the top of your head and filling you.",
        "seconds": 90
      },
      "Write down one intention you'd like to carry into tomorrow.",
      {
        "text": "Lie down, close your eyes, and let your whole body feel heavy, warm and whole.",
        "seconds": 120
      }
    ]
  }
];
