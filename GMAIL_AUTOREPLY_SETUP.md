# Gmail auto-reply setup

This portfolio uses Formspree for the public contact form. Gmail auto-reply can be used as a backup/automation layer for messages that arrive in the mailbox.

## What the automation does

- Watches recent Gmail messages.
- Finds unread contact messages from Formspree.
- Sends a polite confirmation reply once.
- Adds a label so the same email is not answered twice.

## Apps Script

Create a Google Apps Script project at https://script.google.com/ and paste this script:

```js
const PROCESSED_LABEL = "portfolio-autoreplied";
const SEARCH_QUERY =
  'is:unread newer_than:7d -label:portfolio-autoreplied (from:formspree.io OR subject:"Portfolio message" OR subject:"New submission")';

function sendPortfolioAutoReplies() {
  const processedLabel = getOrCreateLabel_(PROCESSED_LABEL);
  const threads = GmailApp.search(SEARCH_QUERY, 0, 20);

  threads.forEach((thread) => {
    const messages = thread.getMessages();
    const lastMessage = messages[messages.length - 1];
    const sender = lastMessage.getFrom();

    if (!sender || sender.includes("no-reply")) {
      thread.addLabel(processedLabel);
      return;
    }

    const firstName = extractFirstName_(lastMessage.getPlainBody()) || "there";

    lastMessage.reply(
      [
        `Hi ${firstName},`,
        "",
        "Thank you for reaching out through my portfolio.",
        "I received your message and will get back to you as soon as possible.",
        "",
        "Best regards,",
        "Anastasia Sevastianova",
      ].join("\n"),
      {
        name: "Anastasia Sevastianova",
      },
    );

    thread.addLabel(processedLabel);
    thread.markRead();
  });
}

function getOrCreateLabel_(name) {
  return GmailApp.getUserLabelByName(name) || GmailApp.createLabel(name);
}

function extractFirstName_(body) {
  const match = body.match(/name:\s*([^\n\r]+)/i);

  if (!match) {
    return "";
  }

  return match[1].trim().split(/\s+/)[0];
}
```

## Trigger settings

1. Open the Apps Script project.
2. Go to **Triggers**.
3. Add a trigger:
   - Function: `sendPortfolioAutoReplies`
   - Deployment: `Head`
   - Event source: `Time-driven`
   - Type: `Minutes timer`
   - Interval: every `5` or `10` minutes
4. Save and authorize the Gmail permissions.

## Testing

1. Send a test message through the portfolio contact form.
2. Wait until the email appears in Gmail.
3. In Apps Script, run `sendPortfolioAutoReplies` manually.
4. Confirm that:
   - A reply was sent.
   - The thread has the `portfolio-autoreplied` label.
   - Running the script again does not send a second reply.

## Troubleshooting

- **No email is found:** check `SEARCH_QUERY`. Formspree subjects can differ depending on the form settings.
- **Reply goes to the wrong sender:** inspect the Formspree email format. If Formspree sends from its own address, use Formspree's built-in autoresponse instead.
- **Duplicate replies:** make sure the `portfolio-autoreplied` label is added and the query excludes that label.
- **Authorization error:** open Apps Script, run the function manually, and approve Gmail permissions again.
- **Quota error:** reduce the trigger frequency to every 10 or 15 minutes.

## Current contact fallback

The site also shows a direct email fallback:

```txt
sevastyanova.anastasia1@gmail.com
```
