const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3',
    apiKey: 'ceeb16f74a5cfe62931257b50b3f8cd1',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
}

export default apiConfig;