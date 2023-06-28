export const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
};

export const shuffleArray = (arr) => {
    return [...arr].sort(() => Math.random() - 0.5);
};

export const randomHero = () => {
    return Math.floor(Math.random() * (730 - 1 + 1) + 1);
};