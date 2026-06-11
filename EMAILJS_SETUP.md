# EmailJS Setup Guide for Contact Form

This guide will help you configure EmailJS to send emails from your portfolio contact form.

## Step 1: Create an EmailJS Account

1. Visit [EmailJS](https://www.emailjs.com)
2. Click "Sign Up" and create a free account
3. Verify your email address

## Step 2: Get Your Public Key

1. Log in to EmailJS dashboard
2. Go to **Account** > **API Keys**
3. Copy your **Public Key**
4. Add it to your `.env.local` file:
   ```
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
   ```

## Step 3: Create an Email Service

1. In EmailJS dashboard, go to **Email Services**
2. Click "Create New Service"
3. Select **Gmail** (or your preferred email provider)
4. Follow the authentication steps
5. Copy the **Service ID**
6. Add it to your `.env.local` file:
   ```
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
   ```

## Step 4: Create an Email Template

1. Go to **Email Templates** in the dashboard
2. Click "Create New Template"
3. Use this template HTML (adjust styling as needed):

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

**Important Template Variables (must match exactly):**
- `{{from_name}}` - Sender's name from form
- `{{from_email}}` - Sender's email from form
- `{{message}}` - Message body from form
- `{{submission_date}}` - Automatically added timestamp
- `{{to_email}}` - Your receiving email address

4. Set the email **To Address** to `{{to_email}}`
5. Set the **Subject** to: `New Message from Portfolio - {{from_name}}`
6. Copy the **Template ID**
7. Add it to your `.env.local` file:
   ```
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
   ```

## Step 5: Set Your Email Address

Add your email address where you want to receive messages:

```
NEXT_PUBLIC_CONTACT_EMAIL=your_email@gmail.com
```

## Step 6: Create `.env.local` File

Create a `.env.local` file in your project root with all the variables:

```env
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
NEXT_PUBLIC_CONTACT_EMAIL=your_email@example.com
```

## Step 7: Test the Contact Form

1. Restart your development server: `pnpm dev`
2. Navigate to the Contact section of your portfolio
3. Fill in the form and click "Send Message"
4. Check your email inbox for the test message

## Deployment to Vercel

When deploying to Vercel:

1. Go to your Vercel project settings
2. Navigate to **Settings** > **Environment Variables**
3. Add all four environment variables:
   - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`
   - `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
   - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
   - `NEXT_PUBLIC_CONTACT_EMAIL`
4. Redeploy your project

## Troubleshooting

### "Failed to send message" Error
- Check that all environment variables are correctly set
- Verify your Gmail service is properly authenticated in EmailJS
- Ensure your template variables match exactly (case-sensitive)

### Not Receiving Emails
- Check your spam/junk folder
- Verify the email address in `NEXT_PUBLIC_CONTACT_EMAIL` is correct
- Check EmailJS dashboard > Email Service to ensure it's active

### Template Not Working
- Make sure template variable names match exactly (including braces: `{{variable}}`)
- The template ID must be from an active template
- The service ID must be from an active email service

## Free Tier Limits

EmailJS free tier includes:
- 200 emails per month
- Unlimited templates
- Supports multiple email services

For more information, visit [EmailJS Pricing](https://www.emailjs.com/pricing)
