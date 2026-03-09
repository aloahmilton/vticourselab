import { Route } from 'react-router-dom';
import GenericLesson from '../home/GenericLesson';

export const projectRoutes = (
    <>
        <Route path="/project/overview" element={<GenericLesson
            title="🏗️ Project Overview" subject="Project" path="/project/overview"
            difficulty="Intermediate"
            prevPath="/react/router" prevLabel="Router Guide"
            nextPath="/project/backend" nextLabel="Backend Setup"
            content="This project is a full-stack E-commerce store. It uses Node.js/Express for the backend and React/Vite for the frontend. The goal is to learn how to connect a frontend UI to a functional backend with real payment integration."
            editorLanguage="javascript"
            conceptCards={[
                { icon: '🌐', title: 'Full-Stack', desc: 'Connects a React frontend to a Node.js backend.' },
                { icon: '🧩', title: 'Modular', desc: 'Code is split into routes and components for clarity.' },
                { icon: '💳', title: 'Payment', desc: 'Uses Fapshi API for real-world XAF transactions.' },
            ]}
            codeExamples={[
                { label: 'Project Structure', language: 'text', code: 'myecom/\n├── backend/\n│   ├── routes/\n│   │   ├── payment.js\n│   │   └── products.js\n│   ├── server.js\n│   └── products.json\n└── mystore/\n    └── src/\n        ├── components/\n        └── App.tsx' },
            ]}
            quizQuestion="What are the two main parts of this project?"
            quizOptions={["Frontend and Backend", "HTML and CSS", "JavaScript and Python", "Database and API"]}
            quizCorrectAnswer={0}
        />} />

        <Route path="/project/backend" element={<GenericLesson
            title="⚙️ Backend Setup" subject="Project" path="/project/backend"
            difficulty="Intermediate"
            prevPath="/project/overview" prevLabel="Overview"
            nextPath="/project/data" nextLabel="Product Database"
            content="The backend is built with Express. It uses modular routing to separate concerns: one route for products and another for payments. server.js acts as the entry point."
            editorLanguage="javascript"
            conceptCards={[
                { icon: '🚀', title: 'server.js', desc: 'The entry point that mounts all routes.' },
                { icon: '🗺️', title: 'Modular Routes', desc: 'Using express.Router() to organize URLs.' },
                { icon: '🛡️', title: 'Error Handling', desc: 'Global catches for a stable server.' },
            ]}
            codeExamples={[
                { label: 'server.js Setup', language: 'javascript', code: 'const express = require("express");\nconst app = express();\n\nconst productRoutes = require("./routes/products");\nconst paymentRoutes = require("./routes/payment");\n\napp.use("/api/products", productRoutes);\napp.use("/pay", paymentRoutes);\n\napp.listen(5000);' },
            ]}
            quizQuestion="What is the purpose of server.js?"
            quizOptions={["Storing data", "Entry point of the backend", "Rendering UI", "Styling page"]}
            quizCorrectAnswer={1}
        />} />

        <Route path="/project/data" element={<GenericLesson
            title="📂 Product Database" subject="Project" path="/project/data"
            difficulty="Beginner"
            prevPath="/project/backend" prevLabel="Backend Setup"
            nextPath="/project/api" nextLabel="Routing & API"
            content="Instead of a complex database like MySQL, we use a simple products.json file. This is great for learning because you can see everything in one place."
            editorLanguage="json"
            conceptCards={[
                { icon: '📝', title: 'JSON Persistence', desc: 'Simple text-based data storage.' },
                { icon: '🖼️', title: 'Image Links', desc: 'High-quality URLs from Unsplash.' },
                { icon: '💰', title: 'Price Data', desc: 'Storing prices in XAF for local context.' },
            ]}
            codeExamples={[
                { label: 'products.json', language: 'json', code: '[\n  {\n    "id": 1,\n    "name": "Wireless Headphones",\n    "price": 15000,\n    "image": "https://images.unsplash.com/..." \n  }\n]' },
            ]}
            quizQuestion="Where is the product data stored?"
            quizOptions={["In the browser", "In products.json", "In a cloud database", "In App.tsx"]}
            quizCorrectAnswer={1}
        />} />

        <Route path="/project/api" element={<GenericLesson
            title="🔗 Routing & API" subject="Project" path="/project/api"
            difficulty="Intermediate"
            prevPath="/project/data" prevLabel="Product Database"
            nextPath="/project/app" nextLabel="Frontend App"
            content="The backend delivers data via APIs. The Products route reads the JSON file and sends it to the frontend whenever requested."
            editorLanguage="javascript"
            conceptCards={[
                { icon: '📡', title: 'REST API', desc: 'Using GET requests to fetch data.' },
                { icon: '📁', title: 'Path Module', desc: 'Reliably finding files on the server.' },
                { icon: '📦', title: 'JSON.parse', desc: 'Converting text data into JavaScript objects.' },
            ]}
            codeExamples={[
                { label: 'Products Route', language: 'javascript', code: 'router.get("/", (req, res) => {\n  const productsPath = path.join(__dirname, "../products.json");\n  const data = fs.readFileSync(productsPath, "utf8");\n  res.json(JSON.parse(data));\n});' },
            ]}
            quizQuestion="Which HTTP method is used to fetch the products?"
            quizOptions={["POST", "PUT", "DELETE", "GET"]}
            quizCorrectAnswer={3}
        />} />

        <Route path="/project/app" element={<GenericLesson
            title="📱 Frontend App" subject="Project" path="/project/app"
            difficulty="Intermediate"
            prevPath="/project/api" prevLabel="Routing & API"
            nextPath="/project/components" nextLabel="Core Components"
            content="App.tsx is the brain of the frontend. It manages the 'State' (the products, the cart, and the current tab) and coordinates everything."
            editorLanguage="javascript"
            conceptCards={[
                { icon: '🧠', title: 'App State', desc: 'Managing products, cart, and navigation.' },
                { icon: '🔄', title: 'Side Effects', desc: 'Fetching data on load using useEffect.' },
                { icon: '🗺️', title: 'Tab Logic', desc: 'Simple conditional rendering for Home vs Product.' },
            ]}
            codeExamples={[
                { label: 'State Management', language: 'javascript', code: 'const [tab, setTab] = useState("home");\nconst [cart, setCart] = useState([]);\n\nuseEffect(() => {\n  fetch("/api/products").then(data => setProducts(data));\n}, []);' },
            ]}
            quizQuestion="What hook is used to fetch products on load?"
            quizOptions={["useState", "useEffect", "useRouter", "useFetch"]}
            quizCorrectAnswer={1}
        />} />

        <Route path="/project/components" element={<GenericLesson
            title="🧩 Core Components" subject="Project" path="/project/components"
            difficulty="Intermediate"
            prevPath="/project/app" prevLabel="Frontend App"
            nextPath="/project/payment" nextLabel="Fapshi Payments"
            content="To keep code clean, we split the UI into components: Home (Landing page), Products (Catalog), and Cart (Checkout summary)."
            editorLanguage="javascript"
            conceptCards={[
                { icon: '🏠', title: 'Home', desc: 'Hero section and featured items.' },
                { icon: '🛍️', title: 'Products', desc: 'Grid layout for all items.' },
                { icon: '🛒', title: 'Cart', desc: 'Summary and checkout trigger.' },
            ]}
            codeExamples={[
                { label: 'Home Component', language: 'javascript', code: 'const Home = ({ featuredProducts, onAddToCart }) => {\n  return (\n    <div>\n       <h1>Welcome</h1>\n       {/* render products */}\n    </div>\n  );\n};' },
            ]}
            quizQuestion="Why do we use components?"
            quizOptions={["To make code slower", "To make code messy", "For reusability and organization", "Because React stays empty"]}
            quizCorrectAnswer={2}
        />} />

        <Route path="/project/payment" element={<GenericLesson
            title="💳 Fapshi Payments" subject="Project" path="/project/payment"
            difficulty="Advanced"
            prevPath="/project/components" prevLabel="Core Components"
            nextPath="/" nextLabel="Back to Home"
            content="Fapshi integration allows real payments. The frontend sends the cart total to the backend, which talks to Fapshi and gets a payment link."
            editorLanguage="javascript"
            conceptCards={[
                { icon: '🔑', title: 'API Keys', desc: 'Securely identifying your account.' },
                { icon: '📤', title: 'POST Request', desc: 'Sending total amount to initiate payment.' },
                { icon: '🔗', title: 'Redirection', desc: 'Sending the user to the Fapshi checkout page.' },
            ]}
            codeExamples={[
                { label: 'Initiate Pay', language: 'javascript', code: 'const payload = {\n  amount: Number(amount),\n  externalId: `order_${Date.now()}`\n};\n\nconst res = await axios.post("https://live.fapshi.com/initiate-pay", payload, {\n  headers: { apiuser, apikey }\n});' },
            ]}
            quizQuestion="What does the backend return after calling Fapshi?"
            quizOptions={["Cash", "The product", "A payment link", "A thank you message"]}
            quizCorrectAnswer={2}
        />} />
    </>
);
