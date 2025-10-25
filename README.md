
# 🧠 Prepforge – AI Mock Interview Platform

Prepforge is a **job interview preparation platform** powered by **Vapi AI voice agents** 🤖.  
Built using **Next.js**, **Firebase**, **Tailwind CSS**, and **Vapi**, it offers a sleek, modern, and interactive experience to help users simulate and prepare for real job interviews with instant AI feedback.

---

## 🚀 Introduction

**Prepforge** is designed to help developers learn how to integrate **AI-powered voice interactions** and intelligent feedback systems into modern web applications.

It allows users to:
- Create mock interviews.
- Interact with AI-powered voice agents.
- Receive personalized feedback based on performance.
- Manage their interviews on an elegant and responsive dashboard.

---

## ⚙️ Tech Stack

- **Next.js** – Frontend and Backend logic (App Router)
- **Firebase** – Authentication & Database
- **Tailwind CSS** – Styling
- **Vapi AI** – Voice Agent API integration
- **shadcn/ui** – Modern reusable UI components
- **Google Gemini** – AI model for generating interview content and feedback
- **Zod** – Schema validation and type safety

---

## 🔋 Features

✅ **Authentication** – Sign up and log in with email/password using Firebase Authentication.  
✅ **Create Interviews** – Generate mock interviews using **Vapi voice assistants** and **Gemini AI**.  
✅ **AI Feedback** – Get real-time and post-interview feedback from the AI agent.  
✅ **Interview Page** – Engage in an interactive AI-driven voice interview session.  
✅ **Dashboard** – Manage, view, and track all created interviews.  
✅ **Modern UI/UX** – Clean and minimal design using **Tailwind** and **shadcn/ui**.  
✅ **Responsive Design** – Works seamlessly across desktop, tablet, and mobile.  
✅ **Code Reusability** – Modular, scalable, and well-structured codebase.  

---

## 🧩 Project Structure

```
prepforge-ai-mock-interveiw/
├── app/                    # Next.js App Router pages
├── components/             # Reusable UI components
├── lib/                    # Firebase & utility functions
├── styles/                 # Global styles
├── public/                 # Static assets
├── .env.local              # Environment variables
├── package.json
└── tailwind.config.js
```

---

## 🤸 Quick Start

### Prerequisites

Ensure you have the following installed:

- **Git**
- **Node.js** (v18+ recommended)
- **npm** or **yarn**

---

### 1️⃣ Clone the Repository

```
git clone https://github.com/gsaivaraprasad123/prepforge-ai-mock-interveiw
cd prepforge-ai-mock-interveiw
```

---

### 2️⃣ Install Dependencies

```
npm install
```

---

### 3️⃣ Set Up Environment Variables

Create a new file named **`.env.local`** in the root directory and add the following:

```
NEXT_PUBLIC_VAPI_WEB_TOKEN=
NEXT_PUBLIC_VAPI_WORKFLOW_ID=

GOOGLE_GENERATIVE_AI_API_KEY=

NEXT_PUBLIC_BASE_URL=

NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=

FIREBASE_PROJECT_ID=
FIREBASE_CLIENT_EMAIL=
FIREBASE_PRIVATE_KEY=
```

> ⚠️ Replace the placeholder values with your actual **Firebase**, **Vapi**, and **Google Gemini** credentials.

---

### 4️⃣ Run the Development Server

```
npm run dev
```

Then open your browser and navigate to:

👉 [http://localhost:3000](http://localhost:3000)

---

## 💡 Author

**👨‍💻 Sai Vara Prasad**  
Software Engineer | AI + Web Enthusiast  
[GitHub](https://github.com/gsaivaraprasad123) • [LinkedIn](https://linkedin.com/in/gsaivaraprasad)


