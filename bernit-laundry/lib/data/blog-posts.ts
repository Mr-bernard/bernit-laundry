export type BlogCategory =
  | "Laundry Tips"
  | "Fabric Care"
  | "Stain Removal"
  | "Company News"
  | "Promotions";

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: BlogCategory;
  date: string;
  readTime: string;
  body: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "sort-smarter-not-harder",
    title: "Sort Smarter, Not Harder: A Better Way to Separate Your Laundry",
    excerpt:
      "Most laundry damage happens before the wash even starts. Here's the sorting system our facility uses on every incoming order.",
    category: "Laundry Tips",
    date: "2026-06-02",
    readTime: "4 min read",
    body: [
      "Most of the damage done to clothing during laundering happens in the thirty seconds before the wash cycle even starts. Colours bleed onto light fabrics, zippers snag delicate knits, and heavy items like jeans agitate against softer pieces until seams give way. Good sorting isn't fussy — it's the single highest-leverage step in the whole process.",
      "Start with colour, not just 'darks and lights'. A navy shirt behaves differently from a deep red one even though both count as 'dark', because dye stability varies by pigment. When in doubt, a first wash on its own is worth the extra load, especially for new, heavily saturated garments.",
      "Next, sort by weight and texture. Heavy items like towels and denim create friction that can pill or fray lighter fabrics such as silk blends or performance knits. Keeping similar weights together also means the load dries more evenly, since heavier items hold moisture longer.",
      "Finally, check pockets and fastenings before anything goes in. Loose coins and forgotten tissues cause the bulk of accidental damage we see in first-time customer bags, and open zippers or hooks are a common cause of snags on neighbouring garments. It takes twenty seconds and prevents most of the laundry mishaps people assume are just bad luck.",
      "We apply this same sorting discipline at our facility on every order that comes through, on top of the fabric-specific handling each item already receives during intake.",
    ],
  },
  {
    slug: "reading-your-care-label",
    title: "What Your Care Label Is Actually Telling You",
    excerpt:
      "Those small symbols inside the collar aren't decoration — they're a compact spec sheet for how a fabric wants to be treated.",
    category: "Fabric Care",
    date: "2026-05-20",
    readTime: "5 min read",
    body: [
      "Care labels look cryptic, but each symbol maps to a specific limit: maximum wash temperature, whether the fabric can tolerate a tumble dryer, and how much heat an iron can safely apply. Learning the four or five symbols that appear most often removes most of the guesswork from home laundering.",
      "The washtub icon with a number inside sets the maximum water temperature in Celsius, not a suggestion for the ideal one — cooler is generally safer if you're unsure. A crossed-out tub means the item should never be machine washed at all, which usually points to a fabric relying on structure that agitation would break down.",
      "The circle inside a square refers to tumble drying, with dots indicating heat level rather than time. No dots, or a crossed-out circle, both signal that heat exposure — not just spinning — is the risk, and air drying is the safer path.",
      "The iron symbol's dots work the same way, mapping to low, medium and high heat settings. A crossed-out iron isn't just caution, it usually means the fabric has a finish, coating or synthetic content that will visibly melt or glaze under direct heat.",
      "When a label is faded or missing, our intake team defaults to the most conservative setting the fabric composition allows, which is why an unlabeled cashmere jumper and an unlabeled cotton tee are never processed the same way even without a tag to guide it.",
    ],
  },
  {
    slug: "the-first-five-minutes-matter",
    title: "The First Five Minutes Matter Most for Stain Removal",
    excerpt:
      "The single biggest factor in whether a stain comes out isn't the product you use — it's how long it's been sitting.",
    category: "Stain Removal",
    date: "2026-05-08",
    readTime: "6 min read",
    body: [
      "Stain chemistry has a clock built into it. Fresh spills sit on top of a fabric's fibres, while older ones oxidise, bond to the fibre, or get set permanently by heat — including the heat from a tumble dryer, which is why drying a stained item before it's fully treated is one of the most common ways to make it permanent.",
      "For fresh spills, the first move is almost always to blot, never rub. Rubbing pushes the stain deeper into the weave and spreads it outward, while blotting from the outside in lifts as much of it back off the surface as possible before it has a chance to set.",
      "Different stains respond to different chemistry, which is why a single 'miracle' stain remover rarely works on everything. Protein-based stains like blood or dairy respond to cool water and enzymes, but hot water can cook the protein directly into the fibre. Oil-based stains need a surfactant to break the bond, and tannin stains like coffee or wine respond best to a targeted pre-treatment before any water touches them at all.",
      "This is also why we ask customers to flag stains and their rough cause at drop-off rather than leave it to guesswork — a coffee stain and a foundation-makeup stain can look nearly identical on light fabric but need opposite first treatments.",
      "If you're ever unsure, cool water and time are safer defaults than heat and force. A stain that hasn't fully lifted after gentle treatment still has options at the facility; one that's been heat-set usually doesn't.",
    ],
  },
  {
    slug: "solar-powered-facility-live",
    title: "Our Facility Is Now Fully Solar-Powered",
    excerpt:
      "Bernit Laundry's processing facility now runs on an on-site solar energy system — here's what that means for turnaround times and reliability.",
    category: "Company News",
    date: "2026-04-14",
    readTime: "3 min read",
    body: [
      "We're glad to share that our processing facility now runs on an on-site solar energy system, backed by battery storage sized to keep every stage of processing running through a full grid outage.",
      "The immediate customer-facing benefit is turnaround reliability. Unplanned power cuts used to be the single biggest cause of delayed orders industry-wide; with generation and storage on site, washing, drying and ironing schedules no longer depend on grid stability.",
      "There's an environmental case here too. Running high-capacity washing and drying equipment on renewable generation meaningfully reduces the carbon footprint of every order, alongside the water-efficient machines we already run across the facility.",
      "This is a foundation, not a finish line — we're continuing to expand storage capacity as order volume grows, and will share updates here as the next phase rolls out.",
    ],
  },
  {
    slug: "founding-member-rates",
    title: "Founding Member Rates: Lock In Subscription Pricing Early",
    excerpt:
      "The first cohort of monthly subscribers keeps their introductory rate for as long as the subscription stays active — here's how it works.",
    category: "Promotions",
    date: "2026-04-01",
    readTime: "2 min read",
    body: [
      "Customers who start a monthly laundry subscription during our founding period keep their introductory rate for as long as the subscription remains active without a gap, even as standard subscription pricing increases with the service.",
      "There's no minimum commitment term. You can pause a subscription between billing cycles for scheduling reasons and resume it without losing the locked-in rate, provided it's reactivated within the grace window shown in your dashboard.",
      "Referral credits stack with the founding rate as well, so subscribers who bring in friends or family reduce their effective monthly cost further on top of the already-locked pricing.",
      "This offer is scoped to the early cohort while we build out capacity in new coverage zones, and will close once that cohort is full — current subscribers keep their rate regardless of when the offer ends for new sign-ups.",
    ],
  },
];
