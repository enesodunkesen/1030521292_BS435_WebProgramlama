
export const imageCollection = [
    {
        id: 'easy_1',
        src: '/assets/images/easy/image1.jpg',
        isAI: true,
        difficulty: 'easy',
        alt: 'Image 1'
    },
    {
        id: 'easy_2',
        src: '/assets/images/easy/image2.jpg',
        isAI: false,
        difficulty: 'easy',
        alt: 'Image 2'
    },
    {
        id: 'easy_3',
        src: '/assets/images/easy/image3.jpg',
        isAI: false,
        difficulty: 'easy',
        alt: 'Image 3'
    },
    {
        id: 'hard_1',
        src: '/assets/images/hard/image1.jpg',
        isAI: true,
        difficulty: 'hard',
        alt: 'Image 1'
    },
    {
        id: 'hard_2',
        src: '/assets/images/hard/image2.jpg',
        isAI: false,
        difficulty: 'hard',
        alt: 'Image 2'
    },
    {
        id: 'hard_3',
        src: '/assets/images/hard/image3.jpg',
        isAI: false,
        difficulty: 'hard',
        alt: 'Image 3'
    },
];


export const getImagesByDifficulty = (difficulty) => {
    return imageCollection.filter(
        img => img.difficulty === difficulty || img.difficulty === 'both'
    );
};


export const getRandomImages = (difficulty, count = 3) => {
    const availableImages = getImagesByDifficulty(difficulty);
    const shuffled = [...availableImages].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
};

export default imageCollection;
