import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
   const url = "http://localhost:5173/";

   if (!url) {
      throw new Error("VITE_APP_URL environment variable is not defined");
   }

   await page.goto(url);

   // Expect a title "to contain" a substring.
   await expect(page).toHaveTitle(/Qubic Bridge/);
});
