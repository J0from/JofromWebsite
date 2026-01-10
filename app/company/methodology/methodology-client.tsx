"use client"

import type React from "react"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  ArrowLeft,
  Check,
  Shield,
  Users,
  Cog,
  BarChart3,
  Lock,
  FileCheck,
  Layers,
  Target,
  Zap,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Footer } from "@/components/footer"

function Building2(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
      <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
      <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
      <path d="M10 6h4" />
      <path d="M10 10h4" />
      <path d="M10 14h4" />
      <path d="M10 18h4" />
    </svg>
  )
}

export function MethodologyPageClient() {
  const principles = [
    {
      icon: Layers,
      title: "Structure Precedes Execution",
      description: "Labor cannot be optimized until it is structurally defined.",
    },
    {
      icon: Lock,
      title: "Accountability is Not Transferable",
      description: "Execution can move; ownership does not.",
    },
    {
      icon: Shield,
      title: "Constraints are First-Class Inputs",
      description: "Regulation, safety, audit, and risk define the feasible solution space.",
    },
    {
      icon: FileCheck,
      title: "Explainability is Mandatory",
      description: "Every allocation decision must be traceable and auditable.",
    },
  ]

  const phases = ["Initiate", "Acquire", "Configure", "Validate", "Process", "Observe", "Adjust", "Complete"]

  const outputs = [
    { icon: BarChart3, text: "End-to-end labor execution map" },
    { icon: Users, text: "Human + machine capacity plan" },
    { icon: Shield, text: "Compliance-safe augmentation roadmap" },
    { icon: FileCheck, text: "Audit-ready evidence trail" },
    { icon: Zap, text: "Cost savings and risk mitigation analysis" },
    { icon: Target, text: "Cross-functional impact analysis" },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-4 sm:p-6 max-w-6xl mx-auto">
        <Link href="/" className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center">
          <span className="md:hidden">Jo from</span>
          <span className="hidden md:inline">J</span>
          <div className="relative mx-1">
            <Image src="/qubit.png" alt="Qubit" width={16} height={16} className="sm:w-5 sm:h-5 brightness-0" />
            <div
              className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 mix-blend-normal opacity-100"
              style={{
                maskImage: `url('/qubit.png')`,
                maskSize: "contain",
                maskRepeat: "no-repeat",
                maskPosition: "center",
                WebkitMaskImage: `url('/qubit.png')`,
                WebkitMaskSize: "contain",
                WebkitMaskRepeat: "no-repeat",
                WebkitMaskPosition: "center",
              }}
            ></div>
          </div>
        </Link>
        <Link href="/">
          <Button variant="ghost" className="gap-1 sm:gap-2 text-sm sm:text-base px-2 sm:px-4">
            <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4" />
            Back
          </Button>
        </Link>
      </nav>

      {/* Hero Section - matching aboutus style */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-600 animate-pulse opacity-50"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">
            LABOR MAP<sup className="text-2xl align-super">™</sup>
          </h1>
          <p className="text-xl sm:text-2xl text-white/90 mb-4">Precision Labor Engineering for Regulated Operations</p>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            A systematic framework for allocating work between humans and machines—without breaking compliance, control,
            or accountability.
          </p>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-gray-900">
            Built for Regulated Industries
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Organizations facing constrained labor, high stakes, and regulatory oversight need a structured approach
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="relative overflow-hidden border-2 hover:border-blue-200 transition-all hover:shadow-xl">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-red-100 to-orange-100 rounded-full -translate-y-10 translate-x-10 opacity-50"></div>
              <CardContent className="p-8 relative z-10">
                <div className="h-12 w-12 rounded-lg bg-red-100 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Constrained Labor Supply</h3>
                <p className="text-gray-600 leading-relaxed">
                  Not enough people to do all the work that needs to be done.
                </p>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden border-2 hover:border-blue-200 transition-all hover:shadow-xl">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-orange-100 to-yellow-100 rounded-full -translate-y-10 translate-x-10 opacity-50"></div>
              <CardContent className="p-8 relative z-10">
                <div className="h-12 w-12 rounded-lg bg-orange-100 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">High Cost of Failure</h3>
                <p className="text-gray-600 leading-relaxed">
                  Mistakes create significant financial, legal, or safety consequences.
                </p>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden border-2 hover:border-blue-200 transition-all hover:shadow-xl">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full -translate-y-10 translate-x-10 opacity-50"></div>
              <CardContent className="p-8 relative z-10">
                <div className="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                  <FileCheck className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Regulatory Oversight</h3>
                <p className="text-gray-600 leading-relaxed">
                  Operations must satisfy external compliance requirements and audits.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gradient Divider */}
      <div className="py-8 bg-gradient-to-r from-blue-50 via-purple-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="h-0.5 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 shadow-lg"></div>
        </div>
      </div>

      {/* Core Principles */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-gray-900">Design Principles</h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            The system is governed by invariants that ensure compliance, accountability, and explainability
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {principles.map((principle, index) => (
              <Card
                key={index}
                className="relative overflow-hidden border-2 hover:border-blue-200 transition-all hover:shadow-xl"
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full -translate-y-10 translate-x-10 opacity-50"></div>
                <CardContent className="p-8 relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-2xl mb-6">
                    {index + 1}
                  </div>
                  <div className="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                    <principle.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{principle.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{principle.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gradient Divider */}
      <div className="py-8 bg-gradient-to-r from-blue-50 via-purple-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="h-0.5 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 shadow-lg"></div>
        </div>
      </div>

      {/* Hierarchical Structure - 2x2 Grid */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-gray-900">The Four Layers</h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Each layer constrains the layer below—ensuring compliance flows from top to bottom
          </p>

          {/* Desktop: 2x2 Grid */}
          <div className="hidden md:grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card className="border-2 border-blue-300 hover:border-blue-400 transition-all hover:shadow-xl relative overflow-hidden">
              <div className="absolute top-4 left-4 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                1
              </div>
              <CardContent className="p-8 pt-20">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Organization</h3>
                <p className="text-gray-700 font-medium mb-4">What the company does</p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                    Operating boundaries
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                    Scale classification
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                    Regulatory constraints
                  </li>
                </ul>
                <div className="mt-6 pt-4 border-t border-blue-200">
                  <span className="inline-block bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    NEVER autonomous
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-300 hover:border-purple-400 transition-all hover:shadow-xl relative overflow-hidden">
              <div className="absolute top-4 left-4 w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                2
              </div>
              <CardContent className="p-8 pt-20">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Strata</h3>
                <p className="text-gray-700 font-medium mb-4">3D labor framework</p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-purple-600 mt-1 flex-shrink-0" />
                    Vertical: Authority
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-purple-600 mt-1 flex-shrink-0" />
                    Horizontal: Function
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-purple-600 mt-1 flex-shrink-0" />
                    Scalar: Breadth/Depth
                  </li>
                </ul>
                <div className="mt-6 pt-4 border-t border-purple-200">
                  <span className="inline-block bg-orange-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    NEVER autonomous
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-indigo-300 hover:border-indigo-400 transition-all hover:shadow-xl relative overflow-hidden">
              <div className="absolute top-4 left-4 w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                3
              </div>
              <CardContent className="p-8 pt-20">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Role</h3>
                <p className="text-gray-700 font-medium mb-4">Outcomes to deliver</p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-indigo-600 mt-1 flex-shrink-0" />
                    Outcome ownership
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-indigo-600 mt-1 flex-shrink-0" />
                    Accountability boundaries
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-indigo-600 mt-1 flex-shrink-0" />
                    Non-transferable duties
                  </li>
                </ul>
                <div className="mt-6 pt-4 border-t border-indigo-200">
                  <span className="inline-block bg-yellow-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    STAYS HUMAN
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-300 hover:border-green-400 transition-all hover:shadow-xl relative overflow-hidden">
              <div className="absolute top-4 left-4 w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                4
              </div>
              <CardContent className="p-8 pt-20">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Task</h3>
                <p className="text-gray-700 font-medium mb-4">How work gets done</p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                    Execution units
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                    8-phase decomposition
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                    Human/Jo allocation
                  </li>
                </ul>
                <div className="mt-6 pt-4 border-t border-green-200">
                  <span className="inline-block bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    Jo can help HERE
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Mobile: Stacked */}
          <div className="md:hidden space-y-4">
            <Card className="border-2 border-blue-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Organization</h3>
                    <p className="text-sm text-gray-700">What the company does</p>
                  </div>
                </div>
                <span className="inline-block bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-2">
                  NEVER autonomous
                </span>
                <p className="text-sm text-gray-600">Operating boundaries, scale, constraints</p>
              </CardContent>
            </Card>

            <div className="flex justify-center">
              <ArrowRight className="w-6 h-6 text-gray-400 rotate-90" />
            </div>

            <Card className="border-2 border-purple-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Strata</h3>
                    <p className="text-sm text-gray-700">3D labor framework</p>
                  </div>
                </div>
                <span className="inline-block bg-orange-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-2">
                  NEVER autonomous
                </span>
                <p className="text-sm text-gray-600">Authority, function, breadth/depth</p>
              </CardContent>
            </Card>

            <div className="flex justify-center">
              <ArrowRight className="w-6 h-6 text-gray-400 rotate-90" />
            </div>

            <Card className="border-2 border-indigo-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Role</h3>
                    <p className="text-sm text-gray-700">Outcomes to deliver</p>
                  </div>
                </div>
                <span className="inline-block bg-yellow-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-2">
                  STAYS HUMAN
                </span>
                <p className="text-sm text-gray-600">Accountability and ownership</p>
              </CardContent>
            </Card>

            <div className="flex justify-center">
              <ArrowRight className="w-6 h-6 text-gray-400 rotate-90" />
            </div>

            <Card className="border-2 border-green-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Task</h3>
                    <p className="text-sm text-gray-700">How work gets done</p>
                  </div>
                </div>
                <span className="inline-block bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-2">
                  Jo can help HERE
                </span>
                <p className="text-sm text-gray-600">Execution and allocation</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gradient Divider */}
      <div className="py-8 bg-gradient-to-r from-blue-50 via-purple-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="h-0.5 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 shadow-lg"></div>
        </div>
      </div>

      {/* 8-Phase Decomposition */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-gray-900">
            8-Phase Outcome Decomposition
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Every outcome follows a universal execution pattern that enables precise task allocation
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
            {phases.map((phase, index) => (
              <div key={index} className="relative">
                <Card className="border-2 hover:border-blue-200 transition-all hover:shadow-lg">
                  <CardContent className="p-4 text-center">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm mx-auto mb-2">
                      {index + 1}
                    </div>
                    <div className="text-base font-semibold text-gray-900">{phase}</div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-green-200 transition-all hover:shadow-xl">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                  H
                </div>
                <h4 className="font-bold text-gray-900 mb-3 text-lg">Human</h4>
                <p className="text-gray-600">Requires judgment, dexterity, or regulatory mandate</p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-blue-200 transition-all hover:shadow-xl">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                  M
                </div>
                <h4 className="font-bold text-gray-900 mb-3 text-lg">Machine</h4>
                <p className="text-gray-600">Deterministic, high-volume, verifiable</p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-purple-200 transition-all hover:shadow-xl">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-sm">
                  H+M
                </div>
                <h4 className="font-bold text-gray-900 mb-3 text-lg">Hybrid</h4>
                <p className="text-gray-600">Shared execution with defined handoff points</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gradient Divider */}
      <div className="py-8 bg-gradient-to-r from-blue-50 via-purple-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="h-0.5 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 shadow-lg"></div>
        </div>
      </div>

      {/* Autonomy-Risk Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-gray-900">The Autonomy-Risk Problem</h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Why traditional approaches to intelligent systems fail in regulated environments
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="border-2 hover:border-red-200 transition-all hover:shadow-xl">
              <CardContent className="p-8">
                <div className="h-12 w-12 rounded-lg bg-red-100 flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">More Autonomy = More Risk</h3>
                <p className="text-gray-600 leading-relaxed">
                  Give Jo freedom to adapt and it can make unpredictable mistakes
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-orange-200 transition-all hover:shadow-xl">
              <CardContent className="p-8">
                <div className="h-12 w-12 rounded-lg bg-orange-100 flex items-center justify-center mb-4">
                  <Lock className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">More Control = Less Flexibility</h3>
                <p className="text-gray-600 leading-relaxed">
                  Lock down every decision and you lose the benefits of intelligent automation
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Governance Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-gray-300 transition-all hover:shadow-xl">
              <CardContent className="p-8 text-center">
                <div className="h-12 w-12 rounded-lg bg-gray-100 flex items-center justify-center mb-4 mx-auto">
                  <Cog className="h-6 w-6 text-gray-600" />
                </div>
                <h4 className="font-bold text-gray-900 mb-3 text-lg">Tools</h4>
                <p className="text-gray-600">Predictable, you own them, no autonomy</p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-gray-300 transition-all hover:shadow-xl">
              <CardContent className="p-8 text-center">
                <div className="h-12 w-12 rounded-lg bg-gray-100 flex items-center justify-center mb-4 mx-auto">
                  <Users className="h-6 w-6 text-gray-600" />
                </div>
                <h4 className="font-bold text-gray-900 mb-3 text-lg">Employees</h4>
                <p className="text-gray-600">Autonomous, you supervise them, accountable</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-300 hover:border-blue-400 transition-all hover:shadow-xl bg-gradient-to-br from-blue-50 to-purple-50">
              <CardContent className="p-8 text-center">
                <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center mb-4 mx-auto">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-bold text-gray-900 mb-3 text-lg">Jo (Machine Staff)</h4>
                <p className="text-gray-700 font-medium">Somewhere in between—THIS is what Labor Map solves</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gradient Divider */}
      <div className="py-8 bg-gradient-to-r from-blue-50 via-purple-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="h-0.5 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 shadow-lg"></div>
        </div>
      </div>

      {/* Graduated Autonomy Framework */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-gray-900">
            Graduated Autonomy Framework
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Match Jo's autonomy to risk level—calibrated freedom, not blanket access
          </p>

          <div className="space-y-4">
            <Card className="border-2 border-red-200 hover:border-red-300 transition-all hover:shadow-lg">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="inline-block bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                        Critical Risk
                      </span>
                      <span className="text-2xl font-bold text-gray-900">Strict Logic</span>
                    </div>
                    <p className="text-gray-700 mb-1">Regulatory compliance, safety, legal liability</p>
                    <p className="text-sm text-gray-600">
                      <strong>Jo role:</strong> Observer only—LOG and ALERT humans
                    </p>
                  </div>
                  <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Lock className="w-7 h-7 text-red-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-orange-200 hover:border-orange-300 transition-all hover:shadow-lg">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="inline-block bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                        High Risk
                      </span>
                      <span className="text-2xl font-bold text-gray-900">10-20% Autonomous</span>
                    </div>
                    <p className="text-gray-700 mb-1">Quality control, approvals, financial decisions</p>
                    <p className="text-sm text-gray-600">
                      <strong>Jo role:</strong> Recommend—human reviews and approves
                    </p>
                  </div>
                  <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="w-7 h-7 text-orange-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-yellow-200 hover:border-yellow-300 transition-all hover:shadow-lg">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="inline-block bg-yellow-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                        Medium Risk
                      </span>
                      <span className="text-2xl font-bold text-gray-900">50-70% Autonomous</span>
                    </div>
                    <p className="text-gray-700 mb-1">Data processing, reporting, routine operations</p>
                    <p className="text-sm text-gray-600">
                      <strong>Jo role:</strong> Execute—human spot-checks and monitors
                    </p>
                  </div>
                  <div className="w-14 h-14 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="w-7 h-7 text-yellow-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-200 hover:border-green-300 transition-all hover:shadow-lg">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="inline-block bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                        Low Risk
                      </span>
                      <span className="text-2xl font-bold text-gray-900">90% Autonomous</span>
                    </div>
                    <p className="text-gray-700 mb-1">Scheduling, notifications, data logging</p>
                    <p className="text-sm text-gray-600">
                      <strong>Jo role:</strong> Handle it—human reviews logs periodically
                    </p>
                  </div>
                  <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-7 h-7 text-green-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gradient Divider */}
      <div className="py-8 bg-gradient-to-r from-blue-50 via-purple-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="h-0.5 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 shadow-lg"></div>
        </div>
      </div>

      {/* Real Example */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-gray-900">
            Real Example: Food Processing Plant
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Mission: "Ensure product safety and quality for Batch #1247"
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-2 hover:border-red-200 transition-all hover:shadow-xl">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
                    <Lock className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-900 text-lg">Zero Autonomy</h4>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-red-600 mt-1 flex-shrink-0" />
                    Final batch approval → Human (FDA)
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-red-600 mt-1 flex-shrink-0" />
                    Allergen declaration → Human (liability)
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-red-600 mt-1 flex-shrink-0" />
                    Safety override → Human (OSHA)
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-orange-200 transition-all hover:shadow-xl">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                    <Shield className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-900 text-lg">Low Autonomy</h4>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-orange-600 mt-1 flex-shrink-0" />
                    Quality analysis → Jo analyzes, human approves
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-orange-600 mt-1 flex-shrink-0" />
                    Deviation investigation → Jo gathers, human decides
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-yellow-200 transition-all hover:shadow-xl">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-yellow-600 rounded-full flex items-center justify-center">
                    <BarChart3 className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-900 text-lg">Medium Autonomy</h4>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-yellow-600 mt-1 flex-shrink-0" />
                    Temperature monitoring → Jo adjusts within range
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-yellow-600 mt-1 flex-shrink-0" />
                    Inventory reordering → Jo orders if below threshold
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-green-200 transition-all hover:shadow-xl">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-900 text-lg">High Autonomy</h4>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                    Data logging → Fully automated
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                    Shift scheduling → Jo handles, human reviews
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gradient Divider */}
      <div className="py-8 bg-gradient-to-r from-blue-50 via-purple-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="h-0.5 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 shadow-lg"></div>
        </div>
      </div>

      {/* Deliverables */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-gray-900">What You Get</h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Comprehensive deliverables that transform how your organization allocates work
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {outputs.slice(0, 3).map((output, index) => (
              <Card
                key={index}
                className="relative overflow-hidden border-2 hover:border-blue-200 transition-all hover:shadow-xl"
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full -translate-y-10 translate-x-10 opacity-50"></div>
                <CardContent className="p-8 relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-2xl mb-6">
                    {index + 1}
                  </div>
                  <div className="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                    <output.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <p className="text-lg font-semibold text-gray-900">{output.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {outputs.slice(3).map((output, index) => (
              <Card
                key={index}
                className="relative overflow-hidden border-2 hover:border-blue-200 transition-all hover:shadow-xl"
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full -translate-y-10 translate-x-10 opacity-50"></div>
                <CardContent className="p-8 relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-2xl mb-6">
                    {index + 4}
                  </div>
                  <div className="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                    <output.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <p className="text-lg font-semibold text-gray-900">{output.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">Ready to Map Your Labor?</h2>
          <p className="text-lg sm:text-xl mb-8 opacity-95 max-w-3xl mx-auto leading-relaxed">
            Let us show you how Labor Map can transform your operations while keeping you compliant and in control.
          </p>
          <Button variant="secondary" size="lg" asChild className="h-12 px-8 text-base font-semibold">
            <Link href="https://calendly.com/myj0/30min" target="_blank" rel="noopener noreferrer">
              Schedule a Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
