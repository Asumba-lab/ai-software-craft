from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
import time

driver = webdriver.Chrome()

driver.get("https://example.com/login")

# Test 1: Valid credentials
driver.find_element(By.NAME, "username").send_keys("valid_user")
driver.find_element(By.NAME, "password").send_keys("valid_pass")
driver.find_element(By.ID, "login-button").click()
time.sleep(2)

print("Valid login:", "Dashboard" in driver.page_source)

# Test 2: Invalid credentials
driver.get("https://example.com/login")
driver.find_element(By.NAME, "username").send_keys("invalid_user")
driver.find_element(By.NAME, "password").send_keys("wrong_pass")
driver.find_element(By.ID, "login-button").click()
time.sleep(2)

print("Invalid login:", "Invalid username or password" in driver.page_source)

driver.quit()