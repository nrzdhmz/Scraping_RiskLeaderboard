from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import csv, time, random

def run_scraper():
    options = Options()
    options.add_argument("--headless=new")  
    options.add_argument("--no-sandbox")
    options.add_argument("--disable-dev-shm-usage")
    options.add_argument("--window-size=1920,1080")
    options.add_argument("--disable-blink-features=AutomationControlled")
    options.add_argument(
        "user-agent=Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
        "AppleWebKit/537.36 (KHTML, like Gecko) "
        "Chrome/120.0.0.0 Safari/537.36"
    )

    driver = webdriver.Chrome(options=options)

    # mask webdriver flag
    driver.execute_cdp_cmd("Page.addScriptToEvaluateOnNewDocument", {
        "source": "Object.defineProperty(navigator, 'webdriver', {get: () => undefined})"
    })

    driver.get("https://www.hasbrorisk.com/en/leaderboard/2/1/rankPoints")
    wait = WebDriverWait(driver, 10)

    with open("frontend/public/leaderboard.csv", "w", newline="", encoding="utf-8") as f:
        writer = csv.writer(f)
        writer.writerow(["Rank", "Player", "Profile_Link", "Stat", "Image_URL"])

        page_number = 1
        while True:
            print(f"Scraping page {page_number}...")

            rows = wait.until(EC.presence_of_all_elements_located((By.CSS_SELECTOR, "tbody tr")))

            for row in rows:
                cols = row.find_elements(By.TAG_NAME, "td")
                if len(cols) >= 3:
                    rank = cols[0].text.strip()
                    player_element = cols[1].find_element(By.TAG_NAME, "a")
                    player_name = player_element.text.strip()
                    profile_link = player_element.get_attribute("href")
                    stat = cols[2].text.strip()

                    try:
                        img = cols[1].find_element(By.TAG_NAME, "img").get_attribute("src")
                    except:
                        img = ""

                    writer.writerow([rank, player_name, profile_link, stat, img])

            # scroll
            last_height = driver.execute_script("return document.body.scrollHeight")
            for i in range(0, last_height, 400):
                driver.execute_script(f"window.scrollTo(0, {i});")
                time.sleep(random.uniform(0.2, 0.6))

            time.sleep(random.uniform(1, 3))

            try:
                next_button = wait.until(EC.element_to_be_clickable((By.XPATH, "//a[normalize-space()='Next']")))
                if "disabled" in next_button.get_attribute("class"):
                    break
                next_button.click()
                wait.until(EC.staleness_of(rows[0]))
                time.sleep(random.uniform(2, 5))
                page_number += 1
            except:
                print("No more pages.")
                break

    driver.quit()
    print("Finished scraping all pages")


if __name__ == "__main__":
    run_scraper()
