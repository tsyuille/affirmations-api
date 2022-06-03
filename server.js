const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const affirm = {
    1: {
        "id": 1,
        "text": "Sometimes you win. Sometimes you learn."
    },
    2: {
        "id": 2,
        "text": "There’s nothing wrong with quitting. But don’t just quit when it gets difficult. Quit when you no longer want it."
    }, 
    3: {
        "id": 3,
        "text": "No one in the world can do what you do in the way that you do it."
    },
    4: {
        "id": 4,
        "text": "You are growing and making progress."
    },
    5: {
        "id": 5,
        "text": "Your body is the perfect body for you. You’re beautiful just the way you are."
    },
    6: {
        "id": 6,
        "text": "I choose to radiate joy, love, and gratitude."
    },
    7: {
        "id": 7,
        "text": "I choose to accept myself, and I release the need to impress others."
    },
    8: {
        "id": 8, 
        "text": "I have the ability to create my own reality."
    },
    9: {
        "id": 9, 
        "text": "I am enough just as I am."
    },
    10: {
        "id": 10,
        "text": "I make space for more success to come into my life."
    },
    11: {
        "id": 11,
        "text": "I honor my need to relax and recharge."
    },
    12: {
        "id": 12,
        "text": "I trust my intuition. I know what’s best for me."
    },
    13: {
        "id": 13,
        "text": "I release everything (and everybody) that no longer serves me and my greatest good."
    },
    14: {
        "id": 14,
        "text": "I surround myself with love."
    },
    15: {
        "id": 15,
        "text": "I am right where I need to be."
    },
    16: {
        "id": 16,
        "text": "Today I choose to embrace all opportunities and challenges that arise."
    },
    17: {
        "id": 17,
        "text": "I choose to let go of the old and usher in the new."
    },
    18: {
        "id": 18,
        "text": "I am grateful for how far I have come."
    },
    19: {
        "id": 19,
        "text": "I have a purpose. I am here for a reason."
    },
    20: {
        "id": 20, 
        "text": "I give myself permission to be my authentic self."
    },
    21: {
        "id": 21,
        "text": "I give myself permission to try, and I take action in spite of fear."
    },
    22: {
        "id": 22,
        "text": "I let go of things that I can’t control. I put my energy into things that I can control."
    },
    23: {
        "id": 23,
        "text": "I deserve to have the things that I want & need."
    },
    24: {
        "id": 24,
        "text": "I am worthy."
    },
    25: {
        "id": 25,
        "text": "My life matters."
    },
    26: {
        "id": 26,
        "text": "I deserve mutual love, respect, and care."
    },
    27: {
        "id": 27, 
        "text": "I forgive myself and others. Freeing up that space in my mind for more peace & joy."
    },
    28: {
        "id": 28,
        "text": "I acknowledge all that makes me human. I give myself permission to feel."
    },
    29: {
        "id": 29,
        "text": "I love myself. Unconditionally."
    },
    30: {
        "id": 30,
        "text": "I am proud of myself and my greatness."
    },
    31: {
        "id": 31,
        "text": "I have the power to create change."
    },
    32: {
        "id": 32,
        "text": "I am in charge of how I feel, and I am responsible for my own happiness."
    },
    33: {
        "id": 33,
        "text": "I attract blessings and abundance."
    },
    34: {
        "id": 34,
        "text": "I am comfortable in my own skin."
    },
    35: {
        "id": 35,
        "text": "I can achieve whatever I set my mind to."
    },
    36: {
        "id": 36,
        "text": "I welcome wealth & prosperity into my life."
    },
    37: {
        "id": 37,
        "text": "I believe in myself."
    },
    38: {
        "id": 38,
        "text": "It is ok for me to have everything that I dream of."
    },
    39: {
        "id": 39,
        "text": "I have the qualities needed to be successful."
    },
    40: {
        "id": 40, 
        "text": "I am courageous and I stand up for myself."
    },
    41: {
        "id": 41,
        "text": "My dreams are manifesting into reality."
    },
    42: {
        "id": 42, 
        "text": "I act with courage and confidence."
    },
    43: {
        "id": 43, 
        "text": "My strength is greater than any struggle."
    },
    44: {
        "id": 44,
        "text": "My thoughts and feelings are valid."
    },
    45: {
        "id": 45, 
        "text": "It is ok to put myself first. Self-care is important."
    },
    46: {
        "id": 46, 
        "text": "I believe in myself. I trust myself."
    },
    47: {
        "id": 47, 
        "text": "I release all of my limiting beliefs about money."
    },
    48: {
        "id": 48, 
        "text": "I am powerful."
    },
    49: {
        "id": 49, 
        "text": "I surround myself with people who love and accept me."
    },
    50: {
        "id": 50,
        "text": "I let go of worries that drain my energy."
    },
    51: {
        "id": 51, 
        "text": "I am safe & sound."
    },
    52: {
        "id": 52, 
        "text": "I was made with divine intention."
    },
    53: {
        "id": 53, 
        "text": "I can, and I will."
    },
    54: {
        "id": 54, 
        "text": "I am whole and complete just the way I am."
    },
    55: {
        "id": 55, 
        "text": "My presence is powerful."
    },
    56: {
        "id": 56, 
        "text": "I make time to take care of me."
    },
    57: {
        "id": 57, 
        "text": "I am allowed to be myself."
    },
    58: {
        "id": 58, 
        "text": "I belong in any space I walk into."
    },
    59: {
        "id": 59, 
        "text": "My mind is full of great, creative ideas."
    },
    60: {
        "id": 60, 
        "text": "I give myself space to grow."
    },
    61: {
        "id": 61, 
        "text": "I have the power to create change."
    },
    62: {
        "id": 62, 
        "text": "I love the skin I’m in."
    },
    63: {
        "id": 63, 
        "text": "I put out the energy that I want to attract."
    },
    64: {
        "id": 64, 
        "text": "I deserve peace."
    },
    65: {
        "id": 65, 
        "text": "I allow others to love me."
    },
    66: {
        "id": 66, 
        "text": "I uplift and support myself and others."
    }, 
    67: {
        "id": 67,
        "text": "I embrace my skin, my culture, and the beauty within them."
    },
    68: {
        "id": 68,
        "text": "I will not give up on myself and the woman I am becoming."
    },
    69: {
        "id": 69, 
        "text": "I take action in spite of worry & fear."
    },
    70: {
        "id": 70,
        "text": "Breathe. Everything will be alright."
    },
    71: {
        "id": 71,
        "text": "Today I’m choosing to make myself a priority."
    },
    72: {
        "id": 72,
        "text": "Focus on what matters. Let go of what doesn’t."
    },
    73: {
        "id": 73, 
        "text": "I deserve safety and peace of mind."
    },
    74: {
        "id": 74,
        "text": "I listen to my body and give it what it needs."
    },
    75: {
        "id": 75, 
        "text": "What I do matters."
    },
    76: {
        "id": 76,
        "text": "What I want matters."
    },
    77: {
        "id": 77,
        "text": "I am proud of myself."
    },
    78: {
        "id": 78,
        "text": "I respect myself and demand respect from others."
    },
    79: {
        "id": 79,
        "text": "I treat myself with kindness."
    },
    80: {
        "id": 80,
        "text": "I celebrate my successes no matter how big or small."
    },
    81: {
        "id": 81,
        "text": "I am grateful."
    },
    82: {
        "id": 82,
        "text": "I take joy in healing my mind, body, and spirit."
    },
    83: {
        "id": 83, 
        "text": "I am manifesting my full potential."
    },
    84: {
        "id": 84, 
        "text": "I am confident in my sensuality."
    },
    85: {
        "id": 85, 
        "text": "I trust my spirit to guide me."
    },
    86: {
        "id": 86, 
        "text": "I attract joy."
    },
    87: {
        "id": 87,
        "text": "I am patient with myself."
    },
    88: {
        "id": 88,
        "text": "I choose to maintain a positive outlook."
    },
    89: {
        "id": 89,
        "text": "I am exactly where I am supposed to be at this moment."
    },
    90: {
        "id": 90,
        "text": "I ask for what I want because I deserve it."
    },
    91: {
        "id": 91,
        "text": "I don’t allow anyone or anything to hold me back from what is meant for me."
    },
    92: {
        "id": 92, 
        "text": "I choose to learn from my past but not dwell on it."
    },
    93: {
        "id": 93,
        "text": "I use my time wisely and make the best of each moment."
    },
    94: {
        "id": 94, 
        "text": "I have the ability to create my ideal life."
    },
    95: {
        "id": 95, 
        "text": "I love and embrace all of my imperfections."
    },
    96: {
        "id": 96,
        "text": "I don’t feel the need to impress others."
    },
    97: {
        "id": 97, 
        "text": "My life is full of infinite possibilities."
    },
    98: {
        "id": 98,
        "text": "I refuse to play small. I am not afraid to take up space."
    },
    99: {
        "id": 99,
        "text": "I accept compliments."
    },
    100: {
        "id": 100,
        "text": "I take breaks when needed, and I don’t feel guilty about doing so."
    },
    101: {
        "id": 101,
        "text": "My voice matters. My thoughts, opinions, and ideas matter."
    },
    102: {
        "id": 102, 
        "text": "I am grateful for every opportunity to grow."
    },
    103: {
        "id": 103,
        "text": "I love all of my features."
    },
    104: {
        "id": 104,
        "text": "I am attractive and sexy as is."
    },
    105: {
        "id": 105,
        "text": "I treat my body with care, love, and respect."
    },
    106: {
        "id": 106, 
        "text": "I choose to keep my head held high and wear my crown proudly."
    },
    107: {
        "id": 107, 
        "text": "I am not afraid to speak up for myself."
    },
    108: {
        "id": 108, 
        "text": "Don’t give up. Try again."
    },
    109: {
        "id": 109,
        "text": "Just start. It doesn’t have to be perfect. Do it anyway."
    },
    110: {
        "id": 110,
        "text": "I allow myself to make mistakes."
    },
    111: {
        "id": 111, 
        "text": "I love myself."
    },
    112: {
        "id": 112, 
        "text": "I believe in my creativity."
    },
    113: {
        "id": 113, 
        "text": "I allow myself to slow down & enjoy my accomplishments."
    },
    114: {
        "id": 114,
        "text": "I show myself compassion."
    },
    115: {
        "id": 115, 
        "text": "I am living on my own terms."
    },
    116: {
        "id": 116, 
        "text": "I am open to seeing things from a different perspective."
    },
    117: {
        "id": 117,
        "text": "I allow myself to be vulnerable & feel all of my feelings."
    },
    118: {
        "id": 118,
        "text": "I am safe to be myself. Authentically."
    },
    119: {
        "id": 119,
        "text": "I am open to receiving the love that I deserve."
    },
    120: {
        "id": 120, 
        "text": "I trust my intuition."
    }
}

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:id', (req, res) => {
    const affirmId = Number(req.params.id)
    if(affirm[affirmId]) {
        res.json(affirm[affirmId])
    } else {
        res.json(affirm[1])
    }
    
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server is now running on port ${PORT}`)
})