import { motion } from "framer-motion";
import { ExternalLink, Github, Database, Brain, Globe, Cog, BarChart3, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "DataFlow Analytics",
    description: "A comprehensive data analytics dashboard built with Python, Pandas, and Plotly. Features real-time data processing, interactive visualizations, and automated report generation.",
    tech: ["Python", "Pandas", "Plotly", "PostgreSQL", "Redis"],
    icon: BarChart3,
    github: "#",
    live: "#",
    featured: true,
  },
  {
    title: "ML Price Predictor",
    description: "Machine learning model for real estate price prediction using scikit-learn and TensorFlow. Achieves 94% accuracy with ensemble methods and feature engineering.",
    tech: ["Python", "TensorFlow", "scikit-learn", "FastAPI"],
    icon: Brain,
    github: "#",
    live: "#",
    featured: true,
  },
  {
    title: "WebCrawler Pro",
    description: "Scalable web scraping framework using Scrapy and Selenium. Handles JavaScript-heavy sites, rotates proxies, and stores data in MongoDB with deduplication.",
    tech: ["Python", "Scrapy", "Selenium", "MongoDB", "Docker"],
    icon: Globe,
    github: "#",
    live: "#",
  },
  {
    title: "TaskMaster API",
    description: "RESTful API built with FastAPI featuring JWT authentication, rate limiting, and WebSocket support for real-time updates. Deployed on AWS with CI/CD pipeline.",
    tech: ["FastAPI", "PostgreSQL", "AWS", "Docker", "pytest"],
    icon: Database,
    github: "#",
    live: "#",
  },
  {
    title: "AutoBot Suite",
    description: "Collection of automation scripts for DevOps tasks: log analysis, server monitoring, backup scheduling, and Slack/Discord notifications for critical alerts.",
    tech: ["Python", "Bash", "Ansible", "Prometheus", "Grafana"],
    icon: Cog,
    github: "#",
    live: "#",
  },
  {
    title: "AI Chat Assistant",
    description: "Intelligent chatbot using LangChain and OpenAI API with RAG implementation. Features context-aware responses and integration with custom knowledge bases.",
    tech: ["Python", "LangChain", "OpenAI", "Pinecone", "Django"],
    icon: Bot,
    github: "#",
    live: "#",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div 
        className="absolute inset-0 opacity-20"
        style={{ background: "var(--gradient-glow)" }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-display text-primary text-sm tracking-wider uppercase">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of projects showcasing my expertise in Python development, 
            from data engineering to machine learning and web applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`card-gradient rounded-xl p-6 border border-border hover-lift group ${
                project.featured ? "md:col-span-1 lg:row-span-1" : ""
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <project.icon className="w-6 h-6" />
                </div>
                <div className="flex gap-2">
                  <a 
                    href={project.github}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="View on GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a 
                    href={project.live}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="View live demo"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>

              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-display px-2 py-1 rounded bg-secondary text-secondary-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            variant="outline"
            className="font-display border-border hover:bg-secondary"
          >
            <Github className="w-4 h-4 mr-2" />
            View More on GitHub
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
