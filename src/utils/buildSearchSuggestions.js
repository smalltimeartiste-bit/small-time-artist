/**
 * buildSearchSuggestions.js
 *
 * Builds the autocomplete suggestions array from the category JSON files.
 * Each product and category entry includes its tags, so the search bar
 * can match on product/category names AND on search tags added to the JSONs.
 *
 * To add a new category: import the JSON and add an entry to CATEGORIES below.
 * Product tags are picked up automatically from each JSON's product.tags field.
 */

import aLittleExtra from "../data/products/categories/a-little-extra.json";
import frameYourPhone from "../data/products/categories/frame-your-phone.json";
import holdItPretty from "../data/products/categories/hold-it-pretty.json";
import museAndMemo from "../data/products/categories/muse-and-memo.json";
import nestledNook from "../data/products/categories/nestled-nook.json";
import oldSoulKitchen from "../data/products/categories/old-soul-kitchen.json";
import paperWhispers from "../data/products/categories/paper-whispers.json";
import theGoghEdit from "../data/products/categories/the-gogh-edit.json";
import timelessTreasures from "../data/products/categories/timeless-treasures.json";
import wearableWhimpsy from "../data/products/categories/wearable-whimpsy.json";

const CATEGORIES = [
  { slug: "frame-your-phone", data: frameYourPhone },
  { slug: "timeless-treasures", data: timelessTreasures },
  { slug: "paper-whispers", data: paperWhispers },
  { slug: "old-soul-kitchen", data: oldSoulKitchen },
  { slug: "the-gogh-edit", data: theGoghEdit },
  { slug: "nestled-nook", data: nestledNook },
  { slug: "muse-and-memo", data: museAndMemo },
  { slug: "wearable-whimpsy", data: wearableWhimpsy },
  { slug: "a-little-extra", data: aLittleExtra },
  { slug: "hold-it-pretty", data: holdItPretty },
];

const ALL_SUGGESTIONS = [];

for (const { slug, data } of CATEGORIES) {
  // One suggestion per category (matchable by name + category-level tags)
  ALL_SUGGESTIONS.push({
    type: "category",
    name: data.label,
    slug,
    tags: data.tags || [],
  });

  // One suggestion per product (matchable by name + product-level tags)
  for (const product of data.products || []) {
    ALL_SUGGESTIONS.push({
      type: "product",
      name: product.name,
      categorySlug: slug,
      productSlug: product.url,
      categoryName: data.label,
      tags: product.tags || [],
    });
  }
}

export default ALL_SUGGESTIONS;
