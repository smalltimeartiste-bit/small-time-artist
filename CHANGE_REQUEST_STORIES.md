# Smalltime Artiste Website Change Stories

## Document Purpose
This document captures all requested website changes as delivery-ready user stories with acceptance criteria.

## Scope Summary
Requested change groups:
1. Hero image changes
2. Home responsiveness improvements [Done]
3. About page content update [Done]
4. Product page image update, section update, and content changes
5. Remove Bookish Mark and Pink Parade [Done]
6. Replace image background for one product
7. Global search
8. Blog pages (no CMS)
9. Featured product image changes

---

## Epic 1: Home Experience Upgrade

### Story 1.1: Hero Image Update
As a visitor,
I want the home hero image to reflect the latest brand visual,
so that the landing section feels fresh and aligned with current campaign needs.

#### Acceptance Criteria
1. Hero image is replaced on the home page using the approved asset.
2. Hero image alt text remains meaningful and accessible.
3. Open Graph and Twitter preview image references continue to work for sharing.
4. The updated hero image renders correctly on mobile, tablet, and desktop.
5. No layout break is introduced in the hero section after image replacement.

### Story 1.2: Home Responsiveness Enhancement
As a mobile and tablet user,
I want the home page to adapt smoothly across screen sizes,
so that content is readable and visually balanced on all devices.

#### Acceptance Criteria
1. Home page sections display correctly at common breakpoints (mobile, tablet, desktop).
2. Hero text, CTA, and image maintain clear hierarchy without overlap.
3. Spacing and paddings are responsive and consistent across sections.
4. Embedded social/iframe blocks do not overflow or break layout on small devices.
5. No horizontal scroll appears due to layout issues.

---

## Epic 2: Brand and About Content Refresh

### Story 2.1: About Content Update
As a prospective customer,
I want an updated and polished About narrative,
so that I can understand the artist's story, offerings, and credibility.

#### Acceptance Criteria
1. About page content is updated with the latest approved copy.
2. Grammar and readability are improved while preserving brand voice.
3. Existing structure and styling remain visually coherent after copy update.
4. Content remains responsive and readable on mobile devices.
5. All existing About page interactions (if any) continue to function.

#### Dependency
- Final approved copy is required before implementation lock.

---

## Epic 3: Product Catalog and Merchandising Updates

### Story 3.1: Product Page Image and Content Update
As a shopper,
I want updated product images and descriptions,
so that I can make better purchase decisions from accurate visuals and information.

#### Acceptance Criteria
1. Product images are updated for all selected products using approved assets.
2. Product content fields (title, description, pricing text where requested) are updated as provided.
3. Updated images load correctly and maintain quality and aspect behavior.
4. No broken image links appear in product listing, subcategory pages, or individual product pages.
5. Changes are visible in both category-level cards and individual product detail views where applicable.

### Story 3.2: Product Section Update
As a shopper,
I want product page sections to be arranged as intended,
so that the browsing flow feels clear and conversion-friendly.

#### Acceptance Criteria
1. Requested section-level updates are applied on product-related pages.
2. Section order and content blocks match the approved structure.
3. Visual consistency is preserved with existing design language.
4. Updated section structure is fully responsive.
5. No regression is introduced in breadcrumbs, navigation, or CTA behavior.

#### Dependency
- Section-level change list and final order must be explicitly approved.

### Story 3.3: Remove Two Categories (Bookish Mark and Pink Parade)
As a shopper,
I want unavailable categories removed,
so that I only see active and purchasable product areas.

#### Acceptance Criteria
1. Bookish Mark and Pink Parade are removed from product grids.
2. Both categories are removed from search suggestions and search indexing.
3. Category data is removed from active category registries.
4. Related decorative/grid assets are cleaned up if no longer used.
5. No route or import errors occur after removal.

### Story 3.4: Replace Background for One Product Image
As a shopper,
I want one specified product image to have an updated background,
so that the product presentation matches campaign direction.

#### Acceptance Criteria
1. Exactly one agreed product is updated with the new background treatment.
2. The updated visual appears correctly in all relevant views (listing/detail as scoped).
3. Background update does not reduce image clarity of the product subject.
4. No unintended background/style changes appear on other products.
5. Final output matches approved visual reference.

#### Dependency
- Either a pre-edited asset is provided, or implementation rules for per-product background styling are approved.

### Story 3.5: Featured Product Image Changes
As a shopper,
I want refreshed featured product visuals,
so that highlighted products remain current and engaging.

#### Acceptance Criteria
1. Featured product images are updated per approved list.
2. Images load correctly and do not break featured layout cards.
3. Featured links continue pointing to the correct product/category targets.
4. Performance remains acceptable with updated image assets.
5. No broken URLs remain in featured product configuration.

---

## Epic 4: Search Experience Improvements

### Story 4.1: Global Product Search Entry
As a user browsing any page,
I want to access product search globally,
so that I can quickly find products without first navigating to the products page.

#### Acceptance Criteria
1. A search entry point is available site-wide (for example, in top navigation).
2. Search query navigation routes users to the search results page.
3. Search continues to index all active product categories and products.
4. Removed categories (Bookish Mark, Pink Parade) do not appear in results.
5. Empty and no-result states are clear and user-friendly.

#### Scope Clarification
- Current approved scope is product-only global search (not About, Reviews, or Blog indexing).

---

## Epic 5: Blog Launch (No CMS)

### Story 5.1: Static Blog Listing and Detail Pages
As a visitor,
I want a blog section with readable posts,
so that I can discover stories, updates, and creative insights.

#### Acceptance Criteria
1. Blog listing page is added and accessible via route.
2. Blog detail page template is added and accessible via slug-based route.
3. Navigation includes a Blog link.
4. Blog content is driven by static files/data (no CMS dependency).
5. Initial launch includes 1 to 3 posts.
6. Blog pages are responsive and follow existing site look and feel.
7. Blog page metadata (title/description) is set for SEO basics.

#### Non-Goals
- No CMS/editor dashboard in this scope.
- No comments, auth, or advanced editorial workflow in this phase.

---

## Cross-Cutting Quality Criteria

### Functional Quality
1. All updated routes resolve without console or runtime errors.
2. Existing core pages (Home, About, Products, Reviews) continue to work.
3. Removed entities do not appear in navigation, search, or product grids.

### Responsive Quality
1. QA validation is completed on mobile, tablet, and desktop viewport widths.
2. There is no unintended horizontal overflow.
3. Typography remains readable after content updates.

### Content and Asset Quality
1. All image updates use approved final assets.
2. No broken image links remain after deployment.
3. Copy changes use approved content version.

---

## Open Inputs Needed Before Final Freeze
1. Final approved About copy.
2. Final list of product section-level structural changes.
3. Final assets pending for hero, featured, and product-level replacements.
4. Exact product selection and visual reference for background replacement.
5. Final blog post content package (1 to 3 posts).

---

## Definition of Done
1. All stories marked complete meet their acceptance criteria.
2. Manual QA is passed for key routes and responsive behavior.
3. No critical regressions are introduced in navigation, search, or product browsing.
4. Stakeholder review confirms content and visual updates are as approved.


---

## Required Files and Assets
Perfect. Here is a clean client checklist you can send.

## Required Files and Content from Client

### 1. Brand and Visual Assets
1. Final hero image file
2. Featured product replacement images (all selected items)
3. Product image replacement files (category page and product detail page)
4. One product image with updated background (final edited file)
5. Blog thumbnail images for 1 to 3 posts

### 2. About Page Content
1. Final approved About text (single final version)
2. Any updated headings/subheadings
3. Collaboration/contact section wording updates (if needed)

### 3. Product Content Updates
1. Final list of products to update
2. Updated product names (if changing)
3. Updated descriptions for each product
4. Updated price text for each product
5. Final section order/structure changes for product pages
6. Confirmation to remove categories:
- Bookish Mark
- Pink Parade

### 4. Featured Products Section
1. Final list of products to be featured
2. Image for each featured card
3. Target link for each featured card (if changed)

### 5. Global Search Inputs
1. Confirmation that search should include products only - [Confirmed]
2. Final approved searchable names for categories/products

### 6. Blog (No CMS)
1. Number of launch posts (1 to 3)
2. For each post:
- Title
- Short excerpt
- Full content
- Author name
- Publish date
- Category/tag
- Thumbnail image
- URL slug (if client has preference) [e.g. smalltimeartiste.in/blog/creating-art] 

### 7. Instagram Section (Important)
1. Confirmation of preferred approach:
- Custom feed cards (recommended, full control on mobile)
- Instagram iframe/embed (tentative behavior from Instagram side)
2. Instagram profile URL to link
3. If custom API feed is used:
- INSTAGRAM_USER_ID
- INSTAGRAM_ACCESS_TOKEN

## Recommended File Submission Format (to avoid delays)
1. Images: PNG/JPG/WebP in labeled folders
2. Copy: Google Doc or Word file with page-wise sections
3. Product updates: Excel/Google Sheet with columns:
- Category
- Product name
- Description
- Price
- Image filename
- Notes
4. Blog: one document per post, or one sheet with separate tabs