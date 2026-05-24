# E-Commerce Platform Options for PingPro

## Current Setup: GitHub Pages + Static HTML

**Pros**: Free hosting, fast, full control, already live
**Cons**: No backend, can't process orders natively, no CMS

**Extend with**:
- Stripe Checkout (hosted payment pages — no backend needed)
- Formspree for contact form
- Snipcart or Stripe Payment Links for product purchases

## Platform Comparison

### Option A: Stay on GitHub Pages + Stripe (RECOMMENDED for Phase 1–2)

```
GitHub Pages (free) → Stripe Checkout → Order email notification
```

- Cost: $0/month (Stripe takes 2.9% + $0.30 per transaction)
- Add product pages as static HTML
- "Buy Now" button → Stripe hosted checkout → confirmation
- You get email when order placed
- Manage orders in Stripe Dashboard
- Pros: Zero monthly cost, full design control, already set up
- Cons: Manual order management, no inventory tracking, limited to ~20 products comfortably

### Option B: Shopify Basic ($39/month)

- Cost: $39/month + 2.9% + $0.30 per transaction
- Full e-commerce: cart, inventory, shipping labels, tax
- Themes available, but less custom than hand-coded
- Apps ecosystem (reviews, email, abandoned cart)
- Pros: Professional, scalable, all-in-one
- Cons: Monthly cost before revenue, template constraints, harder to do custom blade finder

**Switch to Shopify when**: >30 orders/month, need inventory management, want automated shipping

### Option C: WooCommerce (WordPress)

- Cost: $10–$30/month hosting + free WooCommerce plugin
- Full control, unlimited customization
- Many TT stores use this (TableTennisStore, etc.)
- Pros: Flexible, one-time theme cost, plugins for everything
- Cons: Maintenance burden, security updates, slower than static

### Option D: Squarespace Commerce ($33/month)

- Nice templates, built-in e-commerce
- Less flexible than Shopify for product variants
- Good for content-heavy sites (blog + shop)
- Pros: Beautiful designs, easy content management
- Cons: Less e-commerce depth than Shopify

## Recommended Migration Path

```
Phase 1: GitHub Pages + Stripe Checkout + Formspree (FREE)
    ↓ (when hitting 20+ orders/month)
Phase 2: Shopify OR custom Next.js + Stripe (keep blade finder)
    ↓ (when hitting 100+ orders/month)
Phase 3: Shopify Plus OR headless commerce
```

## Payment Processing Options

| Provider | Rate | Features | Best For |
|----------|------|----------|----------|
| Stripe | 2.9% + $0.30 | Checkout hosted pages, Payment Links | Starting out |
| PayPal | 2.99% + $0.49 | Buyer trust, international | Add as option |
| Square | 2.9% + $0.30 | Good for in-person + online | If selling at clubs |
| Shopify Payments | 2.9% + $0.30 | Integrated with Shopify | If on Shopify |

## Stripe Checkout Implementation (For GitHub Pages)

### How it works:
1. Create products in Stripe Dashboard
2. Generate "Payment Link" for each product
3. Add "Buy Now" button on product page → links to Stripe hosted checkout
4. Customer pays on Stripe's page (handles tax, shipping address)
5. Stripe emails you the order details
6. You fulfill manually

### Code snippet for product page:
```html
<a href="https://buy.stripe.com/your_payment_link_id" 
   class="btn btn-primary">
   Buy Now — $85
</a>
```

Zero backend. Zero server. Works on GitHub Pages today.

## Shipping Solutions

| Service | Best For | Cost |
|---------|----------|------|
| USPS First Class | Blades (under 1 lb) | $4–$6 |
| USPS Priority | Fast delivery | $8–$12 |
| Pirate Ship | Discounted USPS/UPS rates | Free account, pay per label |
| Shippo | Multi-carrier comparison | Free tier available |
| ShipStation | High volume automation | $25/month+ |

Blades weigh 80–95g (3.5 oz) — USPS First Class Package is perfect.
With bubble mailer: total weight ~6 oz = $4–$5 shipping cost to you.
Charge customer $5 flat rate or free over $75.
