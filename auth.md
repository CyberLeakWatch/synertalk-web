# Auth.md - Synertalk Agent Registration Protocol

This document describes authentication requirements and registration instructions for AI agents interacting with Synertalk Cyber Defense services under the Auth.md specification.

## Agent Registration Protocol

AI agents can register automatically using the client_credentials flow.

### Endpoints
- **register_uri:** `https://web.synertalk.com/api/register`
- **Registration URL:** `https://web.synertalk.com/api/register`
- **token_endpoint:** `https://web.synertalk.com/oauth/token`
- **claim_url:** `https://web.synertalk.com/api/claim`
- **revocation_url:** `https://web.synertalk.com/api/revoke`
- **supported_identity_types:** `["agent", "model", "service_account"]`
- **credential_types:** `["api_key", "bearer_token", "jwt"]`
- **scopes_supported:** `["audit:read", "forensics:read", "preservation:create"]`
- **contact:** `auditorias@synertalk.com`

### Registration Request Payload
```json
{
  "client_name": "Synertalk AI Agent Client",
  "redirect_uris": ["https://web.synertalk.com/callback"],
  "grant_types": ["client_credentials"],
  "response_types": ["token"],
  "scope": "audit:read forensics:read"
}
```

### Public Discovery
No registration is needed for public LLM files (`/llms.txt`, `/llms-full.txt`, `/sitemap.xml`, `/.well-known/mcp/server-card.json`).
