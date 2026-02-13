// California Dental Email Server
// Run this with: node server.js

const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;

// Email configuration (replace with your email service)
const EMAIL_CONFIG = {
    service: 'gmail', // or other email service
    auth: {
        user: 'your-email@gmail.com',
        pass: 'your-app-password'
    }
};

// Store appointments (in production, use a database)
let appointments = [];

// Serve static files
const server = http.createServer((req, res) => {
    if (req.method === 'POST' && req.url === '/api/send-confirmation') {
        let body = '';
        req.on('data', chunk => body += chunk);
        req.on('end', () => {
            try {
                const data = JSON.parse(body);
                const appointment = {
                    id: Date.now(),
                    ...data,
                    createdAt: new Date().toISOString()
                };
                appointments.push(appointment);
                
                // In production, send actual email here
                console.log('\n=== NEW APPOINTMENT BOOKED ===');
                console.log(JSON.stringify(appointment, null, 2));
                
                // Simulate email sending
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ 
                    success: true, 
                    message: 'Appointment confirmed!',
                    appointment 
                }));
            } catch (error) {
                res.writeHead(400, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'Invalid request' }));
            }
        });
    } else if (req.method === 'GET' && req.url === '/api/appointments') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(appointments));
    } else if (req.method === 'GET' && req.url === '/api/slots') {
        // Generate available slots
        const slots = generateSlots();
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(slots));
    } else {
        // Serve static files
        let filePath = req.url === '/' ? '/index.html' : req.url;
        const extname = path.extname(filePath);
        const contentTypes = {
            '.html': 'text/html',
            '.js': 'text/javascript',
            '.css': 'text/css',
            '.json': 'application/json'
        };
        
        fs.readFile(__dirname + filePath, (error, content) => {
            if (error) {
                res.writeHead(404);
                res.end('Not found');
            } else {
                res.writeHead(200, { 'Content-Type': contentTypes[extname] || 'text/plain' });
                res.end(content);
            }
        });
    }
});

function generateSlots() {
    const slots = {};
    const today = new Date();
    for (let i = 1; i <= 30; i++) {
        const date = new Date(today);
        date.setDate(today.getDate() + i);
        const dateStr = date.toISOString().split('T')[0];
        if (date.getDay() !== 0) {
            slots[dateStr] = ['9:00 AM', '10:00 AM', '11:00 AM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'];
        }
    }
    return slots;
}

server.listen(PORT, () => {
    console.log(`\n🏥 California Dental AI Server running at http://localhost:${PORT}`);
    console.log('\nAvailable endpoints:');
    console.log('  GET  /              - Main page');
    console.log('  GET  /api/slots    - Available time slots');
    console.log('  POST /api/send-confirmation - Book appointment');
    console.log('  GET  /api/appointments - View all appointments\n');
});

// Email sending function (for production use with nodemailer)
/*
const nodemailer = require('nodemailer');

async function sendConfirmationEmail(appointment) {
    const transporter = nodemailer.createTransport({
        service: EMAIL_CONFIG.service,
        auth: {
            user: EMAIL_CONFIG.auth.user,
            pass: EMAIL_CONFIG.auth.pass
        }
    });
    
    const mailOptions = {
        from: EMAIL_CONFIG.auth.user,
        to: appointment.email,
        subject: `Appointment Confirmation - California Dental`,
        html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <div style="background: linear-gradient(135deg, #2563eb 0%, #0891b2 100%); padding: 20px; text-align: center;">
                    <h1 style="color: white; margin: 0;">California Dental 🦷</h1>
                </div>
                <div style="padding: 30px; background: #f8fafc;">
                    <h2 style="color: #1e293b;">Appointment Confirmed! ✅</h2>
                    <p>Dear ${appointment.name},</p>
                    <p>Your appointment has been successfully booked:</p>
                    <div style="background: white; padding: 20px; border-radius: 10px; margin: 20px 0;">
                        <p><strong>Service:</strong> ${appointment.service}</p>
                        <p><strong>Date:</strong> ${appointment.date}</p>
                        <p><strong>Time:</strong> ${appointment.time}</p>
                    </div>
                    <p><strong>Clinic Address:</strong><br>123 Dental Street, Los Angeles, CA 90210</p>
                    <p><strong>Phone:</strong> (555) 123-4567</p>
                    <p>Please arrive 15 minutes early for your appointment.</p>
                </div>
                <div style="background: #1e293b; color: white; padding: 15px; text-align: center; font-size: 12px;">
                    <p>California Dental - Excellence in Dental Care</p>
                </div>
            </div>
        `
    };
    
    await transporter.sendMail(mailOptions);
}
*/

console.log('\n📧 Email functionality requires nodemailer package:');
console.log('  npm install nodemailer\n');
