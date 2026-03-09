import { Route } from 'react-router-dom';
import GenericLesson from '../home/GenericLesson';

export const howToRoutes = (
    <>
        <Route path="/howto/menu" element={<GenericLesson
            title="🍔 How to create a Simple Menu" subject="React UI" path="/howto/menu"
            difficulty="Beginner"
            prevPath="/project/payment" prevLabel="Fapshi Payments"
            nextPath="/howto/home" nextLabel="Home Page"
            content="A menu (navbar) is the gateway to your app. In React, we create a simple functional component with links. You can use CSS Flexbox to align items horizontally."
            editorLanguage="javascript"
            conceptCards={[
                { icon: '🔗', title: 'Navigation', desc: 'Use Link from react-router-dom for fast transitions.' },
                { icon: '🎨', title: 'Styling', desc: 'Flexbox is your best friend for horizontal menus.' },
                { icon: '📱', title: 'Responsive', desc: 'Plan for mobile views early.' },
            ]}
            codeExamples={[
                { label: 'Simple Menu', language: 'javascript', code: 'import { Link } from "react-router-dom";\n\nconst Navbar = () => (\n  <nav style={{ display: "flex", gap: "20px", padding: "10px" }}>\n    <Link to="/">Home</Link>\n    <Link to="/products">Products</Link>\n  </nav>\n);' },
            ]}
            quizQuestion="What CSS property is best for scientific menu item alignment?"
            quizOptions={["Display: block", "Display: flex", "Margin: auto", "Float: left"]}
            quizCorrectAnswer={1}
        />} />

        <Route path="/howto/home" element={<GenericLesson
            title="🏠 How to create a Home Page" subject="React UI" path="/howto/home"
            difficulty="Beginner"
            prevPath="/howto/menu" prevLabel="Simple Menu"
            nextPath="/howto/footer" nextLabel="Footer"
            content="A Home Page should have a clear purpose. Use big typography (Hero section), featured sections (Cards), and strong Call-to-Action (CTA) buttons."
            editorLanguage="javascript"
            conceptCards={[
                { icon: '🦸', title: 'Hero Section', desc: 'The first thing users see — make it bold.' },
                { icon: '📦', title: 'Features', desc: 'Use grid or flex to show what your app does.' },
                { icon: '🚀', title: 'CTA', desc: 'A clear button to guide users to the next step.' },
            ]}
            codeExamples={[
                { label: 'Home Page Structure', language: 'javascript', code: 'const HomePage = () => (\n  <main>\n    <header className="hero">\n       <h1>Welcome to Our App</h1>\n       <button>Get Started</button>\n    </header>\n    <section className="features">\n       <div>Fast Delivery</div>\n       <div>Secure Payment</div>\n    </section>\n  </main>\n);' },
            ]}
            quizQuestion="What is the main goal of a Home Page?"
            quizOptions={["To confuse users", "To show every single product", "To guide users with a clear purpose", "To hide information"]}
            quizCorrectAnswer={2}
        />} />

        <Route path="/howto/footer" element={<GenericLesson
            title="🦶 How to create a Footer" subject="React UI" path="/howto/footer"
            difficulty="Beginner"
            prevPath="/howto/home" prevLabel="Home Page"
            nextPath="/howto/sidebar" nextLabel="Side Bar"
            content="Footers contain links to policies, contact info, and secondary navigation. They should be clean and consistent across all pages."
            editorLanguage="javascript"
            conceptCards={[
                { icon: '📧', title: 'Contact info', desc: 'Provide ways for users to reach out.' },
                { icon: '📜', title: 'Legal links', desc: 'Privacy policy and terms of service.' },
                { icon: '📅', title: 'Copyright', desc: 'Keep your rights protected.' },
            ]}
            codeExamples={[
                { label: 'Basic Footer', language: 'javascript', code: 'const Footer = () => (\n  <footer>\n    <p>&copy; 2024 MyStore. All rights reserved.</p>\n    <div className="links">\n       <a href="/privacy">Privacy</a>\n       <a href="/contact">Contact</a>\n    </div>\n  </footer>\n);' },
            ]}
            quizQuestion="What typically goes in a footer?"
            quizOptions={["The main logo only", "Contact info and secondary links", "The search bar only", "User passwords"]}
            quizCorrectAnswer={1}
        />} />

        <Route path="/howto/sidebar" element={<GenericLesson
            title="⬅️ How to create a Side Bar" subject="React UI" path="/howto/sidebar"
            difficulty="Intermediate"
            prevPath="/howto/footer" prevLabel="Footer"
            nextPath="/howto/darkmode" nextLabel="Dark Mode Switcher"
            content="Sidebars are essential for dashboard-style applications. Use state to handle 'isOpen' and 'isClosed' animations."
            editorLanguage="javascript"
            conceptCards={[
                { icon: '📂', title: 'Navigation', desc: 'Perfect for deep menu structures.' },
                { icon: '↕️', title: 'Toggle State', desc: 'Manage visibility with a simple boolean state.' },
                { icon: '✨', title: 'Animations', desc: 'Use CSS transitions for smooth opening.' },
            ]}
            codeExamples={[
                { label: 'Collapsible Sidebar', language: 'javascript', code: 'const Sidebar = () => {\n  const [isOpen, setIsOpen] = useState(false);\n  return (\n    <aside className={isOpen ? "sidebar open" : "sidebar"}>\n      <button onClick={() => setIsOpen(!isOpen)}>Toggle</button>\n      <nav>{/* menu items */}</nav>\n    </aside>\n  );\n};' },
            ]}
            quizQuestion="What React hook is used to manage if the sidebar is open?"
            quizOptions={["useEffect", "useContext", "useState", "useRef"]}
            quizCorrectAnswer={2}
        />} />

        <Route path="/howto/darkmode" element={<GenericLesson
            title="🌙 How to create a Dark Mode Switcher" subject="React UI" path="/howto/darkmode"
            difficulty="Intermediate"
            prevPath="/howto/sidebar" prevLabel="Side Bar"
            nextPath="/howto/search" nextLabel="Search Bar"
            content="Dark mode is a premium feature. Use CSS variables and a 'theme' state to switch between light and dark palettes."
            editorLanguage="javascript"
            conceptCards={[
                { icon: '🌓', title: 'Theming', desc: 'Define your colors in CSS variables.' },
                { icon: '💾', title: 'Persistence', desc: 'Save the user preference in localStorage.' },
                { icon: '💻', title: 'System Preference', desc: 'Detect user browser settings automatically.' },
            ]}
            codeExamples={[
                { label: 'Dark Mode Switch', language: 'javascript', code: 'const [darkMode, setDarkMode] = useState(false);\n\n// Update body class\ndocument.body.className = darkMode ? "dark-theme" : "light-theme";\n\nreturn (\n  <button onClick={() => setDarkMode(!darkMode)}>\n    {darkMode ? "🌞 Light" : "🌙 Dark"}\n  </button>\n);' },
            ]}
            quizQuestion="How do we persist dark mode after refresh?"
            quizOptions={["We don't", "Using localStorage", "By asking the user every time", "In the CSS file"]}
            quizCorrectAnswer={1}
        />} />

        <Route path="/howto/search" element={<GenericLesson
            title="🔍 How to create a Search Bar" subject="React UI" path="/howto/search"
            difficulty="Beginner"
            prevPath="/howto/darkmode" prevLabel="Dark Mode"
            nextPath="/" nextLabel="Back to Home"
            content="A classic search bar uses a simple input field and filters a list in real-time. The 'secret sauce' is comparing the input value against your data using .toLowerCase() to make it case-insensitive."
            editorLanguage="javascript"
            conceptCards={[
                { icon: '🔡', title: 'State Control', desc: 'Sync the input value with a React state.' },
                { icon: '🧹', title: 'Filtering', desc: 'Use the .filter() method to narrow down the list.' },
                { icon: '📏', title: 'Classic UI', desc: 'Clean borders and padding — no fluffy animations.' },
            ]}
            codeExamples={[
                { label: 'Classic Search Bar', language: 'javascript', code: 'import { Search } from "lucide-react";\n\nconst SearchBar = ({ onSearch }) => (\n  <div style={{ position: "relative", width: "100%", maxWidth: "300px" }}>\n    <Search \n      size={16} \n      style={{ \n        position: "absolute", \n        left: "10px", \n        top: "50%", \n        transform: "translateY(-50%)", \n        color: "#666" \n      }} \n    />\n    <input\n      type="text"\n      placeholder="Search..."\n      style={{\n        width: "100%",\n        padding: "8px 10px 8px 35px",\n        border: "1px solid #ddd",\n        borderRadius: "4px",\n        fontSize: "14px",\n        outline: "none"\n      }}\n      onChange={(e) => onSearch(e.target.value)}\n    />\n  </div>\n);' },
            ]}
            quizQuestion="Why do we use .toLowerCase() when searching?"
            quizOptions={["To make the code shorter", "To ensure 'Apple' matches 'apple'", "To speed up the computer", "React requires it"]}
            quizCorrectAnswer={1}
        />} />
    </>
);
