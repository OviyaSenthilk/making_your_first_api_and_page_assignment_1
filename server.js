const express = require('express');
const app = express();

app.get('/assistant/greet', (req, res) => {
    const name = req.query.name;

    if (!name) {
        return res.status(400).json({ error: "Please provide a name as a query parameter." });
    }

    const dayOfWeek = new Date().toLocaleString('en-US', { weekday: 'long' });
    let dayMessage;

    switch (dayOfWeek) {
        case 'Monday':
            dayMessage = 'Happy Monday! Start your week with energy!';
            break;
        case 'Friday':
            dayMessage = "It's Friday! The weekend is near!";
            break;
        default:
            dayMessage = 'Have a wonderful day!';
    }

    const response = {
        welcomeMessage: `Hello, ${name}! Welcome to our assistant app!`,
        dayMessage: dayMessage
    };

    res.json(response);
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Virtual Assistant API is running on http://localhost:${PORT}`);
});
