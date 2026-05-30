## 2025-05-14 - Hardcoded Obfuscated API Keys
**Vulnerability:** Hardcoded API keys for multiple OSINT services (VirusTotal, UserStack, etc.) were found in `src/secret.js`, obfuscated using hex-encoded string arrays and a sampling function.
**Learning:** Obfuscation (like hex encoding) is not a substitute for security. These keys were easily recoverable via simple Node.js execution. The file was also explicitly ignored in `.eslintrc.json` and `package.json`, which is a red flag for hidden vulnerabilities.
**Prevention:** Always use environment variables or a dedicated secret management system for API keys. Never commit secrets to the repository, even if obfuscated. Ensure that all source files are included in linting and security scanning processes.
