# 💸 Splitr — Smart Expense Sharing Platform

![Splitr Banner](https://raw.githubusercontent.com/AyushhhJaiswal/Splitr-Split-expenses/refs/heads/main/public/Landingpge.png)

[![Live Site](https://img.shields.io/badge/🌐%20LIVE%20SITE-Connectify-blueviolet?style=for-the-badge)](https://splitr-split-expenses.vercel.app)
[![Next.js](https://img.shields.io/badge/🚀%20Built%20With-Next.js-000?style=for-the-badge&logo=nextdotjs)](https://nextjs.org)
[![Convex](https://img.shields.io/badge/Realtime%20Backend-Convex-blue?style=for-the-badge)](https://convex.dev)
[![Clerk Auth](https://img.shields.io/badge/Auth-Clerk-green?style=for-the-badge)](https://clerk.dev)
[![AI Powered](https://img.shields.io/badge/AI%20Insights-Gemini%20&%20Resend-purple?style=for-the-badge)](https://deepmind.google/technologies/gemini/)

> _“Split expenses. Simplify life. Settle smarter.”_

Splitr is a cutting-edge web app for managing and splitting expenses with friends, roommates, or groups — powered by **Next.js**, **Convex**, and intelligent AI-driven reminders & recommendations. Track, record, and settle any expense easily, get **daily email nudges**, **monthly summaries**, and **smart forecasts** for the month ahead.

---

## ⚡️ Key Features

# 🤖 **Smart AI Assistant**
- **Monthly Financial Insights** sent via email
- **Next-Month Recommendations** tailored by Gemini AI
- Get **daily payment reminders** through automated emails (via Resend)

### 📊 **Intelligent Expense Management**
- Track shared expenses in real-time using Convex’s reactive backend
- Beautiful data visualization with **shadcn** + rich metric charts
- Record who paid and who owes, and settle instantly

### 👥 **Group-Based Sharing**
- Create **shared groups** (e.g. Trips, Parties, Projects)
- Auto-distribute costs across members
- Dynamic share adjustment (by percent, custom split, etc.)


### 📧 **Reminders That Matter**
- Resend-powered mailer sends:
  - 🕐 Timely reminders to settle dues
  - 📅 Monthly wrap-ups
  - 🔮 Smart AI budget suggestions

### 🔐 **Seamless Auth & Security**
- Built with **Clerk** for secure sign-up/sign-in
- JWT-backed authentication & role handling
- Fully compliant with modern auth standards

---

## 🧠 Tech Stack

| Frontend | Backend | Auth | AI / Email | UI / Styling |
|----------|---------|------|------------|--------------|
| Next.js  | Convex  | Clerk | Resend, Gemini | Tailwind CSS + shadcn |

---

## 🌐 Live Deployment

> 🔧 Run the full stack app using:

```bash
npx convex dev
🔧 .env Configuration

Below is your environment structure for deploying and running Splitr:

# Convex Deployment
CONVEX_DEPLOYMENT=
NEXT_PUBLIC_CONVEX_URL=

# Clerk Auth
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
CLERK_JWT_ISSUER_DOMAIN=

# Email & AI Integration
RESEND_API_KEY=
GEMINI_API_KEY=
🛠️ Local Setup

📦 Install Dependencies
npm install
▶️ Run Dev Server
npx convex dev
npm run dev
📈 Future Enhancements

🧾 Exportable Monthly Reports (PDF/CSV)
📱 Mobile-first PWA Experience
🔄 Smart Auto-Settlement Suggestions
💬 In-app Chat for Group Discussions
```
## 🤝 Contributing

Splitr welcomes your contributions! Open issues, suggest features, or submit a PR to improve the project.

## 📄 License

<a href="https://github.com/AyushhhJaiswal/Splitr-Split-expenses/blob/main/LICENSE">MIT LICENSE</a>

## 👤 Author

<a href="https://github.com/AyushhhJaiswal">Ayush Jaiswal <br>
Github</a>
