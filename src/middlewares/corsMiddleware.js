
const allowed_origins = [
    'https://pwi-trabajo-final-front-end-desplegado-git-main-rammas-projects.vercel.app'
]

export const customCorsMiddleware = ((req, res, next) => {
    const origin = req.headers.origin;
    if (allowed_origins.includes(origin)) {
        res.setHeader('Access-Control-Allow-Origin', origin);
    }
    res.setHeader('Access-Control-Allow-Origin', origin);
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    next();
})