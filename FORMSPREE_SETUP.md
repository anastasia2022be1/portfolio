# Formspree contact form setup

## 1. Create a Formspree form

1. Open https://formspree.io/
2. Create a new form.
3. Set the receiving email address.
4. Copy the endpoint. It looks like:

```txt
https://formspree.io/f/xxxxxxxx
```

## 2. Add the endpoint to Vercel

In the Vercel project settings, add an environment variable:

```txt
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/xxxxxxxx
```

Redeploy the portfolio after saving the variable.

## 3. Enable an autoresponse

In Formspree, enable confirmation/response email for the sender email field.

Suggested autoresponse:

```txt
Subject: Thanks for your message

Hi {{name}},

Thank you for reaching out. I received your message and will get back to you as soon as possible.

Best regards,
Anastasia Sevastianova
```

## 4. Optional cleanup

After Formspree is live, the old Render contact backend can be removed or left unused.
