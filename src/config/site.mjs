// Donations arrive on Giveth in US dollars, but the cost of the house is in euros.
// Franco reported $600 for November 2026 as of Nov 24 (Nov 13: $190; October 2026: $1).
const DONATED_USD = 600;
// European Central Bank euro foreign exchange reference rate: US dollars per euro.
const USD_PER_EUR = 1.0939;
const EXCHANGE_RATE_DATE = "2026-11-23";
// Exact conversion, kept to the cent. The page shows it rounded to the euro.
const DONATED_EUR = Math.round((DONATED_USD / USD_PER_EUR) * 100) / 100;

export const SITE = {
  title: "Giveth House: A Home for Web3 Builders and Communities",
  description:
    "A community home in Barcelona for Web3 builders and communities. Stay, cowork and meet. No fixed prices, open since 2017.",
  defaultLanguage: "en",
  url: "https://giveth.house",
  author: "Giveth House",
  ogImage: "/og-image.png", // Add this image to your public folder
  houseHandle: "@Giveth_House",
  houseTelegram: "https://t.me/Giveth_House",
  neighborhood: "Sants, Barcelona",
  givethDonation: "https://giveth.io/project/giveth-house",
  // Base monthly cost of running the house, in euros (confirmed by Franco).
  // Covers rent, utilities (water, electricity, internet) and cleaning.
  monthlyCost: 3800,
  // Donations received so far this month, converted to euros so that every
  // figure on the site is in the same currency as the cost. See the
  // conversion constants above: update the dollars and the rate each month.
  monthlyDonated: DONATED_EUR,
  // The original figure and the rate behind it, for transparency.
  monthlyDonatedUsd: DONATED_USD,
  usdPerEur: USD_PER_EUR,
  exchangeRateDate: EXCHANGE_RATE_DATE,
};
