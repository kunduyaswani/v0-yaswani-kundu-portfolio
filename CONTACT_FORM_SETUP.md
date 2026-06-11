# Contact Form with EmailJS Integration

Your contact form is now fully functional and ready to send emails using EmailJS.

## What's Included

✅ **Fully Functional Contact Form** with:
- Name, Email, and Message fields
- Real-time form validation
- Email format verification
- Required field validation
- Responsive design (mobile & desktop)

✅ **EmailJS Integration** with:
- Automatic email delivery to your inbox
- Complete sender information (name, email, message)
- Submission timestamp
- Error handling and user feedback

✅ **Professional UI/UX** with:
- Loading state animation while sending
- Success message with green checkmark
- Error message with red alert icon
- Input field error messages
- Disabled form inputs while sending
- Smooth animations using Framer Motion

## Features

### Form Validation
- **Name**: Required field
- **Email**: Required + valid email format check
- **Message**: Required field
- Error messages displayed below each field
- Form fields disabled during submission

### User Feedback
- **Loading State**: Animated send button while email is being sent
- **Success State**: Green success message "Message sent successfully!"
- **Error State**: Red error message if sending fails
- Auto-clear messages after 5 seconds

### Email Content
Each email includes:
- Sender's Name
- Sender's Email Address
- Full Message
- Submission Date & Time (formatted)
- Your Receiving Email Address

## Quick Setup (5 Minutes)

1. **Copy Environment Template**:
   ```bash
   cp .env.local.example .env.local
   ```

2. **Get EmailJS Credentials** (see EMAILJS_SETUP.md for detailed steps):
   - Visit https://www.emailjs.com and sign up
   - Get your Public Key from Account > API Keys
   - Create an Email Service (Gmail)
   - Create an Email Template
   - Copy Service ID and Template ID

3. **Fill in .env.local**:
   ```env
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_key
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   NEXT_PUBLIC_CONTACT_EMAIL=your_email@gmail.com
   ```

4. **Restart Dev Server**:
   ```bash
   pnpm dev
   ```

5. **Test the Form**:
   - Go to http://localhost:3000/#contact
   - Fill in the form and click "Send Message"
   - Check your email inbox

## Environment Variables Explained

| Variable | Purpose | Where to Get |
|----------|---------|--------------|
| `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` | Authenticates your app with EmailJS | Account > API Keys |
| `NEXT_PUBLIC_EMAILJS_SERVICE_ID` | Identifies your email service | Email Services section |
| `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` | Identifies your email template | Email Templates section |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Your email to receive messages | Your Gmail/email address |

## Email Template Setup

For best results, use this template in EmailJS:

**Subject**: `New Message from Portfolio - {{from_name}}`

**Body**:
```html
<h2>New Message from Your Portfolio</h2>

<p><strong>From:</strong> {{from_name}}</p>
<p><strong>Email:</strong> {{from_email}}</p>

<hr />

<p><strong>Message:</strong></p>
<p>{{message}}</p>

<hr />

<p><small>Received at: {{submission_date}}</small></p>
```

## Deployment to Vercel

1. Go to Vercel > Project Settings > Environment Variables
2. Add all four environment variables
3. Redeploy your project
4. Test the form on the live site

## Troubleshooting

### "Failed to send message"
- Check that all environment variables are set in Vercel
- Verify Gmail service is authenticated in EmailJS
- Ensure template variable names match exactly

### Not receiving emails
- Check spam/junk folder
- Verify your email address in `NEXT_PUBLIC_CONTACT_EMAIL`
- Check EmailJS dashboard for service health

### Template not working
- Verify all template variable names use double braces: `{{variable}}`
- Ensure template ID is correct
- Check that service ID is active

## Free Tier Limits

- 200 emails per month
- Unlimited templates
- Supports multiple email services

## File Structure

```
components/
├── contact.tsx          # Main contact form component with EmailJS
│
.env.local              # Your EmailJS credentials (create this)
.env.local.example      # Template with instructions
EMAILJS_SETUP.md        # Detailed setup guide
CONTACT_FORM_SETUP.md   # This file
```

## Technical Details

### Frontend
- Built with React + TypeScript
- Uses Framer Motion for animations
- Tailwind CSS for styling
- @emailjs/browser for email delivery

### Backend
- EmailJS handles all email delivery
- No backend server needed
- Secure credential handling

### Security
- Public key only (no sensitive credentials in code)
- Environment variables for sensitive data
- Email validation on client side
- CORS handled by EmailJS

## Next Steps

1. Follow EMAILJS_SETUP.md for detailed setup instructions
2. Test the form locally
3. Deploy to Vercel with environment variables
4. Monitor EmailJS dashboard for email activity

## Support

For EmailJS issues: https://www.emailjs.com/docs/
For Next.js deployment: https://vercel.com/docs
