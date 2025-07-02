# Word Analysis
AI tools like GitHub Copilot reduce development time by quickly generating boilerplate and utility code. In this task, I asked Copilot to help write a Python function to sort a list of dictionaries by a specific key. Copilot suggested a function that uses sorted() and .get() to access keys safely. I also manually implemented a version using a lambda function with direct key access.

Functionally, both versions are very similar. However, the Copilot-generated function is slightly more robust—it uses .get() which prevents KeyError if the key doesn’t exist. This shows that Copilot embeds defensive coding patterns by default. The AI-written code is also well-formatted and readable.

In terms of speed, I wrote the manual function in under 2 minutes, but Copilot’s version was suggested instantly as I typed. This shows how Copilot accelerates repetitive or simple tasks. However, it may not always understand the deeper business logic, so reviewing and testing Copilot’s output is still essential.

In conclusion, Copilot was helpful in generating reliable code quickly, and the manual version confirmed my understanding. The AI version was slightly more efficient and production-safe.