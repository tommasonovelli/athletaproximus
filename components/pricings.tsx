"use client";

import { useState } from "react";

// icons
import { Check, X } from "lucide-react";

// components
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

export function PricingStand() {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Standard",
      price: isAnnual ? 999.99 : 99.99,
      discount: isAnnual ? "Save 20% on annual" : null,
      description: "Perfect for starters",
      features: [
        { text: "Flexible scheduling", included: true },
        { text: "Consistent monthly support", included: true },
        { text: "1 Mental Performance Sessions", included: true },
        { text: "1 Nutrition Sessions", included: true },
      ],
    },
    {
      name: "Premium",
      price: isAnnual ? 1714.99 : 179.99,
      discount: isAnnual ? "Save 26% on annual" : "Save 33%",
      description: "Most Popular Choice",
      popular: true,
      features: [
        { text: "Flexible scheduling", included: true },
        { text: "Consistent monthly support", included: true },
        { text: "2 Mental Performance Sessions", included: true },
        { text: "2 Nutrition Sessions", included: true },
      ],
    },
    {
      name: "Enterprise",
      price: isAnnual ? 1999.99 : 219.99,
      discount: isAnnual ? "Save 32% on annual" : "Save 40%",
      description: "For Experienced Athletes who Want the Most",
      features: [
        { text: "Flexible scheduling", included: true },
        { text: "Consistent monthly support", included: true },
        { text: "3 Mental Performance Sessions", included: true },
        { text: "3 Nutrition Sessions", included: true },
        { text: "Support 24/7", included: true },
      ],
    },
  ];

  const workshops = [
    {
      name: "1-Hour",
      price: 59.99,
      description: "Perfect for starters",
      features: [
        { text: "Interactive learning environment", included: true },
        {
          text: "Practical strategies teams can implement immediately",
          included: true,
        },
        { text: "Tailored to team's sport and level", included: true },
        { text: "Held at team's facility or online", included: true },
        { text: "Single focus area", included: true },
      ],
    },
    {
      name: "2-Hour",
      price: 99.99,
      discount: "Save 20%",
      description: "Most Popular Choice",
      popular: true,
      features: [
        { text: "Interactive learning environment", included: true },
        {
          text: "Practical strategies teams can implement immediately",
          included: true,
        },
        { text: "Tailored to team's sport and level", included: true },
        { text: "Held at team's facility or online", included: true },
        { text: "Multiple topics", included: true },
        { text: "Detailed learning", included: true },
      ],
    },
    {
      name: "6-Session Package",
      price: 349.99,
      description: "For Big Improvements",
      features: [
        { text: "All that is included in the previous program", included: true },
        { text: "Complete program coverage", included: true },
        { text: "Progressive learning", included: true },
        { text: "Customized content", included: true },
        { text: "Team-specific focus", included: true },
        { text: "Long-term development", included: true },
      ],
    },
  ];

  return (
    <>
      <div className="flex flex-col items-center justify-center space-y-4 text-center mt-4 mb-12">
        <div className="space-y-2">
          <p className="mx-auto font-inter max-w-[700px] text-neutral-400/60 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Choose the perfect plan for your needs. Save with our annual
            billing.
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-sm font-medium">Monthly</span>
          <Switch checked={isAnnual} onCheckedChange={setIsAnnual} />
          <span className="text-sm font-medium">Annual</span>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6 mt-8">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`relative flex flex-col p-6 bg-white rounded-3xl shadow-lg border transition-transform duration-200 dark:bg-neutral-800 ${
              plan.popular
                ? "border-primary scale-[1.02]"
                : "border-neutral-200 dark:border-neutral-300"
            }`}
          >
            {plan.popular && (
              <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                <span className="inline-block px-4 py-2 text-xs font-medium text-black bg-palette-1 rounded-full">
                  Popular
                </span>
              </div>
            )}
            <div className="mb-4">
              <h3 className="font-work tracking-tight text-2xl font-medium">
                {plan.name}
              </h3>
              <p className="text-sm text-neutral-400">{plan.description}</p>
            </div>
            <div className="mb-4">
              <span className="text-4xl font-bold">€{plan.price}</span>
              <span className="text-neutral-500/80 dark:text-neutral-400">
                /{isAnnual ? "year" : "month"}
              </span>
              <div className="mt-1">
                <span
                  className={`inline-block px-2 py-1 text-xs font-semibold ${
                    plan.discount ? "bg-green-100" : ""
                  } text-green-700 rounded`}
                >
                  {plan.discount}
                </span>
              </div>
            </div>
            <ul className="mb-6 space-y-2 flex-1">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-center space-x-2">
                  {feature.included ? (
                    <Check className="w-5 h-5 text-green-500" />
                  ) : (
                    <X className="w-5 h-5 text-red-500" />
                  )}
                  <span
                    className={
                      feature.included
                        ? ""
                        : "text-neutral-500 dark:text-neutral-400"
                    }
                  >
                    {feature.text}
                  </span>
                </li>
              ))}
            </ul>
            <Button
              className="w-full h-12 rounded-full mt-12"
              variant={plan.popular ? "default" : "outline"}
            >
              Get Started
            </Button>
          </div>
        ))}
      </div>

      <div className="w-full border-b border-neutral-200/80 mt-32"></div>

      <h2 className="font-work text-5xl tracking-tight text-center pt-24 pb-2">
        Workshops
      </h2>

      <p className="mx-auto font-inter text-neutral-400/60 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-center pb-6">
        Choose the perfect workshop for your needs.
      </p>

      <div className="grid lg:grid-cols-3 gap-6 mt-8">
        {workshops.map((plan) => (
          <div
            key={plan.name}
            className={`relative flex flex-col p-6 bg-white rounded-3xl shadow-lg border transition-transform duration-200 dark:bg-neutral-800 ${
              plan.popular
                ? "border-primary scale-[1.02]"
                : "border-neutral-200 dark:border-neutral-300"
            }`}
          >
            {plan.popular && (
              <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                <span className="inline-block px-4 py-2 text-xs font-medium text-black bg-palette-1 rounded-full">
                  Popular
                </span>
              </div>
            )}
            <div className="mb-4">
              <h3 className="font-work tracking-tight text-2xl font-medium">
                {plan.name}
              </h3>
              <p className="text-sm text-neutral-400">{plan.description}</p>
            </div>
            <div className="mb-4">
              <span className="text-4xl font-bold">€{plan.price}</span>
              <span className="text-neutral-500/80 dark:text-neutral-400">
                /team
              </span>
              <div className="mt-1">
                <span
                  className={`inline-block px-2 py-1 text-xs font-semibold ${
                    plan.discount ? "bg-green-100" : ""
                  } text-green-700 rounded`}
                >
                  {plan.discount}
                </span>
              </div>
            </div>
            <ul className="mb-6 space-y-2 flex-1">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-center space-x-2">
                  {feature.included ? (
                    <Check className="w-5 h-5 text-green-500" />
                  ) : (
                    <X className="w-5 h-5 text-red-500" />
                  )}
                  <span
                    className={
                      feature.included
                        ? ""
                        : "text-neutral-500 dark:text-neutral-400"
                    }
                  >
                    {feature.text}
                  </span>
                </li>
              ))}
            </ul>
            <Button
              className="w-full h-12 rounded-full mt-12"
              variant={plan.popular ? "default" : "outline"}
            >
              Get Started
            </Button>
          </div>
        ))}
      </div>
    </>
  );
}
