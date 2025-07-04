from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import os
import time

# Setup WebDriver
driver = webdriver.Chrome()
wait = WebDriverWait(driver, 10)

# Ensure screenshots folder exists
os.makedirs('screenshots', exist_ok=True)

# === Test 1: Valid credentials ===
driver.get("https://the-internet.herokuapp.com/login")

username_input = wait.until(EC.presence_of_element_located((By.ID, "username")))
password_input = wait.until(EC.presence_of_element_located((By.ID, "password")))
login_button = wait.until(EC.element_to_be_clickable((By.CSS_SELECTOR, "button.radius")))

username_input.send_keys("tomsmith")
password_input.send_keys("SuperSecretPassword!")
login_button.click()

wait.until(EC.presence_of_element_located((By.CSS_SELECTOR, "div.flash.success")))
print("Valid login:", "You logged into a secure area!" in driver.page_source)

# Take screenshot after successful login
time.sleep(1)
driver.save_screenshot('screenshots/valid_login.png')

# === Test 2: Invalid credentials ===
driver.get("https://the-internet.herokuapp.com/login")

username_input = wait.until(EC.presence_of_element_located((By.ID, "username")))
password_input = wait.until(EC.presence_of_element_located((By.ID, "password")))
login_button = wait.until(EC.element_to_be_clickable((By.CSS_SELECTOR, "button.radius")))

username_input.send_keys("invalid_user")
password_input.send_keys("wrong_pass")
login_button.click()

error_message = wait.until(EC.presence_of_element_located((By.ID, "flash")))
print("Invalid login:", "Your username is invalid!" in error_message.text)

# Take screenshot after failed login
time.sleep(1)
driver.save_screenshot('screenshots/invalid_login.png')

# Close browser
driver.quit()