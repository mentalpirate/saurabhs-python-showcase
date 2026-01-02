import { motion } from "framer-motion";

const skills = [
  { name: "Python", level: 95, category: "Languages" },
  { name: "Django", level: 88, category: "Frameworks" },
  { name: "FastAPI", level: 90, category: "Frameworks" },
  { name: "Flask", level: 85, category: "Frameworks" },
  { name: "PostgreSQL", level: 82, category: "Databases" },
  { name: "MongoDB", level: 78, category: "Databases" },
  { name: "Docker", level: 80, category: "DevOps" },
  { name: "AWS", level: 75, category: "Cloud" },
  { name: "Pandas", level: 92, category: "Data Science" },
  { name: "NumPy", level: 88, category: "Data Science" },
  { name: "TensorFlow", level: 72, category: "ML/AI" },
  { name: "Git", level: 90, category: "Tools" },
];

const SkillsSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-display text-primary text-sm tracking-wider uppercase">
            Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Years of experience building robust applications with Python and modern development tools.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              className="card-gradient rounded-lg p-5 border border-border hover-lift"
            >
              <div className="flex justify-between items-center mb-3">
                <span className="font-display text-foreground font-medium">
                  {skill.name}
                </span>
                <span className="text-xs text-muted-foreground px-2 py-1 rounded-full bg-secondary">
                  {skill.category}
                </span>
              </div>
              <div className="h-2 bg-secondary rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.3 }}
                  className="h-full rounded-full"
                  style={{ background: "var(--gradient-primary)" }}
                />
              </div>
              <span className="text-xs text-muted-foreground mt-2 block text-right">
                {skill.level}%
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
