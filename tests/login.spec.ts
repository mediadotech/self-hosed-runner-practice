import { test } from "@playwright/test";
import dotenv from "dotenv";

dotenv.config();

test("ログイン", async ({ page }) => {
  await page.goto("https://task-flow.mediadotech.com/login");
  await page
    .getByRole("textbox", { name: "ユーザーネーム" })
    .fill(process.env.USERNAME!);
  await page
    .getByRole("textbox", { name: "パスワード" })
    .fill(process.env.PASSWORD!);
  await page.getByRole("button", { name: "ログイン" }).click();
  await page.waitForURL("https://task-flow.mediadotech.com/");
});
