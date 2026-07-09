#!/usr/bin/env python3
"""
GitHub Repository Visibility Manager
Automatically sets selected repositories to private and keeps curated repos public.
"""

import os
import sys
import requests
from typing import List, Dict

# Configuration
GITHUB_TOKEN = os.getenv("GITHUB_TOKEN", "")
GITHUB_USERNAME = "rintuchowdory"
API_BASE = "https://api.github.com"

# Repositories to keep PUBLIC (portfolio showcases)
PUBLIC_REPOS = {
    "my-expert-portfolio",
    "my-portfolio",
    "freelancer-toolkit-germany",
    "deutschland-alltagskosten",
    "Green-Balance-Klima-Wirtschaft-im-Gleichgewicht",
    "grundgesetz-gpt",
    "devops-portfolio-website",
    "Build-CLI",
    "claude-code",
    "free-pdf-merger",
    "openclow-portfolio",
    "n8n",
    "ARMBoost",
    "crm-dashboard-project",
    "enterprise-mono",
    "saas-portfolio",
    "germany-people-finder",
    "project-connector",
}

# Headers for API requests
HEADERS = {
    "Authorization": f"token {GITHUB_TOKEN}",
    "Accept": "application/vnd.github.v3+json",
}


def get_all_repos() -> List[Dict]:
    """Fetch all repositories for the user."""
    repos = []
    page = 1
    
    print("📦 Fetching all repositories...")
    
    while True:
        url = f"{API_BASE}/user/repos?page={page}&per_page=100"
        response = requests.get(url, headers=HEADERS)
        
        if response.status_code != 200:
            print(f"❌ Error fetching repos: {response.status_code}")
            print(response.text)
            sys.exit(1)
        
        data = response.json()
        if not data:
            break
        
        repos.extend(data)
        page += 1
    
    print(f"✅ Found {len(repos)} repositories\n")
    return repos


def update_repo_visibility(repo_name: str, private: bool) -> bool:
    """Update repository visibility."""
    url = f"{API_BASE}/repos/{GITHUB_USERNAME}/{repo_name}"
    payload = {"private": private}
    
    response = requests.patch(url, json=payload, headers=HEADERS)
    
    if response.status_code != 200:
        print(f"  ❌ Failed to update {repo_name}: {response.status_code}")
        return False
    
    status = "🔒 PRIVATE" if private else "🌐 PUBLIC"
    print(f"  ✅ {repo_name}: {status}")
    return True


def main():
    """Main function."""
    
    if not GITHUB_TOKEN:
        print("❌ Error: GITHUB_TOKEN environment variable not set")
        print("\nTo get your token:")
        print("1. Go to: https://github.com/settings/tokens")
        print("2. Click 'Generate new token (classic)'")
        print("3. Give it 'repo' scope")
        print("4. Copy the token and run:")
        print("   export GITHUB_TOKEN='your_token_here'")
        print("   python manage-repos-visibility.py")
        sys.exit(1)
    
    # Fetch all repos
    repos = get_all_repos()
    
    # Categorize repos
    repos_to_keep_public = []
    repos_to_make_private = []
    
    for repo in repos:
        repo_name = repo["name"]
        is_fork = repo.get("fork", False)
        
        if is_fork:
            repos_to_make_private.append(repo_name)
        elif repo_name in PUBLIC_REPOS:
            repos_to_keep_public.append(repo_name)
        else:
            repos_to_make_private.append(repo_name)
    
    # Display summary
    print("=" * 60)
    print("📊 REPOSITORY VISIBILITY MANAGEMENT SUMMARY")
    print("=" * 60)
    print(f"\n🌐 Keeping PUBLIC ({len(repos_to_keep_public)}):")
    for repo in sorted(repos_to_keep_public):
        print(f"   • {repo}")
    
    print(f"\n🔒 Making PRIVATE ({len(repos_to_make_private)}):")
    for repo in sorted(repos_to_make_private):
        print(f"   • {repo}")
    
    print("\n" + "=" * 60)
    
    # Confirm action
    response = input("\n⚠️  Continue with these changes? (yes/no): ").strip().lower()
    
    if response not in ["yes", "y"]:
        print("❌ Operation cancelled")
        sys.exit(0)
    
    print("\n" + "=" * 60)
    print("🚀 UPDATING REPOSITORIES...")
    print("=" * 60 + "\n")
    
    # Update repos
    success_count = 0
    failed_count = 0
    
    # Keep public
    if repos_to_keep_public:
        print("Making PUBLIC:\n")
        for repo in sorted(repos_to_keep_public):
            if update_repo_visibility(repo, private=False):
                success_count += 1
            else:
                failed_count += 1
        print()
    
    # Make private
    if repos_to_make_private:
        print("Making PRIVATE:\n")
        for repo in sorted(repos_to_make_private):
            if update_repo_visibility(repo, private=True):
                success_count += 1
            else:
                failed_count += 1
        print()
    
    # Summary
    print("=" * 60)
    print("📈 OPERATION COMPLETE")
    print("=" * 60)
    print(f"✅ Successful: {success_count}")
    print(f"❌ Failed: {failed_count}")
    print(f"📊 Total: {success_count + failed_count}/{len(repos)}")
    print("=" * 60)


if __name__ == "__main__":
    main()
