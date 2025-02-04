# leWeb

![Project Logo](leWeb-logo.webp)
![Project Logo](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*3-0EDzE63S_UZx2KbIz_dg.png)

## Table of Contents

- [Introduction](#introduction)
- [Git Workflow](#git-workflow)
  - [Git Flow](#git-flow)
  - [Branch Naming Conventions](#branch-naming-conventions)
- [Pull Request Guidelines](#pull-request-guidelines)
  - [Creating a Pull Request](#creating-a-pull-request)
  - [Reviewing a Pull Request](#reviewing-a-pull-request)
- [Commit Message Guidelines](#commit-message-guidelines)
  - [Commit Message Structure](#commit-message-structure)
  - [Examples](#examples)
- [Code Review Guidelines](#code-review-guidelines)
- [Contributing](#contributing)
- [License](#license)

## Intro

Detta dokument beskriver rutiner för GitFlow, PRs, commit-meddelanden för att säkerställa att vårt team får en en effektiv och ren utvecklingsprocess.

## Git Workflow

### Git Flow

We follow the **Git Flow** workflow to manage our branches and releases. Here's a brief overview:

- **`main`**: The main branch contains the production-ready code.
- **`develop`**: The develop branch is where all the latest changes are integrated.
- **Feature Branches**: Feature branches are created from the develop branch.
  Do not merge directly into develop. Instead, create a pull request (PR) to propose changes.
  Once the feature is complete and the PR is approved, it will be merged into develop.
- **Release Branches**: Release branches are created from `develop` when we are preparing for a new release. Once the release is ready, it is merged into `main` and `develop`.
- **Hotfix Branches**: Hotfix branches are created from `main` to quickly fix production issues. Once the hotfix is complete, it is merged into `main` and `develop`.

### Branch Naming Conventions

- **Feature Branches**: `feature/feature-name`
- **Bugfix Branches**: `bugfix/bug-name`
- **Release Branches**: `release/version-number`
- **Hotfix Branches**: `hotfix/issue-name`

## Pull Request Guidelines

### Creating a Pull Request

1. **Branch**: Ensure your branch is up-to-date with `develop` before creating a pull request.
   git checkout develop
   git pull origin develop
   git checkout feature/your-feature-branch
   git merge develop
2. **Title**: Use a clear and descriptive title for your pull request (e.g., feat(api): add user authentication endpoint).
3. **Description**: Provide a detailed description of the changes, including the purpose of the pull request and any related issues.
4. **Reviewers**: Assign at least one or two reviewer to the pull request. These should be team members familiar with the codebase.
5. **Labels**: Add appropriate labels (e.g., `bug`, `enhancement`, `documentation`).

### Reviewing a Pull Request

1. **Code Review**: Review the code for quality, readability, and adherence to coding standards.
2. **Testing**: Ensure that the changes have been tested and do not introduce new bugs.
3. **Comments**: Provide constructive feedback and request changes if necessary.
4. **Approval**: Once the pull request meets all criteria, approve it and merge it into the target branch.

Who Resolves Pull Requests?
Primary Reviewer: At least one designated reviewer must approve the PR.

Team Collaboration: If the PR affects multiple areas of the codebase, it’s a good idea to involve additional team members for review.

Merge Responsibility: The person who created the PR or the primary reviewer can merge the PR after approval.

## Commit Message Guidelines

### Commit Message Structure

We follow the **Conventional Commits** specification for commit messages. Each commit message should be structured as follows:

releases eg. 0.0.1
