const emojiDatabase = [
    // Happy (24 emojis)
    { mood: 'happy', char: '😊' }, { mood: 'happy', char: '😄' }, { mood: 'happy', char: '😁' },
    { mood: 'happy', char: '🙂' }, { mood: 'happy', char: '😀' }, { mood: 'happy', char: '👍' },
    { mood: 'happy', char: '🎉' }, { mood: 'happy', char: '⭐' }, { mood: 'happy', char: '✨' },
    { mood: 'happy', char: '🌞' }, { mood: 'happy', char: '🎈' }, { mood: 'happy', char: '🎂' },
    { mood: 'happy', char: '😆' }, { mood: 'happy', char: '🙌' }, { mood: 'happy', char: '🥳' },
    { mood: 'happy', char: '🎁' }, { mood: 'happy', char: '🎊' }, { mood: 'happy', char: '💃' },
    { mood: 'happy', char: '🕺' }, { mood: 'happy', char: '🌟' }, { mood: 'happy', char: '🍭' },
    { mood: 'happy', char: '🌈' }, { mood: 'happy', char: '🍬' }, { mood: 'happy', char: '🐾' },
    // Sad (24 emojis)
    { mood: 'sad', char: '😢' }, { mood: 'sad', char: '😔' }, { mood: 'sad', char: '😞' },
    { mood: 'sad', char: '😥' }, { mood: 'sad', char: '😪' }, { mood: 'sad', char: '💔' },
    { mood: 'sad', char: '☔' }, { mood: 'sad', char: '🌧️' }, { mood: 'sad', char: '🙍' },
    { mood: 'sad', char: '💧' }, { mood: 'sad', char: '😿' }, { mood: 'sad', char: '🌫️' },
    { mood: 'sad', char: '😓' }, { mood: 'sad', char: '😩' }, { mood: 'sad', char: '😭' },
    { mood: 'sad', char: '🥀' }, { mood: 'sad', char: '🕊️' }, { mood: 'sad', char: '🌘' },
    { mood: 'sad', char: '🍂' }, { mood: 'sad', char: '🍃' }, { mood: 'sad', char: '🌬️' },
    { mood: 'sad', char: '🥺' }, { mood: 'sad', char: '😾' }, { mood: 'sad', char: '🖤' },
    // Excited (24 emojis)
    { mood: 'excited', char: '🤩' }, { mood: 'excited', char: '🥳' }, { mood: 'excited', char: '💯' },
    { mood: 'excited', char: '🎊' }, { mood: 'excited', char: '🚀' }, { mood: 'excited', char: '⚡' },
    { mood: 'excited', char: '✌️' }, { mood: 'excited', char: '🔥' }, { mood: 'excited', char: '😲' },
    { mood: 'excited', char: '🎯' }, { mood: 'excited', char: '🎆' }, { mood: 'excited', char: '🏆' },
    { mood: 'excited', char: '🌠' }, { mood: 'excited', char: '🎇' }, { mood: 'excited', char: '💥' },
    { mood: 'excited', char: '🎤' }, { mood: 'excited', char: '🎸' }, { mood: 'excited', char: '🎻' },
    { mood: 'excited', char: '🎺' }, { mood: 'excited', char: '🎼' }, { mood: 'excited', char: '🎹' },
    { mood: 'excited', char: '🎵' }, { mood: 'excited', char: '🎶' }, { mood: 'excited', char: '🌟' },
    // Angry (24 emojis)
    { mood: 'angry', char: '😡' }, { mood: 'angry', char: '😠' }, { mood: 'angry', char: '🤬' },
    { mood: 'angry', char: '👿' }, { mood: 'angry', char: '💢' }, { mood: 'angry', char: '💥' },
    { mood: 'angry', char: '🔥' }, { mood: 'angry', char: '⚡' }, { mood: 'angry', char: '👊' },
    { mood: 'angry', char: '💪' }, { mood: 'angry', char: '😤' }, { mood: 'angry', char: '💣' },
    { mood: 'angry', char: '🗯️' }, { mood: 'angry', char: '🌩️' }, { mood: 'angry', char: '🌋' },
    { mood: 'angry', char: '😾' }, { mood: 'angry', char: '🐺' }, { mood: 'angry', char: '🦁' },
    { mood: 'angry', char: '🐯' }, { mood: 'angry', char: '🪓' }, { mood: 'angry', char: '🛡️' },
    { mood: 'angry', char: '⚔️' }, { mood: 'angry', char: '🔪' }, { mood: 'angry', char: '👺' },
    // Relaxed (24 emojis)
    { mood: 'relaxed', char: '😌' }, { mood: 'relaxed', char: '😎' }, { mood: 'relaxed', char: '🧘' },
    { mood: 'relaxed', char: '🌴' }, { mood: 'relaxed', char: '🌊' }, { mood: 'relaxed', char: '🏖️' },
    { mood: 'relaxed', char: '☁️' }, { mood: 'relaxed', char: '🌅' }, { mood: 'relaxed', char: '🍹' },
    { mood: 'relaxed', char: '💭' }, { mood: 'relaxed', char: '🕉️' }, { mood: 'relaxed', char: '🌺' },
    { mood: 'relaxed', char: '🛁' }, { mood: 'relaxed', char: '🧘‍♀️' }, { mood: 'relaxed', char: '🧘‍♂️' },
    { mood: 'relaxed', char: '🌙' }, { mood: 'relaxed', char: '🌌' }, { mood: 'relaxed', char: '🛌' },
    { mood: 'relaxed', char: '🍵' }, { mood: 'relaxed', char: '📖' }, { mood: 'relaxed', char: '🎶' },
    { mood: 'relaxed', char: '🌿' }, { mood: 'relaxed', char: '🕊️' }, { mood: 'relaxed', char: '🌸' },
    // Love (24 emojis)
    { mood: 'love', char: '❤️' }, { mood: 'love', char: '😍' }, { mood: 'love', char: '🥰' },
    { mood: 'love', char: '💕' }, { mood: 'love', char: '💖' }, { mood: 'love', char: '💗' },
    { mood: 'love', char: '😘' }, { mood: 'love', char: '💏' }, { mood: 'love', char: '🌹' },
    { mood: 'love', char: '💝' }, { mood: 'love', char: '💌' }, { mood: 'love', char: '🌸' },
    { mood: 'love', char: '💞' }, { mood: 'love', char: '💓' }, { mood: 'love', char: '💘' },
    { mood: 'love', char: '👩‍❤️‍👨' }, { mood: 'love', char: '👨‍❤️‍👨' }, { mood: 'love', char: '👩‍❤️‍👩' },
    { mood: 'love', char: '💒' }, { mood: 'love', char: '💍' }, { mood: 'love', char: '💐' },
    { mood: 'love', char: '🌷' }, { mood: 'love', char: '💋' }, { mood: 'love', char: '🌼' },
    // Confused (18 emojis)
    { mood: 'confused', char: '😕' }, { mood: 'confused', char: '🤔' }, { mood: 'confused', char: '😶' },
    { mood: 'confused', char: '🤷' }, { mood: 'confused', char: '🤷‍♀️' }, { mood: 'confused', char: '🤷‍♂️' },
    { mood: 'confused', char: '🧐' }, { mood: 'confused', char: '😟' }, { mood: 'confused', char: '🙃' },
    { mood: 'confused', char: '❓' }, { mood: 'confused', char: '❔' }, { mood: 'confused', char: '🌀' },
    { mood: 'confused', char: '🤨' }, { mood: 'confused', char: '😵' }, { mood: 'confused', char: '🫤' },
    { mood: 'confused', char: '🤪' }, { mood: 'confused', char: '💭' }, { mood: 'confused', char: '🧩' },
    // Sleepy (18 emojis)
    { mood: 'sleepy', char: '😴' }, { mood: 'sleepy', char: '💤' }, { mood: 'sleepy', char: '😪' },
    { mood: 'sleepy', char: '🥱' }, { mood: 'sleepy', char: '🛌' }, { mood: 'sleepy', char: '🌜' },
    { mood: 'sleepy', char: '🌛' }, { mood: 'sleepy', char: '🛏️' }, { mood: 'sleepy', char: '🐑' },
    { mood: 'sleepy', char: '🌃' }, { mood: 'sleepy', char: '🕰️' }, { mood: 'sleepy', char: '🛋️' },
    { mood: 'sleepy', char: '😴' }, { mood: 'sleepy', char: '🧸' }, { mood: 'sleepy', char: '🌠' },
    { mood: 'sleepy', char: '🌌' }, { mood: 'sleepy', char: '🕯️' }, { mood: 'sleepy', char: '🌙' },
    // Anxious (18 emojis)
    { mood: 'anxious', char: '😰' }, { mood: 'anxious', char: '😱' }, { mood: 'anxious', char: '🤯' },
    { mood: 'anxious', char: '😓' }, { mood: 'anxious', char: '💦' }, { mood: 'anxious', char: '😖' },
    { mood: 'anxious', char: '😬' }, { mood: 'anxious', char: '🙈' }, { mood: 'anxious', char: '🙉' },
    { mood: 'anxious', char: '🙊' }, { mood: 'anxious', char: '⏳' }, { mood: 'anxious', char: '⌛' },
    { mood: 'anxious', char: '😨' }, { mood: 'anxious', char: '😧' }, { mood: 'anxious', char: '😳' },
    { mood: 'anxious', char: '💨' }, { mood: 'anxious', char: '🌪️' }, { mood: 'anxious', char: '🆘' },
    // Party (18 emojis)
    { mood: 'party', char: '🎉' }, { mood: 'party', char: '🥂' }, { mood: 'party', char: '🎵' },
    { mood: 'party', char: '🎶' }, { mood: 'party', char: '🎈' }, { mood: 'party', char: '🎁' },
    { mood: 'party', char: '🎂' }, { mood: 'party', char: '🍾' }, { mood: 'party', char: '🎊' },
    { mood: 'party', char: '💃' }, { mood: 'party', char: '🕺' }, { mood: 'party', char: '🎤' },
    { mood: 'party', char: '🎷' }, { mood: 'party', char: '🎸' }, { mood: 'party', char: '🎹' },
    { mood: 'party', char: '🎼' }, { mood: 'party', char: '🍸' }, { mood: 'party', char: '🎆' },
    // Adventure (18 emojis)
    { mood: 'adventure', char: '🌍' }, { mood: 'adventure', char: '🏞️' }, { mood: 'adventure', char: '🚴' },
    { mood: 'adventure', char: '🗺️' }, { mood: 'adventure', char: '🧳' }, { mood: 'adventure', char: '✈️' },
    { mood: 'adventure', char: '🚢' }, { mood: 'adventure', char: '🏕️' }, { mood: 'adventure', char: '🌄' },
    { mood: 'adventure', char: '⛰️' }, { mood: 'adventure', char: '🌋' }, { mood: 'adventure', char: '🏜️' },
    { mood: 'adventure', char: '🪂' }, { mood: 'adventure', char: '🚁' }, { mood: 'adventure', char: '🚤' },
    { mood: 'adventure', char: '🧭' }, { mood: 'adventure', char: '🔦' }, { mood: 'adventure', char: '🌏' },
    // Romantic (18 emojis)
    { mood: 'romantic', char: '💑' }, { mood: 'romantic', char: '🌃' }, { mood: 'romantic', char: '🍷' },
    { mood: 'romantic', char: '🌹' }, { mood: 'romantic', char: '💋' }, { mood: 'romantic', char: '🌜' },
    { mood: 'romantic', char: '🌠' }, { mood: 'romantic', char: '💖' }, { mood: 'romantic', char: '🎶' },
    { mood: 'romantic', char: '💃' }, { mood: 'romantic', char: '🕺' }, { mood: 'romantic', char: '🌌' },
    { mood: 'romantic', char: '🌷' }, { mood: 'romantic', char: '💘' }, { mood: 'romantic', char: '💌' },
    { mood: 'romantic', char: '🌸' }, { mood: 'romantic', char: '💕' }, { mood: 'romantic', char: '🍫' },
    // Creative (18 emojis)
    { mood: 'creative', char: '🎨' }, { mood: 'creative', char: '✍️' }, { mood: 'creative', char: '🎭' },
    { mood: 'creative', char: '📸' }, { mood: 'creative', char: '🎬' }, { mood: 'creative', char: '🎹' },
    { mood: 'creative', char: '🖌️' }, { mood: 'creative', char: '🎼' }, { mood: 'creative', char: '📝' },
    { mood: 'creative', char: '💡' }, { mood: 'creative', char: '🖼️' }, { mood: 'creative', char: '🎨' },
    { mood: 'creative', char: '✂️' }, { mood: 'creative', char: '🎨' }, { mood: 'creative', char: '🎥' },
    { mood: 'creative', char: '📷' }, { mood: 'creative', char: '🖋️' }, { mood: 'creative', char: '🎤' },
    // Calm (18 emojis)
    { mood: 'calm', char: '🕉️' }, { mood: 'calm', char: '🌿' }, { mood: 'calm', char: '🙏' },
    { mood: 'calm', char: '🌊' }, { mood: 'calm', char: '🌅' }, { mood: 'calm', char: '☁️' },
    { mood: 'calm', char: '🌾' }, { mood: 'calm', char: '🕊️' }, { mood: 'calm', char: '🌸' },
    { mood: 'calm', char: '🧘' }, { mood: 'calm', char: '🧘‍♀️' }, { mood: 'calm', char: '🧘‍♂️' },
    { mood: 'calm', char: '🌳' }, { mood: 'calm', char: '🌴' }, { mood: 'calm', char: '🌲' },
    { mood: 'calm', char: '🌼' }, { mood: 'calm', char: '🍃' }, { mood: 'calm', char: '🌺' }, // Add comma here
    // Energetic 
    { mood: 'energetic', char: '⚡' }, { mood: 'energetic', char: '🏃' }, { mood: 'energetic', char: '💥' },
    { mood: 'energetic', char: '🚀' }, { mood: 'energetic', char: '🔥' }, { mood: 'energetic', char: '🌩️' },
    { mood: 'energetic', char: '🎸' }, { mood: 'energetic', char: '🎉' }, { mood: 'energetic', char: '🎊' },
    { mood: 'energetic', char: '💃' }, { mood: 'energetic', char: '🕺' }, { mood: 'energetic', char: '⚽' },
    { mood: 'energetic', char: '🏀' }, { mood: 'energetic', char: '🏋️' }, { mood: 'energetic', char: '🚴' },
    { mood: 'energetic', char: '🎤' }, { mood: 'energetic', char: '🎧' }, { mood: 'energetic', char: '🌈' },
    { mood: 'energetic', char: '🏄' }, { mood: 'energetic', char: '🪂' }, { mood: 'energetic', char: '🎾' },
    { mood: 'energetic', char: '🏊' }, { mood: 'energetic', char: '🚗' }, { mood: 'energetic', char: '✈️' },
    { mood: 'energetic', char: '🎿' }, { mood: 'energetic', char: '🛹' }, { mood: 'energetic', char: '🎳' },
    { mood: 'energetic', char: '🎮' }, { mood: 'energetic', char: '🎯' }, { mood: 'energetic', char: '💡' },
    
    // Funny
    { mood: 'funny', char: '😂' }, { mood: 'funny', char: '🤣' }, { mood: 'funny', char: '😆' },
    { mood: 'funny', char: '🤡' }, { mood: 'funny', char: '🎭' }, { mood: 'funny', char: '🐒' },
    { mood: 'funny', char: '🤪' }, { mood: 'funny', char: '😜' }, { mood: 'funny', char: '😝' },
    { mood: 'funny', char: '🎉' }, { mood: 'funny', char: '🎈' }, { mood: 'funny', char: '🍌' },
    { mood: 'funny', char: '🐷' }, { mood: 'funny', char: '🐸' }, { mood: 'funny', char: '🦁' },
    { mood: 'funny', char: '🎤' }, { mood: 'funny', char: '🎠' }, { mood: 'funny', char: '🤹' },
    { mood: 'funny', char: '🐔' }, { mood: 'funny', char: '🦆' }, { mood: 'funny', char: '🐍' },
    { mood: 'funny', char: '🎪' }, { mood: 'funny', char: '🍦' }, { mood: 'funny', char: '🍕' },
    { mood: 'funny', char: '🍔' }, { mood: 'funny', char: '🍟' }, { mood: 'funny', char: '🎲' },
    { mood: 'funny', char: '🧀' }, { mood: 'funny', char: '🥚' }, { mood: 'funny', char: '🍳' },
    
    // Silly 
    { mood: 'silly', char: '🤪' }, { mood: 'silly', char: '😜' }, { mood: 'silly', char: '😝' },
    { mood: 'silly', char: '🐒' }, { mood: 'silly', char: '🤡' }, { mood: 'silly', char: '🎈' },
    { mood: 'silly', char: '🍌' }, { mood: 'silly', char: '🎪' }, { mood: 'silly', char: '🐷' },
    { mood: 'silly', char: '🐸' }, { mood: 'silly', char: '🎉' }, { mood: 'silly', char: '🎠' },
    { mood: 'silly', char: '🤹' }, { mood: 'silly', char: '🦄' }, { mood: 'silly', char: '🐰' },
    { mood: 'silly', char: '🎲' }, { mood: 'silly', char: '🍭' }, { mood: 'silly', char: '🌟' },
    { mood: 'silly', char: '🐔' }, { mood: 'silly', char: '🦆' }, { mood: 'silly', char: '🐍' },
    { mood: 'silly', char: '🍦' }, { mood: 'silly', char: '🍕' }, { mood: 'silly', char: '🍔' },
    { mood: 'silly', char: '🍟' }, { mood: 'silly', char: '🧀' }, { mood: 'silly', char: '🥚' },
    { mood: 'silly', char: '🍳' }, { mood: 'silly', char: '🐙' }, { mood: 'silly', char: '🦑' },
    
    // Surprised
    { mood: 'surprised', char: '😲' }, { mood: 'surprised', char: '😳' }, { mood: 'surprised', char: '😱' },
    { mood: 'surprised', char: '🤯' }, { mood: 'surprised', char: '👀' }, { mood: 'surprised', char: '🙀' },
    { mood: 'surprised', char: '🎉' }, { mood: 'surprised', char: '💥' }, { mood: 'surprised', char: '⚡' },
    { mood: 'surprised', char: '🌟' }, { mood: 'surprised', char: '✨' }, { mood: 'surprised', char: '🎁' },
    { mood: 'surprised', char: '📢' }, { mood: 'surprised', char: '🚨' }, { mood: 'surprised', char: '🔔' },
    { mood: 'surprised', char: '🎊' }, { mood: 'surprised', char: '🎈' }, { mood: 'surprised', char: '🪄' },
    { mood: 'surprised', char: '🐱' }, { mood: 'surprised', char: '🐶' }, { mood: 'surprised', char: '🦁' },
    { mood: 'surprised', char: '🌠' }, { mood: 'surprised', char: '🎆' }, { mood: 'surprised', char: '🎇' },
    { mood: 'surprised', char: '💨' }, { mood: 'surprised', char: '🪅' }, { mood: 'surprised', char: '🎄' },
    { mood: 'surprised', char: '🎃' }, { mood: 'surprised', char: '🎂' }, { mood: 'surprised', char: '🎗️' },
    
    // Thankful
    { mood: 'thankful', char: '🙏' }, { mood: 'thankful', char: '💖' }, { mood: 'thankful', char: '🌸' },
    { mood: 'thankful', char: '🌟' }, { mood: 'thankful', char: '✨' }, { mood: 'thankful', char: '💐' },
    { mood: 'thankful', char: '🎁' }, { mood: 'thankful', char: '💝' }, { mood: 'thankful', char: '🌞' },
    { mood: 'thankful', char: '🍀' }, { mood: 'thankful', char: '🌼' }, { mood: 'thankful', char: '🕊️' },
    { mood: 'thankful', char: '💗' }, { mood: 'thankful', char: '💞' }, { mood: 'thankful', char: '🌈' },
    { mood: 'thankful', char: '🥳' }, { mood: 'thankful', char: '🎉' }, { mood: 'thankful', char: '🤗' },
    { mood: 'thankful', char: '🌷' }, { mood: 'thankful', char: '🌹' }, { mood: 'thankful', char: '🌺' },
    { mood: 'thankful', char: '💫' }, { mood: 'thankful', char: '🍂' }, { mood: 'thankful', char: '🍃' },
    { mood: 'thankful', char: '🌻' }, { mood: 'thankful', char: '🌍' }, { mood: 'thankful', char: '🌎' },
    { mood: 'thankful', char: '🌏' }, { mood: 'thankful', char: '💓' }, { mood: 'thankful', char: '💕' },
    
    // Proud
    { mood: 'proud', char: '🏆' }, { mood: 'proud', char: '🎖️' }, { mood: 'proud', char: '🥇' },
    { mood: 'proud', char: '👏' }, { mood: 'proud', char: '🌟' }, { mood: 'proud', char: '✨' },
    { mood: 'proud', char: '💪' }, { mood: 'proud', char: '🎉' }, { mood: 'proud', char: '🎊' },
    { mood: 'proud', char: '🥳' }, { mood: 'proud', char: '📜' }, { mood: 'proud', char: '🎓' },
    { mood: 'proud', char: '👑' }, { mood: 'proud', char: '🦁' }, { mood: 'proud', char: '🌞' },
    { mood: 'proud', char: '💼' }, { mood: 'proud', char: '🎯' }, { mood: 'proud', char: '🙌' },
    { mood: 'proud', char: '🥈' }, { mood: 'proud', char: '🥉' }, { mood: 'proud', char: '🎖' },
    { mood: 'proud', char: '🏅' }, { mood: 'proud', char: '🌍' }, { mood: 'proud', char: '🌎' },
    { mood: 'proud', char: '🌏' }, { mood: 'proud', char: '💡' }, { mood: 'proud', char: '🗽' },
    { mood: 'proud', char: '🎇' }, { mood: 'proud', char: '🎆' }, { mood: 'proud', char: '💫' }
    
];

document.addEventListener('DOMContentLoaded', () => {
    console.log('Emoji database status:', typeof emojiDatabase !== 'undefined' ? `Loaded with ${emojiDatabase.length} emojis` : 'Not loaded');

    const moodSelect = document.getElementById('moodSelect');
    const customMood = document.getElementById('customMood');
    const emojiCount = document.getElementById('emojiCount');
    const emojiCountValue = document.getElementById('emojiCountValue');
    const generateBtn = document.getElementById('generateBtn');
    const randomMoodBtn = document.getElementById('randomMoodBtn');
    const resultContainer = document.getElementById('resultContainer');
    const emojiResult = document.getElementById('emojiResult');
    const moodLabel = document.getElementById('moodLabel');
    const copyBtn = document.getElementById('copyBtn');
    const downloadBtn = document.getElementById('downloadBtn');
    const regenerateBtn = document.getElementById('regenerateBtn');
    const getCurrentTheme = () => localStorage.getItem('theme') || 'dark';

    if (!moodSelect || !generateBtn || !customMood || !emojiCount || !emojiCountValue || !resultContainer || !emojiResult || !moodLabel || !copyBtn || !downloadBtn || !regenerateBtn || !randomMoodBtn) {
        console.error('One or more required DOM elements are missing. Check your HTML structure.');
        return;
    }

    emojiCount.addEventListener('input', () => {
        emojiCountValue.textContent = emojiCount.value;
    });

    const setupEmojiPalettes = () => {
        console.log('Setting up emoji palettes');
        const palettes = {};
        emojiDatabase.forEach(emoji => {
            if (emoji.mood && emoji.char) {
                const mood = emoji.mood.toLowerCase();
                if (!palettes[mood]) palettes[mood] = [];
                if (!palettes[mood].includes(emoji.char)) palettes[mood].push(emoji.char);
            }
        });
        return palettes;
    };

    const emojiPalettes = setupEmojiPalettes();
    console.log('Emoji palettes ready:', Object.keys(emojiPalettes));

    const mapCustomMood = (mood) => {
        console.log('Mapping custom mood:', mood);
        const lowerMood = mood.toLowerCase().trim();
        const mappings = {
            // Happy variations 
            'happy': 'happy', 'joy': 'happy', 'joyful': 'happy', 'cheerful': 'happy', 'delighted': 'happy',
            'glad': 'happy', 'merry': 'happy', 'pleased': 'happy', 'ecstatic': 'happy', 'content': 'happy',
            'satisfied': 'happy', 'blissful': 'happy', 'gleeful': 'happy', 'upbeat': 'happy', 'radiant': 'happy',
            'jolly': 'happy', 'overjoyed': 'happy', 'buoyant': 'happy', 'smiling': 'happy', 'laughing': 'happy',
            'beaming': 'happy', 'cheery': 'happy', 'bright': 'happy', 'sunny': 'happy', 'playful': 'happy',
            'lighthearted': 'happy', 'optimistic': 'happy', 'grinning': 'happy', 'bubbly': 'happy',
            
            // Sad variations 
            'sad': 'sad', 'sadness': 'sad', 'depressed': 'sad', 'gloomy': 'sad', 'unhappy': 'sad',
            'miserable': 'sad', 'down': 'sad', 'blue': 'sad', 'sorrowful': 'sad', 'heartbroken': 'sad',
            'bad': 'sad', 'upset': 'sad', 'lonely': 'sad', 'melancholy': 'sad', 'hurt': 'sad',
            'crying': 'sad', 'tearful': 'sad', 'devastated': 'sad', 'grieving': 'sad', 'forlorn': 'sad',
            'despondent': 'sad', 'woeful': 'sad', 'bereft': 'sad', 'dismal': 'sad', 'dreary': 'sad',
            'somber': 'sad', 'mournful': 'sad', 'weeping': 'sad', 'sullen': 'sad', 'desolate': 'sad',
            'hopeless': 'sad', 'dejected': 'sad', 'wistful': 'sad', 'pensive': 'sad', 'tragic': 'sad',
            
            // Excited variations 
            'excited': 'excited', 'thrilled': 'excited', 'hype': 'excited', 'pumped': 'excited', 'eager': 'excited',
            'enthusiastic': 'excited', 'amped': 'excited', 'energized': 'excited', 'buzzed': 'excited', 'hyper': 'excited',
            'stoked': 'excited', 'exhilarated': 'excited', 'overjoyed': 'excited', 'animated': 'excited', 'vibrant': 'excited',
            'electrified': 'excited', 'fired up': 'excited', 'zealous': 'excited', 'passionate': 'excited', 'revved': 'excited',
            'antsy': 'excited', 'giddy': 'excited', 'jumpy': 'excited', 'euphoric': 'excited', 'frenzied': 'excited',
            
            // Energetic variations (mapped to energetic palette)
            'energetic': 'energetic', 'lively': 'energetic', 'spirited': 'energetic', 'dynamic': 'energetic',
            'active': 'energetic', 'vital': 'energetic', 'bouncy': 'energetic', 'peppy': 'energetic', 'zippy': 'energetic',
            'sprightly': 'energetic', 'vivacious': 'energetic', 'exuberant': 'energetic', 'brisk': 'energetic',
            'bustling': 'energetic', 'charged': 'energetic', 'full of energy': 'energetic', 'zesty': 'energetic',
            'perky': 'energetic', 'snappy': 'energetic', 'high-spirited': 'energetic',
            
            // Funny variations (mapped to funny palette)
            'funny': 'funny', 'hilarious': 'funny', 'comical': 'funny', 'amusing': 'funny', 'witty': 'funny',
            'humorous': 'funny', 'joking': 'funny', 'laughable': 'funny', 'entertaining': 'funny', 'goofy': 'funny',
            'zany': 'funny', 'whimsical': 'funny', 'droll': 'funny', 'farcical': 'funny', 'jesting': 'funny',
            'mirthful': 'funny', 'giggling': 'funny', 'chuckling': 'funny', 'side-splitting': 'funny', 'riotous': 'funny',
            
            // Silly variations (mapped to silly palette)
            'silly': 'silly', 'goofy': 'silly', 'wacky': 'silly', 'absurd': 'silly', 'foolish': 'silly',
            'ridiculous': 'silly', 'nutty': 'silly', 'kooky': 'silly', 'clownish': 'silly', 'daffy': 'silly',
            'loony': 'silly', 'dippy': 'silly', 'screwball': 'silly', 'bizarre': 'silly', 'offbeat': 'silly',
            'quirky': 'silly', 'ludicrous': 'silly', 'harebrained': 'silly', 'madcap': 'silly', 'giddy': 'silly',
            
            // Surprised variations (mapped to surprised palette)
            'surprised': 'surprised', 'shocked': 'surprised', 'astonished': 'surprised', 'amazed': 'surprised',
            'stunned': 'surprised', 'astounded': 'surprised', 'flabbergasted': 'surprised', 'startled': 'surprised',
            'speechless': 'surprised', 'dumbfounded': 'surprised', 'taken aback': 'surprised', 'bewildered': 'surprised',
            'in awe': 'surprised', 'gobsmacked': 'surprised', 'shaken': 'surprised', 'overwhelmed': 'surprised',
            'blown away': 'surprised', 'caught off guard': 'surprised', 'unbelievable': 'surprised', 'jaw-dropping': 'surprised',
            
            // Thankful variations (mapped to thankful palette)
            'thankful': 'thankful', 'grateful': 'thankful', 'appreciative': 'thankful', 'blessed': 'thankful',
            'obliged': 'thankful', 'indebted': 'thankful', 'obligated': 'thankful', 'thankfulness': 'thankful',
            'gratitude': 'thankful', 'recognized': 'thankful', 'valued': 'thankful', 'cherished': 'thankful',
            'acknowledged': 'thankful', 'respected': 'thankful', 'honored': 'thankful', 'admired': 'thankful',
            'appreciated': 'thankful', 'touched': 'thankful', 'moved': 'thankful', 'heartfelt': 'thankful',
            
            // Proud variations (mapped to proud palette)
            'proud': 'proud', 'honored': 'proud', 'accomplished': 'proud', 'triumphant': 'proud', 'victorious': 'proud',
            'successful': 'proud', 'fulfilled': 'proud', 'satisfied': 'proud', 'achieved': 'proud', 'glorified': 'proud',
            'celebrated': 'proud', 'esteemed': 'proud', 'respected': 'proud', 'admired': 'proud', 'recognized': 'proud',
            'prestigious': 'proud', 'distinguished': 'proud', 'noble': 'proud', 'worthy': 'proud', 'dignified': 'proud',
            
            // Angry variations 
            'angry': 'angry', 'mad': 'angry', 'furious': 'angry', 'irritated': 'angry', 'annoyed': 'angry',
            'frustrated': 'angry', 'enraged': 'angry', 'livid': 'angry', 'irate': 'angry', 'cross': 'angry',
            'outraged': 'angry', 'agitated': 'angry', 'irritable': 'angry', 'fuming': 'angry', 'hostile': 'angry',
            'infuriated': 'angry', 'vexed': 'angry', 'resentful': 'angry', 'bitter': 'angry', 'wrathful': 'angry',
            'incensed': 'angry', 'pissed': 'angry', 'aggravated': 'angry', 'stormy': 'angry', 'raging': 'angry',
            
            // Relaxed variations 
            'relaxed': 'relaxed', 'chill': 'relaxed', 'calm': 'relaxed', 'peaceful': 'relaxed', 'laidback': 'relaxed',
            'tranquil': 'relaxed', 'rested': 'relaxed', 'at ease': 'relaxed', 'mellow': 'relaxed', 'soothed': 'relaxed',
            'serene': 'relaxed', 'quiet': 'relaxed', 'still': 'relaxed', 'gentle': 'relaxed', 'harmonious': 'relaxed',
            'easygoing': 'relaxed', 'carefree': 'relaxed', 'unwind': 'relaxed', 'restful': 'relaxed', 'placid': 'relaxed',
            'soothing': 'relaxed', 'chillax': 'relaxed', 'zen': 'relaxed', 'comfy': 'relaxed', 'cozy': 'relaxed',
            
            // Love variations 
            'love': 'love', 'inlove': 'love', 'affectionate': 'love', 'passionate': 'love', 'lovely': 'love',
            'adoring': 'love', 'smitten': 'love', 'devoted': 'love', 'caring': 'love', 'sweet': 'love',
            'enamored': 'love', 'infatuated': 'love', 'cherish': 'love', 'fond': 'love', 'tender': 'love',
            'warm': 'love', 'darling': 'love', 'precious': 'love', 'heartfelt': 'love', 'loving': 'love',
            
            // Romantic variations 
            'romantic': 'romantic', 'romance': 'romantic', 'intimate': 'romantic', 'dreamy': 'romantic', 'flirty': 'romantic',
            'amorous': 'romantic', 'sentimental': 'romantic', 'lovey-dovey': 'romantic', 'charming': 'romantic', 'seductive': 'romantic',
            'passionate': 'romantic', 'enchanting': 'romantic', 'alluring': 'romantic', 'swooning': 'romantic', 'cuddly': 'romantic',
            
            // Confused variations 
            'confused': 'confused', 'puzzled': 'confused', 'baffled': 'confused', 'uncertain': 'confused', 'perplexed': 'confused',
            'lost': 'confused', 'bewildered': 'confused', 'mixed up': 'confused', 'unsure': 'confused', 'dazed': 'confused',
            'mystified': 'confused', 'disoriented': 'confused', 'flummoxed': 'confused', 'stumped': 'confused', 'clueless': 'confused',
            'befuddled': 'confused', 'addled': 'confused', 'confounding': 'confused', 'discombobulated': 'confused', 'muddled': 'confused',
            
            // Sleepy variations 
            'sleepy': 'sleepy', 'tired': 'sleepy', 'drowsy': 'sleepy', 'exhausted': 'sleepy', 'fatigued': 'sleepy',
            'worn out': 'sleepy', 'sluggish': 'sleepy', 'lethargic': 'sleepy', 'dozy': 'sleepy', 'groggy': 'sleepy',
            'sleeping': 'sleepy', 'napping': 'sleepy', 'dreamy': 'sleepy', 'resting': 'sleepy', 'yawning': 'sleepy',
            'snoozy': 'sleepy', 'weary': 'sleepy', 'drained': 'sleepy', 'zonked': 'sleepy', 'out of it': 'sleepy',
            
            // Anxious variations 
            'anxious': 'anxious', 'nervous': 'anxious', 'worried': 'anxious', 'stressed': 'anxious', 'tense': 'anxious',
            'uneasy': 'anxious', 'on edge': 'anxious', 'fidgety': 'anxious', 'restless': 'anxious', 'panicked': 'anxious',
            'scared': 'anxious', 'fearful': 'anxious', 'terrified': 'anxious', 'alarmed': 'anxious', 'jittery': 'anxious',
            'apprehensive': 'anxious', 'shaky': 'anxious', 'frantic': 'anxious', 'overwhelmed': 'anxious', 'dreadful': 'anxious',
            
            // Party variations 
            'party': 'party', 'celebration': 'party', 'festive': 'party', 'merry': 'party', 'joyous': 'party',
            'lively': 'party', 'vibrant': 'party', 'fun': 'party', 'jolly': 'party', 'cheery': 'party',
            'celebrating': 'party', 'partying': 'party', 'festivity': 'party', 'revelry': 'party', 'gala': 'party',
            'bash': 'party', 'rave': 'party', 'dance': 'party', 'carnival': 'party', 'fiesta': 'party',
            
            // Adventure variations 
            'adventure': 'adventure', 'exploring': 'adventure', 'wanderlust': 'adventure', 'journey': 'adventure', 'adventurous': 'adventure',
            'travel': 'adventure', 'quest': 'adventure', 'expedition': 'adventure', 'voyage': 'adventure', 'trek': 'adventure',
            'exploration': 'adventure', 'roaming': 'adventure', 'wandering': 'adventure', 'safari': 'adventure', 'odyssey': 'adventure',
            'outing': 'adventure', 'excursion': 'adventure', 'tour': 'adventure', 'ramble': 'adventure', 'backpacking': 'adventure',
            
            // Creative variations 
            'creative': 'creative', 'artsy': 'creative', 'imaginative': 'creative', 'inspired': 'creative', 'innovative': 'creative',
            'artistic': 'creative', 'inventive': 'creative', 'original': 'creative', 'visionary': 'creative', 'crafty': 'creative',
            'ingenious': 'creative', 'expressive': 'creative', 'poetic': 'creative', 'musical': 'creative', 'dramatic': 'creative',
            'inspiring': 'creative', 'arty': 'creative', 'gifted': 'creative', 'talented': 'creative', 'originality': 'creative',
            
            // Calm variations 
            'calm': 'calm', 'serene': 'calm', 'tranquil': 'calm', 'soothing': 'calm', 'peace': 'calm',
            'quiet': 'calm', 'still': 'calm', 'gentle': 'calm', 'harmonious': 'calm', 'balanced': 'calm',
            'peaceful': 'calm', 'restful': 'calm', 'soothed': 'calm', 'meditative': 'calm', 'zen': 'calm',
            'composed': 'calm', 'collected': 'calm', 'unruffled': 'calm', 'steady': 'calm', 'placated': 'calm'
        };
        const mappedMood = mappings[lowerMood] || 'happy'; // Default to 'happy' if no match
        console.log('Mapped mood:', mappedMood);
        return mappedMood;
    };

    const generateEmojiStory = (mood, count) => {
        console.log('Generating story for mood:', mood, 'count:', count);
        const normalizedMood = mapCustomMood(mood);
        console.log('Normalized mood after mapping:', normalizedMood);
    
        // Single validation check
        if (!emojiPalettes[normalizedMood]) {
            console.error(`Mood "${normalizedMood}" not found in emojiPalettes. Available moods:`, Object.keys(emojiPalettes));
            throw new Error(`Invalid mood: ${normalizedMood}. Please check the mood mapping.`);
        }
    
        const palette = emojiPalettes[normalizedMood];
        console.log('Selected palette:', palette);
    
        const actualCount = Math.min(Math.max(parseInt(count, 10) || 5, 1), 20); // Limit to 1-20
        let story = '';
        for (let i = 0; i < actualCount; i++) {
            const randomIndex = Math.floor(Math.random() * palette.length);
            story += palette[randomIndex] + ' ';
        }
        return { story: story.trim(), mappedMood: normalizedMood };
    };
    
    const displayEmojiStory = (emojiStory, mood, mappedMood) => {
        console.log('Displaying story:', emojiStory, 'for mood:', mood, 'mapped to:', mappedMood);
        emojiResult.textContent = emojiStory;
        moodLabel.textContent = `Mood: ${mood.charAt(0).toUpperCase() + mood.slice(1)}`;
        resultContainer.classList.remove('hidden');
        resultContainer.style.display = 'block'; // Ensure visibility
        console.log('Result container display:', window.getComputedStyle(resultContainer).display);
    };
    
   generateBtn.addEventListener('click', () => {
    console.log('Generate button clicked');
    const customMoodValue = customMood.value.trim();
    const selectedMood = moodSelect.value;
    let mood;

    if (customMoodValue) {
        mood = customMoodValue;
        moodSelect.value = ''; // Reset dropdown if custom mood is used
        console.log('Using custom mood:', mood);
    } else if (selectedMood) {
        mood = selectedMood;
        console.log('Using dropdown mood:', mood);
    } else {
        console.warn('No mood selected or entered');
        alert('Please select or type a mood first!');
        return;
    }

    const count = emojiCount.value;
    try {
        const { story, mappedMood } = generateEmojiStory(mood, count);
        displayEmojiStory(story, mood, mappedMood);
    } catch (err) {
        console.error('Error generating story:', err.message);
        alert('An error occurred while generating the story. Please try again.');
    }
});
    
    randomMoodBtn.addEventListener('click', () => {
        console.log('Random mood button clicked');
        const validOptions = Array.from(moodSelect.options).filter(option => option.value).map(option => option.value);
        if (validOptions.length === 0) {
            console.error('No valid mood options found in dropdown');
            alert('No moods available in the dropdown. Please check your setup.');
            return;
        }
        const randomIndex = Math.floor(Math.random() * validOptions.length);
        const randomMood = validOptions[randomIndex];
        moodSelect.value = randomMood;
        customMood.value = ''; // Clear custom mood input
        console.log('Selected random mood:', randomMood);
    
        const count = emojiCount.value;
        try {
            const { story, mappedMood } = generateEmojiStory(randomMood, count);
            displayEmojiStory(story, randomMood, mappedMood);
        } catch (err) {
            console.error('Error generating random story:', err.message);
            alert('An error occurred while generating the random story. Please try again.');
        }
    });
    
    regenerateBtn.addEventListener('click', () => {
        console.log('Regenerate button clicked');
        const customMoodValue = customMood.value.trim();
        const selectedMood = moodSelect.value;
        let mood;
    
        if (customMoodValue) {
            mood = customMoodValue;
            moodSelect.value = ''; // Reset dropdown if custom mood is used
            console.log('Regenerating with custom mood:', mood);
        } else if (selectedMood) {
            mood = selectedMood;
            console.log('Regenerating with dropdown mood:', mood);
        } else {
            console.warn('No mood selected or entered for regeneration');
            alert('Please select or type a mood first!');
            return;
        }
    
        const count = emojiCount.value;
        try {
            const { story, mappedMood } = generateEmojiStory(mood, count);
            displayEmojiStory(story, mood, mappedMood);
        } catch (err) {
            console.error('Error regenerating story:', err.message);
            alert('An error occurred while regenerating the story. Please try again.');
        }
    });
    
    copyBtn.addEventListener('click', () => {
        console.log('Copy button clicked');
        if (!emojiResult.textContent) {
            alert('Please generate an emoji story first!');
            return;
        }
        const textArea = document.createElement('textarea');
        textArea.value = emojiResult.textContent;
        document.body.appendChild(textArea);
        textArea.select();
        try {
            const successful = document.execCommand('copy');
            if (successful) {
                copyBtn.classList.add('copy-success');
                copyBtn.textContent = '✓ Copied';
                const tooltip = document.createElement('div');
                tooltip.className = 'copy-tooltip';
                tooltip.textContent = 'Copied to clipboard!';
                copyBtn.parentNode.appendChild(tooltip);
                setTimeout(() => {
                    tooltip.classList.add('tooltip-fade');
                    setTimeout(() => {
                        if (tooltip.parentNode) tooltip.parentNode.removeChild(tooltip);
                    }, 300);
                    copyBtn.classList.remove('copy-success');
                    copyBtn.textContent = '📋 Copy';
                }, 1500);
            } else {
                throw new Error('Copy command failed');
            }
        } catch (err) {
            console.error('Copy failed:', err);
            alert('Copy failed. Please try again!');
        }
        document.body.removeChild(textArea);
    });
    
    downloadBtn.addEventListener('click', () => {
        console.log('Download button clicked');
        if (!emojiResult.textContent) {
            alert('Please generate an emoji story first!');
            return;
        }
        downloadBtn.classList.add('copy-success');
        const tooltip = document.createElement('div');
        tooltip.className = 'copy-tooltip';
        tooltip.textContent = 'Creating image...';
        downloadBtn.parentNode.appendChild(tooltip);
        setTimeout(() => {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            const emojiText = emojiResult.textContent;
            const emojiCount = emojiText.split(' ').length;
            const canvasWidth = Math.max(800, emojiCount * 80);
            canvas.width = canvasWidth;
            canvas.height = 400;
            const theme = getCurrentTheme();
            const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
            if (theme === 'dark') {
                gradient.addColorStop(0, '#1f1f1f');
                gradient.addColorStop(1, '#121212');
            } else {
                gradient.addColorStop(0, '#ffffff');
                gradient.addColorStop(1, '#f0f0f0');
            }
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.strokeStyle = '#f59e0b';
            ctx.lineWidth = 10;
            ctx.strokeRect(5, 5, canvas.width - 10, canvas.height - 10);
            ctx.font = '72px Arial';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(emojiText, canvas.width / 2, canvas.height / 2);
            ctx.font = 'bold 24px Arial';
            ctx.fillStyle = '#f59e0b';
            ctx.fillText('MojiMood', canvas.width / 2, 40);
            ctx.font = 'italic 20px Arial';
            ctx.fillStyle = theme === 'dark' ? '#cccccc' : '#555555';
            ctx.fillText(moodLabel.textContent, canvas.width / 2, canvas.height - 40);
            const now = new Date();
            const timestamp = now.toLocaleDateString() + ' ' + now.toLocaleTimeString();
            ctx.font = '16px Arial';
            ctx.fillText(timestamp, canvas.width / 2, canvas.height - 70);
            canvas.toBlob((blob) => {
                if (!blob) {
                    console.error('Failed to create blob for download');
                    alert('Download failed. Please try again!');
                    return;
                }
                const a = document.createElement('a');
                a.download = `mojimood-${now.toISOString()}.png`;
                a.href = URL.createObjectURL(blob);
                tooltip.textContent = 'Downloading...';
                a.click();
                setTimeout(() => {
                    tooltip.classList.add('tooltip-fade');
                    setTimeout(() => {
                        if (tooltip.parentNode) tooltip.parentNode.removeChild(tooltip);
                    }, 300);
                    downloadBtn.classList.remove('copy-success');
                }, 1500);
            }, 'image/png');
        }, 300);
    });
    
    const shareButtons = document.querySelectorAll('.share-btn');
    if (shareButtons.length > 0) {
        console.log('Share buttons found:', shareButtons.length);
        shareButtons.forEach(button => {
            button.addEventListener('click', () => {
                console.log('Share button clicked for platform:', button.getAttribute('data-platform')); // Fixed syntax
                if (!emojiResult.textContent) {
                    alert('Please generate an emoji story first!');
                    return;
                }
                const platform = button.getAttribute('data-platform');
                let shareUrl = '';
                const text = `Check out my MojiMood emoji story: ${emojiResult.textContent} ${window.location.href}`;
                const encodedText = encodeURIComponent(text);
                switch (platform) {
                    case 'twitter':
                        shareUrl = `https://twitter.com/intent/tweet?text=${encodedText}`;
                        break;
                    case 'facebook':
                        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}&e=${encodedText}`;
                        break;
                    case 'whatsapp':
                        shareUrl = `https://wa.me/?text=${encodedText}`;
                        break;
                    default:
                        console.error('Unknown platform:', platform);
                        return;
                }
                window.open(shareUrl, '_blank', 'width=600,height=400');
                button.classList.add('share-active');
                setTimeout(() => button.classList.remove('share-active'), 1000);
            });
        });
    } else {
        console.warn('No share buttons found in the DOM.');
    }
});