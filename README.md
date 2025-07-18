📈 Growthzi Assignment
A responsive landing page built using React, Vite, and modern UI practices. This project showcases a structured frontend implementation with reusable components, scroll-based animations, contact form integration, and fully responsive design.

🔗 Live Preview
👉 Visit Website on Vercel (Replace with actual link after deployment)

🧠 Features
✅ Modular React Components for easy maintainability

🌐 Responsive Design with mobile-first layouts

🖼️ Optimized Image Imports using Vite

📩 Integrated Formspree contact form

🎨 Uses React Icons and Lucide Icons

⚡ Built using Vite for fast development

🚀 Deploy-ready for platforms like Vercel

📁 Folder Structure
csharp
Copy
Edit
growthzi-assignment/
├── public/
│   └── favicon.ico
├── src/
│   ├── assets/               # Static images
│   ├── components/           # All reusable UI components
│   ├── styles/               # CSS files for styling
│   ├── App.jsx               # Root App component
│   ├── main.jsx              # React entry point
├── index.html
├── package.json
└── vite.config.js
🛠️ Tech Stack
Tech	Description
React	Frontend JavaScript Library
Vite	Build tool for fast React development
React Icons	Icon library used for UI elements
Lucide React	Clean, modern SVG icons
Formspree	Contact form handling
CSS3	Custom styling using modules

📸 Screenshots
You can insert screenshots of your UI after deployment using:

md
Copy
Edit
![Homepage Screenshot](./screenshots/homepage.png)
⚙️ Installation & Setup
Clone the repository

bash
Copy
Edit
git clone https://github.com/your-username/growthzi-assignment.git
cd growthzi-assignment
Install dependencies

bash
Copy
Edit
npm install
Run development server

bash
Copy
Edit
npm run dev
Build for production

bash
Copy
Edit
npm run build
📦 Deployment on Vercel
To deploy on Vercel:

Push your project to GitHub

Go to vercel.com and import the GitHub repo

Set the build command as:

arduino
Copy
Edit
npm run build
Set the output directory as:

nginx
Copy
Edit
dist
Click Deploy

💡 Image Import Best Practice
Since Vercel deployment requires static imports to avoid path issues, always use this method:

jsx
Copy
Edit
import bannerImg from "../assets/banner.png";

<img src={bannerImg} alt="Banner" />
Avoid using dynamic require() or relative public/ paths.

🔧 Dependencies
json
Copy
Edit
"dependencies": {
  "react": "^19.1.0",
  "react-dom": "^19.1.0",
  "react-icons": "^4.12.0",
  "lucide-react": "^0.303.0",
  "@formspree/react": "^2.5.3"
}
👨‍💻 Author
Tarun Sharma
🎓 Engineering Student | 💻 Frontend Developer
📍 Ambala, Haryana
LinkedIn | Portfolio

📄 License
This project is licensed under the MIT License — feel free to use and modify.

