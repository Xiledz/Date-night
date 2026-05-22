// Closer Tonight — card deck
// Edit any card by changing its text. The app picks it up on next load.
//
// Levels:
//   spark   — light, observational, specifics in the present
//   connect — vulnerable, ownership, "I" statements with content
//   closer  — flirty, sensual, intimate (not explicit)
//
// Types:
//   question — read aloud, answer
//   reveal   — both write privately, show on three
//   activity — do something together
//   wild     — modifies play
//   overlay  — drops onto any card to modify it
//
// Hard Conversation is a separate, deliberate ritual offered in the app menu.
// It is not a card you draw.

const DECK = {
  spark: [
    { type: "question", text: "Name one specific thing about me you noticed this week that you didn't mention." },
    { type: "question", text: "Tell me about a moment today when I crossed your mind." },
    { type: "question", text: "Pick one thing in this room and tell me what it makes you feel about us." },
    { type: "question", text: "Describe my voice in three exact words." },
    { type: "question", text: "What's something about me — right now, this moment — that you find lovely?" },
    { type: "question", text: "Tell me about the last time I made you laugh. With details." },
    { type: "question", text: "Name one thing I do that's small but uniquely mine." },
    { type: "question", text: "What was on your mind when you woke up this morning?" },
    { type: "question", text: "Tell me about a sound I make that's stayed with you over the years." },
    { type: "question", text: "What's something I'm wearing right now you'd like to compliment?" },
    { type: "question", text: "Describe the look on my face the last time I was concentrating." },
    { type: "question", text: "Tell me about a moment this week I made you proud — be specific." },
    { type: "question", text: "What's a habit of mine you used to find irritating that you've come to love?" },
    { type: "question", text: "What's a piece of me that's aged in a way that's gotten more attractive?" },
    { type: "question", text: "Tell me about the last time I cried. What was it about and what did I look like?" },
    { type: "question", text: "Name one thing I said this week that's been sitting with you." },
    { type: "question", text: "What did you think when you first saw me today?" },
    { type: "reveal", text: "Both write: one moment yesterday when your partner was completely themselves. Reveal on three." },
    { type: "question", text: "Describe my hands the way a sculptor would." },
    { type: "question", text: "What's one of my facial expressions you've memorized?" },
    { type: "question", text: "Tell me about the way I move when I think nobody's watching." },
    { type: "question", text: "Name a song from anywhere in our relationship that still lands when you hear it." },
    { type: "question", text: "What did you notice about me the last time we disagreed?" },
    { type: "question", text: "Describe me as I am right now, this moment — not a summary of who I've been." },
    { type: "question", text: "What's something I do for myself that you respect even though you don't share it?" },
    { type: "question", text: "Tell me about a moment recently I surprised you." },
    { type: "question", text: "Name something I said years ago that you still think about." },
    { type: "question", text: "What about my body language is different now than when we met?" },
    { type: "question", text: "Describe one of my flaws gently." },
    { type: "question", text: "Tell me about my eyes today — what color, what mood, what they're holding." },
    { type: "question", text: "What's something I've been working on that you've noticed and not said anything about?" },
    { type: "question", text: "Name a piece of my personality I bring out in you that you wouldn't have on your own." },
    { type: "question", text: "Tell me about a moment this week when I touched you and it landed." },
    { type: "question", text: "What's something you find beautiful about me that I can't see?" },
    { type: "question", text: "Describe my laugh — different from anyone else's." },
    { type: "question", text: "What part of my morning routine do you find most endearing?" },
    { type: "question", text: "Tell me about a moment recently I was kind to a stranger." },
    { type: "question", text: "Name one way I've shown up for you this month, with specifics." },
    { type: "question", text: "What's something I do under stress that I might not realize I do?" },
    { type: "question", text: "Describe a recent silence between us. What kind of silence was it?" },
    { type: "question", text: "What about my faith — what I quietly believe — impresses you?" },
    { type: "question", text: "Describe how I look when I'm reading." },
    { type: "question", text: "Tell me about a small thing I do that means more than I know." },
    { type: "question", text: "What's one thing about me you're grateful for today — not in general — today." },
    { type: "question", text: "Tell me about a place I've been lately where I seemed most at ease." },
    { type: "question", text: "What's something I made that you've watched me put care into?" },
    { type: "question", text: "Pick one thing about me today and tell me you noticed it." },
    { type: "question", text: "Tell me about the part of my day you'd most like to see if you could be invisible for an hour." },
    { type: "question", text: "Describe how I take my coffee — and what that detail tells you about me." },
    { type: "question", text: "Name the smallest thing I did this week that took something I didn't have to give." }
  ],

  connect: [
    { type: "question", text: "Name something you've been feeling this week that you haven't told me." },
    { type: "question", text: "Tell me about a moment recently you felt seen — by anyone, not just me." },
    { type: "question", text: "What's a small thing you did this week you're not proud of?" },
    { type: "question", text: "Name a fear you've been sitting with lately about yourself — not us, you." },
    { type: "question", text: "Tell me about a moment this week you wanted to reach for me and didn't. What stopped you?" },
    { type: "question", text: "What's a way you've been hard on yourself recently?" },
    { type: "question", text: "Name something you did in the past month that you're proud of and didn't mention." },
    { type: "question", text: "Tell me about a longing in you that's been quiet but persistent." },
    { type: "question", text: "What's a part of your life right now that doesn't fit the shape of who you're becoming?" },
    { type: "question", text: "Name a moment this week your body told you something. What was it saying?" },
    { type: "question", text: "Tell me about a hope you've been guarding because it feels too fragile to say." },
    { type: "question", text: "What's a way you've been showing up smaller than you are?" },
    { type: "question", text: "Tell me about a moment this week you were lonely in a specific way." },
    { type: "question", text: "What's something you've been pretending you're okay with?" },
    { type: "question", text: "Name a question you've been asking God or yourself lately — and what answer, if any, is forming." },
    { type: "question", text: "Tell me about the last time you felt brave, in any size of moment." },
    { type: "question", text: "Name a tension you're carrying right now between two things you want." },
    { type: "question", text: "Tell me about a recent moment when you wanted to be different than you were." },
    { type: "reveal", text: "Both write: a moment this week you wanted to be different than you were. Reveal and read aloud." },
    { type: "question", text: "What's a way you've been giving more than you want to admit?" },
    { type: "question", text: "Name a memory that came back to you this week unbidden." },
    { type: "question", text: "Tell me about a thought you've had about us this week that you didn't say out loud." },
    { type: "question", text: "What's a piece of yourself you've been hiding from me lately?" },
    { type: "question", text: "Name something you did to protect yourself recently. What were you protecting from?" },
    { type: "question", text: "What's a story you've been telling yourself about our marriage that you're not sure is true anymore?" },
    { type: "question", text: "Name a moment this month you felt loved — by me, by someone, by anything." },
    { type: "question", text: "Tell me about a way you've been showing up that you'd like me to notice." },
    { type: "question", text: "What's a need you've been ignoring because naming it feels too big?" },
    { type: "question", text: "Name a moment this week you knew you were avoiding something." },
    { type: "question", text: "Tell me about a piece of grief you're carrying right now — even a small one." },
    { type: "question", text: "What's a recent moment you wanted to tell me something and chose not to? What was it?" },
    { type: "question", text: "Name something you've come to believe about yourself in the last five years." },
    { type: "question", text: "Tell me about a way you've changed that you haven't fully announced to yourself yet." },
    { type: "question", text: "What's a place inside you you don't want me to see — and what's it about?" },
    { type: "question", text: "Name a moment this year you felt completely yourself." },
    { type: "question", text: "Tell me about a regret that surfaced this week." },
    { type: "question", text: "What's something you'd like to apologize for that you haven't found the words for?" },
    { type: "question", text: "Name a way you've held yourself back from me without realizing it until now." },
    { type: "question", text: "Tell me about a hope you have for yourself this year, separate from us." },
    { type: "question", text: "What's a moment recently you wanted comfort and didn't ask for it?" },
    { type: "question", text: "Name a way you contributed to a difficulty between us in the past month — even one percent of it." },
    { type: "question", text: "Tell me about a way you've been kinder to yourself than you used to be." },
    { type: "question", text: "What's something I do that you've been wanting to say something about but haven't?" },
    { type: "question", text: "Name a recent moment you were tender and no one saw." },
    { type: "question", text: "Tell me about a way faith is shaping you right now differently than it did five years ago." },
    { type: "question", text: "Name a way you'd like to be braver in our marriage in the next month." },
    { type: "question", text: "Pick one thing I said earlier tonight that's still sitting with you. Ask a question about it that goes deeper." },
    { type: "question", text: "Tell me about a way I've grown that you'd like to celebrate with me — slowly, not in passing." },
    { type: "question", text: "What's a question you'd like me to ask you tonight that I haven't?" },
    { type: "question", text: "Tell me one thing about yourself right now that feels new." }
  ],

  closer: [
    { type: "question", text: "Tell me about the moment you first thought about kissing me." },
    { type: "question", text: "What's a look I give that you wish you got more often?" },
    { type: "question", text: "Where on your body do you most want to be touched right now?" },
    { type: "question", text: "What's the most romantic thing I've whispered to you?" },
    { type: "question", text: "Tell me about the moment you realized you wanted me — really wanted me." },
    { type: "question", text: "What's a small physical thing I do that gets your attention every time?" },
    { type: "activity", text: "Slow dance in the kitchen — or wherever you are. One song. No phones." },
    { type: "question", text: "Describe what you find most beautiful about my body in your own words." },
    { type: "reveal", text: "Trade phones. Write a flirty text to each other. Read aloud on three." },
    { type: "question", text: "What's something I wear that you secretly love?" },
    { type: "activity", text: "Close your eyes. Place a single kiss anywhere on me. Tell me why there." },
    { type: "question", text: "What's a memory of us that still makes your stomach flip?" },
    { type: "question", text: "What's a fantasy of yours — a moment, a setting, a feeling — you've never told me?" },
    { type: "activity", text: "Look at each other without speaking for thirty seconds. Then describe what you saw." },
    { type: "question", text: "What's the best kiss we've ever had? Set the scene." },
    { type: "question", text: "What turns you on that has nothing to do with sex?" },
    { type: "question", text: "Tell me about a moment lately when you wanted me and didn't say it." },
    { type: "question", text: "What word in another language describes how you feel about me?" },
    { type: "question", text: "What's something I do that you find quietly seductive?" },
    { type: "activity", text: "Pick up one of my hands. Tell me what you love about it, one detail at a time." },
    { type: "question", text: "What's the best compliment you've ever received from me?" },
    { type: "question", text: "What's a compliment you've been waiting to hear?" },
    { type: "question", text: "If we had three uninterrupted hours tonight, what would you want?" },
    { type: "question", text: "What song feels like us at our most romantic?" },
    { type: "question", text: "Describe how you feel when I walk into a room you weren't expecting me in." },
    { type: "question", text: "Where did we have our most memorable kiss?" },
    { type: "question", text: "What's something playful you'd like us to try together?" },
    { type: "question", text: "What sense — sight, smell, touch, taste, sound — do I light up for you?" },
    { type: "question", text: "What early memory of us do you replay when you want to feel that spark again?" },
    { type: "question", text: "What's something I do in private you wish I'd do in public — or vice versa?" },
    { type: "activity", text: "Hold each other for two full minutes without speaking. Then keep playing." },
    { type: "activity", text: "Put your forehead against mine. Stay there until something settles. Then answer the next card from there." },
    { type: "activity", text: "Tell me three things about my mouth. Slowly." },
    { type: "question", text: "What's the most attractive thing about my mind?" },
    { type: "question", text: "What's a memory of us undressed — emotionally or physically — that you treasure?" },
    { type: "activity", text: "Lean in. Tell me a secret you've never told me. Whisper it." },
    { type: "question", text: "What's a moment when you felt I was completely yours?" },
    { type: "question", text: "Describe what you want our next anniversary night to feel like." },
    { type: "question", text: "What's a way I could make you feel desired that you haven't asked for?" },
    { type: "question", text: "What's the sexiest thing you've ever seen me do — and did I know?" },
    { type: "activity", text: "Pull me close. Without speaking, breathe with me until we match. Then answer the next card." },
    { type: "question", text: "What flavor tastes like us at our most romantic?" },
    { type: "activity", text: "Look me in the eye and tell me the most honest, flirty thing you can think of." },
    { type: "question", text: "How would you like to be pursued tonight?" },
    { type: "question", text: "What's a memory where you felt most beautiful with me — most desired?" },
    { type: "activity", text: "One minute on the clock. Kiss until it goes off." },
    { type: "question", text: "What could I do in the next ten minutes that would melt you?" },
    { type: "question", text: "Describe a perfect slow morning together, sense by sense." },
    { type: "activity", text: "Trace one feature of my face slowly with one finger. Tell me what you found." },
    { type: "activity", text: "Whisper what you most want tonight. Then set the card down and don't say anything else." }
  ],

  wild: [
    { type: "wild", text: "BRING IT BACK — Choose something your partner said earlier tonight. Ask one specific question about it before continuing." },
    { type: "wild", text: "DON'T ROUTE — If your next instinct is to flirt, comfort, or change the subject, just stay with what was said." },
    { type: "wild", text: "TOMORROW — Write down what your partner just said. Bring it up at breakfast tomorrow without being asked." },
    { type: "wild", text: "CURIOSITY ONLY — Your only response to the next thing your partner says is a question that goes deeper." },
    { type: "wild", text: "WHAT YOU DID — Whoever just answered: now name something YOU did related to it. Not something that happened. Something you did." },
    { type: "wild", text: "SPECIFIC — Whoever draws next must answer with a specific moment. Time, place, what you wore, what you said." },
    { type: "wild", text: "SLOW DOWN — Spend at least five minutes on the next card. No rushing past it." },
    { type: "wild", text: "RETURN — Drop back one level for the next card. Sometimes coming up for air is the work." },
    { type: "wild", text: "CHOOSE FOR THEM — You pick the next card for your partner from anywhere in the deck. Make it count." },
    { type: "wild", text: "WRITE & REVEAL — Both write your answers to the next card privately. Reveal on three." },
    { type: "wild", text: "NO WORDS — Answer the next card without speaking. Use only touch, gesture, or expression." },
    { type: "wild", text: "SAY IT AGAIN — Whoever just spoke: say the same thing differently. Slower. With less protection." },
    { type: "wild", text: "ONE MORE THING — After answering the next card, name one more true thing the question didn't ask about." },
    { type: "wild", text: "THE OLD ONE — Pick a moment from more than ten years ago that still has weight. Tell it the way you remember it now." },
    { type: "wild", text: "PRAY IT — Turn what you just said into a one-sentence prayer for us." }
  ],

  overlay: [
    { type: "overlay", text: "WHY — Why does this matter? Stay with the why." },
    { type: "overlay", text: "WHEN — Tie your answer to a specific moment. Time, place, what was happening." },
    { type: "overlay", text: "WHAT DID YOU DO — Whatever you just said, now name your part in it." },
    { type: "overlay", text: "ASK ME — After your answer, ask me a question about my version of the same thing." },
    { type: "overlay", text: "ONE PERCENT — Even if it was mostly true of me, name your one percent in it." },
    { type: "overlay", text: "NO PROTECTION — Say the same thing again, with less protection." }
  ],

  // Eight-step protocol for revisiting an old wound together. Deliberate, not drawn.
  // Available in the app's menu as an alternative to the regular deck.
  hardConversation: [
    {
      step: 1,
      title: "Choose the moment",
      body: "Sit down at a calm time — not after a fight, not after sex, not when one of you is leaving in twenty minutes. Both of you choose to be here now."
    },
    {
      step: 2,
      title: "Name it specifically",
      body: "Whoever brings it up: name what you want to talk about, specifically. Time, place, what happened, what you remember. No abstractions tonight."
    },
    {
      step: 3,
      title: "Receive",
      body: "Receiver: listen all the way through. No version of your own, no explanation, no defense. Receive. The story your partner is telling is theirs first."
    },
    {
      step: 4,
      title: "Ask one question",
      body: "Receiver: ask one specific question about your partner's experience. Not a summary, not a fix — a real question. Something you don't know the answer to. Stay curious about what it was like from inside their version of this."
    },
    {
      step: 5,
      title: "Answer, slow",
      body: "Bringer: answer the question. Take your time. No need to wrap it up neatly."
    },
    {
      step: 6,
      title: "Say back what landed",
      body: "Receiver: tell your partner what landed for you. Not a summary. Not your interpretation. The specific thing that hit. \"What landed for me was…\""
    },
    {
      step: 7,
      title: "Say what would help",
      body: "Bringer: name one specific thing that would help this thing have landed. Not in general — specifically. Then ask if your partner can offer it."
    },
    {
      step: 8,
      title: "One thing each",
      body: "End with one thing each of you wants to remember from this conversation. Say it out loud. Then stop. Don't try to fix the rest tonight."
    }
  ]
};
