'use client'

import { useState } from 'react'
import { Check, Star, Zap, Users, Globe, Shield } from 'lucide-react'

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true)

  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for small businesses and startups',
      monthlyPrice: 29,
      annualPrice: 24,
      popular: false,
      icon: Zap,
      features: [
        'Up to 5 pages website',
        'Basic SEO optimization',
        'Contact form',
        'Mobile responsive',
        '1 month support',
        'Basic analytics'
      ],
      cta: 'Get Started',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Professional',
      description: 'Ideal for growing businesses',
      monthlyPrice: 79,
      annualPrice: 65,
      popular: true,
      icon: Users,
      features: [
        'Up to 15 pages website',
        'Advanced SEO optimization',
        'E-commerce functionality',
        'CMS integration',
        '6 months support',
        'Advanced analytics',
        'Social media integration',
        'Performance optimization'
      ],
      cta: 'Start Project',
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Enterprise',
      description: 'For large-scale businesses and organizations',
      monthlyPrice: 199,
      annualPrice: 165,
      popular: false,
      icon: Globe,
      features: [
        'Unlimited pages website',
        'Enterprise SEO strategy',
        'Custom web applications',
        'API integrations',
        '12 months support',
        'Custom analytics dashboard',
        'Dedicated account manager',
        'Priority support',
        'Custom training sessions',
        'Security audit'
      ],
      cta: 'Contact Sales',
      color: 'from-orange-500 to-red-500'
    }
  ]

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

          {/* Toggle Switch */}
          <div className="flex items-center justify-center gap-4 mb-2">
            <span className={`text-sm font-medium ${!isAnnual ? 'text-[#483953]' : 'text-gray-500'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  isAnnual ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <div className="flex items-center gap-2">
              <span className={`text-sm font-medium ${isAnnual ? 'text-[#483953]' : 'text-gray-500'}`}>
                Annual
              </span>
              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-medium">
                Save 20%
              </span>
            </div>
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
                  <span className="bg-linear-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-medium whitespace-nowrap">
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
                      ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                    </span>
                    <span className="text-[#483953]">/month</span>
                  </div>
                  {isAnnual && (
                    <p className="text-gray-500 text-sm mt-1">
                      billed annually (${plan.annualPrice * 12})
                    </p>
                  )}
                  {!isAnnual && (
                    <p className="text-gray-500 text-sm mt-1">
                      billed monthly
                    </p>
                  )}
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
                  <button
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-linear-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 shadow-lg hover:shadow-xl'
                        : 'bg-gray-900 text-white hover:bg-gray-800'
                    }`}
                  >
                    {plan.cta}
                  </button>
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
            Need a custom solution?{' '}
            <a href="#contact" className="text-purple-600 hover:text-purple-700 font-medium underline">
              Contact us
            </a>{' '}
            for a tailored quote.
          </p>
        </div>
      </div>
    </section>
  )
}