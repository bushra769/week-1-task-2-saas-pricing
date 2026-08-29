import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="min-h-screen px-6 py-12">

    <!-- Header -->
    <div class="mx-auto max-w-3xl text-center">
      <p class="mb-3 font-semibold text-purple-600">
        SIMPLE PRICING
      </p>

      <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
        Choose the perfect plan
      </h1>

      <p class="mt-4 text-lg text-gray-600">
        Simple and transparent pricing for teams of every size.
      </p>
    </div>

    <!-- Pricing Cards -->
    <div class="mx-auto mt-12 grid max-w-6xl gap-8 md:grid-cols-3">

      <!-- Starter -->
      <div class="flex flex-col rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-200 transition duration-300 hover:-translate-y-2 hover:shadow-2xl">

        <h2 class="text-2xl font-bold text-gray-900">
          Starter
        </h2>

        <p class="mt-3 text-gray-600">
          Perfect for individuals and small projects.
        </p>

        <div class="mt-6">
          <span class="text-5xl font-bold text-gray-900">$9</span>
          <span class="text-gray-500">/month</span>
        </div>

        <button class="mt-8 rounded-lg border border-purple-600 px-5 py-3 font-semibold text-purple-600 transition hover:bg-purple-600 hover:text-white">
          Get Started
        </button>

        <ul class="mt-8 space-y-4 text-gray-700">
          <li>✓ 5 Projects</li>
          <li>✓ 10 GB Storage</li>
          <li>✓ Basic Analytics</li>
          <li>✓ Email Support</li>
        </ul>
      </div>

      <!-- Pro -->
      <div class="relative flex flex-col rounded-2xl bg-purple-600 p-8 text-white shadow-2xl transition duration-300 hover:-translate-y-2">

        <div class="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-pink-500 px-4 py-1 text-sm font-bold">
          MOST POPULAR
        </div>

        <h2 class="text-2xl font-bold">
          Pro
        </h2>

        <p class="mt-3 text-purple-100">
          Best for growing teams and businesses.
        </p>

        <div class="mt-6">
          <span class="text-5xl font-bold">$29</span>
          <span class="text-purple-100">/month</span>
        </div>

        <button class="mt-8 rounded-lg bg-white px-5 py-3 font-semibold text-purple-600 transition hover:bg-pink-100">
          Get Started
        </button>

        <ul class="mt-8 space-y-4 text-purple-50">
          <li>✓ Unlimited Projects</li>
          <li>✓ 100 GB Storage</li>
          <li>✓ Advanced Analytics</li>
          <li>✓ Priority Support</li>
          <li>✓ Team Collaboration</li>
        </ul>
      </div>

      <!-- Enterprise -->
      <div class="flex flex-col rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-200 transition duration-300 hover:-translate-y-2 hover:shadow-2xl">

        <h2 class="text-2xl font-bold text-gray-900">
          Enterprise
        </h2>

        <p class="mt-3 text-gray-600">
          Powerful features for large organizations.
        </p>

        <div class="mt-6">
          <span class="text-5xl font-bold text-gray-900">$79</span>
          <span class="text-gray-500">/month</span>
        </div>

        <button class="mt-8 rounded-lg border border-purple-600 px-5 py-3 font-semibold text-purple-600 transition hover:bg-purple-600 hover:text-white">
          Get Started
        </button>

        <ul class="mt-8 space-y-4 text-gray-700">
          <li>✓ Unlimited Projects</li>
          <li>✓ 1 TB Storage</li>
          <li>✓ Advanced Analytics</li>
          <li>✓ 24/7 Support</li>
          <li>✓ Dedicated Account Manager</li>
        </ul>
      </div>

    </div>

    <!-- Footer -->
    <p class="mt-12 text-center text-sm text-gray-500">
      All plans include a 14-day free trial. No credit card required.
    </p>

  </div>
`