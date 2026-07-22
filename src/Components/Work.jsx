import { useState } from 'react';

const projects = [
  {
    icon: 'bx bx-wrench',
    category: 'Multi-Role Workflow',
    title: 'Service Center Management App',
    excerpt:
      'A complex role-based Flutter application supporting Technicians, Sub-Technicians, Delivery Partners, Pickup Personnel, and Telecallers in a single unified platform.',
    description:
      'Architected a comprehensive service center management system with a complete end-to-end service lifecycle: Pickup → Assignment → Repair → Delivery. Features dynamic role-based landing UI with controlled feature access, status-driven workflow management, and real-time data synchronization across all user roles.',
    features: [
      'Multi-role architecture: Technician, Sub-Technician, Delivery Partner, Pickup Personnel, Telecaller',
      'Complete service lifecycle — Pickup → Assignment → Repair → Delivery',
      'Dynamic role-based landing UI with permission-controlled feature access',
      'Status-driven workflow management (Cancelled, In Progress, Completed)',
      'Firebase FCM push notifications with custom alert sounds',
      'Date-based filtering (daily, monthly, yearly) for service history',
      'Real-time data synchronization across all roles',
    ],
    tags: ['Flutter', 'Bloc', 'FCM', 'Role-Based', 'Workflow'],
  },
  {
    icon: 'bx bx-store-alt',
    category: 'Ecommerce + Home Service',
    title: 'Hybrid Commerce & Service App',
    excerpt:
      'A hybrid platform combining product purchasing and home service booking in a single Flutter application with integrated payment processing.',
    description:
      'Built a dual-purpose platform that allows users to both purchase products and book home services. Features a complete cart and checkout flow with Razorpay and Stripe payment gateways, real-time inventory updates via REST APIs, and a seamless UX across both Android and iOS.',
    features: [
      'Hybrid platform: product purchasing + home service booking',
      'Complete cart, checkout, and payment flow',
      'Razorpay and Stripe integration with success, failure, and retry states',
      'REST API integration for dynamic product/service listings',
      'Real-time inventory updates',
      'Cross-platform (Android & iOS)',
    ],
    tags: ['Flutter', 'Razorpay', 'Stripe', 'REST API', 'Bloc'],
  },
  {
    icon: 'bx bx-building-house',
    category: 'Real Estate',
    title: 'Real Estate Customer App',
    excerpt:
      'A customer-facing real estate application enabling maintenance booking, modification requests, and payment history tracking.',
    description:
      'Developed a property management companion app for real estate customers. Enables structured maintenance booking workflows, modification request handling, and full payment history visibility to improve financial transparency and streamline customer-property interactions.',
    features: [
      'Maintenance booking and modification request workflows',
      'Structured customer interaction flows',
      'Payment history tracking for financial transparency',
      'Workflow-driven UX for property management operations',
    ],
    tags: ['Flutter', 'Bloc', 'REST API', 'Android', 'iOS'],
  },
  {
    icon: 'bx bx-food-menu',
    category: 'Food Delivery',
    title: 'Food Delivery Applications',
    excerpt:
      'Multiple food ordering apps handling the complete order lifecycle from placement to delivery with real-time push notifications.',
    description:
      'Developed multiple food ordering applications covering the full order lifecycle. Integrated Firebase FCM for real-time order status updates, optimized UI performance for smooth user experience on both Android and iOS, and ensured reliable data flow between customer, restaurant, and delivery partner.',
    features: [
      'Complete order lifecycle: placement → preparation → delivery',
      'Firebase FCM for real-time order status push notifications',
      'Optimized UI performance on Android and iOS',
      'Smooth and responsive cross-platform experience',
    ],
    tags: ['Flutter', 'FCM', 'Firebase', 'Android', 'iOS'],
  },
  {
    icon: 'bx bx-purchase-tag-alt',
    category: 'Deals & Services',
    title: 'Deals & Service Platform',
    excerpt:
      'Applications for deal discovery and service workflows featuring advanced filtering, dynamic listings, and user interaction features.',
    description:
      'Built feature-rich applications focused on deal discovery and service management. Implemented advanced filtering, search, and dynamic listing features to improve discoverability. Designed user interaction patterns that reduce friction in finding and booking deals and services.',
    features: [
      'Deal discovery with advanced filtering and search',
      'Dynamic service listing with real-time updates',
      'User interaction: search, filter, and browse',
      'Service workflow management',
      'Improved discoverability through UX design',
    ],
    tags: ['Flutter', 'Bloc', 'REST API', 'Android', 'iOS'],
  },
];

function Work() {
  const [active, setActive] = useState(null);

  return (
    <section id="projects">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <h2 className="section-title">Key <span>Projects</span></h2>
          <div className="section-line" />
        </div>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <div
              className="project-card"
              key={i}
              onClick={() => setActive(i)}
              data-aos="fade-up"
              data-aos-delay={i * 80}
            >
              <div className="project-icon">
                <i className={p.icon} />
              </div>
              <div className="project-category">{p.category}</div>
              <div className="project-title">{p.title}</div>
              <p className="project-excerpt">{p.excerpt}</p>
              <div className="project-tags">
                {p.tags.map((t) => (
                  <span className="tag" key={t}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="project-hint" data-aos="fade-up">
          Click any card for full project details
        </p>
      </div>

      {/* ── Modal ──────────────────────────── */}
      {active !== null && (
        <div className="modal-overlay" onClick={(e) => { if (e.target === e.currentTarget) setActive(null); }}>
          <div className="modal-box" data-aos="zoom-in" data-aos-duration="300">
            <button className="modal-close" onClick={() => setActive(null)}>
              <i className="bx bx-x" />
            </button>

            <div className="modal-icon">
              <i className={projects[active].icon} />
            </div>
            <div className="modal-category">{projects[active].category}</div>
            <h2 className="modal-title">{projects[active].title}</h2>
            <p className="modal-desc">{projects[active].description}</p>

            <ul className="modal-features">
              {projects[active].features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>

            <div className="modal-tags">
              {projects[active].tags.map((t) => (
                <span className="tag" key={t}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Work;
