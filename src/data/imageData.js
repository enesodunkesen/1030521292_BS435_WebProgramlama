
export const imageCollection = [
    {
        id: 'faces_easy_1',
        src: '/assets/images/easy/faces/image1.jpg',
        isAI: true,
        difficulty: 'easy',
        category: 'faces',
        alt: 'Face Image 1'
    },
    {
        id: 'faces_easy_2',
        src: '/assets/images/easy/faces/image2.jpg',
        isAI: false,
        difficulty: 'easy',
        category: 'faces',
        alt: 'Face Image 2'
    },
    {
        id: 'faces_easy_3',
        src: '/assets/images/easy/faces/image3.jpg',
        isAI: false,
        difficulty: 'easy',
        category: 'faces',
        alt: 'Face Image 3'
    },

    {
        id: 'faces_hard_1',
        src: '/assets/images/hard/faces/image1.jpg',
        isAI: true,
        difficulty: 'hard',
        category: 'faces',
        alt: 'Face Image 1'
    },
    {
        id: 'faces_hard_2',
        src: '/assets/images/hard/faces/image2.jpg',
        isAI: false,
        difficulty: 'hard',
        category: 'faces',
        alt: 'Face Image 2'
    },
    {
        id: 'faces_hard_3',
        src: '/assets/images/hard/faces/image3.jpg',
        isAI: false,
        difficulty: 'hard',
        category: 'faces',
        alt: 'Face Image 3'
    },

    {
        id: 'cities_easy_1',
        src: '/assets/images/easy/cities/image1.jpg',
        isAI: true,
        difficulty: 'easy',
        category: 'cities',
        alt: 'City Image 1'
    },
    {
        id: 'cities_easy_2',
        src: '/assets/images/easy/cities/image2.jpg',
        isAI: false,
        difficulty: 'easy',
        category: 'cities',
        alt: 'City Image 2'
    },
    {
        id: 'cities_easy_3',
        src: '/assets/images/easy/cities/image3.jpg',
        isAI: false,
        difficulty: 'easy',
        category: 'cities',
        alt: 'City Image 3'
    },

    {
        id: 'cities_hard_1',
        src: '/assets/images/hard/cities/image1.jpg',
        isAI: true,
        difficulty: 'hard',
        category: 'cities',
        alt: 'City Image 1'
    },
    {
        id: 'cities_hard_2',
        src: '/assets/images/hard/cities/image2.jpg',
        isAI: false,
        difficulty: 'hard',
        category: 'cities',
        alt: 'City Image 2'
    },
    {
        id: 'cities_hard_3',
        src: '/assets/images/hard/cities/image3.jpg',
        isAI: false,
        difficulty: 'hard',
        category: 'cities',
        alt: 'City Image 3'
    },

    {
        id: 'cats_easy_1',
        src: '/assets/images/easy/cats/image1.jpg',
        isAI: true,
        difficulty: 'easy',
        category: 'cats',
        alt: 'Cat Image 1'
    },
    {
        id: 'cats_easy_2',
        src: '/assets/images/easy/cats/image2.jpg',
        isAI: false,
        difficulty: 'easy',
        category: 'cats',
        alt: 'Cat Image 2'
    },
    {
        id: 'cats_easy_3',
        src: '/assets/images/easy/cats/image3.jpg',
        isAI: false,
        difficulty: 'easy',
        category: 'cats',
        alt: 'Cat Image 3'
    },

    {
        id: 'cats_hard_1',
        src: '/assets/images/hard/cats/image1.jpg',
        isAI: true,
        difficulty: 'hard',
        category: 'cats',
        alt: 'Cat Image 1'
    },
    {
        id: 'cats_hard_2',
        src: '/assets/images/hard/cats/image2.jpg',
        isAI: false,
        difficulty: 'hard',
        category: 'cats',
        alt: 'Cat Image 2'
    },
    {
        id: 'cats_hard_3',
        src: '/assets/images/hard/cats/image3.jpg',
        isAI: false,
        difficulty: 'hard',
        category: 'cats',
        alt: 'Cat Image 3'
    },
];

export const categoryHints = {
    faces: "Hint: Look at the eyes, teeth, and hair details!",
    cities: "Hint: Look at the background details and text/signs!",
    cats: "Hint: Look at the whiskers, fur texture, and ears!"
};

export const getImagesByDifficulty = (difficulty) => {
    return imageCollection.filter(
        img => img.difficulty === difficulty || img.difficulty === 'both'
    );
};

export const getImagesByCategory = (category) => {
    return imageCollection.filter(img => img.category === category);
};

export const getRandomImages = (difficulty, count = 3, category = null) => {
    let availableImages = getImagesByDifficulty(difficulty);
    
    if (category) {
        availableImages = availableImages.filter(img => img.category === category);
    }
    
    const shuffled = [...availableImages].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
};

export default imageCollection;
