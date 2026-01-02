import { motion } from "framer-motion";
import { Code2, Rocket, Users, Coffee } from "lucide-react";

const stats = [
  { icon: Code2, label: "Years Experience", value: "5+" },
  { icon: Rocket, label: "Projects Completed", value: "40+" },
  { icon: Users, label: "Happy Clients", value: "25+" },
  { icon: Coffee, label: "Cups of Coffee", value: "∞" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-display text-primary text-sm tracking-wider uppercase">
              About Me
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              Passionate About <span className="text-gradient">Python</span>
            </h2>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Hi! I'm Saurabh Choudhary, a Python developer with over 5 years of experience 
                building scalable applications, data pipelines, and machine learning solutions. 
                I specialize in transforming complex business requirements into elegant, 
                maintainable code.
              </p>
              <p>
                My journey started with automation scripts and evolved into full-stack development 
                with Django and FastAPI. I'm passionate about clean architecture, test-driven 
                development, and continuous learning.
              </p>
              <p>
                When I'm not coding, you'll find me contributing to open-source projects, 
                writing technical blogs, or exploring new technologies that push the 
                boundaries of what's possible with Python.
              </p>
            </div>

            {/* Code snippet */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-8 card-gradient rounded-lg p-4 border border-border font-display text-sm"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-3 h-3 rounded-full bg-destructive/80" />
                <span className="w-3 h-3 rounded-full bg-accent/80" />
                <span className="w-3 h-3 rounded-full bg-primary/80" />
                <span className="ml-2 text-muted-foreground text-xs">saurabh.py</span>
              </div>
              <pre className="text-xs md:text-sm overflow-x-auto">
                <code>
                  <span className="text-primary">class</span>{" "}
                  <span className="text-accent">Developer</span>:
                  {"\n"}
                  {"    "}
                  <span className="text-primary">def</span>{" "}
                  <span className="text-foreground">__init__</span>(self):
                  {"\n"}
                  {"        "}self.name = <span className="text-primary">"Saurabh Choudhary"</span>
                  {"\n"}
                  {"        "}self.passion = <span className="text-primary">"Python"</span>
                  {"\n"}
                  {"        "}self.loves_clean_code = <span className="text-accent">True</span>
                </code>
              </pre>
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card-gradient rounded-xl p-6 border border-border text-center hover-lift"
              >
                <div className="inline-flex p-3 rounded-lg bg-primary/10 text-primary mb-4">
                  <stat.icon className="w-6 h-6" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-foreground font-display mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
