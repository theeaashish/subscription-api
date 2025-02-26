import aj from "../config/arcjet.js";

const arcjetmiddleware = async (req, res, next) => {
    try {
        const decision = await aj.protect(req, {requested: 1});

        if (decision.isDenied()) {
            if (decision.reason.isRateLimit()) return res.status(429).json({ error: "Too many requests" });
            if (decision.reason.isBot()) return res.status(429).json({ error: "bot detected" });

            return res.status(403).json({ error: "Access denied" });
        }

        next();

    } catch (error) {
        console.log(`arcjet middleare error: ${error}`);
        next(error);
    }
}

export default arcjetmiddleware;