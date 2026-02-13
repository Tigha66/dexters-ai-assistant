# California Dental AI Assistant

A comprehensive AI voice agent and chatbot for California Dental that allows patients to book appointments via voice or text, with email confirmations and calendar integration.

## Features

### 🤖 AI Chatbot
- Natural language understanding
- 24/7 availability
- Professional dental practice responses
- Multi-topic support (services, team, hours, contact, testimonials)

### 🎤 Voice Interaction
- Voice-to-text recognition
- Text-to-speech responses
- Hands-free booking
- Works in Chrome, Edge, Safari

### 📅 Appointment Booking
- Collects patient information (name, phone, email)
- Service selection
- Date/time slot selection
- Real-time availability checking
- Booking confirmation

### 📧 Email Confirmations
- Automated confirmation emails
- Professional HTML templates
- All appointment details included

### 📊 Calendar Integration
- 30-day availability
- Automatic slot generation
- Conflict prevention

## Quick Start

### Option 1: Static HTML (No Server Required)
Simply open `index.html` in a browser. The chatbot works offline with demo data.

### Option 2: With Server (Full Features)
```bash
# Install dependencies
npm install

# Start server
npm start

# Open in browser
# http://localhost:3000
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/slots | Get available time slots |
| POST | /api/send-confirmation | Book appointment & send email |
| GET | /api/appointments | View all appointments |

## Booking Flow

```
AI: "Hello! Welcome to California Dental. How can I assist you today?"
User: "I would like to make an appointment."
AI: "Great! May I have your name, please?"
User: "John Doe"
AI: "Thank you, John! What is your phone number?"
User: "555-1234"
AI: "Perfect! And what is your email?"
User: "john@example.com"
AI: "What type of appointment would you like?"
User: "Teeth cleaning"
AI: "Great! What date would you prefer?"
User: "Tomorrow"
AI: "Available times for tomorrow: 9AM, 10AM, 11AM, 1PM, 2PM, 3PM, 4PM, 5PM"
User: "10 AM"
AI: "Let me check... Yes, 10 AM is available! Would you like to book it?"
User: "Yes"
AI: "Your appointment is confirmed for tomorrow at 10 AM. You will receive an email confirmation shortly!"
```

## Configuration

Edit the `CONFIG` object in `index.html`:

```javascript
const CONFIG = {
    clinicName: 'California Dental',
    email: 'info@california-dental.net',
    phone: '(555) 123-4567',
    address: '123 Dental Street, Los Angeles, CA 90210',
    services: [...],
    hours: {...}
};
```

## Email Setup

For production email sending, install nodemailer and configure:

```bash
npm install nodemailer
```

Then update `server.js` with your email credentials.

## Integration with Real Calendar

To connect to a real calendar (Google Calendar, Outlook, etc.):

1. Replace the `calendarSlots` object with API calls
2. Use a calendar API SDK
3. Update availability checking logic

## Browser Support

- Chrome (full voice support)
- Edge (full voice support)
- Safari (limited voice support)
- Firefox (limited voice support)

## Privacy & Security

- User data is handled securely
- HIPAA compliant practices recommended
- Data encryption in transit
- No third-party data sharing

## Demo Mode

The current demo uses simulated responses. For production:
1. Connect to real AI service (Google Antigravity, OpenAI, etc.)
2. Configure email service
3. Connect to real calendar system

## License

MIT License - Feel free to customize for your practice!
