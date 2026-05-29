'use client'

import { useState } from 'react'
import { Check, Star, Zap, Users, Globe, Shield } from 'lucide-react'

const servicePlans = {
  'Writing & Editing': [
    {
      name: 'Starter',
      description: 'For short-form content and light editing',
      annualPrice: 24,
      popular: false,
      icon: Zap,
      features: [
        'Short article or blog support',
        'Proofreading and grammar polish',
        'Basic formatting cleanup',
        'One revision round',
        'Email support'
      ],
      cta: 'Get Started',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Professional',
      description: 'For authors and businesses needing steady content',
      annualPrice: 65,
      popular: true,
      icon: Users,
      features: [
        'Ghostwriting assistance',
        'Copywriting and editing',
        'Content structure review',
        'SEO-friendly blog writing',
        'Three revision rounds',
        'Priority support'
      ],
      cta: 'Start Project',
      color: 'from-[#9694fa] via-[#8a67d8] to-[#cb94eb]'
    },
    {
      name: 'Enterprise',
      description: 'For books, campaigns, and large content needs',
      annualPrice: 165,
      popular: false,
      icon: Globe,
      features: [
        'Long-form manuscript support',
        'Dedicated editorial workflow',
        'Advanced proofreading and formatting',
        'Publishing-ready document cleanup',
        'Custom content calendar',
        'Dedicated account manager'
      ],
      cta: 'Contact Sales',
      color: 'from-orange-500 to-red-500'
    }
  ],
  'Design & Creative': [
    {
      name: 'Starter',
      description: 'For simple creative assets',
      annualPrice: 39,
      popular: false,
      icon: Zap,
      features: [
        'One basic design asset',
        'Simple visual direction',
        'Source-ready export files',
        'One revision round',
        'Email support'
      ],
      cta: 'Get Started',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Professional',
      description: 'For polished brand and book visuals',
      annualPrice: 95,
      popular: true,
      icon: Users,
      features: [
        'Book cover or creative package',
        'Illustration direction',
        'Merchandise design support',
        'Three revision rounds',
        'Print and web exports',
        'Priority support'
      ],
      cta: 'Start Project',
      color: 'from-[#9694fa] via-[#8a67d8] to-[#cb94eb]'
    },
    {
      name: 'Enterprise',
      description: 'For full creative systems and campaigns',
      annualPrice: 225,
      popular: false,
      icon: Globe,
      features: [
        'Multi-asset creative system',
        'Advanced illustration package',
        'Brand consistency review',
        'Campaign-ready deliverables',
        'Dedicated designer coordination',
        'Priority revisions'
      ],
      cta: 'Contact Sales',
      color: 'from-orange-500 to-red-500'
    }
  ],
  'Publishing & Distribution': [
    {
      name: 'Starter',
      description: 'For early publishing setup',
      annualPrice: 49,
      popular: false,
      icon: Zap,
      features: [
        'Publishing readiness review',
        'Basic formatting guidance',
        'Copyright checklist',
        'Account setup guidance',
        'Email support'
      ],
      cta: 'Get Started',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Professional',
      description: 'For authors preparing to launch',
      annualPrice: 125,
      popular: true,
      icon: Users,
      features: [
        'Amazon seller setup support',
        'Author Central guidance',
        'Print and distribution coordination',
        'E-commerce integration planning',
        'Launch checklist',
        'Priority support'
      ],
      cta: 'Start Project',
      color: 'from-[#9694fa] via-[#8a67d8] to-[#cb94eb]'
    },
    {
      name: 'Enterprise',
      description: 'For full publishing operations',
      annualPrice: 275,
      popular: false,
      icon: Globe,
      features: [
        'End-to-end publishing support',
        'Printing press coordination',
        'Distribution workflow setup',
        'Commerce and author platform support',
        'Dedicated launch manager',
        'Custom reporting'
      ],
      cta: 'Contact Sales',
      color: 'from-orange-500 to-red-500'
    }
  ],
  'Marketing & Promotion': [
    {
      name: 'Starter',
      description: 'For basic visibility and launch support',
      annualPrice: 79,
      popular: false,
      icon: Zap,
      features: [
        'Basic SEO recommendations',
        'Campaign planning checklist',
        'Review platform guidance',
        'One promotion channel',
        'Email support'
      ],
      cta: 'Get Started',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Professional',
      description: 'For active campaign growth',
      annualPrice: 199,
      popular: true,
      icon: Users,
      features: [
        'Book marketing strategy',
        'Digital campaign setup',
        'Amazon PPC planning',
        'SEO optimization',
        'Reviews management support',
        'Monthly performance notes'
      ],
      cta: 'Start Project',
      color: 'from-[#9694fa] via-[#8a67d8] to-[#cb94eb]'
    },
    {
      name: 'Enterprise',
      description: 'For multi-channel promotional campaigns',
      annualPrice: 499,
      popular: false,
      icon: Globe,
      features: [
        'Full marketing campaign plan',
        'Multi-channel ad coordination',
        'Billboard marketing support',
        'Advanced SEO and PPC strategy',
        'Dedicated campaign manager',
        'Custom reporting dashboard'
      ],
      cta: 'Contact Sales',
      color: 'from-orange-500 to-red-500'
    }
  ],
  'VR Simulation Services': [
    {
      name: 'Starter',
      description: 'For simple VR proof-of-concepts',
      annualPrice: 299,
      popular: false,
      icon: Zap,
      features: [
        'VR concept consultation',
        'Basic interaction prototype',
        'Single environment scope',
        'Device readiness guidance',
        'Email support'
      ],
      cta: 'Get Started',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Professional',
      description: 'For immersive training and walkthroughs',
      annualPrice: 899,
      popular: true,
      icon: Users,
      features: [
        'Custom VR training simulation',
        '3D environment design',
        'Interactive walkthrough flow',
        'Scenario scripting',
        'Testing and optimization',
        'Priority support'
      ],
      cta: 'Start Project',
      color: 'from-[#9694fa] via-[#8a67d8] to-[#cb94eb]'
    },
    {
      name: 'Enterprise',
      description: 'For advanced VR programs',
      annualPrice: 1999,
      popular: false,
      icon: Globe,
      features: [
        'Multi-scene VR experience',
        'Industrial walkthrough support',
        'Advanced interaction systems',
        'Team review milestones',
        'Deployment coordination',
        'Dedicated project manager'
      ],
      cta: 'Contact Sales',
      color: 'from-orange-500 to-red-500'
    }
  ],
  'AI Agent Services': [
    {
      name: 'Starter',
      description: 'For a focused AI assistant workflow',
      annualPrice: 149,
      popular: false,
      icon: Zap,
      features: [
        'Single agent planning',
        'Basic workflow automation',
        'Knowledge base setup guidance',
        'Simple handoff flow',
        'Email support'
      ],
      cta: 'Get Started',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Professional',
      description: 'For support, outreach, and research agents',
      annualPrice: 399,
      popular: true,
      icon: Users,
      features: [
        'Customer support AI setup',
        'Lead follow-up workflow',
        'Research agent configuration',
        'Data source integration planning',
        'Testing and prompt refinement',
        'Priority support'
      ],
      cta: 'Start Project',
      color: 'from-[#9694fa] via-[#8a67d8] to-[#cb94eb]'
    },
    {
      name: 'Enterprise',
      description: 'For advanced automation systems',
      annualPrice: 999,
      popular: false,
      icon: Globe,
      features: [
        'Multi-agent automation design',
        'Voice agent planning',
        'Data agent workflows',
        'Custom business integrations',
        'Monitoring recommendations',
        'Dedicated automation lead'
      ],
      cta: 'Contact Sales',
      color: 'from-orange-500 to-red-500'
    }
  ],


  'Web Development': [
    {
      name: 'Starter',
      description: 'For simple business websites and landing pages',
      annualPrice: 49,
      popular: false,
      icon: Zap,
      features: [
        'Up to 5 page website',
        'Responsive web layout',
        'Contact form setup',
        'Basic SEO structure',
        'Performance-friendly build',
        '1 month support'
      ],
      cta: 'Get Started',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Professional',
      description: 'For growing websites with richer functionality',
      annualPrice: 129,
      popular: true,
      icon: Users,
      features: [
        'Up to 15 page website',
        'CMS or blog setup',
        'Advanced SEO optimization',
        'E-commerce or booking flow',
        'Analytics integration',
        '6 months support'
      ],
      cta: 'Start Project',
      color: 'from-[#9694fa] via-[#8a67d8] to-[#cb94eb]'
    },
    {
      name: 'Enterprise',
      description: 'For custom web platforms and enterprise sites',
      annualPrice: 299,
      popular: false,
      icon: Globe,
      features: [
        'Unlimited page architecture',
        'Custom web application features',
        'API and CRM integrations',
        'Security and performance review',
        'Custom analytics dashboard',
        'Dedicated account manager'
      ],
      cta: 'Contact Sales',
      color: 'from-orange-500 to-red-500'
    }
  ],


  'App Development': [
    {
      name: 'Starter',
      description: 'For app prototypes and early validation',
      annualPrice: 149,
      popular: false,
      icon: Zap,
      features: [
        'App idea consultation',
        'Core screen wireframes',
        'Clickable prototype',
        'Basic UI direction',
        'Feature scope planning',
        'Email support'
      ],
      cta: 'Get Started',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Professional',
      description: 'For production-ready mobile app builds',
      annualPrice: 499,
      popular: true,
      icon: Users,
      features: [
        'Cross-platform app development',
        'UI/UX design for key flows',
        'Backend and API integration',
        'Authentication setup',
        'Testing and app optimization',
        '6 months support'
      ],
      cta: 'Start Project',
      color: 'from-[#9694fa] via-[#8a67d8] to-[#cb94eb]'
    },
    {
      name: 'Enterprise',
      description: 'For complex apps and business systems',
      annualPrice: 1299,
      popular: false,
      icon: Globe,
      features: [
        'Custom business app solution',
        'Advanced backend architecture',
        'Admin dashboard or portal',
        'Third-party integrations',
        'App maintenance planning',
        'Dedicated account manager',
        'Priority support'
      ],
      cta: 'Contact Sales',
      color: 'from-orange-500 to-red-500'
    }
  ],
  'Game Development': [
    {
      name: 'Starter',
      description: 'For game concepts and prototypes',
      annualPrice: 299,
      popular: false,
      icon: Zap,
      features: [
        'Game concept consultation',
        'Simple 2D prototype',
        'Core loop planning',
        'Basic UI direction',
        'Email support'
      ],
      cta: 'Get Started',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Professional',
      description: 'For playable 2D or 3D game builds',
      annualPrice: 899,
      popular: true,
      icon: Users,
      features: [
        'Unity or Unreal project setup',
        'Playable prototype build',
        'Game UI/UX design',
        'Mobile game planning',
        'Testing and iteration',
        'Priority support'
      ],
      cta: 'Start Project',
      color: 'from-[#9694fa] via-[#8a67d8] to-[#cb94eb]'
    },
    {
      name: 'Enterprise',
      description: 'For production-ready game experiences',
      annualPrice: 2499,
      popular: false,
      icon: Globe,
      features: [
        'Full game development support',
        'Multiplayer integration planning',
        'Advanced gameplay systems',
        'Release readiness support',
        'Dedicated production workflow',
        'Custom milestones'
      ],
      cta: 'Contact Sales',
      color: 'from-orange-500 to-red-500'
    }
  ],
  'UI/UX Design': [
    {
      name: 'Starter',
      description: 'For focused interface improvements',
      annualPrice: 49,
      popular: false,
      icon: Zap,
      features: [
        'Single-page UI review',
        'Basic wireframe direction',
        'Visual polish recommendations',
        'One revision round',
        'Email support'
      ],
      cta: 'Get Started',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Professional',
      description: 'For product screens and prototypes',
      annualPrice: 149,
      popular: true,
      icon: Users,
      features: [
        'User research notes',
        'Wireframing and visual design',
        'Clickable prototype support',
        'User testing recommendations',
        'Design handoff assets',
        'Priority support'
      ],
      cta: 'Start Project',
      color: 'from-[#9694fa] via-[#8a67d8] to-[#cb94eb]'
    },
    {
      name: 'Enterprise',
      description: 'For full product design systems',
      annualPrice: 399,
      popular: false,
      icon: Globe,
      features: [
        'Full product UX strategy',
        'Multi-screen design system',
        'Advanced prototyping',
        'Design QA workflow',
        'Stakeholder review support',
        'Dedicated design lead'
      ],
      cta: 'Contact Sales',
      color: 'from-orange-500 to-red-500'
    }
  ]
}

export default function Pricing() {
  const services = Object.keys(servicePlans) as Array<keyof typeof servicePlans>
  const [activeService, setActiveService] = useState<keyof typeof servicePlans>('Writing & Editing')
  const plans = servicePlans[activeService]

  const savings = [
    { text: 'No hidden fees', icon: Shield },
    { text: 'Cancel anytime', icon: Check },
    { text: '30-day money back', icon: Star }
  ]

  return (
    <section id="pricing" className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#483953] mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg sm:text-xl text-[#483953] mb-8">
            Choose the perfect plan for your business. All plans include our core features with no surprises.
          </p>

          <div
            role="tablist"
            aria-label="Services"
            className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-2"
          >
            {services.map((service) => {
              const isActive = activeService === service

              return (
                <button
                  key={service}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveService(service)}
                  className={`rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'border-[#8a67d8] bg-[#8a67d8] text-white shadow-md shadow-purple-200'
                      : 'border-[#eadff0] bg-white text-[#7b597f] hover:border-[#cbb6dc] hover:text-[#483953]'
                  }`}
                >
                  {service}
                </button>
              )
            })}
          </div>
        </div>

        {/* Pricing Cards - Equal height container */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-2xl transition-all duration-300 hover:scale-105 h-full ${
                plan.popular
                  ? 'border-2 border-purple-500 shadow-2xl transform -translate-y-2'
                  : 'border border-gray-200 shadow-lg'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-linear-to-r from-[#9694fa] via-[#8a67d8] to-[#cb94eb] text-white px-4 py-1 rounded-full text-sm font-medium whitespace-nowrap">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Card Content - Flex column to push button to bottom */}
              <div className="flex flex-col h-full p-6 sm:p-8">
                {/* Plan Header */}
                <div className="text-center mb-6">
                  <div className={`w-12 h-12 bg-linear-to-r ${plan.color} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                    <plan.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#483953] mb-2">{plan.name}</h3>
                  <p className="text-[#483953] text-sm">{plan.description}</p>
                </div>

                {/* Price */}
                <div className="text-center mb-6">
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-bold text-[#483953]">
                      ${plan.annualPrice}
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm mt-1">
                    one-time solution payment
                  </p>
                </div>

                {/* Features - This will grow and take available space */}
                <div className="grow mb-8">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-[#483953] text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button - This stays at the bottom */}
                <div className="mt-auto pt-4">
                <a href="#contact">
                  <button
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-linear-to-r from-[#9694fa] via-[#8a67d8] to-[#cb94eb] text-white hover:from-[#7f7ed4] hover:via-[#7759b9] hover:to-[#ab7dc6] shadow-lg hover:shadow-xl'
                        : 'bg-gray-900 text-white hover:bg-gray-800'
                    }`}
                  >
                    
                    {plan.cta}
                  </button>
                </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Savings Features */}
        <div className="max-w-3xl mx-auto mt-12 sm:mt-16">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            {savings.map((item, index) => (
              <div key={index} className="flex flex-col items-center p-4">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mb-3">
                  <item.icon className="w-5 h-5 text-purple-600" />
                </div>
                <span className="text-[#483953] font-medium text-sm">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ/Additional Info */}
        <div className="max-w-3xl mx-auto mt-12 text-center">
          <p className="text-[#483953] text-sm">
            Need a custom solution? Contact us for a tailored quote.
          </p>
        </div>
      </div>
    </section>
  )
}
