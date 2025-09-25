import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Github,
  Linkedin,
} from 'lucide-react'

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: 'Email',
      value: 'web.sunline@gmail.com',
      link: 'mailto:web.sunline@gmail.com',
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: 'Phone/WhatsApp',
      value: '+34642413967',
      link: 'tel:+34642413967',
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      label: 'Telegram',
      value: '@develop_create',
      link: 'https://t.me/develop_create',
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: 'Location',
      value: 'Spain, Seville',
      link: '#',
    },
  ]

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      label: 'GitHub',
      url: 'https://github.com/YusupovWebArt',
      color: 'hover:text-slate-700',
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/artur-iusupov/',
      color: 'hover:text-blue-600',
    },
  ]

  return (
    <section
      id="contact"
      className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Get In Touch
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Ready to bring your project to life? Let's discuss how we can work
            together to create something amazing.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 bg-slate-50 dark:bg-slate-800 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors group"
                >
                  <div className="text-purple-600 dark:text-lime-500 group-hover:text-purple-700 dark:group-hover:text-lime-600 transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-sm text-slate-500 dark:text-slate-400">
                      {item.label}
                    </div>
                    <div className="font-medium text-slate-900 dark:text-white">
                      {item.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                Let's Connect
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                With years of experience in web development, I specialize in
                building modern React applications and WordPress solutions that
                deliver high performance and align with business goals. I
                leverage AI-powered tools to accelerate development, streamline
                workflows, and generate content efficiently, using these
                technologies effectively to create smarter, faster, and highly
                impactful websites. Whether you need a scalable web application,
                a WordPress site, or SEO optimization, I&#39;m here to turn your
                vision into reality.
              </p>
            </div>
            <div className="pt-8">
              <h4 className="font-semibold text-slate-900 dark:text-white mb-4">
                Follow Me
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-slate-100 dark:bg-slate-800 rounded-xl text-slate-600 dark:text-slate-400 ${social.color} transition-all duration-200 hover:scale-110`}
                    title={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
