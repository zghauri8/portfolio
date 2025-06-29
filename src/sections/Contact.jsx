// src/sections/Contact.jsx
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Text, useTexture } from "@react-three/drei";
import { a, useSpring } from "@react-spring/three";
import TitleHeader from "../components/TitleHeader";
import SleepingDev from "../components/models/contact/SleepingDev";


// 🌟 SCENE
const Scene = ({ textAnim }) => {
  const roadTexture = useTexture(
    "https://tse3.mm.bing.net/th/id/OIP.jA41dBV-csGZVOvWziAeAgHaEK?w=2560&h=1440&rs=1&pid=ImgDetMain&o=7&rm=3"
  );

  return (
    <>
      {/* 🌑 Dimmed environment allows yellow beam to pop */}
      <ambientLight intensity={0.1} />
      <hemisphereLight skyColor={"#ffffff"} groundColor={"#111111"} intensity={0.05} />

      {/* ✅ BRIGHT GOLD Spotlight now wrapping around character */}
      <spotLight
        position={[0, 5, 0]}
        angle={0.23}
        penumbra={1}
        intensity={300} // 💥 Enhanced
        distance={10}
        decay={2}
        color={"#ffd84d"}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />

      {/* 🔅 Bloom-style boost light under face */}
      <pointLight
        position={[0, 1.4, 0]}
        intensity={4} // slight pop
        distance={3}
        decay={3}
        color={"#fff8d7"}
      />

      {/* ✨ CONE BEAM GLOW */}
      {/* <mesh position={[0, 1.7, 0]} rotation={[0, 0, 0]}>
        <coneGeometry args={[1.6, 3.6, 64, 1, true]} />
        <meshBasicMaterial
          color={"#ffd84d"}
          transparent
          opacity={0.01}
          depthWrite={false}
          side={2}
        />
      </mesh> */}

      {/* 🌕 Glow Floor Base aligned with middle */}
      <mesh rotation={[-Math.PI/ 2, 0, 0]} position={[0, 0, 0]}>
  <circleGeometry args={[10, 64]} />
  <meshStandardMaterial
    color="#ffcc00"
    emissive="#ffd84d"
    emissiveIntensity={0}
    transparent
    opacity={0.1}
    depthWrite={false}
    side={4}
  />
</mesh>

      {/* 👨‍💻 Developer in Dreams */}
      <SleepingDev />

      {/* ✉ Animated Scrolling Text */}
      <a.group position={textAnim.position}>
       <Text
  position={[0, -1.58, 0]}
  rotation={[-Math.PI / 2, 0, 0]}
  fontSize={0.4}
  letterSpacing={-0.015}
  lineHeight={1.3}
  maxWidth={10}
  font="/fonts/BebasNeue-Regular.ttf" // ✅ You must include this in public/fonts
  color="#ffe98a"
  anchorX="center"
  anchorY="middle"
>
  {"He’s not ignoring you...just debugging his dreams."}
</Text>

      </a.group>

      {/* 🛣 FLOOR */}
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -1.6, 0]}
        receiveShadow
      >
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial
          map={roadTexture}
          roughness={1}
          metalness={0.1}
        />
      </mesh>

      <OrbitControls enableZoom={false} enablePan={false} />
    </>
  );
};

// 💌 CONTACT COMPONENT
const Contact = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const textAnim = useSpring({
    from: { position: [5, 0, 0] },
    to: { position: [-5, 0, 0] },
    loop: true,
    config: { duration: 8000 },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );

      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="Get in Touch – Let’s Connect"
          sub="💬 Have questions or ideas? Let’s talk! 🚀"
        />

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 mt-16">
          {/* 📝 FORM */}
          <div className="xl:col-span-5">
            <div className="flex-center card-border rounded-xl p-10">
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="w-full flex flex-col gap-7"
              >
                <div>
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="What’s your good name?"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="What’s your email address?"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="How can I help you?"
                    rows="5"
                    required
                  />
                </div>

                <button type="submit">
                  <div className="cta-button group">
                    <div className="bg-circle" />
                    <p className="text">
                      {loading ? "Sending..." : "Send Message"}
                    </p>
                    <div className="arrow-wrapper">
                      <img src="/images/arrow-down.svg" alt="arrow" />
                    </div>
                  </div>
                </button>
              </form>
            </div>
          </div>

          {/* 3D CHARACTER / LIGHT SIDE */}
          <div className="xl:col-span-7 min-h-[400px]">
            <div className="bg-[#000000] w-full h-full rounded-3xl overflow-hidden">
              <Canvas
                shadows
                camera={{ position: [0, 2.8, 0], fov: 40 }}
                style={{ width: "100%", height: "100%" }}
              >
                <Scene textAnim={textAnim} />
              </Canvas>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;